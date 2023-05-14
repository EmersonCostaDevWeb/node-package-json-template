import { countries } from "./countries.js";
 const pais  = process.argv[2]
if (!pais){
    console.log("insira valor");
}else {
    const listaFiltrada = countries.filter((item)=>{
        return item.code.toLowerCase().includes(pais.toLowerCase())
    })
    console.table(listaFiltrada)
}
  