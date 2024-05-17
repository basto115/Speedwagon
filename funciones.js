
    $(document).ready(function (){
        let user = $("#user");
        let contra = $("#contra");

        let login = {
          "username": "",
          "password": ""

        }
        console.log(login)

        $("#btnvali").click(function () {
          
          login.username = user.val();
          login.password = user.val();
          
          console.log(login);

        })
        
        contra.keydown(function(){
          if (String(contra.val()).length <= 6){
            contra.css("border", "3px solid red");
          }else{
            contra.css("border", "3px solid green");
          }

        })
        

    })


