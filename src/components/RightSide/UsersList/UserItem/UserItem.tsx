import { NavLink } from "react-router-dom";
import classes from "./UserItem.module.scss";
interface IUserItemProps {
  name: string;
  city: string;
  company: string;
  id: string;
}

const UserItem: React.FC<IUserItemProps> = ({ name, city, company, id }) => {
  return (
    <div className={classes.card}>
      <div className={classes.info}>
        <div className={classes.info_row}>
          <span className={classes.info_row_title}>ФИО:</span> {name}
        </div>
        <div className={classes.info_row}>
          <span className={classes.info_row_title}>Город:</span> {city}
        </div>
        <div className={classes.info_row}>
          <span className={classes.info_row_title}>Компания:</span> {company}
        </div>
      </div>
      <div className={classes.wrapper_link}>
        <NavLink to={`/users/${id}`} className={classes.link}> Подробнее </NavLink>
      </div>
    </div>
  )
}

export default UserItem;
