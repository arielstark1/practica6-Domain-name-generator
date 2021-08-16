let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['.com','.net','.us','.io'];


  function get_excuse(){

   


    numero1=Math.floor(Math.random()*pronoun.length)
    let palabra1=pronoun[numero1];
    


    numero2=Math.floor(Math.random()*adj.length)
    let palabra2=adj[numero2];
    



    numero3=Math.floor(Math.random()*noun.length)
    let palabra3=noun[numero3];
    



    

    let frase1=palabra1+" "+palabra2+" "+palabra3

    console.log(frase1);


    document.querySelector(".frase1").innerHTML=frase1;

}
get_excuse()
