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
            var numbers = gems

            while (numbers.length < 4) {
                var RandomNumber = Math.ceil(Math.random() * 12)
            }
            console.log(numbers);
        }



        for (i = 0; i < numbers.length; i++) {
            var redGem = $('#button1');
            redGem.attr('data-num', numbers[i]);
            redGem.attr('alt', 'crystals');
            redGem.addClass('crystalImage')
            $('#crystals').append(redGem);

            var blueGem = $('#button2');
            blueGem.attr('data-num', numbers[i]);
            blueGem.attr('alt', 'crystals');
            blueGem.addClass('crystalImage')
            $('#crystals').append(blueGem);

            var greenGem = $('#button3');
            greenGem.attr('data-num', numbers[i]);
            greenGem.attr('alt', 'crystals');
            greenGem.addClass('crystalImage')
            $('#crystals').append(greenGem);

            var yellowGem = $('#button4');
            yellowGem.attr('data-num', numbers[i]);
            yellowGem.attr('alt', 'crystals');
            yellowGem.addClass('crystalImage')
            $('#crystals').append(yellowGem);

        }
    },

    function newGame() {

        counter = 0;

        $('#yourScore').text(counter);

        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        var numberToGuess = randomIntFromInterval(19, 120);
        console.log(numberToGuess);

        $('.value').text(numberToGuess);

        $('#button1').on('click', function () {
            counter = counter + parseInt($(this).data('num'));
        })

        $('#button2').on('click', function () {
            counter = counter + parseInt($(this).data('num'));
        })

        $('#button3').on('click', function () {
            counter = counter + parseInt($(this).data('num'));
        })

        $('#button4').on('click', function () {
            counter = counter + parseInt($(this).data('num'));
        })

        $('#yourScore').text(counter)

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
    });