function first(){
    let num = document.getElementById('numbInput').value; //Requerimento do input do número do cartão
    let cardNumber = document.getElementById('numberInCard'); //Requerimento da posição dos números no layout do cartão
    
    let cardName = document.getElementById('nameInCard');
    let nam = document.getElementById('nameInput').value;

    let valityInCard = document.getElementById('valityInCard');
    let valityMonth = document.getElementById('month').value;
    let valityYear = document.getElementById('year').value;
    let month;
    let year;

    let cvvInCard = document.getElementById('cvvInCard');
    let cvv = document.getElementById('cvvInput').value;

    const errorNumb = document.getElementById('numbError');
    const errorName = document.getElementById('nameError');
    const errorCVV = document.getElementById('cvvError');

    let firstFourNum = num.slice(0,4); //Separa os 4 primeiros números fornecidos
    let secondFourNum = num.slice(4,8); //Separa os 4 segundos números fornecidos
    let thirdFourNum = num.slice(8,12); //Separa os 4 terceiros números fornecidos
    let fourthFourNum = num.slice(12,16); //Separa os 4 últimos números fornecidos

    let firstNumber = firstFourNum.slice(0,1); //Separa o primeiro número
    let bankLogo = document.querySelector('#bankLogo');

    // Linha 13-22 (Responsável pelo input number e suas verificações)
    if(num.length == 16 && document.getElementById('show').checked){
        let numConcatenation = `${firstFourNum}`+' '+`${secondFourNum}`+' '+`${thirdFourNum}`+' '+`${fourthFourNum}`;
        cardNumber.innerHTML = numConcatenation;  
    }else if(num.length == 16){
        let numConcatenation = `${firstFourNum}`+' '+'****'+' '+'****'+' '+`${fourthFourNum}`;
        cardNumber.innerHTML = numConcatenation; //Pega os dados do input com espaços adicionados (mas escondendo 8 números) e coloca como números do cartão      
    }else{
        errorNumb.style.color = 'red';
    }

    //Coloca o nome fornecido em maiúsculo
    cardName.innerHTML = nam.toUpperCase(); //Pega os dados do input e coloca como nome do cartão

    // Linha 33-107 (Responsável por atribuir o mês e o ano ao cartão)
    switch (valityMonth) {
        case '0':
            month = "01"
            break;
        case '1':
            month = "02"
            break;
        case '2':
            month = "03"
            break;
        case '3':
            month = "04"
            break;
        case '4':
            month = "05"
            break;
        case '5':
            month = "06"
            break;
        case '6':
            month = "07"
            break;
        case '7':
            month = "08"
            break;
        case '8':
            month = "09"
            break;  
        case '9':
            month = "10"
            break;
        case '10':
            month = "11"
            break;
        case '11':
            month = "12"
            break;                                             
        default:
            alert('Erro! Selecione um mês válido.')
            break;
    }
    switch (valityYear) {
        case '0':
            year = "22"
            break;
        case '1':
            year = "23"
            break;
        case '2':
            year = "24"
            break;
        case '3':
            year = "25"
            break;
        case '4':
            year = "26"
            break;
        case '5':
            year = "27"
            break;
        case '6':
            year = "28"
            break;
        case '7':
            year = "29"
            break;
        case '8':
            year = "20"
            break;                                    
        default:
            alert('Erro! Selecione um ano válido.')
            break;
    }
    valityInCard.innerHTML = `${month}`+"/"+`${year}`

    //Responsável por verificar a validade do CVV
    if(cvv.length == 3){
    cvvInCard.innerHTML = cvv
    }else{
        errorCVV.style.color = 'red';
    }

}