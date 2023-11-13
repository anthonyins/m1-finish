export const sepetUI = (item) => {
  const { id, title, image, price, quantity } = item;
  const sepetDiv = document.createElement("div");
  sepetDiv.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "basket"
  );
  sepetDiv.setAttribute("id", id);
  sepetDiv.innerHTML = `
          <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4 my-auto">
        <img src="${image}" class="img-fluid rounded-start"  alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <div class="d-flex align-items-center gap-2" role="button"><i class="fa-solid fa-minus border rounded-circle bg-danger text-white p-2"></i><span class="fw-bold">${quantity}</span><i class="fa-solid fa-plus border bg-danger text-white rounded-circle p-2"></i></div>
          <p class="card-text">Total : ${price} x ${quantity}</p>
          <button class="btn btn-danger">Remove</button>
        </div>
      </div>
    </div>
  </div>
          `;
  return sepetDiv;
};
