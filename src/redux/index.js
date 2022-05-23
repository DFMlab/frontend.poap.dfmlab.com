import { configureStore  } from "@redux/toolkit"
import { poapReducer } from './reducers/'

const poapStore = configureStore(poapReducer);

export { poapStore }