import { createContext, useState } from 'react'
 export const WislistContext = createContext(null)

const WishlistProvider = ({children}) => {

    const [fav,setFav] = useState([])

    const favToogle = (prod)=>{
        const favItem = fav.find((p)=> p._id === prod._id)
        if (favItem) {
            setFav((prev)=> prev.filter((f)=> f._id !== prod._id))
        }else{
            setFav((prev)=>[...prev, prod])
        }
    }
    const clearFav = ()=>{
        setFav([])
    }


  return (
    <WislistContext.Provider value={{fav,favToogle,clearFav}}>{children}</WislistContext.Provider>
  )
}

export default WishlistProvider