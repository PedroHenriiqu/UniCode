import React from "react";


function Desafios(){
    return(
        <body>
        <header>
            <h1>Desafios<i class="bi bi-people-fill"></i></h1>
        </header>


        <div className="containerr">
            <button class="btn-form-cad" type="button"   id="cadastrarDesafios">CADASTRAR</button>

            <table id="tableDesafios" className="tabela">
                <thead>
                    <tr>
                        <th>Nome do Desafio:</th>
                        <th>Período:</th>
                        <th>Professor:</th>
                        <th>Data Início:</th>
                        <th>Data Fim:</th>
                        <th>Dia da Semana:</th>
                        <th>Hórario:</th>
                        <th>Salas:</th>
                        <th>Ação:</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>


            <div className="modal" id="modal">
                <div className="modal-content">
                    <header className="modal-header">
                        <h2>Novo Curso</h2>
                        <span className="modal-close" id="modalClose">&#10006;</span>
                    </header>
                    <form id="form" className="modal-form">
                        <input type="text" id="nome" data-index="new" className="modal-field" placeholder="Nome do Professor"
                        required></input>
                        <input type="text" id="cpf" className="modal-field" placeholder="CPF do Professor " required></input>
                        <input type="text" id="matricula" className="modal-field" placeholder="Matricula do Professor" required></input>
                        <input type="text" id="turno" className="modal-field" placeholder="Turno do Professor" required></input>
                        <input type="text" id="desafios" className="modal-field" placeholder="Desafios do Professor" required></input>
                    </form>
                    <footer className="modal-footer">
                    <button className="btn-action" id="salvar" >Salvar</button>
                    <button className="btn-action" id="cancelar" >Cancelar</button>
                    </footer>
                </div>
            </div>

        </div>
    </body>

    );
}

export default Desafios;