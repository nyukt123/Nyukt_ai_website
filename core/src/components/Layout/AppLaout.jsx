import { Headers } from '../UI/Headers';
import { Footers } from '../UI/Footers';
import { Outlet } from 'react-router-dom';

export const AppLayout = ()=> {
  return (
   <>
    <Headers />
      
      {/* <main data-scroll-container> */}
        <Outlet />
      {/* </main> */}
    <Footers />
   </>
  );
}