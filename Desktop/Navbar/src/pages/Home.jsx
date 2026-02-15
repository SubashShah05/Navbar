import '../App.css';

const Home = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Welcome to Our Website</h1>
      <div className="content-wrapper">
        <div className="text-content">
          <p>
            Welcome to our amazing platform! We're dedicated to providing you with the best 
            experience possible. Our team works tirelessly to bring you innovative solutions 
            and exceptional service.
          </p>
          <p>
            Whether you're looking for information, services, or just browsing, we're here 
            to help. Explore our site to learn more about what we offer and how we can 
            assist you in achieving your goals.
          </p>
          <p>
            Feel free to navigate through our pages using the menu above. If you have any 
            questions, don't hesitate to reach out through our contact page!
          </p>
        </div>
        <div className="image-container">
          <img 
            src="/images/home-image.jpg" 
            alt="Welcome to our website" 
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400?text=Home+Image';
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;