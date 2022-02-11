export const Header: React.FC<{}> = () => {
  return (
    <header
      className="navbar border-bottom position-absolute vw-100 p-0"
      style={{
        height: "3rem",
        zIndex: 1000,
      }}
    >
      <ul className="container-fluid navbar-nav flex-row justify-content-start">
        <li className="nav-item m-1">
          <a className="nav-link" href="#">
            Page
          </a>
        </li>
        <li className="nav-item m-1">
          <a className="nav-link" href="#">
            Page
          </a>
        </li>
        <li className="nav-item m-1 flex-grow-1"></li>
        <li className="nav-item m-1">
          <a className="nav-link" href="#">
            Page
          </a>
        </li>
      </ul>
    </header>
  );
};
