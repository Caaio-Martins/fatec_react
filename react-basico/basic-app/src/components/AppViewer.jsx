import styles from './AppViewer.module.css'
//Camada de Compilação de Serviços

const AppViewer = () => {
  //Retorno no display
  const professores = [
    { id: 1, nome: "José Armando Vargas", idade: 42, formacao: "Engenharia de Computação", titulacao: "Latu-Senso" },
    { id: 2, nome: "Carlos", idade: 25, formacao: "Administração de Empresas", titulacao: "Bacharel" },
    { id: 3, nome: "Sofia", idade: 28, formacao: "Medicina", titulacao: "Doutora" },
    { id: 4, nome: "Miguel", idade: 35, formacao: "Ciência da Computação", titulacao: "Mestre" },
    { id: 5, nome: "Isabela", idade: 22, formacao: "Psicologia", titulacao: "Graduada" },
    { id: 6, nome: "Pedro", idade: 27, formacao: "Arquitetura", titulacao: "Bacharel" },
    { id: 7, nome: "Laura", idade: 29, formacao: "Direito", titulacao: "Doutora" },
    { id: 8, nome: "Guilherme", idade: 32, formacao: "Engenharia Civil", titulacao: "Mestre" },
    { id: 9, nome: "Sofia", idade: 26, formacao: "Biologia", titulacao: "Graduada" }
  ]

  return (
    <>

      <h2>Lista de Professores</h2>
      { /*
        professores.map((professor) =>{
          return (
            
              <div key={professor.id}>
                <ul>
                  <li><strong>Nome: </strong>{professor.nome}</li>
                  <li><strong>Idade: </strong>{professor.idade}</li>
                  <li><strong>Formação: </strong>{professor.formacao}</li>
                  <li><strong>Titulação: </strong>{professor.titulacao}</li>
                </ul>

            </div>
          )
        })
      */}

      <table>
        
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Formação</th>
            <th>Titulação</th>
          </tr>


          {professores.map((professor) => {
            return (

              <tr className={professor.id % 2 == 0 ? styles.linhaCinza : null} key={professor.id}>
                <td>{professor.id}</td>
                <td>{professor.nome}</td>
                <td>{professor.idade}</td>
                <td>{professor.formacao}</td>
                <td className={professor.titulacao=="Mestre" || professor.titulacao=="Doutora" ?
                styles.superTitulo : styles.normalTitulo}>{professor.titulacao}</td>
              </tr>
            )
          })
          }
        
      </table>


    </>
  )
}

export default AppViewer 