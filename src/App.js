import { Route, Routes } from 'react-router-dom'; 
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage'; 
import Editions from './pages/Editions';
import Memes from './pages/Memes';
import StudentProfiles from './pages/StudentProfiles';
import AboutUs from './pages/AboutUs';
import Article from './pages/Article';
import SingleEdition from './pages/SingleEdition';
import SingleProfile from './pages/SingleProfile';

function App() {
  return (
    <Routes> 
    
      <Route path="" index element={<MainPage />} />

      <Route path="/editions" element={<Editions />} /> 

      <Route path="/edition/:edition" element={<SingleEdition />} />

      <Route path="/memes" element={<Memes />} /> 

      <Route path="/student-profiles" element={<StudentProfiles />} /> 

      <Route path="/about-us" element={<AboutUs />} /> 

      <Route path="/article/:name/:edition" element={<Article />} /> 

      <Route path="/single-profile/:studentname" element={<SingleProfile />} /> 

      <Route path="*" element={<ErrorPage />} status={404} /> 
    
    </Routes>
  );
}

export default App; 
