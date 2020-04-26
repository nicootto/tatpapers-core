import React, { useState, useEffect } from "react";

import { apiUrl } from "../constants";

export const useCategories = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${apiUrl}/categories/`)
      .then(r => r.json())
      .then(r => {
        setData(r);
        setLoading(false);
      });
  }, []);

  return [data, loading];
};

export const useCategory = id => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${apiUrl}/categories/${id}/`)
      .then(r => r.json())
      .then(r => {
        setData(r);
        setLoading(false);
      });
  }, []);

  return [data, loading];
};

export const useProduct = id => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${apiUrl}/products/${id}`)
      .then(r => r.json())
      .then(r => {
        setData(r);
        setLoading(false);
      });
  }, []);

  return [data, loading];
};
