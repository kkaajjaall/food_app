import React from 'react'
import "./Cart.css";
import Scrollbars from "react-custom-scrollbars";
import Modal from '../Modal/Modal';
const items = [
    {
        id: 1,
        tittle: "Pasta",
        description: " Lorem ",
        price: "2599",
        img: < img src = "./img/food.jfif" className='product'/>,
        amount: 1

    },
    {
        id: 1,
        tittle: "Pasta",
        description: " Lorem ",
        price: "2599",
        img: < img src = "./img/food.jfif" className='product'/>,
        amount: 1

    },
    {
        id: 1,
        tittle: "Pasta",
        description: " Lorem ",
        price: "2599",
        img: < img src = "./img/food.jfif" className='product'/>,
        amount: 1

    },
    {
        id: 1,
        tittle: "Pasta",
        description: " Lorem ",
        price: "2599",
        img: < img src = "./img/food.jfif" className='product'/>,
        amount: 1

    },
    {
        id: 1,
        tittle: "Pasta",
        description: " Lorem ",
        price: "2599",
        img: < img src = "./img/food.jfif" className='product'/>,
        amount: 1

    },
    {
        id: 1,
        tittle: "Pasta",
        description: " Lorem ",
        price: "2599",
        img: < img src = "./img/food.jfif" className='product'/>,
        amount: 1

    },
    {
        id: 1,
        tittle: "Pasta",
        description: " Lorem ",
        price: "2599",
        img: < img src = "./img/food.jfif" className='product'/>,
        amount: 1

    },
    {
        id: 1,
        tittle: "Pasta",
        description: " Lorem ",
        price: "2599",
        img: < img src = "./img/food.jfif" className='product'/>,
        amount: 1

    },
    {
        id: 1,
        tittle: "Pasta",
        description: " Lorem ",
        price: "2599",
        img: < img src = "./img/food.jfif" className='product'/>,
        amount: 1

    },
    {
        id: 1,
        tittle: "Pasta",
        description: " Lorem ",
        price: "2599",
        img: < img src = "./img/food.jfif" className='product'/>,
        amount: 1
    }
    
]
const Cart = (props) => {
    return ( <Modal>
        <section className = "container my-5">
        <div className = "main-cart-section ">
            <div className='d-flex' >
            < p > you have < span > 3 </span> items in shoping cart</p >
        <button onClick={props.onhide}> Close</button>
            </div>
       
        <div className = "cart-items" >
        <Scrollbars>
        <div className = "cart-item-container" > {
            items.map((ele) => {

                const { id, tittle, description, price, img, amount } = ele;
                return ( <>
                    < div className = "container-info"
                    key = { id } >
                    <div className = "product-img" > { img } </div>

                    <div className = "product-tittle" >
                    <h3 > { tittle } </h3>
                     <p > { description } </p> </div>


                    <div className = "add-minus-quantity" >
                    <i class = "fas fa-minus" /> 
                    <input type = "text"  className = "ip"  />
                    <i class = "fas fa-plus" /> </div>

                    <div className = "price ">
                    <h3> { price } </h3> </div>

                    <div className = "remove-items">
                    <i  className = "fas fa-trash-alt remove" > </i>
                     </div>

                    </div> 
                    </>
                )
            })
        }
        </div>
         </Scrollbars> 
         </div>
        <div className = "total">
        <h3> Card total: < span > </span></h3>
        <button > checkout </button> 
        <button className = "btn3" > Clearall </button> </div> 
        </div> 
        </section>
        </Modal>
    )
}

export default Cart;