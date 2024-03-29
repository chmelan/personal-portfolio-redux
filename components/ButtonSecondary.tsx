import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

interface SecondaryButtonProps extends React.ComponentPropsWithoutRef<'a'> {
  content: string
  href: string
  isExternal?: boolean
  isGradient?: boolean
}

export default function ButtonSecondary({
  content,
  href,
  isGradient,
  ...secondaryButtonProps
}: SecondaryButtonProps) {
  return isGradient ? (
    <a
      className={
        isGradient
          ? ' text-gradient group flex items-center justify-center gap-2 py-4  text-lg font-bold outline-offset-4	'
          : ' group flex items-center justify-center gap-2 py-4 text-lg font-bold  text-neutral-900 outline-offset-4	'
      }
      href={href}
      {...secondaryButtonProps}
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
            ? ' text-gradient group flex items-center justify-center gap-2 py-4  text-lg font-bold outline-offset-4	'
            : ' group flex items-center justify-center gap-2 py-4  text-lg font-bold  text-neutral-900 outline-offset-4	'
        }
        {...secondaryButtonProps}
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
