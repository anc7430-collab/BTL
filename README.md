BTL
BÀI TẬP LỚN: WEBSITE TIỆM SÁCH ONLINE

Môn học:Thiết kế Web / Lập trình Web  
Nhóm thực hiện: Nhóm 3  
Ứng dụng: Quản lý và bán sách trực tuyến (Front-end Vanilla JS)

CÁCH CHẠY
Mở file index.html bằng trình duyệt 

GIỚI THIỆU DỰ ÁN
Website Tiệm Sách Online là một ứng dụng web mô phỏng cửa hàng bán sách trực tuyến. Dự án được xây dựng hoàn toàn bằng HTML5, CSS3 và JavaScript thuần (Vanilla JS), tập trung tối ưu hóa trải nghiệm người dùng, hiển thị mượt mà trên nhiều thiết bị và lưu trữ dữ liệu mua hàng phía Client.



CÁC CHỨC NĂNG CHÍNH
Trang chủ (index.html): Hiển thị danh mục sản phẩm dưới dạng lưới (Grid layout), hỗ trợ banner và thanh điều hướng mượt mà
- Lọc theo thể loại (theloai.html):Phân loại sách linh hoạt, tự động lọc sản phẩm dựa trên thuộc tính và URL parameters 
- Giỏ hàng (cart.html): 
  - Thêm / Xóa sản phẩm khỏi giỏ hàng
  - Bóc tách chuỗi giá tiền bằng Regex và tính tổng tiền tự động.
  - Lưu trữ trạng thái giỏ hàng liên tục qua localStorage (không bị mất khi tải lại trang)
- Xác thực người dùng (login.html):Form Đăng nhập & Đăng ký linh hoạt, kiểm tra dữ liệu đầu vào HTML5 Validation (required, email, password).



 Công nghệ sử dụng (Tech Stack)
- HTML: Cấu trúc trang chuẩn ngữ nghĩa (header, main, footer, section).
- CSS3: Tạo giao diện đẹp mắt với CSS Grid, Flexbox cho di động/máy tính.
- JavaScript: Xử lý tương tác DOM, Regex bóc tách số liệu, localStorage lưu trữ giỏ hàng



Cấu trúc thư mục mã nguồn

bai-tap-lon/
├── index.html        # Trang chủ hiển thị danh sách sách[cite: 11]
├── cart.html         # Trang giỏ hàng & thanh toán[cite: 9]
├── login.html        # Trang đăng nhập / đăng ký
├── theloai.html      # Trang lọc sách theo thể loại
├── baitaplon.css     # File định dạng giao diện chung[cite: 4]
├── baitaplon.js      # File xử lý logic JavaScript & localStorage[cite: 5]
├── README.md         # File giới thiệu dự án
└── images/           # Thư mục chứa hình ảnh bìa sách và banner[cite: 11]
