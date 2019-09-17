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
                    preencherProfessores()
                    editProfessor = false
                    alert('Requisicao realizada')
                    console.log(data)
                },
                error(e){
                    cancelarProfessor()
                    preencherProfessores()
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
                    preencherProfessores()
                    cancelarProfessor()
                    alert('Requisicao realizada')
                    console.log(data)
                },
                error: function (e){
                    cancelarProfessor()
                    preencherProfessores()
                    alert('Erro de requisicao')
                    console.log(e)
                }
            })
        }
    })

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
                    preencherCursos()
                    editCurso = false
                    alert('Requisicao realizada')
                    console.log(data)
                },
                error(e){
                    cancelarCurso()
                    preencherCursos()
                    editCurso = false
                    alert('Erro de requisicao')
                    console.log(e)
                }
            })
        }else{ //Cadastrando
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: 'http://localhost/getlesson_api/curso/add',
                data: {
                    nomeCurso: document.getElementById('nomeCurso').value,
                    jwt: localStorage.getItem('jwt')
                },
                success(data){
                    cancelarCurso()
                    preencherCursos()
                    alert('Requisicao realizada')
                    console.log(data)
                },
                error(e){
                    cancelarCurso()
                    preencherCursos()
                    alert('Erro de requisicao')
                    console.log(e)
                }
            })
        }
    })

    let editTurma = false
    let form_class = document.getElementById('form-class')
    form_class.addEventListener('submit', function(e){
        e.preventDefault()
        if(editTurma){ //Editando
            $.ajax({
                type: 'put',
                dataType: 'json',
                url: 'http://localhost/getlesson_api/turma/'+document.getElementById('turmas').value,
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
                    cancelarTurma()
                    preencherTurmas()
                    editTurma = false
                    alert('Requisicao realizada')
                    console.log(data)
                },
                error(e){
                    cancelarTurma()
                    preencherTurmas()
                    editTurma = false
                    alert('Erro de requisicao')
                    console.log(e)
                }
            })
        }else{ //Cadastrando
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: 'http://localhost/getlesson_api/turma/add',
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
                    cancelarTurma()
                    preencherTurmas()
                    alert('Requisicao realizada')
                    console.log(data)
                },
                error(e){
                    cancelarTurma()
                    preencherTurmas()
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
            $.ajax({
                type: 'put',
                dataType: 'json',
                url: 'http://localhost/getlesson_api/componente/'+document.getElementById('componentes').value,
                data: {
                    nomeComponente: document.getElementById('nomeComponente').value,
                    siglaComponente: document.getElementById('siglaComponente').value,
                    idTurma: document.getElementById('idTurma').value,
                    idUsuario: document.getElementById('idUsuario').value,
                    jwt: localStorage.getItem('jwt')
                },
                success(data){
                    cancelarComponente()
                    preencherComponentes()
                    editComponente = false
                    alert('Requisicao realizada')
                    console.log(data)
                },
                error(e){
                    cancelarComponente()
                    preencherComponentes()
                    editComponente = false
                    alert('Erro de requisicao')
                    console.log(e)
                }
            })
        }else{ //Cadastrando
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: 'http://localhost/getlesson_api/componente/add',
                data: {
                    nomeComponente: document.getElementById('nomeComponente').value,
                    siglaComponente: document.getElementById('siglaComponente').value,
                    idTurma: document.getElementById('idTurma').value,
                    idUsuario: document.getElementById('idUsuario').value,
                    jwt: localStorage.getItem('jwt')
                },
                success(data){
                    cancelarComponente()
                    preencherComponentes()
                    alert('Requisicao realizada')
                    console.log(data)
                },
                error(e){
                    cancelarComponente()
                    preencherComponentes()
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
    function editarCurso(){
        document.getElementById('save-course').removeAttribute('disabled')
        document.getElementById('nomeCurso').removeAttribute('disabled')
        document.getElementById('delete-course').setAttribute('disabled','disabled')
        document.getElementById('edit-course').setAttribute('disabled','disabled')
        document.getElementById('cursos').setAttribute('disabled','disabled')
        editCurso = true
    }
    function editarComponente(){
        document.getElementById('save-component').removeAttribute('disabled')
        document.getElementById('nomeComponente').removeAttribute('disabled')
        document.getElementById('siglaComponente').removeAttribute('disabled')
        document.getElementById('idTurma').removeAttribute('disabled')
        document.getElementById('idUsuario').removeAttribute('disabled')
        document.getElementById('delete-component').setAttribute('disabled','disabled')
        document.getElementById('edit-component').setAttribute('disabled','disabled')
        document.getElementById('componentes').setAttribute('disabled','disabled')
        editComponente = true
    }
    function editarTurma(){
        document.getElementById('save-class').removeAttribute('disabled')
        document.getElementById('nomeTurma').removeAttribute('disabled')
        document.getElementById('semestreTurma').removeAttribute('disabled')
        document.getElementById('anoTurma').removeAttribute('disabled')
        document.getElementById('ultimoDiaTurma').removeAttribute('disabled')
        document.getElementById('idCurso').removeAttribute('disabled')
        document.getElementById('idPeriodo').removeAttribute('disabled')
        document.getElementById('delete-class').setAttribute('disabled','disabled')
        document.getElementById('edit-class').setAttribute('disabled','disabled')
        document.getElementById('turmas').setAttribute('disabled','disabled')
        editTurma = true
    }

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
                preencherProfessores()
                alert('Requisicao realizada')
                console.log(data)
            },
            error(e){
                cancelarProfessor()
                preencherProfessores()
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
                preencherCursos()
                alert('Requisicao realizada')
                console.log(data)
            },
            error(e){
                cancelarCurso()
                preencherCursos()
                alert('Erro de requisicao')
                console.log(e)
            }
        })
    }
    function excluirTurma(){
        $.ajax({
            type: 'delete',
            dataType: 'json',
            url: 'http://localhost/getlesson_api/turma/'+document.getElementById('turmas').value,
            data: {
                jwt: localStorage.getItem('jwt')
            },
            success(data){
                cancelarTurma()
                preencherTurmas()
                alert('Requisicao realizada')
                console.log(data)
            },
            error(e){
                cancelarTurma()
                preencherTurmas()
                alert('Erro de requisicao')
                console.log(e)
            }
        })
    }
    function excluirComponente(){
        $.ajax({
            type: 'delete',
            dataType: 'json',
            url: 'http://localhost/getlesson_api/componente/'+document.getElementById('componentes').value,
            data: {
                jwt: localStorage.getItem('jwt')
            },
            success(data){
                cancelarComponente()
                preencherComponentes()
                alert('Requisicao realizada')
                console.log(data)
            },
            error(e){
                cancelarComponente()
                preencherComponentes()
                alert('Erro de requisicao')
                console.log(e)
            }
        })
    }

    //Selects preenchidos
    let allCursos = {}
    function preencherCursos(){
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
                }else if(data.data === "Cursos Não encontrados"){
                    $("#cursos").empty()
                }
                console.log(data)
            },
            error(e){
                alert('Erro de requisicao')
                console.log(e)
            }
        })
    }preencherCursos()

    let allComponentes = {}
    function preencherComponentes(){
        $.ajax({
            type: 'get',
            dataType: 'json',
            url: 'http://localhost/getlesson_api/componente',
            data: {
                jwt: localStorage.getItem('jwt')
            },
            success(data){
                allComponentes = data
                var selects = "";
                if(data.data !== "Nenhum Componente Existente"){
                    for(let i=0;i<data.data.length;i++){
                        selects += `<option value="${data.data[i].idComponente}">${data.data[i].nomeComponente}</option>`
                    }
                    var componentes = document.getElementById('componentes')
                    componentes.innerHTML = selects
                }else if(data.data === "Nenhum Componente Existente"){
                    $("#componentes").empty()
                }
                console.log(data)
            },
            error(e){
                alert('Erro de requisicao')
                console.log(e)
            }
        })
    }preencherComponentes()

    let allTurmas = {}
    function preencherTurmas(){
        $.ajax({
            type: 'get',
            dataType: 'json',
            url: 'http://localhost/getlesson_api/turma',
            data: {
                jwt: localStorage.getItem('jwt')
            },
            success(data){
                allTurmas = data
                var selects = "";
                if(data.data !== "Turmas Não encontrados"){
                    for(let i=0;i<data.data.length;i++){
                        selects += `<option value="${data.data[i].idTurma}">${data.data[i].nomeTurma}</option>`
                    }
                    var turmas = document.getElementById('turmas')
                    turmas.innerHTML = selects
                    var idTurma = document.getElementById('idTurma')
                    idTurma.innerHTML = selects
                }else if(data.data === "Turmas Não encontrados"){
                    $("#turmas").empty()
                    $("#idTurma").empty()
                }
                console.log(data)
            },
            error(e){
                alert('Erro de requisicao')
                console.log(e)
            }
        })
    }preencherTurmas()

    let allProfessores = {}
    function preencherProfessores(){
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
                    var idUsuario = document.getElementById('idUsuario')
                    idUsuario.innerHTML = selects
                }else if(data.data === "nenhum usuário encontrado"){
                    $("#professores").empty()
                }
                console.log(data)
            },
            error(e){
                alert('Erro de requisicao')
                console.log(e)
            }
        })
    }preencherProfessores()

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
    jQuery("#turmas").change(function(){
        for(let i=0;i<allTurmas.data.length;i++){
            let id = document.getElementById('turmas').value
            if(id === allTurmas.data[i].idTurma){
                let nomeTurma = document.getElementById('nomeTurma')
                nomeTurma.value = allTurmas.data[i].nomeTurma
                let semestreTurma = document.getElementById('semestreTurma')
                semestreTurma.selectedIndex = allTurmas.data[i].semestreTurma-1
                let anoTurma = document.getElementById('anoTurma')
                anoTurma.value = allTurmas.data[i].anoTurma
                let ultimoDiaTurma = document.getElementById('ultimoDiaTurma')
                ultimoDiaTurma.value = allTurmas.data[i].ultimoDiaTurma
                let idPeriodo = document.getElementById('idPeriodo')
                idPeriodo.selectedIndex = allTurmas.data[i].idPeriodo-1
                document.getElementById('new-class').setAttribute('disabled','disabled')
                document.getElementById('edit-class').removeAttribute('disabled')
                document.getElementById('delete-class').removeAttribute('disabled')
                document.getElementById('cancel-class').removeAttribute('disabled')

                let comboCurso = document.getElementById('idCurso')
                for(let y=0;y<comboCurso.length;y++){
                    if(allTurmas.data[i].idCurso === comboCurso.options[y].value){
                        comboCurso.selectedIndex = y
                    }
                }
            }
        }
    })
    jQuery("#componentes").change(function(){
        for(let i=0;i<allComponentes.data.length;i++){
            let id = document.getElementById('componentes').value
            if(id === allComponentes.data[i].idComponente){
                let nomeComponente = document.getElementById('nomeComponente')
                nomeComponente.value = allComponentes.data[i].nomeComponente
                let siglaComponente = document.getElementById('siglaComponente')
                siglaComponente.value = allComponentes.data[i].siglaComponente
                document.getElementById('new-component').setAttribute('disabled','disabled')
                document.getElementById('edit-component').removeAttribute('disabled')
                document.getElementById('delete-component').removeAttribute('disabled')
                document.getElementById('cancel-component').removeAttribute('disabled')

                let comboTurma = document.getElementById('idTurma')
                for(let y=0;y<comboTurma.length;y++){
                    if(allComponentes.data[i].idTurma === comboTurma.options[y].value){
                        comboTurma.selectedIndex = y
                    }
                }

                let comboProfessor = document.getElementById('idUsuario')
                for(let y=0;y<comboProfessor.length;y++){
                    if(allComponentes.data[i].idUsuario === comboProfessor.options[y].value){
                        comboProfessor.selectedIndex = y
                    }
                }
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
    function novaTurma(){
        document.getElementById('save-class').removeAttribute('disabled')
        document.getElementById('cancel-class').removeAttribute('disabled')
        document.getElementById('nomeTurma').removeAttribute('disabled')
        document.getElementById('semestreTurma').removeAttribute('disabled')
        document.getElementById('anoTurma').removeAttribute('disabled')
        document.getElementById('ultimoDiaTurma').removeAttribute('disabled')
        document.getElementById('idCurso').removeAttribute('disabled')
        document.getElementById('idPeriodo').removeAttribute('disabled')
        document.getElementById('new-class').setAttribute('disabled','disabled')
        document.getElementById('turmas').setAttribute('disabled','disabled')
    }
    function novoComponente(){
        document.getElementById('save-component').removeAttribute('disabled')
        document.getElementById('cancel-component').removeAttribute('disabled')
        document.getElementById('nomeComponente').removeAttribute('disabled')
        document.getElementById('siglaComponente').removeAttribute('disabled')
        document.getElementById('idTurma').removeAttribute('disabled')
        document.getElementById('idUsuario').removeAttribute('disabled')
        document.getElementById('new-component').setAttribute('disabled','disabled')
        document.getElementById('componentes').setAttribute('disabled','disabled')
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
    function cancelarTurma(){
        document.getElementById('nomeTurma').setAttribute('disabled','disabled')
        document.getElementById('semestreTurma').setAttribute('disabled','disabled')
        document.getElementById('anoTurma').setAttribute('disabled','disabled')
        document.getElementById('ultimoDiaTurma').setAttribute('disabled','disabled')
        document.getElementById('idCurso').setAttribute('disabled','disabled')
        document.getElementById('idPeriodo').setAttribute('disabled','disabled')
        document.getElementById('new-class').removeAttribute('disabled')
        document.getElementById('save-class').setAttribute('disabled','disabled')
        document.getElementById('cancel-class').setAttribute('disabled','disabled')
        document.getElementById('edit-class').setAttribute('disabled','disabled')
        document.getElementById('delete-class').setAttribute('disabled','disabled')
        document.getElementById('nomeTurma').value = ''
        document.getElementById('anoTurma').value = ''
        document.getElementById('ultimoDiaTurma').value = ''
        document.getElementById('semestreTurma').selectedIndex = 0
        document.getElementById('idCurso').selectedIndex = 0
        document.getElementById('idPeriodo').selectedIndex = 0
        document.getElementById('turmas').selectedIndex = -1
        document.getElementById('turmas').removeAttribute('disabled')
    }
    function cancelarComponente(){
        document.getElementById('nomeComponente').setAttribute('disabled','disabled')
        document.getElementById('siglaComponente').setAttribute('disabled','disabled')
        document.getElementById('idTurma').setAttribute('disabled','disabled')
        document.getElementById('idUsuario').setAttribute('disabled','disabled')
        document.getElementById('new-component').removeAttribute('disabled')
        document.getElementById('save-component').setAttribute('disabled','disabled')
        document.getElementById('cancel-component').setAttribute('disabled','disabled')
        document.getElementById('edit-component').setAttribute('disabled','disabled')
        document.getElementById('delete-component').setAttribute('disabled','disabled')
        document.getElementById('nomeComponente').value = ''
        document.getElementById('siglaComponente').value = ''
        document.getElementById('idTurma').selectedIndex = 0
        document.getElementById('idUsuario').selectedIndex = 0
        document.getElementById('componentes').selectedIndex = -1
        document.getElementById('componentes').removeAttribute('disabled')
    }

}