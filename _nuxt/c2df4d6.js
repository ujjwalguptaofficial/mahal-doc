(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{178:function(t,e,n){var content=n(186);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("98333452",content,!0,{sourceMap:!1})},185:function(t,e,n){"use strict";n(178)},186:function(t,e,n){var r=n(32)(!1);r.push([t.i,'.b-menu[data-v-11f8694a]{justify-content:space-between;align-items:center;background:var(--primary-color);padding:0 10px;height:64px;color:var(--primary-contrast-color);position:-webkit-sticky;position:sticky;z-index:1001;top:0}.b-menu__left__icon img[data-v-11f8694a]{height:22px}.b-menu__left__hamburger[data-v-11f8694a]{background-color:transparent;outline:none;border:0;color:#fff;height:64px;margin-right:10px}@media (min-width:768px){.b-menu__left__icon img[data-v-11f8694a]{height:30px}.b-menu__left__hamburger[data-v-11f8694a]{display:none}}a[data-v-11f8694a]{color:var(--primary-contrast-color)}.b-menu__github-info[data-v-11f8694a]{justify-content:flex-end}@media (max-width:576px){.b-menu__github-info__item.hide-on-mobile[data-v-11f8694a]{display:none}}#selectVersions[data-v-11f8694a]{-webkit-appearance:menulist;background-color:#fff;margin-top:-3px;margin-left:5px;padding:3px;width:50px}.height-50px[data-v-11f8694a]{height:50px}.star-count[data-v-11f8694a]{padding:5px;color:#000;background:#fff;margin-left:6px;position:relative;border-radius:4px}.star-count[data-v-11f8694a]:before{content:"";position:absolute;display:inline-block;width:0;height:0;top:50%;left:-5px;margin-top:-6px;border-color:transparent #fafafa transparent transparent;border-style:solid;border-width:6px 6px 6px 0}',""]),t.exports=r},196:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(26),n(35),n(11),n(36),n(88)),l={created:function(){this.repoUrl="ujjwalguptaofficial/mahal"},computed:{shouldShowMenuIcon:function(){return"/"!=this.$route.path},githubUrl:function(){return"https://github.com/"+this.repoUrl},forkUrl:function(){return this.githubUrl+"/fork"},apiUrl:function(){return"https://api.github.com/repos/"+this.repoUrl}},data:function(){return{release:null,starCount:null}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.activeVersion=t.getVersion(),e.prev=1,e.next=4,Promise.all([fetch(t.apiUrl),fetch("".concat(t.apiUrl,"/releases"))]);case 4:return n=e.sent,e.next=7,n[0].json();case 7:return t.starCount=e.sent.stargazers_count,e.next=10,n[1].json();case 10:r=e.sent,t.release={tag:r[0].tag_name,url:r[0].html_url},e.next=16;break;case 14:e.prev=14,e.t0=e.catch(1);case 16:case"end":return e.stop()}}),e,null,[[1,14]])})))()},methods:{onMenuBtnClick:function(){o.a.$emit("menuClicked")},onVersionChange:function(){this.$emit("version_change",this.activeVersion)},getVersion:function(){var t=this.$route.path;return t.indexOf("v1")>=0&&t.indexOf("v2")<0?1:t.indexOf("v2")>=0&&t.indexOf("v3")<0?2:3}}},c=(n(185),n(14)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-menu row"},[n("div",{staticClass:"row col-6 col-sm-4 b-menu__left",style:{visibility:"/"==t.$route.path?"hidden":"visible"}},[t.shouldShowMenuIcon?n("button",{staticClass:"b-menu__left__hamburger",on:{click:t.onMenuBtnClick}},[n("i",{staticClass:"material-icons"},[t._v("menu")])]):t._e(),t._v(" "),n("a",{staticClass:"row b-menu__left__icon content-v-center",attrs:{href:"/",title:"Mahal Index Page"}},[n("img",{attrs:{src:t._f("imgPath")("logo.png"),alt:"mahal Logo"}}),t._v(" "),n("span",{staticClass:"ml-10px"},[t._v("Mahal")])])]),t._v(" "),n("div",{staticClass:"col-6 col-sm-8 row content-v-center b-menu__github-info",attrs:{id:"b-menu__github-info"}},[n("a",{staticClass:"b-menu__github-info__item",attrs:{title:"star mahal",href:t.githubUrl}},[n("i",{staticClass:"fab fa-github"}),t._v("\n      Star\n      "),t.starCount?n("span",{staticClass:"star-count"},[t._v(t._s(t.starCount))]):t._e()]),t._v(" "),n("span",{staticClass:"b-menu__github-info__item hide-on-mobile"},[n("span",{staticClass:"ml-10px mr-10px"},[t._v("|")]),t._v(" "),n("a",{attrs:{title:"fork on github",href:t.forkUrl}},[n("svg",{staticClass:"octicon octicon-repo-forked",staticStyle:{fill:"white","vertical-align":"sub"},attrs:{version:"1.1",width:"10",height:"18",viewBox:"0 0 10 16","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}})]),t._v("\n        Fork\n      ")])]),t._v(" "),n("span",{staticClass:"b-menu__github-info__item hide-on-mobile"},[t.release?[n("span",{staticClass:"ml-10px mr-10px"},[t._v("|")]),t._v(" "),n("a",{attrs:{target:"_blank",href:t.release.url}},[t._v(t._s(t.release.tag))])]:t._e()],2)])])}),[],!1,null,"11f8694a",null);e.default=component.exports}}]);