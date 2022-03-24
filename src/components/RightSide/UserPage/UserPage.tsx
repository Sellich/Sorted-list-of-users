import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../../functions/fetchFunctions";
import { IUser } from "../../../types/data";
import Preloader from "../../Preloader/Preloader";
import UserPageHeader from "./UserPageHeader/UserPageHeader";
import UserPageInfo from "./UserPageInfo/UserPageInfo";

interface IUserPageProps{
   toggleEditMode: () => void;
   editMode: boolean;
}

const UserPage: React.FC<IUserPageProps> = ({toggleEditMode, editMode}) => {
   
   const [user, setUser] = useState<IUser | null>(null);
   const params = useParams();

   useEffect(()=> {
      fetchUser(setUser, params.userId);
   }, [fetchUser])


   return(
      <div> 
         <div>
            <UserPageHeader onClick={toggleEditMode}/>
         </div>
         <div>
            { user ? <UserPageInfo  onClick={toggleEditMode} editMode={editMode} user={user} /> :
            <Preloader width="500px" height="75px"/> }
         </div>
      </div>
   )
}

export default UserPage;