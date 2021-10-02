export const filterObject = (object, property, value) => {
  if (value === object[property]) {
    return true;
  }
};

export const filterByPrice = (product, priceField) => {
  if (product.price >= priceField[0] && product.price <= priceField[1]) {
    return true;
  }
};

export const filterByColor = (product, colors) => {
  if (colors.includes(product.color)) {
    return true;
  }
};

export const filterByRating = (product, rating) => {
  if (product.rating >= rating) {
    return true;
  }
};
