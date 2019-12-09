var students = require('../data/students.json');
var questions = require('../data/questions.json');
var answers = require('../data/answers.json');
var studentModel = require('../models/student.model.server');

export function createStudent(student) {
	students.push(student);
	return students;
}
export function createQuestion(question) {
	questions.push(question);
	return questions;
}
export function answerQuestion(studentId, questionId, answer) {
	// TODO
}
export function updateStudent(student) {
	// NOT REQUIRED
}
export function updateQuestion(question) {
	// NOT REQUIRED
}
export function deleteQuestion(qid) {
	// NOT REQUIRED
}
export function deleteStudent(sid) {
	// NOT REQUIRED
}
export function findStudentByUsername(username) {
	// return studentModel.find({username: username})
	return studentModel.findOne({ username: username })
}
export function findAllStudents() {
	return students;
}
export function findStudentById(sid) {
	return students.find(student => student._id == sid)
}
export function findAllQuestions() {
	return questions;
}
export function findQuestionById(qid) {
	return questions.find(question => question._id == qid)
}
export function findAllAnswers() {
	return answers;
}
export function findAnswerById(aid) {
	return answers.find(a => a._id == aid)
}
export function findAnswersByStudent(sid) {
	// TODO
}
export function findAnswersByQuestion(qid) {
	// TODO
}