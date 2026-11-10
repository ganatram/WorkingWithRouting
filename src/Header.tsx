import { Link } from 'react-router-dom';
import logo from './logo.svg';

export function Header() {
  return (
    <div>
      <header>
        <Link to="products">
          <img src={logo} alt="Logo" className="inline-block h-20" />
        </Link>

        <h1 className="text-2xl"> React Tools </h1>
        <nav>
          <Link to="products">Products</Link>
        </nav>
      </header>
    </div>
  );
}
