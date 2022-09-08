import { AccountCircleOutlined } from "@material-ui/icons";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import styled from "styled-components";
import { mobile } from "../responsive";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MiniContainer = styled.div`
text-decoration:underline;
width:fit-content;
margin-top:10%;
z-index:1;
background-color:white;
display:inline-Grid;
border:1px solid black;
align-items:center;
justify-content:left;
margin-left:2px;
font-size:larger;
font-weight:medium;
&:hov {
  transform: scale(1.1); 
${mobile({ fontSize: "large" })}

 `;

const dropArrowlogo = {
  display: "inline-grid",
  border: "3px solid black",
  borderRadius: "50%",
  cursor: "pointer",
  padding: "1px",
  marginRight: "40px",
};

const Profile = () => {
  const username =
    useSelector((state) => state.user.user.currentUser.user.name) || "username";
  const [dropArrow, setDropArrow] = useState(false);
  const loggingOut=()=>{
    localStorage.removeItem("persist:root")
    window.location.reload()
  }
  return (
    <Container>
      <div onClick={() => setDropArrow(!dropArrow)} style={dropArrowlogo}>
        {dropArrow ? (
          <div className="navigation">
            <ArrowDropDownIcon
              style={{ marginTop: "-5px" }}
              className="arrows"
            />
            <MiniContainer Classname="MiniContainer">
              <NavLink className="LinkItem" to="/orders">
                Your Orders
              </NavLink>
              <NavLink className="LinkItem" to="/cart">
                Cart
              </NavLink>
              <NavLink onClick={loggingOut} to="/" className="LinkItem">LOG OUT</NavLink>
            </MiniContainer>
          </div>
        ) : (
          <ArrowDropUpIcon className="arrows" />
        )}
      </div>

      <div style={{ color: "black", textDecoration: "none" }}>
        <div
          style={{
            marginLeft: "15px",
            display: "block",
            justifyContent: "space-around",
            alignItems: "center",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          <AccountCircleOutlined
            style={{
              color: "black",
              marginLeft: "21px",
              marginBottom: "-25px",
            }}
          />
          <h4>{username}</h4>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
