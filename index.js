;(function() {

  // set visibility of invalid integer warning
  var set_nag = function(name, new_value) {
    nag = document.getElementById('nag-' + name);
    if (new_value === 'on') nag.style.display = 'inline-block';
    else if (new_value === 'off') nag.style.display = 'none';
  }


  // attempt to read integer from a field
  // set_nag on or off depending on success
  var get_int = function(input_id) {
    var str = document.getElementById(input_id).value;
    var int_regex = /^(0|-?[1-9]\d*)$/
    var value = parseInt(str.match(int_regex));

    // match will return null if user entered invalid integer
    // parseInt(null) == NaN
    // NaN is the only value in js that is not equal to itself
    // in this case, we nag the user and return undefined
    if (value != value) {
      set_nag(input_id, 'on');
      return undefined;
    }

    set_nag(input_id, 'off');
    return value;
  }


  // perform calculation
  var do_operation = function(op) {
    var x = get_int('x');
    var y = get_int('y');
    if (x === undefined || y === undefined) return; 

    var result = document.getElementById('result');

    if (op === '+') answer = x + y; 
    else if (op === '-') answer = x - y; 

    result.innerHTML = x + " " + op + " " + y + " = " + answer;
  }


  // create click handlers. 
  var add_btn = document.getElementById('add');
  var sub_btn = document.getElementById('subtract');

  add_btn.onclick = function() { do_operation('+'); }
  sub_btn.onclick = function() { do_operation('-'); }

})();
