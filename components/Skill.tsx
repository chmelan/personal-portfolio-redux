import { IconType } from 'react-icons'

interface SkillTypes {
  name: string
  Icon: IconType
  color?: string
}

export default function Skills({ name, Icon, color }: SkillTypes) {
  return (
    <li className="flex items-center gap-2 p-1  " key={name}>
      <Icon className={color + ' h-8 w-8  '} />
      <h3 className=" text-lg text-neutral-200">{name}</h3>
    </li>
  )
}
