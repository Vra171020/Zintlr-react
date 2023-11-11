import "./widget.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserGroup} from '@fortawesome/free-solid-svg-icons';



const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 134;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "HELLO SHAKIR ",
        info: "You have 134 customers this Week",
        theme: <FontAwesomeIcon icon={faUserGroup} />,
        isMoney: false,
        link: "See all users",
      };
      break;
    case "order":
      data = {
        title: "You have 276 KYC Pending",
        theme: <FontAwesomeIcon icon={faUserGroup} />,
        isMoney: false,
        link: "View List",
       
      };
      break;
    case "earning":
      data = {
        title: "There are 182 high risk Consumers",
        theme: <FontAwesomeIcon icon={faUserGroup} />,
        isMoney: true,
        link: "View list"
        };
      break;
    case "balance":
      data = {
        title: "There are 32 Tickets Open",
        theme: <FontAwesomeIcon icon={faUserGroup} />,
        isMoney: true,
        link: "View List",
       
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="info">{data.info}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
       <span className="theme">{data.theme}</span>
      </div>
    </div>
  );
};

export default Widget;
