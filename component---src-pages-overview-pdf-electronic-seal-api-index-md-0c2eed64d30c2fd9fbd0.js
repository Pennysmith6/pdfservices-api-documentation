"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8286],{79788:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return p}});var i=a(87462),n=a(63366),r=(a(15007),a(64983)),c=a(91515),s=["components"],o={},l={_frontmatter:o},d=c.Z;function p(e){var t=e.components,a=(0,n.Z)(e,s);return(0,r.mdx)(d,(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"overview"},"Overview"),(0,r.mdx)("h2",{id:"what-is-a-pdf-electronic-seal"},"What is a PDF Electronic Seal?"),(0,r.mdx)("p",null,"A PDF Electronic Seal, powered by a digital signature, enables an organization to digitally sign the PDFs. E-signatures are legal, trusted, and enforceable around the world. The validation process performs two actions: "),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"It authenticates the signing organization's identity via its digital certificate. "),(0,r.mdx)("li",{parentName:"ul"},"It verifies a document's integrity. ")),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"29.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/5907cf1011bb1278bf5e49c247cca761/5530d/blueBar.webp 320w","/pdfservices-api-documentation/static/5907cf1011bb1278bf5e49c247cca761/0c8fb/blueBar.webp 640w","/pdfservices-api-documentation/static/5907cf1011bb1278bf5e49c247cca761/94b1e/blueBar.webp 1280w","/pdfservices-api-documentation/static/5907cf1011bb1278bf5e49c247cca761/08259/blueBar.webp 1658w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/5907cf1011bb1278bf5e49c247cca761/dd4a7/blueBar.png 320w","/pdfservices-api-documentation/static/5907cf1011bb1278bf5e49c247cca761/0f09e/blueBar.png 640w","/pdfservices-api-documentation/static/5907cf1011bb1278bf5e49c247cca761/bbbf7/blueBar.png 1280w","/pdfservices-api-documentation/static/5907cf1011bb1278bf5e49c247cca761/62cc8/blueBar.png 1658w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/5907cf1011bb1278bf5e49c247cca761/bbbf7/blueBar.png",alt:"PDF Electronic Seal",title:"PDF Electronic Seal",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("h2",{id:"electronic-signature-vs-electronic-seal"},"Electronic Signature vs Electronic Seal"),(0,r.mdx)("p",null,"An ",(0,r.mdx)("em",{parentName:"p"},"electronic signature")," (or e-signature) is a broad term referring to any legally recognized electronic process that indicates acceptance of an agreement or a record. Typical e-signature solutions use common electronic authentication methods to verify signer identity, such as an email address, a corporate ID, or a phone PIN. If increased security is needed, multi-factor authentication may be used. Both digital signatures and electronic seal are electronic signatures. "),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"A ",(0,r.mdx)("em",{parentName:"p"},"digital signature")," is a specific type of e-signature that use certificate-based digital IDs to authenticate signer identity and demonstrate proof of signing by binding each signature to the document with encryption. Validation occurs through trusted Certifying Authority (CA) or Trust Service Provider (TSP).")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"An ",(0,r.mdx)("em",{parentName:"p"},"electronic seal")," binds an organization rather than an individual to one or more documents. While validation happens the same way as digital signatures, electronic seal facilitate use-cases where 2-parties are not involved and the document first needs certification by a legal entity before distribution to multiple consumers. An electronic seal therefore provides cost-efficient bulk signing at the organizational level."))),(0,r.mdx)("h2",{id:"pdf-electronic-seal-components"},"PDF Electronic Seal Components"),(0,r.mdx)("p",null,"A PDF Electronic Seal workflow involves the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"PDF Document"),": A PDF document as an input file. The maximum size of the PDF cannot exceed 10MB."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Sealing Parameters"),": Parameters  specify the seal's format, visibility and appearance as well as the certificate credentials required to communicate with a Trust Service Provider. For details, see ",(0,r.mdx)("a",{parentName:"li",href:"/pdfservices-api-documentation/overview/pdf-electronic-seal-api/quickstarts/#parameters"},"sealing parameters"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"PDF Electronic Seal API"),": The PDF Electronic Seal API enables sealing PDF documents programmatically with no user interaction. It uses the sealing parameters to authorize the client and apply a seal on the input PDF which is then bound to the specified legal entity."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Seal Image"),": The API can accept an optional seal image as an input file which overrides the default Acrobat trefoil image. The maximum size of the seal image cannot exceed 2MB.")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-pdf-electronic-seal-api-index-md-0c2eed64d30c2fd9fbd0.js.map