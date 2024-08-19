import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Main = lazy(() => import("./pages/Main"));
import Home from "./components/Home";
import About from "./components/About";
import ServicePortfolio from "./components/ServicePortfolio";
import Consulting from "./components/Consulting";
import Beasi from "./components/Beasi";
import CaseStudies from "./components/CaseStudies";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import PageNotFound from "./ui/PageNotFound";
import SpinnerFullPage from "./ui/SpinnerFullPage";
import ScrollToTop from "./ui/ScrollToTop";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <ScrollToTop />
          <Routes>
            <Route element={<Main />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="service" element={<ServicePortfolio />} />
              <Route path="/service/consulting" element={<Consulting />} />
              <Route path="/technology/BESAI" element={<Beasi />} />
              <Route path="case-studies" element={<CaseStudies />} />
              <Route path="resources" element={<Resources />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          styles: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "grey",
            color: "lightGrey",
          },
        }}
      />
    </>
  );
};

export default App;
