import { useRouter } from 'next/router'
import useIsMounted from '../../hooks/useIsMounted'

const DynamicTiger = () => {
  const isMounted = useIsMounted()
  const router = useRouter()

  if(!isMounted){
    return null
  }

  console.log({router}, router.query.id)
  return (
    <div>
      <p>Dynamic Tiger</p>
    </div>
  )
}

export default DynamicTiger
