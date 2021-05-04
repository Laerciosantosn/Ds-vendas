import BarChart from 'components/BarChart';
import DataTable from 'components/DataTable';
import DonutChart from 'components/DonutChart';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import React from 'react';

function App() {
  return (
    <div>
      <Navbar/>
      <div  className="container" >
        <h1 className="text-primary py-3">Dashboard of sales</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Tax of success</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">All sales</h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">All Sales</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </div>
  );
}

export default App;
