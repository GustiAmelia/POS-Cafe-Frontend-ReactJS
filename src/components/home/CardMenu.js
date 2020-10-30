import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import exampleImage from '../../assets/image/bear.png';
import {itemToCart} from '../../redux/actions/menu';
import checkImg from '../../assets/image/tick.png';


const CardMenu =({menu})=> {

  const dispatch = useDispatch();

  const handleChoseProduct =()=>{
    dispatch(itemToCart(menu.id,menu.image,menu.product_name,menu.price))
  }
  let check;
    if(menu.selected === true){
      check=(
        <div className="check">
            <div className="check-img">
              <img src={checkImg} alt=""/>
            </div>
        </div>
      )
    }
  return (
    <div className='col mb-4'>
      <div className="card" onClick={handleChoseProduct}>
        <div style={{position:'relative'}}>
          <img src={process.env.REACT_APP_API_URL+'/'+menu.image} className="card-img-top" alt="..."/>
          {check}
        </div>
        <h5 className="card-title">{menu.product_name}</h5>
        <p className="card-text">{menu.price.toLocaleString('id', { style: 'currency', currency: 'IDR' })}</p>
      </div>
    </div>
  )
}

export default CardMenu;
