import React, { useEffect, useState } from 'react';
import { getPcs } from '../App';
import Card from '../components/Card'
import './scss/type1.scss'


const Type1 = () => {
  const [Pcs, setPcs] = useState({});
  useEffect(()=>{
    getPcs().then(e => setPcs(e.data))
  }, []);
  return (
    (Pcs.data != null) && <div className="wrapper">
      <div className="col">
        Игровые
        {Pcs.data.filter(item => item.type == 1).map(item => <Card {...item}/>)}
      </div>
      <div className="col">
        Офисные
        {Pcs.data.filter(item => item.type == 2).map(item => <Card {...item}/>)}
      </div>
      <div className="col">
        Домашние
        {Pcs.data.filter(item => item.type == 3).map(item => <Card {...item}/>)}
      </div>
    </div>
  );
}


export default Type1;