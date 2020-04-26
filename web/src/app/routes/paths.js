const slugUrl = ":slug([a-z-0-9]+)/:id([0-9]+)/";
const idUrl = ":id([0-9]+)/";
export const baseUrl = "/";
export const categoryUrl = `${baseUrl}categoria/${slugUrl}`;
export const productUrl = `${baseUrl}producto/${idUrl}`;
