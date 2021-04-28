(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return f}));var r=n(3),o=n(7),a=(n(0),n(111)),c={},i={unversionedId:"developers/contracts/interfaces/IFlashLoanReceiver",id:"developers/contracts/interfaces/IFlashLoanReceiver",isDocsHomePage:!1,title:"IFlashLoanReceiver",description:"Interface for the Gondola fee IFlashLoanReceiver. Modified from Aave's IFlashLoanReceiver interface.",source:"@site/docs/developers/contracts/interfaces/IFlashLoanReceiver.md",sourceDirName:"developers/contracts/interfaces",slug:"/developers/contracts/interfaces/IFlashLoanReceiver",permalink:"/gondola-doc/docs/developers/contracts/interfaces/IFlashLoanReceiver",editUrl:"https://github.com/gondola-finance/gondola-doc/docs/developers/contracts/interfaces/IFlashLoanReceiver.md",version:"current",frontMatter:{},sidebar:"developers",previous:{title:"IAllowlist",permalink:"/gondola-doc/docs/developers/contracts/interfaces/IAllowlist"},next:{title:"ISwap",permalink:"/gondola-doc/docs/developers/contracts/interfaces/ISwap"}},l=[{value:"Functions",id:"functions",children:[{value:"executeOperation",id:"executeoperation",children:[]}]}],s={toc:l};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Interface for the Gondola fee IFlashLoanReceiver. Modified from Aave's IFlashLoanReceiver interface.\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/aave/aave-protocol/blob/4b4545fb583fd4f400507b10f3c3114f45b8a037/contracts/flashloan/interfaces/IFlashLoanReceiver.sol"},"https://github.com/aave/aave-protocol/blob/4b4545fb583fd4f400507b10f3c3114f45b8a037/contracts/flashloan/interfaces/IFlashLoanReceiver.sol")),Object(a.b)("p",null,"implement this interface to develop a flashloan-compatible flashLoanReceiver contract"),Object(a.b)("h2",{id:"functions"},"Functions"),Object(a.b)("h3",{id:"executeoperation"},"executeOperation"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-solidity"},"  function executeOperation(\n  ) external\n")))}f.isMDXComponent=!0},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),f=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=f(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=f(n),d=r,b=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return n?o.a.createElement(b,i(i({ref:t},s),{},{components:n})):o.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);