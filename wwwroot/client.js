$(function(){
    // preload audio
    var toast = new Audio('/toast.wav');
   $('.code').on('click', function(e) {
       e.preventDefault();
       $(this).data('name')
       $('#ToastHeader').html($(this).data('product'))
       $('#ToastBody').html($(this).data('code'))
               // first pause the audio (in case it is still playing)
               toast.pause();
               // reset the audio
               toast.currentTime = 0;
       // play audio
       toast.play();
       $('#liveToast').toast({ autohide: false }).toast('show');
   });
   $('.close').on('click', function(){
    $('#liveToast').toast({ autohide: false }).toast('hide');
   })
   $(document).keydown(function(e){
       if(e.keyCode == 27){
            $('#liveToast').toast({ autohide: false }).toast('hide')
       }
       
   }
      )
});