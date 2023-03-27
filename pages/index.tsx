import { DescriptionSectionOne, DescriptionSectionTwo, InfoSection, Navbar, WelcomeSection } from '@/components'
import Head from 'next/head'

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
    </>
  )
}
