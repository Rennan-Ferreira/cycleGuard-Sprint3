import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function DadosCliente() {
    return (
        <div className="cliente-form">
            <div className="header">
                <button className="button-black">&#8592; Voltar</button>
            </div>
            <form>
                <div className="section">
                    <div className='title'>
                        <h2>PARA CONTINUAR PRECISAMOS CONFIRMAR ALGUNS DADOS, OK?</h2>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cpf">CPF:</label>
                        <input type="text" id="cpf" name="cpf" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="idade">Idade:</label>
                        <input type="text" id="idade" name="idade" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefone">Telefone:</label>
                        <input type="text" id="telefone" name="telefone" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" required />
                    </div>
                </div>
                <button type="submit">Continuar</button>
            </form>
        </div>
    );
};
