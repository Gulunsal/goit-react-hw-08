import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { useNavigate } from "react-router";

export default function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user, token} = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      await dispatch(logout(token)).unwrap();

      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div>
      <p>Welcome {user.name}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
