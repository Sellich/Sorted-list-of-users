
export interface IAddress {
   city: any;
   street: any;
   zipcode: any;
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
}