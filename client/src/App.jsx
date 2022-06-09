import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./screens/Home";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Users from "./screens/Users";
import ProfileSettings from "./screens/ProfileSettings";
import UserDetails from "./screens/UserDetails";
import NewPost from "./screens/NewPost";
import Post from "./screens/Post";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./lib/api/auth";
import { setUser } from "./lib/store/reducers/auth";
import { getErrorMessage } from "./lib/utils/api";
import Signout from "./screens/Signout";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUser = async () => {
      const user = await authService.status();

      if (!user._id || !user.username || !user.email) {
        return;
      }

      dispatch(setUser(user));
    };

    fetchUser();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signout" element={<Signout />} />

      <Route path="/users" element={<Users />} />
      <Route path="/users/:username" element={<UserDetails />} />
      <Route path="/profilesettings" element={<ProfileSettings />} />
      <Route path="/posts/:id" element={<Post/>}/>
      <Route path="/posts/new" element={<NewPost />} />
    </Routes>
  );
}

export default App;
