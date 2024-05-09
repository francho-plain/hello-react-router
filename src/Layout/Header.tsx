import { FC } from "react";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Header: FC = () => {
  console.log('🟢🟢🟢 Header')
  const helmet = Helmet.peek()
  const isMobile = useMediaQuery({ maxWidth: 700 });
  return (
    <header>
      <h1>Header</h1>
      <h2>{helmet?.title}</h2>
      {isMobile && <h3>mobile view</h3>}
      {!isMobile && <h3>desktop view</h3>}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page-1">Page 1</Link></li>
      </ul>
    </header>
  );
}

export default Header;