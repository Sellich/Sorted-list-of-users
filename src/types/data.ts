
export interface IAddress {
  city: string;
  street: string;
  zipcode: number;
}
export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: 'string'
}

type Key = string | number;

export interface IUser {
  [id: string]: string | number | IAddress | ICompany | Key;
  name: string;
  username: string;
  email: string;
  address: IAddress | any;
  phone: string;
  website: string;
  company: ICompany;
}

export interface IFormValues {
  Name: string;
  "User name": string;
  "E-mail": string;
  Street: string;
  City: string;
  Zipcode: string;
  Phone: string;
  Website: string;
  Comment: string;
}
