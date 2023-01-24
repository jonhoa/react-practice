import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function Content() {
  return (
    <div>
      <p>content page</p>
      <ProductsNew />
      <ProductsIndex />
    </div>
  );
}
