import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '~/layouts';
import { publicRoutes } from '~/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map(
          ({ path, component: Component, layout, banner }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <Layout type={layout} banner={banner}>
                  <Component />
                </Layout>
              }
            />
          )
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
