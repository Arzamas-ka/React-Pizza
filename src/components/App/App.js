import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from '../../components';
import { Home, Cart } from '../../pages';

const App = () => {
  // const [pizzas, setPizzas] = useState([]);

  // useEffect(() => {
  // axios
  // .get('http://localhost:3001/pizzas')
  // .then(({ data }) => {
  //   // setPizzas(response.data.pizzas); - обычный хук
  // })
  // .catch((error) => console.log(error));
  // }, []);

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
