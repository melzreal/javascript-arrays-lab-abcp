
kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(n){
  kittens.push(n);
  
  return kittens;
  
}


function destructivelyPrependKitten(n){
   kittens.unshift(n);
  
  return kittens;
  
}

function destructivelyRemoveLastKitten(){
   kittens.shift(0,kittens.length-1);
  
  return kittens;
  
}