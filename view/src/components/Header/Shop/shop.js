import React from 'react' ;
import './shop.css' ;

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => console.log(data));
    }, []);














    return(

<div className="shob-container">

    
    <div className='product-container'>
<h3>this is for product</h3>
    </div>


    <div className='cart-container'>
<h4>order summary</h4>
    </div>



</div>







    );
}
export default Shop ;