import Link from 'next/link'
import styled from 'styled-components'

const Pokemon = ({pokemon}) => {
  const id = pokemon.url.split('/').filter(x => x).pop()
  return (
    <li><Link href={`/pokemons/${id}`}>
    {pokemon.name}
    </Link></li>
  )
}

const Container = styled.div`
  background-color: #eee;
  padding: 1px 10px;
`
const List = styled.ul`
  background-color: #eee;
  padding: 10px 30px;
  margin: 0px;
`
const Title = styled.h1`
  font-size: 1.8em;
  font-weight: bold;
  margin: 0px;
`
 
const Pokemons = ({ pokemons }) => {
  return (
    <Container>
      <Title>My Pokemons App</Title>
      <List>
        {pokemons.map(pokemon => 
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        )}
      </List>
    </Container>
  )
}
export default Pokemons

export const getStaticProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()

  return {
    props: { pokemons: data.results }
  }
}
