const inputAmount = document.getElementById("amount");
const buttonGenerate = document.getElementById("generate");
const inputPassword = document.getElementById("password");

function generatePassword(length) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

buttonGenerate.addEventListener("click", () => {
  const amount = parseInt(inputAmount.value);

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid number of characters");
    return;
  }

  const password = generatePassword(amount);
  inputPassword.value = password;
});
