import { Link } from 'react-router-dom';
import logo from './logo.svg';

export function Header() {
  return (
    <header className="text-center text-slate-50 bg-slate-900 h-40 p-5">
      {/*  <Link to="">
        <img src={logo} alt="Logo" className="inline-block h-20" />
      </Link> */}
      <Link to="">
        <h1 className="text-2xl">React Tools</h1>
      </Link>
      <nav>
        <Link to="products">Products</Link>
      </nav>
    </header>
  );
}
