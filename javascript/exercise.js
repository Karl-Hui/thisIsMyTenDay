let hoverFunc = function (point,text) {
    $(point).mouseover(function(){
        $(text).fadeIn("fast");
    });
    
    $(point).mouseleave(function(){
        $(text).fadeOut("fast");
    });
}

hoverFunc(".exercixe-video1",".exercise-text1");
hoverFunc(".exercixe-video2",".exercise-text2");
hoverFunc(".exercixe-video3",".exercise-text3");
hoverFunc(".exercixe-video4",".exercise-text4");






// $(".exercixe-video2").mouseover(function(){
//     $(".exercise-text2").fadeIn("fast");
// });

// $(".exercixe-video2").mouseleave(function(){
//      $(".exercise-text2").fadeOut("fast");
//  });


// $(".exercixe-video3").mouseover(function(){
//     $(".exercise-text3").fadeIn("fast");
// });

// $(".exercixe-video3").mouseleave(function(){
//      $(".exercise-text3").fadeOut("fast");
//  });


// $(".exercixe-video4").mouseover(function(){
//     $(".exercise-text4").fadeIn("fast");
// });

// $(".exercixe-video4").mouseleave(function(){
//      $(".exercise-text4").fadeOut("fast");
//  });
