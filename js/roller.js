function main () {
  'use strict';

  var dieNumber = document.getElementById('number'),
      dieSides = document.getElementById('sides'),
      submit = document.getElementById('submit'),
      rolls = document.getElementById('rolls'),
      plus = document.getElementById('plus'),
      clear = document.getElementById('clear'),
      log = document.getElementById('log'),
      result = document.getElementById('result');

  submit.addEventListener('click', function() {

    // Clear the results on every iteration and add li to log
    result.innerHTML = '';
    rolls.innerHTML = '';
    var i, li, span, strong, total = 0, calc;

    li = log.appendChild( document.createElement('li') );

    // Do dice calculations
    for (i = 0; i < dieNumber.value; i++) {
      calc = Math.floor( Math.random() * dieSides.value + 1 );
      total += calc;

      rolls.appendChild( document.createTextNode( calc + ' ' ) );
      li.appendChild( document.createTextNode( calc + ' ' ) );

    }

    // Display the results
    span = result.appendChild( document.createElement( 'span' ) );
    span.appendChild( document.createTextNode( total+parseInt( plus.value, 10 ) ) );

    if ( plus.value > 0 ) {
      rolls.appendChild( document.createTextNode( '+ ' + plus.value ) );
    }

    li.appendChild( document.createTextNode( '+ ' + plus.value ) );
    strong = li.appendChild( document.createElement('strong') );
    strong.appendChild( document.createTextNode(' Total: ' + ( total + parseInt( plus.value, 10 ) ) ) );

  });

  clear.addEventListener( 'click', function() {

    log.innerHTML = '';

  });

}

window.onload = function () {
  'use strict';
   main();
};

