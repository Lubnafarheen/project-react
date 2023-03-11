import ReactDOM  from "react-dom/client";
import AppClass from "./ex1-class/AppClass";
import AppFunction from "./ex2-function/AppFunction";
import AppArrowFunction from "./ex3-arrowFunction/AppArrowFunction";

const greeting = <div>Hello Welcome!</div>;
const menu = <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
</ul>
console.log("Hey there!");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppArrowFunction />);