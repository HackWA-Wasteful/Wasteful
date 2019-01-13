
    var password = document.getElementById("inputEmail");
    var username = document.getElementById("inputPassword");

    console.log(password);
    console.log(username);
   
    
        $('#clickbutton').click(function() {
            window.location.href="{{url_for('static', filename = 'js/demo/index.js')}}";
          });
    
