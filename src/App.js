import { Route, Switch, Redirect } from 'react-router-dom';
import Mainheader from './components/Mainheader';
import Product from './pages/product';
import ProductDetails from './pages/ProductDetails';
import Welcome from './pages/welcome';
function App() {
  return (
    <div>
      <header>
        <Mainheader />
      </header>
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/products' exact>
            <Product />
          </Route>
          <Route path='/products/:productId'>
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
