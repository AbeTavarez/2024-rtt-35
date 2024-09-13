import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <main>
      <Header />
      <Content color="blue" text="This is my first React Application!" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer />
    </main>
  );
}

export default App;
