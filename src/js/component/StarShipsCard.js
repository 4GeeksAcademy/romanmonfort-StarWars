import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

const StarShipsCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className='col p-0 m-3 d-flex justify-content-center'>
      <div className="card planetCard text-bg-dark" style={{ width: '18rem' }}>
        <img src={`https://starwars-visualguide.com/assets/img/starships/${props.uid}.jpg`} className="card-img w-100" alt="..." onError={(e) => { e.target.src = 'https://pbs.twimg.com/profile_images/1167221863103074305/Ziap6jxO_400x400.png'; }} />
        <div className="card-img-overlay">
          <h5 className="card-title text-white">{props.name}</h5>
          <Link className="card-link text-decoration-none col p-0"><button className='Btnt ms-3' onClick={() => actions.SetFavorite(props.name)}></button></Link>
          <Link className="card-link text-decoration-none col p-0 m-o d-flex justify-content-end" to={`/info/starships/${props.uid}`}><button onClick={() => actions.getInfo(props.url)} className='BtnM '></button></Link>
        </div>
      </div>

    </div>
  )
}

export default StarShipsCard