import logo from '../images/Logo.svg';

function Nav() {
  return (
    <nav>
      <img src={logo} alt="Little Lemon Logo" />
      <ul>
       <li><a href="/">HOME</a></li>
       <li><a href="/about">ABOUT</a></li>
       <li><a href="/menu">MENU</a></li>
       <li><a href="/reservations">RESERVATIONS</a></li>
       <li><a href="/order-online">ORDER ONLINE</a></li>
       <li><a href="/login">LOGIN</a></li>
      </ul>
    </nav>
  );
}

export default Nav;





