function validar(valor){
    let i = 0;
    if (valor.match(/[A-z]/)){
        i++;
        document.getElementById('low').style.color= '#BEFFB2';
    }else{
        document.getElementById('low').style.color= '';
    }
    
    if(valor.match(/[A-Z]/)){
        i++;
        document.getElementById('up').style.color= '#BEFFB2';
    }else{
        document.getElementById('up').style.color= '';
    }
    if(valor.match(/\d/)) {
        i++;
        document.getElementById('number').style.color= '#BEFFB2';
    }else{
        document.getElementById('number').style.color= '';
    }
    if(valor.length > 8){
        i++;
        document.getElementById('characters').style.color= '#BEFFB2';
    }else{
        document.getElementById('characters').style.color= '';
    }
    if(i === 0 ){
        document.getElementById('Card-rank').innerHTML = 'Very bad';
        document.getElementById('Card-rank').style.backgroundColor = '#FF6666 ';
        document.getElementById('Card-rank').style.display = 'block ';
    }else if ( i === 1 ){
        document.getElementById('Card-rank').innerHTML = 'Bad';
        document.getElementById('Card-rank').style.backgroundColor = '#FFAC66';
        document.getElementById('Card-rank').style.display = 'block ';
    }else if (i === 2){
        document.getElementById('Card-rank').innerHTML = 'Normal';
        document.getElementById('Card-rank').style.backgroundColor = '#FFE366 ';
        document.getElementById('Card-rank').style.display = 'block ';
    }else if (i === 3){
        document.getElementById('Card-rank').innerHTML = 'Good';
        document.getElementById('Card-rank').style.backgroundColor = '#E1FF66  ';
        document.getElementById('Card-rank').style.display = 'block ';
    }else if (i === 4){
        document.getElementById('Card-rank').innerHTML = 'Very nice';
        document.getElementById('Card-rank').style.backgroundColor = '#A5FF66 ';
        document.getElementById('Card-rank').style.display = 'block ';
    }


        
    
    
    
}