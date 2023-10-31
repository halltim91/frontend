import Link from "next/link";
import './style.css';

export default function Navbar() {
    return (
        <div className="bg-cyan-400 w-100 d-flex justify-content-end">
            <Link href='/home' className="navlink">Home</Link>
            <Link href="/search"  className="px-3 navlink">Search</Link>
            <Link href="/houses" className="pe-3 navlink">Houses</Link>
        </div> 
    );
}