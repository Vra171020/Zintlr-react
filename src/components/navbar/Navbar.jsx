import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';




import { useContext } from "react";

const Navbar = () => {
 
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <FontAwesomeIcon className="item" icon={faEnvelope} />
          <FontAwesomeIcon className="item" icon={faSackDollar} />
          <FontAwesomeIcon className="item" icon={faBell} />
          <FontAwesomeIcon className="item" icon={faFolder} />
         
         

          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
