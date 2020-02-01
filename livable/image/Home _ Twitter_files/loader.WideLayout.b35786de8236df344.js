webpackJsonp(["loader.WideLayout"],{"78Sj":function(e,t,n){"use strict";n.d(t,"c",function(){return y}),n.d(t,"b",function(){return b}),n.d(t,"a",function(){return g});var i,o=n("y9m4"),r=(n.n(o),n("n12u")),a=(n.n(r),n("bTdA")),s=n("IIth"),c=n("TJez"),d=n.n(c),l=n("zAiL"),u="rweb/recommendations/FETCH_REQUEST",f="rweb/recommendations/FETCH_SUCCESS",p="rweb/recommendations/FETCH_FAILURE",h={},m=function(e){var t=e.displayLocation,n=e.similarToUserId;return t+(n?"_"+n:"")};n("ipg4").a.register(((i={}).recommendations=function(e,t){if(void 0===e&&(e=h),!t.meta)return e;switch(t.type){case u:var n,i=m(t.meta);return Object.assign({},e,((n={})[i]=Object.assign({},e[i],{fetchStatus:l.a.LOADING}),n));case p:var o,r=m(t.meta);return Object.assign({},e,((o={})[r]=Object.assign({},e[r],{fetchStatus:l.a.FAILED}),o));case f:var a,s=m(t.meta),c=t.payload&&t.payload.entities?t.payload.entities:{recommendations:d.a},v=(t.payload&&t.payload.result?t.payload.result:_).map(function(e){return c.recommendations[e]});return Object.assign({},e,((a={})[s]=Object.assign({},e[s],{fetchStatus:l.a.LOADED,recommendations:v}),a));default:return e}},i));var v=[],_=[],y=function(e,t){var n=t.displayLocation,i=t.similarToUserId,o=e.recommendations[m({displayLocation:n,similarToUserId:i})];return o&&o.recommendations?o.recommendations:v},b=function(e,t){var n=t.displayLocation,i=t.similarToUserId,o=e.recommendations[m({displayLocation:n,similarToUserId:i})];return o?o.fetchStatus:l.a.NONE},g=function(e){return function(t,n,i){var o=n(),r=e.displayLocation,c=e.similarToUserId,h=y(o,{displayLocation:r,similarToUserId:c}),m=b(o,{displayLocation:r,similarToUserId:c})===l.a.LOADED;return h&&m?Promise.resolve(d.a):t(function(e){return function(t,n,i){var o=i.api,r=e.displayLocation,c=e.itsInterests,d=e.limit,l=void 0===d?30:d,h=e.similarToUserId;return Object(s.b)(t,{params:{display_location:r,itsInterests:c,limit:l,user_id:h},request:o.Recommendations.fetch})({actionTypes:{REQUEST:u,SUCCESS:f,FAILURE:p},context:"FETCH_RECOMMENDATIONS",meta:{displayLocation:r,similarToUserId:h}},function(e){if(e)return[Object(a.c)(e.entities)]})}}(e))}}},Dtbj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("n12u");var i=n("86MP"),o=n.n(i),r=n("M1I4"),a=n.n(r),s=n("fKPv"),c=n.n(s),d=n("jH3T"),l=n.n(d),u=n("GiK3"),f=n("bgPG"),p=n("zAiL"),h=n("Y2tT"),m=n("WgQH"),v=n("jYKd"),_=n.n(v),y=n("MjES"),b=n.n(y),g=(n("KSGD"),n("7t5w")),O=n("78Sj"),w=n("y7g/"),T=n("Z1LJ"),E=n("sLaq"),L=n("bndy"),S=n("Dica"),R=function(e,t){return w.h(e)},I=function(e,t){return t.userId},P=Object(L.createSelector)(function(e,t){var n=I(0,t),i=R(e);return O.b(e,{displayLocation:"profile_accounts_sidebar",similarToUserId:n===i?void 0:n})},R,function(e,t){var n=I(0,t),i=R(e);return O.c(e,{displayLocation:"profile_accounts_sidebar",similarToUserId:n===i?void 0:n})},function(e,t){var n=S.d.select(e,t.userId);return n&&n.screen_name},function(e,t,n,i){return{fetchStatus:e,loggedInUserId:t,recommendations:n,screenName:i}}),j={createLocalApiErrorHandler:Object(E.b)("WHO_TO_FOLLOW_CONTAINER"),fetchRecommendationsIfNeeded:O.a,scribeAction:g.c},C=Object(T.e)(P,j),x=n("uTSV"),M=n("CqBa"),U=n("O9Qs"),N=n("RSAe"),H=n("qVtP"),k=n.n(H),D=n("wJuL"),A=n.n(D),F=l.a.da31f17e,K=l.a.d5ee4403,B=l.a.e05b3b2d,W=3,Y=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.withProfileHeaderText,n=e.screenName,i=e.userIds,o=e.isInSidebar,r=i.length>W,a="/"+n+"/who_to_follow";return u.createElement(b.a,{accessibilityLabel:F,accessibilityRole:"complementary"},u.createElement(A.a,{text:t?K:F}),u.createElement(U.a,{displayMode:M.a.UserCompact,userIds:i.slice(0,W),withItemBorder:!0}),r&&u.createElement(k.a,{interactiveStyles:o?Object(x.a)():void 0,link:a,text:B}))},t}(u.Component),z=Object(f.b)({component:"who_to_follow"})(Object(N.a)(Y));n.d(t,"WhoToFollowContainer",function(){return V});var q=l.a.f80c522b,G=_.a.create(function(e){return{root:{minHeight:"20rem"}}}),J={component:"suggest_who_to_follow",element:"user",action:"results"},V=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return t=e.call.apply(e,[this].concat(i))||this,c()(a()(a()(t)),"_renderContent",function(){var e=t.props,n=e.recommendations,i=e.screenName,o=e.userId,r=e.withProfileHeaderText,a=n&&n.map(function(e){return e.user});return i?u.createElement(z,{screenName:i,userId:o,userIds:a,withProfileHeaderText:r}):null}),c()(a()(a()(t)),"_handleImpression",function(e){var n=t.props,i=n.scribeAction,o=n.scribeNamespace;i(Object.assign({},o,J),{items:e&&e.slice(0,W).map(function(e){return Object.assign({},m.a.forUser(e.user),{suggestion_details:{source_data:e.token}})})})}),t}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props.recommendations;this._fetchRecommendations(this.props),e&&e.length>0&&this._handleImpression(e)},n.componentDidUpdate=function(e){var t=this.props.recommendations;this.props.userId!==e.userId&&this._fetchRecommendations(this.props),t!==e.recommendations&&t&&t.length>0&&this._handleImpression(t)},n.render=function(){var e=this.props.fetchStatus;return e===p.a.FAILED||this._hasEmptySuggestionList()?null:u.createElement(b.a,{style:G.root},u.createElement(h.a,{accessibilityLabel:q,fetchStatus:e,render:this._renderContent}))},n._fetchRecommendations=function(e){var t=e.createLocalApiErrorHandler,n=e.fetchRecommendationsIfNeeded,i=e.userId;n({limit:4,displayLocation:"profile_accounts_sidebar",similarToUserId:i!==e.loggedInUserId?i:void 0}).catch(t({}))},n._hasEmptySuggestionList=function(){var e=this.props,t=e.fetchStatus,n=e.recommendations;return t===p.a.LOADED&&0===n.length},t}(u.PureComponent);t.default=Object(f.b)()(C(V))},Pz0n:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"roundToNearestDevicePixel",function(){return E}),n.d(t,"default",function(){return L});var i=n("86MP"),o=n.n(i),r=n("M1I4"),a=n.n(r),s=n("fKPv"),c=n.n(s),d=n("GiK3"),l=(n.n(d),n("3tGU")),u=n("O27J"),f=n.n(u),p=n("iCM7"),h=n("KSGD"),m=(n.n(h),n("dpp3")),v=n.n(m),_=n("jYKd"),y=n.n(_),b=n("Tdfl"),g=n.n(b),O=n("MjES"),w=n.n(O),T=n("5nt5"),E=(n.n(T),function(e){var t=e.cssPixels,n=e.dpr;return Math.round(t*n)/n}),L=function(e){function t(t,n){var i;return i=e.call(this,t,n)||this,c()(a()(a()(i)),"_setContentRef",function(e){i._contentRef=f.a.findDOMNode(e)}),c()(a()(a()(i)),"_setContainerRef",function(e){i._containerRef=f.a.findDOMNode(e)}),c()(a()(a()(i)),"_handleProgrammaticScroll",function(e){i._prevScrollY=(i._prevScrollY||0)+e,i.setState({contentOffset:Math.max(0,i.state.contentOffset+e)})}),i.state={stickyTop:!0,stickyThreshold:0,contentOffset:0,contentHeight:0,stickyOffset:0,position:l.b()?"sticky":"static"},i._scheduleUpdatePositioning=v()(i._updatePositioning.bind(a()(a()(i))),window.requestAnimationFrame),i}o()(t,e);var n=t.prototype;return n.UNSAFE_componentWillMount=function(){var e=this.context.viewport;this._removeProgrammaticScrollListener=e.addProgrammaticScrollListener(this._handleProgrammaticScroll)},n.componentDidMount=function(){var e=this.context.viewport;this._updatePositioning(),this._removeScrollListener=e.addScrollListener(this._scheduleUpdatePositioning);var t=this._containerRef.getBoundingClientRect(),n=e.scrollY();this._prevScrollY=n,this.setState({stickyOffset:n+t.top})},n.componentWillUnmount=function(){this._removeScrollListener&&this._removeScrollListener(),this._removeProgrammaticScrollListener&&this._removeProgrammaticScrollListener()},n.render=function(){var e=this.state,t=e.stickyTop,n=e.stickyThreshold,i=e.contentOffset,o=e.position,r=S[o],a=window.devicePixelRatio||1,s=E({cssPixels:n,dpr:a}),c=E({cssPixels:i,dpr:a}),l={top:t?s+"px":null,bottom:t?null:s+"px"};return d.createElement(w.a,{ref:this._setContainerRef,style:[S.container,{minHeight:this.state.contentHeight}]},d.createElement(w.a,{style:{marginTop:c+"px"}}),d.createElement(w.a,{ref:this._setContentRef,style:[this.props.style,l,r]},this.props.children))},n._updatePositioning=function(){if(this._contentRef&&this._containerRef){var e=this.context.viewport.scrollY(),t=e-this._prevScrollY;if(!(Math.abs(t)<.5)){var n=this.props.distanceFromBottom;this._prevScrollY=e;var i=this._contentRef.getBoundingClientRect(),o=this._containerRef.getBoundingClientRect(),r=g.a.get("window").height,a=e+o.top,s=Math.max(i.top-o.top,0);if(r-i.height>a&&!Object(p.a)())this._updateState({stickyTop:!0,stickyThreshold:a,contentOffset:0,stickyOffset:a,contentHeight:i.height,position:"fixed"});else{var c=t>0,d=c!==this.state.stickyTop,u=window.devicePixelRatio||1,f=i.bottom-r+n<=1/u,h=a-i.top<=1/u;if((c&&f||!c&&h)&&l.a()){var m=n,v=a;this._updateState({position:"fixed",stickyOffset:a,stickyTop:h,stickyThreshold:h?v:m,contentOffset:s,contentHeight:i.height})}else{var _=r-i.height-n,y=r-i.height-a,b=l.b()?"sticky":"static";this._updateState({position:b,stickyTop:c,stickyOffset:a,stickyThreshold:c?_:y,contentOffset:d?s:this.state.contentOffset,contentHeight:i.height})}}}}},n._updateState=function(e){var t=this.state.stickyTop!==e.stickyTop,n=this.state.stickyThreshold!==e.stickyThreshold,i=Math.abs(this.state.contentOffset-e.contentOffset)>.5,o=Math.abs(this.state.stickyOffset-e.stickyOffset)>.5,r=this.state.position!==e.position,a=this.state.contentHeight!==e.contentHeight;(t||n||i||o||r||a)&&this.setState(e)},t}(d.PureComponent);c()(L,"contextTypes",{viewport:h.object.isRequired}),c()(L,"defaultProps",{distanceFromBottom:10});var S=y.a.create(function(e){return{container:{height:"100%"},sticky:{position:"sticky"},fixed:{position:"fixed"},static:{position:"static"}}})},a7VL:function(e,t,n){"use strict";var i=n("R6lU");t.__esModule=!0,t.default=void 0;var o=i(n("lt8z"));n("8Np7"),n("VTn2");var r=i(n("86MP")),a=i(n("M1I4")),s=i(n("fKPv"));n("n12u");var c=i(n("GiK3")),d=i(n("druG")),l=i(n("dpp3")),u=i(n("NreW")),f=i(n("Oqy5")),p=i(n("+YAI")),h=i(n("Hob6")),m=i(n("Y+mP")),v=i(n("O27J")),_=i(n("Xwuh")),y=i(n("jYKd")),b=i(n("Tdfl")),g=i(n("narh")),O=i(n("MjES")),w=y.default.create(function(e){return{rootNarrow:{maxWidth:"75%"},rootWide:{maxWidth:"calc("+e.spaces.jumbo+" * 5)"},anchor:y.default.absoluteFillObject,mask:Object.assign({},y.default.absoluteFillObject,{position:"fixed"}),bodyRectHelper:Object.assign({},y.default.absoluteFillObject,{bottom:void 0}),content:{borderRadius:e.borderRadii.medium,position:"absolute",overflow:"hidden",backgroundColor:e.colors.navigationBackground,boxShadow:e.boxShadows.medium},contentInitialRender:{position:"fixed",opacity:0},contentFixed:{position:"fixed",overflowY:"auto",overscrollBehavior:"contain"}}}),T=function(e){var t=e.verticalPreference,n=e.canOrientUp,i=e.canOrientDown;return n&&i||!n&&!i?t:n?"up":"down"},E=function(e){var t=e.horizontalPreference,n=e.canOrientLeft,i=e.canOrientRight;return!n||"left"!==t&&i?"right":"left"},L=function(e){return g.default.isRTL?"left"===e?"right":"left":e},S=function(e){function t(t,n){var i;return i=e.call(this,t,n)||this,(0,s.default)((0,a.default)((0,a.default)(i)),"_handleAnimateComplete",function(){var e=i.props.onAnimateComplete;e&&e()}),(0,s.default)((0,a.default)((0,a.default)(i)),"_handleEsc",function(e){var t=i.props.onDismiss,n=e.altKey,o=e.ctrlKey,r=e.metaKey,a=e.key;!(n||o||r)&&"Escape"===a&&t()}),(0,s.default)((0,a.default)((0,a.default)(i)),"_receiveBodyRectHelperRef",function(e){var t=v.default.findDOMNode(e);t&&t instanceof window.HTMLElement&&(i._bodyRectHelperNode=t),i._scheduleUpdate()}),(0,s.default)((0,a.default)((0,a.default)(i)),"_receiveAnchorRef",function(e){var t=v.default.findDOMNode(e);t&&t instanceof window.HTMLElement&&(i._anchorNode=t),i._scheduleUpdate()}),(0,s.default)((0,a.default)((0,a.default)(i)),"_receiveContentRef",function(e){var t=v.default.findDOMNode(e);t&&t instanceof window.HTMLElement&&(i._contentNode=t),i._scheduleUpdate()}),(0,s.default)((0,a.default)((0,a.default)(i)),"_updatePosition",function(){if(i._mounted&&(i._anchorNode||i.props.position)&&i._contentNode&&i._contentNode instanceof window.HTMLElement&&i._bodyRectHelperNode&&i._bodyRectHelperNode instanceof window.HTMLElement){var e=i._contentNode.scrollHeight,t=i._contentNode.scrollWidth,n=i._bodyRectHelperNode.getBoundingClientRect(),o=n.left,r=n.top,a=n.width,s=b.default.get("window"),c=s.width,d=s.height,l={left:0,top:0,height:0,width:0};i.props.position?l=Object.assign({},l,i.props.position):i._anchorNode&&i._anchorNode instanceof window.HTMLElement&&(l=i._anchorNode.getBoundingClientRect());var u=l,f=u.left,p=u.top,h=u.height,m=u.width,v=c-a,_=f-o,y=p-r,g=f+m>=t,O=p+h>=e,w=c-f>=t,S=d-p>=e,R=i.props.preferredVerticalOrientation,I=L(i.props.preferredHorizontalOrientation),P=i.state.verticalOrientation||T({verticalPreference:R,canOrientUp:O,canOrientDown:S}),j=i.state.horizontalOrientation||E({horizontalPreference:I,canOrientLeft:g,canOrientRight:w}),C=i.props.isFixed?f:_,x=i.props.isFixed?p:y,M="up"===P?x+h-e:x,U="left"===j?c-C-m-v:c-C-t-v;i.setState({top:Math.max(M,0),right:U,verticalOrientation:P,horizontalOrientation:j})}}),i.state=Object.freeze({}),i._scheduleUpdate=(0,l.default)(i._updatePosition,window.requestAnimationFrame),i._scheduleDebouncedUpdate=(0,u.default)(i._scheduleUpdate,250),i}(0,r.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this._mounted=!0,b.default.addEventListener("change",this._scheduleDebouncedUpdate)},n.componentWillUnmount=function(){this._mounted=!1,b.default.removeEventListener("change",this._scheduleDebouncedUpdate)},n.render=function(){var e=this,t=this.props,n=t.children,i=t.isFixed,r=t.onDismiss,a=t.animateInDuration,s=t.animateType,l=t.withKeyboardNavigation,u=this.state,v=u.top,b=u.right,T=u.verticalOrientation,E=void 0===v,L="calc(100vh - "+(v||0)+"px)",S=[w.content,E&&w.contentInitialRender,i&&[w.contentFixed,{maxHeight:L}],{top:v,right:g.default.isRTL?void 0:b,left:g.default.isRTL?b:void 0}];return c.default.createElement(O.default,{ref:this._receiveAnchorRef,style:w.anchor},c.default.createElement(m.default.Dropdown,null,c.default.createElement(p.default,{onDismiss:r},c.default.createElement(f.default,{withKeyboardNavigation:l},c.default.createElement(O.default,{onClick:r,style:w.mask}),c.default.createElement(O.default,{ref:this._receiveBodyRectHelperRef,style:w.bodyRectHelper}),c.default.createElement(_.default,null,function(t){var i=t.windowWidth;return c.default.createElement(O.default,{accessibilityRole:"menu",onKeyUp:e._handleEsc,ref:e._receiveContentRef,style:[i<y.default.theme.breakpoints.medium?w.rootNarrow:w.rootWide,S]},E&&"slide"===s?n:c.default.createElement(d.default,{animateMount:"up"!==T,duration:a,onAnimateComplete:e._handleAnimateComplete,show:!0,type:s},function(e){var t=e.isAnimating;return c.default.createElement(h.default,{disableReporting:t},function(e,t){return c.default.createElement(O.default,(0,o.default)({ref:e()},t({})),n)})}))})))))},t}(c.default.Component);t.default=S,(0,s.default)(S,"defaultProps",{preferredHorizontalOrientation:"left",preferredVerticalOrientation:"down",animateType:"slide",animateInDuration:"normal",withKeyboardNavigation:!0})},lUbS:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("rzQm"),o=n.n(i),r=n("dpqK"),a=n.n(r),s=n("Z1LJ"),c=n("bndy"),d=n("qCVd"),l=n("rrVe"),u=n.n(l),f=n("JSXd"),p=n("9LAc"),h=n.n(p),m=Object(c.createSelector)(function(e,t){return t.conversationModule.selectEntries(e)},function(e){return f.a.selectAll(e)},function(e,t){return t.focalTweetId},function(e,t,n){var i=[n].concat(o()(u()(e,v))),r=a()(i,function(e){return t[e]}),s=n&&t[n],c=s&&s.quoted_status&&t[s.quoted_status],d=c&&_(c)||[],l=u()(r,_),f=l[0],p=l.slice(1),m=[f].concat(o()(d),o()(p));return h()(m)}),v=function(e){switch(e.type){case d.a.Tweet:return[e.content.id];case d.a.ConversationThread:return a()(e.content.conversationComponents,function(e){return e.conversationTweetComponent&&e.conversationTweetComponent.tweet&&e.conversationTweetComponent.tweet.id});default:return[]}},_=function(e){void 0===e&&(e={});var t=e.entities,n=(t=void 0===t?{}:t).user_mentions,i=(void 0===n?[]:n).map(function(e){return e.id_str});return[e.user].concat(o()(i))},y=Object(c.createSelector)(m,function(e){return{participantIds:e}}),b=Object(s.b)(y),g=n("86MP"),O=n.n(g),w=n("fKPv"),T=n.n(w),E=n("jH3T"),L=n.n(E),S=n("GiK3"),R=n("wJuL"),I=n.n(R),P=n("O9Qs"),j=n("MjES"),C=n.n(j),x=L.a.c915c2d0,M=function(e){function t(){return e.apply(this,arguments)||this}return O()(t,e),t.prototype.render=function(){var e=this.props,t=e.maxCount,n=e.participantIds;return S.createElement(C.a,{accessibilityLabel:x,accessibilityRole:"complementary"},S.createElement(I.a,{text:x}),S.createElement(P.a,{userIds:n.slice(0,t),withFinalItemBorder:!1,withItemBorder:!0}))},t}(S.Component);T()(M,"defaultProps",{maxCount:3});var U=M;t.default=b(U)},"x+Yi":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("a7VL"),o=n.n(i);t.default=o.a}});
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/loader.WideLayout.b35786de8236df344.js.map