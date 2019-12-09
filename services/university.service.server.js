module.exports = function (app) {
	var universityDao = require('../daos/university.dao.server.js')

	function createStudent(req, res) {
		var student = req.body;
		res.json(universityDao.createStudent(student))
	}
	function deleteStudent(req, res) {
		var sid = req.params['sid'];
		res.json(universityDao.deleteStudent(sid))
	}
	function updateStudent(req, res) {
		const newStudent = req.body;
		res.json(universityDao.updateStudent(newStudent))
	}
	function findAllStudents(req, res) {
		res.json(universityDao.findAllStudents());
	}
	function findAllAnswers(req, res) {
		res.json(universityDao.findAllAnswers());
	}
	function findAnswerById(req, res) {
		res.json(universityDao.findAnswerById(req.params['aid']))
	}
	function findStudentById(req, res) {
		res.json(universityDao.findStudentById(req.params['sid']))
	}
	function findAllQuestions(req, res) {
		res.json(universityDao.findAllQuestions());
	}
	function findQuestionById(req, res) {
		res.json(universityDao.findQuestionById(req.params['qid']))
	}
	function createQuestion(req, res) {
		res.json(universityDao.createQuestion(req.body))
	}
	function updateQuestion(req, res) {
		res.json(universityDao.updateQuestion(req.body))
	}
	function studentAnswerQuestion(req, res) {
		res.json(universityDao.answerQuestion(req.params['sid'], req.params['qid'], req.body))
	}
	function findAllAnswersByQuestion(req, res) {
		res.json(universityDao.findAnswersByQuestion(req.qid))
	}
	function findAllAnswersByStudent(req, res) {
		res.json(universityDao.findAnswersByStudent(req.sid))
	}
	function findAllAnswersByStudentForQuestion(req, res) {
		res.json(universityDao.findAllAnswersByStudentForQuestion(req.sid, req.qid))
	}
	function createAnswer(req, res) {
		res.json(universityDao.createAnswer(req.body))
	}
	
	app.post("/api/student", createStudent);
	app.get("/api/student", findAllStudents);
	app.get("/api/student/:sid", findStudentById);
	app.put("/api/student/:sid", updateStudent);
	app.delete("/api/student/:sid", deleteStudent);
	app.get("/api/question", findAllQuestions);
	app.post("/api/question", createQuestion);
	app.get("/api/question/:qid", findQuestionById);
	app.put("/api/question/:sid", updateQuestion);
	app.post("/api/student/:sid/question/:qid/answer", studentAnswerQuestion);
	app.get("/api/answer", findAllAnswers);
	app.post("/api/answer", createAnswer);
	app.get("/api/answer/:aid", findAnswerById);
	app.get("/api/question/:qid/answer", findAllAnswersByQuestion);
	app.get("/api/student/:sid/answer", findAllAnswersByStudent);
	app.get("/api/student/:sid/question/:qid/answer", findAllAnswersByStudentForQuestion);
	app.get("/api/question/:qid/student/:sid/answer", findAllAnswersByStudentForQuestion);
}