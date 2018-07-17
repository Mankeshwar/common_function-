

$('input[name*=\'selected\']').prop('checked', this.checked);

function submitTodayEnquiry(){
//console.log($('input[name*=\'selected\']').is(':checked'));
if( $('input[name*=\'selected\']').is(':checked') ){
        var cnfrm = confirm('Are you sure?');
        if(cnfrm){
            $('#form-watchlist-trader').submit();
          }
    }else{
        alert('Please check at least one!');                      
      }
    console.log('function running');                                                                                                                    
}