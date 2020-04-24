// $(".me").on("click", function(){
//     console.log("dziala");
//     $("body, html").animate({
//         scrollTop: $(".s1").offset().top
//     },500)
// })

$("nav a").on("click", function(){
    // console.log($(this).attr("class"))
    const to = "#" + $(this).attr("class");
    $("body, html").animate({
        scrollTop: $(to).offset().top
    },500)

})