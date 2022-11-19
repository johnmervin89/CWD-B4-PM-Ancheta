
$(document).ready(function(){
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.slider').slider({full_width: true});
    $('.parallax').parallax();
    $('.tooltipped').tooltip();
    $('.myreviews').carousel({
        numVisible:7,
        shift:55,
        padding:55,
    })
});
function toggleModal(){
    var instance =M.Modal.getInstance($('#modal3'))
    instance.open();
}

 
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });
        
