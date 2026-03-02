import './App.css';
import { Alert } from './Alert';

function App() {
  return <Alert type='warning' heading='success' closable onClose={(data) => console.log(data)}> This is from children</Alert> //the type and heading collectively sends as prop object

  //change in the props cause to component re-render
  //children  is known as implicit prop
  //type and heading are explicit props
  //the default value of closable is true. //if no value provided
}


export default App;
