import { useRouter } from 'next/router'
import useIsMounted from '../../../hooks/useIsMounted'

const Index = () => {
  const isMounted = useIsMounted()
  const router = useRouter()
  const id = router.query.id

  if(!isMounted){
    return null
  }

  console.log({router}, router.query.id)
  return (
    <p>The Pokemon {id}</p>
  )
}

export default Index
