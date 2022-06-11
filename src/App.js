import MainLayout from "./components/layout/MainLayout";
import {Route,Routes} from 'react-router-dom'
import Home from "./components/Home/Home";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recpies" element={() => <h4>Recpies</h4>} />
        <Route path="/popular" element={() =><h4>Popular recpies</h4>} />
      </Routes>
    </MainLayout>
  );
}

export default App;
