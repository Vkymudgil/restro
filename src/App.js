import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import CustomerForm from './components/form/CustomerForm';
import DrinksContainer from './components/drinkComponent/DrinksContainer';
import MainCourse from './components/mainCourse/MainCourse';

function App() {
  return (
    <div className="App">
      <Header/>
      <CustomerForm/>
      <MainCourse/>
      <DrinksContainer/>

    </div>
  );
}

export default App;
