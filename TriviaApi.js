class TriviaApi {
    static BASE_URL = "https://opentdb.com/api.php?amount=5";

    getQuestions(){
        return fetch(BASE_URL)
        .then(res => res.json());
        // .then(jsonData => console.log(jsonData));
    }


}