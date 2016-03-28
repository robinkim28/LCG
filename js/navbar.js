$(window).scroll(function(){
    var fromTop = $(window).scrollTop();
    
    if($(window).scrollTop()<126){
      $(".navbar-default").css('margin-top: ' + (126 - fromTop) + 'px');
    } else {
      $(".navbar-default").css('margin-top: '+ fromTop + 'px');
      alert(fromTop);
    }
});