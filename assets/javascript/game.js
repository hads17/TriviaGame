var questions = [
    {
        question1: {
            question: 'How many rings of power were given to man?',
            correctAnswer: '9',
            answers: ['5', '6', '3', '9'],
            gif: "../images/question1Gif.gif",
        }
    },

    {
        question2: {
            question: 'Who is the true king of Gondor?',
            correctAnswer: 'Aragorn',
            answers: ['Samwise Gamgee ', 'Boromir', 'Aragorn', 'Legolas'],
            gif: "../images/question2Gif.gif",
        }
    },
    
    {
        question3: {
            question: 'Who participated in the battle of isengard?',
            correctAnswer: 'Saurumons Army',
            answers: ['Saurumons Army | the Ents', 'Saurumons Army | King Theodens army', 'Orcs of Dol Gulder | the Galadhrim of Lothlorien.', 'Saurons Army | Gondors Army'],
            gif: "../images/question1Gif.gif",
        }
    },
    
    {
        question4: {
            question: 'How does farmer Maggot keep people off his farm, Bamfurlong?',
            correctAnswer: 'A pack of dogs',
            answers: ['Magical Barriers', 'A pack of dogs', 'A shape-shifiting man/bear', 'A swarm of angry bees'],
            gif: "../images/question1Gif.gif",
        }
    },
    
    {
        question5: {
            question: 'How is the witch king killed?',
            correctAnswer: 'Eowin stabs him',
            answers: ['Legolas shot him with an arrow', 'his fell-beast ate him', 'Eowin stabs him', 'Gandalf unleashes a secret magic'],
            gif: "../images/question1Gif.gif",
        }
    },
    
]

$(document).ready(function(){
    $('#startBtn').click(function(){
        $('#startScreen').hide();
        console.log('hello')
    });

});