(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{200:function(e,t,n){"use strict";n.r(t);var o={components:{Layout:n(176).a}},r=n(14),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",{attrs:{title:"Store",description:"Store are used to save state of the application which can be accessed in all components.",keywords:"mahal, store, ui, framework",contentSrc:"/home/runner/work/mahal-doc/mahal-doc/content/docs/store/index.md"}},[n("h1",{attrs:{id:"store"}},[e._v("Store")]),e._v(" "),n("p",[e._v("Store are used to save state of the application which can be accessed in all components. It can be treated as data layer which contains data stored as a single unit.")]),e._v(" "),n("p",[e._v("Mahal provides "),n("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/mahal-store"}},[e._v("mahal-store")]),e._v(" for store management. But it doesn't force you to use this, you are free to use any other store library.")]),e._v(" "),n("p",[e._v("👉 mahal-store uses "),n("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/godam"}},[e._v("Godam")]),e._v(" for store management. mahal-store just provides you different hooks as decorator to easily integrate with mahal framework.")]),e._v(" "),n("p",[e._v("A simple example of store looks like this in Godam - ")]),e._v(" "),n("pre",[n("code",{pre:!0},[e._v("import { Godam, Mutation,Expression, Task, Computed} from \"godam\";\n\nclass MyState{\n\n    constructor(){\n        this.name = \"Ujjwal Gupta\"\n    }\n\n}\n\n\nclass MyMutation extends Mutation{\n\n    name(value){\n        this.state.name = value;\n    }\n}\n\nclass MyExpression extends Expression {\n\n    @Computed('name')\n    get nameLength() {\n        return this.get('name').length;\n    }\n\n    nameWithPrefix(prefix){\n        return prefix + this.get('name')\n    }\n}\n\nclass MyTask extends Task {\n\n    saveInfo(name){\n        const savedName = this.get('name');\n        if(name!=savedName){\n            this.set('name', name);\n        }\n        const payload = {\n            name : name,\n            count: this.eval('nameCount')\n        }\n    }\n}\n\n\nconst myStore = new Godam({\n    state : MyState,\n    mutation: MyMutation,\n    expression: MyExpression,\n    task: MyTask\n})\n")])]),e._v(" "),n("p",[e._v("For more info, please read the godam docs - "),n("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/godam"}},[e._v("https://github.com/ujjwalguptaofficial/godam")])]),e._v(" "),n("p",[e._v("Let's use "),n("code",{pre:!0},[e._v("myStore")]),e._v(" in our mahal app.")]),e._v(" "),n("p",[n("code",{pre:!0},[e._v("mahal-store")]),e._v(" is exported as plugin. So you need to install the plugin in your app.")]),e._v(" "),n("pre",[n("code",{pre:!0},[e._v('import { Mahal } from "mahal";\nimport Main from "./components/main.mahal";\nimport MahalStore from "@mahaljs/store";\nimport store from "../store";\n\nexport const app = new Mahal(Main, \'#app\');\n// install mahal store plugin\napp.extend.plugin(MahalStore, store);\n\napp.create();\n')])]),e._v(" "),n("p",[e._v("Once plugin is installed, you can access the "),n("code",{pre:!0},[e._v("store")]),e._v(" variable available on the "),n("code",{pre:!0},[e._v("global")]),e._v(" prop in the component. Let's see how to use it inside component - ")]),e._v(" "),n("pre",[n("code",{pre:!0},[e._v('<html>\n<div>\n    <div>{{name}}</div>\n</div>\n</html>\n\n<script>\nimport { Component, Computed, Reactive } from "mahal";\n\nexport default class extends Component {\n\n    onInit(){\n        this.store = this.global.store;\n    }\n\n    get name(){\n         return this.store.get("name");\n    }\n}\n<\/script>\n')])]),e._v(" "),n("p",[e._v("mahal-store provides following decorators as hooks to help you access the store in easiest way - ")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"/docs/store/state"}},[e._v("State")])]),e._v(" "),n("li",[n("a",{attrs:{href:"/docs/store/mutation"}},[e._v("Mutation")])]),e._v(" "),n("li",[n("a",{attrs:{href:"/docs/store/task"}},[e._v("Task")])]),e._v(" "),n("li",[n("a",{attrs:{href:"/docs/store/expression"}},[e._v("Expression")])])])])}),[],!1,null,null,null);t.default=component.exports}}]);