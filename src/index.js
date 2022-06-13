import { createRoot } from "react-dom/client";
import App from "./App";

import "./style/index.scss";

const app = document.getElementById("app");
const root = createRoot(app);
root.render(<App />);
