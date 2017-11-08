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
    
    
    
    $("#BTN04").on("click", function()
    {
        $("#SEC04").show();
        
        $("#SEC04").on("click", function()
        {
            $("#SEC04").hide();
        });
    });
  
    
});