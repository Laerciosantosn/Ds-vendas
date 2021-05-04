import DataTable from 'components/DataTable';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import React from 'react';

function App() {
  return (
    <div>
      <Navbar/>
      <div  className="container" >
        <h1 className="text-primary">Hello every people</h1>
        <DataTable />
      </div>
      <Footer />
    </div>
  );
}

export default App;
