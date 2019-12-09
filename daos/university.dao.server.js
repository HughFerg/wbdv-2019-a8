var students = require('../data/students.json');
var questions = require('../data/questions.json');
var answers = require('../data/answers.json');
var studentModel = require('../models/student.model.server');

module.exports = {
	createStudent,
	createQuestion,
	createAnswer,
	answerQuestion,
	updateStudent,
	updateQuestion,
	deleteQuestion,
	deleteStudent,
	findStudentByUsername,
	findAllStudents,
	findStudentById,
	findAllQuestions,
	findQuestionById,
	findAllAnswers,
	findAnswerById,
	findAnswersByStudent,
	findAnswersByQuestion,
	findAllAnswersByStudentForQuestion
}

function createStudent(student) {
	students.push(student);
	return students;
}
function createQuestion(question) {
	questions.push(question);
	return questions;
}
function createAnswer(answer) {
	answers.push(answer);
	return answers;
}
function answerQuestion(studentId, questionId, answer) {
	answer = { ...answer, student: studentId, question: questionId };
	answers.push(answer);
	return answers;
}
function updateStudent(student) {
	// NOT REQUIRED
}
function updateQuestion(question) {
	// NOT REQUIRED
}
function deleteQuestion(qid) {
	// NOT REQUIRED
}
function deleteStudent(sid) {
	// NOT REQUIRED
}
function findAllAnswersByStudentForQuestion(sid, qid) {
	// NOT REQUIRED
}
function findStudentByUsername(username) {
	// return studentModel.find({username: username})
	return studentModel.findOne({ username: username })
}
function findAllStudents() {
	return students;
}
function findStudentById(sid) {
	return students.find(student => student._id == sid)
}
function findAllQuestions() {
	return questions;
}
function findQuestionById(qid) {
	return questions.find(question => question._id == qid)
}
function findAllAnswers() {
	return answers;
}
function findAnswerById(aid) {
	return answers.find(a => a._id == aid)
}
function findAnswersByStudent(sid) {
	return answers.findAll(a => a.student == sid);
}
function findAnswersByQuestion(qid) {
	return answers.findAll(a => a.question == qid);
}