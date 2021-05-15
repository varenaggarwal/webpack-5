import _ from "lodash";
import "./App.css";

const App = ({ name }) => {
  console.log("testing...");
  return `
    <h2> ${_.join(["Welcome,", name], " ")} </h2>
    <p> Build apps with plain JS but with modern tooling Today!  </p>
    `;
};

export default App;
