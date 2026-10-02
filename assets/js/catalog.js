/* =========================================================
   CATÁLOGO — renderiza la grilla y el modal de producto
   a partir de PRODUCTS (ver products.js)
   ========================================================= */

let currentProduct = null;
let currentSelection = {}; // { groupKey: optionId }
let currentImageIndex = 0;

function renderCatalogGrid() {
  const grid = document.getElementById("catalog-grid");
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map(
    (p) => `
    <div class="product-card" onclick="openProductModal('${p.id}')">
      <div class="ph"><img src="${p.images[0]}" alt="${p.name}" loading="lazy"></div>
      <div class="pc-body">
        <h3>${p.name}</h3>
        <div class="pc-tag">${p.tagline}</div>
        <div class="pc-price">${p.price ? p.price : "Consultar precio"}</div>
      </div>
    </div>`
  ).join("");
}

function openProductModal(productId) {
  const p = PRODUCTS.find((x) => x.id === productId);
  if (!p) return;
  currentProduct = p;
  currentImageIndex = 0;
  currentSelection = {};
  p.variantGroups.forEach((g) => {
    currentSelection[g.key] = g.options[0].id;
  });

  renderModal();
  document.getElementById("product-modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  document.getElementById("product-modal").classList.remove("open");
  document.body.style.overflow = "";
}

function setModalImage(idx) {
  currentImageIndex = idx;
  const main = document.getElementById("modal-main-photo");
  if (main) main.src = currentProduct.images[idx];
  document.querySelectorAll(".modal-thumbs img").forEach((img, i) => {
    img.classList.toggle("active", i === idx);
  });
}

function selectVariant(groupKey, optionId) {
  currentSelection[groupKey] = optionId;
  document.querySelectorAll(`.variant-options[data-group="${groupKey}"] .variant-opt`).forEach(
    (el) => {
      el.classList.toggle("selected", el.dataset.opt === optionId);
    }
  );
}

function changeQty(delta) {
  const input = document.getElementById("qty-input");
  let v = parseInt(input.value || "1", 10) + delta;
  if (v < 1) v = 1;
  input.value = v;
}

function addCurrentToCart() {
  const p = currentProduct;
  const variantLabel = p.variantGroups
    .map((g) => {
      const opt = g.options.find((o) => o.id === currentSelection[g.key]);
      return `${g.label}: ${opt.label}`;
    })
    .join(" · ");
  const qty = parseInt(document.getElementById("qty-input").value || "1", 10);

  cartAdd({
    productId: p.id,
    name: p.name,
    variantLabel,
    qty,
    image: p.images[0],
  });
  closeProductModal();
}

function renderModal() {
  const p = currentProduct;
  const body = document.getElementById("modal-body-content");

  const variantHtml = p.variantGroups
    .map(
      (g) => `
    <div class="variant-group">
      <label class="vg-label">${g.label}</label>
      <div class="variant-options" data-group="${g.key}">
        ${g.options
          .map(
            (o, i) => `
          <button type="button" class="variant-opt ${i === 0 ? "selected" : ""}"
            data-opt="${o.id}" onclick="selectVariant('${g.key}','${o.id}')">${o.label}</button>`
          )
          .join("")}
      </div>
    </div>`
    )
    .join("");

  body.innerHTML = `
    <div class="modal-gallery">
      <div class="main-photo"><img id="modal-main-photo" src="${p.images[0]}" alt="${p.name}"></div>
      <div class="modal-thumbs">
        ${p.images
          .map(
            (img, i) =>
              `<img src="${img}" class="${i === 0 ? "active" : ""}" onclick="setModalImage(${i})">`
          )
          .join("")}
      </div>
    </div>
    <div class="modal-info">
      <h2>${p.name}</h2>
      <p class="desc">${p.description}</p>
      ${variantHtml}
      ${p.note ? `<p class="variant-note">${p.note}</p>` : ""}
      <div class="qty-row">
        <div class="qty-ctrl">
          <button type="button" onclick="changeQty(-1)">−</button>
          <input id="qty-input" type="number" value="1" min="1">
          <button type="button" onclick="changeQty(1)">+</button>
        </div>
        <div class="price-line">
          ${p.price ? p.price : "A consultar"}
          <span class="unit">precio y pago se coordinan por WhatsApp</span>
        </div>
      </div>
      <button class="btn btn-primary" style="width:100%" onclick="addCurrentToCart()">Agregar al carrito</button>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderCatalogGrid();

  const closeModalBtn = document.getElementById("modal-close-btn");
  if (closeModalBtn) closeModalBtn.addEventListener("click", closeProductModal);

  const overlay = document.getElementById("product-modal");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeProductModal();
    });
  }
});
