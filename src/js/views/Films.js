import React,{useState,useContext} from 'react'
import { Context } from '../store/appContext'

const Films = () => {
   const {store,actions} = useContext(Context)
  //  const [Films,setFilms] = useState(JSON.parse(localStorage.getItem[films]) )


  return (
    <div className='bg-dark text-white'><p>films</p></div>
  )
}

export default Films