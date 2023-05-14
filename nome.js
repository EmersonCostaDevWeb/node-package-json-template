const nome = process.argv[2]
const idade = process.argv[3]
const novaidade =  Number(idade) +7

console.log(`Ola${nome} !voce tem ${idade} anos`)
console.log(`Em sete anos voce terá ${novaidade}`)