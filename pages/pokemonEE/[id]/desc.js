import { useRouter } from 'next/router'
import useIsMounted from '../../../hooks/useIsMounted'

const Desc = () => {
  const isMounted = useIsMounted()
  const router = useRouter()
  const id = router.query.id

  if(!isMounted){
    return null
  }

  return (
    <div>
      <p>description of Pokemon {id}</p>
    </div>
  )
}

export default Desc
