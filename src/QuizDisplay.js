import $ from 'jquery';
import Renderer from './lib/Renderer';


class QuizDisplay extends Renderer {
  getEvents() {
    return {
      'click .start-quiz': 'handleStart',
      'submit .submit-answer': 'handleSubmit',
    };
  }


  _generateIntro() {
    return `
      <div>
        <p>
          Welcome to the Trivia Quiz
        </p>
        <p>
          Test your smarts and see how high you can score!
        </p>
      </div>
      <div class="buttons">
        <button class="start-quiz">Start Quiz</button>
      </div>
    `;
  }

  _generateQuiz(){
    return `
      <div>
        <p>${this.model.asked[0].text}</p>
        <p>
        <form role="form" class="submit-answer">
        <input class="answer" type="radio" name="answer" value="${this.model.asked[0].answers[0]}"/> ${this.model.asked[0].answers[0]}<br>
        <input class="answer" type="radio" name="answer" value="${this.model.asked[0].answers[1]}"/> ${this.model.asked[0].answers[1]}<br>
        <input class="answer" type="radio" name="answer" value="${this.model.asked[0].answers[2]}"/> ${this.model.asked[0].answers[2]}<br>
        <input class="answer" type="radio" name="answer" value="${this.model.asked[0].answers[3]}"/> ${this.model.asked[0].answers[3]}<br>
        <button type="submit" value="Submit">Submit</button>
        </form>
        </p>
      </div>
    `;
}

  _generateEndGame(){
    return `
    <div>
    <p>
    ${this.model.message}
    </p>
    <p>
    Your final score was ${} out of 5.
    </p>
    <p>HIGHSCORE VARIABLE</p>
    </div>
    <div class="buttons">
    <button class="start-quiz">Play Again?</button>
    </div>
    `;
  }

  template() {
    let html = '';
    if ((this.model.active === false)&&(this.model.asked.length === 5)){
      html = this._generateEndGame();
   } else if (this.model.asked.length === 0) {
      // Quiz has not started
      html = this._generateIntro();
    } else {
      html = this._generateQuiz();
    }
    
    return html;
  }

  handleStart() {
    this.model.startGame();
  }
  


  handleSubmit(){
    event.preventDefault();
    if (this.model.unasked.length === 0){
      this.endGame();
    }else {
    const answer = event.target.answer.value;
    console.log(answer);
    this.model.answerCurrentQuestion(answer);
    this.model.nextQuestion();
    this.model.update();
    }
  }



  

  
}

export default QuizDisplay;