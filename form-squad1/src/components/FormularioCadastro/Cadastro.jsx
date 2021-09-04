import React from 'react';
import styled from 'styled-components';
import {Button} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import SelecionaPredio from '../SelecionaPredio/SelecionaPredio';

const Seletores = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: '10px';

`;


var data =new Date();
var ano = data.getFullYear();
var mes = data.getMonth();
var dia = data.getDate();

var data_inicio = ano + '-' + mes + '-' + dia;
console.log(data_inicio);


function FormularioCadastro(){
return (
    <div>
    <Seletores noValidate autoComplete="off">
    <TextField id="nome" label="nome" variant="outlined" fullWidth margin='normal'type='text'/>
    <TextField id="email" label="email" variant="outlined" fullWidth margin='normal'type='email' />
   
    <SelecionaPredio/>
    <Button variant="contained" color="primary"> Cadastrar</Button>
   
    </Seletores>





    </div>
)

}

export default FormularioCadastro;  