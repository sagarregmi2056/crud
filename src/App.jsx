import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./Components/Create";
import HeadBar from "./Components/HeadBar";
import Read from "./Components/Read";
import Edit from "./Components/Edit";
import Delete from "./Components/Delete";
// import CompA from "./Components/CompA";
// import { createContext } from "react";

// export const namedcontext = createContext();

function App() {
  return (
    <>
      <HeadBar />
      {/* <namedcontext.Provider value="mailya paisa 5000 pathaidiya c lai ho? tara ko marfat">
        <CompA />
      </namedcontext.Provider> */}

      <Routes>
        <Route path="/create" element={<Create />} />

        <Route path="*" element={<Create />} />

        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Edit />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </>
  );
}

export default App;
