const audio1 = new Audio('scripts/../audio/M4A1_Single-Kibblesbob-8540445-[AudioTrimmer.com].mp3');
const audio2= new Audio('scripts/../audio/Funny_Boy_Laugh-Mike_Koenig-1446565974-[AudioTrimmer.com].mp3')    


function main(){
    
    $(".game").one("click",area)
}
main()

    let count = 0;
    function area(box){
        audio1.play();
        count ++
        if(count %2 ==0){
           $(box.target).html("X")
        //    $("clk")[0].play()
           check();
        }
        else{
           $(box.target).html("O")
        //    $("clk")[0].play()
           check();
        }}

function check(){

        
        let d1 = $("#d1").text();
        let d2 = $("#d2").text();
        let d3 = $("#d3").text();
        let d4 = $("#d4").text();
        let d5 = $("#d5").text();
        let d6 = $("#d6").text();
        let d7 = $("#d7").text();
        let d8 = $("#d8").text();
        let d9 = $("#d9").text();



        if (d1 == d2 && d2 == d3 && d1!="")//123
        {
             
            setTimeout(function(){ swal("win"+" "+d1);},100, audio2.play())
           
        }
       else if (d4 == d5 && d5 == d6 && d4!="")//456
        {
            setTimeout(function(){ swal("win"+" "+d4);},100,audio2.play())
        }
        else if (d7 == d8 && d8 == d9 && d7!="")//789
        {
            setTimeout(function(){ swal("win"+" "+d7);},100,audio2.play())
        }
        else if (d1 == d4 && d4 == d7 && d1!="")//147
        {
            setTimeout(function(){ swal("win"+" "+d1);},100,audio2.play())
        }
        else if (d2 == d5 && d5 == d8 && d2!="")//258
        {
            setTimeout(function(){ swal("win"+" "+d2);},100,audio2.play())
        }
        else if (d3 == d6 && d6 == d9 && d3!="")//369
        {
            setTimeout(function(){ swal("win"+" "+d3)},100,audio2.play())
        } else if (d1 == d5 && d5 == d9 && d1!="")//159
        {
            setTimeout(function(){ swal("win"+" "+d1)},100,audio2.play())
        }
        else if (d3 == d5 && d5 == d7 && d3!="")//357
        {
            setTimeout(function(){ swal("win"+" "+d3)},100,audio2.play())
        }
        
   
        else if(d1 !="" && d2 !=""&& d3 !=""&& d4 !=""&& d5 !=""&& d6 !="" && d7 !=""&& d8 !=""&& d9 !=""){
           setTimeout(function(){   swal("Tie")},100)
        }
        
}
function clear(){
    count = 0
    $(".game").off()
    $('.game').text("")
    $(".game").one("click",area)

}
$("button").on("click", clear)

    



