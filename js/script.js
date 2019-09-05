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
                email: document.getElementById('emailUsuario').value,
                pass: document.getElementById('senhaUsuario').value
            },
            success: function(data){
                localStorage.setItem('emailUsuario', document.getElementById('emailUsuario').value)
                localStorage.setItem('jwt', data.jwt)
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

    //Insert
    let form_teacher = document.getElementById('form-teacher')
    form_teacher.addEventListener('submit', function(e){
        e.preventDefault()
        $.ajax({
            type: 'post',
            url: 'http://localhost/getlesson_api/sing-up',
            dataType: 'json',
            data: {
                name: document.getElementById('nomeUsuario').value,
                nivel: "2",
                rm: "00000",
                email: document.getElementById('emailUsuario').value,
                pass: document.getElementById('senhaUsuario').value,
                jwt: localStorage.getItem('jwt')
            },
            success: function(data){
                alert('Requisicao realizada')
                console.log(data)
            },
            error: function (e){
                alert('Erro de requisicao')
                console.log(e)
            }
        })
    })
    let form_course = document.getElementById('form-course')
    form_course.addEventListener('submit', function(e){
        e.preventDefault()
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: 'http://localhost/getlesson_api/curso/register',
            data: {
                curso: document.getElementById('nomeCurso').value,
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
    })
    let form_class = document.getElementById('form-class')
    form_class.addEventListener('submit', function(e){
        e.preventDefault()
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: 'http://localhost/getlesson_api/turma/register',
            data: {
                nomeTurma: document.getElementById('nomeTurma').value,
                semestreTurma: document.getElementById('semestreTurma').value,
                anoTurma: document.getElementById('anoTurma').value,
                fimTurma: document.getElementById('ultimoDiaTurma').value,
                cursoTurma: document.getElementById('idCurso').value,
                periodoTurma: document.getElementById('idPeriodo').value,
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
    })
    let form_component = document.getElementById('form-component')
    form_component.addEventListener('submit', function(e){
        e.preventDefault()
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: 'http://localhost/getlesson_api/componente/register',
            data: {
                nomeComponente: document.getElementById('nomeComponente').value,
                sigla: document.getElementById('siglaComponente').value,
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
    })

    //SelectAll
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://localhost/getlesson_api/curso',
        data: {
            jwt: localStorage.getItem('jwt')
        },
        success(data){
            var selects = "";
            for(let i=0;i<data.data.length;i++){
                selects += `<option value="${data.data[i].idCurso}">${data.data[i].nomeCurso}</option>`
            }
            var selectTurmas = document.getElementById('idCurso')
            selectTurmas.innerHTML = selects
            var cursos = document.getElementById('cursos')
            cursos.innerHTML = selects
            //console.log(data)
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
            //console.log(data)
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
            //console.log(data)
        },
        error(e){
            alert('Erro de requisicao')
            console.log(e)
        }
    })
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://localhost/getlesson_api/user/1',
        data: {
            jwt: localStorage.getItem('jwt')
        },
        success(data){
            var selects = "";
            for(let i=0;i<data.data.length;i++){
                selects += `<option value="${data.data[i].idUsuario}">${data.data[i].nomeUsuario}</option>`
            }
            var professores = document.getElementById('professores')
            professores.innerHTML = selects
            console.log(data)
        },
        error(e){
            alert('Erro de requisicao')
            console.log(e)
        }
    })
}