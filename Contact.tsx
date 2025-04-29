// src/components/Contact.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { IconType } from 'react-icons';
import IconWrapper from './IconWrapper';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): Partial<FormData> => {
    const errors: Partial<FormData> = {};
    if (!formData.name) errors.name = 'name is mandatory!';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'email invalid...';
    if (!formData.message) errors.message = 'message is mandatory!';
    return errors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert('your message has been sent! tysm!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section id="contact" style={styles.contact}>
      <div className="fade-in">
        <h2>Entre em Contato</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="your name..."
              style={styles.input}
            />
            {errors.name && <span style={styles.error}>{errors.name}</span>}
          </div>
          <div style={styles.formGroup}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your email..."
              style={styles.input}
            />
            {errors.email && <span style={styles.error}>{errors.email}</span>}
          </div>
          <div style={styles.formGroup}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="your message..."
              style={{ ...styles.input, height: '150px' }}
              rows={5}
            />
            {errors.message && <span style={styles.error}>{errors.message}</span>}
          </div>
          <button type="submit">Enviar Mensagem</button>
        </form>
        <div style={styles.social}>
          <p>
            <IconWrapper
              icon={FaEnvelope}
              style={{ verticalAlign: 'middle', marginRight: '8px' }}
            />
            miya.a4a@gmail.com
          </p>
          <p>
            <IconWrapper
              icon={FaPhone}
              style={{ verticalAlign: 'middle', marginRight: '8px' }}
            />
            (15) 99156-7890
          </p>
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  contact: {
    background: 'linear-gradient(to right, #FFFFFF, #B3E5FC)',
    padding: '60px 20px',
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    borderRadius: '10px',
    border: '2px solid #FFB6C1',
    fontSize: '16px',
  },
  error: {
    color: '#FF6B6B',
    fontSize: '14px',
    marginTop: '5px',
  },
  social: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '18px',
  },
};

export default Contact;