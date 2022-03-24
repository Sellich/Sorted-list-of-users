export const sortingByCity = (ds: (address: string, city: string) => void, sort: any, users: any, ss: (name: string) => void, su: ([]) => void) => {
   const sortUsers = users.sort(ds('address', 'city'))
   if(sort === '' || sort === 'company'){
      ss('city')
      su(sortUsers)
   } else {
      ss('')
      const notSortUsers = users.sort((a: any, b: any) => a.id - b.id);
      su(notSortUsers)
   }
}

export const sortingByCompany = (ds: (address: string, city: string) => void, sort: any, users: any, ss: (name: string) => void, su: ([]) => void) => {
   const sortUsers = users.sort(ds('company', 'name'))
   if(sort === '' || sort === 'city'){
      ss('company')
      su(sortUsers)
   } else {
      ss('')
      const notSortUsers = users.sort((a: any, b: any) => a.id - b.id);
      su(notSortUsers)
   }
}