document.addEventListener('DOMContentLoaded', () => {
  const result = document.getElementById('result');
  const buttons = document.querySelectorAll('.buttons button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;

      if (value === 'C') {
        result.value = '';
      } else if (value === '⌫') {
        result.value = result.value.slice(0, -1);
      } else if (value === '=') {
        try {
          result.value = eval(result.value.replace('×', '*').replace('÷', '/'));
        } catch {
          result.value = 'Error';
        }
      } else {
        result.value += value;
      }
    });
  });
});



// Switch to History View
document.getElementById("history-icon").addEventListener("click", function () {
  document.getElementById("calculator-view").style.display = "none";
  document.getElementById("history-view").style.display = "flex";
});

// Back to Calculator View
document.getElementById("back-arrow").addEventListener("click", function () {
  document.getElementById("calculator-view").style.display = "flex";
  document.getElementById("history-view").style.display = "none";
});
