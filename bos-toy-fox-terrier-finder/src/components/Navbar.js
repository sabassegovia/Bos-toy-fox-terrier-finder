import { Link } from "react-router-dom";
import tftPhoto from '../images/TFT-header.png'

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h3>Bo's Toy Fox Terrier Search</h3>
        </Link>
        <Link to='/about'>
          <img src={tftPhoto} alt="Logo" />
        </Link>
        <Link to="/search">
          <h3>Search for your own TFT</h3>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;