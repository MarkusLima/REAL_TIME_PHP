$(document).ready(function () {

  $("#sendmessage input").focus(function () {
    if ($(this).val() == "Send message...") {
      $(this).val("");
    }
  });
  $("#sendmessage input").focusout(function () {
    if ($(this).val() == "") {
      $(this).val("Send message...");

    }
  });


  $(".friend").each(function () {
    $(this).click(function () {
      var childOffset = $(this).offset();
      var parentOffset = $(this).parent().parent().offset();
      var childTop = childOffset.top - parentOffset.top;
      var clone = $(this).find('img').eq(0).clone();
      // var top = childTop + 12 + "px";

      // $(clone).css({'top': top}).addClass("floatingImg").appendTo("#chatbox");                  

      setTimeout(function () { $("#profile p").addClass("animate"); $("#profile").addClass("animate"); }, 100);
      setTimeout(function () {
        $("#chat-messages").addClass("animate");
        $('.cx, .cy').addClass('s1');
        setTimeout(function () { $('.cx, .cy').addClass('s2'); }, 100);
        setTimeout(function () { $('.cx, .cy').addClass('s3'); }, 200);
      }, 150);

      // $('.floatingImg').animate({
      //   'width': "68px",
      //   'left':'108px',
      //   'top':'20px'
      // }, 200);

      $('#chat-messages').css({'height': '63vh'});
      $('#chatview').css({'height': '93vh'});

      var name = $(this).find("p strong").html();
      var email = $(this).find("p span").html();
      $("#profile strong").html(name);
      $("#profile span").html(email);

      $(".message").not(".right").find("img").attr("src", $(clone).attr("src"));

    });
  });
});
