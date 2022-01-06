import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import AboutUs from './pages/AboutUs';
import DoubleSign from './pages/DoubleSign';
import LandingPage from './pages/LandingPage';
import SelectLock from './pages/SelectLock';
import SingleSign from './pages/SingleSign';
import LockContextProvider from './contexts/LockContext';
import SelectDoubleLock from './pages/SelectDoubleLock';
import FindLock from './pages/FindLock';

function App() {
  return (
    <div>
      <LockContextProvider>
        <TopNav />
        <BrowserRouter>
         <Switch>
              <Route path="/" component={ LandingPage } exact />
              <Route path="/home" component={ LandingPage } exact />
              <Route path="/single-sign-in/:id" component={ SingleSign } exact />
              <Route path="/double-sign-in/:id" component={ DoubleSign } exact />
              <Route path="/about" component={ AboutUs } exact />
              <Route path="/select" component={ SelectLock } exact />
              <Route path="/select-double" component={ SelectDoubleLock } exact />
              <Route path="/find-lock" component={ FindLock } exact />
        </Switch>
        </BrowserRouter>
      </LockContextProvider>  

    </div>
  );
}

export default App;
