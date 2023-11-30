import React from 'react'

const StarShipsCard = (props) => {
  return (
    <div className='col p-0 m-3 d-flex justify-content-center'>
    <div class="card planetCard text-bg-dark" style={{ width: '18rem' }}>
  <img src={`https://starwars-visualguide.com/assets/img/starships/${props.uid}.jpg`} class="card-img w-100" alt="..."/>
  <div class="card-img-overlay">
    <h5 class="card-title text-white">{props.name}</h5>
  </div>
</div>

    </div>
  )
}

export default StarShipsCard