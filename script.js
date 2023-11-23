$('.guitar').mouseover(function(){
    $('.guitar').attr("class","guitar1");
    $('.pInGuitar').css('display','block');
  });
  $('.guitar').mouseleave(function(){
    $('.guitar1').attr("class","guitar");
    $('.pInGuitar').css('display','none');
  });
  $('.programming').mouseover(function(){
    $('.programming').attr("class","programming1");
    $('.pInProgramming').css('display','block');
  });
  $('.programming').mouseleave(function(){
    $('.programming1').attr('class','programming');
    $('.pInProgramming').css('display','none');
  });
  $('.omran').mouseover(function(){
    $('.omran').attr('class','omran1');
    $('.pInOmran').css('display','block');
  });
  $('.omran').mouseleave(function(){
    $('.omran1').attr('class','omran');
    $('.pInOmran').css('display','none');
  });
  const navbar = document.getElementById('navBar');
  window.addEventListener('scroll' , function(){
    let navclass = navbar.getAttribute('class');
    if(scrollY >= navbar.offsetTop){
      $('.navBar').css('position' , 'fixed')
    }
  })
  