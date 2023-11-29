import React from 'react'
import { Link } from 'react-router-dom'

const FilmCard = (props) => {
  return (
    <div className='col m-2 '>
            <div className="card planetCard" style={{ width: '18rem' }}>
                <img src={`https://starwars-visualguide.com/assets/img/films/${props.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-white">{props.name}</h5>
                </div>
                <div className="card-body">
                    <Link className="card-link text-decoration-none"><button className='btn btn-warning'>FAVORITE</button></Link>
                    <Link className="card-link text-decoration-none"><button className='btn btn-primary'>MORE INFO</button></Link>
                </div>
            </div>
        </div>
  )
}

export default FilmCard