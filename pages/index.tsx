import Head from 'next/head'
import {
  DescriptionSectionOne,
  DescriptionSectionThree,
  DescriptionSectionTwo,
  InfoSection,
  Navbar,
  WelcomeSection,
} from '@/components'

export default function Home() {
  return (
    <>
      <Head>
        <title>HVex</title>
      </Head>
      <Navbar />
      <InfoSection />
      <WelcomeSection />
      <DescriptionSectionOne />
      <DescriptionSectionTwo />
      <DescriptionSectionThree />
    </>
  )
}
