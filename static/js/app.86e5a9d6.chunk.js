(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{150:function(e,t,a){"use strict";a.d(t,"a",(function(){return A}));var n=a(7),r=a.n(n),o=a(1),l=a.n(o),c=a(79),i=a(11),s=a(5),m=a(3),u=a(2),y=a(12),d=a(38),h=a(27),f=function(e){var t=e.handlePlayerName,a=Object(o.useState)("text your name"),n=r()(a,2),c=n[0],s=n[1],y=Object(i.f)();return l.a.createElement(u.a,{style:g.container},l.a.createElement(u.a,null,l.a.createElement(m.a,{style:g.text},"YOUR NAME"),l.a.createElement(d.a,{style:g.textInput,onChangeText:function(e){s(e),t(e)},value:c})),l.a.createElement(u.a,null,l.a.createElement(h.a,{title:"Start",color:"#841584",accessibilityLabel:"Start the game",onPress:function(){y.push("/game")}})))},b=y.a.get("window").width,E=y.a.get("window").height,g=s.a.create({container:{flex:1,backgroundColor:"#f5f4e9",alignItems:"center",justifyContent:"space-around",borderWidth:1,height:E,width:b},text:{color:"#888",textAlign:"center",fontSize:26},textInput:{fontSize:19,width:b/2,height:40,borderColor:"#888",borderWidth:1,backgroundColor:"#ccca9b"}}),p=a(71),w=a(284),C=function(e){var t=e.money,a=e.day,n=e.loan,r=e.happy,o=e.health,c=e.playerName;return l.a.createElement(u.a,{style:S.container},l.a.createElement(u.a,{style:S.topContainer},l.a.createElement(m.a,null,c),l.a.createElement(m.a,null," is the ",a,"day"),l.a.createElement(m.a,null," ")),l.a.createElement(u.a,{style:S.bottomContainer},l.a.createElement(u.a,{style:S.infoTitle},l.a.createElement(w.a,{name:"cash",size:24,color:"black"}),l.a.createElement(m.a,null,"money","\n",t)),l.a.createElement(u.a,{style:S.infoTitle},l.a.createElement(w.a,{name:"cash",size:24,color:"#c7c7b3"}),l.a.createElement(m.a,null,"loan  ","\n",n)),l.a.createElement(u.a,{style:S.infoTitle},l.a.createElement(w.a,{name:"heart",size:24,color:"black"}),l.a.createElement(m.a,null,"health","\n",o)),l.a.createElement(u.a,{style:S.infoTitle},l.a.createElement(w.a,{name:"emoticon-happy-outline",size:24,color:"black"}),l.a.createElement(m.a,null,"happy","\n",r))))},x=y.a.get("window").width,S=(y.a.get("window").height,s.a.create({container:{flex:1,backgroundColor:"#f7f7cd",alignItems:"center",justifyContent:"space-around",flexDirection:"column"},topContainer:{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},bottomContainer:{flex:3,flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"},infoTitle:{flex:1,minWidth:3*x/8,justifyContent:"center",alignItems:"center",flexDirection:"row",backgroundColor:"#e3e2ba"}})),k=a(51),j=a.n(k),I=a(104),v=function(e){var t=e.money,a=e.products,n=e.setMoney,c=e.setLoan,s=e.loan,y=e.happy,f=e.setHappy,b=e.health,E=e.setHealth,g=Object(i.f)(),p=Object(o.useState)(!0),C=r()(p,2),x=C[0],S=C[1],k=Object(o.useState)(),I=r()(k,2),v=I[0],O=I[1],P=Object(o.useState)(),z=r()(P,2),D=z[0],L=z[1],H=Object(o.useState)(1),J=r()(H,2),M=J[0],R=J[1],A=Object(o.useState)([["pencil",10,10]]),F=r()(A,2),Y=F[0],K=F[1],U=Object(o.useState)(1),q=r()(U,2),G=(q[0],q[1],function(e){S(!x),L([e.item[1]]),O([e.item[0],e.item[1]*M,M]),console.log("this is productNumber"+M)}),Q=function(){t<v[1]?alert("you dont have enough money"):(n(t-D*M),V(),S(!x),console.log("this is storeProduct"+Y),console.log("this is productNumber"+M))},V=function(){var e=JSON.parse(JSON.stringify(Y));if(console.log(e),e.some((function(e){return e[0]===v[0]})))for(var t=0;t<e.length;t++)e[t][0]===v[0]&&(e[t][1]=e[t][1]+v[1],e[t][2]=e[t][2]+M,K(e));else K([].concat(j()(Y),[[v[0],v[1],M]]))},X=Object(o.useState)(!0),Z=r()(X,2),$=Z[0],_=Z[1],ee=Object(o.useState)(),te=r()(ee,2),ae=te[0],ne=te[1],re=Object(o.useState)(1),oe=r()(re,2),le=oe[0],ce=oe[1],ie=Object(o.useState)(!0),se=r()(ie,2),me=se[0],ue=se[1],ye=Object(o.useState)(1),de=r()(ye,2),he=de[0],fe=de[1],be=Object(o.useState)(),Ee=r()(be,2),ge=Ee[0],pe=Ee[1],we=Object(o.useState)(),Ce=r()(we,2),xe=Ce[0],Se=Ce[1];return l.a.createElement(u.a,{style:N.container},x?null:l.a.createElement(u.a,{style:N.alertStyle},l.a.createElement(m.a,null,"this price is 89 "),l.a.createElement(d.a,{style:{height:40,borderColor:"gray",borderWidth:1},onChangeText:function(e){return function(e){e>0?(console.log(v),console.log(typeof Number(e)),R(Number(e)),O([v[0],D*Number(e),Number(e)])):R(e),console.log("this is storeProduct"+Y)}(e)},value:""+M,maxLength:5}),l.a.createElement(u.a,{style:N.alertButton},l.a.createElement(h.a,{onPress:Q,title:"comfirm",color:"#ebe860",accessibilityLabel:"i wanna buy"}),l.a.createElement(h.a,{onPress:function(){S(!x)},title:"cancel",color:"#d6d6bc",accessibilityLabel:"i dont buy"}))),$?null:l.a.createElement(u.a,{style:N.alertStyle},l.a.createElement(m.a,null,"this price sell is 89 "),l.a.createElement(d.a,{style:{height:40,borderColor:"gray",borderWidth:1},onChangeText:function(e){return function(e){e>=0&&ce(Number(e)),console.log(typeof le)}(e)},value:""+le,maxLength:5}),l.a.createElement(u.a,{style:N.alertButton},l.a.createElement(h.a,{onPress:function(){!function(){var e=JSON.parse(JSON.stringify(Y));if(e.some((function(e){return e[0]===ae[0]})))for(var a=0;a<e.length;a++)e[a][0]===ae[0]&&(le>e[a][2]?alert("you dont have enough goods"):(e[a][1]=e[a][1]-le*ae[1],e[a][2]=e[a][2]-le,n(t+le*ae[1]),_(!$),K(e)));else alert("you has not good")}()},title:" Sell ",color:"#ebe860",accessibilityLabel:"i wanna Sell"}),l.a.createElement(h.a,{onPress:function(){_(!$)},title:"Cancel",color:"#d6d6bc",accessibilityLabel:"i dont Sell"}))),me?null:l.a.createElement(u.a,{style:N.alertStyle},l.a.createElement(m.a,null,xe),l.a.createElement(d.a,{style:{height:40,borderColor:"gray",borderWidth:1},onChangeText:function(e){return function(e){e>=0&&fe(Number(e))}(e)},value:""+he,maxLength:5}),l.a.createElement(u.a,{style:N.alertButton},l.a.createElement(h.a,{onPress:function(){2===ge?he>t?alert("you dont have enought to pay"):s<=0?alert("you dont need to pay"):he>s?alert("you donnt need pay much"):(c(s-he),n(t-he),ue(!me)):3===ge?200*he>t?alert("you dont have enought to pay"):(f(y+he),n(t-200*he),ue(!me)):1===ge?200*he>t?alert("you dont have enought to pay"):(E(b+he),n(t-200*he),ue(!me)):alert("the estate function is building,so you have unlimited space")},title:"confirm",color:"#ebe860",accessibilityLabel:"i wanna Sell"}),l.a.createElement(h.a,{onPress:function(){ue(!me)},title:"cancel",color:"#d6d6bc",accessibilityLabel:"i dont Sell"}))),l.a.createElement(u.a,{style:N.topContainer},l.a.createElement(m.a,{onPress:function(){g.push("/game/store")}},l.a.createElement(w.a,{name:"store",size:24,color:"black"}),"Store"),l.a.createElement(m.a,{onPress:function(){g.push("/game/")}},l.a.createElement(w.a,{name:"cart",size:24,color:"black"}),"Market"),l.a.createElement(m.a,{onPress:function(){g.push("/game/others")}},l.a.createElement(w.a,{name:"run",size:24,color:"black"}),"Others")),l.a.createElement(u.a,{style:N.mainContainer},l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/game/store"},l.a.createElement(T,{storeProduct:Y,clickBuy:G})),l.a.createElement(i.a,{exact:!0,path:"/game/"},l.a.createElement(B,{products:a,clickBuy:G,clickSell:function(e){_(!$),ne([e.item[0],e.item[1]])},clickSellTest:function(){console.log("this is storeProduct"+Y)},storeProduct:Y})),l.a.createElement(i.a,{path:"/game/others"},l.a.createElement(W,{handleOther:function(e){ue(!1),pe(e),Se(2===e?"you can back money or loan maoney":1===e?"200 can make your health a little bit":3===e?"donate 200 can add 1 point happiness":"10000 can add 1 store space")}})))))},O=y.a.get("window").width,P=y.a.get("window").height,N=s.a.create({container:{flex:1,backgroundColor:"#f7f7cd",alignItems:"center",justifyContent:"space-around",flexDirection:"column"},topContainer:{flex:1,justifyContent:"space-around",alignItems:"center",flexDirection:"row",width:O},threeChooseContainer:{flex:1},mainContainer:{flex:8},storeContainer:{backgroundColor:"#f5f4e9"},storeItem:{flex:1,width:O,minHeight:33,flexDirection:"row",alignItems:"center"},storeItems:{flex:1,textAlign:"center"},storeTitle:{flexDirection:"row",justifyContent:"space-evenly",minWidth:O},alertStyle:{minHeight:P/4,minWidth:O/2,zIndex:999,position:"absolute",justifyContent:"space-between",alignItems:"center",backgroundColor:"#dbdbc1"},alertButton:{flexDirection:"row"},otherContainer:{flex:1,flexWrap:"wrap",flexDirection:"row"},otherItem:{flex:1,minWidth:O/2,justifyContent:"center",alignItems:"center"}}),T=function(e){e.products;var t=e.clickBuy,a=e.storeProduct;return l.a.createElement(u.a,{style:N.storeContainer},l.a.createElement(u.a,{style:N.storeTitle},l.a.createElement(m.a,{style:N.storeItems},"things"),l.a.createElement(m.a,{style:N.storeItems},"price"),l.a.createElement(m.a,{style:N.storeItems},"number")),l.a.createElement(I.a,{data:a,renderItem:function(e){var a=e.item;return l.a.createElement(u.a,{style:N.storeItem},l.a.createElement(m.a,{onPress:function(){t({item:a})},style:N.storeItems},a[0]),l.a.createElement(m.a,{style:N.storeItems},parseInt(a[1]/a[2])),l.a.createElement(m.a,{style:N.storeItems},a[2]))}}))},B=function(e){var t=e.products,a=(e.handleBuying,e.clickBuy),n=e.clickSell;e.clickSellTest,e.storeProduct;return l.a.createElement(u.a,{style:N.storeContainer},l.a.createElement(u.a,{style:N.storeTitle},l.a.createElement(m.a,{style:N.storeItems},"things"),l.a.createElement(m.a,{style:N.storeItems},"price"),l.a.createElement(m.a,{style:N.storeItems},"difference")),l.a.createElement(I.a,{data:t,renderItem:function(e){var t=e.item;return l.a.createElement(u.a,{style:N.storeItem},l.a.createElement(m.a,{onPress:function(){a({item:t})},style:N.storeItems},t[0]),l.a.createElement(m.a,{style:N.storeItems},t[1]),l.a.createElement(m.a,{onPress:function(){n({item:t})},style:N.storeItems},t[2]))}}))},W=function(e){var t=e.handleOther;return l.a.createElement(u.a,{style:N.otherContainer},l.a.createElement(u.a,{style:N.otherItem},l.a.createElement(m.a,{onPress:function(){return t(1)}},"Hospital"),l.a.createElement(w.a,{name:"hospital-building",size:44,color:"black"})),l.a.createElement(u.a,{style:N.otherItem},l.a.createElement(m.a,{onPress:function(){return t(2)}},"Bank"),l.a.createElement(w.a,{name:"bank",size:44,color:"black"})),l.a.createElement(u.a,{style:N.otherItem},l.a.createElement(m.a,{onPress:function(){return t(3)}},"Donate"),l.a.createElement(w.a,{name:"hospital-box",size:44,color:"black"})),l.a.createElement(u.a,{style:N.otherItem},l.a.createElement(m.a,{onPress:function(){return t(4)}},"Estate"),l.a.createElement(w.a,{name:"warehouse",size:44,color:"black"})))},z=function(e){var t=e.clickNextDay,a=Object(o.useState)(2*D/6-D/12-6),n=r()(a,2),c=n[0],i=n[1],s=function(e){i(D*e/6-D/12-6),t()};return l.a.createElement(u.a,{style:L.container},l.a.createElement(u.a,{style:L.nameCity},l.a.createElement(m.a,{style:L.citys}," "),l.a.createElement(m.a,{style:L.citys,onPress:function(){s(2)}},"NewYork"),l.a.createElement(m.a,{style:L.citys}," "),l.a.createElement(m.a,{style:L.citys,onPress:function(){s(4)}},"Trenton"),l.a.createElement(m.a,{style:L.citys}," "),l.a.createElement(m.a,{style:L.citys,onPress:function(){s(6)}},"Hartford")),l.a.createElement(u.a,{style:L.sliderStyle},l.a.createElement(u.a,{style:[L.point,{marginLeft:c}]})),l.a.createElement(u.a,{style:L.nameCity},l.a.createElement(m.a,{style:L.citys,onPress:function(){s(1)}},"Boston"),l.a.createElement(m.a,{style:L.citys}," "),l.a.createElement(m.a,{style:L.citys,onPress:function(){s(3)}},"Albany"),l.a.createElement(m.a,{style:L.citys}," "),l.a.createElement(m.a,{style:L.citys,onPress:function(){s(5)}},"Concord"),l.a.createElement(m.a,{style:L.citys}," ")))},D=y.a.get("window").width,L=(y.a.get("window").height,s.a.create({container:{flex:1},sliderStyle:{width:D,borderWidth:.1,height:6,backgroundColor:"grey",justifyContent:"center"},point:{width:12,height:6,borderRadius:55,backgroundColor:"yellow"},nameCity:{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"},citys:{flex:1,textAlign:"center",minWidth:D/10,justifyContent:"center",alignItems:"center"},cityText:{}})),H=function(e){var t=e.playerName,a=Object(o.useState)(1),n=r()(a,2),c=n[0],i=n[1],s=Object(o.useState)(1e4),y=r()(s,2),d=y[0],h=y[1],f=Object(o.useState)(5e3),b=r()(f,2),E=b[0],g=b[1],w=Object(o.useState)(100),x=r()(w,2),S=x[0],k=x[1],j=Object(o.useState)(100),I=r()(j,2),O=I[0],P=I[1],N=[["pencil",10,0],["book",20,0],["bag",300,0],["phone",1e3,0],["ring",3e3,0],["gun",6e3,0],["moto",1e4,0],["car",2e4,0],["plane",9e4,0]],T=Object(o.useState)(N),B=r()(T,2),W=B[0],D=B[1],L=Object(o.useState)(!0),H=r()(L,2),J=H[0],M=H[1],A=Object(o.useState)("this is random message"),F=r()(A,2),Y=F[0],K=F[1];return l.a.createElement(u.a,{style:R.container},l.a.createElement(u.a,{style:R.topContainer},l.a.createElement(C,{playerName:t,money:d,day:c,loan:E,health:S,happy:O})),l.a.createElement(u.a,{style:R.middleContainer},J?null:l.a.createElement(u.a,{style:R.alertStyle},l.a.createElement(m.a,null,"NEWS"),l.a.createElement(m.a,null,Y," "),l.a.createElement(p.a,{onPress:function(){M(!0)},style:R.alertButton},l.a.createElement(m.a,null,"OK"))),l.a.createElement(v,{products:W,setMoney:h,money:d,setLoan:g,loan:E,setHealth:k,health:S,setHappy:P,happy:O})),l.a.createElement(u.a,{style:R.bottomContainer},l.a.createElement(z,{clickNextDay:function(){i(c+1),console.log(c),function(){for(var e=JSON.parse(JSON.stringify(N)),t=0;t<e.length;t++)e[t][1]=Math.floor(e[t][1]*(Math.random()+.5));var a=Math.random();a<.4&&M(!1),a<.05?(e[0][1]=2*e[0][1],K("the pencil industry fired,the pencil price is doubled")):a<.1?(e[1][1]=2*e[1][1],K("new wood law created,the book price is doubled ")):a<.15?(e[2][1]=2*e[1][1],K("having bag is popular now,the bag price is doubled ")):a<.2?(e[3][1]=2*e[1][1],K("new Iphone is published,the phone price is doubled ")):a<.25?(e[4][1]=2*e[1][1],K("the gold price is raise,the ring price is doubled ")):a<.3?(e[5][1]=2*e[1][1],K("people need feel safe,the gun price is doubled ")):a<.35?(e[6][1]=2*e[1][1],K("younger like moto,the moto price is doubled ")):a<.4&&(e[8][1]=2*e[1][1],K("new law will reduce the amounts of car,the car price is doubled ")),D(e)}(),g(parseInt(1.05*E)),P(O-1),k(S-1)}})))},J=y.a.get("window").width,M=y.a.get("window").height,R=s.a.create({container:{flex:1,backgroundColor:"#f5f4e9",alignItems:"center",justifyContent:"space-around",height:M,width:J},topContainer:{flex:2,width:J,flexDirection:"row"},middleContainer:{flex:5,width:J},bottomContainer:{flex:1,width:J,justifyContent:"space-around"},alertStyle:{position:"absolute",zIndex:999,justifyContent:"center",alignItems:"center",backgroundColor:"#dbdbc1",borderRadius:6,width:"80%",marginTop:"30%",marginBottom:"50%",marginLeft:"10%",marginRight:"10%"},alertButton:{position:"relative",width:"100%",marginTop:10,borderBottomEndRadius:6,borderBottomStartRadius:6,backgroundColor:"#e3e2ba",justifyContent:"center",alignItems:"center"}});function A(){var e=Object(o.useState)(""),t=r()(e,2),a=t[0],n=t[1];return l.a.createElement(c.a,null,l.a.createElement(i.a,{exact:!0,path:"/gameF/",path:"/"},l.a.createElement(f,{handlePlayerName:function(e){n(e)}})),l.a.createElement(i.a,{path:"/game"},l.a.createElement(H,{playerName:a})))}},151:function(e,t,a){a(152),e.exports=a(278)},152:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/gameF/expo-service-worker.js",{scope:"/gameF/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[151,1,2]]]);
//# sourceMappingURL=app.86e5a9d6.chunk.js.map