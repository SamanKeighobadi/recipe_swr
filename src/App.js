// React Router DOM
import { Route, Routes } from "react-router-dom";
// custom components
import MainLayout from "./components/layout/MainLayout";
import Home from "./components/Home/Home";
import LastRecpies from "./components/pages/LastRecpies/LastRecpies";
import PopularRecipes from "./components/pages/PopularRecpies/PopularRecipes";
import Admin from "./components/pages/Admin/Admin";
import NewAdmin from "./components/pages/Admin/create admin/NewAdmin";
// SWR and axios
import { SWRConfig } from "swr";
import axios from "axios";
import middleware from "./components/middleware/middleware";

function App() {
  return (
    <MainLayout>
      <SWRConfig
        value={{
          use:[middleware],
          suspense: true,
          refreshInterval: 3000,
          errorRetryInterval: false,
          revalidateOnFocus: false,
          fetcher: (...args) => axios.get(args).then((res) => res.data),
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/add_admin" element={<NewAdmin />} />
          <Route path="/last_recpies" element={<LastRecpies />} />
          <Route path="/popular" element={<PopularRecipes />} />
        </Routes>
      </SWRConfig>
    </MainLayout>
  );
}

export default App;
