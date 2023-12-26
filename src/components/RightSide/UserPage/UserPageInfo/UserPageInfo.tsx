import { useForm } from "react-hook-form";
import { IFormValues, IUser } from "../../../../types/data";
import UserPageInfoInput from "./UserPageInfoInput/UserPageInfoInput";
import classes from "./UserPageInfo.module.scss"
import Button from "../../../Button/Button";
import Comment from "./Comment/Comment";
import { InfoInput } from "../../../../data/dataInfo";

interface IUserPageInfoProps {
  user: IUser | null;
  onClick: () => void;
  editMode: boolean;
}

const UserPageInfo: React.FC<IUserPageInfoProps> = ({ editMode, user, onClick }) => {
  const { register, handleSubmit } = useForm<IFormValues>();
  const onSubmit = (data: IFormValues) => {
    console.log(JSON.stringify(data));
  };

  const userInfo = InfoInput.map((info) =>
    <UserPageInfoInput
      key={info.title}
      required register={register}
      title={info.title}
      placeholder={info.address ? user?.['address'][info.placeholder] : user?.[info.placeholder]}
      editMode={editMode} />
  );

  return (
    <div className={classes.page}>
      <form onSubmit={(handleSubmit(onSubmit))} className={classes.form}>
        <div className={classes.list}>
          {userInfo}
          <Comment title='Comment' register={register} editMode={editMode} />
        </div>
        <div className={classes.btn}>
          <Button background={editMode ? 'green' : 'grey'} value="сохранить" disabled={!editMode} onClick={onClick} />
        </div>
      </form>
    </div>
  )
}

export default UserPageInfo;
