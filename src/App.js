import logo from './logo.svg';
import './App.css';
import Header from './UI/Header';
import Main from './UI/Main';
import Deployments from './Deployments/Deployments';

function App() {
  return (
    <>
    <Header></Header>
    <Main>
      <Deployments></Deployments>
    </Main>
    </>
  );
}

export default App;
