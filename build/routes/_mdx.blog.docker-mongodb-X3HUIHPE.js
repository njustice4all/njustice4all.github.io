import{c as l,d as c}from"/build/_shared/chunk-EGLYY6PQ.js";var n=l(c()),s={template:"blog-post",slug:"/docker-mongodb-\uC5F0\uACB0",date:"2019-04-08 09:00",title:"Docker - MongoDB \uC5F0\uACB0",featuredImage:"/assets/images/posts/190208/docker.png",description:"docker \uAE30\uBCF8 \uC0AC\uC6A9\uBC95\uC744 \uC54C\uC544\uBCF4\uC790"};function a(p={}){let o=Object.assign({h3:"h3",p:"p",img:"img",blockquote:"blockquote",hr:"hr",pre:"pre",code:"code",span:"span",ul:"ul",li:"li"},p.components),{wrapper:e}=o,m=n.default.createElement(n.default.Fragment,null,n.default.createElement(o.h3,null,"Docker"),`
`,n.default.createElement(o.p,null,"\uC774\uC804\uC5D0 \uC791\uC131\uD588\uB358 node-express-mongodb\uC5D0\uC11C \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uBD80\uBD84\uB9CC \uB530\uB85C \uB5BC\uC5B4\uB0B4\uC11C Docker\uC5D0\uC11C \uAD6C\uB3D9\uC2DC\uCF1C\uBCF4\uC790... \uB85C\uCEEC\uC5D0 \uC124\uCE58\uB418\uC5B4\uC788\uB358 MongoDB\uB294 \uC0AD\uC81C\uD558\uC790"),`
`,n.default.createElement(o.p,null,n.default.createElement(o.img,{src:"/assets/images/posts/190208/header.png",alt:"\uC124\uCE58"})),`
`,n.default.createElement(o.blockquote,null,`
`,n.default.createElement(o.p,null,"\uB3C4\uCEE4\uAC00 \uC124\uCE58\uAC00 \uB418\uACE0 \uC801\uC808\uD55C \uB85C\uADF8\uC778 \uD6C4 \uAD6C\uB3D9\uB41C \uBAA8\uC2B5\uC774\uB2E4."),`
`),`
`,n.default.createElement(o.hr,null),`
`,n.default.createElement(o.h3,null,"RUN"),`
`,n.default.createElement(o.p,null,"CLI\uCC3D\uC5D0\uC11C \uB3C4\uCEE4\uB85C mongodb\uB97C \uAD6C\uB3D9\uD558\uC790"),`
`,n.default.createElement(o.pre,null,n.default.createElement(o.code,{className:"hljs language-javascript"},"docker run --name mongo -p ",n.default.createElement(o.span,{className:"hljs-number"},"27017"),":",n.default.createElement(o.span,{className:"hljs-number"},"27017")," -v /",n.default.createElement(o.span,{className:"hljs-title class_"},"Users"),"/youngjoohan/",n.default.createElement(o.span,{className:"hljs-attr"},"db"),":",n.default.createElement(o.span,{className:"hljs-regexp"},"/data/"),`db -d mongo
`)),`
`,n.default.createElement(o.ul,null,`
`,n.default.createElement(o.li,null,"\uB3C4\uCEE4 ",n.default.createElement(o.code,null,"\uC2E4\uD589")),`
`,n.default.createElement(o.li,null,n.default.createElement(o.code,null,"--\uC774\uB984"),"\uC740 mongo"),`
`,n.default.createElement(o.li,null,n.default.createElement(o.code,null,"-\uD3EC\uD2B8"),"\uB294 27017\uB85C mapping"),`
`,n.default.createElement(o.li,null,n.default.createElement(o.code,null,"-\uC0AC\uC6A9\uD560 \uB514\uBE44"),"\uC704\uCE58\uB294 \uB85C\uCEEC\uC758 ",n.default.createElement(o.code,null,"/Users/youngjoohan/db"),"\uD3F4\uB354"),`
`,n.default.createElement(o.li,null,n.default.createElement(o.code,null,"-\uC2E4\uD589\uBAA8\uB4DC")," \uBC31\uADF8\uB77C\uC6B4\uB4DC"),`
`,n.default.createElement(o.li,null,n.default.createElement(o.code,null,"\uBB58\uC2E4\uD589?")," mongo"),`
`),`
`,n.default.createElement(o.p,null,"\uC2E4\uD589\uD558\uBA74 \uB3C4\uCEE4\uB294 mongo\uC774\uBBF8\uC9C0\uB97C \uCC3E\uACE0 \uC5C6\uC73C\uBA74 ",n.default.createElement(o.code,null,"docker pull"),"\uD544\uC694\uC5C6\uC774 docker-hub\uC5D0\uC11C \uBC14\uB85C \uB2E4\uC6B4\uBC1B\uB294\uB2E4. \uAC13\uAC13..."),`
`,n.default.createElement(o.hr,null),`
`,n.default.createElement(o.h3,null,"\uC2E4\uD589\uD655\uC778"),`
`,n.default.createElement(o.p,null,n.default.createElement(o.code,null,"docker ps"),"\uBA85\uB839\uC5B4\uB85C \uD604\uC7AC \uAD6C\uB3D9\uC911\uC778 \uCEE8\uD14C\uC774\uB108\uB97C \uC0B4\uD3B4\uBCF4\uC790"),`
`,n.default.createElement(o.p,null,n.default.createElement(o.img,{src:"/assets/images/posts/190208/result.png",alt:"\uC2E4\uD589\uD655\uC778"})),`
`,n.default.createElement(o.p,null,"\uC798\uB41C\uB2E4. \uC774\uC81C \uC571\uC744 \uC2E4\uD589\uD558\uBA74 \uD574\uB2F9\uCEE8\uD14C\uC774\uB108\uC758 \uB514\uBE44\uB97C \uC0AC\uC6A9\uD558\uB294\uAC78 \uBCFC \uC218 \uC788\uB2E4. (\uB0B4 \uB85C\uCEEC\uC758 \uB514\uBE44\uB85C)"),`
`,n.default.createElement(o.p,null,n.default.createElement(o.img,{src:"/assets/images/posts/190208/result1.png",alt:"\uC2E4\uD589\uD655\uC7781"})),`
`,n.default.createElement(o.p,null,"\uD558\uC9C0\uB9CC \uCEE8\uD14C\uC774\uB108\uB97C \uC62C\uB9AC\uACE0 \uB0B4\uB9AC\uACE0 \uD560\uB54C\uB9C8\uB2E4 \uB9E4\uBC88 ",n.default.createElement(o.code,null,"docker stop $(docker ps -aq)"),"\uC774\uB098 ",n.default.createElement(o.code,null,"docker rm $(docker ps -aq)"),"\uAC19\uC740 \uBA85\uB839\uC744 \uD560\uC21C \uC5C6\uB2E4. ",n.default.createElement(o.code,null,"docker-compose"),"\uB97C \uC791\uC131\uD558\uC790"),`
`,n.default.createElement(o.hr,null),`
`,n.default.createElement(o.h3,null,"docker-compose \uC791\uC131"),`
`,n.default.createElement(o.p,null,"\uD504\uB85C\uC81D\uD2B8 \uB8E8\uD2B8\uC5D0\uC11C ",n.default.createElement(o.code,null,"docker-compose.yml"),"\uD30C\uC77C\uC744 \uB9CC\uB4E4\uC790"),`
`,n.default.createElement(o.pre,null,n.default.createElement(o.code,{className:"hljs language-yml"},n.default.createElement(o.span,{className:"hljs-attr"},"version:")," ",n.default.createElement(o.span,{className:"hljs-string"},"'3.7'"),`
`,n.default.createElement(o.span,{className:"hljs-attr"},"services:"),`
  `,n.default.createElement(o.span,{className:"hljs-attr"},"mongodb:"),`
    `,n.default.createElement(o.span,{className:"hljs-comment"},"# \uBC84\uC804\uC744 \uBA85\uC2DC\uD574\uC8FC\uB294\uAC8C \uC88B\uB2E4 mongo:version"),`
    `,n.default.createElement(o.span,{className:"hljs-comment"},"# \uC774\uAC74 latest"),`
    `,n.default.createElement(o.span,{className:"hljs-attr"},"image:")," ",n.default.createElement(o.span,{className:"hljs-string"},"mongo"),`
    `,n.default.createElement(o.span,{className:"hljs-attr"},"container_name:")," ",n.default.createElement(o.span,{className:"hljs-string"},"mongo"),`
    `,n.default.createElement(o.span,{className:"hljs-attr"},"ports:"),`
      `,n.default.createElement(o.span,{className:"hljs-bullet"},"-")," ",n.default.createElement(o.span,{className:"hljs-string"},"'27017:27017'"),`
    `,n.default.createElement(o.span,{className:"hljs-attr"},"volumes:"),`
      `,n.default.createElement(o.span,{className:"hljs-bullet"},"-")," ",n.default.createElement(o.span,{className:"hljs-string"},"/Users/youngjoohan/db/mongodb:/data/db"),`
    `,n.default.createElement(o.span,{className:"hljs-attr"},"networks:"),`
      `,n.default.createElement(o.span,{className:"hljs-bullet"},"-")," ",n.default.createElement(o.span,{className:"hljs-string"},"backend"),`

`,n.default.createElement(o.span,{className:"hljs-attr"},"networks:"),`
  `,n.default.createElement(o.span,{className:"hljs-attr"},"backend:"),`
    `,n.default.createElement(o.span,{className:"hljs-attr"},"driver:")," ",n.default.createElement(o.span,{className:"hljs-string"},"bridge"),`
`)),`
`,n.default.createElement(o.p,null,"\uC704\uC5D0\uC11C \uC2E4\uD589\uD55C\uAC70 \uAE30\uBC18\uC73C\uB85C \uC0B4\uD3B4\uBCF4\uBA74 \uC774\uAC74 \uAC70\uC800\uBA39\uAE30\uB2E4."),`
`,n.default.createElement(o.blockquote,null,`
`,n.default.createElement(o.p,null,"compose\uD30C\uC77C \uC791\uC131\uD560\uB550 \uC0AC\uC6A9\uD558\uB294 \uC774\uBBF8\uC9C0\uB294 \uBC84\uC804\uC744 \uBA85\uC2DC\uD574\uC8FC\uB294\uAC8C \uC88B\uB2E4"),`
`),`
`,n.default.createElement(o.p,null,"\uD574\uB2F9 \uD30C\uC77C\uC774 \uC788\uB294\uACF3\uC5D0\uC11C ",n.default.createElement(o.code,null,"docker-compose up"),"\uC744 \uC2E4\uD589\uD558\uBA74 foreground\uB85C mongo\uAC00 \uB3CC\uC544\uAC04\uB2E4. \uBC18\uB300\uB294 ",n.default.createElement(o.code,null,"docker-compose down")));return e?n.default.createElement(e,{...p},m):m}var t=a;var _=typeof s<"u"&&s.headers,r=typeof s<"u"&&s.meta,d=typeof s<"u"&&s.handle;export{t as default,d as handle,r as meta};
