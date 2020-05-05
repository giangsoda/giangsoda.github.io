---
layout: post
title: Lỗi font chữ trên google chrome
date: 2014-03-27 13:32:20 +0700
description: Khi dùng trình duyệt google chrome, một số trang bị lỗi font mà trên firefox không bị.
img: thu_thuat/font_chrome/google_chrome.jpg
fig-caption: google chrome và thủ thuật
tags: [Chrome, Font]
---
Khi dùng trình duyệt google chrome, một số trang bị lỗi font mà trên firefox không bị.

Đó là do máy của bạn thiếu một số font chữ. Hãy cài thêm font cho đầy đủ. Bạn có thể gỡ bỏ toàn bỏ font chữ rồi cài lại hoặc cài đè lên font chữ đã có.

### Gỡ bỏ font chữ
Trước khi gỡ bỏ, bạn nên tắt hết ứng dụng, các ứng dụng dùng font chữ để hiện thị nội dung vì thế sẽ không xóa font được.


#### Cách 1. Vào Control Panel > Font. Chọn toàn bỏ font chữ ở dưới rồi click vào delete

![Xóa font chữ với controlpanel]({{site.baseurl}}/assets/img/thu_thuat/font_chrome/1.png)


#### Cách 2: Nhấn tổ hợp phím window + R (vào run), gõ regedit. Vào theo đường dẫn

*win32*: ```HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Fonts```  
*win64*: ```HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows NT\CurrentVersion\Fonts```

![Xóa font với registry]({{site.baseurl}}/assets/img/thu_thuat/font_chrome/2.jpg)

Cài font chữ
Vào thư mục font trong control panel, copy toàn bộ file font full vào.

Vào google chrome và thấy thành quả

Link [Font full 3500](http://1drv.ms/1o2zqow)
