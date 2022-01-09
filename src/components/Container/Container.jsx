import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() =>
  import('../../views/HomeView' /* webpackChunkName: "home-page" */)
);

const ContactsView = lazy(() =>
  import('../../views/ContactsView' /* webpackChunkName: "ContactsView" */)
);

const AboutView = lazy(() =>
  import('../../views/AboutView' /* webpackChunkName: "AboutView" */)
);

const UpdateView = lazy(() =>
  import('../../views/UpdateView' /* webpackChunkName: "UpdateView" */)
);

const Container = () => (
  <div>
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<ContactsView />} />
        <Route path='/about' element={<AboutView />} />
        <Route path='/update/:id' element={<UpdateView />} />
        <Route path='*' element={<Navigate to='/' />} />
        {/* <Route path='*' element={<Page404 />} /> */}
      </Routes>
    </Suspense>
  </div>
);

export default Container;
