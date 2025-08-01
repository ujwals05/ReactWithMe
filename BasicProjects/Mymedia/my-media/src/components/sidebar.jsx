
const Sidebar = ({handleClick,Tab}) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-white shadow-sm"
      style={{ minWidth:'20px', minHeight: "100%" }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            handleClick("Home");
          }}
        >
          <a
            href="#"
            className={`nav-link ${Tab === "Home" && "active"}`}
          >
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li
          onClick={() => {
            handleClick("Post");
          }}
        >
          <a href="#" className={`nav-link ${Tab === "Post" && "active" }`}>
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Post
          </a>
        </li>
      </ul>

      <div className="mt-auto dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="Profile"
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>

        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
