import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { Header } from '../../components';
import { Home, Cart } from '../../pages';
import setPizzasAction from '../../redux/actions/pizzasAction';

const App = () => {
  // const [pizzas, setPizzas] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://localhost:3000/pizzas.json')
      .then(({ data }) => {
        // setPizzas(response.data.pizzas); - обычный хук
        dispatch(setPizzasAction(data.pizzas));
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Route exact path='/' component={Home} />
        <Route path='/cart' component={Cart} />
      </div>
    </div>
  );
};

export default App;
