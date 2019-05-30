import React from 'react';

const Page = ({ children }) => (
  <section
    style={{ height: '100vh', width: '100vw', position: 'fixed' }}
  >
    {children}
  </section>
);

export default Page;
