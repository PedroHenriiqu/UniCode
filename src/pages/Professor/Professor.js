import React, { useState, useEffect } from "react";
import "../../css/Periodo/Professor.css"


function Professor(){
    const [professores, setProfessores] = useState([]);
    const [novoProfessor, setNovoProfessor] = useState({
      nome: "",
      matricula: "",
      telefone: "",
    });

    const [professorEditando, setProfessorEditando] = useState(null);
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    const storedProfessores = JSON.parse(localStorage.getItem("professores")) || [];
    setProfessores(storedProfessores);
  }, []);

    const adicionarProfessor = () => {
        try {
          if (novoProfessor.nome && novoProfessor.matricula && novoProfessor.telefone) {
            const updatedProfessores = [...professores, { ...novoProfessor }];
            setProfessores(updatedProfessores);
            setNovoProfessor({
              nome: "",
              matricula: "",
              telefone: "",
            });
            localStorage.setItem("professores", JSON.stringify(updatedProfessores));
          } else {
            alert("Falta campos a serem preenchidos!");
          }
        } catch (error) {
          console.error("Erro ao adicionar...", error);
        }
      };

      const editarProfessor = (index) => {
        const professorParaEditar = professores[index];
        setProfessorEditando(professorParaEditar);
        setNovoProfessor({
          nome: professorParaEditar.nome,
          matricula: professorParaEditar.matricula,
          telefone: professorParaEditar.telefone,
        });
        setEditando(true);
      };


      const excluirProfessor = (index) => {
        const novosProfessores = professores.filter((_, i) => i !== index);
        setProfessores(novosProfessores);
        setProfessorEditando(null);
        setNovoProfessor({
          nome: "",
          matricula: "",
          telefone: "",
        });
        setEditando(false);
        localStorage.setItem("professores", JSON.stringify(novosProfessores));
      };

    return(
        <body>
        <header>
            <h1>Professor<i className="bi bi-people-fill"></i></h1>
        </header>


        <div className="containerr">
            <div>
            <div className="modal-content">
                    <header className="modal-header">
                        <h2>Novo Professor</h2>
                        <span className="modal-close" id="modalClose"></span>
                    </header>
                    <form id="form" className="modal-form">
                        <input value={novoProfessor.nome}
                        onChange={(e) => setNovoProfessor({ ...novoProfessor, nome: e.target.value })} type="text" id="nome" data-index="new" className="modal-field" placeholder="Nome do Professor"
                        required></input>
                        <input value={novoProfessor.matricula}
                        onChange={(e) => setNovoProfessor({ ...     novoProfessor, matricula: e.target.value })}        type="text" id="matricula"     className="modal-field"    placeholder="Matricula do Professor"      required></input>
                        <input value={novoProfessor.telefone}
                        onChange={(e) => setNovoProfessor({ ...    novoProfessor, telefone: e.target.value })}    type="text" id="telefone"     className="modal-field" placeholder="Contato     do Professor" required></input>
                    </form>
                    <footer className="modal-footer">
                    <button onClick={adicionarProfessor} 
                    className="btn-action" id="salvar" >Salvar</button>
                    <button className="btn-action" id="cancelar" >Cancelar</button>
                    </footer>
                </div>
            </div>

            <table id="tableProf" className="tabela">
                <thead>
                    <tr>
                        <th>Nome do Professor:</th>
                        <th>Matrícula do Professor:</th>
                        <th>Contado:</th>
                        <th>Ação:</th>
                    </tr>
                </thead>
                <tbody>
                {professores.map((professor, index) => (
                <tr key={index}>
                  <td >{professor.nome}</td>
                  <td >{professor.matricula}</td>
                  <td >{professor.telefone}</td>
                  <td class="tb-acao">
                    <button onClick={() => editarProfessor(index)} type="button" class="btn-action" id="edit-${index}">Editar</button>
                    <button onClick={() => excluirProfessor(index)} type="button" class="btn-action" id="delete-${index}" >Excluir</button>
                    </td>
                </tr>
              ))}

                </tbody>
            </table>
        </div>

        
    </body>

    );


}

export default Professor;