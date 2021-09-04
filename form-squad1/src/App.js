
import './App.css';
import FormularioCadastro from '../src/components/FormularioCadastro/Cadastro'
import {Container} from '@material-ui/core'

function App() {
  return (
    <Container component='article' maxWidth='sm' >
     
      <h1>Agendamento de  Estação de Trabalho</h1>
      <FormularioCadastro/>
     
    </Container>
  );
}

export default App;
