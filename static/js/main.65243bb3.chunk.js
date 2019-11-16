(this["webpackJsonpreact-movie-search"]=this["webpackJsonpreact-movie-search"]||[]).push([[0],{40:function(e,t,a){e.exports=a(53)},45:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),i=(a(45),a(20)),l=a(15),m=a(17),s=a(80),u=a(70),E=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null),r.a.createElement(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center",style:{backgroundColor:"#cfe8fc",height:"20vh"}},r.a.createElement("h1",null,e.text)))},p=a(71),f=function(e){var t=Object(l.f)().slug,a=Object(n.useState)([]),c=Object(m.a)(a,2),o=c[0],i=c[1],s=Object(n.useState)([]),f=Object(m.a)(s,2),d=(f[0],f[1]);return Object(n.useEffect)((function(){fetch("http://www.omdbapi.com/?i=".concat(t,"&apikey=4a3b711b&plot=full")).then((function(e){return e.json()})).then((function(e){i(e),d(e.Ratings)}))}),[t]),r.a.createElement("div",null,r.a.createElement(E,{text:"MOVIE DETAIL"}),r.a.createElement(p.a,null,r.a.createElement(u.a,{container:!0,direction:"column",spacing:2},r.a.createElement(u.a,{item:!0},"Type: ",o.Type),r.a.createElement(u.a,{item:!0},"Title: ",o.Title),r.a.createElement(u.a,{item:!0},"Year: ",o.Year),r.a.createElement(u.a,{item:!0},"Runtime: ",o.Runtime),r.a.createElement(u.a,{item:!0},"Director: ",o.Director),r.a.createElement(u.a,{item:!0},"Production: ",o.Production),r.a.createElement(u.a,{item:!0},"Actors: ",o.Actors),r.a.createElement(u.a,{item:!0},"Awards: ",o.Awards),r.a.createElement(u.a,{item:!0},"Box Office: ",o.BoxOffice),r.a.createElement(u.a,{item:!0},"Country: ",o.Country),r.a.createElement(u.a,{item:!0},"DVD: ",o.DVD),r.a.createElement(u.a,{item:!0},"Genre: ",o.Genre),r.a.createElement(u.a,{item:!0},"Language: ",o.Language),r.a.createElement(u.a,{item:!0},"Metascore: ",o.Metascore),r.a.createElement(u.a,{item:!0},"Plot: ",o.Plot),r.a.createElement(u.a,{item:!0},"Poster: ",o.Poster),r.a.createElement(u.a,{item:!0},"Rated: ",o.Rated),r.a.createElement(u.a,{item:!0},"Released: ",o.Released),r.a.createElement(u.a,{item:!0},"Website: ",o.Website),r.a.createElement(u.a,{item:!0},"IMDB Rating: ",o.imdbRating),r.a.createElement(u.a,{item:!0},"IMDB Votes: ",o.imdbVotes))))},d=a(7),g=a(4),h=a(72),b=a(73),v=a(74),y=a(75),O=a(76),S=Object(g.a)({card:{},media:{minHeight:"450px"},link:{textDecoration:"none"}})((function(e){var t=e.classes,a="N/A"===e.movie.Poster?"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/film-3385785534._CB483791896_.png":e.movie.Poster;return r.a.createElement(i.b,{to:"/react-movie-search/".concat(e.movie.imdbID),className:t.link},r.a.createElement(h.a,{className:t.card,elevation:3},r.a.createElement(b.a,null,r.a.createElement(v.a,{className:t.media,image:a,title:e.movie.Title}),r.a.createElement(y.a,null,r.a.createElement(O.a,{className:t.typography,gutterBottom:!0,variant:"h5",component:"h2",noWrap:!0},e.movie.Title),r.a.createElement(O.a,{className:t.typofraphy,variant:"body2",color:"textSecondary",component:"p"},"(",e.movie.Year,")")))))})),j=a(55),w=a(79),R=a(77),C=a(34),I=a.n(C),x=Object(g.a)({root:{padding:"2px 4px",margin:"20px 0",display:"flex",alignItems:"center",alignSelf:"center"},input:{flex:1,padding:5},iconButton:{padding:10}})((function(e){var t=e.classes,a=Object(n.useState)(""),c=Object(m.a)(a,2),o=c[0],i=c[1];return r.a.createElement(p.a,null,r.a.createElement(u.a,{container:!0,justify:"center",alignItems:"center",spacing:2},r.a.createElement(u.a,{item:!0,xs:12,sm:6},r.a.createElement(j.a,{component:"form",className:t.root},r.a.createElement(w.a,{className:t.input,placeholder:"Search a movie title",inputProps:{"aria-label":"Search a movie title"},value:o,onChange:function(t){t.preventDefault(),i(t.target.value),t.target.value?e.search(t.target.value):e.search("man")},type:"text"}),r.a.createElement(R.a,{type:"submit",className:t.iconButton,"aria-label":"search",onClick:function(t){t.preventDefault(),o?e.search(o):e.search("man"),i("")},value:"SEARCH"},r.a.createElement(I.a,null))))))}));function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D={loading:!0,movies:[],errorMessage:null},P=function(e,t){switch(t.type){case"SEARCH_MOVIES_REQUEST":return M({},e,{loading:!0,errorMessage:null});case"SEARCH_MOVIES_SUCCESS":return M({},e,{loading:!1,movies:t.payload});case"SEARCH_MOVIES_FAILURE":return M({},e,{loading:!1,errorMessage:t.error});default:return e}},_=function(){var e=Object(n.useReducer)(P,D),t=Object(m.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){fetch("https://www.omdbapi.com/?s=man&apikey=4a3b711b").then((function(e){return e.json()})).then((function(e){c({type:"SEARCH_MOVIES_SUCCESS",payload:e.Search})}))}),[]);var o=a.movies,i=a.errorMessage,l=a.loading;return r.a.createElement("div",{className:"App"},r.a.createElement(E,{text:"MOVIE SEARCH"}),r.a.createElement(x,{search:function(e){c({type:"SEARCH_MOVIES_REQUEST"}),fetch("https://www.omdbapi.com/?s=".concat(e,"&apikey=4a3b711b")).then((function(e){return e.json()})).then((function(e){"True"===e.Response?c({type:"SEARCH_MOVIES_SUCCESS",payload:e.Search}):c({type:"SEARCH_MOVIES_FAILURE",error:e.Error})}))}}),r.a.createElement(p.a,null,r.a.createElement(u.a,{container:!0,spacing:2,direction:"row",className:"movies",alignItems:"center",justify:"flex-start"},l&&!i?r.a.createElement("span",null,"loading..."):i?r.a.createElement("div",{className:"errorMessage"},i):o.map((function(e,t){return r.a.createElement(u.a,{key:"".concat(t,"-").concat(e.Title),item:!0,xs:12,sm:6,md:4,lg:3},r.a.createElement(S,{movie:e}))})))))},k=function(e){return r.a.createElement(i.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/react-movie-search/"},r.a.createElement(_,null)),r.a.createElement(l.a,{path:"/react-movie-search/:slug"},r.a.createElement(f,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.65243bb3.chunk.js.map