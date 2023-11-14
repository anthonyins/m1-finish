export function addStorage(myProducts) {
    localStorage.setItem("products", JSON.stringify(myProducts));
}

export const btnColors = [
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "light",
    "dark",
  ];
