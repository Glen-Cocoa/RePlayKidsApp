 $(document).ready(function () {
       $('tr').on('mouseenter', function () {
           $('#test').show();
           $(this).css({
               "text-decoration": "underline"
           });
       }).on('mouseleave', function () {
           $('#test').hide();
           $(this).css({
               "text-decoration": ''
           });
       });;
   });
