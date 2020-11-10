(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{150:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(9),a=(r(0),r(187)),i=r(189),c={id:"example_asp",title:"ASP.NET"},s={id:"example_asp",title:"ASP.NET",description:"Description",source:"@site/docs/example_asp.md",permalink:"/SpotifyAPI-NET/docs/next/example_asp",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/example_asp.md",version:"next",lastUpdatedBy:"Denis Mtfl",lastUpdatedAt:1605023095,sidebar:"docs",previous:{title:"Showcase",permalink:"/SpotifyAPI-NET/docs/next/showcase"},next:{title:"Blazor WASM",permalink:"/SpotifyAPI-NET/docs/next/example_blazor_wasm"}},p=[{value:"Description",id:"description",children:[]},{value:"Run it",id:"run-it",children:[]}],u={rightToc:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"This example is based on ASP .NET Core. It uses ",Object(a.b)("inlineCode",{parentName:"p"},"Authorization Code")," under the hood with the help of ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.nuget.org/packages/AspNet.Security.OAuth.Spotify/"}),Object(a.b)("inlineCode",{parentName:"a"},"AspNet.Security.OAuth.Spotify")),". It stores the access token in the current user session (cookie-based) and allows to refresh tokens when they expire. Two pages are implemented:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Home shows your current playlists via pagination"),Object(a.b)("li",{parentName:"ul"},"Profile shows your current profile information")),Object(a.b)("img",{alt:"ASP Example - Home",src:Object(i.a)("img/asp_example_home.png")}),Object(a.b)("img",{alt:"ASP Example - Profile",src:Object(i.a)("img/asp_example_profile.png")}),Object(a.b)("h2",{id:"run-it"},"Run it"),Object(a.b)("p",null,"Before running it, make sure you created an app in your ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.spotify.com/dashboard/"}),"spotify dashboard")," and ",Object(a.b)("inlineCode",{parentName:"p"},"https://localhost:5001")," is a redirect uri of it."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Assumes linux and current working directory is the cloned repository\ncd SpotifyAPI.Web.Examples/Example.ASP\ndotnet restore\n\nSPOTIFY_CLIENT_ID=YourClientId SPOTIFY_CLIENT_SECRET=YourClientSecret dotnet run\n\n# Visit https://localhost:5001\n")))}l.isMDXComponent=!0},187:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,b=l["".concat(i,".").concat(d)]||l[d]||f[d]||a;return r?o.a.createElement(b,c({ref:t},p,{components:r})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},188:function(e,t,r){"use strict";var n=r(0),o=r(49);t.a=function(){return Object(n.useContext)(o.a)}},189:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(190);var n=r(188);function o(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},190:function(e,t,r){"use strict";var n=r(17),o=r(35),a=r(191),i="".startsWith;n(n.P+n.F*r(192)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return i?i.call(t,n,r):t.slice(r,r+n.length)===n}})},191:function(e,t,r){var n=r(69),o=r(23);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(e))}},192:function(e,t,r){var n=r(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);