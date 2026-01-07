// In AppLaout.jsx
import { Outlet } from 'react-router-dom';
import { Headers } from '../UI/Headers';
import { Footers } from '../UI/Footers';

export const AppLayout = ({ children }) => {
  return (
    <div className="page-container">
      <Headers />
      <main>
        {children || <Outlet />}
      </main>
      <Footers />
    </div>
  );
};