import { lazy, Suspense } from 'react';
import authOperations from 'auth/auth-operations';
import authSelectors from 'auth/auth-selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
// import LoginView from 'views/LoginView';
// import PhonebookView from 'views/PhonebookView';
// import RegisterView from 'views/RegisterView';
import AppBar from './AppBar';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import s from './App.module.css';

const PhonebookView = lazy(() =>
  import('views/PhonebookView' /* webpackChunkName "phoneBookView" */)
);
const RegisterView = lazy(() =>
  import('views/RegisterView' /* webpackChunkName "registerView" */)
);
const LoginView = lazy(() =>
  import('views/LoginView' /* webpackChunkName "loginView" */)
);
// const HomeView = lazy(() =>
//   import('views/HomeView' /* webpackChunkName "homeView" */)
// );

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <h2>LOADING...</h2>
      ) : (
        <div className={s.container}>
          <AppBar />
          <Suspense fallback={<h2>LOADING...</h2>}>
            <Routes>
              {/* <Route
                path="/"
                element={
                  <PublicRoute>
                    <HomeView />
                  </PublicRoute>
                }
              /> */}
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <PhonebookView />
                  </PrivateRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute>
                    <RegisterView />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute>
                    <LoginView />
                  </PublicRoute>
                }
              />
            </Routes>
          </Suspense>
        </div>
      )}
    </>
  );
}
