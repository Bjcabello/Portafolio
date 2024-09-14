import { useState, useEffect } from 'react';
import axios from 'axios';

const SocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    axios.get('/api/social-links/')  
      .then(response => {
        setSocialLinks(response.data);
      })
      .catch(error => {
        console.error('Error fetching social links:', error);
      });
  }, []);

  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted mt-3">
      <section className="d-flex justify-content-center p-4 border-bottom">
        <div className="text-center">
          <span className="fw-bold mb-3 d-block">Mis redes Sociales</span>
          
          <div className="d-flex justify-content-center">
            {socialLinks.length > 0 ? (
              socialLinks.map((link) => (
                <a key={link.id} href={link.url} className="me-4 text-reset">
                  <img src={link.icon_url_social} alt={link.platform_name} style={{ height: '30px', width: '30px' }} />
                  <p className='text-center'>{link.platform_name}</p>
                </a>
              ))
            ) : (
              <p>No hay enlaces sociales disponibles</p>
            )}
          </div>
        </div>
      </section>

      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.10)" }}>
        © 2024 Desarrrollado por Bryan Cabello.
      </div>
    </footer>
  );
};

export default SocialLinks;
