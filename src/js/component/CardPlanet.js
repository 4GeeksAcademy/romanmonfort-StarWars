import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

const CardPlanet = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className='col m-2 '>
            <div className="card planetCard" style={{ width: '18rem' }}>
                <img if src={`https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`} 
                className="card-img-top" alt="..." 
                onError={(e) => { e.target.src = 'https://pbs.twimg.com/profile_images/1167221863103074305/Ziap6jxO_400x400.png'; }} />
                <div className="card-body">
                    <h5 className="card-title ">{props.name}</h5>
                </div>
                <div className="card-body row d-flex justify-content-between">
                    <Link className="card-link text-decoration-none col p-0"><button className='Btnt '></button></Link>
                    <Link className="card-link text-decoration-none col p-0 m-o d-flex justify-content-end " to={`/info/planets/${props.uid}`} ><button onClick={() => actions.getInfo(props.url)} className='BtnM '></button></Link>
                </div>
            </div>
        </div>
    )
}

export default CardPlanet