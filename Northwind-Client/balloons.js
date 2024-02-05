$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });
    let randoms = ['bounce', 'flash', 'pulse', 'rubberBand', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat']
    $('#title').removeClass()
    $('#title').addClass('animate__animated ' + 'animate__' + randoms[Math.floor(Math.random() * 9)]);
    //toast for when nothing is checked
    $('#submit').on('click', function(e) {
        e.preventDefault();
        if(document.getElementById("red").checked === false && document.getElementById("blue").checked === false && document.getElementById("green").checked === false){
            $('#ToastHeader').html('HEY');
        $('#ToastBody').html('You didnt select Balloons!');

        $('#liveToast').toast({ autohide: true }).toast('show');
        }
        
    });
    //check all if all box is checked and uncheck all if its unchecked
     $('#all').on('change', function() {
        if(document.getElementById("red").checked === false && document.getElementById("blue").checked === false && document.getElementById("green").checked === false){
              $('#red').prop('checked', true);
         $('#blue').prop('checked', true);
         $('#green').prop('checked', true);
        }else{
            $('#red').prop('checked', false);
         $('#blue').prop('checked', false);
         $('#green').prop('checked', false);
        }
       
     })
     //Change title color based on mouse hover
     let theTitle = document.getElementById('title');
     document.getElementById('red').addEventListener("mouseover", function(){

        theTitle.style.color = 'red';
     })
     document.getElementById('red').addEventListener("mouseout", function(){

        theTitle.style.color = 'slategray';
     })
     document.getElementById('green').addEventListener("mouseover", function(){

       theTitle.style.color = 'green';
    })
    document.getElementById('green').addEventListener("mouseout", function(){

        theTitle.style.color = 'slategray';
     })
    document.getElementById('blue').addEventListener("mouseover", function(){

       theTitle.style.color = 'blue';
    })
    document.getElementById('blue').addEventListener("mouseout", function(){

        theTitle.style.color = 'slategray';
     })

        // uncheck all checkboxes (FireFox)
        $('.form-check-input').each(function () {
            $(this).prop('checked', false);
        });
            // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });
});
