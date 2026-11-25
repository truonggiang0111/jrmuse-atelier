(function () {
  'use strict';

  const PALETTES = [
    {
      id: 'all',
      name: 'Tất cả',
      hex: 'linear-gradient(135deg, #3E231B 0%, #E5A4B3 50%, #95C0E8 100%)',
      note: '“Chúng tôi không bán đồ tập, chúng tôi bán bảng màu.” — Chọn một sắc độ để khám phá phom dáng phù hợp.'
    },
    {
      id: 'espresso',
      name: 'Espresso Truffle',
      hex: '#3E231B',
      note: 'Tông nâu cà phê trầm ấm giúp làn da trông sáng mịn hơn và tạo hiệu ứng thon gọn vòng eo tức thì.'
    },
    {
      id: 'blush',
      name: 'Ballet Blush',
      hex: '#E5A4B3',
      note: 'Tông hồng phấn tiểu thư dịu nhẹ, trong trẻo và nữ tính dưới ánh nắng sớm của phòng tập Pilates.'
    },
    {
      id: 'glacier',
      name: 'Glacier Blue',
      hex: '#95C0E8',
      note: 'Sắc xanh băng thanh mát mang cảm giác thư thái, cao cấp chuẩn phong cách Seoul studio.'
    },
    {
      id: 'ivory',
      name: 'Butter Ivory',
      hex: '#EFE0C4',
      note: 'Sắc kem bơ ngọt ngào giàu tính quiet-luxury, tinh khôi từ thảm tập đến những buổi tee-off mùa thu.'
    },
    {
      id: 'obsidian',
      name: 'Obsidian Noir',
      hex: '#171413',
      note: 'Đen tuyền sắc sảo với đường cắt dứt khoát, tôn chiều cao và dễ phối cùng mọi món đồ có sẵn.'
    }
  ];

  const COLOR_MAP = Object.fromEntries(PALETTES.map((p) => [p.id, p]));

  const PRODUCTS = [
    {
      id: 'set-joie-wideleg',
      category: 'pilates',
      categoryLabel: 'Pilates & Joie',
      badge: 'Best Seller · Joie Fit',
      title: 'Set Joie Quần Ống Suông Cạp Gập',
      desc: 'Áo bra cổ yếm thanh thoát kết hợp quần ống suông cạp gập tạo hiệu ứng chân dài mềm mại.',
      price: 890000,
      defaultColor: 'blush',
      colors: ['blush', 'glacier', 'espresso'],
      images: {
        blush: './assets/pilates-blush.jpg',
        glacier: './assets/hero-atelier.jpg',
        espresso: './assets/active-espresso.jpg'
      }
    },
    {
      id: 'set-chaebol-bolero',
      category: 'pilates',
      categoryLabel: 'Pilates & Joie',
      badge: 'Signature Set',
      title: 'Set Chaebol Áo Khoác Bolero & Bra',
      desc: 'Áo khoác bolero ôm tay phối bra cổ vuông và quần ống loe nhẹ tôn đường cong nữ tính.',
      price: 950000,
      defaultColor: 'espresso',
      colors: ['espresso', 'obsidian', 'blush'],
      images: {
        espresso: './assets/active-espresso.jpg',
        obsidian: './assets/active-espresso.jpg',
        blush: './assets/pilates-blush.jpg'
      }
    },
    {
      id: 'set-golf-tieuthu',
      category: 'golf',
      categoryLabel: 'Golf Atelier',
      badge: 'Autumn Clubwear',
      title: 'Set Golf Tiểu Thư Len Kem & Chân Váy Xếp Ly',
      desc: 'Áo len polo dệt mịn phối chân váy xếp ly có quần bảo hộ bên trong, chuẩn khí chất phú bà.',
      price: 1150000,
      defaultColor: 'ivory',
      colors: ['ivory', 'obsidian'],
      images: {
        ivory: './assets/golf-ivory.jpg',
        obsidian: './assets/golf-ivory.jpg'
      }
    },
    {
      id: 'set-halter-atelier',
      category: 'pilates',
      categoryLabel: 'Pilates & Joie',
      badge: 'New Palette',
      title: 'Set Halter Lưng Trần Tinh Tế',
      desc: 'Dây cổ yếm mảnh tôn xương quai xanh, chất vải lụa nén thoáng khí cho buổi tập cường độ nhẹ.',
      price: 740000,
      defaultColor: 'glacier',
      colors: ['glacier', 'blush', 'ivory'],
      images: {
        glacier: './assets/hero-atelier.jpg',
        blush: './assets/pilates-blush.jpg',
        ivory: './assets/hero-atelier.jpg'
      }
    },
    {
      id: 'set-zip-espresso',
      category: 'pilates',
      categoryLabel: 'Pilates & Joie',
      badge: 'Sculpted Cut',
      title: 'Set Cropped Zip Espresso & Quần Loen',
      desc: 'Đường cắt nâng eo tinh tế ôm gọn phần thân trên, phù hợp từ studio tới quán cà phê sáng.',
      price: 980000,
      defaultColor: 'espresso',
      colors: ['espresso', 'ivory', 'obsidian'],
      images: {
        espresso: './assets/active-espresso.jpg',
        ivory: './assets/hero-atelier.jpg',
        obsidian: './assets/active-espresso.jpg'
      }
    },
    {
      id: 'dam-golf-polo',
      category: 'golf',
      categoryLabel: 'Golf Atelier',
      badge: 'Limited Drop',
      title: 'Đầm Golf Cổ Polo Thanh Lịch',
      desc: 'Phom dáng chữ A xếp ly giữ nếp suốt 18 hố, nhẹ nhàng che khuyết điểm vòng hông.',
      price: 1090000,
      defaultColor: 'obsidian',
      colors: ['obsidian', 'ivory'],
      images: {
        obsidian: './assets/golf-ivory.jpg',
        ivory: './assets/golf-ivory.jpg'
      }
    }
  ];

  const SIZES = ['S', 'M', 'L'];
  const FREE_SHIP_THRESHOLD = 1000000;

  const state = {
    activePalette: 'all',
    activeCategory: 'all',
    selectedColors: Object.fromEntries(PRODUCTS.map((p) => [p.id, p.defaultColor])),
    selectedSizes: Object.fromEntries(PRODUCTS.map((p) => [p.id, 'S'])),
    cart: [],
    paymentMethod: 'vietqr',
    orderConfirmed: null,
    recommendedSize: 'S'
  };

  function formatVnd(amount) {
    return `${Number(amount || 0).toLocaleString('vi-VN')}₫`;
  }

  function escapeHtml(text) {
    return String(text || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function computeRecommendedSize(heightCm, weightKg) {
    const h = Number(heightCm) || 160;
    const w = Number(weightKg) || 49;

    if (w >= 58 || h >= 170) {
      return {
        size: 'L',
        fitNote: 'Phom thoải mái vùng hông và vai, giữ độ ôm vừa vặn không lộ viền.'
      };
    }
    if (w >= 50 || h >= 164) {
      return {
        size: 'M',
        fitNote: 'Cân bằng hoàn hảo giữa độ ôm định hình eo và biên độ giãn khi tập Pilates / Golf.'
      };
    }
    return {
      size: 'S',
      fitNote: 'Ôm sát tinh gọn chuẩn dáng mảnh, tôn cổ yếm và đường eo tự nhiên.'
    };
  }

  let toastTimer = null;
  function showToast(msg) {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.classList.remove('show');
    }, 2400);
  }

  function renderPaletteBar() {
    const container = document.getElementById('palette-pills');
    const noteEl = document.getElementById('palette-note');
    if (!container || !noteEl) return;

    container.innerHTML = PALETTES.map((p) => {
      const isActive = state.activePalette === p.id;
      return `
        <button
          type="button"
          class="swatch-pill ${isActive ? 'active' : ''}"
          data-palette-id="${escapeHtml(p.id)}"
          role="tab"
          aria-selected="${isActive}"
        >
          <span class="swatch-dot" style="background: ${escapeHtml(p.hex)};"></span>
          <span>${escapeHtml(p.name)}</span>
        </button>
      `;
    }).join('');

    const activeMeta = COLOR_MAP[state.activePalette] || PALETTES[0];
    noteEl.textContent = activeMeta.note;

    document.querySelectorAll('[data-cat-btn]').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.catBtn === state.activeCategory);
    });
  }

  function getFilteredProducts() {
    return PRODUCTS.filter((product) => {
      const matchesPalette =
        state.activePalette === 'all' || product.colors.includes(state.activePalette);
      const matchesCat =
        state.activeCategory === 'all' || product.category === state.activeCategory;
      return matchesPalette && matchesCat;
    });
  }

  function renderProducts() {
    const grid = document.getElementById('product-grid');
    const countEl = document.getElementById('product-count');
    if (!grid || !countEl) return;

    const list = getFilteredProducts();
    countEl.textContent = `Đang hiển thị ${list.length} thiết kế`;

    grid.innerHTML = list
      .map((product) => {
        const chosenColor = state.selectedColors[product.id] || product.defaultColor;
        const chosenSize = state.selectedSizes[product.id] || 'S';
        const colorMeta = COLOR_MAP[chosenColor] || { name: chosenColor };
        const imgSrc = product.images[chosenColor] || product.images[product.defaultColor];

        const colorDotsHtml = product.colors
          .map((cId) => {
            const c = COLOR_MAP[cId];
            if (!c) return '';
            const isSel = cId === chosenColor;
            return `
              <button
                type="button"
                class="color-dot-btn ${isSel ? 'selected' : ''}"
                data-select-color="${escapeHtml(product.id)}:${escapeHtml(cId)}"
                style="background-color: ${escapeHtml(c.hex)};"
                title="${escapeHtml(c.name)}"
                aria-label="Chọn màu ${escapeHtml(c.name)}"
              ></button>
            `;
          })
          .join('');

        const sizeBtnsHtml = SIZES.map((sz) => {
          const isSel = sz === chosenSize;
          return `
            <button
              type="button"
              class="size-btn ${isSel ? 'selected' : ''}"
              data-select-size="${escapeHtml(product.id)}:${escapeHtml(sz)}"
            >
              ${sz}
            </button>
          `;
        }).join('');

        return `
          <article class="product-card">
            <div class="product-media">
              <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(product.title)} — ${escapeHtml(colorMeta.name)}" loading="lazy" />
              <span class="product-badge">${escapeHtml(product.badge)}</span>
            </div>
            <div class="product-body">
              <span class="product-line">${escapeHtml(product.categoryLabel)}</span>
              <h3 class="product-title">${escapeHtml(product.title)}</h3>
              <p class="product-desc">${escapeHtml(product.desc)}</p>
              <div class="product-price-row">
                <span class="product-price">${formatVnd(product.price)}</span>
                <span class="color-name-label">${escapeHtml(colorMeta.name)}</span>
              </div>
              <div class="card-controls">
                <div class="card-dots" aria-label="Chọn bảng màu">${colorDotsHtml}</div>
                <div class="size-group" aria-label="Chọn size">${sizeBtnsHtml}</div>
              </div>
              <button type="button" class="btn-add-cart" data-add-cart="${escapeHtml(product.id)}">
                Thêm vào giỏ · Size ${escapeHtml(chosenSize)}
              </button>
            </div>
          </article>
        `;
      })
      .join('');
  }

  function addToCart(productId, triggerBtn) {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    const colorId = state.selectedColors[productId] || product.defaultColor;
    const size = state.selectedSizes[productId] || 'S';
    const colorMeta = COLOR_MAP[colorId] || { name: colorId };
    const image = product.images[colorId] || product.images[product.defaultColor];

    state.orderConfirmed = null;

    const existing = state.cart.find(
      (item) => item.productId === productId && item.colorId === colorId && item.size === size
    );
    if (existing) {
      existing.qty += 1;
    } else {
      state.cart.push({
        key: `${productId}__${colorId}__${size}`,
        productId,
        title: product.title,
        price: product.price,
        colorId,
        colorName: colorMeta.name,
        size,
        image,
        qty: 1
      });
    }

    updateCartBadge();
    renderCartDrawer();

    if (triggerBtn) {
      triggerBtn.classList.add('added');
      triggerBtn.textContent = '✓ Đã thêm vào giỏ';
      setTimeout(() => {
        if (document.body.contains(triggerBtn)) {
          triggerBtn.classList.remove('added');
          triggerBtn.textContent = `Thêm vào giỏ · Size ${state.selectedSizes[productId] || 'S'}`;
        }
      }, 1100);
    }

    showToast(`Đã thêm ${product.title} (${colorMeta.name} · ${size})`);
    openDrawer('cart');
  }

  function updateCartBadge() {
    const badge = document.getElementById('cart-count');
    if (!badge) return;
    const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
    badge.textContent = String(totalQty);
  }

  function renderCartDrawer() {
    const bodyEl = document.getElementById('cart-body');
    const footerEl = document.getElementById('cart-footer');
    if (!bodyEl || !footerEl) return;

    if (state.orderConfirmed) {
      const ord = state.orderConfirmed;
      bodyEl.innerHTML = `
        <div class="order-success">
          <p class="eyebrow" style="margin-bottom: 6px;">DEMO CHECKOUT FLOW</p>
          <h4 class="modal-title" style="font-size: 24px; margin-bottom: 10px;">
            Đơn hàng mẫu #${escapeHtml(ord.code)}
          </h4>
          <p style="font-size: 13.5px; color: var(--mocha); margin-bottom: 14px;">
            Cảm ơn <strong>${escapeHtml(ord.name)}</strong>! Hệ thống đã ghi nhận đơn hàng trị giá
            <strong>${formatVnd(ord.total)}</strong> theo hình thức
            <strong>${ord.method === 'vietqr' ? 'Chuyển khoản VietQR tự động' : 'Thanh toán khi nhận hàng (COD)'}</strong>.
          </p>
          <p style="font-size: 12.5px; color: var(--muted); margin-bottom: 18px;">
            Khi kết nối cửa hàng chính thức cho JRmuse, trạng thái đơn hàng và tồn kho sẽ tự động trừ và gửi thông báo về Threads / Telegram cho chủ shop.
          </p>
          <button type="button" class="btn-primary" id="reset-demo-order-btn" style="width: 100%; justify-content: center;">
            Tiếp tục xem bảng màu
          </button>
        </div>
      `;
      footerEl.innerHTML = '';
      return;
    }

    if (state.cart.length === 0) {
      bodyEl.innerHTML = `
        <div class="empty-cart">
          <p style="font-family: var(--font-serif); font-size: 22px; color: var(--ink); margin-bottom: 8px;">
            Giỏ đồ đang trống
          </p>
          <p style="font-size: 13.5px; margin-bottom: 18px;">
            Hãy chọn một bảng màu yêu thích từ bộ sưu tập JRmuse để trải nghiệm luồng đặt đơn không cần chờ tin nhắn báo giá.
          </p>
          <button type="button" class="btn-secondary" id="empty-browse-btn">Khám phá Bảng Màu</button>
        </div>
      `;
      footerEl.innerHTML = '';
      return;
    }

    const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const remaining = Math.max(0, FREE_SHIP_THRESHOLD - subtotal);
    const progress = Math.min(100, Math.round((subtotal / FREE_SHIP_THRESHOLD) * 100));

    const shipHtml = `
      <div class="ship-meter">
        ${
          remaining === 0
            ? '✓ Nàng đã được <strong>Miễn phí vận chuyển hỏa tốc</strong> cho đơn hàng này.'
            : `Chọn thêm <strong>${formatVnd(remaining)}</strong> để được <strong>Miễn phí vận chuyển</strong>.`
        }
        <div class="ship-track"><div class="ship-fill" style="width: ${progress}%"></div></div>
      </div>
    `;

    const itemsHtml = state.cart
      .map(
        (item) => `
      <div class="cart-item">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" class="cart-item-img" />
        <div>
          <h4 class="cart-item-title">${escapeHtml(item.title)}</h4>
          <p class="cart-item-meta">${escapeHtml(item.colorName)} · Size ${escapeHtml(item.size)}</p>
          <div class="qty-control">
            <button type="button" class="qty-btn" data-qty-step="${escapeHtml(item.key)}:-1" aria-label="Giảm số lượng">−</button>
            <span class="qty-val">${item.qty}</span>
            <button type="button" class="qty-btn" data-qty-step="${escapeHtml(item.key)}:1" aria-label="Tăng số lượng">+</button>
          </div>
        </div>
        <div style="text-align: right;">
          <div style="font-weight: 600; font-size: 14px; color: var(--espresso);">${formatVnd(item.price * item.qty)}</div>
          <button type="button" class="remove-btn" data-remove-key="${escapeHtml(item.key)}">Xoá</button>
        </div>
      </div>
    `
      )
      .join('');

    const qrPreviewHtml =
      state.paymentMethod === 'vietqr'
        ? `
      <div class="vietqr-preview">
        <strong>VietQR Tự Động Khớp Lệnh:</strong> Mã chuyển khoản tự sinh nội dung đơn <code>JRM-${subtotal.toString().slice(0, 4)}</code> — Xác nhận thanh toán trong 3 giây ngay trên web.
      </div>
    `
        : '';

    const formHtml = `
      <div class="checkout-box">
        <h4 class="checkout-title">Đặt Nhanh 1 Bước</h4>
        <div style="display: grid; gap: 10px;">
          <div>
            <label class="field-label" for="co-name">Tên khách hàng</label>
            <input type="text" id="co-name" class="field-input" placeholder="VD: Minh Anh / @minhanh" />
          </div>
          <div>
            <label class="field-label" for="co-phone">Số điện thoại / IG / Threads</label>
            <input type="text" id="co-phone" class="field-input" placeholder="09xx xxx xxx" />
          </div>
          <div>
            <label class="field-label" for="co-address">Địa chỉ nhận hàng</label>
            <input type="text" id="co-address" class="field-input" placeholder="Quận 1, TP. Hồ Chí Minh" />
          </div>
        </div>

        <div class="pay-methods" role="radiogroup" aria-label="Phương thức thanh toán">
          <button type="button" class="pay-option ${state.paymentMethod === 'vietqr' ? 'active' : ''}" data-pay-method="vietqr">
            VietQR tự động xác nhận
          </button>
          <button type="button" class="pay-option ${state.paymentMethod === 'cod' ? 'active' : ''}" data-pay-method="cod">
            Thanh toán khi nhận (COD)
          </button>
        </div>

        ${qrPreviewHtml}
      </div>
    `;

    bodyEl.innerHTML = shipHtml + itemsHtml + formHtml;

    footerEl.innerHTML = `
      <div class="subtotal-row">
        <span style="color: var(--mocha); font-size: 13.5px;">Tạm tính</span>
        <span class="subtotal-val">${formatVnd(subtotal)}</span>
      </div>
      <button type="button" class="btn-primary" id="submit-order-btn" style="width: 100%; justify-content: center;">
        Hoàn Tất Đặt Hàng (Bản Mẫu)
      </button>
    `;
  }

  function renderSizeAdvice() {
    const hInput = document.getElementById('input-height');
    const wInput = document.getElementById('input-weight');
    const box = document.getElementById('size-result-box');
    const applyBtn = document.getElementById('apply-size-btn');
    if (!hInput || !wInput || !box || !applyBtn) return;

    const rec = computeRecommendedSize(hInput.value, wInput.value);
    state.recommendedSize = rec.size;

    box.innerHTML = `
      <span class="size-result-tag">Gợi ý chuẩn dáng: Size ${escapeHtml(rec.size)}</span>
      <p style="margin: 4px 0 0; font-size: 13.5px; color: var(--mocha);">${escapeHtml(rec.fitNote)}</p>
    `;
    applyBtn.textContent = `Áp dụng Size ${rec.size} cho bảng sản phẩm`;
  }

  function closeAllOverlays() {
    document.getElementById('ui-backdrop')?.classList.remove('open');
    document.getElementById('size-modal')?.classList.remove('open');
    document.getElementById('cart-drawer')?.classList.remove('open');
  }

  function openDrawer(type) {
    closeAllOverlays();
    document.getElementById('ui-backdrop')?.classList.add('open');
    if (type === 'size') {
      renderSizeAdvice();
      document.getElementById('size-modal')?.classList.add('open');
    } else if (type === 'cart') {
      renderCartDrawer();
      document.getElementById('cart-drawer')?.classList.add('open');
    }
  }

  function applyCategoryFilter(catId) {
    state.activeCategory = catId;
    renderPaletteBar();
    renderProducts();
    document.getElementById('palette-studio')?.scrollIntoView({ behavior: 'smooth' });
  }

  function bindEvents() {
    document.addEventListener('click', (e) => {
      const target = e.target.closest('button, [data-palette-id], [data-filter-cat]');
      if (!target) return;

      if (target.dataset.paletteId) {
        state.activePalette = target.dataset.paletteId;
        PRODUCTS.forEach((p) => {
          if (state.activePalette === 'all') {
            state.selectedColors[p.id] = p.defaultColor;
          } else if (p.colors.includes(state.activePalette)) {
            state.selectedColors[p.id] = state.activePalette;
          }
        });
        renderPaletteBar();
        renderProducts();
        return;
      }

      if (target.dataset.catBtn) {
        state.activeCategory = target.dataset.catBtn;
        renderPaletteBar();
        renderProducts();
        return;
      }

      if (target.dataset.filterCat) {
        applyCategoryFilter(target.dataset.filterCat);
        return;
      }

      if (target.dataset.openSize) {
        openDrawer('size');
        return;
      }

      if (target.id === 'open-cart-btn') {
        openDrawer('cart');
        return;
      }

      if (target.id === 'close-size-btn' || target.id === 'close-cart-btn') {
        closeAllOverlays();
        return;
      }

      if (target.dataset.selectColor) {
        const [productId, colorId] = target.dataset.selectColor.split(':');
        state.selectedColors[productId] = colorId;
        renderProducts();
        return;
      }

      if (target.dataset.selectSize) {
        const [productId, sz] = target.dataset.selectSize.split(':');
        state.selectedSizes[productId] = sz;
        renderProducts();
        return;
      }

      if (target.dataset.addCart) {
        addToCart(target.dataset.addCart, target);
        return;
      }

      if (target.dataset.qtyStep) {
        const [key, deltaStr] = target.dataset.qtyStep.split(':');
        const delta = Number(deltaStr);
        const idx = state.cart.findIndex((i) => i.key === key);
        if (idx >= 0) {
          state.cart[idx].qty += delta;
          if (state.cart[idx].qty <= 0) state.cart.splice(idx, 1);
          updateCartBadge();
          renderCartDrawer();
        }
        return;
      }

      if (target.dataset.removeKey) {
        state.cart = state.cart.filter((i) => i.key !== target.dataset.removeKey);
        updateCartBadge();
        renderCartDrawer();
        return;
      }

      if (target.dataset.payMethod) {
        state.paymentMethod = target.dataset.payMethod;
        renderCartDrawer();
        return;
      }

      if (target.id === 'apply-size-btn') {
        PRODUCTS.forEach((p) => {
          state.selectedSizes[p.id] = state.recommendedSize;
        });
        renderProducts();
        closeAllOverlays();
        showToast(`Đã chọn sẵn Size ${state.recommendedSize} cho tất cả thiết kế`);
        return;
      }

      if (target.id === 'empty-browse-btn' || target.id === 'reset-demo-order-btn') {
        state.orderConfirmed = null;
        closeAllOverlays();
        document.getElementById('palette-studio')?.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      if (target.id === 'submit-order-btn') {
        const name = (document.getElementById('co-name')?.value || '').trim() || 'Quý cô JRmuse';
        const total = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
        const code = String(Math.floor(100000 + Math.random() * 899999));
        state.orderConfirmed = {
          code,
          name,
          total,
          method: state.paymentMethod
        };
        state.cart = [];
        updateCartBadge();
        renderCartDrawer();
      }
    });

    document.getElementById('ui-backdrop')?.addEventListener('click', closeAllOverlays);

    document.getElementById('input-height')?.addEventListener('input', renderSizeAdvice);
    document.getElementById('input-weight')?.addEventListener('input', renderSizeAdvice);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAllOverlays();
    });
  }

  renderPaletteBar();
  renderProducts();
  updateCartBadge();
  renderSizeAdvice();
  bindEvents();
})();
