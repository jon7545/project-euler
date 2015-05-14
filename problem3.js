/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/
//welp seems like I don't know math gotta learn it...//
var targ = 1000;
var prime = 0;

for(var i = 0; i <= targ; i++) {
  if(targ % i === 0) {
    prime /= i;
    console.log(i);
  }
};
