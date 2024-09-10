import "./App.css";
import Article1 from "./components/Article1";
import Article2 from "./components/Article2";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Article1 />
        <Article2 />
        <Footer />
      </main>
    </>
  );
}

export default App;
