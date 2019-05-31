import React from 'react';

const Page = ({ children }) => (
  <section
    style={{
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      top: '0',
      left: '0'
    }}
  >
    {children}
  </section>
);

export default Page;
