import '../App.css';

const About = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">About Us</h1>
      <div className="content-wrapper">
        <div className="image-container">
          <img 
            src="/images/about-image.jpg" 
            alt="About our company" 
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400?text=About+Us';
            }}
          />
        </div>
        <div className="text-content">
          <p>
            We are a passionate team of developers, designers, and innovators dedicated 
            to creating exceptional digital experiences. Founded in 2020, our company has 
            grown from a small startup to a trusted partner for businesses worldwide.
          </p>
          <p>
            <strong>Our Mission:</strong> To empower businesses and individuals through 
            innovative technology solutions that are accessible, reliable, and user-friendly.
          </p>
          <p>
            <strong>Our Values:</strong> Integrity, innovation, customer-centricity, and 
            continuous improvement drive everything we do. We believe in building lasting 
            relationships with our clients based on trust and exceptional results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;