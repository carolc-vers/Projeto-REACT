//Funções Padronizadas do JavaScript
function ola(){
    return 'Olá!'
}
console.log(ola());

function olaPessoa(nome){
    return `Olá ${nome}`
}
console.log(olaPessoa('Ana Paula'));

//Arrow Functions
const ola2 = () => {
    return 'Olá novamente!'
}
console.log(ola2());

const olaPessoa2 = (nome, idade) =>{
    return `Olá ${nome}, sua idade é ${idade} anos!`
}
console.log(olaPessoa2('Carolina', 18));

const olaPessoa3 = nome => `Olá novamente, ${nome}`;
console.log(olaPessoa3('Carol'));