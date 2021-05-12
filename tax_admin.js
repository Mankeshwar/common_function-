    
    window.onload = hideErrorMessages();

    function hideErrorMessages(){
        $("#error_name").hide();
        $("#error_name2").hide();
        $("#error_description").hide();
        $("#error_description2").hide();
        
        hide_loading();
    }

    $(document).ready( function () {

        //$('#dataTables-user-log').DataTable();
        $('#tax-list').DataTable({
            "bFilter": true,
            "paging":   true,
            //"iDisplayLength": 20,
            "order": [[ 0, "asc" ]]
            //"bDestroy": true,
        });
     } );


// Add Products with ajax

$(document).ready( function () {
$("#addTaxFFForm").submit(function(e) {
     e.preventDefault(); 
     
        hideErrorMessages();
        show_loading();
        var i=0;
//        var name = $('#name').val().trim();
//        var description = $('#description').val().trim();
//        
//
//        if(name == ""){
//            $("#error_name").show();
//            i++;
//        }
//        else if (!name.match(/^[A-Za-z0-9\s]+$/)) {
//            $("#error_name2").show();
//            i++;
//        }
//
//        if(description == ""){
//            $("#error_description").show();
//            i++;
//        }
//        else if (!description.match(/^[A-Za-z0-9\s]+$/)) {
//            $("#error_description2").show();
//            i++;
//        }
        if(i == 0){
            $.ajax({
                url: $("#base-url").val() + "admin/brand/add_brands",
                type: "post",
                data:  new FormData(this),
                contentType: false,
                cache: false,
                processData:false,
                async:false,
                success: function (result) {
                    var result = $.parseJSON(result);
                   
                    if(result.status=='success'){
                        location.reload();
                    }
                    
                    else{
                        alert("Oops there is something wrong!");
                    }
                  
                },
                error: ajax_error_handling
            });
        }else{
            hide_loading();
        }
            
    });

} ); // Document Ready





