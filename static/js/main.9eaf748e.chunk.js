(this.webpackJsonplooking_for_book=this.webpackJsonplooking_for_book||[]).push([[0],{12:function(e,t,o){e.exports={wholeBook:"WholeBook_wholeBook__3kBNI",image:"WholeBook_image__2__NG",info:"WholeBook_info__1OQul",restInfo:"WholeBook_restInfo__72tyj",categories:"WholeBook_categories__2cEHC",title:"WholeBook_title__1tFPD",authors:"WholeBook_authors__1fz9I",description:"WholeBook_description__3Faad"}},2:function(e,t,o){e.exports={app:"App_app__1YSN_",hat:"App_hat__216gS",darker:"App_darker__24_Y4",searchWrapper:"App_searchWrapper__2Kw16",booksWrapper:"App_booksWrapper__1ezzE",booksContainer:"App_booksContainer__LZ7oM",book:"App_book__1LxLc",imgWrapper:"App_imgWrapper__1YASa",selectsWrapper:"App_selectsWrapper__23TAV",pagesCount:"App_pagesCount__vK0lD",bookTitle:"App_bookTitle__26CfJ",errorMessage:"App_errorMessage__pKQfU",errorText:"App_errorText__2j0KI",preloader:"App_preloader__iVtky",categories:"App_categories__3mZs1",loadMore:"App_loadMore__2Szt3"}},43:function(e,t,o){},69:function(e,t,o){"use strict";o.r(t);var a=o(0),r=o.n(a),n=o(19),c=o.n(n),s=(o(43),o(14)),i=o(4),l=o(2),u=o.n(l),j=o(5),d=o(6),b=o(37),A=o.n(b).a.create({baseURL:"https://www.googleapis.com/books/v1/volumes"});A.defaults.params={},A.defaults.params.key="AIzaSyCI0tPq7SoEIfpnkJRjqbu_YIDUeMVvZHU";var g="CHANGE_SEARCH_QUERY",p="RENEW_SEARCH_RESULTS",m="ADD_SEARCH_RESULT",h="CHANGE_IS_LOADING_STATUS",O="SET_ERROR_MESSAGE",f="SET_BOOK",x="CHANGE_NEED_TO_SEARCH",k=function(e){return{type:f,payload:Object(j.a)({},e)}},B=function(e){return{type:O,payload:{error:e,isLoading:!1}}},I=function(e){return{type:h,payload:{isLoading:e}}},D="-99",C={id:D,kind:""},E=function(e,t,o,a,r){var n="?q=".concat(e)+("all"===r?"":"+subject:".concat(r))+"&maxResults=".concat(t)+"&startIndex=".concat(o,"&orderBy=").concat(a);return A.get(n).then((function(e){if(0===e.data.totalItems)throw Error("There is no book with this title");return e.data})).catch((function(e){return{totalItems:-1,items:[],kind:e.message}}))},S=function(e){var t="/".concat(e,"?");return A.get(t).then((function(e){return e.data})).catch((function(e){return{id:"-1",kind:e.message}}))},v=o.p+"static/media/preloader.7f686c03.gif",H="data:image/png;base64,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",w=o(1),y=r.a.memo((function(e){console.log("from book");var t=Object(d.b)(),o=Object(i.f)();return Object(w.jsxs)("div",{className:u.a.book,onClick:function(){t(k({id:D,kind:""})),o.push("/book/".concat(e.id))},children:[Object(w.jsx)("div",{className:u.a.imgWrapper,children:Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:e.imageLinks?e.imageLinks.smallThumbnail:H,alt:"bookPic"})})}),Object(w.jsx)("span",{className:u.a.categories,children:e.categories?e.categories[0]:""}),Object(w.jsxs)("div",{className:u.a.titleAndAuthors,children:[Object(w.jsx)("h3",{className:u.a.bookTitle,children:e.title?e.title:""}),Object(w.jsx)("div",{children:Object(w.jsx)("span",{className:u.a.authors,children:e.authors?e.authors:""})})]})]})})),J=r.a.memo((function(){console.log("from Books");var e=Object(d.c)((function(e){return e.books})),t=Object(d.c)((function(e){return e.searchResults})),o=Object(d.b)(),n=Object(a.useCallback)((function(){o(I(!0)),setTimeout((function(){E(t.queryString,t.pageSize,e.books.length,t.sort,t.filter).then((function(e){var t;-1===e.totalItems?o(B(e.kind)):o((t=e.items,{type:m,payload:{books:t}}))}))}),2e3)}),[o,t,e.books.length]);return Object(a.useEffect)((function(){t.needToSearch&&t.queryString&&(o(I(!0)),setTimeout((function(){E(t.queryString,t.pageSize,0,t.sort,t.filter).then((function(e){var t,a;-1===e.totalItems?o(B(e.kind)):o((t=e.items,a=e.totalItems,{type:p,payload:{books:t,totalCount:a}}))}))}),2e3))}),[t,o]),Object(w.jsxs)("div",{className:u.a.booksWrapper,children:[e.totalCount>0&&Object(w.jsxs)(r.a.Fragment,{children:[Object(w.jsxs)("h2",{className:u.a.pagesCount,children:["Found ",e.totalCount," results"]}),Object(w.jsx)("div",{className:u.a.booksContainer,children:e.books.map((function(e,t){return Object(w.jsx)(y,Object(j.a)({id:e.id},e.volumeInfo),t)}))})]}),Object(w.jsx)(L,{isLoading:e.isLoading,totalCount:e.totalCount,wasRendered:e.books.length,onClickHandler:n}),e.error&&Object(w.jsx)(N,{message:e.error})]})})),N=r.a.memo((function(e){return console.log("from error"),Object(w.jsx)("div",{className:u.a.errorMessage,children:Object(w.jsxs)("span",{className:u.a.errorText,children:[e.message,". Try again."]})})})),L=r.a.memo((function(e){return console.log("from LoadOrLoad"),Object(w.jsx)(r.a.Fragment,{children:e.isLoading?Object(w.jsx)("div",{className:u.a.preloader,children:Object(w.jsx)("img",{src:v,alt:"preloader"})}):e.totalCount>0&&e.totalCount>e.wasRendered&&Object(w.jsx)("h3",{className:u.a.loadMore,onClick:e.onClickHandler,children:"Load more"})})})),W=o(21),R=r.a.memo((function(e){return console.log("from userSelect"),Object(w.jsxs)("div",{className:u.a.userSelectWrapper,children:[Object(w.jsx)("div",{className:u.a.userSelectTitle,children:e.title}),Object(w.jsx)("div",{className:u.a.userSelect,children:Object(w.jsx)("select",{value:e.currentValue,onChange:function(t){return e.onChange(t.currentTarget.value)},children:e.options.map((function(e,t){return Object(w.jsx)("option",{value:e,children:e},t)}))})})]})})),Q=r.a.memo((function(e){console.log("from userInput");return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("input",{value:e.value,onChange:e.onChange,onKeyPress:function(t){"Enter"===t.code&&e.sendData()}}),Object(w.jsx)("button",{onClick:function(){e.sendData()},children:"search"})]})})),Y=r.a.memo((function(){return console.log("from hat"),Object(w.jsx)("div",{className:u.a.hat,children:Object(w.jsxs)("div",{className:u.a.darker,children:[Object(w.jsx)("h1",{children:"Search for books"}),Object(w.jsx)("div",{className:u.a.searchWrapper,children:Object(w.jsx)(T,{})})]})})})),T=r.a.memo((function(){console.log("from searchLogic");var e=Object(a.useMemo)((function(){return["all","art","biography","computers","history","medical","poetry"]}),[]),t=Object(a.useMemo)((function(){return["relevance","newest"]}),[]),o=Object(d.c)((function(e){return e.searchResults})),n=Object(d.b)(),c=Object(a.useState)(""),s=Object(W.a)(c,2),l=s[0],j=s[1],b=Object(a.useState)(o.filter),A=Object(W.a)(b,2),p=A[0],m=A[1],h=Object(a.useState)(o.sort),O=Object(W.a)(h,2),f=O[0],x=O[1],k=Object(i.f)(),B=function(){k.push("/")},I=Object(a.useCallback)((function(e){j(e.currentTarget.value)}),[]),D=Object(a.useCallback)((function(){var e=l.trim();e&&(n({type:g,payload:{queryString:e,filter:p,sort:f,needToSearch:!0}}),B())}),[B,n,l,p,f,o]);return Object(w.jsxs)(r.a.Fragment,{children:[Object(w.jsx)(Q,{value:l,url:"/",onChange:I,sendData:D}),Object(w.jsxs)("div",{className:u.a.selectsWrapper,children:[Object(w.jsx)(R,{title:"categories",options:e,currentValue:p,onChange:m}),Object(w.jsx)(R,{title:"sorted by",options:t,currentValue:f,onChange:x})]})]})})),G=o(12),U=o.n(G),M=r.a.memo((function(e){var t=Object(d.b)(),o=e.imageLinks,r=o?o.large&&o.large||o.medium&&o.medium||o.small&&o.small||o.thumbnail&&o.thumbnail||o.smallThumbnail&&o.smallThumbnail:H;return Object(a.useEffect)((function(){return function(){t({type:x,payload:{needToSearch:!1}})}}),[t]),Object(w.jsxs)("div",{className:U.a.wholeBook,children:[Object(w.jsx)("div",{className:U.a.image,children:Object(w.jsx)("img",{alt:"no pic",src:r})}),Object(w.jsxs)("div",{className:U.a.info,children:[Object(w.jsxs)("div",{className:U.a.restInfo,children:[Object(w.jsx)("div",{className:U.a.categories,children:e.categories}),Object(w.jsx)("div",{className:U.a.authors,children:e.authors}),Object(w.jsx)("div",{className:U.a.title,children:e.title})]}),Object(w.jsx)("div",{className:U.a.description,children:e.description})]})]})})),P=r.a.memo((function(e){console.log("from BookWhole");var t=Object(d.c)((function(e){return e.book})),o=Object(d.b)();return Object(a.useEffect)((function(){document.title=e.match.params.bookId,setTimeout((function(){S(e.match.params.bookId).then((function(e){o(k(e))}))}),2e3)}),[o,e.match.params.bookId]),Object(w.jsx)("div",{className:u.a.booksWrapper,children:"-1"===t.id?Object(w.jsx)(N,{message:t.kind}):t.id===D?Object(w.jsx)("div",{className:u.a.preloader,children:Object(w.jsx)("img",{src:v,alt:"preloader"})}):Object(w.jsx)(M,Object(j.a)({},t.volumeInfo))})})),_=Object(i.g)(P);var X=function(){return console.log("from app"),Object(a.useEffect)((function(){document.title="Google Books Api"}),[]),Object(w.jsx)(s.a,{children:Object(w.jsxs)("div",{className:u.a.app,children:[Object(w.jsx)(Y,{}),Object(w.jsxs)(i.c,{children:[Object(w.jsx)(i.a,{path:"/",exact:!0,render:function(){return Object(w.jsx)(J,{})}}),Object(w.jsx)(i.a,{path:"/book/:bookId",render:function(){return Object(w.jsx)(_,{})}})]})]})})},z=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,70)).then((function(t){var o=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;o(e),a(e),r(e),n(e),c(e)}))},F=o(26),Z={pageSize:4,queryString:"",filter:"all",sort:"relevance",needToSearch:!0},K=o(22),q={books:[],isLoading:!1,totalCount:0,error:""},V=Object(F.a)({searchResults:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:case g:return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(j.a)({},q);case p:return Object(j.a)(Object(j.a)({},e),{},{totalCount:t.payload.totalCount,isLoading:!1,books:Object(K.a)(t.payload.books),error:""});case m:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,books:[].concat(Object(K.a)(e.books),Object(K.a)(t.payload.books)),error:""});case O:case h:return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},book:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}}}),$=Object(F.b)(V);c.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(d.a,{store:$,children:Object(w.jsx)(X,{})})}),document.getElementById("root")),z()}},[[69,1,2]]]);
//# sourceMappingURL=main.9eaf748e.chunk.js.map