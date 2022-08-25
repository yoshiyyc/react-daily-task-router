import './App.css';
import {
  HashRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
  useNavigate,
  useParams
} from 'react-router-dom';



const Todo = () => {
  let navigate = useNavigate();

  const Logout = () => {
    const handleLogout = () => {
      navigate("/login");
    };

    return (
      <input type="submit" value="登出" onClick={handleLogout}/>
    );
  };

  return (
    <>
      <p>這是 Todo 頁面 
      </p>
      <Logout />
    </>
  );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

const Post = () => {
  return (
    <>
      <p>
        這是文章頁面     
      </p>
      <Outlet />
    </>
  );
};

const PostId = () => {
  const params = useParams();
  return <p>Post ID: {params.postId}</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post/myPostId">
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/post" element={<Post />}>
            <Route path=":postId" element={<PostId />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
