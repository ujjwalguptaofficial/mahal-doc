(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{209:function(n,e,t){"use strict";t.r(e);var o={components:{Layout:t(176).a}},m=t(14),component=Object(m.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("Layout",{attrs:{title:"Event in Component",description:"Get started with mahal",keywords:"mahal",contentSrc:"/home/runner/work/mahal-doc/mahal-doc/content/docs/basic/event.md"}},[t("h1",{attrs:{id:"event"}},[n._v("Event")]),n._v(" "),t("p",[n._v("In mahal - you can listen to an event by using "),t("code",{pre:!0},[n._v("on:<eventname>")]),n._v(" or "),t("code",{pre:!0},[n._v("@<eventName>")]),n._v(" syntax -")]),n._v(" "),t("pre",[t("code",{pre:!0},[n._v('<html>\n    <div>My name is {{name}}</div>\n    <button on:click="changeName">change my name</button>\n</html>\n<script>\nimport {Component, Reactive } from "mahal"\nexport default class MainComponent extends Component {\n\n    name = "ujjwal gupta"\n\n    changeName(){\n        this.name="DC is love."\n    }\n}\n<\/script>\n')])]),n._v(" "),t("p",[n._v("Mahal supports all html events like - "),t("code",{pre:!0},[n._v("click")]),n._v(", "),t("code",{pre:!0},[n._v("focus")]),n._v(" etc")]),n._v(" "),t("h2",{attrs:{id:"componentevent"}},[n._v("Component event")]),n._v(" "),t("p",[n._v("A Component can emit an event which can be used by parent component. The event makes the component independent of its parent thus loosely coupled.")]),n._v(" "),t("p",[n._v("Consider a login form as child component which has - email and password field. It just takes the value and emit the value to its user (parent component). ")]),n._v(" "),t("pre",[t("code",{pre:!0},[n._v('<html>\n<div>\n    <div>\n        Email Id:- <input type="text" :value="email" on:input="onEmail">\n    </div>\n    <div>\n        Password:- <input type="text" :value="password" on:input="onPassword">\n    </div>\n    <div>\n        <button on:click="submit">Submit</button>\n    </div>\n</div>\n</html>\n<script>\nimport {Component, Reactive } from "mahal"\n\nexport default class LoginComponent extends Component{\n\n    email="";\n\n    password="";\n\n    onEmail(value){\n        this.email = value;\n    }\n\n    onPassword(value){\n        this.password = value;\n    }\n\n    submit(){\n        this.emit("submit", {\n            email: this.email,\n            password: this.password\n        })\n    }\n}\n<\/script>\n')])]),n._v(" "),t("p",[n._v("Now let's use the above component in a "),t("code",{pre:!0},[n._v("MainComponent")]),n._v(" - ")]),n._v(" "),t("pre",[t("code",{pre:!0},[n._v('<html>\n    <Login on:submit="onLoginSubmit" />\n</html>\n<script>\nimport {Component, Children } from "mahal"\nimport Login from "./login.mahal";\n\n@Children({\n    Login\n})\nexport default class MainComponent extends Component {\n\n    onLoginSubmit(value){\n        console.log("data", value);\n    }\n}\n<\/script>\n')])])])}),[],!1,null,null,null);e.default=component.exports}}]);