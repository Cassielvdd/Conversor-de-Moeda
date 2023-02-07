fetch(`https://economia.awesomeapi.com.br/json
/last/usd`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(`O dolar está á : ${data.USDBRL["low"]}`);
    document.querySelector("#btn").addEventListener("click", () => {
      const calc =
        document.querySelector("#input-1").value * data.USDBRL["low"];
      document.querySelector("#input-2").value = calc.toFixed(2);
    });
  });
