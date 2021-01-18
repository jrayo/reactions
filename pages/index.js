import Head from 'next/head'
import Link from 'next/link'
export default function Home({ reactions }) {
  return (
    <div className='container'>
      <Head>
        <title>Static Reactions Demo</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='og:title' content='Static Reactions Demo' />
        <meta
          property='og:description'
          content='Using Next.js Incremental Static Regeneration'
        />
        <meta
          property='og:image'
          content='https://og-image.now.sh/Incremental%20Static%20Regeneration%20Demo%20using%20**GitHub%20Reactions**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg'
        />
      </Head>

      <main>
        <h2>Static Reactions Demo</h2>
        <h3>
          Reactions on{' '}
          <a href='https://github.com/chibicode/reactions/issues/1'>
            this GitHub issue
          </a>
          

        </h3>
          
          
          <b>
            This is a fork from <a href='https://github.com/chibicode/reactions/blob/master/pages/index.js'>@chibicode </a> in order to see other timeouts when statically generating pages.  
          </b>
        

        <ol>
          <li>
            <Link href="/1">
             <a>1 second</a>
            </Link>
          </li>
          <li>
            <Link href="/10">
             <a>10 seconds</a>
            </Link>
          </li>
          <li>
            <Link href="/60">
             <a>60 seconds</a>
            </Link>
          </li>
          <li>
            <Link href="/customized">
             <a>{process.env.NEXT_PUBLIC_REVALIDATE_TIMEOUT} seconds (Customized via environment variable)</a>
            </Link>
          </li>
        </ol>
      </main>
    </div>
  )
}
