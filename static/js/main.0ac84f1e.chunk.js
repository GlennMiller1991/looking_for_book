(this.webpackJsonplooking_for_book=this.webpackJsonplooking_for_book||[]).push([[0],{3:function(e,t,n){e.exports={app:"App_app__1YSN_",hat:"App_hat__216gS",booksWrapper:"App_booksWrapper__1ezzE",booksContainer:"App_booksContainer__LZ7oM",book:"App_book__1LxLc"}},30:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n.n(o),c=n(9),i=n.n(c),r=(n(30),n(4)),a=n(25),A=n(3),g=n.n(A),u=n(5),j=n(13),l="CHANGE_SEARCH_QUERY",x="RENEW_SEARCH_RESULTS",b="CHANGE_IS_LOADING_STATUS",d=function(e){return{type:b,payload:{isLoading:e}}},f=function(e,t){return{type:x,payload:{books:e,totalCount:t,isLoading:!1}}},B={pageSize:2,books:[],isLoading:!1,totalCount:0,queryString:""},I=n.p+"static/media/preloader.53b421a8.gif",O=n(24),p=n.n(O).a.create({baseURL:"https://www.googleapis.com/books/v1/volumes"});p.defaults.params={},p.defaults.params.key="AIzaSyCI0tPq7SoEIfpnkJRjqbu_YIDUeMVvZHU";var D=function(e,t,n){return p.get("?q=".concat(e,"&maxResults=").concat(t,"&startIndex=").concat(n)).then((function(e){return 200===e.status?e.data:{totalItems:0,items:[],kind:"Unknown error"}})).catch((function(e){return console.log(e),{totalItems:0,items:[],kind:"Unknown error"}}))},h=n(1);var m=function(){return console.log("from app"),Object(h.jsxs)("div",{className:g.a.app,children:[Object(h.jsx)(k,{}),Object(h.jsx)(E,{})]})},k=s.a.memo((function(){console.log("from hat");var e=Object(o.useState)(""),t=Object(a.a)(e,2),n=t[0],s=t[1],c=Object(u.b)();return Object(h.jsxs)("div",{className:g.a.hat,children:[Object(h.jsx)("h1",{children:"Search for books"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{value:n,onChange:function(e){s(e.currentTarget.value.trim())},onKeyPress:function(e){"Enter"===e.code&&n&&c({type:l,payload:{queryString:n}})}}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("select",{value:"first",children:[Object(h.jsx)("option",{value:"first",children:"first"}),Object(h.jsx)("option",{value:"second",children:"second"})]}),Object(h.jsxs)("select",{value:"first",children:[Object(h.jsx)("option",{value:"first",children:"first"}),Object(h.jsx)("option",{value:"second",children:"second"})]})]})]})]})})),E=s.a.memo((function(){console.log("from Books");var e=Object(u.c)((function(e){return e.searchResults})),t=Object(u.b)();return Object(o.useEffect)((function(){console.log("from useEffect"),e.queryString&&(t(d(!0)),D(e.queryString,e.pageSize,0).then((function(e){t(f(e.items,e.totalItems))})))}),[e.queryString]),Object(h.jsxs)(s.a.Fragment,{children:[e.totalCount>0&&Object(h.jsx)(s.a.Fragment,{children:Object(h.jsxs)("div",{className:g.a.booksWrapper,children:[Object(h.jsx)("div",{children:e.totalCount}),Object(h.jsx)("div",{className:g.a.booksContainer,children:e.books.map((function(e,t){return console.log(e.volumeInfo.categories),Object(h.jsx)(H,Object(r.a)({},e.volumeInfo),t)}))}),!e.isLoading&&Object(h.jsx)("div",{onClick:function(){t(d(!0)),D(e.queryString,e.pageSize,e.books.length).then((function(e){t(f(e.items,e.totalItems))}))},children:"Load more"})]})}),e.isLoading&&Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:I,alt:"preloader"})})]})})),H=s.a.memo((function(e){return Object(h.jsxs)("div",{className:g.a.book,children:[Object(h.jsx)("img",{src:e.imageLinks?e.imageLinks.smallThumbnail:"data:image/png;base64,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",alt:"bookPic"}),Object(h.jsx)("h3",{children:e.title?e.title:""}),Object(h.jsx)("div",{children:Object(h.jsx)("span",{className:g.a.authors,children:e.authors?e.authors:""})}),Object(h.jsx)("div",{children:Object(h.jsx)("span",{className:g.a.categories,children:e.categories?e.categories[0]:""})})]})})),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),o(e),s(e),c(e),i(e)}))},C=n(14),w=Object(C.a)({searchResults:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(r.a)(Object(r.a)({},e),{},{totalCount:t.payload.totalCount,isLoading:t.payload.isLoading,books:[].concat(Object(j.a)(e.books),Object(j.a)(t.payload.books))});case b:case l:return Object(r.a)(Object(r.a)({},e),t.payload);default:return e}}}),J=Object(C.b)(w);i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(u.a,{store:J,children:Object(h.jsx)(m,{})})}),document.getElementById("root")),S()}},[[56,1,2]]]);
//# sourceMappingURL=main.0ac84f1e.chunk.js.map