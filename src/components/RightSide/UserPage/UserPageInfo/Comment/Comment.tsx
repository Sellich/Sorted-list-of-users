import { UseFormRegister } from "react-hook-form";
import { IFormValues } from "../../../../../types/data";
import classes from "./Comment.module.scss";

interface ICommentProps {
  title: 'Comment';
  register: UseFormRegister<IFormValues>;
  editMode: boolean;
}

const Comment: React.FC<ICommentProps> = ({ editMode, register, title }) => {
  return (
    <div className={classes.comment}>
      <div className={classes.title}>
        Comment
      </div>
      <div className={classes.wrapper_textarea}>
        <textarea {...register(title)} className={classes.textarea} readOnly={!editMode} />
      </div>
    </div>
  )
}

export default Comment;
