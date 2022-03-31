const frutas = ['laranja', 'banana', 'uva'];
let [fruta1, , fruta3] = frutas

console.log(fruta1)
console.log(fruta3)

const pessoa = {
    nome: 'Carol',
    idade: 19,
    pais: 'Brasil',
    idioma: 'português'
}

let {idade, idioma} = pessoa
console.log(idade)
console.log(idioma)

const localidade = ({pais, idioma}) => `Você mora no ${pais} e fala ${idioma}`
console.log(localidade(pessoa))