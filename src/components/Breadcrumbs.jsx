import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isNumber = /^\d+$/.test(value); 
        if (isNumber) return null;
        return last ? (
          <li key={to} className="breadcrumb-item active">
            {value}
          </li>
        ) : (
          <li key={to} className="breadcrumb-item">
            <Link to={to}>{value}</Link>
          </li>
        );
      })}
    </>
  );
};

export default Breadcrumbs;
