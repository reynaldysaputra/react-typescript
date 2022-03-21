import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { expensesReducer } from './reducers/expenses';

const rootReducers = combineReducers({
  expenses: expensesReducer
})

const AppStore13 = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware())
)

export type RootState = ReturnType<typeof rootReducers>;

export default AppStore13;