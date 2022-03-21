const initialStateExpenses= {
  expensesList: [],
  query: ""
}

export const expensesReducer = (state= initialStateExpenses, action: any) => {
  switch(action.type){
    default:
      return state;
  } 
}