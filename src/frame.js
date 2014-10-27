function Frame (){
	this.score = 10;
	this.rows = 2;

	this.ballHit = function(number){
		return this.score -= number;
	};
};



