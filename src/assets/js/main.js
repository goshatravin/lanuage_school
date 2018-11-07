// $( document ).ready(function() {
//     $('.item__left').click(function(){
//         $('.left_answer').hide("slow");
//       $(this).find('.left_answer').slideToggle("slow");
      
     
//     })
//  });

 

// $(document).ready(function(){
//     $('.item__left').click(function(){
//         $('.left_answer').removeClass('open');
//         if( $(this).find('.left_answer').hasClass('open')){
//             $(this).find('.left_answer').removeClass('open')
//         } else{
//             $(this).find('.left_answer').addClass('open')
//         }
       
        
//     })
// })


$(function() {

    $('.item__left').click(function() {
      var answ = $(this).find('.left_answer');
      if (answ.hasClass('open')) {
          answ.toggle().toggleClass('open');  
      } else {
        $('.left_answer.open').toggle().toggleClass('open');
        answ.toggle().toggleClass('open');  
      } 
    });
    
  });




  $(document).ready(function(){
        $(".nav__item").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
     
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
     
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
             
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
    

    $(document).ready(function(){
        $(".test1").click(function () {
            $(".fixed-overlay_one").fadeIn(300);
            $("body").css("overflow", "hidden");
        })
    })

        $(document).ready(function(){
        $(".quit").click(function () {
            $(".fixed-overlay_one").fadeOut(300);
            $("body").css("overflow", "auto");
        })
    })
           
  
       


$(document).ready(function(){
    $(".test2").click(function () {
        $(".fixed-overlay").fadeIn(300);
        $("body").css("overflow", "hidden");
    })
})

    $(document).ready(function(){
    $(".quit").click(function () {
        $(".fixed-overlay").fadeOut(300);
        $("body").css("overflow", "auto");
    })
})
       
$(function(){
    //2. Получить элемент, к которому необходимо добавить маску
    $("#phone").mask("8(999) 999-9999");
  });
  $(function(){
    //2. Получить элемент, к которому необходимо добавить маску
    $("#phone1").mask("8(999) 999-9999");
  });



//   checkbox

function check() {
    var submit = document.getElementsByName('submit')[0];
    if (document.getElementById('politics').checked)
    submit.disabled = '';
    else
    submit.disabled = 'disabled';
    }

 function check1() {
        var submit = document.getElementsByName('submit_one')[0];
        if (document.getElementById('politics_one').checked)
        submit.disabled = '';
        else
        submit.disabled = 'disabled';
        }
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
        $(document).ready(function(){
            $(".quit").click(function () {
                $('.modaloverlay').css({display: "none"});
                $("#form").trigger("reset");
               
            })
        })


//  instagram
var userFeed = new Instafeed({
    get: 'user',
    limit: 6,
    userId: '8581182188',
    accessToken: '8581182188.1677ed0.ace726c0228349fb896819f862101632'
  });
  userFeed.run();

  
  $(document).ready(function(){
    $(".btn-red").click(function(){
     $(".btn-red").toggleClass("active-red");
     if($(".btn-red").hasClass("active-red")){
        $(".input-toggle").val('1500 Р/месяц');
     } else{
        $(".input-toggle").val('3000 Р/месяц');
     }
    });
    
    
  });

  $(document).ready(function(){
     $(".btn").click(function(){
        $(".btn").removeClass("active");
        $(this).addClass("active");
        $(".f_btn").click(function(){
            $(".price__group").css("display","block");
            $(".price__time").css("display","block");
            $(".price__time-short").css("display","none");
            $(".price__group-indiv").css("display","none");
        });
        $(".s_btn").click(function(){
            $(".price__time").css("display","none");
            $(".price__group").css("display","none");
            $(".price__time-short").css("display","block");
            $(".price__group-indiv").css("display","block");

        });
     });
     

  });