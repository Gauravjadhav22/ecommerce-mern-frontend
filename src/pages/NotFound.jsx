import React from "react"
import Styled from "styled-components"
import {useNavigate} from "react-router-dom"

const Container = Styled.div`
text-align:center;
display:column;
justify-content:center;
align-items:center;
`
const Image = Styled.img`

 width:50%;
 background-size:cover;
`
const Button = Styled.button`
background:teal;
padding:2px;
color:white;
font-weight:normal;
width:76px;
height:36px;
border:none;
border-radius:5px;
cursor:pointer;
margin-left:20px;
`

const NotFound = ()=>{
    const location = useNavigate();
    return (

        <Container>
            <h1 style={{color:"#3944F7"}}>PAge NOt FOund!..</h1>
            <Image src="https://res.cloudinary.com/dwmm1r1ph/image/upload/v1647081430/jobs_pic/oqolpxa9gsa5v86x6xvj.jpg" />
            <Button onClick={()=>location('/')} >Home</Button>
            <Button onClick={()=>location('/login')} >login</Button>
        </Container>
        
    )
}

export default NotFound;