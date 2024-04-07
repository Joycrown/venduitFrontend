import { Provider } from "react-redux"
import Routers from "./utils/routes/router"
import { store } from "./services/store"


function App() {
 

  return (
    <Provider store={store}>
      <Routers/>

    </Provider>
  )
}

export default App
