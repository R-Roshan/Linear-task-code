import { Outlet, Link } from "react-router-dom";
import "./index.css";

const Layout = () => {
  return (
    <>
      <nav className="nav-item">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/quiz">
              Quiz
            </Link>
          </li>
          <li>
            <Link className="link" to="/todo">
              todo
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
