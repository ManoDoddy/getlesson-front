<!DOCTYPE html>
<html>
    <head>
        <title>Getlesson</title>
        <link rel="stylesheet" href="css/bootstrap-reboot.min.css" type="text/css">
        <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <style>
            html,
            body {
            height: 100%;
            }

            body {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            padding-top: 40px;
            padding-bottom: 40px;
            background-color: #f5f5f5;
            }

            .form-signin {
            width: 100%;
            max-width: 330px;
            padding: 15px;
            margin: auto;
            }
            .form-signin .checkbox {
            font-weight: 400;
            }
            .form-signin .form-control {
            position: relative;
            box-sizing: border-box;
            height: auto;
            padding: 10px;
            font-size: 16px;
            }
            .form-signin .form-control:focus {
            z-index: 2;
            }
            .form-signin input[type="email"] {
            margin-bottom: -1px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            }
            .form-signin input[type="password"] {
            margin-bottom: 10px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            }
        </style>
    </head>
    <body class="text-center">
        
        <!-- Inicio do Conteúdo -->
        <form class="form-signin" id="form-login" method="POST">
            <i class="material-icons">book</i>
            <h1 class="h3 mb-3 font-weight-normal">Bem-vindo ao Getlesson</h1>
            <label for="emailUsuario" class="sr-only">Email</label>
            <input type="email" id="emailUsuario" class="form-control" placeholder="Email" required autofocus>
            <label for="senhaUsuario" class="sr-only">Senha</label>
            <input type="password" id="senhaUsuario" class="form-control" placeholder="Senha" required>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Fazer Login</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2019</p>
        </form>
        <!-- Fim do Conteúdo -->
    
    <script>
        localStorage.clear()
    </script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/script.js"></script>
    </body>
</html>