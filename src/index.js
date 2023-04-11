import ReactDOM  from "react-dom/client";
import AppClass from "./ex1-class/AppClass";
import AppFunction from "./ex2-function/AppFunction";
import AppArrowFunction from "./ex3-arrowFunction/AppArrowFunction";
import Table from "./ex4-table/Table";
import Style from "./ex5-css/Style";
import "bootstrap/dist/css/bootstrap.css";
import NameList from "./ex6-var-function/NameList";
import Menu from "./ex7-props/Menu";
import App from "./ex7-props/App";
import Car from "./ex8-state/Car";
import ProductList from "./ex8-state/ProductList";
import Counter from "./ex9-events/Counter";
import Person from "./ex9-events/Person";
import UseStateExample from "./ex10-component-lifecycle/UseStateExample";
import UseStateExample1 from "./ex10-component-lifecycle/UseStateExample1";
import UseEffectExample from "./ex10-component-lifecycle/UseEffectExample";
import HookForm from "./ex10-component-lifecycle/HookForm";
import Axios from "./ex11-axios/Axios";
import { Router } from "react-router-dom";
import RouterDemo from "./ex12-router/RouterDemo";

const greeting = <div>Hello Welcome!</div>;
const menu = <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
</ul>
console.log("Hey there!");
const root = ReactDOM.createRoot(document.getElementById('root'));

const names = ["Helene Berg", "Michel Jacksson"];
root.render(<RouterDemo />);