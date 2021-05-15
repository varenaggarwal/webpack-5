import App from "./App";
// import Logo
import Logo from "./logo.svg";

// inside innerHTML
const root = document.getElementById("root");
root.innerHTML = `
<img src="${Logo}" alt="build icon" />;
<h1>Learning Webpack tooling</h1>
${App({ name: "Varen" })}
`;
