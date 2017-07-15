var questionBtn;
var i;
var currentIndex;
var currentAnswer;
var currentQuestion;
var currentQuestionList;
var questions = [{
        question: 'How many rings of power were given to man?',
        correctAnswer: '9',
        answers: ['5', '6', '3', '9'],
        gif: '../images/question1Gif.gif',
    },

    {
        question: 'Who is the true king of Gondor?',
        correctAnswer: 'Aragorn',
        answers: ['Samwise Gamgee ', 'Boromir', 'Aragorn', 'Legolas'],
        gif: "../images/question2Gif.gif",
    },

    {
        question: 'Who participated in the battle of isengard?',
        correctAnswer: 'Saurumons Army | the Ents',
        answers: ['Saurumons Army | the Ents', 'Saurumons Army | King Theodens army', 'Orcs of Dol Gulder | the Galadhrim of Lothlorien.', 'Saurons Army | Gondors Army'],
        gif: "../images/question1Gif.gif",
    },

    {
        question: 'How does farmer Maggot keep people off his farm, Bamfurlong?',
        correctAnswer: 'A pack of dogs',
        answers: ['Magical Barriers', 'A pack of dogs', 'A shape-shifiting man/bear', 'A swarm of angry bees'],
        gif: "../images/question1Gif.gif",
    },

    {
        question: 'How is the witch king killed?',
        correctAnswer: 'Eowin stabs him',
        answers: ['Legolas shot him with an arrow', 'his fell-beast ate him', 'Eowin stabs him', 'Gandalf unleashes a secret magic'],
        gif: "../images/question1Gif.gif",
    },

]

var scoreCount = {
    correct: null,
    incorrect: null,
    unanswered: null,
}

var timeLimits = {
    questionTime: 10,
    switchScreenTime: 3, 
}

var int = function(){
    scoreCount.correct = 0;
    scoreCount.incorrect = 0;
    scoreCount.unanswered = 0;
    currentIndex = 0;
    currentAnswer = questions[currentIndex].correctAnswer;
    currentQuestion = questions[currentIndex].question;
    currentQuestionList = questions[currentIndex].answers;
    $('#questionScreen').hide();
    $('#correctScreen').hide();
    $('#incorrectScreen').hide();
    $('#unansweredScreen').hide();
    $('#endScreen').hide();
}

var intQuestion = function(){
    $('#question').html(questions[currentIndex].question);
};

var intQuestionList = function(){
    for (i = 0; i < currentQuestionList.length; i++){
        var questionBtn = $('<button>');
        questionBtn.addClass('questionBtn block');
        questionBtn.attr('data-answer', currentQuestionList[i]);
        questionBtn.text(currentQuestionList[i]);
        $("#questionList").append(questionBtn);
    };
}



$(document).ready(function () {
    int();
   
    $('#startBtn').click(function () {
        $('#startScreen').hide();
        $('#questionScreen').show();
        intQuestion();
        intQuestionList();
    });

    $('#questionScreen').on('click', '.questionBtn', function(event){
       if($(this).data('answer') == currentAnswer) {
            console.log('correct!')
            $('#questionScreen').hide()
            $('#correctScreen').show()
            $('#questionList').empty();
            $('#correctGif').attr('src', questions[currentIndex].gif)
            scoreCount.correct++;
            currentIndex++;
            currentAnswer = questions[currentIndex].correctAnswer;
            currentQuestion = questions[currentIndex].question;
            currentQuestionList = questions[currentIndex].answers;
        } else {
            console.log('incorrect!')
            $('#questionScreen').hide()
            $('#incorrectScreen').show()
            $('#questionList').empty();
            $('#incorrectGif').attr('src', questions[currentIndex].gif)
            scoreCount.incorrect++;
            currentIndex++;
            currentQuestionList = questions[currentIndex].answers;
            currentAnswer = questions[currentIndex].correctAnswer;
            currentQuestion = questions[currentIndex].question;
            currentQuestionList = questions[currentIndex].answers;
        }
    });

    $('#correctScreen, #incorrectScreen, #unansweredScreen').on('click', function(){
        if (currentIndex === questions.length) {
           $('#correctScreen, #incorrectScreen, #unansweredScreen').hide(); 
           $('#endScreen, #scoreDisplay').show();
           $('#scoreCorrect').html(scoreCount.correct);
           $('#scoreIncorrect').html(scoreCount.incorrect);
           $('#scoreUnanswered').html(scoreCount.unanswered);
        } else {
            intQuestion();
            intQuestionList();
            $('#questionScreen').show();
            $('#correctScreen, #incorrectScreen, #unansweredScreen').hide();
        }
    });
    
    $('#endScreen').on('click', '#restartBtn', function(){
    scoreCount.correct = 0;
    scoreCount.incorrect = 0;
    scoreCount.unanswered = 0;
    currentIndex = 0;
    currentAnswer = questions[currentIndex].correctAnswer;
    currentQuestion = questions[currentIndex].question;
    currentQuestionList = questions[currentIndex].answers;
    $('#questionScreen').hide();
    $('#correctScreen').hide();
    $('#incorrectScreen').hide();
    $('#unansweredScreen').hide();
    $('#endScreen').hide();
    $('#startScreen').show();
    })
});