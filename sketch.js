//Fernando Ramos de Andrade
//turma 01
//https://youtu.be/3K-FlfNHq-M  #Não deixe de dar seu like#

var tela = 1;
var largura = 200;
var altura = 50;
var xMenu = 50;
var yMenu1 = 85;
var yMenu2 = 145;
var yMenu3 = 205;
var yMenu4 = 265;
var yMenu5 = 300;
var x = 20;
var respostacorreta=false;
var respostaerrada=false

var proximo = "";
var tentarDeNovo = "";

let img;
function preload() {
  img = loadImage('tela inicial.jpg');
  img2 = loadImage('eu.jpg');
  img3 = loadImage('jéssica.jpeg');
  img4 = loadImage('titulo.png');
  img5 = loadImage('tela do jogo.jpg');
  img6 = loadImage('personagem.png');
  img7 = loadImage('galinha.png');
  img8 = loadImage('fase1.png');
  img9 = loadImage('letras 1.png');
  img10 = loadImage('carro.png');
  img11 = loadImage('1.png');
  img12 = loadImage('errado.png');
  img13 = loadImage('fase1 - resposta.png');
  img14 = loadImage('2.png');
  img15 = loadImage('fase2.png');
  img16 = loadImage('fase2 - resposta.png');
  img17 = loadImage('letras 2.png');
  img18 = loadImage('tela final.png');
  
}


function setup() {
  createCanvas(600, 500);
}

function draw() {
  image(img,0,0)
  textStyle(NORMAL);
  



  
 
//tela do MENU
if (tela == 1){
  clear();
  image(img,0,0)
//Opção: Iniciar o jogo

  textAlign(CENTER);
  textSize(26);
  image(img4,190,-70)

if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
stroke(200);
fill(150);
rect(xMenu, yMenu1, largura, altura, 15);
if(mouseIsPressed){
tela = 2
}}
fill(10);
noStroke();
text("INICIAR", 150, 120);


//Opção: Informações
if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
stroke(200);
fill(150);
rect(xMenu, yMenu2, largura, altura, 15)
if(mouseIsPressed){
tela = 3
}
}

fill(10);
noStroke();
text("INFORMAÇÕES", 150, 180);
  
//instruções

  //Opção: Informações
if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
stroke(200);
fill(150);
rect(xMenu, yMenu3, largura, altura, 15)
if(mouseIsPressed){
tela = 4
}
}
fill(10);
noStroke();
text("INSTRUÇÕES", 150, 240);
  
  

//Opção: CRÉDITOS

if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu4 && mouseY < yMenu4 + altura){
stroke(200);
fill(150);
rect(xMenu, yMenu4, largura, altura, 15)
if(mouseIsPressed){
tela = 5
}
}
fill(10);
noStroke();
text("CRÉDITOS", 150, 300);
}
  
  
//jogo em ação

  //fase 1
  
else if(tela == 2) {
    clear();
    image(img,0,0)
    image(img5,0,0);
    image(img7,200,-10,220,220);
    image(img8,150,200,300,100);
    image(img9,210,360,360,100);
    image(img11,525,60,50,50);

  if (respostacorreta==true) 
  {
   image(img13,150,200,300,100);   //colocar a letra i 

//botão proxíma fase

 if(mouseX > 410 && mouseX < 410 + largura && mouseY > 260 && mouseY < 260 + altura){
stroke(200);
fill(150);
rect(420, 255, largura, altura, 15);
  
//if(mouseIsPressed){
  
//tela = 6
  
//}
 
 }
    proximo = "PROXIMO";
fill(10);
noStroke();
text(proximo, 525, 290);
if(mouseIsPressed){
respostacorreta=false;
tela = 6;
}


    
  }
  if (respostaerrada==true) 
  {
   image(img12,280,220,50,50);   //colocar a letra x
  
    //botão MENU tela==1
    
  if(mouseX > 300 && mouseX < 300 + 300 && mouseY > 320 && mouseY < 320 + altura){
stroke(200);
fill(150);
rect(300, 310, 300, altura, 15);
//if(mouseIsPressed){
//tela = 1
//}
  }
    tentarDeNovo = "TENTE NOVAMENTE";
    //console.log(respostaerrada);
fill(10);
noStroke();
text(tentarDeNovo, 450, 350);
    

  }

  if (keyIsDown(LEFT_ARROW) && x>0)
    x=x-5;

  if (keyIsDown(RIGHT_ARROW) && x<470)
    x+=5;
	
  image(img6, x, 275,200, 200);

}
  
  
  
//informações do jogo 

else if (tela==3){
	image(img,0,0);
	fill(10);
	textSize(20);
	noStroke();
	textAlign(LEFT);
	text("FÁBRICA DE PALAVRAS É UM JOGO EDUCACIONAL"+"\n"+"QUE VISA AUXILIAR CRIANÇAS NO PROCESSO DE"+"\n"+"APROPRIAÇÃO DO SISTEMA DE ESCRITA ALFABÉTICA.",30,60);
    text("NÍVEL DE ENSINO: 1º ANO DO ENSINO FUNDAMENTAL",30,160 )
    text("HABILIDADES DA BNCC: EF01LP02"+"\n"+"                                           EF01LP05"+"\n"+"                                           EF01LP07",30,200 )
  
    if(mouseX > 420 && mouseX < 420 + largura && mouseY > 390 && mouseY < 390 + altura){
stroke(200);
fill(150);
rect(420, 390, largura, altura, 15);
if(mouseIsPressed){
tela = 1
}}
fill(10);
noStroke();
text("VOLTAR", 470, 425);
  
	}
  
//instruções
  
  else if (tela==4){
	image(img,0,0);
	fill(10);
	textSize(18);
	noStroke();
	textAlign(LEFT);
	text("PARA ESTIMULAR A ESCRITA, O JOGO SIMULA O"+"\n"+"CENÁRIO DE UMA FÁBRICA COM A PROPOSTA DE "+"\n"+"PRODUÇÃO DE PALAVRAS SIMPLES. TENDO EM VISTA O"+"\n"+"ATUAL ISOLAMENTO SOCIAL EM DETRIMENTO DA "+"\n"+"PANDEMIA CAUSADA PELO VÍRUS COVID-19, FOI "+"\n"+"SELECIONADA A TEMÁTICA: “OBJETOS QUE MAIS "+"\n"+"USAMOS EM CASA”.  ",30,55);
    text("USANDO AS SETAS DO TECLADO, O JOGADOR DEVERÁ "+"\n"+"GUIAR O PERSONAGEM ATÉ AS LETRAS QUE FORMAM O "+"\n"+"NOME DA IMAGEM MOSTRADA NA TELA NO CENTRO DA "+"\n"+"FÁBRICA", 30,215)
  
    if(mouseX > 420 && mouseX < 420 + largura && mouseY > 390 && mouseY < 390 + altura){
stroke(200);
fill(150);
rect(420, 390, largura, altura, 15);
if(mouseIsPressed){
tela = 1
}}
fill(10);
noStroke();
text("VOLTAR", 470, 425);
  }
  
//Créditos

else if (tela==5){
	image(img,0,0);
    image(img2,20,60)
    image(img3,20,190)
	fill(10);
	textSize(26);
	noStroke();
	textAlign(LEFT);
	text("FERNANDO RAMOS"+"\n"+"DESENVOLVEDOR",180,90);
    text("JÉSSICA DANTAS"+"\n"+"MESTRE EM EDUCAÇÃO - UFRN",180,230)
  
  if(mouseX > 420 && mouseX < 420 + largura && mouseY > 390 && mouseY < 390 + altura){
stroke(200);
fill(150);
rect(420, 390, largura, altura, 15);
if(mouseIsPressed){
tela = 1
}}
fill(10);
noStroke();
text("VOLTAR", 470, 425);
  
	}

//fase 2
  
else if(tela == 6) {
    
    //clear();
    image(img5,0,0);              // tela do jogo
    image(img10,190,-30,220,220);  // animal
    image(img15,150,200,300,100);  // palavra incompleta
    image(img17,210,360,360,100);  // opções letras
    image(img14,525,55,50,50);    // número da fase

  if (respostacorreta==true) 
  {
    //console.log(respostacorreta)
   image(img16,150,200,300,100);   //colocar a letra i 
//botão proxíma fase

 if(mouseX > 410 && mouseX < 410 + largura && mouseY > 260 && mouseY < 260 + altura){
stroke(200);
fill(150);
rect(420, 255, largura, altura, 15);
if(mouseIsPressed){
tela = 7
}
//}
 }
fill(10);
noStroke();
text(proximo, 525, 290);

    
  }
  if (respostaerrada==true) 
  {
   image(img12,280,220,50,50);   //colocar a letra x
    
    //botão MENU tela==1
    
  if(mouseX > 410 && mouseX < 410 + 300 && mouseY > 310 && mouseY < 310 + altura){
stroke(200);
fill(150);
rect(300, 310, 300, altura, 15);
//if(mouseIsPressed){
//tela = 1
//}
  }
fill(10);
noStroke();
text(tentarDeNovo, 450, 350);
  }
//movimento personagem
  if (keyIsDown(LEFT_ARROW) && x>0)
    x=x-5;

  if (keyIsDown(RIGHT_ARROW) && x<470)
    x+=5;
	
  image(img6, x, 275,200, 200);

}

//tela final} 
  
else if(tela == 7){
  image(img18,0,0,600,500);
  
  if(mouseX > 420 && mouseX < 420 + largura && mouseY > 390 && mouseY < 390 + altura){
stroke(200);
fill(150);
rect(420, 390, largura, altura, 15);
if(mouseIsPressed){
tela = 1
}}
fill(200);
noStroke();
text("VOLTAR", 500, 425);
}
}

function keyPressed() {
  if( key == "Enter"){
     if(tela==2){
      if( x >= 230 && x <= 295 ){
        alert("Resposta correta em: x="+x)
        respostacorreta=true
      }
    else{
       alert("Resposta incorreta em: x="+x)
        respostaerrada=true
    }
    }

    if(tela==6){
      if( x >= 230 && x <= 295 ){
        alert("Resposta correta em: x="+x)
        respostacorreta=true
      }
      else{
       alert("Resposta incorreta em: x="+x)
        respostaerrada=true
    }
    }
  }
}
function mouseClicked(){
  
     if (respostacorreta==true){
       
        if(tela == 2){
            console.log(mouseY)
           if(mouseX > 420 && mouseX < 420 + largura 
              && mouseY > 260 && mouseY < 260 + altura){
               
               proximo = "";
               respostacorreta=false;
               respostaerrada=false
               tela = 6;
           }
      
        }else{
          
          if(tela == 6){
            
             if(mouseX > 420 && mouseX < 420 + largura && mouseY >               390 && mouseY < 260 && mouseY < 260 + altura){
               
               proximo = "";
               respostacorreta=false;
               respostaerrada=false
               tela = 7;
         
             }
             
           }
        
        }
    }
  
  if (respostaerrada==true){
       // console.log(tela)
        if(tela == 2){
           // console.log(mouseX)
           if(mouseX > 300 && mouseX < 300 + 300 
              && mouseY > 320 && mouseY < 320 + altura){
               
               tentarDeNovo = "";
               
               respostacorreta = false;
               respostaerrada = false;
               tela = 1;
             
           }
      
        }else{
          
          if(tela == 6){
            
             if(mouseX > 300 && mouseX < 300 + 300 
              && mouseY > 320 && mouseY < 320 + altura){
               
                tentarDeNovo = "";
               respostacorreta = false;
               respostaerrada = false;
               tela = 1;
         
           }
             
           }
          
        }
    
     }

  
}