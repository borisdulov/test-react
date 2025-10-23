const isEmpty = (value: unknown): boolean => {
  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === "object" && value !== null) {
    return Object.keys(value).length === 0;
  }

  return value === null || value === undefined || value === "";
};

export default isEmpty;
