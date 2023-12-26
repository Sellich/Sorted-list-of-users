import classes from "./UserPageHeader.module.scss";
import Button from "../../../Button/Button";

type IHeaderProps = {
  onClick: () => void;
};

const UserPageHeader = ({ onClick }: IHeaderProps) => {
  return (
    <div className={classes.header}>
      <div className={classes.header_title}>
        <h1 className={classes.title}>Профиль пользователя</h1>
      </div>
      <div className={classes.header_btn}>
        <Button disabled={false} onClick={onClick} background="blue" value="Редактировать" />
      </div>
    </div>
  )
}

export default UserPageHeader;
