import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
    </>
  );
}


// import { useState } from "react";
// function App() {
//   const [choice, setChoice] = useState(null)
//   let textColor = '';
//   if (choice === 'yes') {
//     textColor = "highlight-green"
//   }else if (choice === 'no') {
//     textColor = "highlight-red"
//   }
//   return (
//     <div id="app">
//       <h1 className={`${textColor}`}>CSS is great!</h1>
//       <menu>
//         <li>
//           <button onClick={() => setChoice('yes')}>Yes</button>
//         </li>
//         <li>
//           <button onClick={() => setChoice('no')}>No</button>
//         </li>
//       </menu>
//     </div>
//   );
// }

// export default App;
