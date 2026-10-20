function locSach(theLoai) {
    const danhSachSach = document.querySelectorAll(".book-card");

    danhSachSach.forEach(function(sach) {
        if (theLoai === "all" ||
            sach.dataset.category === theLoai) {
            sach.style.display = "";
        } else {
            sach.style.display = "none";
        }
    });

    const danhSach = document.querySelector(".book-grid");

    if (danhSach) {
        danhSach.scrollIntoView({ behavior: "smooth" });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const thamSo = new URLSearchParams(window.location.search);
    const theLoai = thamSo.get("theloai");

    if (theLoai) {
        locSach(theLoai);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. XƠI SỰ KIỆN KHI BẤM "THÊM VÀO GIỎ" Ở TRANG CHỦ
    const buttons = document.querySelectorAll('.book-card .btn');
    
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Lấy thông tin cuốn sách từ thẻ cha .book-card gần nhất
            const card = button.closest('.book-card');
            const title = card.querySelector('h3').innerText;
            const priceText = card.querySelector('.price').innerText;
            const imgSrc = card.querySelector('img').getAttribute('src');
            
            // Chuyển đổi chuỗi giá tiền (ví dụ: "195.000 đ") thành số nguyên để cộng dồn
            const price = parseInt(priceText.replace(/\D/g, ''));
            
            const book = {
                title: title,
                price: price,
                priceFormatted: priceText,
                image: imgSrc
            };
            
            // Lấy giỏ hàng hiện tại từ localStorage (nếu chưa có thì tạo mảng rỗng)
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            // Thêm sách mới vào giỏ hàng
            cart.push(book);
            
            // Lưu ngược lại vào localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            
            alert('Đã thêm thành công "' + title + '" vào giỏ hàng!');
        });
    });

    // 2. HIỂN THỊ DỮ LIỆU LÊN TRANG GIỎ HÀNG (cart.html)
    const cartContainer = document.querySelector('.container-cart');
    if (cartContainer) {
        renderCart();
    }
});

// Hàm hiển thị danh sách giỏ hàng và tính tổng tiền
function renderCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.container-cart');
    
    // Nếu giỏ hàng trống
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <h2>GIỎ HÀNG (0 sản phẩm)</h2>
            <div class="cart-empty-box">
                <div class="sleep-icon">💤</div>
                <p>Chưa có sản phẩm trong giỏ hàng của bạn.</p>
                <a href="index.html" class="btn-shopping">MUA SẮM NGAY</a>
            </div>
        `;
        return;
    }

    // Nếu có sản phẩm trong giỏ
    let html = `<h2>GIỎ HÀNG (${cart.length} sản phẩm)</h2>`;
    html += `<div class="cart-list" style="display: flex; flex-direction: column; gap: 15px; margin-bottom: 20px;">`;
    
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price; // Cộng dồn giá tiền các cuốn sách
        html += `
        <div class="cart-item" style="display: flex; align-items: center; background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); justify-content: space-between;">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <img src="${item.image}" alt="" style="width: 60px; height: 80px; object-fit: cover; border-radius: 4px;">
                    <div>
                        <h3 style="font-size: 16px; margin-bottom: 5px; color: #1e293b;">${item.title}</h3>
                        <p style="color: #ef4444; font-weight: bold;">${item.priceFormatted}</p>
                    </div>
                </div>
                <button onclick="removeItem(${index})" style="background: #ef4444; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-weight: 500;">Xóa</button>
            </div>
        `;
    });
    html += `</div>`;

    // Phần tổng tiền và nút thanh toán
    html += `
        <div class="cart-summary" style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); text-align: right;">
            <h3 style="font-size: 18px; margin-bottom: 15px; color: #1e293b;">Tổng tiền thanh toán: <span style="color: #ef4444;">${total.toLocaleString('vi-VN')} đ</span></h3>
            <button onclick="checkout()" class="btn-shopping" style="border: none; cursor: pointer; font-size: 15px;">TIẾN HÀNH THANH TOÁN</button>
        </div>
    `;

    cartContainer.innerHTML = html;
}

// Hàm xóa từng sản phẩm khỏi giỏ hàng
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Hàm xử lý khi bấm nút thanh toán
function checkout() {
    alert('🎉 Đặt hàng thành công! Cảm ơn bạn đã mua sách tại tiệm.');
    localStorage.removeItem('cart'); // Xóa giỏ hàng sau khi thanh toán
    renderCart();
}
