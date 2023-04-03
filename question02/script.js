const handleClick = (event) => {
  event.preventDefault();
  const divRes = document.querySelector(".result");
  const value = document.querySelector("input").value;
  const result = calFibonacci(parseInt(value));
  divRes.style.display = "initial";

  divRes.querySelector(".fibValue").innerHTML = value;
  divRes.querySelector(".fibResult").innerHTML = result;
};

const calFibonacci = (value) => {
  console.log(value);
  let soma = 0,
    ant = 0,
    prox = 1;
  for (let i = 0; i < value; i++) {
    soma = ant + prox;
    ant = prox;
    prox = soma;
  }
  return ant;
};
