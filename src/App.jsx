import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomeIndex from "./pages/Home/HomeIndex";
import GalleryIndex from "./pages/gallery/GalleryIndex";
import GallerySinglePage from "./components/singlePage/GallerySinglePage";
import ContactIndex from "./pages/contact/ContactIndex";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeIndex />} />
          <Route path='/gallery' element={<GalleryIndex />} />
          <Route path='/gallery-single' element={<GallerySinglePage />} />
          <Route path="/contact-us" element={<ContactIndex/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
