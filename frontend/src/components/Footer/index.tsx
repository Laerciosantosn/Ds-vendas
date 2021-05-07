import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">App developed by <a href="https://github.com/acenelio" target="_blank" rel="noreferrer">Nelio Alves</a></p>
        <p className="text-light">App coded by <a href="https://github.com/laerciosantosn" target="_blank" rel="noreferrer" className="text-primary">Laércio Santos</a></p>
        <p className="text-light"><small><strong>Week Spring React</strong><br />
        Event promoted by DevSuperior school: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
      </div>
    </footer>
  );
}

export default Footer;