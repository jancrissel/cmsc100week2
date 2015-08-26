var student = require('./../controllers/student');
//var teacher = require('./../controllers/teacher');

module.exports = function(router){
       router.route('/students')
       .get(student.find)
       .post(student.insert);
       router.route('/students/:id')
       .get(student.findOne)
       .put(student.update)
       .delete(student.remove);   
    
       return router;

};

/*
module.exports = function(router){
       router.route('/teachers')
       .get(teacher.find)
       .post(teacher.add);
       
       return router;

};*/