import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Spinner } from 'reactstrap';

const Home = lazy(
  () => import('../views/HomeView' /* webpackChunkName: "home-page" */)
);

const ContactsView = lazy(
  () => import('../views/ContactsView' /* webpackChunkName: "ContactsView" */)
);

const AboutView = lazy(
  () => import('../views/AboutView' /* webpackChunkName: "AboutView" */)
);

const UpdateView = lazy(
  () => import('../views/UpdateView' /* webpackChunkName: "UpdateView" */)
);
const Page404 = lazy(
  () => import('./Page404' /* webpackChunkName: "Page404" */)
);

const Content = () => (
  <main className='content'>
    <Suspense fallback={<Spinner color='primary'>Loading...</Spinner>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<ContactsView />} />
        <Route path='/about' element={<AboutView />} />
        <Route path='/update/:id' element={<UpdateView />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Suspense>
  </main>
);

export default Content;
