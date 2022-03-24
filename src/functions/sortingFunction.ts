export function dynamicSort(property: any, property2: any) {
   let sortOrder = 1;
   if(property[0] === "-") {
       sortOrder = -1;
       property = property.substr(1);
   }
   return function (a: any,b: any) {
       let result = (a[property][property2] < b[property][property2]) ? -1 : 
       (a[property][property2] > b[property][property2]) ? 1 : 0;
       return result * sortOrder;
   }
}