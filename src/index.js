import ReactDOM  from "react-dom/client";
import AppClass from "./ex1-class/AppClass";
import AppFunction from "./ex2-function/AppFunction";
import AppArrowFunction from "./ex3-arrowFunction/AppArrowFunction";
import Table from "./ex4-table/Table";
import Style from "./ex5-css/Style";
import "bootstrap/dist/css/bootstrap.css";
import NameList from "./ex6-var-function/NameList";

const greeting = <div>Hello Welcome!</div>;
const menu = <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
</ul>
console.log("Hey there!");
const root = ReactDOM.createRoot(document.getElementById('root'));

const names = ["Helene Berg", "Michel Jacksson"];
root.render(<NameList names={names} />);