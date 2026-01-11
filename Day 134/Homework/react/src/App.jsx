import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { ThemeContext } from "./ThemeContext";

const App = () => {
  return (
    <>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
      <ThemeContext></ThemeContext>
    </>
  )
};

export default App;