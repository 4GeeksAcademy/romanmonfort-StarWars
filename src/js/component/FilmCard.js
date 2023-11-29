import React from 'react'

const FilmCard = (props) => {
  return (
    <div className='row'>
        <div className='col img'></div>
        <div className='col title'>{props.title}</div>
        <div className='col fecha'>{props.release_data}</div>
        <div className='col creador'>{props.director}</div>
        <div className='col descriptione'>{props.opening_crawl}</div>
    </div>
  )
}

export default FilmCard