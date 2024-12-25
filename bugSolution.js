import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserLayout />}>
          <Route index element={<User />} />
          {/* Add more nested routes for User here if needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div>; }
function About() { return <div>About</div>; }

function UserLayout() {
  const { id } = useParams();
  return (
    <div>
      <h2>User {id}</h2>
      <Outlet/>
    </div>
  );
}

function User() { return <div>User Details</div>; }