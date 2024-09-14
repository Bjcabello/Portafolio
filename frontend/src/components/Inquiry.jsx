import { useState } from 'react';
import axios from 'axios';

const Inquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/inquiries/', formData)
      .then(() => {
        setSuccessMessage('Consulta enviada exitosamente.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(error => {
        console.error('Error sending inquiry:', error);
      });
  };

  return (
    <div>
      <h3 className="mb-4 text-center">Contáctame</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo Electrónico:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Asunto:
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Mensaje:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      {successMessage && <p className="mt-3 text-success">{successMessage}</p>}
    </div>
  );
};

export default Inquiry;
