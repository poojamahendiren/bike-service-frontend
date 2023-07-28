import {Navbar} from './components/Navbar';
import {Home} from './components/Home';
import { Footer } from './components/footer';
import { Form } from './components/form';
// import { Budgetbike } from './components/Budgetcar';
// import { Luxurybike } from './components/Luxurycar';
// import {Allbikes} from './components/Allcars';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Service } from './components/Service';
import {BookingTable} from './components/Booking'


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[<Navbar />,<Home/>,<Service/>,<BookingTable/>,<Form/>,<Footer/>]}/>
          {/* <Route path='/Allcars' element={<Allcars/>}/>
          <Route path='/Budgetcars' element={<Budgetcar/>}/>
          <Route path='/Luxurycars' element={<Luxurycar/>}/> */}
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
