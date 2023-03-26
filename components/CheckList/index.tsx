import Image from "next/image";
import { List } from "./styles";

interface IProps {
  items: {
    id: number
    text: string
  }[]
  src: string
}

export default function CheckList({ items, src }: IProps) {
  return (
    <List>
      {items.map(({ id, text }) => (
        <li key={id} className="list__item">
          <Image src={src} width={24} height={24} alt="check" />
          <p>{text}</p>
        </li>
      ))}
    </List>
  )
}
