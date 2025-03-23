import { useUserContext } from '@/context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export default function AuthLayout() {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to='/' />
      ) : (
        <>
          <section className='flex flex-1 justify-center items-center flex-col py-10 xl:pr-[50%]'>
            <Outlet />
          </section>

          <img
            src='/assets/icons/side-img.svg'
            alt='side image'
            className='hidden xl:block fixed top-0 right-0 h-screen w-1/2 object-cover bg-no-repeat'
          />
        </>
      )}
    </>
  );
}
