import { IUser } from './../types/data';
import axios from 'axios';

export async function fetchUsers(cb: (res: any) => void) {
   try{
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      cb(response.data)
   } catch (e){
      alert(e)
   }  
}

export async function fetchUser(cb: (res: any,) => void, params: any) {
   try{
      const response = await axios.get<IUser | null> ('https://jsonplaceholder.typicode.com/users/' + params)
      cb(response.data)
   } catch (e){
      alert(e)
   }  
}