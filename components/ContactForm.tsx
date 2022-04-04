import React, { useState } from 'react'

interface TempErrorsTypes {
  fullname?: boolean
  email?: boolean
  subject?: boolean
  message?: boolean
}

export default function ContactUs() {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  //   Form validation
  const [errors, setErrors] = useState({} as TempErrorsTypes)

  //   Setting button text
  const [buttonText, setButtonText] = useState('Send message')

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  const handleValidation = () => {
    let tempErrors = {} as TempErrorsTypes
    let isValid = true

    if (fullname.length <= 0) {
      tempErrors['fullname'] = true
      isValid = false
    }
    if (email.length <= 0) {
      tempErrors['email'] = true
      isValid = false
    }
    if (subject.length <= 0) {
      tempErrors['subject'] = true
      isValid = false
    }
    if (message.length <= 0) {
      tempErrors['message'] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    console.log('errors', errors)
    return isValid
  }

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    let isValidForm = handleValidation()

    if (isValidForm) {
      setButtonText('Sending it!')
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      const { error } = await res.json()
      if (error) {
        console.log(error)
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText('Send message')

        // Reset form fields
        setFullname('')
        setEmail('')
        setMessage('')
        setSubject('')
        return
      }
      setShowSuccessMessage(true)
      setShowFailureMessage(false)
      setButtonText('Send message')
      // Reset form fields
      setFullname('')
      setEmail('')
      setMessage('')
      setSubject('')
    }
    console.log(fullname, email, subject, message)
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label
        htmlFor="fullname"
        className="mt-4 block text-lg font-semibold text-neutral-700"
      >
        Full name<span className="text-red-500 dark:text-gray-50">*</span>
      </label>
      <input
        type="text"
        value={fullname}
        onChange={(e) => {
          setFullname(e.target.value)
        }}
        name="fullname"
        className=" block w-full rounded-md bg-neutral-200 py-3 px-4 text-neutral-800"
      />
      {errors?.fullname && (
        <p className="text-red-500">Fullname cannot be empty.</p>
      )}

      <label
        htmlFor="email"
        className="mt-4 block text-lg font-semibold text-neutral-700"
      >
        Email<span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        className=" block w-full rounded-md bg-neutral-200 py-3 px-4 text-neutral-800"
      />
      {errors?.email && <p className="text-red-500">Email cannot be empty.</p>}

      <label
        htmlFor="subject"
        className="mt-4 block text-lg font-semibold text-neutral-700"
      >
        Subject<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="subject"
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value)
        }}
        className=" block w-full rounded-md bg-neutral-200 py-3 px-4 text-neutral-800"
      />
      {errors?.subject && (
        <p className="text-red-500">Subject cannot be empty.</p>
      )}
      <label
        htmlFor="message"
        className="mt-4 block text-lg font-semibold text-neutral-700"
      >
        Message<span className="text-red-500">*</span>
      </label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value)
        }}
        className=" block w-full rounded-md bg-neutral-200 py-3 px-4 text-neutral-800"
      ></textarea>
      {errors?.message && (
        <p className="text-red-500">Message body cannot be empty.</p>
      )}
      <div className="flex flex-row items-center justify-start">
        <button
          className="gradient-background mt-4 ml-[4px] w-full rounded-lg outline-offset-4"
          type="submit"
        >
          <span className="  block -translate-x-1 -translate-y-1 rounded-lg bg-neutral-900 py-4 px-6 text-lg font-semibold text-white transition-transform  hover:-translate-x-1.5 hover:-translate-y-1.5 active:-translate-x-0 active:-translate-y-0">
            {buttonText}
          </span>
        </button>
      </div>
      <div className="text-left">
        {showSuccessMessage && (
          <p className="my-2 text-sm font-semibold text-green-500">
            Thank you! Your Message has been delivered.
          </p>
        )}
        {showFailureMessage && (
          <p className="text-red-500">
            Oops! Something went wrong, please try again.
          </p>
        )}
      </div>
    </form>
  )
}
