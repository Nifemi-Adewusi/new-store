import { Link, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 hover:underline hover:text-blue-600";
  if (to === "-1") {
    return <button className={className} onClick={() => navigate(-1)}></button>;
  }
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
