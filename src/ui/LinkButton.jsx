import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function LinkButton({ children, to }) {
  return <Link to={to}>{children}</Link>;
}

export default LinkButton;
