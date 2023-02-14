import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PopularCourses from "./components/PopularCourses";
import Universities from "./components/Universities";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <PopularCourses />
      <Universities />
      <Footer />
    </div>
  );
}

export default App;
