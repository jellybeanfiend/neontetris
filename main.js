function main(){
	// Language modifications =)
	String.prototype.repeat = function(times){
		times = parseInt(times || 0)
		return Array(times+1).join(this)
	}
	
	window.contains_property = function contains_property(obj, property){
		return typeof obj[property] !== "undefined"
	}

}

main()