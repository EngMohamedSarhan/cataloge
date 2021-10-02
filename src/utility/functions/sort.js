export const sortByProperty = (a, b, property, invert) => {
  if (a[property] > b[property]) {
    return invert ? -1 : 1;
  } else {
    return invert ? 1 : -1;
  }
};
