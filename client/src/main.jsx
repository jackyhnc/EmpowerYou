import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { AuthContextProvider } from './contexts/AuthContext'
import Landing from './routes/landingpage/landingpage'
import Signup from './routes/signuppage/signuppage'
import Login from './routes/loginpage/loginpage'
import Home from './routes/home/home'

import ProtectedRoute from "./routes/ProtectedRoutes"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/home",
    element: <ProtectedRoute><Home/></ProtectedRoute>
  },
  {
    path: "/",
    element: <Landing/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/login",
    element: <Login/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthContextProvider>
)
