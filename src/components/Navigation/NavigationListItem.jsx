import { NavLink } from "react-router-dom";

const NavigationListItem = ({ title, navLinkTo }) => {
  return (
    <li>
      <NavLink to={navLinkTo} className="font-medium tracking-wide">
        {title}
        <span className="text-amber-400 font-extrabold">.</span>
      </NavLink>
    </li>
  );
};

export default NavigationListItem;
