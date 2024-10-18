// export default function Todo({task , isDone}){
//   return (
//     <li>this is a todo file : {task} </li>
//   )
// }

import { renderToStaticMarkup } from "react-dom/server"


// condition rendering option:1
// export default function Todo({task , isDone}){
//   if(isDone === "true"){
//     return <li>finished : {task}</li>
//   }
//   else{
//     return <li>not finished : {task}</li>
//   }
// }

// condition rendering option: 2
// export default function Todo({task , isDone}){
//      if(isDone){
//       return <li>finished: {task}</li>
//      }
//      return <li>not finished : {task}</li>
//   }  



// conditional rendering option:3 (ternary operator)
// export default function Todo({task , isDone}){
//      return (
//        <li> {isDone ? 'completed' : 'not completed'} : {task} </li>
//      )
//    }

// // conditional rendering operator 4 (&&)
// export default function Todo({task , isDone}){
//      return (
//        <li> {task} {isDone && ': Done'} </li>
//      )
//    }


// conditional rendering operator 4 (||)
// export default function Todo({task , isDone}){
//    return (
//      <li> {task} {isDone || ': do it'} </li>
//    )
//  }



// condition rendering option: 6
export default function Todo({task, isDone}){
  let listItem;
     if(isDone){
      listItem =<li> finished: {task}</li>
     }
     else{
      listItem = <li> not finished: {task}</li>
     }
     return listItem;
  }  

