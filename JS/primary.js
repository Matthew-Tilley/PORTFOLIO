$(document).ready(function()
{

    
    $("#BTN01").on("click", function()      /*OPENS #SEC03*/
    {
        $(".LOCT11").hide();
        $("#SEC03").css("display", "flex");      
        
             
        $("#SEC03").on("click", function()      /*CLOSES #SEC03*/
        {
            $("#SEC03").hide();
            $(".LOCT11").show();
        });
        
    });
    
   
     
    $("#BTN02").on("click", function()      /*OPENS SEC04*/
    {
        $(".LOCT11").hide();
        $("#SEC04").show();
        

        $("#BTN03").on("click", function()   /*CLOSES SEC04*/
        {
            $("#SEC04").hide();
            $(".LOCT11").show();
            
        });
      
    
    
        
        /* SHOWS MODAL ON HOVER - DO NOT DELETE */
        /* $(".ICNT01").hover(function()   
        {

            var a = $(this).attr("id") + "-A";

            var b = document.getElementById(a);

            $(b).show();

            $(b).mouseleave(function()
            {
                $(b).hide();
            });
            
        });  */
        
        
        /* THIS IS THE ABOVE CODE - JUST WITH A CLICK EVENT HANDLER INSTEAD */
        /* $(".ICNT01").on("click", function()
        {
            var a = $(this).attr("id") + "-A";

            console.log(a);

            var b = document.getElementById(a);

            $(b).show(function()
            {
                $(b).on("click", function()
                {
                    $(this).hide();
                });
            });
            
        }); */


        $(".ICNT01").on("click", function()
        {
            var a = $(this).attr("id") + "-A";

            console.log(a);
            
            var b = document.getElementById(a);

            $(b).show(function()
            {
                
                function autoClose()
                {
                    $(b).fadeOut(500);
                }
            
                setTimeout(autoClose, 1300);
            
            });


        });
        

        


    });
    

   
    

  
    
    /*$("#IMG-DW01").show();     */
    /*MAKE THIS INTO A CYCLING FADER*/
    /*MAKE THIS INTO A CYCLING FADER*/
    /*MAKE THIS INTO A CYCLING FADER*/
    
    
  
    
});


