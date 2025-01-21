import { useNavigate } from 'react-router-dom'
import './index.css'

const NotFound = () => {
  let nav = useNavigate()
  return (
    <>
    <div>NotFound</div>
    <button onClick={()=> nav(-1)}>go back</button>
    </>
  )
}

export default NotFound