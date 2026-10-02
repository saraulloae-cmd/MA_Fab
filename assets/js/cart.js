/* =========================================================
   CARRITO — persistencia en localStorage + checkout a WhatsApp
   No hay pasarela de pago: el botón "Pedir por WhatsApp" arma
   un mensaje con el detalle del carrito y abre WhatsApp.
   ========================================================= */

const CART_KEY = "ma_fab_cart_v1";

function cartGet() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function cartSave(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  cartRenderAll();
}

function cartAdd(item) {
  // item: { productId, name, variantLabel, qty, image }
  const items = cartGet();
  const existing = items.find(
    (i) => i.productId === item.productId && i.variantLabel === item.variantLabel
  );
  if (existing) {
    existing.qty += item.qty;
  } else {
    items.push(item);
  }
  cartSave(items);
  cartOpen();
  toast("Agregado al carrito");
}

function cartRemove(index) {
  const items = cartGet();
  items.splice(index, 1);
  cartSave(items);
}

function cartCount() {
  return cartGet().reduce((sum, i) => sum + i.qty, 0);
}

function cartClear() {
  cartSave([]);
}

/* ---------- UI ---------- */

function cartRenderAll() {
  const items = cartGet();
  document.querySelectorAll(".nav-cart .count").forEach((el) => {
    const n = cartCount();
    el.textContent = n;
    el.style.display = n > 0 ? "flex" : "none";
  });

  const list = document.getElementById("cart-items");
  if (!list) return;

  if (items.length === 0) {
    list.innerHTML = '<div class="cart-empty">Todavía no agregaste productos.</div>';
  } else {
    list.innerHTML = items
      .map(
        (item, idx) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="ci-info">
          <h4>${item.name}</h4>
          <div class="ci-variant">${item.variantLabel} · cantidad: ${item.qty}</div>
          <button class="ci-remove" onclick="cartRemove(${idx})">Quitar</button>
        </div>
      </div>`
      )
      .join("");
  }

  const waBtn = document.getElementById("cart-checkout-btn");
  if (waBtn) waBtn.disabled = items.length === 0;
}

function cartOpen() {
  const overlay = document.getElementById("cart-overlay");
  if (overlay) overlay.classList.add("open");
}
function cartClose() {
  const overlay = document.getElementById("cart-overlay");
  if (overlay) overlay.classList.remove("open");
}

function buildWhatsAppMessage() {
  const items = cartGet();
  let msg = `Hola ${SITE_CONFIG.businessName}! Quiero hacer este pedido:\n\n`;
  items.forEach((item) => {
    msg += `• ${item.name} — ${item.variantLabel} — cantidad: ${item.qty}\n`;
  });
  msg += `\n¿Me pasás precio y métodos de pago?`;
  return msg;
}

function cartCheckout() {
  const items = cartGet();
  if (items.length === 0) return;
  const text = encodeURIComponent(buildWhatsAppMessage());
  const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
  window.open(url, "_blank");
}

/* ---------- toast ---------- */
let toastTimer = null;
function toast(msg) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

document.addEventListener("DOMContentLoaded", () => {
  cartRenderAll();

  const cartBtns = document.querySelectorAll(".nav-cart");
  cartBtns.forEach((b) => b.addEventListener("click", cartOpen));

  const closeBtn = document.getElementById("cart-close-btn");
  if (closeBtn) closeBtn.addEventListener("click", cartClose);

  const overlay = document.getElementById("cart-overlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) cartClose();
    });
  }

  const checkoutBtn = document.getElementById("cart-checkout-btn");
  if (checkoutBtn) checkoutBtn.addEventListener("click", cartCheckout);
});
