import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

const StarShipsCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className='col p-0 m-3 d-flex justify-content-center'>
    <div class="card planetCard text-bg-dark" style={{ width: '18rem' }}>
  <img src={`https://starwars-visualguide.com/assets/img/starships/${props.uid}.jpg`} class="card-img w-100" alt="..." onError={(e) => { e.target.src = 'https://pbs.twimg.com/profile_images/1167221863103074305/Ziap6jxO_400x400.png'; }}/>
  <div class="card-img-overlay">
    <h5 class="card-title text-white">{props.name}</h5>
    <Link className="card-link text-decoration-none col p-0 m-o d-flex justify-content-end"><button onClick={() => actions.getInfo(props.url)} className='BtnM '></button></Link>
  </div>
</div>

    </div>
  )
}

export default StarShipsCard