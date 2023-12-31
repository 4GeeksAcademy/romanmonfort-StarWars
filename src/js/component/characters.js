import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

const Characters = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className='col m-2 '>
            <div className="card planetCard persons" style={{ width: '18rem' }}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} className="card-img-top p-3 " alt="..." onError={(e) => { e.target.src = 'https://pbs.twimg.com/profile_images/1167221863103074305/Ziap6jxO_400x400.png'; }} />
                <div className="card-body text-center ">
                    <h5 className="card-title text-white ">{props.name}</h5>
                </div>
                <div className="card-body row d-flex justify-content-between">
                    <Link className="card-link text-decoration-none col p-0"><button className='Btnt  ms-3'onClick={() => actions.SetFavorite(props.name)}></button></Link>
                    <Link className="card-link text-decoration-none col p-0 m-o d-flex justify-content-end" to={`/info/characters/${props.uid}`}><button onClick={() => actions.getInfo(props.url)} className='BtnM '></button></Link>
                </div>
            </div>
        </div>
    )
}

export default Characters