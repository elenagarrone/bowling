describe('Frame', function(){

	describe('A new frame: ', function(){

		it('should have an initial score of 10', function(){
			var frame = new Frame();
			expect(frame.score).toEqual(10);
		});

		it('should have 2 rows', function(){
			var frame = new Frame();
			expect(frame.rows).toEqual(2);
		});

		it('should change the score when a ball hit the pins', function(){
			var frame = new Frame();
			frame.ballHit(3);
			expect(frame.score).toEqual(7);
		});
	});
});