import React from "react";
import { ShopLayout } from "../../components/layout";
import { initialData } from "../../database/products";

interface Props {}

const product = initialData.products[0];

const SlugPage = (props: Props) => {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <h1>Slug</h1>
    </ShopLayout>
  );
};

export default SlugPage;
