import { Link } from "react-router-dom";

const Sidebar = ({ handleClick, Tab }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-white shadow-sm"
      style={{ minWidth: "20px", minHeight: "100%" }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className={`nav-link ${Tab === "Home" && "active"}`}>
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </Link>
        </li>
        <li
          onClick={() => {
            handleClick("Post");
          }}
        >
          <Link to="/create-post" className={`nav-link ${Tab === "Post" && "active"}`}>
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Post
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
