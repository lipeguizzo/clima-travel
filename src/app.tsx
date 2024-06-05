import { CssBaseline } from '@mui/material';
import { Router } from './core/router/router';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Router />
      <ToastContainer />
    </BrowserRouter>
  );
}
