import { BrowserRouter as Router ,Route,Routes ,useNavigate } from "react-router-dom"
import Home from "./container/Home"
import Login from "./components/login";
const App = () => {
  return (
    <div className="bg-red-600">
      <Router>
        <Routes>
          <Route path="login" element={<Login/>}/>
          <Route
          path="/*"
          element={<Home/>}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App