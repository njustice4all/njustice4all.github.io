import{c as t,d as r}from"/build/_shared/chunk-EGLYY6PQ.js";var n=t(r()),e={template:"blog-post",slug:"/react-native-large-image",date:"2013-04-10 09:00",title:"react native 2000px\uC774\uC0C1 \uC774\uBBF8\uC9C0 \uCC98\uB9AC",featuredImage:"/assets/images/posts/190208/docker.png",description:"react-native \uC548\uB4DC\uB85C\uC774\uB4DC\uC5D0\uC11C \uAE38\uC774\uAC00 \uAE34 \uC774\uBBF8\uC9C0\uB97C \uCC98\uB9AC\uD560\uB54C \uB9AC\uC0AC\uC774\uC9D5\uB41C\uB2E4"};function m(a={}){let s=Object.assign({p:"p",pre:"pre",code:"code",span:"span"},a.components),{wrapper:o}=s,p=n.default.createElement(n.default.Fragment,null,n.default.createElement(s.p,null,"\uC1FC\uD551\uBAB0\uC5D0\uC11C \uC0C1\uD488 \uC0C1\uC138\uD398\uC774\uC9C0\uB97C \uBCFC\uB54C \uAE38\uC774\uAC00 \uAE34 \uC774\uBBF8\uC9C0\uB97C \uAC00\uC9C0\uACE0 \uC788\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC788\uB2E4\uACE0 \uAC00\uC815\uD574\uBCF4\uC790."),`
`,n.default.createElement(s.p,null,`react-native \uC548\uB4DC\uB85C\uC774\uB4DC\uC5D0\uC11C \uAE38\uC774\uAC00 \uAE34 \uC774\uBBF8\uC9C0\uB97C \uCC98\uB9AC\uD560\uB54C \uD004\uB9AC\uD2F0\uAC00 \uC904\uC5B4\uB4DC\uB294 \uC774\uC288\uAC00\uC788\uAE30 \uB54C\uBB38\uC5D0 (iOS\uB294 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uC74C)
`,n.default.createElement("a",{href:"https://github.com/facebook/fresco/issues/2397",target:"_blank"},"fresco issue")),`
`,n.default.createElement(s.p,null,"\uC77C\uBC18\uC801\uC778 \uC774\uBBF8\uC9C0\uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD558\uBA74, react native\uC5D0\uC11C \uD574\uB2F9\uC774\uBBF8\uC9C0\uC758 \uD004\uB9AC\uD2F0\uB97C \uAC15\uC81C\uB85C \uC904\uC5EC\uBC84\uB9B0\uB2E4."),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"hljs language-typescript"},"<",n.default.createElement(s.span,{className:"hljs-title class_"},"Image")," source={{ ",n.default.createElement(s.span,{className:"hljs-attr"},"uri"),": ",n.default.createElement(s.span,{className:"hljs-string"},'"very long remote image"'),` }} />
`)),`
`,n.default.createElement(s.p,null,"\uB530\uB77C\uC11C \uAD49\uC7A5\uD788 \uAE34 \uC774\uBBF8\uC9C0\uB97C remote\uC5D0\uC11C \uAC00\uC838\uC62C\uB54C\uB294 \uB2E4\uB978 \uBC29\uBC95\uC73C\uB85C \uD574\uC57C\uD568. \uC6F9\uBDF0\uAC00 \uCD9C\uB3D9\uD558\uBA74 \uC5B4\uB5A8\uAE4C?"),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"hljs language-typescript"},"<",n.default.createElement(s.span,{className:"hljs-title class_"},"WebView"),`
  ...
  source={{
    `,n.default.createElement(s.span,{className:"hljs-attr"},"uri"),": ",n.default.createElement(s.span,{className:"hljs-title function_"},"imageUri"),"({ ",n.default.createElement(s.span,{className:"hljs-attr"},"uri"),": ",n.default.createElement(s.span,{className:"hljs-string"},'"very long remote image"'),` }),
  }}
/>
`)),`
`,n.default.createElement(s.p,null,`\uC774\uC820 \uC544\uC608 \uC5D0\uBBAC\uB808\uC774\uD130\uAC00 \uBA39\uD1B5\uC774 \uB418\uC5B4\uBC84\uB838\uB2E4
`,n.default.createElement("a",{href:"https://github.com/react-native-webview/react-native-webview/issues/811",target:"_blank"},'Android is crashing when "WebView" is wrapped by "View"')),`
`,n.default.createElement(s.pre,null,n.default.createElement(s.code,{className:"hljs language-typescript"},"<",n.default.createElement(s.span,{className:"hljs-title class_"},"WebView"),`
  ...
  androidHardwareAccelerationDisabled
  source={{
    `,n.default.createElement(s.span,{className:"hljs-attr"},"uri"),": ",n.default.createElement(s.span,{className:"hljs-title function_"},"imageUri"),"({ ",n.default.createElement(s.span,{className:"hljs-attr"},"uri"),": ",n.default.createElement(s.span,{className:"hljs-string"},'"very long remote image"'),` }),
  }}
  style={{ `,n.default.createElement(s.span,{className:"hljs-attr"},"opacity"),": ",n.default.createElement(s.span,{className:"hljs-number"},"0.99"),", ",n.default.createElement(s.span,{className:"hljs-attr"},"flex"),": ",n.default.createElement(s.span,{className:"hljs-number"},"1"),", ",n.default.createElement(s.span,{className:"hljs-attr"},"overflow"),": ",n.default.createElement(s.span,{className:"hljs-string"},"'hidden'"),` }}
/>
`)),`
`,n.default.createElement(s.p,null,"github issue\uC5D0\uC11C \uCC38\uACE0\uD55C \uD574\uACB0\uBC29\uBC95\uC73C\uB85C \uC2A4\uD0C0\uC77C\uACFC ",n.default.createElement(s.code,null,"androidHardwareAccelerationDisabled"),"\uC635\uC158\uC744 \uC0AC\uC6A9\uD574\uC92C\uB2E4"),`
`,n.default.createElement(s.p,null,"react native \uC815\uB9D0 \uC2E0\uB09C\uB2E4"));return o?n.default.createElement(o,{...a},p):p}var l=m;var _=typeof e<"u"&&e.headers,i=typeof e<"u"&&e.meta,c=typeof e<"u"&&e.handle;export{l as default,c as handle,i as meta};
