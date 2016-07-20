// Convert speed of light into centimeters/nanoseconds
//speed of light 299792458 meters/second
//100 centimeters = 1 meter
// 1 nanosecond = 1.0/1000000000 seconds

var light = function(distance, time) {
  var cent = distance * 100;
  var nano = time / 1000000000;
  return cent + " centimeters and " + nano + "nanoseconds";
};

console.log(light(299792458, 1));
