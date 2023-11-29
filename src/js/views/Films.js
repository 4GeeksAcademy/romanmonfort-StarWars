import React,{useState,useContext} from 'react'
import { Context } from '../store/appContext'
import FilmCard from '../component/FilmCard'

const Films = () => {
   const {store,actions} = useContext(Context)
   const [Films, setFilms] = useState(JSON.parse(localStorage.getItem('films')) || []);

 

  return (
    <div className="container">
      <div className=' row '>
    {store.Films && store.Films.map((movie, index) => (
      <FilmCard key={index} name={movie.properties.title} uid={movie.uid} />     
    ))}    
  </div>
    </div>
    
  )

}

export default Films