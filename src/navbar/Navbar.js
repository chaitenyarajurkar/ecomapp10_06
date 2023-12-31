import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCartDetailByID, getCartDetailsApi } from '../apicalls/apicalls';
import { getCartData } from '../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartData = useSelector((state) => {
        return state.reducer.cartDetail
      });
    const isLogin = localStorage.getItem("isLogin");
    const isAdmin = localStorage.getItem("isAdmin");
    const userId = localStorage.getItem("userid");

    const onLogout=()=>{
        localStorage.clear();
        navigate('/')
        window.location.reload();

    }
    useEffect(()=>{
        getCartDetailByID(userId).then((res)=>{
            console.log(res);
        })
        getCartDetailsApi(userId).then((res) => {
            console.log(res);
            dispatch(getCartData(res));
          })
    },[])
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light  justify-content-between">
                <Link className="navbar-brand" to="/">Ecomm</Link>
                <button className="navbar-toggler" type="button" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/allproduct">AllProducts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mobile">Mobile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/camera">Camera</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/laptop">Laptop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tablet">Tablet</Link>
                        </li>
                      {isAdmin &&  <li className="nav-item">
                            <Link className="nav-link" to="/addproduct">Add Product</Link>
                        </li>}

                        {isLogin &&  <li className="nav-item ">
                        <Link className="nav-link" to="/cartDetails">
                        <FontAwesomeIcon icon={faCartShopping} /><sup>{cartData.length}</sup>
                        </Link>
                        </li>}
                    </ul>

                </div>
                {!isLogin && <><div className="form-inline ">
                <Link className="nav-link " to="/login">Login</Link>
                </div>
                &nbsp; &nbsp;
                <div className="form-inline ">
                        <Link className="nav-link" to="/signup">Signup</Link>
                </div> </> }
                {isLogin && <><div className="form-inline"><span onClick={()=>onLogout()}>Logout</span> </div></> }
            </nav>
        </div>
    );
};

export default Navbar;