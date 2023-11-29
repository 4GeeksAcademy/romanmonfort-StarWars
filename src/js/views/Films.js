import React,{useState,useContext} from 'react'
import { Context } from '../store/appContext'
import FilmCard from '../component/FilmCard'

const Films = () => {
   const {store,actions} = useContext(Context)
   const [Films, setFilms] = useState(JSON.parse(localStorage.getItem('films')) || []);

 

  return (
    <div className='container'>
    {store.Planets && store.Planets.map((movie, index) => (
      <FilmCard key={index} title={movie.name} />
      
    ))}
      
  </div>
  )
}

export default Films