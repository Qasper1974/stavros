$ (function () {
    
      if ($("#collapseOne").hasClass("show")) {
        $("#cardheader1").removeClass("dropdown-toggle");
        };
      if ($("#collapseTwo").hasClass("show")) {
             $("#cardheader2").remove("dropdown-toggle");
        };
      if ($("collapseThree").hasClass("show")) {
         $("#cardheader3").remove("dropdown-toggle");
    };
    if (!$("#collapseOne").hasClass("show")) {
        $("#cardheader1").addClass("dropdown-toggle");
        };
      if (!$("#collapseTwo").hasClass("show")) {
            $("#cardheader2").remove("dropdown-toggle");
        };
      if (!$("collapseThree").hasClass("show")) {
         $("#cardheader3").remove("dropdown-toggle");
    };

});