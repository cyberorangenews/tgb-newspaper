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
    
      <Route path="/tgb-newspaper" index element={<MainPage />} />

      <Route path="/tgb-newspaper/editions" element={<Editions />} /> 

      <Route path="/tgb-newspaper/edition/:edition" element={<SingleEdition />} />

      <Route path="/tgb-newspaper/memes" element={<Memes />} /> 

      <Route path="/tgb-newspaper/student-profiles" element={<StudentProfiles />} /> 

      <Route path="/tgb-newspaper/about-us" element={<AboutUs />} /> 

      <Route path="/tgb-newspaper/article/:name/:edition" element={<Article />} /> 

      <Route path="/tgb-newspaper/single-profile/:studentname" element={<SingleProfile />} /> 

      <Route path="*" element={<ErrorPage />} status={404} /> 
    
    </Routes>
  );
}

export default App; 
