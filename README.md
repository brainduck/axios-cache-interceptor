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

## Configuration
You can configure the cache duration by setting the CACHE_DURATION environment variable in a .env file. By default, the cache duration is set to 1 minute.
```env
CACHE_DURATION=60000
```

## Penggunaan
Gunakan interceptor untuk mengelola cache dalam permintaan HTTP Anda:
Atur konfigurasi cacheDuration (durasi cache dalam milidetik) untuk mengontrol waktu ekspirasi cache.
Untuk membersihkan cache secara manual, gunakan opsi clearCache dalam pemanggilan requestHandler.

```javascript
const AxiosCacheInterceptor = require('random-quote-generator');

// Making a GET request
AxiosCacheInterceptor.get('https://api.example.com/data')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

// Making a POST request
AxiosCacheInterceptor.post('https://api.example.com/post', { data: 'example' })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

## Clear Cache for a Specific URL

You can clear the cache for a specific URL using the `clearCacheForUrl(url)` method. Simply pass the URL as an argument to this method, and the cache for that URL will be cleared.

```javascript
const AxiosCacheInterceptor = require('cache-interceptor-axios');

// Clear cache for a specific URL
AxiosCacheInterceptor.clearCacheForUrl('https://api.example.com/data');
```
