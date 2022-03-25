import { IconType } from 'react-icons'

interface SkillTypes {
  name: string
  Icon: IconType
}

export default function Skills({ name, Icon }: SkillTypes) {
  return (
    <li className="flex items-center gap-4  p-1" key={name}>
      <Icon className="h-6 w-6 fill-neutral-500" />
      <h3 className=" text-lg font-semibold text-neutral-600">{name}</h3>
    </li>
  )
}
