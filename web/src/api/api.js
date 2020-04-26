import React, { useState, useEffect } from "react";

const baseUrl = "http://192.168.1.4:8000/api";

export const useCategories = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseUrl}/categories/`)
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
    fetch(`${baseUrl}/categories/${id}/`)
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
    fetch(`${baseUrl}/products/${id}`)
      .then(r => r.json())
      .then(r => {
        setData(r);
        setLoading(false);
      });
  }, []);

  return [data, loading];
};
