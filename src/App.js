import './App.css';
import Greetings from './components/Greetings';
import PropsIntro from './components/PropsIntro';
import Table from './components/Table';
// import EmployeeContainer from "./components/Employee";
import Company from './components/Company';
import CircleWrapper from './components/Circle';
import Students from './components/Students';
function App() {

 

  return (
    <div className="App">
      <header className="App-header">
       Hello Zosimo React Developer
       <PropsIntro />
       <Greetings />
       <Table />
       <Students />
       {/* <EmployeeContainer /> */}
       <Company 
        companyName = "Skillsoft"
        designation = "Analyst"
        committees = "Performance review, Data insights"
        forums = "StackOverflow, DataHelper"/>
        <CircleWrapper />
      </header>
    </div>
  );
}

export default App;
