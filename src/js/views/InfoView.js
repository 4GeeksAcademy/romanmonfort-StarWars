import React, { useState, useEffect, useContext } from 'react';
import Info from '../component/Info';
import { Context } from '../store/appContext';

const InfoView = () => {
  const { store, actions } = useContext(Context);


  return (
    <div>
      <Info name={store.Info.name} birth={store.Info.birth_year} mass={store.Info.mass} 
      height={store.Info.height} eyes={store.Info.eye_color} skin={store.Info.skin_color} 
       diameter={store.Info.diameter} terrain={store.Info.terrain} gravity={store.Info.gravity} climate={store.Info.climate}
       title={store.Info.title} releasedate={store.Info.release_date} producer={store.Info.producer} opening_crawl={store.Info.opening_crawl}
       />
    </div>
  );
};

export default InfoView;