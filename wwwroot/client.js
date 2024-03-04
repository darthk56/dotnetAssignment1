$(function(){
    $('.code').on('click', function(e) {
        e.preventDefault();
        $(this).data('name')
        $('#ToastHeader').html($(this).data('product'))
        $('#ToastBody').html($(this).data('code'))
        $('#liveToast').toast({ autohide: false }).toast('show');
    });

    $(document).keydown(function(e){
        if(e.keyCode == 27){
             $('#liveToast').toast({ autohide: false }).toast('hide')
        }
        
    }
       )
});