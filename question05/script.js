const handleClick = (event) => {
  event.preventDefault();
  const divRes = document.querySelector(".result");
  const value = document.querySelector("input").value;
  if (value) {
    divRes.style.display = "initial";
    let changedValue = changeChar(value).join("");
    divRes.innerHTML = changedValue;
  }
};

const changeChar = (word) => {
  let w2 = [];
  let j = 0;
  for (let i = word.length - 1; i >= 0; i--) {
    w2[j] = word[i];
    j++;
  }
  return w2;
};
