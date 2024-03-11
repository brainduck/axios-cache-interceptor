// random-quote-generator.js

require('dotenv').config(); // Load environment variables from a .env file

const axios = require('axios');

class AxiosCacheInterceptor {
  constructor() {
    this.cache = new Map();
  }

  async requestHandler(config) {
    const cacheKey = config.url;

    if (config.clearCache) {
      console.log(`Clearing cache for ${cacheKey}`);
      this.cache.delete(cacheKey);
      return;
    }

    if (this.cache.has(cacheKey)) {
      const { data, timestamp } = this.cache.get(cacheKey);
      const currentTime = Date.now();
      const cacheDuration = config.cacheDuration || parseInt(process.env.CACHE_DURATION) || 60000; // Use cache duration from environment variables or default to 1 minute

      if (currentTime - timestamp < cacheDuration) {
        console.log(`Cache hit for ${cacheKey}`);
        return Promise.resolve(data);
      } else {
        console.log(`Cache expired for ${cacheKey}`);
        this.cache.delete(cacheKey);
      }
    }

    console.log(`Cache miss for ${cacheKey}`);
    const response = await axios(config);
    this.cache.set(cacheKey, { data: response.data, timestamp: Date.now() });
    return response.data;
  }

  async clearCacheForUrl(url) {
    console.log(`Clearing cache for ${url}`);
    this.cache.delete(url);
  }

  get(url, config) {
    return this.requestHandler({ ...config, method: 'get', url });
  }

  post(url, data, config) {
    return this.requestHandler({ ...config, method: 'post', url, data });
  }

}

module.exports = new AxiosCacheInterceptor();
