import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoaderFullPage, Protect, ScrollToTopButton, Toaster } from '~/components';
import { Layout } from '~/layouts';
import routes from '~/routes';

/** The main application component. */
function App() {
  return (
    <>
      <Toaster />
      <ScrollToTopButton />
      <BrowserRouter>
        <Suspense fallback={<LoaderFullPage />}>
          <Routes>
            {routes.map(({ path, component: Component, layout, banner, isProtected }, index) => (
              <Route key={index} path={path} element={
                <Layout type={layout} banner={banner}>
                  <Protect isProtected={isProtected}>
                    <Component />
                  </Protect>
                </Layout>
              } />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
