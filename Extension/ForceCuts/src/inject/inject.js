chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);


//MouseTrap Dependency
(function(C,r,g){function t(a,b,h){a.addEventListener?a.addEventListener(b,h,!1):a.attachEvent("on"+b,h)}function x(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return l[a.which]?l[a.which]:p[a.which]?p[a.which]:String.fromCharCode(a.which).toLowerCase()}function D(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function u(a){return"shift"==a||"ctrl"==a||"alt"==a||
	"meta"==a}function y(a,b){var h,c,e,g=[];h=a;"+"===h?h=["+"]:(h=h.replace(/\+{2}/g,"+plus"),h=h.split("+"));for(e=0;e<h.length;++e)c=h[e],z[c]&&(c=z[c]),b&&"keypress"!=b&&A[c]&&(c=A[c],g.push("shift")),u(c)&&g.push(c);h=c;e=b;if(!e){if(!k){k={};for(var m in l)95<m&&112>m||l.hasOwnProperty(m)&&(k[l[m]]=m)}e=k[h]?"keydown":"keypress"}"keypress"==e&&g.length&&(e="keydown");return{key:c,modifiers:g,action:e}}function B(a,b){return null===a||a===r?!1:a===b?!0:B(a.parentNode,b)}function c(a){function b(a){a=
		a||{};var b=!1,n;for(n in q)a[n]?b=!0:q[n]=0;b||(v=!1)}function h(a,b,n,f,c,h){var g,e,l=[],m=n.type;if(!d._callbacks[a])return[];"keyup"==m&&u(a)&&(b=[a]);for(g=0;g<d._callbacks[a].length;++g)if(e=d._callbacks[a][g],(f||!e.seq||q[e.seq]==e.level)&&m==e.action){var k;(k="keypress"==m&&!n.metaKey&&!n.ctrlKey)||(k=e.modifiers,k=b.sort().join(",")===k.sort().join(","));k&&(k=f&&e.seq==f&&e.level==h,(!f&&e.combo==c||k)&&d._callbacks[a].splice(g,1),l.push(e))}return l}function g(a,b,n,f){d.stopCallback(b,
			b.target||b.srcElement,n,f)||!1!==a(b,n)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?b.stopPropagation():b.cancelBubble=!0)}function e(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=x(a);b&&("keyup"==a.type&&w===b?w=!1:d.handleKey(b,D(a),a))}function l(a,c,n,f){function e(c){return function(){v=c;++q[a];clearTimeout(k);k=setTimeout(b,1E3)}}function h(c){g(n,c,a);"keyup"!==f&&(w=x(c));setTimeout(b,10)}for(var d=q[a]=0;d<c.length;++d){var p=d+1===c.length?h:e(f||
				y(c[d+1]).action);m(c[d],p,f,a,d)}}function m(a,b,c,f,e){d._directMap[a+":"+c]=b;a=a.replace(/\s+/g," ");var g=a.split(" ");1<g.length?l(a,g,b,c):(c=y(a,c),d._callbacks[c.key]=d._callbacks[c.key]||[],h(c.key,c.modifiers,{type:c.action},f,a,e),d._callbacks[c.key][f?"unshift":"push"]({callback:b,modifiers:c.modifiers,action:c.action,seq:f,level:e,combo:a}))}var d=this;a=a||r;if(!(d instanceof c))return new c(a);d.target=a;d._callbacks={};d._directMap={};var q={},k,w=!1,p=!1,v=!1;d._handleKey=function(a,
				c,e){var f=h(a,c,e),d;c={};var k=0,l=!1;for(d=0;d<f.length;++d)f[d].seq&&(k=Math.max(k,f[d].level));for(d=0;d<f.length;++d)f[d].seq?f[d].level==k&&(l=!0,c[f[d].seq]=1,g(f[d].callback,e,f[d].combo,f[d].seq)):l||g(f[d].callback,e,f[d].combo);f="keypress"==e.type&&p;e.type!=v||u(a)||f||b(c);p=l&&"keydown"==e.type};d._bindMultiple=function(a,b,c){for(var d=0;d<a.length;++d)m(a[d],b,c)};t(a,"keypress",e);t(a,"keydown",e);t(a,"keyup",e)}var l={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",
				20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},p={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},A={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},z={option:"alt",command:"meta","return":"enter",
				escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},k;for(g=1;20>g;++g)l[111+g]="f"+g;for(g=0;9>=g;++g)l[g+96]=g;c.prototype.bind=function(a,b,c){a=a instanceof Array?a:[a];this._bindMultiple.call(this,a,b,c);return this};c.prototype.unbind=function(a,b){return this.bind.call(this,a,function(){},b)};c.prototype.trigger=function(a,b){if(this._directMap[a+":"+b])this._directMap[a+":"+b]({},a);return this};c.prototype.reset=function(){this._callbacks={};this._directMap=
				{};return this};c.prototype.stopCallback=function(a,b){return-1<(" "+b.className+" ").indexOf(" mousetrap ")||B(b,this.target)?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable};c.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)};c.init=function(){var a=c(r),b;for(b in a)"_"!==b.charAt(0)&&(c[b]=function(b){return function(){return a[b].apply(a,arguments)}}(b))};c.init();C.Mousetrap=c;"undefined"!==typeof module&&module.exports&&(module.exports=
					c);"function"===typeof define&&define.amd&&define(function(){return c})})(window,document);


//Global Bind Dependency
(function(a){var c={},d=a.prototype.stopCallback;a.prototype.stopCallback=function(e,b,a,f){return this.paused?!0:c[a]||c[f]?!1:d.call(this,e,b,a)};a.prototype.bindGlobal=function(a,b,d){this.bind(a,b,d);if(a instanceof Array)for(b=0;b<a.length;b++)c[a[b]]=!0;else c[a]=!0};a.init()})(Mousetrap);

//Global Variables
var leadTabIndicator = document.getElementById('Lead_Tab').getElementsByTagName('a')[0].getAttribute('title');


//Convert
Mousetrap.bind(['c'], function(e) {
	document.querySelectorAll(".btn")[6].click();
});


//Check for Duplicates (Leav View Only)
Mousetrap.bind(['d'], function(e) {
	document.querySelectorAll(".btn")[4].click();
});


//Copy Email Address
Mousetrap.bind(['command+e'], function(e) {
	if (leadTabIndicator == 'Leads Tab - Selected') {
		var leadEmail = document.getElementById('lea11_ileinner').getElementsByTagName('a')[0].text;
		var leadEmailParent = document.getElementById('lea11_ileinner').getElementsByTagName('a')[0];
		function copyToClipboard(emailAddress){
			var copyDiv = document.createElement('div');
			                copyDiv.contentEditable = true;
			                document.body.appendChild(copyDiv);
			                copyDiv.innerHTML = emailAddress;
			                copyDiv.unselectable = "off";
			                copyDiv.focus();
			                document.execCommand('SelectAll');
			                document.execCommand("Copy", false, null);
			                document.body.removeChild(copyDiv);
			window.scroll(0,0);
		            }
		copyToClipboard(leadEmail);
		leadEmailParent.style.color = "#3998C3";


		setTimeout(function(){
			leadEmailParent.style.color = "black";
		},500);


	}  else {

		var opportunityEmail = document.getElementById('00No0000009r1D7_ilecell').getElementsByTagName('a')[0].text;
		var opportunityEmailParent = document.getElementById('00No0000009r1D7_ilecell').getElementsByTagName('a')[0];
		function copyToClipboard(emailAddress){
			var copyDiv = document.createElement('div');
			                copyDiv.contentEditable = true;
			                document.body.appendChild(copyDiv);
			                copyDiv.innerHTML = emailAddress;
			                copyDiv.unselectable = "off";
			                copyDiv.focus();
			                document.execCommand('SelectAll');
			                document.execCommand("Copy", false, null);
			                document.body.removeChild(copyDiv);
			window.scroll(0,0);
		            }
		copyToClipboard(opportunityEmail);

		opportunityEmailParent.style.color = "#3998C3";
		setTimeout(function(){
			opportunityEmailParent.style.color = "black";
		},500);

	}


});


//00No0000008ujWU_ileinner <td>
//00No00000045qsP_ileinner <div>

//Follow Up Date (Lead View Only)
Mousetrap.bind(['f'], function(e) {
if (leadTabIndicator == 'Leads Tab - Selected') {
	console.log('Follow Up Date Code Wrote')
	var event = new MouseEvent('dblclick', {
		'view': window,
		'bubbles': true,
		'cancelable': true
	});
	document.getElementById('00No00000045qsP_ileinner').dispatchEvent(event);
} else {

	var event = new MouseEvent('dblclick', {
		'view': window,
		'bubbles': true,
		'cancelable': true
	});
	document.getElementById('00No0000008ujWU_ileinner').dispatchEvent(event);
}


});


//Follow Up Date
Mousetrap.bind(['j'], function(e) {
	if (leadTabIndicator == 'Leads Tab - Selected') {
		var event = new MouseEvent('dblclick', {
			'view': window,
			'bubbles': true,
			'cancelable': true
		});
		document.getElementById('00No00000048Zg9_ileinner').dispatchEvent(event);

		setTimeout(function(){
			document.getElementById('00No00000048Zg9').focus();
		},150);

	} else {


		var event = new MouseEvent('dblclick', {
			'view': window,
			'bubbles': true,
			'cancelable': true
		});
		document.getElementById('opp10_ileinner').dispatchEvent(event);

		setTimeout(function(){
			document.getElementById('opp10').focus();
		},150)

	}
});



//Log a Call in Sales Force
Mousetrap.bind(['l'], function(e) {
	var logACallID = document.querySelectorAll(".btn")[13];
	if (logACallID != null) {
		//Lead View
		document.querySelectorAll(".btn")[13].click();
	} else {
		//Oppy View
		document.querySelectorAll(".btn")[13].click();
	}
});

//Access Notes
Mousetrap.bind(['n'], function(e) {
	e.preventDefault();
	var leadViewNoteSelector = document.getElementById('00No0000006x5Cx_ilecell');

	var event = new MouseEvent('dblclick', {
		'view': window,
		'bubbles': true,
		'cancelable': true
	});

	//Lead View Notes
	if (leadViewNoteSelector != null) { 
		document.getElementById('00No0000006x5Cx_ilecell').dispatchEvent(event);
		setTimeout(function(){
			document.getElementsByClassName('cke_wysiwyg_frame')[0].contentDocument.body.focus();
		},500);



	//Oppy View Notes
} else {
	document.getElementById('00No0000006x4vi_ilecell').dispatchEvent(event);
	setTimeout(function(){
		document.getElementsByClassName('cke_wysiwyg_frame')[0].contentDocument.body.focus();
	},500);

}

});





//Select Phone Number
Mousetrap.bind(['p'], function(e) {
if (leadTabIndicator == 'Leads Tab - Selected') {
var event = new MouseEvent('dblclick', {
	'view': window,
	'bubbles': true,
	'cancelable': true
});
document.getElementById('lea8_ilecell').dispatchEvent(event);

} else {
var event = new MouseEvent('dblclick', {
	'view': window,
	'bubbles': true,
	'cancelable': true
});
document.getElementById('00No0000009r1DC_ileinner').dispatchEvent(event);

	
}
});




//Save || Regardless of View
Mousetrap.bind(['command+s'], function(e) {
	e.preventDefault();
	var saveButtonID = document.querySelectorAll(".btn")[1];
	if (saveButtonID != null) {
		saveButtonID.click();
	} 
});



//Email with Tout
Mousetrap.bind(['t'], function(e) {
	document.querySelectorAll(".btn")[5].click();
	
});



//Update Status in Sales Force
Mousetrap.bind(['u'], function(e) {
	e.preventDefault();
		//Lead View Selector
		if (leadTabIndicator == 'Leads Tab - Selected') {
		var event = new MouseEvent('dblclick', {
			'view': window,
			'bubbles': true,
			'cancelable': true
		});	
			document.getElementById('lea13_ilecell').dispatchEvent(event);
		} 
		//Oppy Selectors
		else {
			var event = new MouseEvent('dblclick', {
				'view': window,
				'bubbles': true,
				'cancelable': true
			});
			document.getElementById('opp11_ilecell').dispatchEvent(event);	
		}
	});


//Winning Date (Lead View Only)
Mousetrap.bind(['w'], function(e) {
if (leadTabIndicator == 'Leads Tab - Selected') {
var event = new MouseEvent('dblclick', {
	'view': window,
	'bubbles': true,
	'cancelable': true
});
document.getElementById('CF00No0000009uK6r_ileinner').dispatchEvent(event);

} else {
var event = new MouseEvent('dblclick', {
	'view': window,
	'bubbles': true,
	'cancelable': true
});
document.getElementById('CF00No0000009r1BG_ileinner').dispatchEvent(event);

	
}
});



//Close a Lead
Mousetrap.bind(['x'], function(e) {
	if (leadTabIndicator == 'Leads Tab - Selected') {
		var event = new MouseEvent('dblclick', {
			'view': window,
			'bubbles': true,
			'cancelable': true
		});
		document.getElementById('00No0000008uic2_chkbox').dispatchEvent(event);

	} else {
		var event = new MouseEvent('dblclick', {
			'view': window,
			'bubbles': true,
			'cancelable': true
		});
		document.getElementById('00No0000008uicH_ileinner').dispatchEvent(event);

	}


});


//Focus Search
Mousetrap.bind(['command+k'], function(e) {
	e.preventDefault();
	document.getElementById('sbstr').focus();
});



//Cancel
Mousetrap.bind(['command+z'], function(e) {
	var leadViewCencelSelector = document.querySelectorAll(".btn")[2].getAttribute('value');
	//Lead Cancel
	if (leadViewCencelSelector == 'Cancel') {
		document.querySelectorAll(".btn")[2].click();
	} 
	//Oppy Cancel
	else {
		document.querySelectorAll(".btn")[6].click();
	}
	
});


//Let User Know Plugin is Ready
document.getElementById('tsidLabel').innerHTML = "Forcecuts Ready"; 

}
}, 10);


});