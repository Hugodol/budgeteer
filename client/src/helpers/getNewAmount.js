
const getNewAmount = (key, oldAmount, newExpense) => {
  let amount = Number(oldAmount);
  let expense = Number(newExpense);
  let newAmount = Math.round((amount - expense) * 100) / 100;
  return {[key]: newAmount};
}

export default getNewAmount;