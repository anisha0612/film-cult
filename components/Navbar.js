import NavStyles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => (
  <>
    <nav className={NavStyles.navbar}>
      <img src='/logo1.png' alt='logo' className={NavStyles.logo} />
      <ul className={NavStyles.navbarLink}>
        <li className={NavStyles.navbarLinkItem}>
          <Link href='/discover'>Discover</Link>
        </li>
        <li className={NavStyles.navbarLinkItem}>
          <Link href='/search'>Search</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Navbar;
