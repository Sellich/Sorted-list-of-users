/* eslint-disable no-sequences */
import React, { useState } from "react";
import { IFormValues } from "../../../../../types/data";
import { UseFormRegister } from "react-hook-form";
import classes from "./UserPageInfoInput.module.scss";

type IInputProps = {
  title: "Name" | "User name" | "E-mail" | "Street" | "City" | "Zipcode" | "Phone" | "Website" | "Comment";
  register: UseFormRegister<IFormValues>;
  required: boolean;
  placeholder: string;
  editMode: boolean;
}

const UserPageInfoInput = ({ title, placeholder, register, editMode, required }: IInputProps) => {
  const [value, setValue] = useState(editMode ? placeholder : '');

  const handlerChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        {title}
      </div>
      <div className={classes.wrapper_input}>
        <input
          {...register(title, { required })}
          readOnly={!editMode}
          value={value}
          placeholder={placeholder}
          onChange={handlerChange}
          className={classes.input} />
      </div>
    </div>
  )
}

export default UserPageInfoInput;
