import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import classes from './App.module.scss';
import LeftSide from './components/LeftSide/LeftSide';
import UserPage from './components/RightSide/UserPage/UserPage';
import UsersList from './components/RightSide/UsersList/UsersList';
import { fetchUsers } from './functions/fetchFunctions';
import { dynamicSort } from './functions/sortingFunction';
import { sortingByCity, sortingByCompany } from './functions/sortingFunctions';
import { IUser } from './types/data';

const App: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [sort, setSort] = useState('');

  const toggleEditMode = () => {
    setTimeout(() => setEditMode(!editMode), 100);
  }

  const sortCity = () => sortingByCity(dynamicSort, sort, users, setSort, setUsers);

  const sortCompany = () => sortingByCompany(dynamicSort, sort, users, setSort, setUsers);

  useEffect(() => {
    fetchUsers(setUsers);
  }, []);

  return (
    <div className={classes.app}>
      <div className={classes.left}>
        <LeftSide sortingByCity={sortCity} sortingByCompany={sortCompany} />
      </div>
      <div className={classes.right}>
        <Routes>
          <Route path="/" element={<UsersList sort={sort} items={users} />} />
          <Route path="/users" element={<UsersList sort={sort} items={users} />} />
          <Route path="/users/:userId" element={<UserPage editMode={editMode} toggleEditMode={toggleEditMode} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
