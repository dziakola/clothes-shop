import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';

const Product = props => {
  const [currentColor, setColor] = useState(`${props.colors[0]}`);
  const [currentSize, setSize] = useState(`${props.sizes[0].names}`);
  

  const getPrice = () => {
    for(let size of props.sizes){
      if(size.names === currentSize){
      return props.basePrice + size.additionalPrice
      }
    }
  }
  const addToShoppingCart = (e) => {
    //w koszyku ma się znaleźć: nazwa produktu, cena końcowa, wybrane opcje
    //jeśli id produktu równa się id produktu klikniętego buttona to:
      e.preventDefault();
      props.action({id:props.id, title: props.title, size: currentSize, color: currentColor, price: getPrice(), })
  }
  

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{`${getPrice()}$`}</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
            {props.sizes.map(size=><li><button onClick={e=>setSize(e.target.value)} value={size.names} type="button" className={clsx(size.names === currentSize && styles.active)}>{size.names}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {props.colors.map(color=><li><button onClick={e=>setColor(e.target.value)} value={color} type="button" className={clsx(styles[`color${color[0].toUpperCase()}${color.substr(1).toLowerCase()}`], color === currentColor && styles.active)}></button></li>)}
            </ul>
          </div>
          <div>{props.cart}</div>
          <Button onClick={(e)=>addToShoppingCart(e)} className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;