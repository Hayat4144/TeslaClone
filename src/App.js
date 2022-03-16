
import './App.css';
import Section from './Components/Section';
import Navbar from './Components/Navbar';


function App() {
  return (
   <>
      <Navbar/>
      <Section title="Model 3" Leftbtn=" CUSTOM ORDER "  Rightbtn="EXISTING INVENTORY" bgImg="/images/Modal3.png" description="Order online for Touchless Delivery"/>
      <Section title="Model x" Leftbtn=" CUSTOM ORDER "  Rightbtn="EXISTING INVENTORY" bgImg="/images/modelx.jpeg" description="Order online for Touchless Delivery" />
      <Section title="Model Y" Leftbtn=" CUSTOM ORDER "  Rightbtn="EXISTING INVENTORY" bgImg="/images/tt.jpg" description="Order online for Touchless Delivery"/>
      <Section title="Model S" Leftbtn=" CUSTOM ORDER "  Rightbtn="EXISTING INVENTORY" bgImg="/images/ModalS1.webp" description="Order online for Touchless Delivery"/>
      <Section title="Solar Panels"   Leftbtn=" ORDER NOW"  Rightbtn="LEARN MORE"bgImg="/images/soloarpanel.jpg" description="Lowest Cost Solar Panels in America "/>
      <Section title="Solar Roofs" Leftbtn="ORDER NOW"  Rightbtn="LEARN MORE" bgImg="/images/solarRoof.jpeg" description="Produce Clean Energy From Your Roof  "/>
 
   </>
  );
}

export default App;
