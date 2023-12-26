import Button from "../Button/Button";
import classes from "./LeftSide.module.scss";

interface ILeftSideProps {
  sortingByCity: () => void;
  sortingByCompany: () => void;
}

const LeftSide: React.FC<ILeftSideProps> = ({ sortingByCity, sortingByCompany }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        Сортировка
      </div>
      <div className={classes.wrapper_btn}>
        <div className={classes.btn}>
          <Button onClick={sortingByCity} background="blue" value="по городу" />
        </div>
        <div className={classes.btn}>
          <Button onClick={sortingByCompany} background="blue" value="по компании" />
        </div>
      </div>
    </div>
  )
}

export default LeftSide;
