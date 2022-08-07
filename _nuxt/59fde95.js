(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{198:function(t,e,n){"use strict";n.r(e);var o={components:{Layout:n(176).a}},r=n(14),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{attrs:{title:"Get started",description:"Get started with mahal",keywords:"mahal",contentSrc:"/home/runner/work/mahal-doc/mahal-doc/content/docs/get-started.md"}},[n("h1",{attrs:{id:"getstarted"}},[t._v("Get Started")]),t._v(" "),n("iframe",{attrs:{width:"100%",height:"443",src:"https://www.youtube.com/embed/6S9iMpv57Bg?list=PLdsO1qVTxvBVCBkNR-stLZGhEtCRfJQhh",title:"Mahal.js Introduction",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),t._v(" "),n("p",[n("br"),n("br"),t._v("\nThe "),n("code",{pre:!0},[t._v("mahal")]),t._v(" is a javascript framework for UI development. It is similar to react or vue but without virtual DOM. ")]),t._v(" "),n("div",{staticClass:"highlight"},[t._v("\nMahal is a hindi word which means palace.\n")]),t._v(" "),n("p",[n("br")]),t._v(" "),n("p",[n("strong",[t._v("In this Get Started tutorial - we will learn about how we can create a simple counter app.")])]),t._v(" "),n("p",[t._v("You can download the code of this tutorial from - "),n("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/mahal-examples"}},[t._v("https://github.com/ujjwalguptaofficial/mahal-examples")])]),t._v(" "),n("h2",{attrs:{id:"setup"}},[t._v("Setup")]),t._v(" "),n("p",[t._v("mahal provides "),n("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/mahal-creator"}},[n("strong",[t._v("mahal-creator")])]),t._v(" for initializing the project and help you with the development.")]),t._v(" "),n("p",[t._v("Let's initiate a new project")]),t._v(" "),n("pre",[n("code",{pre:!0,attrs:{class:"bash language-bash"}},[t._v("npx mahal-creator init\n")])]),t._v(" "),n("p",[t._v("once the project is successfully initiated, run these command -")]),t._v(" "),n("pre",[n("code",{pre:!0},[t._v("cd <project name>\nnpm run dev\n")])]),t._v(" "),n("p",[t._v("this wil start the development server ")]),t._v(" "),n("h3",{attrs:{id:"component"}},[t._v("Component")]),t._v(" "),n("p",[t._v("A Component is reusable piece of UI code and acts as buliding block for your app. A single component contains - ")]),t._v(" "),n("ol",[n("li",[t._v("HTML - html code to represent UI.")]),t._v(" "),n("li",[t._v("Script - javascript code for handling logic")]),t._v(" "),n("li",[t._v("Style - css code for styling the UI.")])]),t._v(" "),n("p",[n("br"),t._v("\nLet's create a component for our counter app. Create a file - "),n("code",{pre:!0},[t._v("counter.mahal")])]),t._v(" "),n("pre",[n("code",{pre:!0},[t._v('<html>\n\n<div>\n  <div>{{count}}</div>\n  <button on:click="incrementCount">Increment count</button>\n</div>\n\n</html>\n\n<script>\nimport { Component, Reactive } from "mahal";\nexport default class extends Component{\n\n  @Reactive\n  count = 0;\n\n  incrementCount(){\n    this.count++;\n  }\n}\n<\/script>\n')])]),t._v(" "),n("p",[t._v("The above component - ")]),t._v(" "),n("ol",[n("li",[t._v("Renders the "),n("code",{pre:!0},[t._v("count")]),t._v(" from the script.")]),t._v(" "),n("li",[t._v("Contains a button which will call method "),n("code",{pre:!0},[t._v("incrementCount")]),t._v(" on click.")]),t._v(" "),n("li",[t._v("It uses "),n("code",{pre:!0},[t._v("Reactive")]),t._v(" decorator which makes the "),n("code",{pre:!0},[t._v("count")]),t._v(" variable reactive. It means if you will change the value of "),n("code",{pre:!0},[t._v("count")]),t._v(" - automatically it will be updated in UI.")])]),t._v(" "),n("p",[n("br"),t._v("\nLet's use this "),n("code",{pre:!0},[t._v("counter")]),t._v(" component now. Open "),n("code",{pre:!0},[t._v("app.mahal")]),t._v(" and add this component as children.")]),t._v(" "),n("pre",[n("code",{pre:!0},[t._v('<html>\n\n<div>\n  <Count />\n</div>\n\n</html>\n\n<script>\nimport { Component, Reactive, Children } from "mahal";\nimport Count from "@/components/count.mahal";\n\n@Children({\n  Count\n})\nexport default class extends Component {\n\n\n}\n<\/script>\n')])]),t._v(" "),n("p",[t._v("That's it and now "),n("code",{pre:!0},[t._v("Count")]),t._v(" component will be rendered as children of "),n("code",{pre:!0},[t._v("App")]),t._v(" Component.")]),t._v(" "),n("p",[t._v("We hope you are able to understand this tutorial. Now let's make our "),n("code",{pre:!0},[t._v("mahal (palace)")]),t._v(" and show it to world. ")]),t._v(" "),n("h3",{attrs:{id:"someimportantlinks"}},[t._v("Some important links")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/mahal-examples"}},[t._v("Examples")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);