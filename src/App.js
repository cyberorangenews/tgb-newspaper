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
    
      <Route path="/practice-" index element={<MainPage />} />

      <Route path="/practice-/editions" element={<Editions />} /> 

      <Route path="/practice-/edition/:edition" element={<SingleEdition />} />

      <Route path="/practice-/memes" element={<Memes />} /> 

      <Route path="/practice-/student-profiles" element={<StudentProfiles />} /> 

      <Route path="/practice-/about-us" element={<AboutUs />} /> 

      <Route path="/practice-/article/:name/:edition" element={<Article />} /> 

      <Route path="/practice-/single-profile/:studentname" element={<SingleProfile />} /> 

      <Route path="*" element={<ErrorPage />} status={404} /> 
    
    </Routes>
  );
}

export default App; 
