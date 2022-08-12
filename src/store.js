import { createStore }  from "redux";
import {reducer} from "./reducer"

export const toDosStore = createStore(reducer);