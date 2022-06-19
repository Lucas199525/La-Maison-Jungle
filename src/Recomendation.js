

function Recomendation(){

const currentMonth= new Date().getMonth();
const isSpring = currentMonth >=2 && currentMonth <=5 

if(!isSpring){
    return <h2> C'est n'est pas le moment de rempoter </h2>
   
}
else{
    return <h2> C'est le printemps, rempotez! </h2>
}


}
export default Recomendation