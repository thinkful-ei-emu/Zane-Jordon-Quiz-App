/* eslint-disable strict */



class Quiz {

  constructor(){
    this.unasked = [];
    this.asked = [];
    this.score = 0;
    this.scoreHistory = [];
    this.active = false;
  }


  start(){
    this.unasked = [];
    this.asked = [];
    this.score = 0;
    this.active = true;
  }

  //   currentQuestion(){
  //     return this.asked[0];
  //   }

  nextQuestion(){
    if(this.unasked.length){
      this.asked.unshift(this.unasked.shift());
      return this.asked[0];

    }
  }

}