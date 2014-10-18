describe ('Bowling', function(){

	it('should be initialized with a player', function(){
		bowling = new Bowling("Elena");
		expect(bowling.player).toEqual("Elena");
	});

});