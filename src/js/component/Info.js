import React from 'react'
import { useParams } from 'react-router-dom';

const Info = (props) => {
    const { type, id } = useParams()


    return (<div className="container">

        <div className="row importante container m-0 p-0" >
            <div className="col-3 imagen p-0" >
                <img src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
                    className="card-img  img-info" alt="..."
                    onError={(e) => { e.target.src = 'https://pbs.twimg.com/profile_images/1167221863103074305/Ziap6jxO_400x400.png'; }} />
            </div>
            <div className="col descripcion  ">
                {`${type}` === 'planets' ? (
                    <div className='text-center'>
                        <h1 className="descripcion-nombre">Name: {props.name}</h1>
                        <h4 className="descripcion-texto">Climate: {props.climate}.</h4>
                        <h4 className="descripcion-texto">Gravity: {props.gravity}</h4>
                        <h4 className="descripcion-texto">Terreain: {props.terrain}.</h4>
                        <h4 className="descripcion-texto">Diameter: {props.diameter}</h4>
                    </div>
                ) : type === 'films' ? (
                    <div className='text-center'>
                        <h1 className="descripcion-texto">Title: {props.title}</h1>
                        <h4 className="descripcion-texto">Created in: {props.releasedate} </h4>
                        <h4 className="descripcion-texto">Produced by: {props.producer} </h4>
                        <h4 className="descripcion-texto">Descripcion: {props.opening_crawl} </h4>
                    </div>
                ) : type === "characters" ? (
                    <div className='text-center '>
                        <h1 className="descripcion-nombre">Name: {props.name}</h1>
                        <h4 className="descripcion-texto">Birth Year: {props.birth}</h4>
                        <h4 className="descripcion-texto">Heigt: {props.height}</h4>
                        <h4 className="descripcion-texto">Mass : {props.mass}kg</h4>
                        <h4 className="descripcion-texto">Skin : {props.skin}</h4>
                        <h4 className="descripcion-texto">Eyes : {props.eyes}</h4>
                    </div>
                ) : (<h4> Loading </h4>)}
            </div>
        </div>

    </div>
    )
}

export default Info