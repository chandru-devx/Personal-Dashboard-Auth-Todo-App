import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./component/Header"
import Taskprovider from "./taskProvider/Taskprovider"
import HomePage from "./taskProvider/HomePage"
import SignUp from "./component/profile/SignUp"
import Login from "./component/profile/Login"
import Profile from "./component/profile/Profile"
import { useEffect, useState } from "react"
import { auth } from "./service/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { Navigate } from "react-router-dom"
import { Toaster } from "react-hot-toast"
// import ProtectedRoute from "./component/profile/ProtectedRoute"

const App = () => {


  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserData(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Header />
      <Routes>
        {/* <Route
          path="/task"
          element={
            <ProtectedRoute>
              <TaskPage />
            </ProtectedRoute>
          }
        /> */}

        {/* login page */}
        <Route
          path="/login"
          element={!userData ? <Login /> : <Navigate to="/task" />}
        />

        {/* signup */}
        <Route
          path="/signup"
          element={!userData ? <SignUp /> : <Navigate to="/task" />}
        />

        {/* protected task page */}
        <Route
          path="/task"
          element={userData ? <Taskprovider /> : <Navigate to="/login" />}
        />

        {/* profile protected */}
        <Route
          path="/profile"
          element={userData ? <Profile /> : <Navigate to="/login" />}
        />

        {/* default route */}
        <Route
          path="/"
          element={<Navigate to={userData ? "/task" : "/login"} />}
        />

      </Routes>


    </BrowserRouter>

  )
}

export default App