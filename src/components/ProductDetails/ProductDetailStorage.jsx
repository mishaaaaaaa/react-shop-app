export default function ProductDetailStorage(props) {
  const details = props.details;
  const storage = details.storage;
  return (
    <>
      <p>
        <strong>Storage instructions:</strong> {storage}
      </p>
    </>
  );
}
