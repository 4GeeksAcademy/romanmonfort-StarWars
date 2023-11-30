import React from 'react'
import { Link } from 'react-router-dom'

const FilmCard = (props) => {
  return (
    <div className='col m-2 '>
            <div className="card planetCard" style={{ width: '18rem' }}>
                <img src={`https://starwars-visualguide.com/assets/img/films/${props.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title text-white">{props.name}</h5>
                </div>
                <div className="card-body row d-flex justify-content-between">
                    <Link className="card-link text-decoration-none col p-0"><button className='Btnt   ms-3'></button></Link>
                    <Link className="card-link text-decoration-none col p-0 m-o d-flex justify-content-end"><button className='BtnM   me-3'></button></Link>
                </div>
            </div>
        </div>
  )
}

export default FilmCard