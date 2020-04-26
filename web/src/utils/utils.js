import { baseUrl } from "../app/routes/paths";

export const slugify = text =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -

export const maybe = (exp, d) => {
  try {
    const result = exp();
    return result === undefined ? d : result;
  } catch {
    return d;
  }
};

export const generateCategoryUrl = (id, name) =>
  `/categoria/${slugify(name)}/${id}/`;

export const generateProductUrl = id => `/producto/${id}/`;

export const generateProductWhatsappUrl = id => {
  const productUrl = `http://192.168.1.4${generateProductUrl(id)}`;
  const text = encodeURI(`Hola Tati! Quiero este producto ${productUrl}`);
  return `https://api.whatsapp.com/send?phone=59895345919&text=${text}&source=&data=&app_absent=`;
};
