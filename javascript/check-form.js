$(document).ready(function() {

    $("#contact").validate({

        rules: {

            // name is required and must be a minimum of 2 characters
            sendername: {
                required: true,
                minlength: 2,
                maxlength: 50
            },

            // email address is required and must be a valid email address format
            senderemail: {
                required: true,
                email:true
            },

            // message is required, minimum of 3 characters
            sendermessage: {
                required: true,
                rangelength: [10, 2000]
            },
        },

        submitHandler: function(form) {
            alert('Your message is being sent to Peterborough Tourism');
        },

        // error messages to return if validation fails
        messages: {
            sendername: "Please enter your name (minimum of 2 characters).",
            'senderemail': "Please enter a valid email address.",
            'message': "Please enter a meaningful message..."
            
        }

        
    });

    function init(){
        document.getElementById('form').onsubmit = validate;
    }
    window.onload = init;
    
});

