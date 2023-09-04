const checkTypeNumber = (givenNumber) => {
  // checking data types of params givenNumber is data type number or not
  if (typeof givenNumber !== "number") {
    console.log("Error: Invalid data type");
  } else {
    const result = givenNumber % 2 === 0 ? "GENAP" : "GANJIL";
    console.log(result);
  }
};

checkTypeNumber(42);
checkTypeNumber(3);
checkTypeNumber({});
checkTypeNumber([]);
