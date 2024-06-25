import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdb, capita) {
  const budget = getBudgetObject(income, gdb, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
