import "./ExpensesForm.css";

function ExpensesForm() {
  return (
    <form>
      <div className="expenses_container">
        <div className="new-expenses">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expenses">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expenses">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div>
        <button>Add expense</button>
      </div>
    </form>
  );
}

export default ExpensesForm;
