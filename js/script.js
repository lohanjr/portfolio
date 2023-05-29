function GetProjects(){ // Função para puxar projetos do meu perfil do github
    const gitHub = 'https://api.github.com/users/lohanjr/repos';
    var carregando = document.getElementById('loading-id');

    fetch(gitHub,{
        method: 'GET'
    })
    .then((response) => response.json())
    .then((response) => {
        carregando.style.display = 'none';
        showProjects(response);
    })
    .catch((e) => {
        console.log(e);
    })
}

function showProjects(data){

}

GetProjects();