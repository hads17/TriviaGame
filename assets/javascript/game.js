// All of my global variables.
var questionBtn;
var i;
var currentIndex;
var currentAnswer;
var currentQuestion;
var currentQuestionList;
var timeRemaining;
var timerStatus;
var clock;
var scoreCount = {
    correct: null,
    incorrect: null,
    unanswered: null,
}
var timeLimits = {
    questionTime: 1000,
}

//question object list
var questions = [{
        question: 'How many rings of power were given to man?',
        correctAnswer: '9',
        answers: ['5', '6', '3', '9'],
        gif: '<img src="assets/images/question1Gif.gif" alt="question1Gif">',
    },

    {
        question: 'Who is the true king of Gondor?',
        correctAnswer: 'Aragorn',
        answers: ['Samwise Gamgee ', 'Boromir', 'Aragorn', 'Legolas'],
        gif: '<img src="assets/images/question2Gif.gif" alt="question2Gif">',
    },

    {
        question: 'Who participated in the battle of isengard?',
        correctAnswer: 'Saurumons Army | the Ents',
        answers: ['Saurumons Army | the Ents', 'Saurumons Army | King Theodens army', 'Orcs of Dol Gulder | the Galadhrim of Lothlorien.', 'Saurons Army | Gondors Army'],
        gif: '<img src="assets/images/question3Gif.gif" alt="question3Gif">',
    },

    {
        question: 'How does farmer Maggot keep people off his farm, Bamfurlong?',
        correctAnswer: 'A pack of dogs',
        answers: ['Magical Barriers', 'A pack of dogs', 'A shape-shifiting man/bear', 'A swarm of angry bees'],
        gif: '<img src="assets/images/question4Gif.gif" alt="question4Gif">',
    },

    {
        question: 'How is the witch king killed?',
        correctAnswer: 'Eowin stabs him',
        answers: ['Legolas shot him with an arrow', 'his fell-beast ate him', 'Eowin stabs him', 'Gandalf unleashes a secret magic'],
        gif: '<img src="assets/images/question5Gif.gif" alt="question5Gif">',
    },

]

//initializeing function when the page is loaded
var int = function () {
    scoreCount.correct = 0;
    scoreCount.incorrect = 0;
    scoreCount.unanswered = 0;
    currentIndex = 0;
    timeRemaining = 10;
    timeStatus = false;
    currentAnswer = questions[currentIndex].correctAnswer;
    currentQuestion = questions[currentIndex].question;
    currentQuestionList = questions[currentIndex].answers;
    $('#correctScreen, #incorrectScreen, #unansweredScreen, #questionScreen, #endScreen').hide();
    $('#startScreen').show();
}

//Function where when called will add the text for the current question
var intQuestion = function () {
    $('#question').html(questions[currentIndex].question);
};

//Function where when called will add the text for the current answer list
var intQuestionList = function () {
    for (i = 0; i < currentQuestionList.length; i++) {
        var questionBtn = $('<button>');
        questionBtn.addClass('questionBtn block');
        questionBtn.attr('data-answer', currentQuestionList[i]);
        questionBtn.text(currentQuestionList[i]);
        $("#questionList").append(questionBtn);
    };
}

//Function that runs the decrement of the amount of time allowed in a question
var timer = function () {
    if (timeStatus === false) {
        clock = setInterval(increment, timeLimits.questionTime);
        timeStatus = true;
    }
};

//a function to work only specifically for the timer functione
var increment = function () {
    if (timeRemaining <= 0) {
        console.log('correct!')
        $('#questionScreen').hide()
        $('#unansweredScreen').show()
        $('#questionList').empty();
        scoreCount.unanswered++;
        currentIndex++;
        if (questions[currentIndex]) updateIndex();
        stopTimer()
    } else {
        timeRemaining--;
        $('#timeRemain').html(timeRemaining);
    }
};

var stopTimer = function () {
    clearInterval(clock);
    timeStatus = false;
    timeRemaining = 10;
    $('#timeRemain').html(timeRemaining);
};

var updateIndex = function () {
    currentQuestionList = questions[currentIndex].answers;
    currentAnswer = questions[currentIndex].correctAnswer;
    currentQuestion = questions[currentIndex].question;
    currentQuestionList = questions[currentIndex].answers;
    stopTimer()
}

//All of my jquery commands that use the functions above to run the Trivia Game
$(document).ready(function () {
    int();

    //My start button that initilizes the questionScreen
    $('#startBtn').click(function () {
        $('#startScreen').hide();
        $('#questionScreen').show();
        intQuestion();
        intQuestionList();
        timer();
    });

    //Thie if and else function decides if the player selects the correct answer and takes them to the proper screen.
    $('#questionScreen').on('click', '.questionBtn', function (event) {
        if ($(this).data('answer') == currentAnswer) {
            console.log('correct!')
            $('#questionScreen').hide()
            $('#correctScreen').show()
            $('#questionList').empty();
            $('#correctGif').html(questions[currentIndex].gif)
            scoreCount.correct++;
            currentIndex++;
            if (questions[currentIndex]) updateIndex();
            stopTimer();
        } else {
            console.log('incorrect!')
            $('#questionScreen').hide()
            $('#incorrectScreen').show()
            $('#questionList').empty();
            $('#correctedAnswer').html(questions[currentIndex].correctAnswer);
            scoreCount.incorrect++;
            currentIndex++;
            if (questions[currentIndex]) updateIndex();
            stopTimer();
        }
    });

    //This if and else function determines if you have completed all the questions or
    //if you have run out of questions and takes you to the proper screens accordingly
    $('#correctScreen, #incorrectScreen, #unansweredScreen').on('click', '#nextBtn', function () {
        if (currentIndex === questions.length) {
            $('#correctScreen, #incorrectScreen, #unansweredScreen').hide();
            $('#endScreen, #scoreDisplay').show();
            $('#scoreCorrect').html(scoreCount.correct);
            $('#scoreIncorrect').html(scoreCount.incorrect);
            $('#scoreUnanswered').html(scoreCount.unanswered);
            stopTimer();
        } else {
            intQuestion();
            intQuestionList();
            $('#questionScreen').show();
            $('#correctScreen, #incorrectScreen, #unansweredScreen').hide();
            timer();
        }
    });

    //The restart button on the end screen that reinitializing
    $('#endScreen').on('click', '#restartBtn', function () {
        int();
    });
});