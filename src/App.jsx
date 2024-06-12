import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '~/layouts';
import { publicRoutes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Component = route.component;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout type={route.layout}>
                  <Component />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
