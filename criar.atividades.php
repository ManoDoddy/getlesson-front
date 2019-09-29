<!DOCTYPE html>
<html>
    <head>
        <title>Cadastros Gerais</title>
        <link rel="stylesheet" href="css/bootstrap-reboot.min.css" type="text/css">
        <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">
    </head>
    <body>

        <!-- Inicio do Header -->
        <div class="bg-dark">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="login.php">Getlesson</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-5">
                            <li class="nav-item active">
                                <a class="nav-link" href="cadastros.gerais.php">Cadastros Gerais <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="criar.atividades.php">Criar Atividade <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#" onclick="logout()">Sair <span class="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <br>
        <!-- Fim do Header -->
        
        <!-- Inicio do Conteúdo -->
        <main>
            <div class="container border">
                <form method="POST" id="form-activity">
                    <div class="form-group row mt-3">
                        <label for="nomeAtividade" class="col-2 col-form-label">Nome da Atividade</label>
                        <div class="col-4">
                            <input type="text" class="form-control" id="nomeAtividade" name="nomeAtividade">
                        </div>
                        <label for="idComponenteProfessor" class="col-2 col-form-label">Componente</label>
                        <div class="col-4">
                            <select class="form-control" id="idComponenteProfessor" name="idComponenteProfessor">
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="dataDeEntrega" class="col-2 col-form-label">Data de Entrega</label>
                        <div class="col-4">
                            <input type="text" class="form-control" id="dataDeEntrega" name="dataDeEntrega">
                        </div>
                        <label for="idTipoPergunta" class="col-2 col-form-label">Tipos de Pergunta</label>
                        <div class="col-4">
                            <select class="form-control" id="idTipoPergunta" name="idTipoPergunta">
                                <option value="1">Alternativa</option>
                                <option value="2">Dissertativa</option>
                            </select>
                        </div>
                    </div>
                    <hr>

                    <div id="perguntas">
                    </div>

                    <div class="form-group row">
                        <div class="col-6"><button type="button" class="btn btn-primary" onclick="novaPergunta()">+ Nova Pergunta</button></div>
                        <div class="col-6 text-right"><button type="button" class="btn btn-success" onclick="cadastrarAtividade()">Cadastrar Atividade</button></div>
                    </div>
                </form>
            </div>
        </main>
        <!-- Fim do Conteúdo -->
    
    <script>
        if(localStorage.getItem('emailUsuario') == null){
            window.location.replace('login.php')
        }
    </script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/script.js"></script>
    </body>
</html>