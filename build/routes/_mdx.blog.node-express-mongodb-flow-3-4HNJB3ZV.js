import{c as l,d as m}from"/build/_shared/chunk-EGLYY6PQ.js";var s=l(m()),o={template:"blog-post",slug:"/NODE+EXPRESS+MONGODB-\uD68C\uC6D0\uAC00\uC785-FLOW-3",date:"2019-01-24 13:42",title:"[NODE] NODE+EXPRESS+MONGODB \uD68C\uC6D0\uAC00\uC785 FLOW #3",featuredImage:"/assets/images/posts/github.jpg",description:"NODE+EXPRESS+MONGODB \uD68C\uC6D0\uAC00\uC785 FLOW"};function t(p={}){let n=Object.assign({p:"p",h3:"h3",pre:"pre",code:"code",span:"span",hr:"hr",ul:"ul",li:"li",img:"img"},p.components),{wrapper:e}=n,a=s.default.createElement(s.default.Fragment,null,s.default.createElement(n.p,null,"\uD68C\uC6D0\uAC00\uC785\uAE4C\uC9C0 \uC798 \uB05D\uB0C8\uC73C\uBA74 \uB9C8\uC9C0\uB9C9\uC740 \uB85C\uADF8\uC778\uC774\uB2E4. \uB85C\uADF8\uC778\uC740 \uC774\uBBF8 \uB300\uBD80\uBD84 \uD544\uC694\uD55C\uAC74 \uB05D\uB0B4\uB1A8\uAE30 \uB54C\uBB38\uC5D0 \uBCC4\uAC70 \uC5C6\uB2E4. \uB85C\uADF8\uC778 \uB77C\uC6B0\uD130\uBD80\uD130 \uC791\uC131\uD574\uBCF4\uC790."),`
`,s.default.createElement(n.h3,null,"\uB77C\uC6B0\uD130"),`
`,s.default.createElement(n.pre,null,s.default.createElement(n.code,{className:"hljs language-javascript"},"routes.",s.default.createElement(n.span,{className:"hljs-title function_"},"post"),"(",s.default.createElement(n.span,{className:"hljs-string"},"'/login'"),", authLocal, userController.",s.default.createElement(n.span,{className:"hljs-property"},"login"),`);
`)),`
`,s.default.createElement(n.p,null,s.default.createElement(n.code,null,"/login"),"\uC740 ",s.default.createElement(n.code,null,"authLocal"),"\uBBF8\uB4E4\uC6E8\uC5B4\uB97C \uAC70\uCE5C \uD6C4 \uC751\uB2F5\uC744 \uD55C\uB2E4."),`
`,s.default.createElement(n.hr,null),`
`,s.default.createElement(n.h3,null,"\uBBF8\uB4E4\uC6E8\uC5B4"),`
`,s.default.createElement(n.pre,null,s.default.createElement(n.code,{className:"hljs language-javascript"},s.default.createElement(n.span,{className:"hljs-keyword"},"const"),` localOptions = {
  `,s.default.createElement(n.span,{className:"hljs-attr"},"usernameField"),": ",s.default.createElement(n.span,{className:"hljs-string"},"'email'"),`,
};

`,s.default.createElement(n.span,{className:"hljs-keyword"},"const")," localStrategy = ",s.default.createElement(n.span,{className:"hljs-keyword"},"new")," ",s.default.createElement(n.span,{className:"hljs-title class_"},"LocalStrategy"),"(localOptions, ",s.default.createElement(n.span,{className:"hljs-keyword"},"async"),` (email, password, done) => {
  `,s.default.createElement(n.span,{className:"hljs-keyword"},"try"),` {
    `,s.default.createElement(n.span,{className:"hljs-keyword"},"const")," user = ",s.default.createElement(n.span,{className:"hljs-keyword"},"await")," ",s.default.createElement(n.span,{className:"hljs-title class_"},"User"),".",s.default.createElement(n.span,{className:"hljs-title function_"},"findOne"),`({ email });

    `,s.default.createElement(n.span,{className:"hljs-keyword"},"if"),` (!user) {
      `,s.default.createElement(n.span,{className:"hljs-keyword"},"return")," ",s.default.createElement(n.span,{className:"hljs-title function_"},"done"),"(",s.default.createElement(n.span,{className:"hljs-literal"},"null"),", ",s.default.createElement(n.span,{className:"hljs-literal"},"false"),`);
    }

    `,s.default.createElement(n.span,{className:"hljs-keyword"},"if")," (!user.",s.default.createElement(n.span,{className:"hljs-title function_"},"_compareUser"),`(password)) {
      `,s.default.createElement(n.span,{className:"hljs-keyword"},"return")," ",s.default.createElement(n.span,{className:"hljs-title function_"},"done"),"(",s.default.createElement(n.span,{className:"hljs-literal"},"null"),", ",s.default.createElement(n.span,{className:"hljs-literal"},"false"),`);
    }

    `,s.default.createElement(n.span,{className:"hljs-keyword"},"if")," (!user.",s.default.createElement(n.span,{className:"hljs-property"},"isVerified"),`) {
      `,s.default.createElement(n.span,{className:"hljs-keyword"},"return")," ",s.default.createElement(n.span,{className:"hljs-title function_"},"done"),"(",s.default.createElement(n.span,{className:"hljs-literal"},"null"),", ",s.default.createElement(n.span,{className:"hljs-literal"},"false"),`);
    }

    `,s.default.createElement(n.span,{className:"hljs-keyword"},"return")," ",s.default.createElement(n.span,{className:"hljs-title function_"},"done"),"(",s.default.createElement(n.span,{className:"hljs-literal"},"null"),`, user);
  } `,s.default.createElement(n.span,{className:"hljs-keyword"},"catch"),` (error) {
    `,s.default.createElement(n.span,{className:"hljs-keyword"},"return")," ",s.default.createElement(n.span,{className:"hljs-title function_"},"done"),"(error, ",s.default.createElement(n.span,{className:"hljs-literal"},"false"),`);
  }
});

passport.`,s.default.createElement(n.span,{className:"hljs-title function_"},"use"),`(localStrategy);

`,s.default.createElement(n.span,{className:"hljs-keyword"},"export")," ",s.default.createElement(n.span,{className:"hljs-keyword"},"const")," authLocal = passport.",s.default.createElement(n.span,{className:"hljs-title function_"},"authenticate"),"(",s.default.createElement(n.span,{className:"hljs-string"},"'local'"),", { ",s.default.createElement(n.span,{className:"hljs-attr"},"session"),": ",s.default.createElement(n.span,{className:"hljs-literal"},"false"),` });
`)),`
`,s.default.createElement(n.p,null,"\uB85C\uADF8\uC778 \uC720\uC800\uB124\uC784\uD544\uB4DC\uB97C ",s.default.createElement(n.code,null,"email"),"\uB85C \uC635\uC158\uC124\uC815\uD558\uACE0 \uC720\uC800\uAC1D\uCCB4\uB97C \uAC00\uC838\uC640\uC11C \uAC80\uC99D\uD558\uB294 \uBBF8\uB4E4\uC6E8\uC5B4\uC791\uC131."),`
`,s.default.createElement(n.ul,null,`
`,s.default.createElement(n.li,null,"\uC720\uC800\uAC00 \uC5C6\uC73C\uBA74 \uC2E4\uD328"),`
`,s.default.createElement(n.li,null,"\uBE44\uBC00\uBC88\uD638\uAC00 \uB2E4\uB974\uBA74 \uC2E4\uD328"),`
`,s.default.createElement(n.li,null,s.default.createElement(n.code,null,"isVerified"),"\uAC00 ",s.default.createElement(n.code,null,"false"),"\uBA74 \uC2E4\uD328 (\uC774\uBA54\uC77C \uC778\uC99D\uC5D0\uC11C true\uB85C \uBC14\uAFD4\uC90C)"),`
`,s.default.createElement(n.li,null,"\uB2E4 \uD1B5\uACFC\uD558\uBA74 \uC131\uACF5"),`
`),`
`,s.default.createElement(n.hr,null),`
`,s.default.createElement(n.h3,null,"\uCEE8\uD2B8\uB864\uB7EC"),`
`,s.default.createElement(n.pre,null,s.default.createElement(n.code,{className:"hljs language-javascript"},s.default.createElement(n.span,{className:"hljs-keyword"},"export")," ",s.default.createElement(n.span,{className:"hljs-keyword"},"const")," ",s.default.createElement(n.span,{className:"hljs-title function_"},"login")," = ",s.default.createElement(n.span,{className:"hljs-keyword"},"async")," (",s.default.createElement(n.span,{className:"hljs-params"},"req, res"),`) => {
  `,s.default.createElement(n.span,{className:"hljs-keyword"},"return")," res.",s.default.createElement(n.span,{className:"hljs-title function_"},"status"),"(",s.default.createElement(n.span,{className:"hljs-number"},"200"),").",s.default.createElement(n.span,{className:"hljs-title function_"},"json"),"(req.",s.default.createElement(n.span,{className:"hljs-property"},"user"),".",s.default.createElement(n.span,{className:"hljs-title function_"},"toAuthJSON"),`());
};
`)),`
`,s.default.createElement(n.p,null,"\uBBF8\uB4E4\uC6E8\uC5B4\uC5D0\uC11C \uAC80\uC99D\uD558\uB294\uB2E8\uACC4\uB97C \uAC70\uCE58\uACE0 \uC131\uACF5\uD558\uBA74 ",s.default.createElement(n.code,null,"user"),"\uAC1D\uCCB4\uB97C \uB9AC\uD134\uD574\uC92C\uAE30\uB54C\uBB38\uC5D0 ",s.default.createElement(n.code,null,"req.user"),"\uB85C \uC811\uADFC\uAC00\uB2A5\uD558\uB2E4. ",s.default.createElement(n.code,null,"toAuthJSON"),"\uC740 \uBAA8\uB378\uC5D0\uC11C \uC774\uBBF8 \uB9CC\uB4E4\uC5B4\uB193\uC740 \uD568\uC218"),`
`,s.default.createElement(n.hr,null),`
`,s.default.createElement(n.h3,null,"\uC2E4\uD589\uACFC \uACB0\uACFC"),`
`,s.default.createElement(n.p,null,s.default.createElement(n.img,{src:"/assets/images/posts/190128/results1.png",alt:"result1"})));return e?s.default.createElement(e,{...p},a):a}var r=t;var i=typeof o<"u"&&o.headers,c=typeof o<"u"&&o.meta,_=typeof o<"u"&&o.handle;export{r as default,_ as handle,c as meta};
