$(document).ready(function(){
  // ctl+home/profile/pub/contact : control button
    $("#ctlhome").click(function(){
        $("#home_content").slideDown("slow");
	      $("#profile_content").slideUp("slow");
	      $("#pub_content").slideUp("slow");
        $("#ta_content").slideUp("slow");
        $("#contact_content").slideUp("slow");
        $("#slides").slideUp("slow");
    });
    $("#ctlprofile").click(function(){
        $("#home_content").slideUp("slow");
	      $("#profile_content").slideDown("slow");
	      $("#pub_content").slideUp("slow");
        $("#ta_content").slideUp("slow");
        $("#contact_content").slideUp("slow");
        $("#slides").slideUp("slow");
    });
    $("#ctlpub").click(function(){
        $("#home_content").slideUp("slow");
	      $("#profile_content").slideUp("slow");
	      $("#pub_content").slideDown("slow");
        $("#ta_content").slideUp("slow");
        $("#contact_content").slideUp("slow");
        $("#slides").slideUp("slow");
    });
    $("#ctlta").click(function(){
        $("#home_content").slideUp("slow");
	      $("#profile_content").slideUp("slow");
	      $("#pub_content").slideUp("slow");
        $("#ta_content").slideDown("slow");
        $("#contact_content").slideUp("slow");
        $("#slides").slideUp("slow");
    });

    $("#ctlcontact").click(function(){
        $("#home_content").slideUp("slow");
	      $("#profile_content").slideUp("slow");
	      $("#pub_content").slideUp("slow");
        $("#ta_content").slideUp("slow");
        $("#contact_content").slideDown("slow");
        $("#slides").slideUp("slow");
    });
    $("#ctlgroup").click(function(){
        $("#home_content").slideUp("slow");
	      $("#profile_content").slideUp("slow");
	      $("#pub_content").slideUp("slow");
        $("#ta_content").slideUp("slow");
        $("#contact_content").slideUp("slow");
        $("#slides").slideDown("slow");
    });

    $("#home").click(function(){
        $("#home_content").slideToggle("slow");
    });
    $("#profile").click(function(){
        $("#profile_content").slideToggle("slow");
    });
    $("#pub").click(function(){
        $("#pub_content").slideToggle("slow");
    });
    $("#ta").click(function(){
        $("#ta_content").slideToggle("slow");
    });

    $("#contact").click(function(){
        $("#contact_content").slideToggle("slow");
    });
    $("#group").click(function(){
        $("#slides").slideToggle("slow");
    });

});


