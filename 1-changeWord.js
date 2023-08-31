const changeWord = (selectedText, changedText, text) => {
  // fn to replace text with selectedtext and changedtext tolowercase
  const replaceText = () => {
    const result = text.replace(
      selectedText.toLocaleLowerCase(),
      changedText.toLocaleLowerCase()
    );

    console.log(result);
  };

  // checking selected text includes in sentences or not
  if (!text.includes(selectedText.toLocaleLowerCase())) {
    console.log("Text tidak ditemukan!!");
  } else {
    replaceText();
  }
};

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tidak akan mampu menggambarkan cintaku padamu";

changeWord("mencintai", "membenci", kalimat1);
changeWord("bromo", "semeru", kalimat2);
