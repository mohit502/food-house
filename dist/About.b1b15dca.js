function e(e){return e&&e.__esModule?e.default:e}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire164e;t.register("h0EEC",(function(s,o){var n,r,a,i,l;n=s.exports,Object.defineProperty(n,"__esModule",{value:!0,configurable:!0}),r=s.exports,a="default",i=()=>f,Object.defineProperty(r,a,{get:i,set:l,enumerable:!0,configurable:!0});var c=t("ayMG0"),d=t("acw62");t("aoYtd");t("iwhH4");var u=t("g55gd"),m=t("DjzJF");class h extends e(d).Component{constructor(e){super(e)}componentDidMount(){}render(){return(0,c.jsxs)("main",{className:"flex justify-around pt-10",children:[(0,c.jsxs)("div",{className:"flex-col items-center",children:[(0,c.jsxs)("div",{className:"flex justify-center items-start",children:[(0,c.jsx)("img",{src:e(u),alt:"",className:"h-20 mx-4 my-2"}),(0,c.jsx)("h1",{className:"font-lobster text-8xl text-logo-color",children:"Food House"})]}),(0,c.jsxs)("div",{className:" flex items-center justify-center pt-10",children:[(0,c.jsx)("h4",{className:"font-lobsterTwo text-logo-color-lite text-5xl ",children:"Food Made with"}),(0,c.jsx)("img",{src:e(m),alt:"love",className:" ml-2 w-[70px] "})]})]}),(0,c.jsx)("div",{children:(0,c.jsx)("img",{src:"https://www.pngmart.com/files/22/McDonalds-PNG-Image.png",alt:"about-page-pic"})})]})}}var f=h})),t.register("iwhH4",(function(s,o){t("ayMG0");var n=t("acw62");class r extends e(n).Component{constructor(e){super(e),this.state={userInfo:{login:"xyzId",name:"name",location:"dummy location",avatar_url:"dummy url",bio:"bio"}}}async componentDidMount(){const e=await fetch("https://api.github.com/users/mohit502"),t=await e.json();this.setState({userInfo:t})}componentDidUpdate(e,t){}componentWillUnmount(){clearInterval(this.timer)}render(){return(0,$ayMG0.jsxs)("div",{children:[(0,$ayMG0.jsx)("h1",{children:"Profile Class Component"}),(0,$ayMG0.jsxs)("h2",{children:["Name : ",this.state.userInfo.name]}),(0,$ayMG0.jsx)("img",{src:this.state.userInfo.avatar_url}),(0,$ayMG0.jsxs)("h2",{children:["Location :",this.state.userInfo.location]}),(0,$ayMG0.jsxs)("h2",{children:["Login : ",this.state.userInfo.login]}),(0,$ayMG0.jsxs)("h3",{children:["Bio : ",this.state.userInfo.bio]})]})}}})),t.register("g55gd",(function(e,s){e.exports=new URL(t("27Lyk").resolve("3uPch"),import.meta.url).toString()})),t.register("DjzJF",(function(e,s){e.exports=new URL(t("27Lyk").resolve("6ytPb"),import.meta.url).toString()}));
//# sourceMappingURL=About.b1b15dca.js.map
