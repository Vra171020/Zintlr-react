import "./sidebar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
const Sidebar = () => {
  
  return (
    <div className="sidebar">
      <div className="top">
        
          <span className="logo">ZINTLR</span>
       
      </div>
      
      <div className="center">
        <ul>
         
            <li>  
           
              <span>Dashboard</span>
            </li>
          
          
            <li>
              <span>Bullion Operations</span>
            </li>

          <li>
            <span>Transaction</span>
          </li>
          <li>
            <span>Your Network</span>
          </li>
          <li>
            <span>Consumers</span>
          </li>
          <li>
            <span>Other Operations</span>
          </li>
          <li>
            <span>Manage Bank Account</span>
          </li>
          <li>
            <span>FAQ</span>
          </li>
          <li>
            <span>Customized Dashboard</span>
          </li>
          
          
        </ul>
      </div>
      <div className="bottom">
        <p>Your stock</p>
        <div className="Box"> 
         <div className="GoldRate">
         <span>TruCoin Gold</span>
         <span>$6.18(+1.82%)</span>
         <div className="ActRate"><span>7.3k gm</span></div>
        </div>
        <div className="SilverRate">
         <span>TruCoin Silver</span>
         <span>$6.18(+1.82%)</span>
         <div className="ActRate"><span>8.3k gm</span></div>
        </div>
          
          
        </div>
       
        
        <span></span>
      </div>
      
    </div>
  );
};

export default Sidebar;
