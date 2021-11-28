export const MapOptions = (array) => {
  if (Array.isArray(array)) {
    const handleResult = array.map((item) => ({
      label: item.name,
      value: item.id,
    }));
    return handleResult;
  }
};
export const MapOptionsCampuses = (array) => {
  if (Array.isArray(array)) {
    const handleResult = array.map((item) => ({
      label: item.name,
      value: item.code,
    }));
    return handleResult;
  }
};
