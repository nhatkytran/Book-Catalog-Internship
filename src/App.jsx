import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '~/layouts';
import routes from '~/routes';
import { Protect, ScrollToTopButton, Toaster } from '~/components';

function App() {
  return (
    <>
      <Toaster />
      <ScrollToTopButton />

      <BrowserRouter>
        <Routes>
          {routes.map(
            (
              { path, component: Component, layout, banner, isProtected },
              index
            ) => (
              <Route
                key={index}
                path={path}
                element={
                  <Layout type={layout} banner={banner}>
                    {isProtected ? (
                      <Protect>
                        <Component />
                      </Protect>
                    ) : (
                      <Component />
                    )}
                  </Layout>
                }
              />
            )
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
