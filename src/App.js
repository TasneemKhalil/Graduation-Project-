import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AddSub from './components/AddSub';
import Post from './components/Post';
import Comment from './components/Comment';
import Starting from './components/Starting'
import AddTask from './components/AddTask';
import Inbox from './components/Inbox';
import { useContext } from "react";
import { AuthContext, AuthContextProvider } from "./contexts/AuthContext";

function App() {
  // const { currentUser } = useContext(AuthContext);

  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/SignIn" />;
  //   }

  //   return children;
  // };

  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Starting />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path="/AddSub" element={<AddSub />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Comment" element={<Comment />} />
          <Route path="/AddTask" element={<AddTask />} />
          <Route path="/Inbox" element={<Inbox />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
