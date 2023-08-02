import React,{Suspense} from 'react';
import { Redirect, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home';
import Header from './Component/UI/Header';
const MaleModels = React.lazy(()=> import('./Pages/MaleModels'));
const FemaleModels = React.lazy(()=> import('./Pages/FemaleModels'));
const Contact = React.lazy(()=> import ('./Pages/Contact'));

function App() {

  return (
    <Suspense fallback={
      <div>
        <Header/>
        <h1>...Page is loading</h1>
      </div>
    }>
     <Switch>
      <Route exact path='/'>
         <Redirect to="/home" />
      </Route>
       <Route exact path="/home">
         <Home/>
       </Route>
       <Route exact path="/models-females">
         <FemaleModels/>
       </Route>
       <Route exact path="/models-males">
         <MaleModels/>
       </Route>
     <Route path='/contact'>
      <Contact/>
     </Route>
       <Route path='*'>
       </Route>
     </Switch>
    </Suspense>
  )
}

export default App;
