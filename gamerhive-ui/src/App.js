import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <>
      <HomePage />
      
        {/*   <BrowserRouter> <Routes>
          <Route exect path="/" element={<HomePage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/group/:id" element={<GroupPage />} />
        </Routes> </BrowserRouter>*/} 
    </>
  );
}

export default App;
