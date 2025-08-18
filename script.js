//  TAB SWITCH
function showTab(tabId) {
  document
    .querySelectorAll(".tab-content")
    .forEach((el) => el.classList.remove("active"));
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
  event.target.classList.add("active");
}

// SCIENTIFIC CALCULATOR
let simpleInput = document.getElementById("simpleInput");

function appendValue(val) {
  simpleInput.value += val;
}

function calculate() {
  try {
    let expression = simpleInput.value
      .replace(/sin\(/g, "Math.sin(")
      .replace(/cos\(/g, "Math.cos(")
      .replace(/tan\(/g, "Math.tan(")
      .replace(/sqrt\(/g, "Math.sqrt(")
      .replace(/log\(/g, "Math.log10(")
      .replace(/\^/g, "**");

    simpleInput.value = eval(expression);
  } catch {
    simpleInput.value = "Error";
  }
}

function clearInput() {
  simpleInput.value = "";
}

function deleteInput() {
  simpleInput.value = simpleInput.value.toString().slice(0, -1);
}

// MULTI-BASE CONVERTER
function convertNumber() {
  const input = document.getElementById("numberInput").value.trim();
  const fromBase = parseInt(document.getElementById("fromBase").value);

  let decimalValue;
  try {
    decimalValue = parseInt(input, fromBase);
    if (isNaN(decimalValue)) throw "Invalid";
  } catch {
    decimalValue = null;
  }

  if (decimalValue !== null) {
    document.getElementById("decimalOutput").innerText = decimalValue;
    document.getElementById("binaryOutput").innerText =
      decimalValue.toString(2);
    document.getElementById("octalOutput").innerText = decimalValue.toString(8);
    document.getElementById("hexOutput").innerText = decimalValue
      .toString(16)
      .toUpperCase();
    document.getElementById("romanOutput").innerText = toRoman(decimalValue);
  } else {
    document.getElementById("decimalOutput").innerText = "-";
    document.getElementById("binaryOutput").innerText = "-";
    document.getElementById("octalOutput").innerText = "-";
    document.getElementById("hexOutput").innerText = "-";
    document.getElementById("romanOutput").innerText = "-";
  }
}

document.getElementById("numberInput").addEventListener("input", convertNumber);
document.getElementById("fromBase").addEventListener("change", convertNumber);
