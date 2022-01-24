import Head from 'next/head'
import Gallery from '../components/gallery'

export default function Home({ pictures }) {
  return (
    <div className='p-10'>
      <Head>
        <title>CASE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='pb-10'>
        <span className='font-bold'>RICE HALL OF FAME</span>
        <span className='float-right'>lew</span>
      </div>

      <Gallery pictures={pictures} />
    </div>
  )
}

function isImage(path) {
  return path.endsWith('.jpg') || path.endsWith('.png')
}

export async function getStaticProps(context) {
  var path = require('path')
  var fs = require('fs')

  const PICTURES_PATH = path.join(process.cwd(), 'public/pictures')
  const pictures = fs
    .readdirSync(PICTURES_PATH)
    .map(filename => "/pictures/" + filename)
    .filter(isImage)
    .reverse()

  return {
    props: {
      pictures: pictures
    },
  }
}
