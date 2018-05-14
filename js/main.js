$(function () {
  //Button load more new event

  $("#ma-load-more, #ma-load-more-ukr").click(function () {
    var lable = $("#ma-load-more").text().trim();
    if(lable == "Свернуть") {
      $("#ma-load-more, #ma-load-more-ukr").text("Загрузить ещё");
      $(".ma-add-new-more").hide();
    }
    else {
      $("#ma-load-more, #ma-load-more-ukr").text("Свернуть");
      $(".ma-add-new-more").show();
    }
  });
  //Button load more current event ru
  $("#ma-load-current-more-ru").click(function () {
    var lable = $("#ma-load-current-more-ru").text().trim();
    if(lable == "Свернуть") {
      $("#ma-load-current-more-ru").text("Развернуть");
      $(".ma-current-event-more-ru").hide();
    }
    else {
      $("#ma-load-current-more-ru").text("Свернуть");
      $(".ma-current-event-more-ru").show();
    }
  });
  //Button load more current event ukr
  $("#ma-load-current-more-ukr").click(function () {
    var lable = $("#ma-load-current-more-ukr").text().trim();
    if(lable == "Свернуть") {
      $("#ma-load-current-more-ukr").text("Развернуть");
      $(".ma-current-event-more-ukr").hide();
    }
    else {
      $("#ma-load-current-more-ukr").text("Свернуть");
      $(".ma-current-event-more-ukr").show();
    }
  });
  //Tabs lang
  $('.ma-tabs-lang .tabs-content').hide();
  $('.ma-tabs-lang .tabs-content:first').show();
  $('.ma-tabs-lang .ma-tabs-caption li:first').addClass('active');
  $('.ma-tabs-lang .ma-tabs-caption li a').click(function(){
    $('.ma-tabs-lang .ma-tabs-caption li').removeClass('active');
    $(this).parent().addClass('active');
    var currentTab = $(this).attr('href');
    $('.ma-tabs-lang .tabs-content').hide();     
    $(currentTab).show();
    return false;
  }); 
  //Tabs city
  $('.ma-tabs-city .tabs-content-city, .ma-tabs-city .tabs-content-city-ukr').hide();
  $('.ma-tabs-city .tabs-content-city:first').show();
  $('.ma-tabs-city .tabs-content-city-ukr:first').show();
  $('.ma-tabs-city .ma-tabs-caption-city li:first').addClass('active');
  $('.ma-tabs-city .ma-tabs-caption-city li a').click(function(){
    $('.ma-tabs-city .ma-tabs-caption-city li').removeClass('active');
    $(this).parent().addClass('active');
    var currentTab = $(this).attr('href');
    $('.ma-tabs-city .tabs-content-city, .ma-tabs-city .tabs-content-city-ukr').hide();     
    $(currentTab).show();
    return false;
  }); 

  //Choose video or photo
  $("#pv-input, #cur-pv-input").change(function(e) {
    e.preventDefault();
    $('.value').removeClass('active');
    $(this.value).addClass('active');
  });
  //Add speaker
   $("#add-speaker").click(function () {
  var speaker = $('.ma-add-speaker:first').clone();
  $('.ma-wrap-page-event .ma-speaker-page-event').append(speaker);
});
});
