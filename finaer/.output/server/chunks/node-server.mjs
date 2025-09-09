globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createError, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, joinURL, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.res.end;
  event.res.end = function(chunk, encoding, cb) {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.res.headersSent) {
      event.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.res, chunk, encoding, cb);
    return this;
  }.bind(event.res);
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(createRouter({ routes: config.nitro.routeRules }));
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(event, routeRules.redirect.to, routeRules.redirect.statusCode);
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(path);
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      if (validate(entry)) {
        useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    let _resSendBody;
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode;
        if (headers2) {
          for (const header in headers2) {
            this.setHeader(header, headers2[header]);
          }
        }
        return this;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event) || _resSendBody;
    const headers = event.res.getHeaders();
    headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
    headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["cache-control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/_nuxt/Accordion.9746768b.js": {
    "type": "application/javascript",
    "etag": "\"1763-EEKbAf6wMsKJ8V05oGMQkD8yVuE\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 5987,
    "path": "../public/_nuxt/Accordion.9746768b.js"
  },
  "/_nuxt/accordyunion1.cf97c2dc.jpg": {
    "type": "image/jpeg",
    "etag": "\"a273-CW753r7yZzqP4Sn3BXoIqiSxw6U\"",
    "mtime": "2025-09-09T12:38:11.681Z",
    "size": 41587,
    "path": "../public/_nuxt/accordyunion1.cf97c2dc.jpg"
  },
  "/_nuxt/banner.efb39213.js": {
    "type": "application/javascript",
    "etag": "\"607-SfrWR6QeFJG0DZ7Lp3kID+NG0WQ\"",
    "mtime": "2025-09-09T12:38:11.690Z",
    "size": 1543,
    "path": "../public/_nuxt/banner.efb39213.js"
  },
  "/_nuxt/cardiología.8b012dee.png": {
    "type": "image/png",
    "etag": "\"90753-2XFnmzIkUSn/J+pKuUs1PItkjfQ\"",
    "mtime": "2025-09-09T12:38:11.681Z",
    "size": 591699,
    "path": "../public/_nuxt/cardiología.8b012dee.png"
  },
  "/_nuxt/Carousel.28ee76f1.js": {
    "type": "application/javascript",
    "etag": "\"1264-pL1ozaiOfIM/CMlYhWic2St163A\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 4708,
    "path": "../public/_nuxt/Carousel.28ee76f1.js"
  },
  "/_nuxt/categories.8c80e12a.js": {
    "type": "application/javascript",
    "etag": "\"1057-8dUQcVUXh67R6VRtIVXjX4OwpGk\"",
    "mtime": "2025-09-09T12:38:11.691Z",
    "size": 4183,
    "path": "../public/_nuxt/categories.8c80e12a.js"
  },
  "/_nuxt/centro.22ef413e.jpg": {
    "type": "image/jpeg",
    "etag": "\"e7ae-DVi8xqwKNA0jwd9kpf8Zk0+uI/c\"",
    "mtime": "2025-09-09T12:38:11.681Z",
    "size": 59310,
    "path": "../public/_nuxt/centro.22ef413e.jpg"
  },
  "/_nuxt/Collapse.799004d5.js": {
    "type": "application/javascript",
    "etag": "\"52a-BidfghieqnoKkO6pUyQ030TmDzo\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 1322,
    "path": "../public/_nuxt/Collapse.799004d5.js"
  },
  "/_nuxt/composables.4fec01f7.js": {
    "type": "application/javascript",
    "etag": "\"61-MX5Fbojv+/9mZKJfb+q/peK39CQ\"",
    "mtime": "2025-09-09T12:38:11.691Z",
    "size": 97,
    "path": "../public/_nuxt/composables.4fec01f7.js"
  },
  "/_nuxt/content.006b4aa3.js": {
    "type": "application/javascript",
    "etag": "\"893-KkT+Qa+ideIxpL/gVGHJ+qiT4ys\"",
    "mtime": "2025-09-09T12:38:11.691Z",
    "size": 2195,
    "path": "../public/_nuxt/content.006b4aa3.js"
  },
  "/_nuxt/default.38793ae0.js": {
    "type": "application/javascript",
    "etag": "\"d4-24cb6D58SOswSbqyS1Jf0iptHEU\"",
    "mtime": "2025-09-09T12:38:11.691Z",
    "size": 212,
    "path": "../public/_nuxt/default.38793ae0.js"
  },
  "/_nuxt/diabetologia.0b04e6b7.jpg": {
    "type": "image/jpeg",
    "etag": "\"2ecd9-ylvEbhv+LfINu7IDSJ4/xFPaJRI\"",
    "mtime": "2025-09-09T12:38:11.681Z",
    "size": 191705,
    "path": "../public/_nuxt/diabetologia.0b04e6b7.jpg"
  },
  "/_nuxt/diagnostico.a082a5ba.jpg": {
    "type": "image/jpeg",
    "etag": "\"bdf13-eucd0Z4Q3haDxnmsynGe1qhGU6Y\"",
    "mtime": "2025-09-09T12:38:11.681Z",
    "size": 778003,
    "path": "../public/_nuxt/diagnostico.a082a5ba.jpg"
  },
  "/_nuxt/diagnosticoima.466d87e0.jpg": {
    "type": "image/jpeg",
    "etag": "\"4d7a9-lC5TOCe0Fe1c84+w605Oy4GPT94\"",
    "mtime": "2025-09-09T12:38:11.681Z",
    "size": 317353,
    "path": "../public/_nuxt/diagnosticoima.466d87e0.jpg"
  },
  "/_nuxt/Dial.4bb52b2e.js": {
    "type": "application/javascript",
    "etag": "\"16ce-e89+pfVDZmoHi56DdM5G0xBNjjA\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 5838,
    "path": "../public/_nuxt/Dial.4bb52b2e.js"
  },
  "/_nuxt/Dismiss.9be48c35.js": {
    "type": "application/javascript",
    "etag": "\"3e5-ubHQvEhSB5xMZZqJ/aKmfzDP2F4\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 997,
    "path": "../public/_nuxt/Dismiss.9be48c35.js"
  },
  "/_nuxt/Drawer.2ddd2db2.js": {
    "type": "application/javascript",
    "etag": "\"ce5-kkdW7nqovL+i198p3NYFEppDcbk\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 3301,
    "path": "../public/_nuxt/Drawer.2ddd2db2.js"
  },
  "/_nuxt/Dropdown.c3c6d4b4.js": {
    "type": "application/javascript",
    "etag": "\"6d0-CnAxuOm6Weep4yGBx/WxfBIuHtA\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 1744,
    "path": "../public/_nuxt/Dropdown.c3c6d4b4.js"
  },
  "/_nuxt/elevar1.12759885.jpg": {
    "type": "image/jpeg",
    "etag": "\"926b-nBSUDhFBzXyhE8yXDfW/OIhDYaA\"",
    "mtime": "2025-09-09T12:38:11.685Z",
    "size": 37483,
    "path": "../public/_nuxt/elevar1.12759885.jpg"
  },
  "/_nuxt/entry.1a359914.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"213b9-fNG9e9nneE1wvFN6XynnLHyc2mc\"",
    "mtime": "2025-09-09T12:38:11.696Z",
    "size": 136121,
    "path": "../public/_nuxt/entry.1a359914.css"
  },
  "/_nuxt/entry.b80fcda5.js": {
    "type": "application/javascript",
    "etag": "\"3b184-wk65R5oV+1zV90ovgiPigGzY40E\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 242052,
    "path": "../public/_nuxt/entry.b80fcda5.js"
  },
  "/_nuxt/error-404.95c28eb4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e70-L8dF9pJCW0qi7de8Az4GyBoTHvI\"",
    "mtime": "2025-09-09T12:38:11.695Z",
    "size": 3696,
    "path": "../public/_nuxt/error-404.95c28eb4.css"
  },
  "/_nuxt/error-404.f4ffb087.js": {
    "type": "application/javascript",
    "etag": "\"909-nZNkDsTzr5U7C1OLXN9IDifoh28\"",
    "mtime": "2025-09-09T12:38:11.691Z",
    "size": 2313,
    "path": "../public/_nuxt/error-404.f4ffb087.js"
  },
  "/_nuxt/error-500.395dc840.js": {
    "type": "application/javascript",
    "etag": "\"7b2-ciCKmnf5axRYIaB+vTNKLk24aQY\"",
    "mtime": "2025-09-09T12:38:11.691Z",
    "size": 1970,
    "path": "../public/_nuxt/error-500.395dc840.js"
  },
  "/_nuxt/error-500.e798523c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-QP983DB9m1oiDr87r1V1AYEhrfo\"",
    "mtime": "2025-09-09T12:38:11.695Z",
    "size": 2016,
    "path": "../public/_nuxt/error-500.e798523c.css"
  },
  "/_nuxt/error-component.44dfbd26.js": {
    "type": "application/javascript",
    "etag": "\"501-3GFBsaYXK8aHpdNBHvC+jUEK7J8\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 1281,
    "path": "../public/_nuxt/error-component.44dfbd26.js"
  },
  "/_nuxt/Events.afa074fb.js": {
    "type": "application/javascript",
    "etag": "\"2001-7fA1fEc9/B5whZCPKXhxDGeAXiY\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 8193,
    "path": "../public/_nuxt/Events.afa074fb.js"
  },
  "/_nuxt/fa-brands-400.3a8924cd.woff2": {
    "type": "font/woff2",
    "etag": "\"1ca7c-QCL5XgAdc0yo8IK452J6vSBWCew\"",
    "mtime": "2025-09-09T12:38:11.681Z",
    "size": 117372,
    "path": "../public/_nuxt/fa-brands-400.3a8924cd.woff2"
  },
  "/_nuxt/fa-brands-400.5656d596.ttf": {
    "type": "font/ttf",
    "etag": "\"32c64-rK9TIJJ/wWmwCJ+PJa+5z7rTU7Q\"",
    "mtime": "2025-09-09T12:38:11.681Z",
    "size": 207972,
    "path": "../public/_nuxt/fa-brands-400.5656d596.ttf"
  },
  "/_nuxt/fa-regular-400.2bccecf0.woff2": {
    "type": "font/woff2",
    "etag": "\"636c-LtcGNAVH0ZwQpAnuAvsI89Uv9nA\"",
    "mtime": "2025-09-09T12:38:11.676Z",
    "size": 25452,
    "path": "../public/_nuxt/fa-regular-400.2bccecf0.woff2"
  },
  "/_nuxt/fa-regular-400.5d02dc9b.ttf": {
    "type": "font/ttf",
    "etag": "\"109a4-eEtNSTq5p5lrB+T59xZ0svLkPiI\"",
    "mtime": "2025-09-09T12:38:11.681Z",
    "size": 68004,
    "path": "../public/_nuxt/fa-regular-400.5d02dc9b.ttf"
  },
  "/_nuxt/fa-solid-900.9fc85f3a.woff2": {
    "type": "font/woff2",
    "etag": "\"26350-Gq5wjjuU7pgbRSqRjSjtA3+7Xhg\"",
    "mtime": "2025-09-09T12:38:11.681Z",
    "size": 156496,
    "path": "../public/_nuxt/fa-solid-900.9fc85f3a.woff2"
  },
  "/_nuxt/fa-solid-900.fbbf06d7.ttf": {
    "type": "font/ttf",
    "etag": "\"66788-VCF9eeezUBF5jXEqltHE6gigynA\"",
    "mtime": "2025-09-09T12:38:11.681Z",
    "size": 419720,
    "path": "../public/_nuxt/fa-solid-900.fbbf06d7.ttf"
  },
  "/_nuxt/fa-v4compatibility.09663a36.ttf": {
    "type": "font/ttf",
    "etag": "\"2a50-5H1b+FPTnshuYvSJfLysfdXDtbk\"",
    "mtime": "2025-09-09T12:38:11.681Z",
    "size": 10832,
    "path": "../public/_nuxt/fa-v4compatibility.09663a36.ttf"
  },
  "/_nuxt/fa-v4compatibility.4d4a2d7f.woff2": {
    "type": "font/woff2",
    "etag": "\"12b8-cAkSbJOPja13QmpbRLwhaF7o3+w\"",
    "mtime": "2025-09-09T12:38:11.681Z",
    "size": 4792,
    "path": "../public/_nuxt/fa-v4compatibility.4d4a2d7f.woff2"
  },
  "/_nuxt/finaer.0296ea39.jpg": {
    "type": "image/jpeg",
    "etag": "\"e0b0-OiAC4yrrtQ0OH1Q5Pys/uSdXkLA\"",
    "mtime": "2025-09-09T12:38:11.681Z",
    "size": 57520,
    "path": "../public/_nuxt/finaer.0296ea39.jpg"
  },
  "/_nuxt/finaer.769a384c.js": {
    "type": "application/javascript",
    "etag": "\"4f-VTpZ6/OMtdXDKrcLwIBrTKDxoOw\"",
    "mtime": "2025-09-09T12:38:11.691Z",
    "size": 79,
    "path": "../public/_nuxt/finaer.769a384c.js"
  },
  "/_nuxt/footer.904f1891.js": {
    "type": "application/javascript",
    "etag": "\"29b6-6gquw8hJZ+3zQPV0EYp5SoIm7Mo\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 10678,
    "path": "../public/_nuxt/footer.904f1891.js"
  },
  "/_nuxt/header.8042649c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"74-YfCfm/susYn4JuCYiRg7fHC/OFM\"",
    "mtime": "2025-09-09T12:38:11.696Z",
    "size": 116,
    "path": "../public/_nuxt/header.8042649c.css"
  },
  "/_nuxt/header.cfb74901.js": {
    "type": "application/javascript",
    "etag": "\"4cd9-SJ9uAtMGWcGqy5Z2mnZKruXjn7o\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 19673,
    "path": "../public/_nuxt/header.cfb74901.js"
  },
  "/_nuxt/hemodialisis.aa8dcb12.jpg": {
    "type": "image/jpeg",
    "etag": "\"46fb-sbi5FFvaG8nxP5TCcgi13vpcv2E\"",
    "mtime": "2025-09-09T12:38:11.681Z",
    "size": 18171,
    "path": "../public/_nuxt/hemodialisis.aa8dcb12.jpg"
  },
  "/_nuxt/index.01345f7f.js": {
    "type": "application/javascript",
    "etag": "\"8e9-D0J7Z/c0hoovoTbQpoEP7j5CRqw\"",
    "mtime": "2025-09-09T12:38:11.691Z",
    "size": 2281,
    "path": "../public/_nuxt/index.01345f7f.js"
  },
  "/_nuxt/index.0db0614f.js": {
    "type": "application/javascript",
    "etag": "\"ab8-Mj1KjHwqOXfOp6dfWU76hZukDcc\"",
    "mtime": "2025-09-09T12:38:11.690Z",
    "size": 2744,
    "path": "../public/_nuxt/index.0db0614f.js"
  },
  "/_nuxt/index.12e8f6c6.js": {
    "type": "application/javascript",
    "etag": "\"3abf-u5KyL0hOAvcVWwIK3E7lSinz4NY\"",
    "mtime": "2025-09-09T12:38:11.691Z",
    "size": 15039,
    "path": "../public/_nuxt/index.12e8f6c6.js"
  },
  "/_nuxt/index.2a4b5222.js": {
    "type": "application/javascript",
    "etag": "\"aaa-UvseL+DEO5WjVUbBsp8HMVRi7ds\"",
    "mtime": "2025-09-09T12:38:11.691Z",
    "size": 2730,
    "path": "../public/_nuxt/index.2a4b5222.js"
  },
  "/_nuxt/index.3e0232df.js": {
    "type": "application/javascript",
    "etag": "\"bda-VSUxjHn2x3hyesqwu1b4yo7YUUg\"",
    "mtime": "2025-09-09T12:38:11.691Z",
    "size": 3034,
    "path": "../public/_nuxt/index.3e0232df.js"
  },
  "/_nuxt/index.3ec7253c.js": {
    "type": "application/javascript",
    "etag": "\"1525-fr+RN3OuWOViTaIzbZJX+M4t3ho\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 5413,
    "path": "../public/_nuxt/index.3ec7253c.js"
  },
  "/_nuxt/index.42555cfb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"39-MyxPRJMrG6N3aBcLMOuG52PwWbQ\"",
    "mtime": "2025-09-09T12:38:11.691Z",
    "size": 57,
    "path": "../public/_nuxt/index.42555cfb.css"
  },
  "/_nuxt/index.43c3cf7a.js": {
    "type": "application/javascript",
    "etag": "\"61b-7n5cfKUPKiqw+lbabFW5VqjF5MA\"",
    "mtime": "2025-09-09T12:38:11.691Z",
    "size": 1563,
    "path": "../public/_nuxt/index.43c3cf7a.js"
  },
  "/_nuxt/index.59d64551.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3b-j1BMfs4DzOtyFxqDwr+lGsGB+MI\"",
    "mtime": "2025-09-09T12:38:11.695Z",
    "size": 59,
    "path": "../public/_nuxt/index.59d64551.css"
  },
  "/_nuxt/index.5c746155.js": {
    "type": "application/javascript",
    "etag": "\"585-cME2j0qDPn3ZzR/+xmUiLdthdx4\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 1413,
    "path": "../public/_nuxt/index.5c746155.js"
  },
  "/_nuxt/index.6b1de5d2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d1-Br/ugQHRGD7ydhM7ulqveunEFwI\"",
    "mtime": "2025-09-09T12:38:11.696Z",
    "size": 209,
    "path": "../public/_nuxt/index.6b1de5d2.css"
  },
  "/_nuxt/index.80cc8cb8.js": {
    "type": "application/javascript",
    "etag": "\"afd-21IgubUYD6d9ocPn8yIizy+xM+E\"",
    "mtime": "2025-09-09T12:38:11.691Z",
    "size": 2813,
    "path": "../public/_nuxt/index.80cc8cb8.js"
  },
  "/_nuxt/index.997eadb2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3b-8Jz6AaT0jYnj0mLi2q5I5eZrJ6c\"",
    "mtime": "2025-09-09T12:38:11.696Z",
    "size": 59,
    "path": "../public/_nuxt/index.997eadb2.css"
  },
  "/_nuxt/index.ac3b520f.js": {
    "type": "application/javascript",
    "etag": "\"8db-80lllaeKkxoG2g3SXeltMEM4g50\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 2267,
    "path": "../public/_nuxt/index.ac3b520f.js"
  },
  "/_nuxt/index.bdf193eb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3a-9mUA0gxFFvbJa+NtmA2FnregokI\"",
    "mtime": "2025-09-09T12:38:11.691Z",
    "size": 58,
    "path": "../public/_nuxt/index.bdf193eb.css"
  },
  "/_nuxt/index.e16cedc8.js": {
    "type": "application/javascript",
    "etag": "\"629-XQJn7TDur8H6jvsnc4uX1BkCZ+w\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 1577,
    "path": "../public/_nuxt/index.e16cedc8.js"
  },
  "/_nuxt/index.e49ef216.js": {
    "type": "application/javascript",
    "etag": "\"692-M/7x1tetvuiN9DWpEyI+gLAJrRo\"",
    "mtime": "2025-09-09T12:38:11.691Z",
    "size": 1682,
    "path": "../public/_nuxt/index.e49ef216.js"
  },
  "/_nuxt/index.ee159e3a.js": {
    "type": "application/javascript",
    "etag": "\"e07-09CtM0esudhEpuGCEIfr34Yb8VI\"",
    "mtime": "2025-09-09T12:38:11.691Z",
    "size": 3591,
    "path": "../public/_nuxt/index.ee159e3a.js"
  },
  "/_nuxt/index.f0b36aaf.js": {
    "type": "application/javascript",
    "etag": "\"a48-s4kEsVk3oynYmIX7smwClkUH9+o\"",
    "mtime": "2025-09-09T12:38:11.691Z",
    "size": 2632,
    "path": "../public/_nuxt/index.f0b36aaf.js"
  },
  "/_nuxt/Input-Counter.8a4d964d.js": {
    "type": "application/javascript",
    "etag": "\"887-BW9FJ3b+OATrwLZ2wSoRnviHEB8\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 2183,
    "path": "../public/_nuxt/Input-Counter.8a4d964d.js"
  },
  "/_nuxt/issys1.1f547b23.jpeg": {
    "type": "image/jpeg",
    "etag": "\"b0ad-0P4be6+VqC+uJkj+6Z0+1dxwTs8\"",
    "mtime": "2025-09-09T12:38:11.685Z",
    "size": 45229,
    "path": "../public/_nuxt/issys1.1f547b23.jpeg"
  },
  "/_nuxt/line.3913a7de.js": {
    "type": "application/javascript",
    "etag": "\"4e-0WVtk8wWiKAOixIP7eJTske9upM\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 78,
    "path": "../public/_nuxt/line.3913a7de.js"
  },
  "/_nuxt/line.7ad27739.webp": {
    "type": "image/webp",
    "etag": "\"4e96-fPjcEg6KPyWsPoQIf0rYHRz8DRw\"",
    "mtime": "2025-09-09T12:38:11.681Z",
    "size": 20118,
    "path": "../public/_nuxt/line.7ad27739.webp"
  },
  "/_nuxt/logo.be950653.png": {
    "type": "image/png",
    "etag": "\"2ef9-OQJ5tQp8vSoLR6h3hzSkeLllNdw\"",
    "mtime": "2025-09-09T12:38:11.681Z",
    "size": 12025,
    "path": "../public/_nuxt/logo.be950653.png"
  },
  "/_nuxt/mgn1.21bd1c8a.jpeg": {
    "type": "image/jpeg",
    "etag": "\"a9b2-OhInp4YswGTsnJ9wsnYHtkqVqk8\"",
    "mtime": "2025-09-09T12:38:11.685Z",
    "size": 43442,
    "path": "../public/_nuxt/mgn1.21bd1c8a.jpeg"
  },
  "/_nuxt/Modal.7fa80287.js": {
    "type": "application/javascript",
    "etag": "\"ccc-yjprr9UlG6KmtTIGcrKOTm9F6BY\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 3276,
    "path": "../public/_nuxt/Modal.7fa80287.js"
  },
  "/_nuxt/nefrologia.d13b2d55.jpg": {
    "type": "image/jpeg",
    "etag": "\"f46a-D1RYdUoc2Hz7Bx9F8Xx3ZAtnhX4\"",
    "mtime": "2025-09-09T12:38:11.681Z",
    "size": 62570,
    "path": "../public/_nuxt/nefrologia.d13b2d55.jpg"
  },
  "/_nuxt/nutric.3bb73fdf.jpg": {
    "type": "image/jpeg",
    "etag": "\"e58c-T5w2z26StBl8oS9yDxEgGF17E4I\"",
    "mtime": "2025-09-09T12:38:11.681Z",
    "size": 58764,
    "path": "../public/_nuxt/nutric.3bb73fdf.jpg"
  },
  "/_nuxt/OSMITA1.8142a7d5.jpg": {
    "type": "image/jpeg",
    "etag": "\"dc60-bUWrfyfq9ctbTzP6dTeCB0tK7PU\"",
    "mtime": "2025-09-09T12:38:11.681Z",
    "size": 56416,
    "path": "../public/_nuxt/OSMITA1.8142a7d5.jpg"
  },
  "/_nuxt/ospetelco1.ac06cbe1.jpg": {
    "type": "image/jpeg",
    "etag": "\"8e50-tg8DDT8Ivv5Mz/KfFsAxSa/fsRM\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 36432,
    "path": "../public/_nuxt/ospetelco1.ac06cbe1.jpg"
  },
  "/_nuxt/Popover.b76d96e6.js": {
    "type": "application/javascript",
    "etag": "\"593-QRDRZzk3vq72zS5ofV2K/kyu+Jk\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 1427,
    "path": "../public/_nuxt/Popover.b76d96e6.js"
  },
  "/_nuxt/premedic.dc6b9e65.png": {
    "type": "image/png",
    "etag": "\"2686-U2SQggGI/6IiaPsZ8eKp1hqj6wA\"",
    "mtime": "2025-09-09T12:38:11.685Z",
    "size": 9862,
    "path": "../public/_nuxt/premedic.dc6b9e65.png"
  },
  "/_nuxt/productoService.1e8e5c9f.js": {
    "type": "application/javascript",
    "etag": "\"d7-a1Gr2BKxnfx1CQVhEIKHNHI5MUs\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 215,
    "path": "../public/_nuxt/productoService.1e8e5c9f.js"
  },
  "/_nuxt/pueyrredon1.40c93a00.jpeg": {
    "type": "image/jpeg",
    "etag": "\"be2c-Y9xvMu8UOWCWCAXnOq3XVM2enB8\"",
    "mtime": "2025-09-09T12:38:11.685Z",
    "size": 48684,
    "path": "../public/_nuxt/pueyrredon1.40c93a00.jpeg"
  },
  "/_nuxt/sidebar.ec01931e.js": {
    "type": "application/javascript",
    "etag": "\"25a6-V/ZtyDLSzrzQqyuvkNk3KfKsST0\"",
    "mtime": "2025-09-09T12:38:11.691Z",
    "size": 9638,
    "path": "../public/_nuxt/sidebar.ec01931e.js"
  },
  "/_nuxt/Tabs.bef309e2.js": {
    "type": "application/javascript",
    "etag": "\"12a1-tPkmxodlw/c97LX7uLDCtlwKifg\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 4769,
    "path": "../public/_nuxt/Tabs.bef309e2.js"
  },
  "/_nuxt/Tooltip.db83d999.js": {
    "type": "application/javascript",
    "etag": "\"44c-nE9lBswzn4zHimbluFlQeREcsJM\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 1100,
    "path": "../public/_nuxt/Tooltip.db83d999.js"
  },
  "/_nuxt/urologia.706e96a0.jpg": {
    "type": "image/jpeg",
    "etag": "\"bc11-vaAQQuLRbfqsY+RxJbqYows+QGw\"",
    "mtime": "2025-09-09T12:38:11.685Z",
    "size": 48145,
    "path": "../public/_nuxt/urologia.706e96a0.jpg"
  },
  "/_nuxt/visitar1.543f6033.jpeg": {
    "type": "image/jpeg",
    "etag": "\"c9fc-0X+PUtO3QMNTaSGMP947F9GqcX0\"",
    "mtime": "2025-09-09T12:38:11.685Z",
    "size": 51708,
    "path": "../public/_nuxt/visitar1.543f6033.jpeg"
  },
  "/_nuxt/_plugin-vue_export-helper.a1a6add7.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2025-09-09T12:38:11.686Z",
    "size": 91,
    "path": "../public/_nuxt/_plugin-vue_export-helper.a1a6add7.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end();
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end();
      return;
    }
  }
  if (asset.type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.getHeader("ETag")) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.getHeader("Last-Modified")) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.res.getHeader("Content-Encoding")) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size && !event.res.getHeader("Content-Length")) {
    event.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_HxUe7I = () => import('./renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_HxUe7I, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_HxUe7I, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(h.route.replace(/:\w+|\*\*/g, "_"));
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, defu as d, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
