import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeToCart } from './redux/cartSlice';





function App() {
  const { product, cart, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  
  const purchaseHandler = (e) => {
    e.preventDefault();
    let name = e.target.options[e.target.selectedIndex].text;
    let price = parseInt(e.target.value);
    let itemObj = { name, price };
    dispatch(addToCart(itemObj))
  };

  const deleteHandle = (index, price) => {
    let deleteObject = { index, price }
    dispatch(removeToCart(deleteObject))
  }

  return (
    <>
      <div>
        <h2>Products</h2>
        <select onChange={(e) => purchaseHandler(e)}>
          {product.map((food, index) => {
            return (
              <option key={index} value={food.price}>
                {food.name}: {food.price}
              </option>
            );
          })}
          ;
        </select>
        <hr />
        <h2>CART</h2>
        <p>{cart.map((item, index) => {
          return <li key={index} onClick={()=>deleteHandle(index, item.price)}>{ item.name}</li>
        })}</p>
        <h2>TOTAL</h2>
        <p>{total}</p>
      </div>
    </>
  );
}

export default App
