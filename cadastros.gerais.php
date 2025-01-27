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
                <ul class="nav nav-pills mt-3" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="pills-teacher-tab" data-toggle="pill" href="#pills-teacher" role="tab" arial-controls="pills-teacher" aria-selected="true">Professores</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-course-tab" data-toggle="pill" href="#pills-course" role="tab" arial-controls="pills-course" aria-selected="false">Cursos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-class-tab" data-toggle="pill" href="#pills-class" role="tab" arial-controls="pills-class" aria-selected="false">Turmas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-component-tab" data-toggle="pill" href="#pills-component" role="tab" arial-controls="pills-component" aria-selected="false">Componentes</a>
                    </li>
                </ul>
                <hr>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-teacher" role="tabpanel" aria-labelledby="pills-teacher-tab">
                        <form method="post" action="" id="form-teacher">
                            <div class="form-group row">
                                <label for="nomeUsuario" class="col-2 col-form-label">Nome do Professor</label>
                                <div class="col-10">
                                    <input type="text" class="form-control" id="nomeUsuario" name="nomeUsuario" disabled>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="emailUsuario" class="col-2 col-form-label">Email</label>
                                <div class="col-10">
                                    <input type="email" class="form-control" id="emailUsuario" name="emailUsuario" disabled>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="senhaUsuario" class="col-2 col-form-label">Senha</label>
                                <div class="col-10">
                                    <input type="password" class="form-control" id="senhaUsuario" name="senhaUsuario" disabled>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group row">
                                <div class="col-12">
                                    <select multiple class="form-control" id="professores" name="professores">
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-2"><button type="button" class="btn btn-primary" id="new-teacher" onclick="novoProfessor()">Novo</button></div>
                                <div class="col-2"><button type="submit" class="btn btn-success" id="save-teacher" disabled>Salvar</button></div>
                                <div class="col-2"><button type="button" class="btn btn-secondary" id="edit-teacher" disabled onclick="editarProfessor()">Editar</button></div>
                                <div class="col-2"><button type="button" class="btn btn-danger" id="delete-teacher" disabled onclick="excluirProfessor()">Excluir</button></div>
                                <div class="col-2"><button type="button" class="btn btn-warning" id="cancel-teacher" onclick="cancelarProfessor()" disabled>Cancelar</button></div>
                            </div>
                        </form>
                    </div>
                    <div class="tab-pane fade" id="pills-course" role="tabpanel" aria-labelledby="pills-course-tab">
                        <form method="post" action="" id="form-course">
                            <div class="form-group row">
                                <label for="nomeCurso" class="col-2 col-form-label">Nome do Curso</label>
                                <div class="col-10">
                                    <input type="text" class="form-control" id="nomeCurso" name="nomeCurso" disabled>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group row">
                                <div class="col-12">
                                    <select multiple class="form-control" id="cursos" name="cursos">
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-2"><button type="button" class="btn btn-primary" id="new-course" onclick="novoCurso()">Novo</button></div>
                                <div class="col-2"><button type="submit" class="btn btn-success" id="save-course" disabled>Salvar</button></div>
                                <div class="col-2"><button type="button" class="btn btn-secondary" id="edit-course" disabled onclick="editarCurso()">Editar</button></div>
                                <div class="col-2"><button type="button" class="btn btn-danger" id="delete-course" disabled onclick="excluirCurso()">Excluir</button></div>
                                <div class="col-2"><button type="button" class="btn btn-warning" id="cancel-course" onclick="cancelarCurso()" disabled>Cancelar</button></div>
                            </div>
                        </form>
                    </div>
                    <div class="tab-pane fade" id="pills-class" role="tabpanel" aria-labelledby="pills-class-tab">
                        <form method="post" action="" id="form-class">
                            <div class="form-group row">
                                <label for="nomeTurma" class="col-2 col-form-label">Nome da Turma</label>
                                <div class="col-10">
                                    <input type="text" class="form-control" id="nomeTurma" name="nomeTurma" disabled>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="semestreTurma" class="col-2 col-form-label">Semestre</label>
                                <div class="col-10">
                                    <select class="form-control" id="semestreTurma" name="semestreTurma" disabled>
                                        <option value="1">1° Semestre</option>
                                        <option value="2">2° Semestre</option>
                                        <option value="3">3° Semestre</option>
                                        <option value="4">4° Semestre</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="anoTurma" class="col-2 col-form-label">Ano</label>
                                <div class="col-4">
                                    <input type="text" class="form-control" id="anoTurma" name="anoTurma" disabled>
                                </div>
                                <label for="ultimoDiaTurma" class="col-2 col-form-label">Data de Encerramento</label>
                                <div class="col-4">
                                    <input type="text" class="form-control" id="ultimoDiaTurma" name="ultimoDiaTurma" disabled>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="idCurso" class="col-2 col-form-label">Curso</label>
                                <div class="col-4">
                                    <select class="form-control" id="idCurso" name="idCurso" disabled>
                                    </select>
                                </div>
                                <label for="idPeriodo" class="col-2 col-form-label">Periodo</label>
                                <div class="col-4">
                                    <select class="form-control" id="idPeriodo" name="idPeriodo" disabled>
                                        <option value="1">Manhã</option>
                                        <option value="2">Tarde</option>
                                        <option value="3">Noite</option>
                                    </select>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group row">
                                <div class="col-12">
                                    <select multiple class="form-control" id="turmas" name="turmas">
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-2"><button type="button" class="btn btn-primary" id="new-class" onclick="novaTurma()">Novo</button></div>
                                <div class="col-2"><button type="submit" class="btn btn-success" id="save-class" disabled>Salvar</button></div>
                                <div class="col-2"><button type="button" class="btn btn-secondary" id="edit-class" disabled onclick="editarTurma()">Editar</button></div>
                                <div class="col-2"><button type="button" class="btn btn-danger" id="delete-class" disabled onclick="excluirTurma()">Excluir</button></div>
                                <div class="col-2"><button type="button" class="btn btn-warning" id="cancel-class" onclick="cancelarTurma()" disabled>Cancelar</button></div>
                            </div>
                        </form>
                    </div>
                    <div class="tab-pane fade" id="pills-component" role="tabpanel" aria-labelledby="pills-component-tab">
                        <form method="post" action="" id="form-component">
                            <div class="form-group row">
                                <label for="nomeComponente" class="col-2 col-form-label">Componente</label>
                                <div class="col-10">
                                    <input type="text" class="form-control" id="nomeComponente" name="nomeComponente" disabled>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="siglaComponente" class="col-2 col-form-label">Sigla</label>
                                <div class="col-10">
                                    <input type="text" class="form-control" id="siglaComponente" name="siglaComponente" disabled>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="idTurma" class="col-2 col-form-label">Turma</label>
                                <div class="col-4">
                                    <select class="form-control" id="idTurma" name="idTurma" disabled>
                                    </select>
                                </div>
                                <label for="idUsuario" class="col-2 col-form-label">Professor</label>
                                <div class="col-4">
                                    <select class="form-control" id="idUsuario" name="idUsuario" disabled>
                                    </select>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group row">
                                <div class="col-12">
                                    <select multiple class="form-control" id="componentes" name="componentes">
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-2"><button type="button" class="btn btn-primary" id="new-component" onclick="novoComponente()">Novo</button></div>
                                <div class="col-2"><button type="submit" class="btn btn-success" id="save-component" disabled>Salvar</button></div>
                                <div class="col-2"><button type="button" class="btn btn-secondary" id="edit-component" disabled onclick="editarComponente()">Editar</button></div>
                                <div class="col-2"><button type="button" class="btn btn-danger" id="delete-component" disabled onclick="excluirComponente()">Excluir</button></div>
                                <div class="col-2"><button type="button" class="btn btn-warning" id="cancel-component" disabled onclick="cancelarComponente()">Cancelar</button></div>
                            </div>
                        </form>
                    </div>
                </div>
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