import App from "./App";

const root = document.getElementById("root");
root.innerHTML = `
<h1>Learning Webpack tooling</h1>
${App({ name: "Varen" })}
`;
