import { v4 as uuidv4 } from "uuid";
import { ADD_TODO, DELETE_TODO} from "./actions"

 export const reducer = (toDos = [], action) => {
    switch (action.type) {
        case ADD_TODO:
                const newTodo ={ text : action.text , id: uuidv4() };
                return [ newTodo, ...toDos]
     
        case DELETE_TODO:
         const cleanTodo = toDos.filter((toDO) => toDO.id !== action.id);
         return cleanTodo
        default:
            return toDos
    }
 };