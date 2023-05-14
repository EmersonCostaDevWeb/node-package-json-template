import {countries} from "./countries.js"
const nomedePais = process.argv[2]
const sigla = process.argv[3]
console.log(nomedePais , sigla)
if(!nomedePais && !sigla){
    console.log("insira valores")
}else{
    const novoPais ={
        name:nomedePais,
        code: sigla
    }
    countries.push(novoPais)
    console.table(countries)
}