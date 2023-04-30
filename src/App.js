// import { Button } from "@chakra-ui/react";
// import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";

// function App() {
//   return (
//        <Router>
//         <div>Dghfgasf</div>
//         <Button colorScheme={'facebook'}>Click</Button>
//         <Button colorScheme={'facebook'} m={6}>Click</Button>
//         <Button colorScheme={'facebook'} m={6} py={5}>Click</Button>

//           <Routes>
//             <Route />
//           </Routes>
//        </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Videos from "./components/Videos";
import Footer from "./components/Footer";
import Upload from "./components/Upload";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
       <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
       </Router>
  );
}

export default App;
