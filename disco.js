/*div kwadrat 240 220 czerwony wysrokowany w poziomie i w pionie wgledem viewporta koloru czerwonego
tło strony ma byc białe, po kliknieciu w czerwiny kwadrat ma byc dyskoteka czerwony niebieskie czerwony niebieski co sto mili sekund
tło ma bycniebieskie jezeli kwadrat jest czerwony i odwrotnie co 100 milisekund. po ponownym klilknieciu w kwadarat:
a) wszystko wraca do stanu pierwonetgo krawdrat czerwony tło białe
b)  za drugim kliknieciem dyuskoteka sie zatrzymuje niebieskie tło xczerwony kwadrat 
*/

$('<div>')
    .prependTo("body")
    // .width(240)
    // .height(240)
    .css({
        'background-color':'red',
        'width' : 240,
        'height' : 240
    })

    
    .click(function(){
        var fart = $(this);
        var body =$("body");
        setTimeout(
           function(){  

            if(fart.css("background-color") == "rgb(255, 0, 0)" ) {
            fart.css("background-color",'blue');
            body.css("background-color",'red');
           
            
} 
    else{//else
         fart.css("background-color",'red');
          body.css("background-color",'blue');
    }
           }//settimeotu
           ,500);
     
    }//click
    );