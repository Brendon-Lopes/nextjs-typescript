import { CheckList } from '@/components'
import { DescriptionSectionThreeWrapper } from './styles'
import { title, items } from '@/utils/descriptionSectionThree'
import Image from 'next/image'

export default function DescriptionSectionThree() {
  return (
    <DescriptionSectionThreeWrapper>
      <div className="description-section-three-container">
        <Image
          className="bg-image"
          src="/omni-transformer.png"
          alt="omni transformador"
          width={851}
          height={879}
        />
        <main className="content">
          <div className="main-content">
            <h2>{title}</h2>
            <hr />
            <section className="checklist-container">
              <CheckList src='/check-dark.svg' items={items} />
            </section>
          </div>
          <div className="spacer" aria-hidden="true"></div>
        </main>
      </div>
    </DescriptionSectionThreeWrapper>
  )
}
