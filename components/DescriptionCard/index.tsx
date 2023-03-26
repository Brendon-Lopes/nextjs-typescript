import { DescriptionCardWrapper } from "./styles";
import Image from "next/image";

interface IProps {
  src: string;
  caption: string;
}

export default function DescriptionCard({ src, caption }: IProps) {
  return (
    <DescriptionCardWrapper>
      <Image src={src} alt={caption} width={62} height={62} />
      <figcaption>{caption}</figcaption>
    </DescriptionCardWrapper>
  )
}
