(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{137:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return O}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=p(t),d=a,O=b["".concat(o,".").concat(d)]||b[d]||s[d]||c;return t?r.a.createElement(O,i(i({ref:n},l),{},{components:t})):r.a.createElement(O,i({ref:n},l))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(7),c=(t(0),t(137)),o={id:"contractUseGuide",title:"\u5408\u7ea6\u7528\u6237\u6307\u5357",sidebar_label:"\u5408\u7ea6\u7528\u6237\u6307\u5357"},i={unversionedId:"contractUseGuide",id:"version-1.0.0/contractUseGuide",isDocsHomePage:!1,title:"\u5408\u7ea6\u7528\u6237\u6307\u5357",description:"For traders",source:"@site/versioned_docs/version-1.0.0/contractUseGuide.md",slug:"/contractUseGuide",permalink:"/cn/docs/contractUseGuide",editUrl:"https://github.com/DODOEX/cn/edit/master/versioned_docs/version-1.0.0/contractUseGuide.md",version:"1.0.0",sidebar_label:"\u5408\u7ea6\u7528\u6237\u6307\u5357",sidebar:"version-1.0.0/docs",previous:{title:"\u667a\u80fd\u5408\u7ea6\u6846\u67b6",permalink:"/cn/docs/framework"},next:{title:"\u95ea\u7535\u4ea4\u6362",permalink:"/cn/docs/flashSwap"}},u=[{value:"For traders",id:"for-traders",children:[]},{value:"\u5bf9\u4e8e\u505a\u5e02\u5546",id:"\u5bf9\u4e8e\u505a\u5e02\u5546",children:[]},{value:"\u5bf9\u4e8e\u5f00\u53d1\u4eba\u5458",id:"\u5bf9\u4e8e\u5f00\u53d1\u4eba\u5458",children:[]}],l={rightToc:u};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"for-traders"},"For traders"),Object(c.b)("p",null,"\u6574\u4e2a\u5408\u7ea6\u4e2d\u4e0e\u4ea4\u6613\u8005\u76f8\u5173\u7684\u51fd\u6570\u53ea\u6709\u4e24\u4e2a\uff1a ",Object(c.b)("inlineCode",{parentName:"p"},"buyBaseToken")," and ",Object(c.b)("inlineCode",{parentName:"p"},"sellBaseToken")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function buyBaseToken(\n    uint256 amount,\n    uint256 maxPayQuote,\n    bytes calldata data\n) external returns (uint256 payQuote);\n")),Object(c.b)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u786e\u5b9a\u8d2d\u4e70 base token \u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"amount")," \u6570\u91cf\u3002 \u5982\u679c\u9700\u8981\u8d2d\u4e70\u8fd9\u4e9b quote token \u9700\u8981\u652f\u4ed8\u7684 base token \u7684\u6570\u91cf\u5927\u4e8e ",Object(c.b)("inlineCode",{parentName:"p"},"maxPayQuote"),"\uff0c\u5219\u4ea4\u6613\u5c06\u88ab\u91cd\u7f6e\u3002\u5982\u679c ",Object(c.b)("inlineCode",{parentName:"p"},"data")," \u4e0d\u4e3a\u7a7a\uff0c\u95ea\u7535\u4ea4\u6362\u5c06\u4f1a\u88ab\u89e6\u53d1\u3002"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"payQuote")," \u7684\u8fd4\u56de\u503c\u662f\u4ea4\u6613\u8005\u9700\u8981\u652f\u4ed8\u7684 quote token \u7684\u6570\u91cf\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function sellBaseToken(\n    uint256 amount,\n    uint256 minReceiveQuote,\n    bytes calldata data\n) external returns (uint256 receiveQuote);\n")),Object(c.b)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u786e\u5b9a\u51fa\u552e base token\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"amount")," \u6570\u91cf\u3002\u5982\u679c\u8981\u63a5\u53d7\u7684 quote token \u7684\u6570\u91cf\u5c0f\u4e8e ",Object(c.b)("inlineCode",{parentName:"p"},"minReceiveQuote"),"\uff0cmaxPayQuote\uff0c\u5219\u4ea4\u6613\u5c06\u88ab\u91cd\u7f6e\u3002\u5982\u679c ",Object(c.b)("inlineCode",{parentName:"p"},"data")," \u4e0d\u4e3a\u7a7a\uff0c\u95ea\u7535\u4ea4\u6362\u5c06\u4f1a\u88ab\u89e6\u53d1\u3002"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"receiveQuote"),"\xa0\u7684\u8fd4\u56de\u503c\u662f\u4ea4\u6613\u8005\u9700\u8981\u652f\u4ed8\u7684\xa0quote token \u7684\u6570\u91cf\u3002"),Object(c.b)("p",null,"DODO \u540c\u6837\u4f1a\u63d0\u4f9b\u8fd9\u4e24\u4e2a\u51fd\u6570\u7684\u9884\u89c8\u7248\u672c\uff0c\u9884\u89c8\u51fd\u6570\u53ef\u4ee5\u5728\u4e0d\u53d1\u9001\u4ea4\u6613\u7684\u60c5\u51b5\u4e0b\u6267\u884c\uff0c\u53ef\u4ee5\u5e2e\u52a9\u7528\u6237\u9884\u4f30\u4ef7\u683c\u8282\u7701 gas \u8d39\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function querySellBaseToken(\n  uint256 amount\n) external view returns (uint256 receiveQuote);\n\nfunction queryBuyBaseToken(\n  uint256 amount\n) external view returns (uint256 payQuote);\n")),Object(c.b)("p",null,"\u4e0b\u9762\u4e00\u90e8\u5206\u6211\u4eec\u4f1a\u7740\u91cd\u4ecb\u7ecd",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"./flashSwap"}),"\u95ea\u7535\u4ea4\u6362"),"."),Object(c.b)("h2",{id:"\u5bf9\u4e8e\u505a\u5e02\u5546"},"\u5bf9\u4e8e\u505a\u5e02\u5546"),Object(c.b)("p",null,"\u5bf9\u4e8e\u505a\u5e02\u5546\u6765\u8bf4\uff0c\u5145\u503c\u548c\u63d0\u53d6\u662f\u6700\u91cd\u8981\u7684\u4e24\u4e2a\u51fd\u6570\u3002\u6211\u4eec\u63d0\u4f9b\u4e00\u7cfb\u5217\u7684\u51fd\u6570\u5e2e\u52a9\u505a\u5e02\u5546\u7075\u6d3b\u9ad8\u6548\u7684\u7ba1\u7406\u4ed6\u4eec\u7684\u8d44\u4ea7\u3002"),Object(c.b)("p",null,"PMM \u7b97\u6cd5\u7684\u4f18\u52bf\u4e4b\u4e00\u662f\u5b83\u53ef\u4ee5\u5206\u522b\u7ba1\u7406 base \u6216 quote token\u3002\u6240\u4ee5\u4e0b\u9762\u7684\u51fd\u6570\u6709\u4e24\u4e2a\u7248\u672c\uff0c\u4e00\u4e2a\u540e\u7f00\u662f Base\uff0c\u4e00\u4e2a\u540e\u7f00\u662f Quote\uff0c\u4ed6\u4eec\u5206\u522b\u7528\u4e8e\u7ba1\u7406 Base token \u548c quote token\u3002\u4e24\u4e2a\u7248\u672c\u6709\u76f8\u540c\u7684\u8f93\u5165\u548c\u8f93\u51fa\u503c\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n  function depositBase(\n    uint256 amount\n  ) external returns (uint256 capital)\n\n  function depositQuote(\n    uint256 amount\n  ) external returns (uint256 capital)\n\n")),Object(c.b)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u4f1a\u5411\u8d44\u4ea7\u6c60\u4e2d\uff0c\u5145\u5165\u4e00\u4e2a\u786e\u5b9a ",Object(c.b)("inlineCode",{parentName:"p"},"amount")," \u7684\u8d44\u4ea7\uff0c\u7136\u540e\u8fd4\u56de\u91ca\u653e\u7ed9\u4f60\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"capital")," \u8d44\u4ea7\u989d\u3002"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"\u6ce8\u610f\uff1aCaptital \u4ee3\u8868\u505a\u5e02\u5546\u5728\u8d44\u4ea7\u6c60\u4e2d\u6240\u5360\u4efd\u989d\u3002Captital \u662f\u4e00\u4e2aERC 20 \u683c\u5f0f\u7684\u4ee3\u5e01\uff0c\u53ef\u4ee5\u81ea\u7531\u4ea4\u6613\u3002\u6bcf\u4e2a DODO Pair \u6709\u4e24\u79cd\u4ee3\u5e01\uff0c\u5206\u522b\u4ee3\u8868 base token \u548c quote token\u3002")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n  function getLpBaseBalance(address lp) public view returns (uint256 lpBalance)\n\n  function getLpQuoteBalance(address lp) public view returns (uint256 lpBalance)\n\n")),Object(c.b)("p",null,"\u6839\u636e\u505a\u5e02\u5546\u7684\u5730\u5740\u67e5\u8be2\u8d44\u4ea7\u6c60\u4f59\u989d\u3002\u8fd4\u56de\u503c ",Object(c.b)("inlineCode",{parentName:"p"},"lpBalance")," \u4ee3\u8868\u5b9e\u9645\u7684 base \u6216 quote token \u6570\u91cf\uff0c\u800c\u4e0d\u662f Capital token\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n  function withdrawBase(\n    uint256 amount\n  ) external returns (uint256 receive)\n\n  function withdrawQuote(\n    uint256 amount\n  ) external returns (uint256 receive)\n\n")),Object(c.b)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u5c1d\u8bd5\u4ece\u8d44\u672c\u6c60\u4e2d\u63d0\u53d6\u4e00\u5b9a ",Object(c.b)("inlineCode",{parentName:"p"},"amount")," \u6570\u91cf\u7684\u8d44\u4ea7\u3002\u7531\u4e8e\u53ef\u80fd\u4ea7\u751f\u63d0\u53d6\u624b\u7eed\u8d39\uff0c\u8fd9\u4e2a\u51fd\u6570\u8fd4\u56de\u7684\u5177\u4f53\u7684\u6570\u91cf\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n  function withdrawAllBase() external returns (uint256 receive)\n\n  function withdrawAllQuote() external returns (uint256 receive)\n\n")),Object(c.b)("p",null,"\u7531\u4e8e\u8d44\u91d1\u6c60\u7684\u89c4\u6a21\u4e0d\u65ad\u53d1\u751f\u53d8\u5316\uff08\u4efb\u4f55\u65f6\u5019\u90fd\u6709\u53ef\u80fd\u4ea7\u751f\u4ea4\u6613\uff09\uff0c\u4e3a\u4e86\u5e2e\u52a9\u505a\u5e02\u5546\u63d0\u51fa\u6240\u6709\u8d44\u4ea7\uff0c\u4e0a\u8fb9\u7684\u4e24\u4e2a\u51fd\u6570\u53ef\u4ee5\u63d0\u53d6\u6240\u6709\u7684\u8d44\u91d1\u3002\u6700\u7ec8\uff0c\u7533\u8bf7\u8005\u53ef\u4ee5\u63a5\u53d7\u5230\u786e\u5207\u8d44\u4ea7\u6570\u91cf\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n  function getWithdrawQuotePenalty(uint256 amount) public view returns (uint256 penalty)\n\n  function getWithdrawBasePenalty(uint256 amount) public view returns (uint256 penalty)\n\n")),Object(c.b)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u63d0\u53d6\u8d44\u4ea7\u4f1a\u88ab\u6536\u53d6 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"./coreConcept#withdraw-fee"}),"\u624b\u7eed\u8d39"),"\u3002\u4e0a\u8ff0\u7684\u4e24\u4e2a\u51fd\u6570\u53ef\u4ee5\u9884\u89c8\u63d0\u53d6\u624b\u7eed\u8d39\u3002\u5982\u679c\u4f60\u63d0\u4ea4\u4e86\u63d0\u53d6 ",Object(c.b)("inlineCode",{parentName:"p"},"amount")," \u7533\u8bf7\uff0c\u4f1a\u88ab\u6536\u53d6\u4e00\u5b9a\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"penalty")," \u3002"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"\u6ce8\u610f\uff1a\u6536\u5230\u7684\u63d0\u6b3e\u8d44\u4ea7\u7684\u6700\u7ec8\u91d1\u989d\u662f **amount-penalty**.")),Object(c.b)("h2",{id:"\u5bf9\u4e8e\u5f00\u53d1\u4eba\u5458"},"\u5bf9\u4e8e\u5f00\u53d1\u4eba\u5458"),Object(c.b)("p",null,"\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u4ece DODO \u7684\u6846\u67b6 DODO Zoo \u7684\u63a5\u53e3\u83b7\u53d6\u5143\u6570\u636e\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n  function getDODO(\n    address baseToken,\n    address quoteToken\n  ) external view returns (address)\n\n")),Object(c.b)("p",null,"\u7ed9\u5b9a ",Object(c.b)("inlineCode",{parentName:"p"},"baseToken")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"quoteToken")," , \u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"DODO Zoo")," \u53ea\u80fd\u540c\u65f6\u6ce8\u518c\u4e00\u4e2a ",Object(c.b)("inlineCode",{parentName:"p"},"DODO Pair"),"\u3002"))}p.isMDXComponent=!0}}]);