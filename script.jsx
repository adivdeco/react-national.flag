import { createRoot } from "react-dom/client";
import App from "./App";

// fetch('https://freetestapi.com/api/v1/countries')
//     .then(res => res.json())
//     .then((data) => {
//       console.log(data),
//        [
//         <Counterycard />,
//         <Counterycard />,
//         <Counterycard />,
//         <Counterycard />,

//        ]
//       })

const root = createRoot(document.querySelector("#root"))

root.render(<App/>)
