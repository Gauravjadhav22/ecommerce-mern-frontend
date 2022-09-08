import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(75, 75, 75, 0.5), rgba(75, 75, 75, 0.5)),
    url("https://res.cloudinary.com/dwmm1r1ph/image/upload/v1647795910/jobs_pic/r1ubolrhdcrb6c7ep5pm.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: grid;
  padding-left: 10px;
  padding-right: 20px;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 2px;
`;
const Error = styled.span`
  color: red;
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPass, setCPass] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    if (cPass === password) {
      console.log(username, email, password);
      register(dispatch, { username, email, password });
    } else {
      alert("password does not matched!...");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            onChange={(e) => setName(e.target.value)}
            type="email"
            placeholder="Full Name"
          />
          <Input
            onChange={(e) => setUsername(e.target.value)}
            type="email"
            placeholder="username"
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <Input
            onChange={(e) => setCPass(e.target.value)}
            placeholder="Confirm Password"
            type="password"
          />

          <Agreement>
            <a
              href="#Blank"
              style={{ textDecorationLine: "underline", fontSize: "15px" }}
            >
              Privacy Policy
            </a>
            <br />
            <Link style={{ fontSize: "larger" }} to="/login">
              Already Having Account Log In
            </Link>
          </Agreement>

          <Button onClick={handleClick} disabled={isFetching}>
            CREATE
          </Button>
        </Form>
        {error && <Error>Something went wrong!</Error>}
      </Wrapper>
    </Container>
  );
};

export default Register;
