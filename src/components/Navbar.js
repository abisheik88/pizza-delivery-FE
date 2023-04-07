import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;

  const dispatch = useDispatch();

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
      <a className="navbar-brand" href="/">
          <img className="burger" src ="https://img.freepik.com/free-vector/little-nugget-logo-text-design_1308-69717.jpg?w=1480&t=st=1674021523~exp=1674022123~hmac=d132fa94b7a3380013fca6536cfcea8a43748cd9227182095b3d8ef8baab02b1"></img>
          </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i style={{ color: "black" }} className="fas fa-bars"></i>
          </span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            {currentUser ? ( <>
             <li className="nav-item mr-3">
             <a className="nav-link" href="/admin" style={{ color: "black" }}>
               Admin
             </a>
           </li>
              <div className="dropdown mt-2 ml-2">
                <a
                  style={{ color: "black" }}
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {currentUser.name}
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/orders">
                    Orders
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    <li>Logout</li>
                  </a>
                </div>
              </div>
              
              </>
            ) : (

              <>
              <li className="nav-item mr-3">
              <a className="nav-link" href="/Home" style={{ color: "black" }}>
                Home
              </a>
             
            </li>

              <li className="nav-item mr-3" >
                <a className="nav-link" href="/login" style={{ color: "black" }}>
                  Login
                </a>
              </li>
              </>
            )}
            <li className="nav-item">
              <a className="nav-link" href="/cart" style={{ color: "black" }}>
                Cart {cartstate.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}