import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'modern-normalize/modern-normalize.css';
import './styles/main.scss';

import store from './redux/store';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);
