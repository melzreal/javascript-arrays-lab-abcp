
kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(n){
  kittens.push(n);
  
  return kittens;
  
}


function destructivelyPrependKitten(n){
   kittens.unshift(n);
  
  return kittens;
  
}

function destructivelyPrependKitten(){
   kittens.shift();
  
  return kittens;
  
}