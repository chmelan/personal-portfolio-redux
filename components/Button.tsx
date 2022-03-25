import Link from 'next/link'

interface ButtonProps {
  content: string
  href: string
  isExternal?: boolean
}
export default function Button({
  content,
  href,
  isExternal,
  ...rest
}: ButtonProps) {
  return isExternal ? (
    <a
      className="gradient-background m-auto rounded-lg  outline-offset-4"
      href={href}
      {...rest}
    >
      <span className="  block -translate-x-1 -translate-y-1 rounded-lg bg-neutral-900 py-4 px-6 text-lg font-semibold text-white transition-transform  hover:-translate-x-1.5 hover:-translate-y-1.5 active:-translate-x-0 active:-translate-y-0">
        {content}
      </span>
    </a>
  ) : (
    <Link href={href}>
      <a
        className="gradient-background rounded-lg outline-offset-4  "
        {...rest}
      >
        <span className="  block -translate-x-1 -translate-y-1 rounded-lg bg-neutral-900 py-4 px-6 text-lg font-semibold text-white transition-transform  hover:-translate-x-1.5 hover:-translate-y-1.5 active:-translate-x-0 active:-translate-y-0">
          {content}
        </span>
      </a>
    </Link>
  )
}
