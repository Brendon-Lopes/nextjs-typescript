import { PropsWithChildren } from 'react'
import { TransparentButtonWrapper } from './styles'

export default function TransparentButton({ children }: PropsWithChildren<{}>) {
  return (
    <TransparentButtonWrapper>
      {children}
    </TransparentButtonWrapper>
  )
}
