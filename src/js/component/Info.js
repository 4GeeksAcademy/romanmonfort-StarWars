import React from 'react'
import { useParams } from 'react-router-dom';

const Info = (props) => {
    const {type,id} = useParams()


    return (<div className="container">

        <div className="row importante container">
            <div className="col imagen w-100">
            <img src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`} 
            className="card-img w-100" alt="..." 
            onError={(e) => { e.target.src = 'https://pbs.twimg.com/profile_images/1167221863103074305/Ziap6jxO_400x400.png'; }}/>
            </div>
            <div className="col descripcion">
                <h1 className="descripcion-nombre">{props.name}</h1>
                <p className="descripcion-texto">{props.description}</p>
            </div>
        </div>

        <div className="row datos container">
           <col className="datos-uno">{props.datouno}</col>
           <col className="datos-dos">{props.datodos}</col>
           <col className="datos-tres">{props.datotres}</col>
           <col className="datos-cuatro">{props.datocuatro}</col>
        </div>

    </div>
    )
}

export default Info