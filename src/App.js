import logo from './logo.svg';
import './App.css';
import Header from './UI/Header';
import Main from './UI/Main';
import Deployments from './Deployments/Deployments';
import Daemonsets from './Daemonsets/Daemonsets';
import Environments from './Environments/Environments';

function App() {
  return (
    <>
    <Header></Header>
    <Main>
      <Deployments></Deployments>
      <Daemonsets></Daemonsets>
      <Environments></Environments>
    </Main>
    </>
  );
}

export default App;
