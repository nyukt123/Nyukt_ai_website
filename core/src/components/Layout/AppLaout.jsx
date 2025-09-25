import { Headers } from '../UI/Headers';
import { Footers } from '../UI/Footers';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <div className="page-container">
      <Headers />

      {/* <main data-scroll-container> */}
      <Outlet />
      {/* </main> */}
      <Footers />
    </div>
  );
}