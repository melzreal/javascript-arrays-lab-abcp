
kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(n){
  kittens.push(n);
  
  return kittens;
  
}


function destructivelyPrependKitten(n){
   kittens.shift(n);
  
  return kittens;
  
}
