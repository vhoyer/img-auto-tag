String.prototype.replaceAll = function(search, replacement) {
	var target = this;
	return target.replace(new RegExp(search, 'g'), replacement);
};

function $(e){
	var n=e.substring(0,1),t=e.substring(1);
	return "." == n ? document.getElementsByClassName(t) :
			"#" == n ? document.getElementById(t) :
				void 0
}
