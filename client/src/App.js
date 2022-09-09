import { Routes, Route } from 'react-router-dom';
import Subs from './components/subs/Subs';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import Topics from './components/topics/Topics';

// this is defining your navigation routes for front end
// if you want a new page, you have to have a route 
const App = () => (
  <>  
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/subs' element={<Subs />} />
      {/* :subId is a placeholder for the parent id */}
      <Route path='/:subId/topics' element={<Topics />} />
      {/* mainly for all other routes go here */}
      <Route path='/*' element={<Nomatch />} />
    </Routes>
    {/* <Footer /> */}
  </>
)

export default App;
