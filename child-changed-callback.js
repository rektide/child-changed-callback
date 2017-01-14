"use strict"

function ChildChangedCallback(el){
	var handler= el&& el.childChangedCallback
	if( !handler){
		console.error( "`childChangedCallback` expected")
		return
	}
	var observer= new MutationObserver( _=> handler())
	observer.observe( el, {childList: true})
	return function(){
		observer.disconnect()
	}
}

module.exports= ChildChangedCallback
module.exports.default= ChildChangedCallback
module.exports.ChildChangedCallback= ChildChangedCallback
