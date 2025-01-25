export const proLinkGenerator = (name: string, id: string) => {
  const link = window.location.origin;
  return `${link}/pro/${id}`;
};
