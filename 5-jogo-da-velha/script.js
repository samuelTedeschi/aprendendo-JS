var jogo=[];
var tabuleiro=[];
var quemJoga=0; //0-jogador 1-cpu
var verificar;
var jogando=true;
var nivel=1;
var jogadaCpu=1;
var quemComeca=1;

function jogar (p){
    if ((jogando)&&(quemJoga==0)){
        switch(p){
            case 1:
                if(jogo[0][0]==""){
                    jogo[0][0]="x";
                    quemJoga=1;
                }
            break;
        }
    }
}

function iniciar(){
    jogando=true;
    jogadaCpu=1;
    jogo=[
        ["","",""],
        ["","",""],
        ["","",""]
    ];
}

window.addEventListener("load",iniciar);