$(function(){
     // preload audio
     var toast = new Audio('toast.wav');
    $('.code').on('click', function(e) {
        e.preventDefault();
        $(this).data('name')
        $('#ToastHeader').html($(this).data('name'))
        $('#ToastBody').html($(this).data('codes'))
                // first pause the audio (in case it is still playing)
                toast.pause();
                // reset the audio
                toast.currentTime = 0;
        // play audio
        toast.play();
        $('#liveToast').toast({ autohide: false }).toast('show');
    });

    $(document).keydown(function(e){
        if(e.keyCode == 27){
             $('#liveToast').toast({ autohide: false }).toast('hide')
        }
        
    }
       )
});