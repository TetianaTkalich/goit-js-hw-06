const input = document.getElementById('validation-input');
const validLength = Number(input.dataset.length);

const borderColor = (event) => {
  const trimmedInput = event.currentTarget.value.trim();

  trimmedInput.length === validLength
    ? (input.classList.add("valid"), input.classList.remove("invalid"))
    : (input.classList.add("invalid"), input.classList.remove("valid"));
};

input.addEventListener("blur", borderColor);