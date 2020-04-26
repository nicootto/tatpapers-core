import React from "react";
import { useCategory } from "../../api/api";
import { Container } from "../../components/atoms/Container/Container";
import { ProductList } from "../../components/organisms/ProductList";
import { maybe } from "../../utils/utils";

export const CategoryPage = ({ match }) => {
  const id = match.params.id;
  const [category, loading] = useCategory(id);

  const products = maybe(() => category.products, null);

  return (
    <Container>
      <ProductList products={products} loading={loading} />
    </Container>
  );
};
