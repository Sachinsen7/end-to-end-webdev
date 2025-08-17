document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalDiv = document.getElementById("total");
  const totalBalanceDIsplay = document.getElementById("total-amount");

  let expenseNames = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmount = calculateTotal();

  renderExpenses();

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());

    if (name !== "" && !isNaN(amount) && amount > 0) {
      const newExpenses = {
        id: Date.now(),
        name: name,
        amount: amount,
      };

      expenseNames.push(newExpenses);
      saveExpensesToLocal();
      renderExpenses();
      updateTotal();

      //clear Input
      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    }
  });

  function renderExpenses() {
    expenseList.innerHTML = "";
    expenseNames.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `
      ${expense.name} - $${expense.amount}
      <button data-id="${expense.id}">Delete</button>
      `;
      expenseList.appendChild(li);
    });

    saveExpensesToLocal();
  }
  function calculateTotal() {
    return expenseNames.reduce((sum, expense) => sum + expense.amount, 0);
  }

  function saveExpensesToLocal() {
    localStorage.setItem("expenses", JSON.stringify(expenseNames));
  }

  function updateTotal() {
    totalAmount = calculateTotal();
    totalBalanceDIsplay.textContent = `$${totalAmount.toFixed(2)}`;

    renderExpenses();
    saveExpensesToLocal();
  }

  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const expenseID = parseInt(e.target.getAttribute("data-id"));
      expenseNames = expenseNames.filter((expense) => expense.id !== expenseID);

      saveExpensesToLocal();
      renderExpenses();
      updateTotal();
    }
  });
});
