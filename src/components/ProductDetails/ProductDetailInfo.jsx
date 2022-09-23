import Button from "../ui-kit/Button";

export default function ProductDetailInfo(props) {
  const { product, onProductAdd } = props;
  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <Button onClick={() => onProductAdd(product)}>${product.price}</Button>
    </>
  );
}
