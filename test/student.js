var should = require('should-http'), 
	request = require('supertest');

describe('student', function(){
	var url = "http://localhost:5000";
	describe("find()", function(){
		it('should retrieve all student record', function(done){
			request(url)
			.get('/students')
			.end(function(err, res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Array);
				done();
			})
		});
	})
	
	describe("findOne()", function(){
		it('should retrieve a specific student record', function(done){
			request(url)
			.get('/students/2')
			.end(function(err, res){
				if(err) throw err;
				res.should.have.status(200);
				done();
			})
		});
	})
	
	describe("insert()", function(){
		it('should add a specific student record', function(done){
		var studrec = {'name': 'Janel', 'studno': '2013-08999'};
			request(url)
			.post('/students')
			.send(studrec)
			.end(function(err, res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Object);
				res.body.should.have.property('id')
				res.body.should.have.property('name');		
				res.body.should.have.property('studno').and.have.lengthOf(10);
				res.body.should('id').be.type('int');
				res.body.should('name').be.type('string');	
				res.body.should('studno').be.type('string');
				done();
			})
		});
	})	
});