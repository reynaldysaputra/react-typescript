import { Provider } from "react-redux"
import Apps from "./App"
import store from './store/store';

export const App12 = () => {
  return(
    <Provider store={store}>
      <Apps/>
    </Provider>
  )
}