const checkTypeNumber = (givenNumber) => {
  const result =
    typeof givenNumber === "number" ? givenNumber : "Error: Invalid data type";

  return result;
};

console.log(checkTypeNumber(42));
console.log(checkTypeNumber(2));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
