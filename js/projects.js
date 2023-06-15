function GetProjects(){ // Função para puxar projetos do meu perfil do github
    const gitHub = 'https://api.github.com/users/lohanjr/repos';
    let carregando = document.getElementById('loading-id');

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

function showProjects(data){ // Função para apropiar nomes, descrições e urls dos projetos vindas da API
    let unitsProjects = document.getElementById('api-projects');

    for(let i = 0; i < data.length; i++){
        let a = document.createElement("a");
        a.href = data[i]['clone_url'];
        a.target = 'blank_';
        a.title = data[i]['description'];
        let nameProject = document.createTextNode(data[i]['name']);
        a.appendChild(nameProject);
        unitsProjects.appendChild(a);
    }
}

GetProjects();