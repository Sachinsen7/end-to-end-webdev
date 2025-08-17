document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalDiv = document.getElementById("total");
  const totalBalanceDIsplay = document.getElementById("total-amount");

  let expenses = JSON.parse(localStorage.getItem("expense")) || [];
  let totalAmount = calculateTotal();

  renderExpense();

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseNameInput.value.trim();

    const amount = parseFloat(expenseAmountInput.value.trim());

    if (name !== "" && !isNaN(amount) && amount > 0) {
      const expensesObj = {
        id: Date.now(),
        name: name,
        amount: amount,
      };

      expenses.push(expensesObj);
      savtoloacal();
      renderExpense();
      updateTotal();

      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    }
  });

  function renderExpense() {
    expenses.innerHTML = "";
    expenses.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `
      ${expense.name} - $${expense.amount}
      <button data-id="${expense.id}">delete</button>
      `;
      expenseList.appendChild(li);
    });

    savtoloacal();
  }

  function savtoloacal() {
    localStorage.setItem("expense", JSON.stringify(expenses));
  }

  function calculateTotal() {
    return expenses.reduce((acc, expense) => acc + expense.amount, 0);
  }

  function updateTotal() {
    totalAmount = calculateTotal();
    totalBalanceDIsplay.textContent = `$${totalAmount.toFixed(2)}`;

    renderExpense();
    savtoloacal();
  }

  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const expenseId = parseInt(e.target.getAttribute("data-id"));
      expenses = expenses.filter((expense) => expense.id !== expenseId);

      savtoloacal();
      renderExpense();
      updateTotal();
    }
  });
});
