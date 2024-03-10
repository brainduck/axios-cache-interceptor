# Axios Cache Interceptor

Axios Cache Interceptor adalah sebuah package Node.js yang menyediakan fitur caching untuk permintaan HTTP menggunakan Axios. Dengan menggunakan interceptor ini, Anda dapat secara efisien mengelola cache untuk permintaan yang sering digunakan dan mengoptimalkan kinerja aplikasi Anda.

## Fitur

- Cache data respons untuk permintaan HTTP.
- Otomatis menghapus cache saat waktu ekspirasi tercapai.
- Kemampuan untuk membersihkan cache secara manual.

## Instalasi

Anda dapat menginstal package ini menggunakan npm atau yarn:

```bash
npm install cache-interceptor-axios
```

## Penggunaana
Gunakan interceptor untuk mengelola cache dalam permintaan HTTP Anda:
Atur konfigurasi cacheDuration (durasi cache dalam milidetik) untuk mengontrol waktu ekspirasi cache.
Untuk membersihkan cache secara manual, gunakan opsi clearCache dalam pemanggilan requestHandler.

```javascript
const axiosCacheInterceptor = require('cache-interceptor-axios');

// Gunakan metode get atau post untuk membuat permintaan HTTP
const response = await axiosCacheInterceptor.get('https://example.com/api/data');
```
