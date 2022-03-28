import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { contactReducer } from './reducers/contact';

const rootReducers = combineReducers({
  contact: contactReducer
})

const AppStore13 = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware())
)

export type RootState = ReturnType<typeof rootReducers>;

export default AppStore13;