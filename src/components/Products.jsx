import React,{ useEffect ,useState} from "react"
import { add } from "../store/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import { STATUSES } from '../store/productSlice';
import {fetchProducts} from "../store/productSlice"
function Products() {
    //const [products, setProducts] = useState([])
    const { data: products, status } =useSelector((state)=>state.product)
    const dispath = useDispatch();
    
    useEffect(() => {
        //Logic with Thunk function use
        dispath(fetchProducts());




        // //LOgic with UseEffect Hook
        // const fetchProducts = async () => {
        //     const result = await fetch('https://fakestoreapi.com/products');
        //     const jsonData = await result.json();
        //     console.log(jsonData);
        //     setProducts(jsonData);

        // }
        // fetchProducts();
        
    }, [])
    
    const handleAdd = (product) => {
        dispath(add(product));
        
    }
     if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }

   return (
  <div className="productsWrapper">
    {
      products.map(product => (
        <div className="cart" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>${product.price}</h5>
          <button onClick={()=>handleAdd(product)} className="btn">Add to Cart</button>
        </div>
      ))
    }
  </div>
);
            
  

  
}

export default Products;