import React from 'react';
import './ClienteDados.css';
import Homedois from "../HomeDois/homedois";
import { Link } from 'react-router-dom';
import DadosBicicleta from '../DadosBicicleta/DadosBicicleta';


export default function DadosCliente() {
    return (
        <div className="cliente-data-form">
            <div className="cliente-data-header">

                <Link to='/homedois'>
                <button className="cliente-back-button">&#8592; Voltar</button>
                </Link>
            </div>
            <form className="cliente-form-container">
                <div className="cliente-title">
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
                <Link to='/DadosBicicleta'>
                <button type="submit" className="cliente-continue-button">Continuar</button>
                </Link>
            </form>
        </div>
    );
}