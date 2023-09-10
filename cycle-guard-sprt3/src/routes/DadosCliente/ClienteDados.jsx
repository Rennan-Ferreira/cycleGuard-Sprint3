import { Link } from 'react-router-dom';
import React from 'react';
import './ClienteDados.css'

export default function DadosCliente() {
    return (
        <div className="cliente-data-form">
            <div className="cliente-data-header">
                <button className="cliente-back-button">&#8592; Voltar</button>
            </div>
            <form>
                <div className="cliente-form-section">
                    <div className='cliente-title'>
                        <h2>PARA CONTINUAR PRECISAMOS CONFIRMAR ALGUNS DADOS, OK?</h2>
                    </div>
                    <div className="cliente-form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" required />
                    </div>
                    <div className="cliente-form-group">
                        <label htmlFor="cpf">CPF:</label>
                        <input type="text" id="cpf" name="cpf" required />
                    </div>
                    <div className="cliente-form-group">
                        <label htmlFor="idade">Idade:</label>
                        <input type="text" id="idade" name="idade" required />
                    </div>
                    <div className="cliente-form-group">
                        <label htmlFor="telefone">Telefone:</label>
                        <input type="text" id="telefone" name="telefone" required />
                    </div>
                    <div className="cliente-form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" required />
                    </div>
                </div>
                <button type="submit" className="cliente-continue-button">Continuar</button>
            </form>
        </div>
    );
}
