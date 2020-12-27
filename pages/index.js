import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>KVN Teams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center">
          <div className="container py-20">
            <h1 className="text-4xl text-center text-gray-700 dark:text-gray-100">
              KVN Teams
            </h1>
          </div>
      </div>
    </div>
  )
}
