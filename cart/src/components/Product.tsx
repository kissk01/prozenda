import { memo, ReactElement } from 'react';
import { ReducerActionType, ReducerAction } from '../context/CartProvider';
import { ProductType } from '../context/ProductsProvider';

type ProductProps = {
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
  dispatch: React.Dispatch<ReducerAction>;
  product: ProductType;
};

const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: ProductProps): ReactElement => {
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
    .href;
  console.log(' img: ', img);

  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });

  const itemInCart = inCart ? 'Item inCart: ' : null;

  const content = (
    <article className='product'>
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className='product__img' />
      <p>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(product.price)}{' '}
        {itemInCart}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </article>
  );

  return content;
};

function areItemsEqual(
  { product: prevItem, inCart: prevInCart }: ProductProps,
  { product: nextItem, inCart: nextInCart }: ProductProps
): boolean {
  return (
    Object.keys(prevItem).every((key) => {
      return (
        prevItem[key as keyof ProductType] ===
        nextItem[key as keyof ProductType]
      );
    }) && prevInCart === nextInCart
  );
}

const MemoizedProduct = memo<typeof Product>(Product, areItemsEqual);
export default MemoizedProduct;
