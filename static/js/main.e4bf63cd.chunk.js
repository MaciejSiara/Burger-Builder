(this["webpackJsonpburger-creator"]=this["webpackJsonpburger-creator"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredients_BreadBottom__1DT1u",BreadTop:"BurgerIngredients_BreadTop__eOTWl",Seeds1:"BurgerIngredients_Seeds1__3yLlf",Seeds2:"BurgerIngredients_Seeds2__r5YBB",Meat:"BurgerIngredients_Meat__1Xp_Y",Cheese:"BurgerIngredients_Cheese__1iGyO",Salad:"BurgerIngredients_Salad__rGd13",Bacon:"BurgerIngredients_Bacon__DQUN5"}},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__19PSs",Open:"SideDrawer_Open__39m1O",Close:"SideDrawer_Close__3Fe3Z",Logo:"SideDrawer_Logo__2s-dM"}},,function(e,t,n){e.exports={BuildController:"BuildController_BuildController__3p_-8",Label:"BuildController_Label__5q6Q4",Less:"BuildController_Less__3y70p",More:"BuildController_More__384m9"}},function(e,t,n){e.exports={Input:"Input_Input__3Ae6n",Label:"Input_Label__3OjVu",InputElement:"Input_InputElement__33HE8",Invalid:"Input_Invalid__1lS-0"}},,,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__2j63Q",Logo:"Toolbar_Logo__3vuwJ",DesktopOnly:"Toolbar_DesktopOnly__1WHlr"}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__zK5Xj",active:"NavigationItem_active__oSIOr"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__wgeGn",OrderButton:"BuildControls_OrderButton__Kdus2",enable:"BuildControls_enable__3eE8d"}},function(e,t,n){e.exports={Button:"Button_Button__2qtSx",Success:"Button_Success__TWZwq",Danger:"Button_Danger__D9msE"}},function(e,t,n){e.exports={Order:"Order_Order__vCzU_",Ingredient:"Order_Ingredient__1TgvX"}},,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__1UexQ"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__vEhzz"}},function(e,t,n){e.exports={Menu:"DrawerToggle_Menu__ZsIKn"}},function(e,t,n){e.exports={Content:"Layout_Content__2hscb"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__gTDNW"}},function(e,t,n){e.exports={Burger:"Burger_Burger__2WRIx"}},function(e,t,n){e.exports={Modal:"Modal_Modal__2FyTn"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__3z2OE",load6:"Spinner_load6__1PRYt",round:"Spinner_round__2p9Yf"}},function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__RLre-"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__2Ykf3",Input:"ContactData_Input__GJIUz"}},function(e,t,n){e.exports={Auth:"Auth_Auth__212z-",Input:"Auth_Input__3h-O-",ContactData:"Auth_ContactData__2XPRm"}},,function(e,t,n){e.exports=n(88)},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(23),i=n.n(o),c=n(14),l=n(7),u=n(17),s=n(46),d=n(2),p=n(3),m=n(5),h=n(4),g=n(6),f=n(47),v=n.n(f),E=n(48),_=n.n(E),b=function(e){return a.a.createElement("div",{className:_.a.Logo,style:{height:e.height}},a.a.createElement("img",{src:v.a,alt:""}))},y=n(29),C=n.n(y),I=function(e){return a.a.createElement("li",{className:C.a.NavigationItem},a.a.createElement(c.b,{to:e.link,exact:!0,activeClassName:C.a.active,onClick:e.clicked},e.children))},S=n(49),k=n.n(S),O=function(e){return a.a.createElement("ul",{className:k.a.NavigationItems},a.a.createElement(I,{link:"/",clicked:e.clicked},"Burger Builder"),e.isAuthenticated?a.a.createElement(I,{link:"/orders",clicked:e.clicked},"Orders"):null,e.isAuthenticated?a.a.createElement(I,{link:"/logout",clicked:e.clicked},"Logout"):a.a.createElement(I,{link:"/auth",clicked:e.clicked},"Authentication"))},T=n(50),N=n.n(T);function A(e){return a.a.createElement("div",{className:N.a.Menu,onClick:e.click},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))}var j=n(26),D=n.n(j),R=function(e){return console.log(e.isAuth),a.a.createElement("header",{className:D.a.Toolbar},a.a.createElement(A,{click:e.open}),a.a.createElement("div",{className:D.a.Logo},a.a.createElement(b,null)),a.a.createElement("nav",{className:D.a.DesktopOnly},a.a.createElement(O,{isAuthenticated:e.isAuth})))},B=n(51),w=n.n(B),H=n(52),L=n.n(H),P=function(e){return e.show?a.a.createElement("div",{className:L.a.Backdrop,onClick:e.clicked}):null},U=n(19),x=n.n(U);function F(e){var t=[x.a.SideDrawer,x.a.Close];return e.open&&(t=[x.a.SideDrawer,x.a.Open]),a.a.createElement(a.a.Fragment,null,a.a.createElement(P,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" ")},a.a.createElement("div",{className:x.a.Logo},a.a.createElement(b,null)),a.a.createElement("nav",null,a.a.createElement(O,{isAuthenticated:e.isAuth,clicked:e.closed}))))}var M=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.sideDrawerClosedHandle=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(R,{open:this.sideDrawerClosedHandle,isAuth:this.props.isAuthenticated}),a.a.createElement(F,{closed:this.sideDrawerClosedHandle,open:this.state.showSideDrawer,isAuth:this.props.isAuthenticated}),a.a.createElement("main",{className:w.a.Content},this.props.children))}}]),n}(r.Component),G=Object(l.b)((function(e){return{isAuthenticated:null!==e.auth.idToken}}),null)(M),V=n(8),q=n(59),z=n(53),W=n.n(z),Y=n(15),J=n.n(Y),X=function(e){var t=null;switch(e.type){case"bread-bottom":t=a.a.createElement("div",{className:J.a.BreadBottom});break;case"bread-top":t=a.a.createElement("div",{className:J.a.BreadTop},a.a.createElement("div",{className:J.a.Seeds1}),a.a.createElement("div",{className:J.a.Seeds2}));break;case"meat":t=a.a.createElement("div",{className:J.a.Meat});break;case"cheese":t=a.a.createElement("div",{className:J.a.Cheese});break;case"salad":t=a.a.createElement("div",{className:J.a.Salad});break;case"bacon":t=a.a.createElement("div",{className:J.a.Bacon});break;default:t=null}return t},Z=Object(g.g)((function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(q.a)(Array(e.ingredients[t])).map((function(e,n){return a.a.createElement(X,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=a.a.createElement("p",null,"Please start adding ingredients")),a.a.createElement("div",{className:W.a.Burger},a.a.createElement(X,{type:"bread-top"}),t,a.a.createElement(X,{type:"bread-bottom"}))})),Q=n(32),K=n.n(Q),$=n(21),ee=n.n($),te=function(e){return a.a.createElement("div",{className:ee.a.BuildController},a.a.createElement("div",{className:ee.a.Label},e.label),a.a.createElement("button",{className:ee.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:ee.a.More,onClick:e.added},"More"))},ne=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],re=function(e){return a.a.createElement("div",{className:K.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))),ne.map((function(t){return a.a.createElement(te,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type],ingredients:e.ingredients})})),a.a.createElement("button",{className:K.a.OrderButton,disabled:!e.purchasable,onClick:e.purchasing},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},ae=n(54),oe=n.n(ae),ie=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(P,{show:this.props.show,clicked:this.props.modalClosed}),a.a.createElement("div",{className:oe.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),n}(r.Component),ce=n(33),le=n.n(ce),ue=function(e){return a.a.createElement("button",{className:[le.a.Button,le.a[e.btnType]].join(" "),onClick:e.clicked,disabled:e.disabled},e.children)},se=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentWillUpdate",value:function(){console.log("[OrderSummary will update]")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),":",e.props.ingredients[t])}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Yuor Order"),a.a.createElement("p",null,"Burger with following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),a.a.createElement("p",null,"Continue to checkout?"),a.a.createElement(ue,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),a.a.createElement(ue,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),n}(r.Component),de=n(55),pe=n.n(de);function me(){return a.a.createElement("div",{className:pe.a.Loader},"Loading...")}var he=function(e,t){return function(n){Object(m.a)(o,n);var r=Object(h.a)(o);function o(){var e;Object(d.a)(this,o);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=r.call.apply(r,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(p.a)(o,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(ie,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),a.a.createElement(e,this.props))}}]),o}(r.Component)},ge=n(25),fe=n.n(ge),ve=fe.a.create({baseURL:"https://my-burger-react-58764.firebaseio.com/"}),Ee=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,userId:t}},_e=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:"AUTH_SIGNOUT"}},be=function(e){return function(t){setTimeout((function(){t(_e())}),1e3*e)}},ye=function(e){return{type:"SET_AUTH_REDIRECT_PATH",path:e}},Ce=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={purchasing:!1},e.purchaseHandler=function(){e.props.isAuthenticated?e.setState({purchasing:!0}):(e.props.onSetAuthRedirectPath("/checkout"),e.props.history.push("/auth"))},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.onInitPurchased(),e.props.history.push("/checkout")},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=Object(V.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?"Cannot load ingredients":a.a.createElement(me,null);return this.props.ings&&(r=a.a.createElement(a.a.Fragment,null,a.a.createElement(Z,{ingredients:this.props.ings}),a.a.createElement(re,{ingredientAdded:this.props.onAddIngredient,ingredientRemoved:this.props.onRemoveIngredient,disabled:e,price:this.props.price,purchasable:this.updatePurchaseState(this.props.ings),isAuth:this.props.isAuthenticated,purchasing:this.purchaseHandler})),n=a.a.createElement(se,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),a.a.createElement(a.a.Fragment,null,a.a.createElement(ie,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),n}(r.Component),Ie=Object(l.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.idToken}}),(function(e){return{onAddIngredient:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},onRemoveIngredient:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})},onInitIngredients:function(){e((function(e){ve.get("https://my-burger-react-58764.firebaseio.com/ingredients.json").then((function(t){e({type:"SET_INGREDIENTS",ingredients:t.data})})).catch((function(t){e({type:"FETCH_INGREDIENTS_FAILED"})}))}))},onInitPurchased:function(){e({type:"PURCHASE_INIT"})},onSetAuthRedirectPath:function(t){return e(ye(t))}}}))(he(Ce,ve)),Se=n(56),ke=n.n(Se);function Oe(e){return a.a.createElement("div",{className:ke.a.CheckoutSummary},a.a.createElement("h1",null,"Some catchy text"),a.a.createElement("div",{style:{width:"100%",margin:"auto"}},a.a.createElement(Z,{ingredients:e.ingredients})),a.a.createElement(ue,{btnType:"Danger",clicked:e.checkoutCancel},"CANCEL"),a.a.createElement(ue,{btnType:"Success",clicked:e.checkoutContinue},"CONTINUE"))}var Te=n(22),Ne=n.n(Te);function Ae(e){var t=null,n=[Ne.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(Ne.a.Invalid),e.elementType){case"input":t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=a.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=a.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return a.a.createElement("div",{className:Ne.a.Input},a.a.createElement("label",{className:Ne.a.Label},e.label),t)}var je=n(57),De=n.n(je),Re=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0,minLength:5},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"email",elementConfig:{type:"text",placeholder:"Your email"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"Fastest",validation:{},valid:!0}},formIsValid:!1},e.orderHandler=function(t){t.preventDefault();var n={};for(var r in e.state.orderForm)n[r]=e.state.orderForm[r].value;var a=Number.parseFloat(e.props.price).toFixed(2),o={ingredients:e.props.ings,price:a,orderData:n,userId:e.props.userId};console.log("onOrderBurger"),e.props.onOrderBurger(o,e.props.token)},e.checkValidation=function(e,t){var n=!0;return t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),n},e.changedHandler=function(t,n){var r=Object(V.a)({},e.state.orderForm),a=Object(V.a)({},r[n]);a.value=t.target.value,a.valid=e.checkValidation(a.value,a.validation),a.touched=!0,r[n]=a;var o=!0;for(var i in r)o=r[i].valid&&o;e.setState({orderForm:r,formIsValid:o})},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var r=a.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return a.a.createElement(Ae,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,changed:function(n){return e.changedHandler(n,t.id)},invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched})})),a.a.createElement(ue,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(r=a.a.createElement(me,null)),a.a.createElement("div",{className:De.a.ContactData},a.a.createElement("h4",null,"Enter your Contact Data"),r)}}]),n}(r.Component),Be=Object(l.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.idToken,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,n){return e(function(e,t){return function(n){n({type:"PURCHASE_BURGER_START"}),ve.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:"PURCHASE_BURGER_SUCCESS",orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){return n(function(e){return{type:"PURCHASE_BURGER_FAIL",error:e}}(e))}))}}(t,n))}}}))(he(Re,ve)),we=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).checkoutCancelHandler=function(){e.props.history.goBack()},e.checkoutContinueHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(p.a)(n,[{key:"render",value:function(){var e=a.a.createElement(g.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?a.a.createElement(g.a,{to:"/"}):null;e=a.a.createElement("div",null,t,a.a.createElement(Oe,{ingredients:this.props.ings,checkoutCancel:this.checkoutCancelHandler,checkoutContinue:this.checkoutContinueHandler}),a.a.createElement(g.b,{path:"".concat(this.props.match.path,"/contact-data"),component:Be}))}return e}}]),n}(r.Component),He=Object(l.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}),null)(we),Le=n(34),Pe=n.n(Le);function Ue(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var r=t.map((function(e){return a.a.createElement("p",{className:Pe.a.Ingredient,key:e.name},e.name,": ",e.amount)}));return a.a.createElement("div",{className:Pe.a.Order},a.a.createElement("p",null,"Ingredients: "),r,a.a.createElement("p",null,"Price: ",a.a.createElement("strong",null,e.price," PLN")))}var xe=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=a.a.createElement(me,null);return this.props.loading||(e=this.props.orders.map((function(e){return a.a.createElement(Ue,{key:e.id,ingredients:e.ingredients,price:e.price})}))),a.a.createElement("div",null,e)}}]),n}(r.Component),Fe=Object(l.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.idToken,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(t,n){return e(function(e,t){return function(n){n({type:"FETCH_ORDERS_START"});var r="?auth=".concat(e,'&orderBy="userId"&equalTo="').concat(t,'"');ve.get("/orders.json".concat(r)).then((function(e){var t=[];for(var r in e.data)t.push(Object(V.a)(Object(V.a)({},e.data[r]),{},{id:r}));n({type:"FETCH_ORDERS_SUCCESS",orders:t})})).catch((function(e){n({type:"FETCH_ORDERS_FAIL",error:e})}))}}(t,n))}}}))(he(xe,ve)),Me=n(16),Ge=n(58),Ve=n.n(Ge),qe=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},formIsValid:!1,isSignup:!0},e.checkValidity=function(e,t){var n=!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.isEmail){n=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)&&n}return n},e.inputChangedHandler=function(t,n){var r=Object(V.a)(Object(V.a)({},e.state.controls),{},Object(Me.a)({},t,Object(V.a)(Object(V.a)({},e.state.controls[t]),{},{value:n.target.value,valid:e.checkValidity(n.target.value,e.state.controls[t].validation),touched:!0}))),a=!0;for(var o in r)a=r[o].valid&&a;e.setState({controls:r,formIsValid:a})},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignup)},e.switchAuthModeHandler=function(){e.setState((function(e){return{isSignup:!e.isSignup}}))},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var r=t.map((function(t){return a.a.createElement(Ae,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(t.id,n)}})}));this.props.loading&&(r=a.a.createElement(me,null));var o=null;this.props.error&&(o=a.a.createElement("p",{style:{color:"red",fontWeight:"bold"}},this.props.error.message));var i=null;return this.props.isAuthenticated&&(i=a.a.createElement(g.a,{to:this.props.authRedirectPath})),a.a.createElement("div",{className:Ve.a.Auth},i,o,a.a.createElement("form",{onSubmit:this.submitHandler},r,a.a.createElement(ue,{btnType:"Success"},"Submit")),a.a.createElement(ue,{btnType:"Danger",clicked:this.switchAuthModeHandler},this.state.isSignup?"I want to SIGN IN":"I want to SIGN UP"))}}]),n}(r.Component),ze=Object(l.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.idToken,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,r){return e(function(e,t,n){return function(r){r({type:"AUTH_START"});var a={email:e,password:t,returnSecureToken:!0},o="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCLRnPWar7LCD-nuNJOHPnAccG1hVGC-Ns";n||(o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCLRnPWar7LCD-nuNJOHPnAccG1hVGC-Ns"),fe.a.post(o,a).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),r(Ee(e.data.idToken,e.data.localId)),r(be(e.data.expiresIn))})).catch((function(e){console.error(e),r(function(e){return{type:"AUTH_FAIL",error:e}}(e.response.data.error))}))}}(t,n,r))},onSetAuthRedirectPath:function(){return e(ye("/"))}}}))(qe),We=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(g.a,{to:"/"})}}]),n}(r.Component),Ye=Object(l.b)(null,(function(e){return{onLogout:function(){return e(_e())}}}))(We),Je=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAuthSignup()}},{key:"render",value:function(){var e=a.a.createElement(g.d,null,a.a.createElement(g.b,{path:"/auth",component:ze}),a.a.createElement(g.b,{path:"/",component:Ie}),a.a.createElement(g.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(g.d,null,a.a.createElement(g.b,{path:"/checkout",component:He}),a.a.createElement(g.b,{path:"/orders",component:Fe}),a.a.createElement(g.b,{path:"/auth",component:ze}),a.a.createElement(g.b,{path:"/logout",component:Ye}),a.a.createElement(g.b,{path:"/",component:Ie}))),a.a.createElement("div",null,a.a.createElement(G,null,e))}}]),n}(r.Component),Xe=Object(g.g)(Object(l.b)((function(e){return{isAuthenticated:null!==e.auth.idToken}}),(function(e){return{onTryAuthSignup:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(_e());else{var r=localStorage.getItem("userId");e(Ee(t,r)),e(be((n.getTime()-(new Date).getTime())/1e3))}}else e(_e())}))}}}))(Je)),Ze=function(e,t){return Object(V.a)(Object(V.a)({},e),t)},Qe={ingredients:null,totalPrice:4,error:!1,building:!1},Ke={salad:.5,cheese:.4,bacon:.7,meat:1.5},$e=function(e,t){var n=Object(Me.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Ze(e.ingredients,n),totalPrice:e.totalPrice+Ke[t.ingredientName],building:!0};return Ze(e,r)},et=function(e,t){var n=Object(Me.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Ze(e.ingredients,n),totalPrice:e.totalPrice-Ke[t.ingredientName],building:!0};return Ze(e,r)},tt=function(e,t){return Ze(e,{ingredients:t.ingredients,error:!1,totalPrice:Qe.totalPrice,building:!1})},nt=function(e,t){return Ze(e,{error:!0})},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return $e(e,t);case"REMOVE_INGREDIENT":return et(e,t);case"SET_INGREDIENTS":return tt(e,t);case"FETCH_INGREDIENTS_FAILED":return nt(e,t);default:return e}},at={orders:[],loading:!1,purchased:!1},ot=function(e,t){return Ze(e,{purchased:!1})},it=function(e,t){return Ze(e,{loading:!0})},ct=function(e,t){var n=Ze(t.orderData,{id:t.orderId});return Ze(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})},lt=function(e,t){return Ze(e,{loading:!1})},ut=function(e,t){return Ze(e,{loading:!0})},st=function(e,t){return Ze(e,{orders:t.orders,loading:!1})},dt=function(e,t){return Ze(e,{loading:!1})},pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PURCHASE_INIT":return ot(e,t);case"PURCHASE_BURGER_START":return it(e,t);case"PURCHASE_BURGER_SUCCESS":return ct(e,t);case"PURCHASE_BURGER_FAIL":return lt(e,t);case"FETCH_ORDERS_START":return ut(e,t);case"FETCH_ORDERS_SUCCESS":return st(e,t);case"FETCH_ORDERS_FAIL":return dt(e,t);default:return e}},mt={idToken:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},ht=function(e,t){return Ze(e,{authRedirectPath:t.path})},gt=function(e,t){return Ze(e,{error:null,loading:!0})},ft=function(e,t){return Ze(e,{idToken:t.idToken,userId:t.userId,error:null,loading:!1})},vt=function(e,t){return Ze(e,{error:t.error,loading:!1})},Et=function(e,t){return Ze(e,{idToken:null,userId:null})},_t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return gt(e,t);case"AUTH_SUCCESS":return ft(e,t);case"AUTH_FAIL":return vt(e,t);case"AUTH_SIGNOUT":return Et(e,t);case"SET_AUTH_REDIRECT_PATH":return ht(e,t);default:return e}},bt=(n(87),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d),yt=Object(u.c)({burgerBuilder:rt,order:pt,auth:_t}),Ct=Object(u.e)(yt,bt(Object(u.a)(s.a))),It=a.a.createElement(l.a,{store:Ct},a.a.createElement(c.a,null,a.a.createElement(Xe,null)));i.a.render(a.a.createElement(a.a.StrictMode,null,It),document.getElementById("root"))}],[[60,1,2]]]);
//# sourceMappingURL=main.e4bf63cd.chunk.js.map