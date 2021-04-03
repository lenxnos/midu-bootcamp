import './App.css';
import Mensaje from './Message'


const Description = () => (
  <p>
    Esta es la app del curso fullstack bootcamp
  </p>
)

const App = () => {
  return (
    <div className="App">
      <Mensaje color="green" message='Estamos trabajando'/> 
      <Mensaje color="red" message='En un curso' />
      <Mensaje color="blue" message='De React' />
      <Description />
    </div>
  );
};

export default App;
