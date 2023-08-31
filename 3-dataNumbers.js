const getAngkaTerbesarKedua = (personName) => {
  // check data type dari params
  if (typeof personName !== "object") {
    console.log("Error: Invalid data type");
  } else {
    // Sorting dari A - Z
    const dataSort = personName.sort();
    console.log(dataSort[dataSort.length - 1]);
  }
};

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

getAngkaTerbesarKedua(dataAngka);
getAngkaTerbesarKedua(2);
getAngkaTerbesarKedua();
