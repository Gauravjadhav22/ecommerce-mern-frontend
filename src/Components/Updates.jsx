import styled from "styled-components"
import {mobile} from "../responsive"
const Container = styled.div`
height:25px;
background-color:#207398;
color:white;
display:flex;
justify-content:center;
align-items:center;
font-size:14px;
font-weight:500;
padding:1px;
${mobile({height:"65px"})}

`


const Updates=()=>{
 
    return <Container style={{cursor:"pointer"}} ><h2 style={{marginRight:"50px",marginLeft:"20px"}}>News!📢</h2><h3>purchase above $10 and get Free Shipping </h3></Container>
}

export default Updates;