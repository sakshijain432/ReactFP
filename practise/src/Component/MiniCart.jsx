import { useState } from "react"

function MiniCart() {
        const [cart, setCart] = useState([]);

    const products =[
        {id:1 , name: "Mobile" , price : "7000"},
        {id:2 , name: "Apple" , price : "500"},
        {id:3 , name: "TAble" , price : "70000"},
        {id:4 , name: "bat" , price : "100"},
    ]

    function handleCart(id) {
        if(cart.includes(id)) {
           setCart(cart.filter((itemid) => itemid != id));
        }
        else{
            setCart([...cart,id]);
        }
    }
   return(
        <div>
           <h1>Cart </h1>
           <h2>YOur cart has {cart.length} Items</h2>

           {
            products.map((item) => (
              <div key={item.id}>
                    <p>{item.name} - ${item.price}</p>
                    <button onClick={() => handleCart(item.id)}>{cart.includes(item.id) ? "Remove" : "Add"}</button>
              </div>
            ))}
        </div>
    );
    
}
export default MiniCart;