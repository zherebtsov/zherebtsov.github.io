(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(40)},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),i=n.n(c),o=n(21),l=n(12),s=n(9),u=n(2),p=n(3),m=function(){function e(){Object(u.a)(this,e)}return Object(p.a)(e,null,[{key:"isEmptyArray",value:function(e){return Array.isArray(e)&&0===e.length}},{key:"correctArray",value:function(e,t){if(t[0]<0||t[0]>e.length-1||t[1]<0||t[1]>e.length-1)return e;var n=e.slice();return n[t[1]]=n.splice(t[0],1,n[t[1]])[0],n}},{key:"uniqueArray",value:function(e){var t={};return e.forEach(function(e){t[e]=""}),Object.keys(t)}},{key:"hasEmptyElement",value:function(e){return!!this.isEmptyArray(e)||-1!==e.findIndex(function(e){return""===e})}},{key:"generateRandomString",value:function(){return Math.random().toString(36).substr(2,11)}}]),e}(),d=function e(t){var n=this;Object(u.a)(this,e),this._id="",this.type="",this.label="\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",this.placeholder="\u041f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430",this.list=["\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u21161","\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u21162"],this.required=!1,this._initId=function(){n._id="_".concat(m.generateRandomString())},this.setType=function(e){n.type=e},this._initId(),this.setType(t||"input")},h="SAVE_FORM",f="DEL_SAVE_FORM";var b={forms:[]};var E="PREVIEW_ADD_FIELD",v="PREVIEW_DEL_FIELD",O="PREVIEW_UPDATE_FIELD",y="PREVIEW_CHANGE_POSITION_FIELD",j="PREVIEW_CHANGE_NAME_FORM",C="PREVIEW_CREATE_NEW_FORM",g="PREVIEW_LOAD_FORM";var _={_id:"_".concat(m.generateRandomString()),name:"",fields:[],isSave:!1};var k=Object(l.combineReducers)({previewForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var n=e.fields.slice();return n.push(t.payload.field),Object(s.a)({},e,{fields:n});case v:return n=e.fields.slice(),Object(s.a)({},e,{fields:n.filter(function(e){return e._id!==t.payload.id})});case O:var a=(n=e.fields.slice()).findIndex(function(e){return e._id===t.payload.field._id});return n[a]=t.payload.field,Object(s.a)({},e,{fields:n});case y:return a=e.fields.findIndex(function(e){return e._id===t.payload.id}),Object(s.a)({},e,{fields:m.correctArray(e.fields,[a,a-t.payload.position])});case j:return Object(s.a)({},e,{name:t.payload.name});case C:return Object(s.a)({},_,{_id:"_".concat(m.generateRandomString())});case g:return t.payload.form;case h:return Object(s.a)({},e,{isSave:!0});case f:return Object(s.a)({},e,{isSave:e._id!==t.payload.id&&e.isSave})}return e},saved:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:var n=e.forms.slice();t.payload.form.isSave=!0;var a=e.forms.findIndex(function(e){return e._id===t.payload.form._id});return-1===a?n.push(t.payload.form):n[a]=t.payload.form,Object(s.a)({},e,{forms:n});case f:return n=e.forms.slice(),Object(s.a)({},e,{forms:n.filter(function(e){return e._id!==t.payload.id})})}return e}}),N=(n(33),n(26));var w=n(17),F=n(11),x=n(5),L=n(4),A=n(6),S={INPUT:"input",TEXTAREA:"textarea",CHECKBOX:"checkbox",RADIO:"radio",SELECT:"select",FILE:"file"},D=function(e){function t(){return Object(u.a)(this,t),Object(x.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(X,{className:"app-main__elements"},r.a.createElement(X.Title,null,"\u042d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0444\u043e\u0440\u043c\u044b"),r.a.createElement(K,{list:Object.keys(S).map(function(e){return S[e]}),onClick:this.props.onClick}))}}]),t}(a.Component);D.defaultProps={onClick:function(){}};var q=function(e){function t(){return Object(u.a)(this,t),Object(x.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.props.hide?null:r.a.createElement("div",{className:"form-element__tools"},r.a.createElement("button",{className:"button button--icon",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:this.props.onEditClick},r.a.createElement("svg",{height:"17",width:"17",viewBox:"0 0 512 512"},r.a.createElement("path",{fill:"currentColor",d:"M493.26 56.26l-37.51-37.51C443.25 6.25 426.87 0 410.49 0s-32.76 6.25-45.25 18.74l-74.49 74.49L256 127.98 12.85 371.12.15 485.34C-1.45 499.72 9.88 512 23.95 512c.89 0 1.79-.05 2.69-.15l114.14-12.61L384.02 256l34.74-34.74 74.49-74.49c25-25 25-65.52.01-90.51zM118.75 453.39l-67.58 7.46 7.53-67.69 231.24-231.24 31.02-31.02 60.14 60.14-31.02 31.02-231.33 231.33zm340.56-340.57l-44.28 44.28-60.13-60.14 44.28-44.28c4.08-4.08 8.84-4.69 11.31-4.69s7.24.61 11.31 4.69l37.51 37.51c6.24 6.25 6.24 16.4 0 22.63z",className:""}))),this.props.hideUp?null:r.a.createElement("button",{className:"button button--icon",title:"\u0412\u0432\u0435\u0440\u0445",onClick:this.props.onUpClick},r.a.createElement("svg",{height:"17",width:"17",viewBox:"0 0 448 512"},r.a.createElement("path",{fill:"currentColor",d:"M6.101 261.899L25.9 281.698c4.686 4.686 12.284 4.686 16.971 0L198 126.568V468c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12V126.568l155.13 155.13c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 35.515c-4.686-4.686-12.284-4.686-16.971 0L6.101 244.929c-4.687 4.686-4.687 12.284 0 16.97z",className:""}))),this.props.hideDown?null:r.a.createElement("button",{className:"button button--icon",title:"\u0412\u043d\u0438\u0437",onClick:this.props.onDownClick},r.a.createElement("svg",{height:"17",width:"17",viewBox:"0 0 448 512"},r.a.createElement("path",{fill:"currentColor",d:"M441.9 250.1l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L250 385.4V44c0-6.6-5.4-12-12-12h-28c-6.6 0-12 5.4-12 12v341.4L42.9 230.3c-4.7-4.7-12.3-4.7-17 0L6.1 250.1c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z",className:""}))),r.a.createElement("button",{className:"button button--icon",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:this.props.onDelClick},r.a.createElement("svg",{height:"17",width:"17",viewBox:"0 0 320 512"},r.a.createElement("path",{fill:"currentColor",d:"M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z",className:""}))))}}]),t}(a.Component),P=n(1),I=n.n(P),R=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(x.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(c)))).onChange=function(e){return function(t){var a={};a[e]="required"===e?t.target.checked:t.target.value,"list"===e&&(a[e]=t.target.value.split(/,\s*/)),n.props.onChange(a)}},n.toggle=function(e){return e?"":"form-element__edit--close"},n.renderExtraFields=function(e){switch(e){case S.INPUT:case S.TEXTAREA:return r.a.createElement("div",{className:"form-element form-element--dark"},r.a.createElement(M,{text:"Placeholder"},r.a.createElement(B,{value:n.props.value.placeholder,onChange:n.onChange("placeholder")})));case S.RADIO:case S.SELECT:return r.a.createElement("div",{className:"form-element form-element--dark"},r.a.createElement(M,{text:"List (\u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0438\u0442\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0444\u043e\u0440\u043c\u044b \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e)"},r.a.createElement(V,{defaultValue:n.props.value.list.toString(),onChange:n.onChange("list")})));case S.CHECKBOX:case S.FILE:default:return null}},n}return Object(A.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.props.hide?null:r.a.createElement("div",{className:"form-element__edit ".concat(this.toggle(this.props.isOpen))},r.a.createElement("button",{className:"button button--icon button--white close-button",title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:this.props.closeEdit},r.a.createElement("svg",{height:"17",width:"17",viewBox:"0 0 320 512"},r.a.createElement("path",{fill:"currentColor",d:"M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z",className:""}))),r.a.createElement("div",{className:"form-element form-element--dark"},r.a.createElement(M,{text:"Label"},r.a.createElement(B,{value:this.props.value.label,onChange:this.onChange("label")}))),this.renderExtraFields(this.props.type),r.a.createElement("div",{className:"form-element form-element--dark"},r.a.createElement(M,{text:"Required",after:!0},r.a.createElement("input",{type:"checkbox",checked:this.props.value.required,onChange:this.onChange("required")}))))}}]),t}(a.Component);R.defaultProps={onChange:function(){},value:I.a.object,isOpen:I.a.bool,type:I.a.string,closeEdit:I.a.func,hide:I.a.bool};var T=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(x.a)(this,Object(L.a)(t).call(this,e))).onChange=function(e){n.props.onFieldEdit(Object(s.a)({},n.props.field,e))},n.toggleEdit=function(){n.setState({isOpenEdit:!n.state.isOpenEdit})},n.closeEdit=function(){n.setState({isOpenEdit:!1})},n.onDelClick=function(){n.props.onDelClick(n.props.field._id)},n.onPositionChange=function(e){return function(){n.props.onPositionChange(n.props.field._id,e)}},n.renderControl=function(e){switch(e){case S.TEXTAREA:return r.a.createElement(M,{text:n.state.label,required:n.state.required},r.a.createElement(V,{name:n.state.label,placeholder:n.state.placeholder,required:n.state.required}));case S.CHECKBOX:return r.a.createElement(M,{text:n.state.label,required:n.state.required,after:!0},r.a.createElement(B,{type:"checkbox",name:n.state.label,required:n.state.required}));case S.RADIO:return r.a.createElement(z,{label:n.state.label,required:n.state.required,list:n.state.list});case S.SELECT:return r.a.createElement(M,{text:n.state.label,required:n.state.required},r.a.createElement(H,{list:n.state.list,name:n.state.label}));case S.FILE:return r.a.createElement(M,{text:n.state.label,required:n.state.required},r.a.createElement(B,{type:"file",name:n.state.label,required:n.state.required}));default:return r.a.createElement(M,{text:n.state.label,required:n.state.required},r.a.createElement(B,{name:n.state.label,placeholder:n.state.placeholder,required:n.state.required}))}},n.state={isOpenEdit:!1},n}return Object(A.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-element"},r.a.createElement("div",{className:"form-element__container"},this.renderControl(this.state.type),r.a.createElement(q,{onEditClick:this.toggleEdit,onDelClick:this.onDelClick,onUpClick:this.onPositionChange(1),onDownClick:this.onPositionChange(-1),hideUp:0===this.props.index,hideDown:this.props.length-1===this.props.index,hide:this.props.hideEdit})),r.a.createElement(R,{type:this.state.type,value:this.state,onChange:this.onChange,isOpen:this.state.isOpenEdit,closeEdit:this.closeEdit,hide:this.props.hideEdit}))}}],[{key:"getDerivedStateFromProps",value:function(e){return e.field}}]),t}(a.Component);T.defaultProps={field:new d,onDelClick:function(){},onFieldEdit:function(){},onPositionChange:function(){},length:0,index:0,hideEdit:!1};var B=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(x.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(r)))).addClassName=function(e){return e===S.RADIO||e===S.CHECKBOX?"":"form-element__control"},n}return Object(A.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("input",Object.assign({className:this.addClassName(this.props.type)},this.props))}}]),t}(a.Component),M=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(x.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(r)))).setStar=function(e){return e?"*":""},n}return Object(A.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("label",{className:"form-element__label"},this.props.after?"":"".concat(this.props.text," ").concat(this.setStar(this.props.required)),this.props.children,this.props.after?"".concat(this.props.text," ").concat(this.setStar(this.props.required)):"")}}]),t}(a.Component);M.defaultProps={text:"",required:!1,after:!1};var V=function(e){function t(){return Object(u.a)(this,t),Object(x.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("textarea",Object.assign({className:"form-element__control",rows:"4"},this.props))}}]),t}(a.Component),z=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(x.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(c)))).setStar=function(e){return e?"*":""},n.renderRadio=function(e){return e.map(function(e,t){return r.a.createElement("div",{className:"form-element",key:"".concat(t,"_rdo-grp")},r.a.createElement(M,{text:e,after:!0},r.a.createElement("input",{type:"radio",name:n.props.label,required:n.props.required,defaultChecked:0===t})))})},n}return Object(A.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("fieldset",{className:"form-element__fieldset"},r.a.createElement("legend",{className:"form-element__label"},"".concat(this.props.label," ").concat(this.setStar(this.props.required))),this.renderRadio(this.props.list))}}]),t}(a.Component);z.defaultProps={label:"",required:!1,list:[]};var H=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(x.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(c)))).renderOptions=function(e){return e.map(function(e,t){return r.a.createElement("option",{key:"".concat(t,"_slc"),value:e},e)})},n}return Object(A.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("select",{className:"form-element__control",name:this.props.name},this.renderOptions(this.props.list))}}]),t}(a.Component);H.defaultProps={name:"",list:[]};var U=function(e){function t(){return Object(u.a)(this,t),Object(x.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("h2",{className:"panel__title"},this.props.children)}}]),t}(a.Component),W=function(e){function t(){return Object(u.a)(this,t),Object(x.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"panel__container"},this.props.children)}}]),t}(a.Component),X=function(e){function t(){return Object(u.a)(this,t),Object(x.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"".concat(this.props.className," panel")},this.props.children)}}]),t}(a.Component);X.Title=U,X.Body=W;var K=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(x.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(c)))).onClick=function(e){return function(){n.props.onClick(e)}},n.renderItems=function(e){return e.map(function(e,t){return r.a.createElement("li",{className:"button-group__item",key:"".concat(t,"_btn-grp")},r.a.createElement("button",{className:"button-group__button button button--outline",onClick:n.onClick(e)},e))})},n}return Object(A.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"button-group"},this.renderItems(this.props.list))}}]),t}(a.Component);K.defaultProps={list:[],onClick:function(){}};var G=function(e){function t(){return Object(u.a)(this,t),Object(x.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return m.isEmptyArray(this.props.fields)?r.a.createElement(Q,null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0444\u043e\u0440\u043c\u044b"):this.props.fields.map(function(t,n){return r.a.createElement(T,{key:"".concat(n,"_prev-form"),field:t,onDelClick:e.props.onDelClick,onFieldEdit:e.props.onFieldEdit,onPositionChange:e.props.onPositionChange,index:n,length:e.props.fields.length,hideEdit:e.props.hideEdit})})}}]),t}(a.Component);G.defaultProps={fields:[],onDelClick:function(){},onFieldEdit:function(){},onPositionChange:function(){},hideEdit:!1};var J=n(41),Z=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(x.a)(this,Object(L.a)(t).call(this,e))).onChange=function(e){n.setState({name:e.target.value})},n.onBlur=function(){n.props.name!==n.state.name&&n.props.onChange(n.state.name)},n.onSubmit=function(e){e.preventDefault(),n.props.submit()},n.state={name:""},n}return Object(A.a)(t,e),Object(p.a)(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.form.name!==e.form.name&&e.form.name!==this.state.name&&this.setState({name:e.form.name}),!0}},{key:"render",value:function(){return r.a.createElement("form",{className:"panel__footer save-form",onSubmit:this.onSubmit},r.a.createElement("div",{className:"save-form__container-controls"},r.a.createElement("p",{className:"form-element"},r.a.createElement(M,{text:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0444\u043e\u0440\u043c\u044b",required:!0},r.a.createElement(B,{value:this.state.name,onChange:this.onChange,onBlur:this.onBlur,placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0410\u043d\u043a\u0435\u0442\u0430",required:!0})))),r.a.createElement("div",{className:"save-form__container-buttons"},this.props.form.isSave?r.a.createElement("p",{className:"form-element"},r.a.createElement(J.a,{className:"button button--outline",to:"/form?".concat(this.props.form._id),target:"_blank"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c")):null,r.a.createElement("p",{className:"form-element"},r.a.createElement("button",{className:"button",type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))}}]),t}(a.Component);Z.defaultProps={submit:function(){},onChange:function(){},form:{}};var Q=function(e){function t(){return Object(u.a)(this,t),Object(x.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return""===this.props.text?null:r.a.createElement("p",{className:"hint"},this.props.text||this.props.children)}}]),t}(a.Component);Q.Error=function(e){var t=e.text,n=e.className,a=e.children;return r.a.createElement("p",{className:"color_red ".concat(n)},t||a)},Q.Success=function(e){var t=e.text,n=e.children;return r.a.createElement("p",{className:"color_green"},t||n)};var Y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(x.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(r)))).onEditClick=function(e){return function(){n.props.onEditClick(e)}},n.onDelClick=function(e){return function(){n.props.onDelClick(e)}},n}return Object(A.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return m.isEmptyArray(this.props.list)?r.a.createElement("p",{className:"hint"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u0444\u043e\u0440\u043c \u043d\u0435\u0442"):this.props.list.map(function(t,n){return r.a.createElement("li",{key:"".concat(n,"_").concat(t._id,"_lst-frm"),className:"form-list__item"},r.a.createElement("div",{className:"form-list__name"},t.name),r.a.createElement("div",{className:"form-list__controls"},r.a.createElement("button",{className:"button button--icon",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:e.onEditClick(t)},r.a.createElement("svg",{height:"20",width:"20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},r.a.createElement("path",{fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z",className:""}))),r.a.createElement(J.a,{className:"button button--icon",title:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c",to:"/form?".concat(t._id),target:"_blank"},r.a.createElement("svg",{height:"20",width:"20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},r.a.createElement("path",{fill:"currentColor",d:"M576 14.4l-.174 163.2c0 7.953-6.447 14.4-14.4 14.4H528.12c-8.067 0-14.56-6.626-14.397-14.691l2.717-73.627-2.062-2.062-278.863 278.865c-4.686 4.686-12.284 4.686-16.971 0l-23.029-23.029c-4.686-4.686-4.686-12.284 0-16.971L474.379 61.621l-2.062-2.062-73.626 2.717C390.626 62.44 384 55.946 384 47.879V14.574c0-7.953 6.447-14.4 14.4-14.4L561.6 0c7.953 0 14.4 6.447 14.4 14.4zM427.515 233.74l-24 24a12.002 12.002 0 0 0-3.515 8.485V458a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h301.976c10.691 0 16.045-12.926 8.485-20.485l-24-24A12.002 12.002 0 0 0 331.976 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V242.225c0-10.691-12.926-16.045-20.485-8.485z",className:""}))),r.a.createElement("button",{className:"button button--icon",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:e.onDelClick(t._id)},r.a.createElement("svg",{height:"20",width:"20",viewBox:"0 0 320 512"},r.a.createElement("path",{fill:"currentColor",d:"M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z",className:""})))))})}}]),t}(a.Component),$=function(e){function t(){return Object(u.a)(this,t),Object(x.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"form-list"},r.a.createElement(Y,{list:this.props.list,onEditClick:this.props.onEditClick,onDelClick:this.props.onDelClick}))}}]),t}(a.Component);$.defaultProps={list:[],onEditClick:function(){},onDelClick:function(){}};var ee=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(x.a)(this,Object(L.a)(t).call(this,e))).valid=function(e){var t=[],n="";return m.isEmptyArray(e)?"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0432 \u0444\u043e\u0440\u043c\u0443":(e.forEach(function(e){""===e.label&&(n="\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0432\u0441\u0435\u0445 \u043f\u043e\u043b\u0435\u0439"),t.push(e.label),e.type!==S.SELECT&&e.type!==S.RADIO||(e.list.length<2?n='\u0412 \u043f\u043e\u043b\u0435 "'.concat(e.label,"(").concat(e.type,')" \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u043e\u0442\u0432\u0435\u0442\u0430'):m.uniqueArray(e.list).length!==e.list.length?n='\u0412 \u043f\u043e\u043b\u0435 "'.concat(e.label,"(").concat(e.type,')" \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c\u0438'):m.hasEmptyElement(e.list)&&(n='\u0412 \u043f\u043e\u043b\u0435 "'.concat(e.label,"(").concat(e.type,')" \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u0438\u043c\u044b')))}),m.uniqueArray(t).length!==t.length?"\u0418\u043c\u0435\u043d\u0430 \u043f\u043e\u043b\u0435\u0439 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b":n)},n.onFormSave=function(){var e=n.valid(n.props.previewForm.fields);""===e?(n.setState({error:"",success:"\u0424\u043e\u0440\u043c\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0430"}),n.props.saveForm(n.props.previewForm)):n.setState({error:e})},n.onNameFormChange=function(e){n.props.changeNameForm(e)},n.state={error:"",success:""},n}return Object(A.a)(t,e),Object(p.a)(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.previewForm!==e.previewForm&&this.setState({error:"",success:""}),!0}},{key:"render",value:function(){return r.a.createElement(X,{className:"app-main__preview"},r.a.createElement(X.Title,null,"\u041f\u0440\u0435\u0434\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440"),r.a.createElement(X.Body,null,r.a.createElement(G,{fields:this.props.previewForm.fields,onDelClick:this.props.delField,onFieldEdit:this.props.updateField,onPositionChange:this.props.changePositionField})),r.a.createElement(Q.Error,{text:this.state.error}),r.a.createElement(Q.Success,{text:this.state.success}),r.a.createElement(Z,{onChange:this.onNameFormChange,submit:this.onFormSave,form:this.props.previewForm}))}}]),t}(a.Component),te=Object(F.b)(function(e){return{previewForm:e.previewForm}},function(e){return{delField:function(t){return e(function(e){return{type:v,payload:{id:e}}}(t))},updateField:function(t){return e(function(e){return{type:O,payload:{field:e}}}(t))},changePositionField:function(t,n){return e(function(e,t){return{type:y,payload:{id:e,position:t}}}(t,n))},changeNameForm:function(t){return e(function(e){return{type:j,payload:{name:e}}}(t))},saveForm:function(t){return e(function(e){return{type:h,payload:{form:e}}}(t))}}})(ee);var ne=function(e){function t(){return Object(u.a)(this,t),Object(x.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(X,{className:"app-main__form-list"},r.a.createElement(X.Title,null,"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0444\u043e\u0440\u043c\u044b"),r.a.createElement(X.Body,null,r.a.createElement($,{list:this.props.saved.forms,onEditClick:this.props.loadForm,onDelClick:this.props.delForm}),r.a.createElement("p",null,r.a.createElement("button",{className:"button button--width100",onClick:this.props.createNewForm},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0444\u043e\u0440\u043c\u0443"))))}}]),t}(a.Component),ae=Object(F.b)(function(e){return{saved:e.saved}},function(e){return{createNewForm:function(){return e({type:C})},loadForm:function(t){return e(function(e){return{type:g,payload:{form:e}}}(t))},delForm:function(t){return e(function(e){return{type:f,payload:{id:e}}}(t))}}})(ne);var re=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(x.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(r)))).onElementFormClick=function(e){n.props.addField(e)},n}return Object(A.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"content"},r.a.createElement("header",{className:"app-header"},r.a.createElement(J.a,{className:"app-header__link",to:"/"},r.a.createElement("h1",{className:"app-header__name"},"\u041a\u043e\u043d\u0441\u0442\u0443\u0440\u043a\u0442\u043e\u0440 \u0444\u043e\u0440\u043c"))),r.a.createElement("main",{className:"app-main container"},r.a.createElement("div",{className:"app-main__a-side"},r.a.createElement(ae,null),r.a.createElement(D,{onClick:this.onElementFormClick})),r.a.createElement(te,null))),r.a.createElement("footer",{className:"app-footer"},r.a.createElement("p",{className:"app-footer__author"},"Test task created by Dmitry Zherebtsov (",r.a.createElement("a",{href:"https://github.com/zherebtsov?tab=repositories",target:"_blank",rel:"noopener noreferrer"},"GitHub"),")")))}}]),t}(a.Component),ce=Object(F.b)(null,function(e){return{addField:function(t){return e({type:E,payload:{field:new d(t)}})}}})(re);var ie=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(x.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(r)))).getFormFields=function(){var e=n.props.location.search.slice(1),t=n.props.saved.forms.find(function(t){return t._id===e});return t?t.fields:[]},n}return Object(A.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.getFormFields();return m.isEmptyArray(e)?r.a.createElement(Q.Error,{className:"text-align_center"},"\u0424\u043e\u0440\u043c\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"):r.a.createElement("main",{className:"container container--tablet"},r.a.createElement(X,null,r.a.createElement(X.Title,null,"\u0410\u043d\u043a\u0435\u0442\u0430"),r.a.createElement(X.Body,null,r.a.createElement("form",{action:"https://echo.htmlacademy.ru",method:"POST"},r.a.createElement(G,{fields:this.getFormFields(),hideEdit:!0}),r.a.createElement("div",{className:"form-element text-align_center"},r.a.createElement("button",{className:"button",type:"submit"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))))))}}]),t}(a.Component),oe=Object(F.b)(function(e){return{saved:e.saved}})(ie),le=n(42),se=n(43),ue=n(44),pe=function(e){var t=[o.a,function(e){var t=e.dispatch,n=e.getState;return function(e){return function(a){if("function"===typeof a)return a(t,n);if(a.promise){var r=a.promise,c=a.types,i=a.payload,o=Object(N.a)(c,3),l=o[0],s=o[1],u=o[2];e({type:l,payload:i});var p=r();return p.then(function(t){return e({result:t,payload:i,type:s})},function(t){return e({error:t,payload:i,type:u})}).catch(function(t){console.error("MIDDLEWARE ERROR:",t),e({error:t,payload:i,type:u})}),p}return e(a)}}},Object(w.save)({states:["saved"],debounce:800,namespace:"app-constructor-form"})],n=l.compose;return Object(l.createStore)(k,Object(w.load)({states:["saved"],namespace:"app-constructor-form"}),n(l.applyMiddleware.apply(void 0,t)))}();i.a.render(r.a.createElement(F.a,{store:pe,key:"provider"},r.a.createElement(le.a,null,r.a.createElement(se.a,null,r.a.createElement(ue.a,{exact:!0,path:"/",component:ce}),r.a.createElement(ue.a,{path:"/form",component:oe})))),document.getElementById("root"))}},[[27,2,1]]]);
//# sourceMappingURL=main.de699a2b.chunk.js.map