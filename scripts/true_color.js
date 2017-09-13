function mapConst(arr, c, f) {
  return arr.map(function(ai,i){return f(ai, c, i);});
}

function dotSS(a, b) {
  return a * b;
}

//vector * scalar
function dotVS(v, s) {
  return mapConst(v, s, dotSS);
}

var gain = 2.5;

return dotVS([B04, B03, B02], gain);
