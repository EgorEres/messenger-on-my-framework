const METHODS = {
  GET: "GET",
  PUT: "PUT",
  POST: "POST",
  DELETE: "DELETE",
};

function queryStringify(data = {}) {
  return Object.entries(data)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}

function setXHRHeaders(xhr, headers) {
  if (headers) {
    Object.entries(headers).forEach(([key, value]) =>
      xhr.setRequestHeader(key, value)
    );
  }
}

class HTTPTransport {
  get(url, options = {}) {
    const query = queryStringify(data);
    const urlWithParams = query ? `${url}?${query}` : url;

    return this.request(
      urlWithParams,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  }

  put(url, options = {}) {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout
    );
  }

  post(url, options = {}) {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  }

  delete(url, options = {}) {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout
    );
  }

  request(url, options, timeout = 5000) {
    const { method, headers, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url, true);
      xhr.timeout = timeout;
      setXHRHeaders(xhr, headers);

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }
}

export default HTTPTransport;
