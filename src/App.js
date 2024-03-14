import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Home/Homepage';
import Productinfopage from './Pages/Productinfopage/Productinfopage';
import ScroolTop from './Components/Scrool/ScroolTop';
import CartPage from './Pages/Cartpage/CartPage';
import SignUp from './Pages/Register/SignUp';
import Login from './Pages/Register/Login';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import AdminPage from './Pages/AdminPage/AdminPage';
import AddProduct from './Pages/AdminPage/AddProduct';
import UpdateProductPage from './Pages/AdminPage/UpdateProductPage';
import { ProtectedRouteForUser } from './protectedRoute/ProtectedRouteForUser';
import { ProtectedRouteForAdmin } from './protectedRoute/ProtectedRouteForAdmin';
import AllProduct from './Pages/AllProduct/AllProduct';
import Category from './Components/Category/Cateogroy';
import CategoryPage from './Pages/Category/CategoryPage';

function App() {
  return (
    <div className="App">

    <ScroolTop/>
  <Routes>
        <Route path='/' element={<Homepage></Homepage>}/>
        <Route path='/' element={<Homepage></Homepage>}/>
        <Route path='/productinfo/:id' element={<Productinfopage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/user-dashboard' element={<ProtectedRouteForUser>
          <UserDashboard/>
        </ProtectedRouteForUser>}/>
        <Route path="/admin-dashboard" element={
        <ProtectedRouteForAdmin>
          <AdminPage />
        </ProtectedRouteForAdmin>
      } />
        <Route path="/addproduct" element={
         <ProtectedRouteForAdmin>
 <AddProduct />
        </ProtectedRouteForAdmin>
       } />
        <Route path="/update-product/:id" element={


<ProtectedRouteForAdmin>

<UpdateProductPage />
       </ProtectedRouteForAdmin>
        } />


        <Route path='/allproduct' element={<AllProduct/>}/>
        <Route path='/category/:categoryname' element={<CategoryPage/>}/>
      </Routes>
      


    </div>
  );
}

export default App;
