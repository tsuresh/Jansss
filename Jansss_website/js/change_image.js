var scroll1 = "Home_Page_icons/enter_details_white.svg";
var scroll2 = "Home_Page_icons/enter_details_grey.svg";
var scroll3 = "Home_Page_icons/select_campaign_grey.svg";
var scroll4 = "Home_Page_icons/select_campaign_white.svg";
var scroll5 = "Home_Page_icons/select_payment_grey.svg";
var scroll6 = "Home_Page_icons/select_payment_white.svg";


$(window).scroll(function() {
    var value = $(this).scrollTop();

    if (0<value<50){
        // document.body.style.backgroundColor="red";
        // $("#select_campaign").attr("src", scroll3);
        // $("#select_payment").attr("src", scroll5);
    }
    else if (50<value<100){
        // document.body.style.backgroundColor="blue";
        // $("#select_campaign").attr("src", scroll3);
        // $("#select_payment").attr("src", scroll5);
    }
    else {
        // document.body.style.backgroundColor="black";
        // $("#select_campaign").attr("src", scroll3);
        // $("#select_payment").attr("src", scroll5);
    }
   // else if (value>300){
   //      $("#enter_details").attr("src", scroll2);
   //      $("#select_campaign").attr("src", scroll4);
   //      // $("#select_payment").attr("src", scroll5);
   //  }
   //  else if (100 <value < 200){
   //      $("#enter_details").attr("src", scroll2);
   //      $("#select_campaign").attr("src", scroll4);
   //      // $("#select_payment").attr("src", scroll6);
   //  }
    console.log(value);



});