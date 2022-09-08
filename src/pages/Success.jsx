import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    font-size:50px;
    font-weight:bold;
    color:#21C78C;
`
const Image = styled.img`
    width:70%;
    background-size:cover;

`
const Button = styled.button`
    padding:2x;
    color:white;
    background-color:teal;
    width:auto;
    height:2rem;
    cursor:pointer;
    border:none


`
const PaymentSuccess = ()=>{
const history = useNavigate();
    const location = useLocation()
console.log(location);
    return(
        <Container>
           payment successfull🥳
        <Image src="https://res.cloudinary.com/dwmm1r1ph/image/upload/v1647711175/jobs_pic/mmnvztigxjajt4ruygrp.jpg" />
      
      <Button onClick={()=>history('/')}>back to Home</Button>
        </Container>
    )
}


export default PaymentSuccess