

var original_push = Array.prototype.push
var original_pop = Array.prototype.pop

String.prototype.method = function(){
	var m = this;
	return function( obj ){
		return obj[m].call( obj );
	};
};

String.prototype.humanize = function(){
	if( this.substr(0,3) === 'is_' ){
		return this.substr(3).humanize() + "?";
	}
	return this.split('_').map( "capitalize".method() ).join('-');
};

String.prototype.titleize = function(){
	return this.split(/[.?*+^$[\]\\(){}_\s|-]/g).map(function( s ){ return s.capitalize(); }).join(' ');
};

String.prototype.parameterize = function(){
	if( this.substr(0,3) === 'is_' ){
		return this.substr(3).parameterize() + "?";
	}
	return this.split(/[.,\/ -]/).map( "lowerlize".method() ).join('-');
};

String.prototype.capitalize = function(){
	return this.substr( 0, 1 ).toUpperCase() + this.substr(1);
};

String.prototype.lowerlize = function(){
	return this.substr( 0, 1 ).toLowerCase() + this.substr(1);
};

Array.prototype.onChange = function(){};

Array.prototype.push = function( a ){
 	original_push.call( this, a );
	if( this.onChange ){
		this.onChange( a );
	}else{
		console.log('No event configured yet, use Array.onChange = function... to configure an event');
	}
	return this.length;
}
Array.prototype.pop = function(){
  	var result = original_pop.call( this );
	if( this.onChange ){
		this.onChange();
	}else{
		console.log('No event configured yet, use Array.onChange = function... to configure an event');
	}
	return result;
}



module.exports = [ String, Array ]