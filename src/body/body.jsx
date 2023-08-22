export default function Body(){

    const resultados=fetch('https://opentdb.com/api.php?amount=30&category=18').then(res=>{

    res.json().then(dados=>{
        mostraDados(dados);
    });

    }).catch(erro=>{
        this.console.log(erro+" erro na requisição da api")
    });

    function mostraDados(dados){
        const questoes=document.querySelector('#questoes');
    
        dados.forEach(element => {
            questoes.innerHTML +=   `<tr>
                                <td> ${element.difficulty} </td>
                                <td> ${element.question} </td>
                                    </tr>`
        });
    };
}