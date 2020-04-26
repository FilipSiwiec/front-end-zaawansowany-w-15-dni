$(document).on("scroll", function(){

    const pozycja = $(document).scrollTop();
    
    const $art1 = $(".art1");
    const art1Hight = $art1.outerHeight();
    const art1L = $art1.offset().top;
    
    const $art2 = $(".art2");
    const art2Hight = $art2.outerHeight();
    const art2L = $art2.offset().top;

    const $art3 = $(".art3");
    const art3Hight = $art3.outerHeight();
    const art3L = $art3.offset().top;

    const $art4 = $(".art4");
    const art4Hight = $art4.outerHeight();
    const art4L = $art4.offset().top;

    if ( pozycja > art1L - art1Hight){
        $art1.addClass("active");
        console.log("dziala");
    }

    if ( pozycja > art2L - art2Hight){
        $art2.addClass("active");
        console.log("dziala");
    }

    if ( pozycja > art3L -art3Hight){
        $art3.addClass("active");
        console.log("dziala");
    }

    if ( pozycja > art4L - art4Hight){
        $art4.addClass("active");
        console.log("dziala");
    }

    // Qotes

    const op1 = $(".op1");
    const op1Hight = op1.outerHeight();
    const op1L = op1.offset().top;

    const op2 = $(".op2");
    const op2Hight = op2.outerHeight();
    const op2L = op2.offset().top;

    if ( pozycja > op1L - op1Hight){
        op1.addClass("active");
        console.log("dziala");
    }

    if ( pozycja > op2L - op2Hight){
        op2.addClass("active");
        console.log("dziala");
    }

    // reset
     if ( pozycja < 100 ) {
         $("article").removeClass("active");
     }
    
    
    
    
    

})