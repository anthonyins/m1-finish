export function addStorage(myProducts) {
    localStorage.setItem("products", JSON.stringify(myProducts));
}
