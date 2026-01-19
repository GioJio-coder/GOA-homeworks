import FallbackUI from "./Component/FallbackUI ";
import ErrorBoundary from "./src/Component/ErrorBoundary";

const App = () => {
  return (
    <>
    <ErrorBoundary></ErrorBoundary>
    <FallbackUI></FallbackUI>
    </>
  )
}

export default App;