import React, { useEffect, useState } from 'react';
import { Header } from '../../components';
import { Home, Cart } from '../../pages';
import { Route } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/pizzas.json')
      .then((response) => {
        console.log(response.data.pizzas);
        setPizzas(response.data.pizzas);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Route exact path='/' render={() => <Home pizzas={pizzas} />} />
        <Route path='/cart' component={Cart} />
      </div>
    </div>
  );
};

export default App;
