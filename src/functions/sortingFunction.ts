interface CompareObject {
  [key: string]: {
    [key: string]: string;
  };
}

export function dynamicSort(property: string, property2: string) {
  let sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a: CompareObject, b: CompareObject) {
    let result = (a[property][property2] < b[property][property2]) ? -1 :
      (a[property][property2] > b[property][property2]) ? 1 : 0;
    return result * sortOrder;
  }
}
