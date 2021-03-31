import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect, Link, BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';

const type1 = lazy(() => import('../src/components/type1'));
const type2 = lazy(() => import('../src/components/type2'));
const type3 = lazy(() => import('../src/components/type3'));

const axios = require('axios').default;
export function getPcs() {
  return axios.get('http://localhost:50110/pcs');
}
export function getComponents() {
  return axios.get('http://localhost:50110/comps');
}

const App = () => {
  
  return (
    <Router>
      <div className="App"> 
        <header className="App-header">
          <div className="left">
            <span> Интеллектуальные системы </span>
            <span> Лабораторная работа №4 </span>
          </div>
          <div className="right">
            <span className="span"> Каташев Данил </span>
            <span className="span"> Сиало Хуан Мануель </span>
            <span className="span"> Кузнецов Валерий </span>
          </div>
        </header>
        <div className="question">Как хорошо вы разбираетесь в компьютерах?</div>
        <div className="buttonWrapper">
          <Link className="button1" to="/type1"> Я знаю только тип компьютера, который мне нужен </Link>
          <Link className="button1" to="/type2"> Я знаю конкретные характеристики желаемого компьютера </Link>
          <Link className="button1" to="/type3"> Я знаю конкретные модели комплектующих </Link>
        </div>
        <Suspense fallback={<div/>}>
          <Switch>
            <Route path={"/type1"} component={type1}>
            </Route>
            <Route path={"/type2"} component={type2}>
            </Route>
            <Route path={"/type3"} component={type3}>
            </Route>
          </Switch>
        </Suspense>
      </div>    
    </Router>
  );
}

export default App;
