import { Suspense } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <div>
        <Suspense fallback={<Loader />}>
          <AppRoutes />
        </Suspense>
      </div>
    </>
  );
}

export default App;
