import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

interface SecondaryButtonProps {
  content: string
  href: string
  isExternal?: boolean
  isGradient?: boolean
}

export default function ButtonSecondary({
  content,
  href,
  isGradient,
  ...rest
}: SecondaryButtonProps) {
  return isGradient ? (
    <a
      className={
        isGradient
          ? ' text-gradient group flex items-center justify-center gap-2 py-4 px-6 text-lg font-bold '
          : ' group flex items-center justify-center gap-2 py-4 px-6 text-lg font-bold  text-neutral-900'
      }
      href={href}
      {...rest}
    >
      {content}
      <span className=" transition group-hover:translate-x-1 group-active:translate-x-5">
        <FaArrowRight />
      </span>
    </a>
  ) : (
    <Link href={href}>
      <a
        className={
          isGradient
            ? ' text-gradient group flex items-center justify-center gap-2 py-4 px-6 text-lg font-bold '
            : ' group flex items-center justify-center gap-2 py-4 px-6 text-lg font-bold  text-neutral-900'
        }
        {...rest}
      >
        {content}

        <span className=" transition group-hover:translate-x-1 group-active:translate-x-5">
          {' '}
          <FaArrowRight />
        </span>
      </a>
    </Link>
  )
}
