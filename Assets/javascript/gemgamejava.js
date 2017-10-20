$(document).ready(function () {

    gems = ['#button1', '#button2', '#button3', '#button4'];

    var counter = 0;
    var wins = 0;
    var losses = 0;
    $("#win").text(wins);
    $("#lose").text(losses);

    newCrystals();
    newGame();

    function newCrystals() {
        var numbers = []

        while (numbers.length < 4) {
            var RandomNumber = Math.ceil(Math.random() * 12)
            numbers.push(RandomNumber)
        }
        console.log(numbers)


        //Assigning random values to each crystal.

        for (i = 0; i < numbers.length; i++) {
            var redGem = $('#button1');
            redGem.attr('data-num', numbers[0]);
            $('#button1').append(redGem);
            console.log(numbers[i])

            var blueGem = $('#button2');
            blueGem.attr('data-num', numbers[1]);
            $('#button2').append(blueGem);
            console.log(numbers[i])

            var greenGem = $('#button3');
            greenGem.attr('data-num', numbers[2]);
            $('#button3').append(greenGem);
            console.log(numbers[i])

            var yellowGem = $('#button4');
            yellowGem.attr('data-num', numbers[3]);
            $('#button4').append(yellowGem);
            console.log(numbers[i])

        }
    }

    //Running a new game.

    function newGame() {
        rungame();        

        counter = 0;

        $('#yourScore').text(counter);

        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };

        var numberToGuess = randomIntFromInterval(19, 120);
        console.log(numberToGuess);

        $('.value').html(numberToGuess);

        $('#button1').on('click', function () {
            counter = counter + parseInt($(this).data('num'));
            $('#yourScore').text(counter);
            rungame();
        })

        $('#button2').on('click', function () {
            counter = counter + parseInt($(this).data('num'));
            $('#yourScore').text(counter);
            rungame();
        })

        $('#button3').on('click', function () {
            counter = counter + parseInt($(this).data('num'));
            $('#yourScore').text(counter);
            rungame();
        })

        $('#button4').on('click', function () {
            counter = counter + parseInt($(this).data('num'));
            $('#yourScore').text(counter);
            rungame();
        })
        function rungame() {
            if (counter == numberToGuess) {
                $('#status').text('You win!');
                wins++;
                $('#win').text(wins);
                console.log(wins)
                $('#crystals').empty();
                newCrystals();
                newGame();
            } else if (counter > numberToGuess) {
                $('#status').text('Bummer dude.')
                losses++;
                $('#lose').text(losses);
                console.log(losses);
                $('crystals').empty();
                newCrystals();
                newGame();
            }
        }
    }
    
});