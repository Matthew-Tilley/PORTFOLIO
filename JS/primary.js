$(document).ready(function()
{

    $("#BTN01").on("click", function()      /*OPENS #SEC03*/
    {
        $("#SEC03").show();
    });
    
    $("#SEC03").on("click", function()      /*CLOSES #SEC03*/
    {
        $("#SEC03").hide();
    });
    
  
    
});