import {Link} from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function Navbar() {
    return (
        <div className="bg-primary w-100 d-flex justify-content-end">
            <Link to='/' className="navlink">Home</Link>
            <Link to="/search"  className="px-3 navlink">Search</Link>
            <Link to="/houses" className="pe-3 navlink">Houses</Link>
        </div> 
    );
}