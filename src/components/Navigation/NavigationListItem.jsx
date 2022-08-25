import { NavLink } from "react-router-dom";

const NavigationListItem = ({ title, navLinkTo, className }) => {
  return (
    <li>
      <NavLink
        to={navLinkTo}
        className={`font-medium tracking-wide ${className}`}
      >
        {title}
        <span className="font-extrabold text-amber-400">.</span>
      </NavLink>
    </li>
  );
};

export default NavigationListItem;
