import{c as l,d as m}from"/build/_shared/chunk-EGLYY6PQ.js";var s=l(m()),o={template:"blog-post",slug:"/NODE+EXPRESS+MONGODB-\uD68C\uC6D0\uAC00\uC785-FLOW-2",date:"2019-01-23 13:42",title:"[NODE] NODE+EXPRESS+MONGODB \uD68C\uC6D0\uAC00\uC785 FLOW #2",featuredImage:"/assets/images/posts/github.jpg",description:"NODE+EXPRESS+MONGODB \uD68C\uC6D0\uAC00\uC785 FLOW"};function t(p={}){let n=Object.assign({p:"p",code:"code",img:"img",blockquote:"blockquote",hr:"hr",h3:"h3",pre:"pre",span:"span",strong:"strong",ol:"ol",li:"li",a:"a"},p.components),{wrapper:a}=n,e=s.default.createElement(s.default.Fragment,null,s.default.createElement(n.p,null,"\uC774\uC804\uAE00\uC5D0 \uC774\uC5B4\uC11C \uBAA8\uB378\uB3C4 \uB9CC\uB4E4\uC5B4\uBCF4\uACE0 \uB77C\uC6B0\uD305\uB3C4 \uD574\uBCF4\uACE0 \uC798 \uB418\uB098 \uD655\uC778\uD574\uBCF4\uC790. \uD558\uB294\uAE40\uC5D0 \uC774\uBA54\uC77C \uC778\uC99D\uB3C4?"),`
`,s.default.createElement(n.p,null,"\uD68C\uC6D0\uAC00\uC785\uACFC \uB85C\uADF8\uC778 \uB458\uB2E4 post\uBC29\uC2DD\uC774\uACE0 \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uB294 ",s.default.createElement(n.code,null,"/user/register"),", ",s.default.createElement(n.code,null,"/user/login"),"\uC73C\uB85C \uD55C\uB2E4. \uC571\uAD6C\uC870\uB294 \uD3B8\uD55C\uB300\uB85C\uD558\uBA74 \uB418\uC9C0\uB9CC \uC5EC\uAE30\uC120 \uC544\uB798\uC758 \uAD6C\uC870\uB97C \uB530\uB978\uB2E4. \uC5B4\uB514\uC120\uAC00 \uB9CE\uC774 \uBCF4\uB358 \uBC29\uC2DD\uC774\uB2E4. ",s.default.createElement(n.code,null,"src"),"\uD3F4\uB354\uC5D0 ",s.default.createElement(n.code,null,"modules"),"\uD3F4\uB354\uB97C \uB9CC\uB4E4\uACE0 \uADF8 \uC548\uC5D0\uC11C \uB180\uC790"),`
`,s.default.createElement(n.p,null,s.default.createElement(n.img,{src:"/assets/images/posts/190123/structure.png",alt:"\uC571\uAD6C\uC870"})),`
`,s.default.createElement(n.blockquote,null,`
`,s.default.createElement(n.p,null,"api\uD1B5\uC2E0\uC740 \uAC01\uC790 \uD3B8\uD55C\uAC78\uB85C \uD558\uBA74 \uB41C\uB2E4. \uBABD\uACE0\uB514\uBE44 \uAE30\uBCF8 GUI\uC778 compass\uB3C4 \uC124\uCE58\uD558\uBA74 \uC88B\uC74C. \uCF54\uB4DC \uB300\uBD80\uBD84 ",s.default.createElement(n.code,null,"import"),"\uB294 \uC0AD\uC81C\uD568"),`
`),`
`,s.default.createElement(n.hr,null),`
`,s.default.createElement(n.h3,null,"\uBAA8\uB378"),`
`,s.default.createElement(n.pre,null,s.default.createElement(n.code,{className:"hljs language-javascript"},s.default.createElement(n.span,{className:"hljs-keyword"},"const")," ",s.default.createElement(n.span,{className:"hljs-title class_"},"User")," = ",s.default.createElement(n.span,{className:"hljs-keyword"},"new")," ",s.default.createElement(n.span,{className:"hljs-title class_"},"Schema"),`(
  {
    `,s.default.createElement(n.span,{className:"hljs-attr"},"email"),`: {
      `,s.default.createElement(n.span,{className:"hljs-attr"},"type"),": ",s.default.createElement(n.span,{className:"hljs-title class_"},"String"),`,
      `,s.default.createElement(n.span,{className:"hljs-attr"},"required"),": [",s.default.createElement(n.span,{className:"hljs-literal"},"true"),", ",s.default.createElement(n.span,{className:"hljs-string"},"'Email is required!!'"),`],
      `,s.default.createElement(n.span,{className:"hljs-attr"},"trim"),": ",s.default.createElement(n.span,{className:"hljs-literal"},"true"),`,
      `,s.default.createElement(n.span,{className:"hljs-attr"},"unique"),": ",s.default.createElement(n.span,{className:"hljs-literal"},"true"),`,
    },
    `,s.default.createElement(n.span,{className:"hljs-attr"},"password"),`: {
      `,s.default.createElement(n.span,{className:"hljs-attr"},"type"),": ",s.default.createElement(n.span,{className:"hljs-title class_"},"String"),`,
      `,s.default.createElement(n.span,{className:"hljs-attr"},"minlength"),": [",s.default.createElement(n.span,{className:"hljs-number"},"6"),", ",s.default.createElement(n.span,{className:"hljs-string"},"'Password need to be longer'"),`],
    },
    `,s.default.createElement(n.span,{className:"hljs-attr"},"nickName"),`: {
      `,s.default.createElement(n.span,{className:"hljs-attr"},"type"),": ",s.default.createElement(n.span,{className:"hljs-title class_"},"String"),`,
      `,s.default.createElement(n.span,{className:"hljs-attr"},"trim"),": ",s.default.createElement(n.span,{className:"hljs-literal"},"true"),`,
    },
    `,s.default.createElement(n.span,{className:"hljs-attr"},"provider"),`: {
      `,s.default.createElement(n.span,{className:"hljs-attr"},"type"),": ",s.default.createElement(n.span,{className:"hljs-title class_"},"String"),`,
      `,s.default.createElement(n.span,{className:"hljs-attr"},"default"),": ",s.default.createElement(n.span,{className:"hljs-string"},"'local'"),`,
    },
    `,s.default.createElement(n.span,{className:"hljs-attr"},"admin"),`: {
      `,s.default.createElement(n.span,{className:"hljs-attr"},"type"),": ",s.default.createElement(n.span,{className:"hljs-title class_"},"Boolean"),`,
      `,s.default.createElement(n.span,{className:"hljs-attr"},"default"),": ",s.default.createElement(n.span,{className:"hljs-literal"},"false"),`,
      `,s.default.createElement(n.span,{className:"hljs-attr"},"required"),": ",s.default.createElement(n.span,{className:"hljs-literal"},"false"),`,
    },
    `,s.default.createElement(n.span,{className:"hljs-attr"},"isVerified"),`: {
      `,s.default.createElement(n.span,{className:"hljs-attr"},"type"),": ",s.default.createElement(n.span,{className:"hljs-title class_"},"Boolean"),`,
      `,s.default.createElement(n.span,{className:"hljs-attr"},"default"),": ",s.default.createElement(n.span,{className:"hljs-literal"},"false"),`,
    },
    `,s.default.createElement(n.span,{className:"hljs-attr"},"favorites"),`: {
      `,s.default.createElement(n.span,{className:"hljs-attr"},"posts"),`: [
        {
          `,s.default.createElement(n.span,{className:"hljs-attr"},"type"),": ",s.default.createElement(n.span,{className:"hljs-title class_"},"Schema"),".",s.default.createElement(n.span,{className:"hljs-property"},"Types"),".",s.default.createElement(n.span,{className:"hljs-property"},"ObjectId"),`,
          `,s.default.createElement(n.span,{className:"hljs-attr"},"ref"),": ",s.default.createElement(n.span,{className:"hljs-string"},"'Post'"),`,
        },
      ],
    },
  },
  {
    `,s.default.createElement(n.span,{className:"hljs-attr"},"timestamps"),": ",s.default.createElement(n.span,{className:"hljs-literal"},"true"),`,
  }
);

`,s.default.createElement(n.span,{className:"hljs-title class_"},"User"),".",s.default.createElement(n.span,{className:"hljs-title function_"},"pre"),"(",s.default.createElement(n.span,{className:"hljs-string"},"'save'"),", ",s.default.createElement(n.span,{className:"hljs-keyword"},"function")," (",s.default.createElement(n.span,{className:"hljs-params"},"next"),`) {
  `,s.default.createElement(n.span,{className:"hljs-keyword"},"if")," (",s.default.createElement(n.span,{className:"hljs-variable language_"},"this"),".",s.default.createElement(n.span,{className:"hljs-title function_"},"isModified"),"(",s.default.createElement(n.span,{className:"hljs-string"},"'password'"),`)) {
    `,s.default.createElement(n.span,{className:"hljs-variable language_"},"this"),".",s.default.createElement(n.span,{className:"hljs-property"},"password")," = ",s.default.createElement(n.span,{className:"hljs-title function_"},"hashSync"),"(",s.default.createElement(n.span,{className:"hljs-variable language_"},"this"),".",s.default.createElement(n.span,{className:"hljs-property"},"password"),`);
  }

  `,s.default.createElement(n.span,{className:"hljs-keyword"},"return")," ",s.default.createElement(n.span,{className:"hljs-title function_"},"next"),`();
});

`,s.default.createElement(n.span,{className:"hljs-title class_"},"User"),".",s.default.createElement(n.span,{className:"hljs-property"},"methods"),` = {
  `,s.default.createElement(n.span,{className:"hljs-title function_"},"_compareUser"),"(",s.default.createElement(n.span,{className:"hljs-params"},"password"),`) {
    `,s.default.createElement(n.span,{className:"hljs-comment"},`/**
     * `,s.default.createElement(n.span,{className:"hljs-doctag"},"FIXME:"),`
     * github\uC73C\uB85C \uAC00\uC785\uD55C\uC0AC\uB78C\uC740 \uD328\uC2A4\uC6CC\uB4DC\uAC00 \uC5C6\uAE30\uB54C\uBB38\uC5D0 \uBE44\uAD50\uD560\uC218 \uC5C6\uC74C
     */`),`
    `,s.default.createElement(n.span,{className:"hljs-keyword"},"if")," (",s.default.createElement(n.span,{className:"hljs-variable language_"},"this"),".",s.default.createElement(n.span,{className:"hljs-property"},"password")," === ",s.default.createElement(n.span,{className:"hljs-literal"},"undefined"),`) {
      `,s.default.createElement(n.span,{className:"hljs-keyword"},"return"),`;
    }
    `,s.default.createElement(n.span,{className:"hljs-keyword"},"return")," ",s.default.createElement(n.span,{className:"hljs-title function_"},"compareSync"),"(password, ",s.default.createElement(n.span,{className:"hljs-variable language_"},"this"),".",s.default.createElement(n.span,{className:"hljs-property"},"password"),`);
  },

  `,s.default.createElement(n.span,{className:"hljs-title function_"},"_createToken"),"(",s.default.createElement(n.span,{className:"hljs-params"}),`) {
    `,s.default.createElement(n.span,{className:"hljs-keyword"},"return")," jwt.",s.default.createElement(n.span,{className:"hljs-title function_"},"sign"),`(
      {
        `,s.default.createElement(n.span,{className:"hljs-attr"},"_id"),": ",s.default.createElement(n.span,{className:"hljs-variable language_"},"this"),".",s.default.createElement(n.span,{className:"hljs-property"},"_id"),`,
      },
      constants.`,s.default.createElement(n.span,{className:"hljs-property"},"JWT_SECRET"),`,
      {
        `,s.default.createElement(n.span,{className:"hljs-attr"},"expiresIn"),": ",s.default.createElement(n.span,{className:"hljs-string"},"'30s'"),`,
        `,s.default.createElement(n.span,{className:"hljs-attr"},"issuer"),": ",s.default.createElement(n.span,{className:"hljs-string"},"'angelking47'"),`,
      }
    );
  },

  `,s.default.createElement(n.span,{className:"hljs-title function_"},"toAuthJSON"),"(",s.default.createElement(n.span,{className:"hljs-params"}),`) {
    `,s.default.createElement(n.span,{className:"hljs-keyword"},"return"),` {
      `,s.default.createElement(n.span,{className:"hljs-attr"},"_id"),": ",s.default.createElement(n.span,{className:"hljs-variable language_"},"this"),".",s.default.createElement(n.span,{className:"hljs-property"},"_id"),`,
      `,s.default.createElement(n.span,{className:"hljs-attr"},"email"),": ",s.default.createElement(n.span,{className:"hljs-variable language_"},"this"),".",s.default.createElement(n.span,{className:"hljs-property"},"email"),`,
      `,s.default.createElement(n.span,{className:"hljs-attr"},"token"),": ",s.default.createElement(n.span,{className:"hljs-string"},"`JWT ",s.default.createElement(n.span,{className:"hljs-subst"},"${",s.default.createElement(n.span,{className:"hljs-variable language_"},"this"),"._createToken()}"),"`"),`,
    };
  },
};

`,s.default.createElement(n.span,{className:"hljs-keyword"},"export")," ",s.default.createElement(n.span,{className:"hljs-keyword"},"default")," mongoose.",s.default.createElement(n.span,{className:"hljs-title function_"},"model"),"(",s.default.createElement(n.span,{className:"hljs-string"},"'User'"),", ",s.default.createElement(n.span,{className:"hljs-title class_"},"User"),`);
`)),`
`,s.default.createElement(n.p,null,s.default.createElement(n.code,null,"jwt"),", ",s.default.createElement(n.code,null,"bcrypt-nodejs"),"\uBAA8\uB4C8\uB3C4 \uC5B4\uCC28\uD53C \uB098\uC911\uC5D0 \uB2E4 \uC4F4\uB2E4. \uD53C\uAC00\uB418\uACE0 \uC0B4\uC774\uB418\uB2C8\uAE4C \uC124\uCE58\uD558\uC790."),`
`,s.default.createElement(n.p,null,"\uC801\uC808\uD788 \uC720\uC800\uBAA8\uB378\uC744 \uC815\uC758\uD558\uACE0 \uD544\uC694\uD55C \uD568\uC218\uB4E4\uB3C4 \uB9CC\uB4E4\uC5B4\uC900\uB2E4. \uB85C\uADF8\uC778\uC744\uD558\uBA74 response\uB85C ",s.default.createElement(n.code,null,"toAuthJSON()"),"\uC744 \uD638\uCD9C\uD560\uAEBC\uB2E4. ",s.default.createElement(n.code,null,"compareUser"),"\uB294 \uBBF8\uB4E4\uC6E8\uC5B4\uB85C ",s.default.createElement(n.code,null,"passport-local"),"\uB97C \uC0AC\uC6A9\uD574\uC11C \uAE30\uBCF8\uB85C\uADF8\uC778\uD560\uB54C \uB85C\uADF8\uC778\uC2DC \uBC1B\uC544\uC628 \uBE44\uBC00\uBC88\uD638\uC640 \uC774\uBA54\uC77C\uB85C \uCC3E\uC740 \uC720\uC800\uC758 \uBE44\uBC00\uBC88\uD638\uB97C \uB9E4\uCE6D\uD574\uC11C \uB3D9\uC77C\uD558\uBA74 ",s.default.createElement(n.code,null,"\uC720\uC800"),"\uB97C, \uB2E4\uB974\uBA74 ",s.default.createElement(n.code,null,"false"),"\uB97C \uB9AC\uD134\uD55C\uB2E4. ",s.default.createElement(n.code,null,"createToken"),"\uC740 \uD638\uCD9C\uD560\uB54C\uB9C8\uB098 jwon web token\uB9CC\uB4E4\uC5B4\uC90C. \uD14C\uC2A4\uD2B8\uB97C \uC704\uD574 \uB9CC\uB8CC\uB294 30\uCD08\uB85C\uD568."),`
`,s.default.createElement(n.blockquote,null,`
`,s.default.createElement(n.p,null,s.default.createElement(n.code,null,"User.pre('save', callback)"),"\uC740 \uBAA8\uB378 ",s.default.createElement(n.strong,null,"\uC800\uC7A5\uC804"),"\uC5D0 \uBC1C\uC0DD\uD558\uBA70 \uC774\uBA54\uC77C\uB85C \uCC3E\uC740 \uC720\uC800\uB294 ",s.default.createElement(n.code,null,"User.findOne({ email })"),"\uC774\uB2E4. provider\uB294 \uC678\uBD80\uC778\uC99D\uB85C\uADF8\uC778\uC744 \uAD6C\uD604\uD560\uB54C \uD544\uC694"),`
`),`
`,s.default.createElement(n.hr,null),`
`,s.default.createElement(n.h3,null,"\uCEE8\uD2B8\uB864\uB7EC"),`
`,s.default.createElement(n.pre,null,s.default.createElement(n.code,{className:"hljs language-javascript"},s.default.createElement(n.span,{className:"hljs-keyword"},"export")," ",s.default.createElement(n.span,{className:"hljs-keyword"},"const")," ",s.default.createElement(n.span,{className:"hljs-title function_"},"register")," = ",s.default.createElement(n.span,{className:"hljs-keyword"},"async")," (",s.default.createElement(n.span,{className:"hljs-params"},"req, res"),`) => {
  `,s.default.createElement(n.span,{className:"hljs-keyword"},"try"),` {
    `,s.default.createElement(n.span,{className:"hljs-keyword"},"const")," { email } = req.",s.default.createElement(n.span,{className:"hljs-property"},"body"),`;
    `,s.default.createElement(n.span,{className:"hljs-keyword"},"const")," duplicateEmail = ",s.default.createElement(n.span,{className:"hljs-keyword"},"await")," ",s.default.createElement(n.span,{className:"hljs-title class_"},"User"),".",s.default.createElement(n.span,{className:"hljs-title function_"},"findOne"),`({ email });

    `,s.default.createElement(n.span,{className:"hljs-keyword"},"if"),` (duplicateEmail) {
      `,s.default.createElement(n.span,{className:"hljs-keyword"},"throw")," ",s.default.createElement(n.span,{className:"hljs-keyword"},"new")," ",s.default.createElement(n.span,{className:"hljs-title class_"},"Error"),"(",s.default.createElement(n.span,{className:"hljs-string"},"'user is already exist'"),`);
    } `,s.default.createElement(n.span,{className:"hljs-keyword"},"else"),` {
      `,s.default.createElement(n.span,{className:"hljs-keyword"},"const")," user = ",s.default.createElement(n.span,{className:"hljs-keyword"},"await")," ",s.default.createElement(n.span,{className:"hljs-title class_"},"User"),".",s.default.createElement(n.span,{className:"hljs-title function_"},"create"),"(req.",s.default.createElement(n.span,{className:"hljs-property"},"body"),`);
      `,s.default.createElement(n.span,{className:"hljs-keyword"},"const")," token = ",s.default.createElement(n.span,{className:"hljs-keyword"},"await")," ",s.default.createElement(n.span,{className:"hljs-title class_"},"Token"),".",s.default.createElement(n.span,{className:"hljs-title function_"},"create"),`({
        `,s.default.createElement(n.span,{className:"hljs-attr"},"_userId"),": user.",s.default.createElement(n.span,{className:"hljs-property"},"_id"),`,
        `,s.default.createElement(n.span,{className:"hljs-attr"},"token"),": crypto.",s.default.createElement(n.span,{className:"hljs-title function_"},"randomBytes"),"(",s.default.createElement(n.span,{className:"hljs-number"},"16"),").",s.default.createElement(n.span,{className:"hljs-title function_"},"toString"),"(",s.default.createElement(n.span,{className:"hljs-string"},"'hex'"),`),
      });

      `,s.default.createElement(n.span,{className:"hljs-keyword"},"const")," transporter = nodemailer.",s.default.createElement(n.span,{className:"hljs-title function_"},"createTransport"),`({
        `,s.default.createElement(n.span,{className:"hljs-attr"},"host"),": ",s.default.createElement(n.span,{className:"hljs-string"},"'smtp.ethereal.email'"),`,
        `,s.default.createElement(n.span,{className:"hljs-attr"},"port"),": ",s.default.createElement(n.span,{className:"hljs-number"},"587"),`,
        `,s.default.createElement(n.span,{className:"hljs-attr"},"auth"),`: {
          `,s.default.createElement(n.span,{className:"hljs-attr"},"user"),": ",s.default.createElement(n.span,{className:"hljs-string"},"'wvu44xkoolzo6loj@ethereal.email'"),`,
          `,s.default.createElement(n.span,{className:"hljs-attr"},"pass"),": ",s.default.createElement(n.span,{className:"hljs-string"},"'HY4fyMB2SGG8WyKrQc'"),`,
        },
      });

      `,s.default.createElement(n.span,{className:"hljs-keyword"},"const"),` mailOptions = {
        `,s.default.createElement(n.span,{className:"hljs-attr"},"from"),": ",s.default.createElement(n.span,{className:"hljs-string"},"'no-reply@ethereal.email'"),`,
        `,s.default.createElement(n.span,{className:"hljs-attr"},"to"),": ",s.default.createElement(n.span,{className:"hljs-string"},"'urdlove@gmail.com'"),`,
        `,s.default.createElement(n.span,{className:"hljs-attr"},"subject"),": ",s.default.createElement(n.span,{className:"hljs-string"},"'\uD589\uC6B4\uC758\uD3B8\uC9C0...'"),`,
        `,s.default.createElement(n.span,{className:"hljs-attr"},"text"),": ",s.default.createElement(n.span,{className:"hljs-string"},"`http://",s.default.createElement(n.span,{className:"hljs-subst"},"${req.headers.host}"),"/users/confirm/",s.default.createElement(n.span,{className:"hljs-subst"},"${token.token}"),"\\n\\nEmail: ",s.default.createElement(n.span,{className:"hljs-subst"},"${user.email}"),"`"),`,
      };

      transporter.`,s.default.createElement(n.span,{className:"hljs-title function_"},"sendMail"),"(mailOptions, ",s.default.createElement(n.span,{className:"hljs-function"},"(",s.default.createElement(n.span,{className:"hljs-params"},"err, info"),") =>"),` {
        `,s.default.createElement(n.span,{className:"hljs-keyword"},"if"),` (err) {
          `,s.default.createElement(n.span,{className:"hljs-keyword"},"return")," res.",s.default.createElement(n.span,{className:"hljs-title function_"},"status"),"(",s.default.createElement(n.span,{className:"hljs-number"},"500"),").",s.default.createElement(n.span,{className:"hljs-title function_"},"send"),"({ ",s.default.createElement(n.span,{className:"hljs-attr"},"msg"),": err.",s.default.createElement(n.span,{className:"hljs-property"},"message"),` });
        }

        `,s.default.createElement(n.span,{className:"hljs-keyword"},"return")," res.",s.default.createElement(n.span,{className:"hljs-title function_"},"status"),"(",s.default.createElement(n.span,{className:"hljs-number"},"200"),").",s.default.createElement(n.span,{className:"hljs-title function_"},"json"),"(user.",s.default.createElement(n.span,{className:"hljs-title function_"},"toAuthJSON"),`());
      });
    }
  } `,s.default.createElement(n.span,{className:"hljs-keyword"},"catch"),` (error) {
    `,s.default.createElement(n.span,{className:"hljs-keyword"},"return")," res.",s.default.createElement(n.span,{className:"hljs-title function_"},"status"),"(",s.default.createElement(n.span,{className:"hljs-number"},"400"),").",s.default.createElement(n.span,{className:"hljs-title function_"},"json"),"(error.",s.default.createElement(n.span,{className:"hljs-property"},"message"),`);
  }
};
`)),`
`,s.default.createElement(n.p,null,"\uCF54\uB4DC\uC5D0 \uD68C\uC6D0\uAC00\uC785\uC2DC \uC778\uC99D\uBA54\uC77C\uAE4C\uC9C0 \uBCF4\uB0B4\uB294 \uC808\uCC28\uAE4C\uC9C0 \uC788\uB294\uB370 \uD574\uB2F9\uD558\uB294\uBD80\uBD84\uC740 \uBB34\uC2DC\uD558\uACE0 \uC9C4\uD589\uD574\uB3C4 \uD68C\uC6D0\uAC00\uC785\uC740 \uB41C\uB2E4. TMI\uB85C \uD1A0\uD070\uB9CC\uB4E4\uB54C \uC0AC\uC6A9\uD558\uB294 ",s.default.createElement(n.code,null,"crypto"),"\uBAA8\uB4C8\uC740 \uD604\uC7AC \uB178\uB4DC\uBC84\uC804\uC5D0 \uB0B4\uC7A5\uB418\uC5B4\uC788\uB2E4."),`
`,s.default.createElement(n.ol,null,`
`,s.default.createElement(n.li,null,"\uD68C\uC6D0\uAC00\uC785\uC694\uCCAD\uD558\uBA74 \uD1A0\uD070\uBAA8\uB378\uC744 \uBC14\uD0D5\uC73C\uB85C \uD1A0\uD070\uC744 \uB9CC\uB4E4\uACE0(\uB9CC\uB8CC\uC2DC\uAC04\uB4A4\uC5D0 \uB370\uC774\uD130\uAC00 \uC0AC\uB77C\uC9D0)"),`
`,s.default.createElement(n.li,null,"\uD574\uB2F9\uD1A0\uD070\uC744 \uBA54\uC77C\uB85C \uC3F4\uC900\uB2E4."),`
`,s.default.createElement(n.li,null,"\uBC1B\uC740\uBA54\uC77C\uB85C ",s.default.createElement(n.code,null,"/users/confirm/:token"),"\uC5D0 \uC811\uADFC"),`
`,s.default.createElement(n.li,null,"params\uC758 token\uACFC DB\uC758 \uD1A0\uD070\uC744 \uBE44\uAD50\uD574\uC11C \uB9DE\uC73C\uBA74 \uC720\uC800\uC758 isVerified\uB97C true\uB85C \uBC14\uAFD4\uC90C(\uD1A0\uD070\uBAA8\uB378\uC5D0 user._id\uAC00 \uC788\uC74C)"),`
`),`
`,s.default.createElement(n.hr,null),`
`,s.default.createElement(n.h3,null,"\uB77C\uC6B0\uD305"),`
`,s.default.createElement(n.pre,null,s.default.createElement(n.code,{className:"hljs language-javascript"},s.default.createElement(n.span,{className:"hljs-keyword"},"import")," { ",s.default.createElement(n.span,{className:"hljs-title class_"},"Router")," } ",s.default.createElement(n.span,{className:"hljs-keyword"},"from")," ",s.default.createElement(n.span,{className:"hljs-string"},"'express'"),`;

`,s.default.createElement(n.span,{className:"hljs-keyword"},"import")," { authLocal } ",s.default.createElement(n.span,{className:"hljs-keyword"},"from")," ",s.default.createElement(n.span,{className:"hljs-string"},"'../../middlewares/auth'"),`;
`,s.default.createElement(n.span,{className:"hljs-keyword"},"import")," * ",s.default.createElement(n.span,{className:"hljs-keyword"},"as")," userController ",s.default.createElement(n.span,{className:"hljs-keyword"},"from")," ",s.default.createElement(n.span,{className:"hljs-string"},"'./user.controllers'"),`;

`,s.default.createElement(n.span,{className:"hljs-keyword"},"const")," routes = ",s.default.createElement(n.span,{className:"hljs-keyword"},"new")," ",s.default.createElement(n.span,{className:"hljs-title class_"},"Router"),`();

routes.`,s.default.createElement(n.span,{className:"hljs-title function_"},"post"),"(",s.default.createElement(n.span,{className:"hljs-string"},"'/register'"),", userController.",s.default.createElement(n.span,{className:"hljs-property"},"register"),`);

routes.`,s.default.createElement(n.span,{className:"hljs-title function_"},"post"),"(",s.default.createElement(n.span,{className:"hljs-string"},"'/login'"),", authLocal, userController.",s.default.createElement(n.span,{className:"hljs-property"},"login"),`);

`,s.default.createElement(n.span,{className:"hljs-keyword"},"export")," ",s.default.createElement(n.span,{className:"hljs-keyword"},"default"),` routes;
`)),`
`,s.default.createElement(n.p,null,"\uAC00\uC785\uD558\uB294 \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uB9CC \uBCF4\uBA74 express\uC758 Router\uB97C \uAC00\uC838\uC640\uC11C post\uBC29\uC2DD\uC73C\uB85C ",s.default.createElement(n.code,null,"/register"),"\uC5D0 \uC811\uADFC\uD558\uBA74 \uD574\uB2F9\uCEE8\uD2B8\uB864\uB7EC\uB97C \uC2E4\uD589\uD558\uAC8C\uB41C\uB2E4. \uD30C\uB77C\uBA54\uD130\uB294 \uBBF8\uB4E4\uC6E8\uC5B4\uB97C \uD3EC\uD568\uD574\uC11C \uC5EC\uB7EC\uAC1C\uC77C\uC218\uAC00 \uC788\uB2E4."),`
`,s.default.createElement(n.p,null,"\uC774\uC81C \uC774\uC804\uC5D0 \uB9CC\uB4E4\uC5B4\uB193\uC740 \uC571\uC2E4\uD589\uD30C\uC77C\uC778 ",s.default.createElement(n.code,null,"index.js"),"\uC5D0 ",s.default.createElement(n.code,null,"appRouter(app)"),"\uB97C \uC791\uC131\uD558\uACE0 \uB77C\uC6B0\uD305 \uBBF8\uB4E4\uC6E8\uC5B4\uB97C \uB9CC\uB4E4\uBA74 \uB41C\uB2E4."),`
`,s.default.createElement(n.pre,null,s.default.createElement(n.code,{className:"hljs language-javascript"},s.default.createElement(n.span,{className:"hljs-keyword"},"export")," ",s.default.createElement(n.span,{className:"hljs-keyword"},"default"),` (app) => {
  app.`,s.default.createElement(n.span,{className:"hljs-title function_"},"use"),"(",s.default.createElement(n.span,{className:"hljs-string"},"'/crawling'"),`, crawlingRoutes);
  app.`,s.default.createElement(n.span,{className:"hljs-title function_"},"use"),"(",s.default.createElement(n.span,{className:"hljs-string"},"'/redis'"),`, redisRoutes);
  app.`,s.default.createElement(n.span,{className:"hljs-title function_"},"use"),"(",s.default.createElement(n.span,{className:"hljs-string"},"'/users'"),`, userRoutes);
  app.`,s.default.createElement(n.span,{className:"hljs-title function_"},"use"),"(",s.default.createElement(n.span,{className:"hljs-string"},"'/auth'"),`, githubRoutes);
  app.`,s.default.createElement(n.span,{className:"hljs-title function_"},"use"),"(",s.default.createElement(n.span,{className:"hljs-string"},"'/graphql'"),`, graphqlMiddleware);
};
`)),`
`,s.default.createElement(n.p,null,"\uC5EC\uB7EC\uAC1C\uAC00 \uC788\uB294\uB370 ",s.default.createElement(n.code,null,"/users"),"\uB85C \uC811\uADFC\uD558\uB294\uAC74 ",s.default.createElement(n.code,null,"userRoutes"),"\uB85C \uBCF4\uB0B4\uACE0 \uACB0\uAD6D\uC5D4 ",s.default.createElement(n.code,null,"/users/register"),"\uD615\uC2DD\uC774 \uB41C\uB2E4."),`
`,s.default.createElement(n.hr,null),`
`,s.default.createElement(n.h3,null,"\uC2E4\uD589\uACFC \uACB0\uACFC"),`
`,s.default.createElement(n.p,null,"\uC801\uB2F9\uD788 \uB9CC\uB4E4\uC5C8\uC73C\uB2C8 \uD3EC\uC2A4\uD2B8\uB9E8\uC73C\uB85C \uAC00\uC785\uC694\uCCAD\uC744 \uD558\uACE0 response\uB97C \uD655\uC778\uD558\uACE0, mongoDB compass\uB85C db\uC5D0 \uC798 \uC800\uC7A5\uC774 \uB418\uC5C8\uB294\uC9C0 \uD655\uC778\uD558\uC790."),`
`,s.default.createElement(n.p,null,s.default.createElement(n.img,{src:"/assets/images/posts/190123/result1.png",alt:"result1"})),`
`,s.default.createElement(n.p,null,s.default.createElement(n.img,{src:"/assets/images/posts/190123/result2.png",alt:"result2"})),`
`,s.default.createElement(n.p,null,"JWT\uB3C4 \uC798 \uB2F4\uC544\uC11C \uBCF4\uB0B4\uACE0 \uBE44\uBC00\uBC88\uD638\uB3C4 hash\uD574\uC11C \uC800\uC7A5\uC774 \uC798 \uB410\uB2E4."),`
`,s.default.createElement(n.hr,null),`
`,s.default.createElement(n.h3,null,"\uB9C8\uBB34\uB9AC"),`
`,s.default.createElement(n.p,null,"\uB178\uB4DC\uC2E4\uD589\uD658\uACBD\uC740 8.12.0\uC774\uACE0 \uB2E4\uB978\uBC84\uC804\uB4E4 \uC124\uCE58\uD558\uB824\uBA74 ",s.default.createElement(n.code,null,"nvm"),"\uC124\uCE58\uD574\uC11C \uD558\uBA74\uB41C\uB2E4. \uC774\uBA54\uC77C \uC778\uC99D\uC740 ",s.default.createElement(n.a,{href:"https://nodemailer.com/about/"},"Nodemailer"),"\uAC00 getting started\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 ",s.default.createElement(n.a,{href:"https://ethereal.email/"},"ethereal"),"\uC73C\uB85C \uD568"),`
`,s.default.createElement(n.p,null,"\uD68C\uC6D0\uAC00\uC785\uC744 \uD588\uC73C\uB2C8 \uB2E4\uC74C\uC740 \uB85C\uADF8\uC778\uC744 \uD574\uBCF4\uC790..."));return a?s.default.createElement(a,{...p},e):e}var r=t;var h=typeof o<"u"&&o.headers,c=typeof o<"u"&&o.meta,_=typeof o<"u"&&o.handle;export{r as default,_ as handle,c as meta};
