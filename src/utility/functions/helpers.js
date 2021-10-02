import { maximumPrice } from "../constants/constants";

export const countElementsRow = (number, width, extraWidth) => {
  let count = number;

  while (window.innerWidth < count * width + extraWidth) {
    count--;
  }

  if (count <= 0) {
    return 1;
  }
  return count;
};

export const splicer = (array, spliceTo) => {
  const cpy = [...array];
  const spliced = [];
  while (cpy.length > 0) {
    spliced.push(cpy.splice(0, spliceTo));
  }

  return spliced;
};

export const convert = (value, invert) => {
  if (invert) {
    return (value * maximumPrice) / 100;
  }
  return (value * 100) / maximumPrice;
};

export const priceFieldCheck = (priceField, value, i) => {
  const newField = [...priceField];
  if (value >= 0) {
    if (i === 1) {
      if (Number(newField[0]) > Number(value)) {
        newField[0] = 0;
      }
      if (value > maximumPrice) {
        newField[1] = maximumPrice;
      } else {
        newField[1] = value;
      }

      return newField;
    } else {
      if (Number(value) > Number(newField[1])) {
        newField[0] = newField[1];
      } else {
        newField[0] = value;
      }

      return newField;
    }
  }

  return priceField;
};

const countElementsColumn = (number, height, extraHeight) => {
  let count = number;

  while (window.innerHeight < count * height + extraHeight) {
    count--;
  }

  return count + 1;
};

export const countElementsPage = (
  number,
  width,
  height,
  extraHeight,
  extraWidth
) => {
  const elementsPerRow = countElementsRow(number, width, extraWidth);
  const elementsPerColumn = countElementsColumn(number, height, extraHeight);

  return elementsPerColumn * elementsPerRow;
};
