// React Router DOM
import { Route, Routes } from "react-router-dom";
// custom components
import MainLayout from "./components/layout/MainLayout";
import Home from "./components/Home/Home";
import LastRecpies from "./components/pages/LastRecpies/LastRecpies";


function App() {
  return (
      
    <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/last_recpies" element={<LastRecpies />} />
          <Route path="/popular" element={() => <h4>Popular recpies</h4>} />
        </Routes>
    </MainLayout>
      
  );
}

export default App;
