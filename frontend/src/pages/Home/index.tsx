import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
    <Navbar />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">DSVendas</h1>
          <p className="lead">Analyze your sales performance from different perspectives</p>
          <hr />
          <p>This application consists of displaying a dashboard from data provided by a back end built with Spring Boot.</p>
          <Link to ="/dashboard" className="btn btn-primary btn-lg">
            Go to Dashboard
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;