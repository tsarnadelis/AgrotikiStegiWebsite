import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Divider from '../components/Divider';
import ServiceCard from '../components/ServiceCard';
import ContactCard from '../components/ContactCard';
import MapCard from '../components/MapCard';
import './Home.css';


const products = [
  {
    id: 1, 
    name: 'Φάρμακα',
    description: 'Φάρμακα για την προστασία των φυτών σας.',
    image: "https://d3hnfqimznafg0.cloudfront.net/images/Article_Images/ImageForArticle_559_44833063004155097572.jpg"
  },
  {
    id: 2,
    name: 'Λιπάσματα',
    description: 'Προιόντα από τις κορυφαίες εταιρίες της αγοράς.',
    image: "https://assets.yara.com/83a13d10eaa24b8096f0472d5ec58728.jpg"
  },
  {
    id: 3,
    name: 'Είδη Κήπου',
    description: 'Λύσεις για κάθε τύπο κήπου.',
    image: "https://images.immediate.co.uk/production/volatile/sites/10/2018/11/2048x1365-10-New-Year-resolutions-for-garden-LI3022053-488e702.jpg"
  }
];

const services = [
  {
    id: 1,
    name: 'Συμβουλευτικές Υπηρεσίες',
    description: 'Συμβουλές για την καλύτερη διαχείριση της καλλιέργειας σας.',
  },
  {
    id: 2,
    name: 'Εκπαίδευση',
    description: 'Εκπαίδευση για την σωστή χρήση των προιόντων που προσφέρουμε.',
  }
];

const contact = [
  {
  phone: '2591061987',
  email: 'pontikidoudimitra@gmail.com'
  }
];

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <h2>Καλωσήρθατε στην Αγροτική Στέγη</h2>
        <p> Η επιλογή σας για όλες τις αγροτικές ανάγκες σας.</p>
        <Divider />
        <h2>Τα προιόντα μας</h2>
        <div className="product-list">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Divider />
        <h2>Οι υπηρεσίες μας</h2>
        <div className="service-list">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <Divider />
        <h2>Επικοινωνήστε μαζί μας</h2>
        <div className="contact-list">
          {contact.map(contact => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
        <Divider />
        <h2>Που θα μας βρείτε</h2>
        <div className='map-container'>
          <MapCard />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
