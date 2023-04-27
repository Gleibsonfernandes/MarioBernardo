let mario = document.querySelector('.mario');
let mario_img = document.querySelector('.mario_img');
let cano = document.querySelector('.cano');
let nuvem = document.querySelector('.nuvem');
let game_over = document.querySelector('.gameOver')
let cont_pontos = document.querySelector('.cont')
let progresso = document.querySelector('.progresso')
let cont = 0;
const jump = () =>{
    mario.classList.add('pulo')

    setTimeout(() =>{
        mario.classList.remove('pulo'); 
    }, 500); 
}

const loop = setInterval(() =>{
    let position_cano = cano.offsetLeft;
    let position_nuvem =nuvem.offsetLeft;
    let mario_position = +window.getComputedStyle(mario).bottom.replace('px', '');
    let pontos = document.querySelector('.pontos')
    
    //console.log("posicao do cano:" + position_cano);

    
     
    if(position_cano <= 60 && mario_position <52 && position_cano >0 ){
        cano.style.animation ="none";
        cano.style.left = `${position_cano}px`
        nuvem.style.animation ="none"; 
        nuvem.style.left = `${position_nuvem}px`
        game_over.style.display='block'

        mario.style.animation ="none";
        mario.style.bottom = `${mario_position}px`;
        mario_img.setAttribute('src', '../img/mario_gameOver.png')
        mario_img.style.width ='50px';
        progresso.innerText=`${ ''}`;
    }
    // console.log(position_cano);
    if(Number(position_cano) <-55 ){
        let pontos = cont+=1030;
        
        cont_pontos.innerText=`${pontos}`

            if(pontos > 20000){
                 progresso.innerText=`${ 'Verry nyce!'}`;

                 setTimeout(() =>{
                    progresso.innerText=`${ ''}`;
                }, 3000); 
             }
    }

    
}, 10)

    

   
   

document.addEventListener('keydown', jump);





