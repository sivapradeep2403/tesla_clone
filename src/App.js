import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Temp from './components/temp'
import Model3 from './images/model-3.jpg'
import ModelY from './images/model-y.jpg'
import ModelS from './images/model-s.jpg'
import ModelX from './images/model-x.jpg'

function App() {
  return (
    <div>
      <NavBar/>
      <Temp model="Model 3" text="Order Online For Touchless Delivery" image={Model3}/>
      <Temp model="Model Y" text="Order Online For Touchless Delivery" image={ModelY}/>
      <Temp model="Model S" text="Order Online For Touchless Delivery" image={ModelS}/>
      <Temp model="Model X" text="Order Online For Touchless Delivery" image={ModelX}/>
    </div>
   
  );
}

export default App;
