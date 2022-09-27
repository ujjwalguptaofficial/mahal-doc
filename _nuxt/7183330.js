(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{225:function(e,n,t){"use strict";t.r(n);var o={components:{Layout:t(176).a}},r=t(14),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Layout",{attrs:{title:"Store Mutation",description:"The Task decorator can be used to map the store task.",keywords:"mahal, store, mutation",contentSrc:"/home/runner/work/mahal-doc/mahal-doc/content/docs/store/expression.md"}},[t("h1",{attrs:{id:"expression"}},[e._v("Expression")]),e._v(" "),t("p",[e._v("The "),t("code",{pre:!0},[e._v("expression")]),e._v(" decorator can be used to map the store expression.")]),e._v(" "),t("pre",[t("code",{pre:!0},[e._v('<html>\n<div>\n    <input type="text" :value="name" @input="onNameInput" />\n    <div>{{name}}</div>\n    <div>nameLength - {{nameLength}}</div>\n</div>\n</html>\n\n<script>\nimport { Component } from "mahal";\nimport { state, mutation, task, expression } from "@mahaljs/store";\n\nexport default class extends Component {\n\n    // map with `name` state\n    @state(\'name\') name;\n\n    @mutation(\'name\') setName;\n\n    @expression(\'nameLength\') nameLength;\n\n    onNameInput(e){\n        const value = e.target.value;\n        this.setName(value);\n    }\n}\n<\/script>\n')])])])}),[],!1,null,null,null);n.default=component.exports}}]);