import{c as m,d as l}from"/build/_shared/chunk-EGLYY6PQ.js";var s=m(l()),p={template:"blog-post",slug:"/NODE+EXPRESS+MONGODB-\uD68C\uC6D0\uAC00\uC785-FLOW-1",date:"2019-01-22 13:42",title:"[NODE] NODE+EXPRESS+MONGODB \uD68C\uC6D0\uAC00\uC785 FLOW #1",featuredImage:"/assets/images/posts/github.jpg",description:"NODE+EXPRESS+MONGODB \uD68C\uC6D0\uAC00\uC785 FLOW"};function t(o={}){let n=Object.assign({p:"p",h3:"h3",img:"img",hr:"hr",code:"code",blockquote:"blockquote",pre:"pre",span:"span",strong:"strong"},o.components),{wrapper:a}=n,e=s.default.createElement(s.default.Fragment,null,s.default.createElement(n.p,null,"\uB9CE\uC774\uC4F0\uB294 node express mongodb \uC870\uD569\uC73C\uB85C \uD68C\uC6D0\uAC00\uC785\uACFC github\uC778\uC99D\uB4F1\uC744 \uAD6C\uD604. \uCCAB\uBC88\uC9F8\uB85C\uB294 \uD504\uB85C\uC81D\uD2B8\uC758 \uAD6C\uC870\uB4F1\uC744 \uC124\uC815\uD568."),`
`,s.default.createElement(n.h3,null,"\uAD6C\uC870"),`
`,s.default.createElement(n.p,null,s.default.createElement(n.img,{src:"/assets/images/posts/structure.png",alt:"\uAE30\uBCF8\uAD6C\uC870"})),`
`,s.default.createElement(n.p,null,"\uC704 \uAD6C\uC870\uC5D0\uC11C \uC9C0\uAE08 \uB2F9\uC7A5\uC740 models\uD3F4\uB354\uAC00 \uD544\uC694\uD558\uC9C0 \uC54A\uB2E4."),`
`,s.default.createElement(n.hr,null),`
`,s.default.createElement(n.h3,null,"\uD544\uC694\uD55C \uD328\uD0A4\uC9C0 \uC124\uCE58"),`
`,s.default.createElement(n.p,null,s.default.createElement(n.code,null,"yarn add express mongoose dotenv")),`
`,s.default.createElement(n.blockquote,null,`
`,s.default.createElement(n.p,null,"\uD544\uC694\uC5D0\uB530\uB77C webpack\uACFC nodemon\uB3C4 global\uC124\uCE58\uD558\uC790"),`
`),`
`,s.default.createElement(n.hr,null),`
`,s.default.createElement(n.h3,null,"webpack.config.js \uC124\uC815"),`
`,s.default.createElement(n.pre,null,s.default.createElement(n.code,{className:"hljs language-javascript"},s.default.createElement(n.span,{className:"hljs-keyword"},"const")," path = ",s.default.createElement(n.span,{className:"hljs-built_in"},"require"),"(",s.default.createElement(n.span,{className:"hljs-string"},"'path'"),`);
`,s.default.createElement(n.span,{className:"hljs-keyword"},"const")," nodeExternals = ",s.default.createElement(n.span,{className:"hljs-built_in"},"require"),"(",s.default.createElement(n.span,{className:"hljs-string"},"'webpack-node-externals'"),`);

`,s.default.createElement(n.span,{className:"hljs-variable language_"},"module"),".",s.default.createElement(n.span,{className:"hljs-property"},"exports"),` = {
  `,s.default.createElement(n.span,{className:"hljs-attr"},"entry"),`: {
    `,s.default.createElement(n.span,{className:"hljs-attr"},"index"),": ",s.default.createElement(n.span,{className:"hljs-string"},"'./src/index.js'"),`,
  },
  `,s.default.createElement(n.span,{className:"hljs-attr"},"output"),`: {
    `,s.default.createElement(n.span,{className:"hljs-attr"},"path"),": path.",s.default.createElement(n.span,{className:"hljs-title function_"},"join"),"(__dirname, ",s.default.createElement(n.span,{className:"hljs-string"},"'dist'"),`),
    `,s.default.createElement(n.span,{className:"hljs-attr"},"publicPath"),": ",s.default.createElement(n.span,{className:"hljs-string"},"'/'"),`,
    `,s.default.createElement(n.span,{className:"hljs-attr"},"filename"),": ",s.default.createElement(n.span,{className:"hljs-string"},"'[name].bundle.js'"),`,
  },
  `,s.default.createElement(n.span,{className:"hljs-attr"},"target"),": ",s.default.createElement(n.span,{className:"hljs-string"},"'node'"),`,
  `,s.default.createElement(n.span,{className:"hljs-attr"},"externals"),": [",s.default.createElement(n.span,{className:"hljs-title function_"},"nodeExternals"),"()], ",s.default.createElement(n.span,{className:"hljs-comment"},"// Need this to avoid error when working with Express"),`
  `,s.default.createElement(n.span,{className:"hljs-attr"},"module"),`: {
    `,s.default.createElement(n.span,{className:"hljs-attr"},"rules"),`: [
      {
        `,s.default.createElement(n.span,{className:"hljs-comment"},"// Transpiles ES6-8 into ES5"),`
        `,s.default.createElement(n.span,{className:"hljs-attr"},"test"),": ",s.default.createElement(n.span,{className:"hljs-regexp"},"/\\.js$/"),`,
        `,s.default.createElement(n.span,{className:"hljs-attr"},"exclude"),": ",s.default.createElement(n.span,{className:"hljs-regexp"},"/node_modules/"),`,
        `,s.default.createElement(n.span,{className:"hljs-attr"},"use"),`: {
          `,s.default.createElement(n.span,{className:"hljs-attr"},"loader"),": ",s.default.createElement(n.span,{className:"hljs-string"},"'babel-loader'"),`,
        },
      },
    ],
  },
};
`)),`
`,s.default.createElement(n.hr,null),`
`,s.default.createElement(n.h3,null,"\uC571\uC758 \uC9C4\uC785\uC810\uC744 src/index.js\uB85C \uD588\uC73C\uB2C8 \uC791\uC131"),`
`,s.default.createElement(n.pre,null,s.default.createElement(n.code,{className:"hljs language-javascript"},s.default.createElement(n.span,{className:"hljs-keyword"},"import")," express ",s.default.createElement(n.span,{className:"hljs-keyword"},"from")," ",s.default.createElement(n.span,{className:"hljs-string"},"'express'"),`;

`,s.default.createElement(n.span,{className:"hljs-keyword"},"import")," ",s.default.createElement(n.span,{className:"hljs-string"},"'./config/db'"),`;

`,s.default.createElement(n.span,{className:"hljs-keyword"},"import")," constants ",s.default.createElement(n.span,{className:"hljs-keyword"},"from")," ",s.default.createElement(n.span,{className:"hljs-string"},"'./config/constants'"),`;
`,s.default.createElement(n.span,{className:"hljs-keyword"},"import")," middlewares ",s.default.createElement(n.span,{className:"hljs-keyword"},"from")," ",s.default.createElement(n.span,{className:"hljs-string"},"'./middlewares'"),`;
`,s.default.createElement(n.span,{className:"hljs-keyword"},"import")," appRoutes ",s.default.createElement(n.span,{className:"hljs-keyword"},"from")," ",s.default.createElement(n.span,{className:"hljs-string"},"'./modules'"),`;

`,s.default.createElement(n.span,{className:"hljs-keyword"},"const")," app = ",s.default.createElement(n.span,{className:"hljs-title function_"},"express"),`();

`,s.default.createElement(n.span,{className:"hljs-title function_"},"middlewares"),`(app);
`,s.default.createElement(n.span,{className:"hljs-title function_"},"appRoutes"),`(app);

app.`,s.default.createElement(n.span,{className:"hljs-title function_"},"get"),"(",s.default.createElement(n.span,{className:"hljs-string"},"'/'"),", ",s.default.createElement(n.span,{className:"hljs-function"},"(",s.default.createElement(n.span,{className:"hljs-params"},"req, res"),") =>"),` {
  `,s.default.createElement(n.span,{className:"hljs-keyword"},"return")," res.",s.default.createElement(n.span,{className:"hljs-title function_"},"status"),"(",s.default.createElement(n.span,{className:"hljs-number"},"200"),").",s.default.createElement(n.span,{className:"hljs-title function_"},"json"),"({ ",s.default.createElement(n.span,{className:"hljs-attr"},"hey"),": ",s.default.createElement(n.span,{className:"hljs-string"},"'man'"),` });
});

app.`,s.default.createElement(n.span,{className:"hljs-title function_"},"listen"),"(constants.",s.default.createElement(n.span,{className:"hljs-property"},"PORT"),", ",s.default.createElement(n.span,{className:"hljs-function"},"(",s.default.createElement(n.span,{className:"hljs-params"},"err"),") =>"),` {
  `,s.default.createElement(n.span,{className:"hljs-keyword"},"if"),` (err) {
    `,s.default.createElement(n.span,{className:"hljs-keyword"},"throw"),` err;
  }

  `,s.default.createElement(n.span,{className:"hljs-variable language_"},"console"),".",s.default.createElement(n.span,{className:"hljs-title function_"},"log"),"(",s.default.createElement(n.span,{className:"hljs-string"},"`server is running on port ",s.default.createElement(n.span,{className:"hljs-subst"},"${constants.PORT}"),"`"),`);
  `,s.default.createElement(n.span,{className:"hljs-variable language_"},"console"),".",s.default.createElement(n.span,{className:"hljs-title function_"},"log"),"(",s.default.createElement(n.span,{className:"hljs-string"},"`running environment is ",s.default.createElement(n.span,{className:"hljs-subst"},"${process.env.NODE_ENV}"),"`"),`);
});
`)),`
`,s.default.createElement(n.hr,null),`
`,s.default.createElement(n.p,null,s.default.createElement(n.code,null,"config"),"\uD3F4\uB354\uB0B4\uC758 ",s.default.createElement(n.code,null,"db.js"),"\uC640 ",s.default.createElement(n.code,null,"constants.js"),"\uAC00 \uD544\uC694\uD558\uB2C8\uAE4C \uC791\uC131\uD574\uC57C\uD55C\uB2E4. db\uB294 mongoose\uB97C \uC0AC\uC6A9\uD574\uC11C mongodb\uB97C \uAD6C\uB3D9\uD558\uACE0 constants\uB294 mongodb\uC640 api\uC5D0 \uC0AC\uC6A9\uD558\uB294 \uC0C1\uC218\uB4E4\uC744 \uAC1D\uCCB4\uB85C \uAC00\uC838\uC628\uB2E4"),`
`,s.default.createElement(n.h3,null,"index\uC5D0\uC11C \uD544\uC694\uD55C config\uD3F4\uB354\uC758 db.js\uC640 constants.js\uC791\uC131"),`
`,s.default.createElement(n.pre,null,s.default.createElement(n.code,{className:"hljs language-javascript"},s.default.createElement(n.span,{className:"hljs-keyword"},"import")," mongoose ",s.default.createElement(n.span,{className:"hljs-keyword"},"from")," ",s.default.createElement(n.span,{className:"hljs-string"},"'mongoose'"),`;

`,s.default.createElement(n.span,{className:"hljs-keyword"},"import")," constants ",s.default.createElement(n.span,{className:"hljs-keyword"},"from")," ",s.default.createElement(n.span,{className:"hljs-string"},"'./constants'"),`;

`,s.default.createElement(n.span,{className:"hljs-keyword"},"if")," (process.",s.default.createElement(n.span,{className:"hljs-property"},"env"),".",s.default.createElement(n.span,{className:"hljs-property"},"NODE_ENV")," !== ",s.default.createElement(n.span,{className:"hljs-string"},"'production'"),`) {
  mongoose.`,s.default.createElement(n.span,{className:"hljs-title function_"},"set"),"(",s.default.createElement(n.span,{className:"hljs-string"},"'debug'"),", ",s.default.createElement(n.span,{className:"hljs-literal"},"true"),`);
}

`,s.default.createElement(n.span,{className:"hljs-keyword"},"const"),` options = {
  `,s.default.createElement(n.span,{className:"hljs-attr"},"useNewUrlParser"),": ",s.default.createElement(n.span,{className:"hljs-literal"},"true"),`,
  `,s.default.createElement(n.span,{className:"hljs-attr"},"useCreateIndex"),": ",s.default.createElement(n.span,{className:"hljs-literal"},"true"),`,
  `,s.default.createElement(n.span,{className:"hljs-attr"},"dbName"),": constants.",s.default.createElement(n.span,{className:"hljs-property"},"DB_NAME"),`,
  `,s.default.createElement(n.span,{className:"hljs-attr"},"autoReconnect"),": ",s.default.createElement(n.span,{className:"hljs-literal"},"true"),`,
  `,s.default.createElement(n.span,{className:"hljs-attr"},"reconnectTries"),": ",s.default.createElement(n.span,{className:"hljs-number"},"30"),`,
};

mongoose
  .`,s.default.createElement(n.span,{className:"hljs-title function_"},"connect"),"(constants.",s.default.createElement(n.span,{className:"hljs-property"},"DB_URL"),`, options)
  .`,s.default.createElement(n.span,{className:"hljs-title function_"},"then"),"(",s.default.createElement(n.span,{className:"hljs-function"},"() =>")," ",s.default.createElement(n.span,{className:"hljs-variable language_"},"console"),".",s.default.createElement(n.span,{className:"hljs-title function_"},"log"),"(",s.default.createElement(n.span,{className:"hljs-string"},"'mongoDB is running...'"),`))
  .`,s.default.createElement(n.span,{className:"hljs-title function_"},"catch"),"(",s.default.createElement(n.span,{className:"hljs-function"},"(",s.default.createElement(n.span,{className:"hljs-params"},"err"),") =>")," ",s.default.createElement(n.span,{className:"hljs-variable language_"},"console"),".",s.default.createElement(n.span,{className:"hljs-title function_"},"error"),`(err));
`)),`
`,s.default.createElement(n.pre,null,s.default.createElement(n.code,{className:"hljs language-javascript"},s.default.createElement(n.span,{className:"hljs-keyword"},"import")," dotenv ",s.default.createElement(n.span,{className:"hljs-keyword"},"from")," ",s.default.createElement(n.span,{className:"hljs-string"},"'dotenv'"),`;

dotenv.`,s.default.createElement(n.span,{className:"hljs-title function_"},"config"),`();

`,s.default.createElement(n.span,{className:"hljs-keyword"},"const"),` config = {
  `,s.default.createElement(n.span,{className:"hljs-attr"},"development"),`: {
    `,s.default.createElement(n.span,{className:"hljs-attr"},"DB_URL"),": process.",s.default.createElement(n.span,{className:"hljs-property"},"env"),".",s.default.createElement(n.span,{className:"hljs-property"},"DB_URL"),`,
    `,s.default.createElement(n.span,{className:"hljs-attr"},"DB_NAME"),": ",s.default.createElement(n.span,{className:"hljs-string"},"'newbie-dev'"),`,
    `,s.default.createElement(n.span,{className:"hljs-attr"},"JWT_SECRET"),": process.",s.default.createElement(n.span,{className:"hljs-property"},"env"),".",s.default.createElement(n.span,{className:"hljs-property"},"JWT_SECRET"),`,
  },
  `,s.default.createElement(n.span,{className:"hljs-attr"},"production"),`: {
    `,s.default.createElement(n.span,{className:"hljs-attr"},"DB_URL"),": process.",s.default.createElement(n.span,{className:"hljs-property"},"env"),".",s.default.createElement(n.span,{className:"hljs-property"},"DB_URL"),`,
    `,s.default.createElement(n.span,{className:"hljs-attr"},"DB_NAME"),": ",s.default.createElement(n.span,{className:"hljs-string"},"'newbie-prod'"),`,
    `,s.default.createElement(n.span,{className:"hljs-attr"},"JWT_SECRET"),": process.",s.default.createElement(n.span,{className:"hljs-property"},"env"),".",s.default.createElement(n.span,{className:"hljs-property"},"JWT_SECRET"),`,
  },
  `,s.default.createElement(n.span,{className:"hljs-attr"},"test"),`: {
    `,s.default.createElement(n.span,{className:"hljs-attr"},"DB_URL"),": process.",s.default.createElement(n.span,{className:"hljs-property"},"env"),".",s.default.createElement(n.span,{className:"hljs-property"},"DB_URL"),`,
    `,s.default.createElement(n.span,{className:"hljs-attr"},"DB_NAME"),": ",s.default.createElement(n.span,{className:"hljs-string"},"'newbie-test'"),`,
    `,s.default.createElement(n.span,{className:"hljs-attr"},"JWT_SECRET"),": process.",s.default.createElement(n.span,{className:"hljs-property"},"env"),".",s.default.createElement(n.span,{className:"hljs-property"},"JWT_SECRET"),`,
  },
};

`,s.default.createElement(n.span,{className:"hljs-keyword"},"const")," ",s.default.createElement(n.span,{className:"hljs-title function_"},"getConfig")," = (",s.default.createElement(n.span,{className:"hljs-params"},"env"),`) => config[env];

`,s.default.createElement(n.span,{className:"hljs-keyword"},"const"),` defaultConfig = {
  `,s.default.createElement(n.span,{className:"hljs-attr"},"PORT"),": process.",s.default.createElement(n.span,{className:"hljs-property"},"env"),".",s.default.createElement(n.span,{className:"hljs-property"},"PORT"),`,
};

`,s.default.createElement(n.span,{className:"hljs-keyword"},"export")," ",s.default.createElement(n.span,{className:"hljs-keyword"},"default"),` {
  ...defaultConfig,
  ...`,s.default.createElement(n.span,{className:"hljs-title function_"},"getConfig"),"(process.",s.default.createElement(n.span,{className:"hljs-property"},"env"),".",s.default.createElement(n.span,{className:"hljs-property"},"NODE_ENV"),`),
};
`)),`
`,s.default.createElement(n.hr,null),`
`,s.default.createElement(n.h3,null,"\uBBF8\uB4E4\uC6E8\uC5B4\uAD6C\uD604"),`
`,s.default.createElement(n.pre,null,s.default.createElement(n.code,{className:"hljs language-javascript"},s.default.createElement(n.span,{className:"hljs-keyword"},"import")," express ",s.default.createElement(n.span,{className:"hljs-keyword"},"from")," ",s.default.createElement(n.span,{className:"hljs-string"},"'express'"),`;
`,s.default.createElement(n.span,{className:"hljs-keyword"},"import")," morgan ",s.default.createElement(n.span,{className:"hljs-keyword"},"from")," ",s.default.createElement(n.span,{className:"hljs-string"},"'morgan'"),`;
`,s.default.createElement(n.span,{className:"hljs-keyword"},"import")," compression ",s.default.createElement(n.span,{className:"hljs-keyword"},"from")," ",s.default.createElement(n.span,{className:"hljs-string"},"'compression'"),`;
`,s.default.createElement(n.span,{className:"hljs-keyword"},"import")," helmet ",s.default.createElement(n.span,{className:"hljs-keyword"},"from")," ",s.default.createElement(n.span,{className:"hljs-string"},"'helmet'"),`;
`,s.default.createElement(n.span,{className:"hljs-keyword"},"import")," passport ",s.default.createElement(n.span,{className:"hljs-keyword"},"from")," ",s.default.createElement(n.span,{className:"hljs-string"},"'passport'"),`;
`,s.default.createElement(n.span,{className:"hljs-keyword"},"import")," redis ",s.default.createElement(n.span,{className:"hljs-keyword"},"from")," ",s.default.createElement(n.span,{className:"hljs-string"},"'redis'"),`;
`,s.default.createElement(n.span,{className:"hljs-keyword"},"import")," cors ",s.default.createElement(n.span,{className:"hljs-keyword"},"from")," ",s.default.createElement(n.span,{className:"hljs-string"},"'cors'"),`;

`,s.default.createElement(n.span,{className:"hljs-keyword"},"const")," isDev = process.",s.default.createElement(n.span,{className:"hljs-property"},"env"),".",s.default.createElement(n.span,{className:"hljs-property"},"NODE_ENV")," === ",s.default.createElement(n.span,{className:"hljs-string"},"'development'"),`;
`,s.default.createElement(n.span,{className:"hljs-keyword"},"const")," isProd = process.",s.default.createElement(n.span,{className:"hljs-property"},"env"),".",s.default.createElement(n.span,{className:"hljs-property"},"NODE_ENV")," === ",s.default.createElement(n.span,{className:"hljs-string"},"'production'"),`;
`,s.default.createElement(n.span,{className:"hljs-keyword"},"const")," client = redis.",s.default.createElement(n.span,{className:"hljs-title function_"},"createClient"),"(",s.default.createElement(n.span,{className:"hljs-number"},"6379"),", ",s.default.createElement(n.span,{className:"hljs-string"},"'127.0.0.1'"),`);

`,s.default.createElement(n.span,{className:"hljs-keyword"},"export")," ",s.default.createElement(n.span,{className:"hljs-keyword"},"default"),` (app) => {
  `,s.default.createElement(n.span,{className:"hljs-keyword"},"if"),` (isProd) {
    app.`,s.default.createElement(n.span,{className:"hljs-title function_"},"use"),"(",s.default.createElement(n.span,{className:"hljs-title function_"},"compression"),`());
    app.`,s.default.createElement(n.span,{className:"hljs-title function_"},"use"),"(",s.default.createElement(n.span,{className:"hljs-title function_"},"helmet"),`());
  }

  app.`,s.default.createElement(n.span,{className:"hljs-title function_"},"use"),"(",s.default.createElement(n.span,{className:"hljs-title function_"},"cors"),`());

  app.`,s.default.createElement(n.span,{className:"hljs-title function_"},"use"),"(express.",s.default.createElement(n.span,{className:"hljs-title function_"},"json"),`());

  app.`,s.default.createElement(n.span,{className:"hljs-title function_"},"use"),"(passport.",s.default.createElement(n.span,{className:"hljs-title function_"},"initialize"),`());

  app.`,s.default.createElement(n.span,{className:"hljs-title function_"},"use"),"(",s.default.createElement(n.span,{className:"hljs-function"},"(",s.default.createElement(n.span,{className:"hljs-params"},"req, res, next"),") =>"),` {
    req.`,s.default.createElement(n.span,{className:"hljs-property"},"cache"),` = client;
    `,s.default.createElement(n.span,{className:"hljs-title function_"},"next"),`();
  });

  `,s.default.createElement(n.span,{className:"hljs-keyword"},"if"),` (isDev) {
    app.`,s.default.createElement(n.span,{className:"hljs-title function_"},"use"),"(",s.default.createElement(n.span,{className:"hljs-title function_"},"morgan"),"(",s.default.createElement(n.span,{className:"hljs-string"},"'dev'"),`));
  }
};
`)),`
`,s.default.createElement(n.blockquote,null,`
`,s.default.createElement(n.p,null,"\uD328\uD0A4\uC9C0 \uC124\uCE58\uD55C\uAC8C \uB9CE\uC740\uB370 \uD544\uC694\uC5C6\uB294\uAC74 \uC124\uCE58 \uC548\uD574\uB3C4\uB41C\uB2E4. \uADF8\uB9AC\uACE0 \uC571 \uB8E8\uD2B8\uD3F4\uB354\uC5D0 ",s.default.createElement(n.code,null,".env"),"\uD30C\uC77C\uC744 \uB9CC\uB4E4\uC5B4 \uC801\uC808\uD558\uAC8C \uD544\uC694\uD55C \uAC12\uC744 \uC785\uB825\uD55C\uB2E4."),`
`),`
`,s.default.createElement(n.hr,null),`
`,s.default.createElement(n.h3,null,"\uC2E4\uD589\uACFC \uACB0\uACFC"),`
`,s.default.createElement(n.p,null,"\uC774\uC81C \uC571\uC5D0\uC11C \uC9C0\uAE08\uC740 \uD544\uC694\uC5C6\uB294 ",s.default.createElement(n.code,null,"appRoutes(app);"),"\uAC19\uC740\uAC83\uB4E4\uC744 \uC8FC\uC11D\uC73C\uB85C \uB9C9\uACE0 \uC2E4\uD589\uD574\uBCF4\uBA74 \uC2E4\uD589\uC774 \uB41C\uB2E4. \uBE4C\uB4DC\uD558\uAE30\uC704\uD574\uC120 \uCF58\uC194\uC5D0\uC11C ",s.default.createElement(n.code,null,"webpack -w --mode development"),". \uC2E4\uD589\uC740 ",s.default.createElement(n.code,null,"nodemon ./dist/index.bundle.js"),"\uD558\uBA74 \uB418\uB294\uB370 \uACC4\uC18D \uC774\uB807\uAC8C \uD560 \uC21C \uC5C6\uC73C\uB2C8 ",s.default.createElement(n.code,null,"package.json"),"\uD30C\uC77C\uC5D0\uC11C \uC801\uC808\uD558\uAC8C \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uC791\uC131\uD558\uACE0 \uC2E4\uD589\uD558\uBA74 \uC544\uB798\uC640\uAC19\uC774 \uB098\uC640\uC57C\uD55C\uB2E4."),`
`,s.default.createElement(n.p,null,s.default.createElement(n.img,{src:"/assets/images/posts/results1.png",alt:"\uACB0\uACFC1"})),`
`,s.default.createElement(n.p,null,s.default.createElement(n.img,{src:"/assets/images/posts/results2.png",alt:"\uACB0\uACFC2"})),`
`,s.default.createElement(n.p,null,s.default.createElement(n.strong,null,"continue...")));return a?s.default.createElement(a,{...o},e):e}var r=t;var h=typeof p<"u"&&p.headers,c=typeof p<"u"&&p.meta,_=typeof p<"u"&&p.handle;export{r as default,_ as handle,c as meta};
