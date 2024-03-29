import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AddToCart from './Context/AddToCatd';
import UsePagination from './Context/Pagination/Pagination';
import UseLoading from './Context/UseLoading';
import UserContext from './Context/UserContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UseLoading>
        <UserContext>
          <AddToCart>
            <UsePagination>
              <App />
            </UsePagination>
          </AddToCart>
        </UserContext>
      </UseLoading>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
