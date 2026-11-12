import { Form, Link } from 'react-router-dom';
import logo from './logo.svg';
// import { useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';

export function Header() {
  // const navigate = useNavigate();
  /*  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // blocks the annoying default events from the Browser
    const formData = new FormData(e.currentTarget);
    const s1 = formData.get('search') as string;
    // navigate(`products/?s1=${s1}`);
  } */
  return (
    <header className="text-center text-slate-50 bg-slate-900 h-40 p-5">
      <Form action="/products">
        <input
          type="search"
          name="search"
          placeholder="Search"
          //defaultValue={searchParams.get('search') ?? ''}
        />
      </Form>
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
