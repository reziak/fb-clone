import type { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import { ReactElement } from 'react'
import { Feed } from '../components/Feed'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Widgets } from '../components/Widgets'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Fakebook</title>
      </Head>

      <main className='h-screen overflow-hidden flex pt-16'>
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </>
  )
}

export default Home

Home.getLayout = (page: ReactElement) => {
  return (
    <>
      <Header />
      {page}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      }
    }
  }

  return {
    props: {
      session
    }
  }
}