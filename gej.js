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
        setTimeout(
           function(){  

            if(fart.css("background-color") == "rgb(255, 0, 0)" ) {
            fart.css("background-color",'blue');
} 
    else{//else
         fart.css("background-color",'red');
    }
           }//settimeotu
           ,500);
     
    }//click
    );
   $( "input" )
  .keyup(function() {
    var value = $( this ).val();
    $( "title" ).text( value );
  })

 
   /*   div kolor czerwony 240 X 240 px, po kliknieciu diva po 1 s ma sie zmienic na niebieski, chyba ze kolor bedzie niebieski po upłynieniu jedenj sekundy ma zmienic na czerwony



ipnut textowy wpujesz text enter na zywo pojawija sie w tytule strony 

druga czesc jak przełaczysz sie na inna zakłądke tytuł strony grzegoru nie wracaj tu

jak wrocisz na ta strone ma sie pojawiac znowu live preload*/


/*div kwadrat 240 220 czerwony wysrokowany w poziomie i w pionie wgledem viewporta koloru czerwonego
tło strony ma byc białe, po kliknieciu w czerwiny kwadrat ma byc dyskoteka czerwony niebieskie czerwony niebieski co sto mili sekund
tło ma bycniebieskie jezeli kwadrat jest czerwony i odwrotnie co 100 milisekund. po ponownym klilknieciu w kwadarat:
a) wszystko wraca do stanu pierwonetgo krawdrat czerwony tło białe
b)  za drugim kliknieciem dyuskoteka sie zatrzymuje niebieskie tło xczerwony kwadrat 