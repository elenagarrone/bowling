describe('Frame', function(){

	it('should have an initial score of 10', function(){
		var frame = new Frame();
		expect(frame.score).toEqual(10);
	});

});