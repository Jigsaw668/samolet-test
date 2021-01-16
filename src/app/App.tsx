import { useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';

import Layout from './layout';

import Home from './pages/home';
import LibraryInfo from './pages/library-info';

import './App.scss';

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [location]);

  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route exact path='/libraries/library/:id' component={LibraryInfo} />
    </Layout>
  );
};

export default App;
