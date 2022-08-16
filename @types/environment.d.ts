declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXTAUTH_URL: string
      GITHUB_ID: string
      GITHUB_SECRET: string
      FACEBOOK_ID: string
      FACEBOOK_SECRET: string
      NODE_ENV: 'development' | 'production'
      NEXT_PUBLIC_FIREBASE_API_KEY: string
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string
      NEXT_PUBLIC_FIREBASE_PROJECT_ID: string
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDERID: string
      NEXT_PUBLIC_FIREBASE_APP_ID: string
    }
  }
}

export {}