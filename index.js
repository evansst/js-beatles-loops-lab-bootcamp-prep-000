// add solution here
function theBeatlesPlay(musicians,instruments) {
  var array = [ ]
  for (let i = 0; i < musicians.length + 1; i += 1 ){
    var string = musicians[i] + " plays " + instruments[i]
    array.push(string);
  }
  return array
}