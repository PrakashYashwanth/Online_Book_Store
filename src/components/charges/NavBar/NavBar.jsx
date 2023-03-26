import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Online Book Store</h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Books</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
