import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  // const isLogin = localStorage.getItem("profile");

  const navbar = [
    {
      pathName: "/",
      name: "home",
      link: "/",
    },
    {
      pathName: "/record",
      name: "record",
      link: "/record",
    },
    {
      pathName: "/chart",
      name: "chart",
      link: "/chart",
    },
    {
      pathName: "/menu",
      name: "menu",
      link: "/menu",
    },
  ];
  return (
    <nav className="flex flex-row gradient-night h-10 top-0 w-full justify-around items-center p-2 shadow-sm z-90">
      {navbar.map((nav) => (
        <div
          className={`${
            path === nav.link ? "nav-link-hover" : "nav-link"
          } flex group`}
        >
          <Link to={nav.link}>{nav.name}</Link>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
