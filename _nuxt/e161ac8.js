(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{211:function(e,t,n){"use strict";n.r(t);var o={components:{Layout:n(176).a}},r=n(14),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",{attrs:{title:"Component",description:"Get started with mahal",keywords:"mahal",contentSrc:"/home/runner/work/mahal-doc/mahal-doc/content/docs/basic/dependency-injection.md"}},[n("h1",{attrs:{id:"computed"}},[e._v("Computed")]),e._v(" "),n("p",[e._v("A computed is derived property from reactive property. The computed property is automatically evaluated when the target reactive property changes.")]),e._v(" "),n("p",[e._v("For making a property "),n("code",{pre:!0},[e._v("computed")]),e._v(" you will have to use decorator - "),n("code",{pre:!0},[e._v("Computed")]),e._v(" which will take the list of reactive props to depend on. ")]),e._v(" "),n("p",[e._v("A simple example of computed property is evaluating full name from first name and last name. ")]),e._v(" "),n("pre",[n("code",{pre:!0},[e._v('<html>\n    <div>My name is {{fullName}}</div>\n</html>\n<script>\nimport { Component, Computed, Reactive } from "mahal";\n\nexport default class extends Component {\n\n    @Reactive\n    firstName = "ujjwal";\n\n    @Reactive\n    lastName = "gupta";\n\n    @Computed("firstName", "lastName")\n    get fullName() {\n        return this.firstName + " " + this.lastName;\n    }\n}\n<\/script>\n')])])])}),[],!1,null,null,null);t.default=component.exports}}]);