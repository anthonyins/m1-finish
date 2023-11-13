const textTruncate = (text, char) => {
  return text.length > char ? text.substring(0, char) + "..." : text;
};
export const productUI = (product) => {
  const { id,image, title, description } = product;
  const productDiv = document.createElement("div");
  productDiv.classList.add("col");
  productDiv.setAttribute("id", id);
  productDiv.innerHTML = `
          <div class="card">
            <img src="${image}" class="p-2" height="250px" alt="...">
            <div class="card-body">
              <h5 class="card-title">${textTruncate(title, 20)}</h5>
              <p class="card-text">${textTruncate(description, 80)}</p>
            </div>
            <div class="card-footer w-100 d-flex justify-content-center gap-3">
                <button class="btn btn-danger">
                Sepete Ekle
                </button>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                See Details
                </button>
            </div>
          </div>
        
    `;
  return productDiv;
};
