function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
    res.innerHTML =`Idade calculdada: ${idade} anos.`
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
        gênero = 'Homem'
        if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src','menino.png')
        }
         else if(idade >= 10 && idade < 21){
            // jovem
            img.setAttribute('src','homemjovem.png')
        }
        else if(idade >= 21 && idade < 50){
            //adulto
            img.setAttribute('src','homemadulto.png')
        }
        else{
            //idoso
            img.setAttribute('src','homemidoso.png')
        }
       }
       else if(fsex[1].checked){
        gênero = 'Mulher'
        if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src','menina.png')
        }
         else if(idade >= 10 && idade < 21){
            // jovem
            img.setAttribute('src','mulherjovem.png')
        }
        else if(idade >= 21 && idade < 50){
            //adulto
            img.setAttribute('src','mulheradulta.png')
        }
        else{
            //idoso
            img.setAttribute('src','mulheridosa.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }
}