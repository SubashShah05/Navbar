import '../App.css';

const Contact = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Contact Us</h1>
      <div className="content-wrapper">
        <div className="text-content">
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            We'd love to hear from you! Whether you have a question about our services, 
            need support, or just want to say hello, we're here to help.
          </p>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Get in Touch</h3>
            <p><strong>📍 Address:</strong> 123 Business Street, Suite 100, San Francisco, CA 94105</p>
            <p><strong>📞 Phone:</strong> (555) 123-4567</p>
            <p><strong>✉️ Email:</strong> info@myapp.com</p>
            <p><strong>🕒 Hours:</strong> Monday - Friday: 9am - 6pm PST</p>
          </div>
          
          <div>
            <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Follow Us</h3>
            <p>Stay connected on social media for updates and news:</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <a href="#" style={{ color: '#3498db', textDecoration: 'none' }}>Twitter</a>
              <a href="#" style={{ color: '#3498db', textDecoration: 'none' }}>LinkedIn</a>
              <a href="#" style={{ color: '#3498db', textDecoration: 'none' }}>Facebook</a>
              <a href="#" style={{ color: '#3498db', textDecoration: 'none' }}>Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="image-container">
          <img 
            src="/images/contact-image.jpg" 
            alt="Contact us" 
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400?text=Contact+Us';
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;