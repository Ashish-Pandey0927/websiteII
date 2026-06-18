import React from 'react';

const Layout = ({ children }) => {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh', // full height but allows content to grow
        margin: '0 auto',
        boxSizing: 'border-box',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowX: 'clip', // prevent horizontal scroll without breaking sticky
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
