import React, { useState, useEffect } from 'react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    partySize: '',
    dateTime: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Reservation:', formData);
    setSubmitted(true);

    // Simulate email confirmation
    setTimeout(() => {
      console.log(`Confirmation email sent to ${formData.email}`);
      setEmailSent(true);
    }, 1500); // Simulate 1.5s delay
  };

  const sizes = ['1', '2', '3-4', '5-6', '7+'];

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>Reserve a Table</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <LabelInput
            label="Name"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <LabelInput
            label="Email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label style={styles.label} htmlFor="partySize">Party Size</label>
          <select
            id="partySize"
            value={formData.partySize}
            onChange={handleChange}
            required
            style={styles.select}
          >
            <option value="" disabled>Select party size</option>
            {sizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>

          <LabelInput
            label="Date & Time"
            id="dateTime"
            type="datetime-local"
            value={formData.dateTime}
            onChange={handleChange}
          />

          <button type="submit" style={styles.button}>
            Request Reservation
          </button>
        </form>
      ) : (
        <div style={styles.thankYou}>
          ✨ Thank you! Your reservation request has been received. ✨
          <br />
          We’ll be in touch shortly.
          {emailSent && (
            <div style={styles.emailNotice}>
              📧 A confirmation email has been sent to <strong>{formData.email}</strong>.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const LabelInput = ({ label, id, type, value, onChange }) => (
  <>
    <label style={styles.label} htmlFor={id}>{label}</label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      required
      style={styles.input}
    />
  </>
);

const styles = {
  wrapper: {
    maxWidth: '600px',
    margin: '80px auto',
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
    fontFamily: 'Poppins, sans-serif',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginTop: '15px',
    fontWeight: 500,
  },
  input: {
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '16px',
    marginTop: '5px',
  },
  select: {
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '16px',
    marginTop: '5px',
  },
  button: {
    marginTop: '30px',
    padding: '15px',
    backgroundColor: '#ff7043',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  thankYou: {
    textAlign: 'center',
    marginTop: '40px',
    fontSize: '18px',
    color: '#4caf50',
    fontWeight: '500',
  },
  emailNotice: {
    marginTop: '20px',
    color: '#333',
    fontSize: '16px',
  },
};

export default Reservation;