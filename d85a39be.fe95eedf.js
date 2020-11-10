(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(9),o=(n(0),n(187)),i={id:"authorization_code",title:"Authorization Code"},c={id:"authorization_code",title:"Authorization Code",description:"This flow is suitable for long-running applications in which the user grants permission only once. It provides an access token that can be refreshed. Since the token exchange involves sending your secret key, perform this on a secure location, like a backend service, and not from a client such as a browser or from a mobile app.",source:"@site/docs/authorization_code.md",permalink:"/SpotifyAPI-NET/docs/next/authorization_code",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/authorization_code.md",version:"next",lastUpdatedBy:"Denis Mtfl",lastUpdatedAt:1605023095,sidebar:"docs",previous:{title:"Implicit Grant",permalink:"/SpotifyAPI-NET/docs/next/implicit_grant"},next:{title:"PKCE",permalink:"/SpotifyAPI-NET/docs/next/pkce"}},s=[{value:"Existing Web-Server",id:"existing-web-server",children:[]},{value:"Using Spotify.Web.Auth",id:"using-spotifywebauth",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This flow is suitable for long-running applications in which the user grants permission only once. It provides an access token that can be refreshed. Since the token exchange involves sending your secret key, perform this on a secure location, like a backend service, and not from a client such as a browser or from a mobile app.")),Object(o.b)("h2",{id:"existing-web-server"},"Existing Web-Server"),Object(o.b)("p",null,"If you are already in control of a Web-Server (like ",Object(o.b)("inlineCode",{parentName:"p"},"ASP.NET"),"), you can start the flow by generating a login uri:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'// Make sure "http://localhost:5000" is in your applications redirect URIs!\nvar loginRequest = new LoginRequest(\n  new Uri("http://localhost:5000"),\n  "ClientId",\n  LoginRequest.ResponseType.Code\n)\n{\n  Scope = new[] { Scopes.PlaylistReadPrivate, Scopes.PlaylistReadCollaborative }\n};\nvar uri = loginRequest.ToUri();\n// Redirect user to uri via your favorite web-server\n')),Object(o.b)("p",null,"When the user is redirected to the generated uri, they will have to login with their Spotify account and confirm that your application wants to access their user data. Once confirmed, they will be redirected to ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:5000")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"code")," parameter is attached to the query. This ",Object(o.b)("inlineCode",{parentName:"p"},"code")," has to be exchanged for an ",Object(o.b)("inlineCode",{parentName:"p"},"access_token")," and ",Object(o.b)("inlineCode",{parentName:"p"},"refresh_token"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'// This method should be called from your web-server when the user visits "http://localhost:5000"\npublic Task GetCallback(string code)\n{\n  var response = await new OAuthClient().RequestToken(\n    new AuthorizationCodeTokenRequest("ClientId", "ClientSecret", code, "http://localhost:5000")\n  );\n\n  var spotify = new SpotifyClient(response.AccessToken);\n  // Also important for later: response.RefreshToken\n}\n')),Object(o.b)("p",null,"If the token expires at some point (check via ",Object(o.b)("inlineCode",{parentName:"p"},"response.IsExpired"),"), you can refresh it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'var newResponse = await new OAuthClient().RequestToken(\n  new AuthorizationCodeRefreshRequest("ClientId", "ClientSecret", response.RefreshToken)\n);\n\nvar spotify = new SpotifyClient(newResponse.AccessToken);\n')),Object(o.b)("p",null,"You can also let the ",Object(o.b)("inlineCode",{parentName:"p"},"AuthorizationCodeAuthenticator")," take care of the refresh part:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'var response = await new OAuthClient().RequestToken(\n  new AuthorizationCodeTokenRequest("ClientId", "ClientSecret", code, "http://localhost:5000")\n);\nvar config = SpotifyClientConfig\n  .CreateDefault()\n  .WithAuthenticator(new AuthorizationCodeAuthenticator("ClientId", "ClientSecret", response));\n\nvar spotify = new SpotifyClient(config);\n')),Object(o.b)("p",null,"For a real example, have a look at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.ASP"}),"Example.ASP"),". This also uses the great package ",Object(o.b)("inlineCode",{parentName:"p"},"AspNet.Security.OAuth.Spotify")," which takes care of the OAuth flow inside of ",Object(o.b)("inlineCode",{parentName:"p"},"ASP.NET"),"."),Object(o.b)("h2",{id:"using-spotifywebauth"},"Using Spotify.Web.Auth"),Object(o.b)("p",null,"For cross-platform CLI and desktop apps (non ",Object(o.b)("inlineCode",{parentName:"p"},"UWP")," apps), ",Object(o.b)("inlineCode",{parentName:"p"},"Spotify.Web.Auth")," can be used to supply a small embedded Web Server for the code retrieval."),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Your client secret will be exposed when embedded in a desktop/CLI app. This can be abused and is not prefered. If possible, let the user create an application in the Spotify dashboard or let a server handle the Spotify communication."))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'private static EmbedIOAuthServer _server;\n\npublic static async Task Main()\n{\n  // Make sure "http://localhost:5000/callback" is in your spotify application as redirect uri!\n  _server = new EmbedIOAuthServer(new Uri("http://localhost:5000/callback"), 5000);\n  await _server.Start();\n\n  _server.AuthorizationCodeReceived += OnAuthorizationCodeReceived;\n\n  var request = new LoginRequest(_server.BaseUri, "ClientId", LoginRequest.ResponseType.Code)\n  {\n    Scope = new List<string> { Scopes.UserReadEmail }\n  };\n  BrowserUtil.Open(uri);\n}\n\nprivate static async Task OnAuthorizationCodeReceived(object sender, AuthorizationCodeResponse response)\n{\n  await _server.Stop();\n\n  var config = SpotifyClientConfig.CreateDefault();\n  var tokenResponse = await new OAuthClient(config).RequestToken(\n    new AuthorizationCodeTokenRequest(\n      "ClientId", "ClientSecret", response.Code, "http://localhost:5000/callback"\n    )\n  );\n\n  var spotify = new SpotifyClient(tokenResponse.AccessToken);\n  // do calls with Spotify and save token?\n}\n')),Object(o.b)("p",null,"For real examples, have a look at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.CLI.PersistentConfig"}),"Example.CLI.PersistentConfig")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.CLI.CustomHTML"}),"Example.CLI.CustomHTML")))}l.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(h,c({ref:t},p,{components:n})):r.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);