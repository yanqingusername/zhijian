export const matchArticleProduct = (html: string) => {
  const reg =
    /<p[^>]*><img data-id="([0-9a-z\-]+)"[^>]*(src="\/insert-product.jpg")+[^>]*\/><\/p>/g;
  return [...html.matchAll(reg)];
};
