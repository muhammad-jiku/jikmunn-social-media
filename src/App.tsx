import { Route, Routes } from 'react-router-dom';
import AuthLayout from './_auth/AuthLayout';
import Signin from './_auth/forms/Signin';
import Signup from './_auth/forms/Signup';
import './App.css';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/sign-up' element={<Signup />} />
        </Route>

        {/* private routes */}
      </Routes>

      <Toaster />
    </main>
  );
}

export default App;
