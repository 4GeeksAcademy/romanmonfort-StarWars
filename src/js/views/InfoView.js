import React, { useState, useEffect, useContext } from 'react';
import Info from '../component/Info';
import { Context } from '../store/appContext';

const InfoView = () => {
  const { store, actions } = useContext(Context);
  const [info, setInfo] = useState(store.Info);

  useEffect(() => {
    // Actualizar el estado local cuando store.Info cambia
    setInfo(store.Info);
  }, [store.Info]);

  return (
    <div>
      {/* Pasa el estado local 'info' al componente Info */}
      <Info name={info.name} />
    </div>
  );
};

export default InfoView;