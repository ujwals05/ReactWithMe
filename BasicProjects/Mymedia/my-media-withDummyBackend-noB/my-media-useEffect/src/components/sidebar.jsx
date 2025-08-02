
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

    </div>
  );
};

export default Sidebar;
