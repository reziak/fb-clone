import Head from "next/head"
import Image from "next/image"
import { getSession, signIn } from "next-auth/react"
import { GetServerSideProps } from "next"

const SigninPage = () => {
  return (
    <>
      <Head>
        <title>Fakebook - Signin</title>
      </Head>

      <div className="flex items-center flex-col h-screen justify-center gap-5">
        <Image 
          src="/images/facebook-logo.webp"
          height={200}
          width={200}
          objectFit="contain"
          alt=""
        />

        <button
          className="bg-blue-500 text-white px-10 py-2 rounded-lg hover:bg-blue-700 w-full max-w-xs"
          onClick={() => signIn('facebook')}
        >
          Login with Facebook
        </button>
        <button
          className="bg-blue-500 text-white px-10 py-2 rounded-lg hover:bg-blue-700 w-full max-w-xs"
          onClick={() => signIn('github')}
        >
          Login with Github
        </button>
      </div>
    </>
  )
}

export default SigninPage

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}
