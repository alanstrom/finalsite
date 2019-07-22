/*selectBox*/

$(document).ready(function(){
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            if($(.bathr1).attr("value")=="bathr1"){
                $(".rbox").not(".bathr1").hide();
                $(".bathr1").show();
            }
            else if($(.bathr2).attr("value")=="bathr2"){
                $(".Rbox").not(".bathr2").hide();
                $(".bathr2").show();
            }
            else if($(.bathr3).attr("value")=="bathr3"){
                $(".Rbox").not(".bathr3").hide();
                $(".bathr3").show();
            }
            else{
                $(".Rbox").hide();
            }
        });
    }).change();
});
