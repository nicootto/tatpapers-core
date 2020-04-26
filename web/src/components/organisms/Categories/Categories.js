import React from "react";
import { Link } from "react-router-dom";

import { generateCategoryUrl } from "../../../utils/utils";
import { useCategories } from "../../../api/api";

import { Container } from "../../atoms/Container/Container";
import { Loader } from "../../atoms/Loader";

import * as S from "./styles";

export const Categories = () => {
  const [data, loading] = useCategories();

  return loading ? (
    <Loader fullScreen />
  ) : (
    <Container>
      <S.List>
        {data.map(category => (
          <div key={category.id}>
            <Link
              to={generateCategoryUrl(category.id, category.name)}
              key={category.id}
            >
              <S.Title>{category.name}</S.Title>
              <S.Image backgroundImage={category.image} />
            </Link>
          </div>
        ))}
      </S.List>
    </Container>
  );
};
