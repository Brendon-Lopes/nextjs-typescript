import { DescriptionCardCircleWrapper } from "./styles"
import Image from "next/image"

interface IProps {
  src: string;
  caption: string;
}

export default function DescriptionCardCircle({ src, caption }: IProps) {
  return (
    <DescriptionCardCircleWrapper>
      <div className="circle">
        <Image src={src} width={60} height={60} alt={caption} />
      </div>
      <figcaption>{caption}</figcaption>
    </DescriptionCardCircleWrapper >
  )
}
