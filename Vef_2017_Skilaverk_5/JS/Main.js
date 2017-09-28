//1. því að GetElementById vísar beint í id-ið á element
//2. Skilar öllum elements sem falla undir ákveðin class, t.d. var bleh = document.querySelectorAll(".del"); mun sína öll element sem falla under del classan

/*3. Nodelist er object sem heldur utan um önnur objects, eða nodes eftir að er búið að gera lista

var elements = document.getElementsByTagName('li'); //Finnur öll elements sem fall undir 'li'
if (elements.length > 0) //Ef elements hefur meira en núll færslur, það er að segja, einvher 'li' tög, þá keyrist næsti kóðinn
{
 var el = elements[2]; //Býr til object til að halda utan um þriðja li tagið, með því að vísa í það í nodelistanum
 el.className = 'cool'; //Gefir þriðja li tagið value-ið 'cool'
}
*/

/*4. getElementbyTagName setur öll valuin af ákveðnu html tagi í nodelist, og þar af leiðandi er hægt að nota það til að skila þau values, t.d.

var list = document.getElementsByTagName("ul")[0];
list.getElementsByTagName("li")[0].innerHTML = "Milk";
*/

//5. Flestir vafrar greina auð bil í kóða sem "textnodes" og því oft kemur textinn út öðruvísi en þú settir hann inn. Til að koma í veg fyrir þetta geturðu t.d. hreinsað út öll auð bil í kóðanum, eða að forðast því að nota DOM yfirhöfuð, eins og með að nota jQuery.

/*6.

let elList = document.getElementById('one');
var utkoma;
utkoma = elist.getElementsByTagName("li")[1];
*/

(function() {
  function buildQuiz() {
  	
    var output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {

      var answers = [];


      for (letter in currentQuestion.answers) 
      {
        answers.push(`<label><input type="radio" name="question${questionNumber}" value="${letter}">${letter} :${currentQuestion.answers[letter]}</label>`);
      }
      output.push(`<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`);
  }
);

    quizContainer.innerHTML = output.join("");
  }

  var quizContainer = document.getElementById("quiz");
  var myQuestions = [
    {
      question: "Who is the strongest?",
      answers: {
        a: "Goku",
        b: "Vegeta",
        c: "Majin Buu",
        d: "Hercule, the world's savior"
      },
      correctAnswer: "d"
    },
    {
      question: "Is DBZ a good show?",
      answers: {
        a: "Yes",
        b: "No"
      },
      correctAnswer: "a"
    }
    
  ];
  buildQuiz();
})();