import Image from 'next/image'
import Link from 'next/link'

const Pokemon = ({ data }) => {
  return (
    <div>
      <h2>{data.name} numero #{data.id}</h2>
      <Image 
        src={data.sprites.front_default}
        width={200}
        height={200}
      />
      <p><Link href="/">Go back</Link></p>
    </div>
  )
}

export default Pokemon

export const getStaticProps = async ({ params }) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
  const data = await response.json()

  return { props: { data } }
}

export const getStaticPaths = async () => {
  const paths = [
    { params: { id : '1' } },
    { params: { id : '2' } }
  ]
  return {
    paths,
    fallback: 'blocking',
  }
}
