import { Route, Routes } from 'react-router-dom';
import AuthLayout from './_auth/AuthLayout';
import Signin from './_auth/forms/Signin';
import Signup from './_auth/forms/Signup';
import { Toaster } from './components/ui/sonner';
// import './globals.css';
import './App.css';
import RootLayout from './_root/RootLayout';
import AllUsers from './_root/pages/AllUsers';
import CreatePost from './_root/pages/CreatePost';
import EditPost from './_root/pages/EditPost';
import Explore from './_root/pages/Explore';
import Home from './_root/pages/Home';
import PostDetails from './_root/pages/PostDetails';
import Profile from './_root/pages/Profile';
import Saved from './_root/pages/Saved';
import UpdateProfile from './_root/pages/UpdateProfile';

function App() {
  return (
    <main className='flex min-h-screen'>
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/sign-up' element={<Signup />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/saved' element={<Saved />} />
          <Route path='/all-users' element={<AllUsers />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:id' element={<EditPost />} />
          <Route path='/posts/:id' element={<PostDetails />} />
          <Route path='/profile/:id/*' element={<Profile />} />
          <Route path='/update-profile/:id' element={<UpdateProfile />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
}

export default App;
