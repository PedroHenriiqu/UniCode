import React from "react";


function Salas(){
    return(
        <body>
        <header>
            <h1>Salas<i class="bi bi-people-fill"></i></h1>
        </header>


        <div className="containerr">
            <button class="btn-form-cad" type="button"   id="cadastrarSalas">CADASTRAR</button>

            <table id="tableSalas" className="tabela">
                <thead>
                    <tr>
                        <th>Andar da Sala:</th>
                        <th>N° da Sala:</th>
                        <th>Prédio:</th>
                        <th>Quantidades de Lugares:</th>
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

export default Salas;