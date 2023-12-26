import { IUser } from "../../../types/data";
import UserItem from "./UserItem/UserItem";
import Preloader from "../../Preloader/Preloader";
import classes from "./UsersList.module.scss";

interface IUsersListProps {
  items: IUser[];
  sort: string;
}

const UsersList: React.FC<IUsersListProps> = ({ items }) => {
  return (
    <div className={classes.page}>
      <div className={classes.title}>
        Список пользователей
      </div>
      <div className={classes.list}>
        {items.length ?
          items.map((user) =>
            <UserItem id={user.id as string} key={user.id as string} name={user.name} city={user.address.city} company={user.company.name} />)
          : <Preloader width="500px" height="125px" />}
      </div>
      <div className={classes.result}>
        {`Найдено ${items.length} пользователей`}
      </div>
    </div>
  )
}

export default UsersList;
