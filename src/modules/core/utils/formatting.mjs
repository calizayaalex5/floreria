export const formatPrice = (num) => {
  if (!num || isNaN(num)) return "$0";
  return "$" + Number(num).toLocaleString("es-CL");
};

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

export const trimText = (str, length = 120) => str.length > length ? str.substring(0, length) + "..." : str

