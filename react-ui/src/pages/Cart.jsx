import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import a7 from '../assets/images/a7.png';
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div`

`;

const Wrapper = styled.div`
    height: 100vh;
    padding:20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align:center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding:10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    display: flex;
    margin: 0px 10px;
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`; 
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 200px;
    margin-right: 20px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContgainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;
const ProductPrice = styled.div`
    font-size:30px;
    font-weight: 200;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px  solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;
 
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=> props.type === "total" && "500"};
    font-size: ${props=> props.type === "total" && "24px"};
`;
 
const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;


const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>
            Your Bag
        </Title>
        <Top>
            <TopButton>Continue Shopping</TopButton>
            <TopTexts>
                <TopTexts>Shopping Bag(2)</TopTexts>
                <TopTexts>Your Wishlist</TopTexts>
            </TopTexts>
            <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetails>
                        <Image src={a7}/>
                        <Details>
                            <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                            <ProductColor color="red"/>
                            <ProductId><b>Id:</b> 935673</ProductId>
                            <ProductSize><b>Size:</b> 37.5</ProductSize>
                        </Details>
                    </ProductDetails>
                    <PriceDetail>
                        <ProductAmountContgainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContgainer>
                        <ProductPrice>$ 20</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetails>
                        <Image src={a7}/>
                        <Details>
                            <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                            <ProductColor color="red"/>
                            <ProductId><b>Id:</b> 935673</ProductId>
                            <ProductSize><b>Size:</b> 37.5</ProductSize>
                        </Details>
                    </ProductDetails>
                    <PriceDetail>
                        <ProductAmountContgainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContgainer>
                        <ProductPrice>$ 20</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>Order Summary</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ 40</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>- $ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>$ 40</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
