//Página de Login
if(document.getElementById('form-login')!==null){
    let form_login = document.getElementById('form-login')
    form_login.addEventListener('submit', function(e){
        e.preventDefault()
        $.ajax({
            type: 'post',
            url: 'http://localhost/getlesson_api/sing-in',
            dataType: 'json',
            data: {
                emailUsuario: document.getElementById('emailUsuario').value,
                senhaUsuario: document.getElementById('senhaUsuario').value
            },
            success: function(data){
                if(data.error===""){
                    localStorage.setItem('emailUsuario', document.getElementById('emailUsuario').value)
                    localStorage.setItem('jwt', data.jwt)
                    window.location.replace('cadastros.gerais.html')
                }
                alert('Requisicao realizada')
                console.log(data)
            },
            error: function (e){
                alert('Erro de requisicao')
                console.log(e)
            }
        })
    })
}

//logout
function logout(){
    localStorage.clear()
    window.location.replace('./login.html')
}

//Página de Cadastros Gerais
if(document.getElementById('form-teacher')!==null){

    //Insert - Update
    let editProfessor = false
    let form_teacher = document.getElementById('form-teacher')
    form_teacher.addEventListener('submit', function(e){
        if(editProfessor){ //Editando
            e.preventDefault()
            $.ajax({
                type: 'put',
                dataType: 'json',
                url: 'http://localhost/getlesson_api/user/'+document.getElementById('professores').value,
                data: {
                    nomeUsuario: document.getElementById('nomeUsuario').value,
                    nivel: "2",
                    rmUsuario: "00000",
                    senhaUsuario: document.getElementById('senhaUsuario').value,
                    jwt: localStorage.getItem('jwt')
                },
                success(data){
                    cancelarProfessor()
                    editProfessor = false
                    alert('Requisicao realizada')
                    console.log(data)
                },
                error(e){
                    cancelarProfessor()
                    editProfessor = false
                    alert('Erro de requisicao')
                    console.log(e)
                }
            })
        }else{ //Cadastrando
            e.preventDefault()
            $.ajax({
                type: 'post',
                url: 'http://localhost/getlesson_api/sing-up',
                dataType: 'json',
                data: {
                    nomeUsuario: document.getElementById('nomeUsuario').value,
                    nivel: "2",
                    rmUsuario: "00000",
                    emailUsuario: document.getElementById('emailUsuario').value,
                    senhaUsuario: document.getElementById('senhaUsuario').value,
                    jwt: localStorage.getItem('jwt')
                },
                success: function(data){
                    cancelarProfessor()
                    alert('Requisicao realizada')
                    console.log(data)
                },
                error: function (e){
                    cancelarProfessor()
                    alert('Erro de requisicao')
                    console.log(e)
                }
            })
        }
    })
    function editarProfessor(){
        document.getElementById('save-teacher').removeAttribute('disabled')
        document.getElementById('nomeUsuario').removeAttribute('disabled')
        document.getElementById('senhaUsuario').removeAttribute('disabled')
        document.getElementById('delete-teacher').setAttribute('disabled','disabled')
        document.getElementById('edit-teacher').setAttribute('disabled','disabled')
        document.getElementById('professores').setAttribute('disabled','disabled')
        editProfessor = true
    }

    let editCurso = false
    let form_course = document.getElementById('form-course')
    form_course.addEventListener('submit', function(e){
        e.preventDefault()
        if(editCurso){ //Editando
            $.ajax({
                type: 'put',
                dataType: 'json',
                url: 'http://localhost/getlesson_api/curso/'+document.getElementById('cursos').value,
                data: {
                    nomeCurso: document.getElementById('nomeCurso').value,
                    jwt: localStorage.getItem('jwt')
                },
                success(data){
                    cancelarCurso()
                    editCurso = false
                    alert('Requisicao realizada')
                    console.log(data)
                },
                error(e){
                    cancelarCurso()
                    editCurso = false
                    alert('Erro de requisicao')
                    console.log(e)
                }
            })
        }else{ //Cadastrando
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: 'http://localhost/getlesson_api/curso/register',
                data: {
                    nomeCurso: document.getElementById('nomeCurso').value,
                    jwt: localStorage.getItem('jwt')
                },
                success(data){
                    cancelarCurso()
                    alert('Requisicao realizada')
                    console.log(data)
                },
                error(e){
                    cancelarCurso()
                    alert('Erro de requisicao')
                    console.log(e)
                }
            })
        }
    })
    function editarCurso(){
        document.getElementById('save-course').removeAttribute('disabled')
        document.getElementById('nomeCurso').removeAttribute('disabled')
        document.getElementById('delete-course').setAttribute('disabled','disabled')
        document.getElementById('edit-course').setAttribute('disabled','disabled')
        document.getElementById('cursos').setAttribute('disabled','disabled')
        editCurso = true
    }

    let editTurma = false
    let form_class = document.getElementById('form-class')
    form_class.addEventListener('submit', function(e){
        e.preventDefault()
        if(editTurma){ //Editando

        }else{ //Cadastrando
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: 'http://localhost/getlesson_api/turma/register',
                data: {
                    nomeTurma: document.getElementById('nomeTurma').value,
                    semestreTurma: document.getElementById('semestreTurma').value,
                    anoTurma: document.getElementById('anoTurma').value,
                    ultimoDiaTurma: document.getElementById('ultimoDiaTurma').value,
                    idCurso: document.getElementById('idCurso').value,
                    idPeriodo: document.getElementById('idPeriodo').value,
                    jwt: localStorage.getItem('jwt')
                },
                success(data){
                    alert('Requisicao realizada')
                    console.log(data)
                },
                error(e){
                    alert('Erro de requisicao')
                    console.log(e)
                }
            })
        }
    })

    let editComponente = false
    let form_component = document.getElementById('form-component')
    form_component.addEventListener('submit', function(e){
        e.preventDefault()
        if(editComponente){ //Editando

        }else{ //Cadastrando
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: 'http://localhost/getlesson_api/componente/register',
                data: {
                    nomeComponente: document.getElementById('nomeComponente').value,
                    siglaComponente: document.getElementById('siglaComponente').value,
                    jwt: localStorage.getItem('jwt')
                },
                success(data){
                    alert('Requisicao realizada')
                    console.log(data)
                },
                error(e){
                    alert('Erro de requisicao')
                    console.log(e)
                }
            })
        }
    })

    //Delete
    function excluirProfessor(){
        $.ajax({
            type: 'delete',
            dataType: 'json',
            url: 'http://localhost/getlesson_api/user/'+document.getElementById('professores').value,
            data: {
                jwt: localStorage.getItem('jwt')
            },
            success(data){
                cancelarProfessor()
                alert('Requisicao realizada')
                console.log(data)
            },
            error(e){
                cancelarProfessor()
                alert('Erro de requisicao')
                console.log(e)
            }
        })
    }
    function excluirCurso(){
        $.ajax({
            type: 'delete',
            dataType: 'json',
            url: 'http://localhost/getlesson_api/curso/'+document.getElementById('cursos').value,
            data: {
                jwt: localStorage.getItem('jwt')
            },
            success(data){
                cancelarCurso()
                alert('Requisicao realizada')
                console.log(data)
            },
            error(e){
                cancelarCurso()
                alert('Erro de requisicao')
                console.log(e)
            }
        })
    }

    //Selects preenchidos
    let allCursos = {}
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://localhost/getlesson_api/curso',
        data: {
            jwt: localStorage.getItem('jwt')
        },
        success(data){
            allCursos = data
            var selects = "";
            if(data.data !== "Cursos Não encontrados"){
                for(let i=0;i<data.data.length;i++){
                    selects += `<option value="${data.data[i].idCurso}">${data.data[i].nomeCurso}</option>`
                }
                var selectTurmas = document.getElementById('idCurso')
                selectTurmas.innerHTML = selects
                var cursos = document.getElementById('cursos')
                cursos.innerHTML = selects
            }
            alert('Requisicao realizada')
            console.log(data)
        },
        error(e){
            alert('Erro de requisicao')
            console.log(e)
        }
    })

    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://localhost/getlesson_api/componente',
        data: {
            jwt: localStorage.getItem('jwt')
        },
        success(data){
            var selects = "";
            for(let i=0;i<data.data.length;i++){
                selects += `<option value="${data.data[i].idComponente}">${data.data[i].nomeComponente}</option>`
            }
            var componentes = document.getElementById('componentes')
            componentes.innerHTML = selects
            alert('Requisicao realizada')
            console.log(data)
        },
        error(e){
            alert('Erro de requisicao')
            console.log(e)
        }
    })

    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://localhost/getlesson_api/turma',
        data: {
            jwt: localStorage.getItem('jwt')
        },
        success(data){
            var selects = "";
            for(let i=0;i<data.data.length;i++){
                selects += `<option value="${data.data[i].idTurma}">${data.data[i].nomeTurma}</option>`
            }
            var turmas = document.getElementById('turmas')
            turmas.innerHTML = selects
            alert('Requisicao realizada')
            console.log(data)
        },
        error(e){
            alert('Erro de requisicao')
            console.log(e)
        }
    })

    let allProfessores = {}
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://localhost/getlesson_api/user',
        data: {
            jwt: localStorage.getItem('jwt')
        },
        success(data){
            allProfessores = data
            var selects = "";
            if(data.data !== "nenhum usuário encontrado"){
                for(let i=0;i<data.data.length;i++){
                    selects += `<option value="${data.data[i].idUsuario}">${data.data[i].nomeUsuario}</option>`
                }
                var professores = document.getElementById('professores')
                professores.innerHTML = selects
            }
            alert('Requisicao realizada')
            console.log(data)
        },
        error(e){
            alert('Erro de requisicao')
            console.log(e)
        }
    })

    //Select selecionado
    jQuery("#professores").change(function(){
        for(let i=0;i<allProfessores.data.length;i++){
            let id = document.getElementById('professores').value
            if(id === allProfessores.data[i].idUsuario){
                let nomeUsuario = document.getElementById('nomeUsuario')
                nomeUsuario.value = allProfessores.data[i].nomeUsuario
                let emailUsuario = document.getElementById('emailUsuario')
                emailUsuario.value = allProfessores.data[i].emailUsuario
                document.getElementById('new-teacher').setAttribute('disabled','disabled')
                document.getElementById('edit-teacher').removeAttribute('disabled')
                document.getElementById('delete-teacher').removeAttribute('disabled')
                document.getElementById('cancel-teacher').removeAttribute('disabled')
            }
        }
    })
    jQuery("#cursos").change(function(){
        for(let i=0;i<allCursos.data.length;i++){
            let id = document.getElementById('cursos').value
            if(id === allCursos.data[i].idCurso){
                let nomeCurso = document.getElementById('nomeCurso')
                nomeCurso.value = allCursos.data[i].nomeCurso
                document.getElementById('new-course').setAttribute('disabled','disabled')
                document.getElementById('edit-course').removeAttribute('disabled')
                document.getElementById('delete-course').removeAttribute('disabled')
                document.getElementById('cancel-course').removeAttribute('disabled')
            }
        }
    })

    //Botões novo
    function novoProfessor(){
        document.getElementById('save-teacher').removeAttribute('disabled')
        document.getElementById('cancel-teacher').removeAttribute('disabled')
        document.getElementById('nomeUsuario').removeAttribute('disabled')
        document.getElementById('emailUsuario').removeAttribute('disabled')
        document.getElementById('senhaUsuario').removeAttribute('disabled')
        document.getElementById('new-teacher').setAttribute('disabled','disabled')
        document.getElementById('professores').setAttribute('disabled','disabled')
    }
    function novoCurso(){
        document.getElementById('save-course').removeAttribute('disabled')
        document.getElementById('cancel-course').removeAttribute('disabled')
        document.getElementById('nomeCurso').removeAttribute('disabled')
        document.getElementById('new-course').setAttribute('disabled','disabled')
        document.getElementById('cursos').setAttribute('disabled','disabled')
    }

    //Botões cancelar
    function cancelarProfessor(){
        document.getElementById('nomeUsuario').setAttribute('disabled','disabled')
        document.getElementById('emailUsuario').setAttribute('disabled','disabled')
        document.getElementById('senhaUsuario').setAttribute('disabled','disabled')
        document.getElementById('new-teacher').removeAttribute('disabled')
        document.getElementById('save-teacher').setAttribute('disabled','disabled')
        document.getElementById('cancel-teacher').setAttribute('disabled','disabled')
        document.getElementById('edit-teacher').setAttribute('disabled','disabled')
        document.getElementById('delete-teacher').setAttribute('disabled','disabled')
        document.getElementById('nomeUsuario').value = ''
        document.getElementById('emailUsuario').value = ''
        document.getElementById('senhaUsuario').value = ''
        document.getElementById('professores').selectedIndex = -1
        document.getElementById('professores').removeAttribute('disabled')
    }
    function cancelarCurso(){
        document.getElementById('nomeCurso').setAttribute('disabled','disabled')
        document.getElementById('new-course').removeAttribute('disabled')
        document.getElementById('save-course').setAttribute('disabled','disabled')
        document.getElementById('cancel-course').setAttribute('disabled','disabled')
        document.getElementById('edit-course').setAttribute('disabled','disabled')
        document.getElementById('delete-course').setAttribute('disabled','disabled')
        document.getElementById('nomeCurso').value = ''
        document.getElementById('cursos').selectedIndex = -1
        document.getElementById('cursos').removeAttribute('disabled')
    }

}