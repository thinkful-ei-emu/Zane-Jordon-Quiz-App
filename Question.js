/* eslint-disable strict */
class Question {
  constructor(obj){
    this.text =obj.question;
    this.answerPool = [obj.correct_answer, ...obj.incorrect_answers];
    this.correctAnswer = obj.correct_answer;
    this.userAnswer = null;
  }

  answerStatus(){}

  submitAnswer(answer){
    this.userAnswer = answer;
  }

}