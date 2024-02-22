globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import http, { Server as Server$1 } from 'node:http';
import https, { Server } from 'node:https';
import { promises, existsSync } from 'fs';
import { dirname as dirname$1, resolve as resolve$1, join } from 'path';
import { promises as promises$1 } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { addClassToHast, getHighlighter, loadWasm } from 'shikiji';
import { transformerNotationDiff, transformerNotationFocus, transformerNotationHighlight, transformerNotationErrorLevel } from 'shikiji-transformers';
import { unified } from 'unified';
import { toString as toString$1 } from 'mdast-util-to-string';
import { postprocess, preprocess } from 'micromark';
import { stringifyPosition } from 'unist-util-stringify-position';
import { markdownLineEnding, markdownSpace } from 'micromark-util-character';
import { push, splice } from 'micromark-util-chunked';
import { resolveAll } from 'micromark-util-resolve-all';
import { normalizeUri } from 'micromark-util-sanitize-uri';
import slugify from 'slugify';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import remarkMDC, { parseFrontMatter } from 'remark-mdc';
import { toString } from 'hast-util-to-string';
import Slugger from 'github-slugger';
import { detab } from 'detab';
import remarkEmoji from 'remark-emoji';
import remarkGFM from 'remark-gfm';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSortAttributeValues from 'rehype-sort-attribute-values';
import rehypeSortAttributes from 'rehype-sort-attributes';
import rehypeRaw from 'rehype-raw';

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.at(-1) === '"' && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode$1(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode$1(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode$1(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode$1(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

function isRelative(inputString) {
  return ["./", "../"].some((string_) => inputString.startsWith(string_));
}
const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  return (s0.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery$1(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}

function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  const [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  const { pathname, search, hash } = parsePath(
    path.replace(/\/(?=[A-Za-z]:)/, "")
  );
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol ? parsed.protocol + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const fieldContentRegExp = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function parse$1(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = options || {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function serialize(name, value, options) {
  const opt = options || {};
  const enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  const encodedValue = enc(value);
  if (encodedValue && !fieldContentRegExp.test(encodedValue)) {
    throw new TypeError("argument val is invalid");
  }
  let str = name + "=" + encodedValue;
  if (void 0 !== opt.maxAge && opt.maxAge !== null) {
    const maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge) || !Number.isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (!isDate(opt.expires) || Number.isNaN(opt.expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    const priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function isDate(val) {
  return Object.prototype.toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function encode(val) {
  return encodeURIComponent(val);
}

const defaults$1 = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults$1, ...options };
  } else {
    options = defaults$1;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number) {
      return write("number:" + number);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set) {
      write("set:");
      const arr = [...set];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number) {
      return write("bigint:" + number.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}

class WordArray {
  constructor(words, sigBytes) {
    words = this.words = words || [];
    this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16));
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    this._data = new WordArray();
    this._nDataBytes = 0;
    this._minBufferSize = 0;
    this.blockSize = 512 / 32;
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}

const H = [
  1779033703,
  -1150833019,
  1013904242,
  -1521486534,
  1359893119,
  -1694144372,
  528734635,
  1541459225
];
const K = [
  1116352408,
  1899447441,
  -1245643825,
  -373957723,
  961987163,
  1508970993,
  -1841331548,
  -1424204075,
  -670586216,
  310598401,
  607225278,
  1426881987,
  1925078388,
  -2132889090,
  -1680079193,
  -1046744716,
  -459576895,
  -272742522,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  -1740746414,
  -1473132947,
  -1341970488,
  -1084653625,
  -958395405,
  -710438585,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  -2117940946,
  -1838011259,
  -1564481375,
  -1474664885,
  -1035236496,
  -949202525,
  -778901479,
  -694614492,
  -200395387,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  -2067236844,
  -1933114872,
  -1866530822,
  -1538233109,
  -1090935817,
  -965641998
];
const W = [];
class SHA256 extends Hasher {
  constructor() {
    super(...arguments);
    this._hash = new WordArray([...H]);
  }
  reset() {
    super.reset();
    this._hash = new WordArray([...H]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f = H2[5];
    let g = H2[6];
    let h = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
      }
      const ch = e & f ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h + sigma1 + ch + K[i] + W[i];
      const t2 = sigma0 + maj;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f | 0;
    H2[6] = H2[6] + g | 0;
    H2[7] = H2[7] + h | 0;
  }
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(
      nBitsTotal / 4294967296
    );
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}

function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}

function isEqual(object1, object2, hashOptions = {}) {
  if (object1 === object2) {
    return true;
  }
  if (objectHash(object1, hashOptions) === objectHash(object2, hashOptions)) {
    return true;
  }
  return false;
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    // @ts-ignore
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode !== void 0) {
      node = nextNode;
    } else {
      node = node.placeholderChildNode;
      if (node !== null) {
        params[node.paramName] = section;
        paramsFound = true;
      } else {
        break;
      }
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildNode = childNode;
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      node = childNode;
    }
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections[sections.length - 1];
    node.data = null;
    if (Object.keys(node.children).length === 0) {
      const parentNode = node.parent;
      parentNode.children.delete(lastSection);
      parentNode.wildcardChildNode = null;
      parentNode.placeholderChildNode = null;
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildNode: null
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table);
}
function _createMatcher(table) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table) {
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path.startsWith(key)) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        table.static.set(path, node.data);
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

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
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function rawHeaders(headers) {
  const rawHeaders2 = [];
  for (const key in headers) {
    if (Array.isArray(headers[key])) {
      for (const h of headers[key]) {
        rawHeaders2.push(key, h);
      }
    } else {
      rawHeaders2.push(key, headers[key]);
    }
  }
  return rawHeaders2;
}
function mergeFns(...functions) {
  return function(...args) {
    for (const fn of functions) {
      fn(...args);
    }
  };
}
function createNotImplementedError(name) {
  throw new Error(`[unenv] ${name} is not implemented yet!`);
}

let defaultMaxListeners = 10;
let EventEmitter$1 = class EventEmitter {
  __unenv__ = true;
  _events = /* @__PURE__ */ Object.create(null);
  _maxListeners;
  static get defaultMaxListeners() {
    return defaultMaxListeners;
  }
  static set defaultMaxListeners(arg) {
    if (typeof arg !== "number" || arg < 0 || Number.isNaN(arg)) {
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + "."
      );
    }
    defaultMaxListeners = arg;
  }
  setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' + n + "."
      );
    }
    this._maxListeners = n;
    return this;
  }
  getMaxListeners() {
    return _getMaxListeners(this);
  }
  emit(type, ...args) {
    if (!this._events[type] || this._events[type].length === 0) {
      return false;
    }
    if (type === "error") {
      let er;
      if (args.length > 0) {
        er = args[0];
      }
      if (er instanceof Error) {
        throw er;
      }
      const err = new Error(
        "Unhandled error." + (er ? " (" + er.message + ")" : "")
      );
      err.context = er;
      throw err;
    }
    for (const _listener of this._events[type]) {
      (_listener.listener || _listener).apply(this, args);
    }
    return true;
  }
  addListener(type, listener) {
    return _addListener(this, type, listener, false);
  }
  on(type, listener) {
    return _addListener(this, type, listener, false);
  }
  prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  }
  once(type, listener) {
    return this.on(type, _wrapOnce(this, type, listener));
  }
  prependOnceListener(type, listener) {
    return this.prependListener(type, _wrapOnce(this, type, listener));
  }
  removeListener(type, listener) {
    return _removeListener(this, type, listener);
  }
  off(type, listener) {
    return this.removeListener(type, listener);
  }
  removeAllListeners(type) {
    return _removeAllListeners(this, type);
  }
  listeners(type) {
    return _listeners(this, type, true);
  }
  rawListeners(type) {
    return _listeners(this, type, false);
  }
  listenerCount(type) {
    return this.rawListeners(type).length;
  }
  eventNames() {
    return Object.keys(this._events);
  }
};
function _addListener(target, type, listener, prepend) {
  _checkListener(listener);
  if (target._events.newListener !== void 0) {
    target.emit("newListener", type, listener.listener || listener);
  }
  if (!target._events[type]) {
    target._events[type] = [];
  }
  if (prepend) {
    target._events[type].unshift(listener);
  } else {
    target._events[type].push(listener);
  }
  const maxListeners = _getMaxListeners(target);
  if (maxListeners > 0 && target._events[type].length > maxListeners && !target._events[type].warned) {
    target._events[type].warned = true;
    const warning = new Error(
      `[unenv] Possible EventEmitter memory leak detected. ${target._events[type].length} ${type} listeners added. Use emitter.setMaxListeners() to increase limit`
    );
    warning.name = "MaxListenersExceededWarning";
    warning.emitter = target;
    warning.type = type;
    warning.count = target._events[type]?.length;
    console.warn(warning);
  }
  return target;
}
function _removeListener(target, type, listener) {
  _checkListener(listener);
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  const lenBeforeFilter = target._events[type].length;
  target._events[type] = target._events[type].filter((fn) => fn !== listener);
  if (lenBeforeFilter === target._events[type].length) {
    return target;
  }
  if (target._events.removeListener) {
    target.emit("removeListener", type, listener.listener || listener);
  }
  if (target._events[type].length === 0) {
    delete target._events[type];
  }
  return target;
}
function _removeAllListeners(target, type) {
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  if (target._events.removeListener) {
    for (const _listener of target._events[type]) {
      target.emit("removeListener", type, _listener.listener || _listener);
    }
  }
  delete target._events[type];
  return target;
}
function _wrapOnce(target, type, listener) {
  let fired = false;
  const wrapper = (...args) => {
    if (fired) {
      return;
    }
    target.removeListener(type, wrapper);
    fired = true;
    return args.length === 0 ? listener.call(target) : listener.apply(target, args);
  };
  wrapper.listener = listener;
  return wrapper;
}
function _getMaxListeners(target) {
  return target._maxListeners ?? EventEmitter$1.defaultMaxListeners;
}
function _listeners(target, type, unwrap) {
  let listeners = target._events[type];
  if (typeof listeners === "function") {
    listeners = [listeners];
  }
  return unwrap ? listeners.map((l) => l.listener || l) : listeners;
}
function _checkListener(listener) {
  if (typeof listener !== "function") {
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' + typeof listener
    );
  }
}

const EventEmitter = globalThis.EventEmitter || EventEmitter$1;

class _Readable extends EventEmitter {
  __unenv__ = true;
  readableEncoding = null;
  readableEnded = true;
  readableFlowing = false;
  readableHighWaterMark = 0;
  readableLength = 0;
  readableObjectMode = false;
  readableAborted = false;
  readableDidRead = false;
  closed = false;
  errored = null;
  readable = false;
  destroyed = false;
  static from(_iterable, options) {
    return new _Readable(options);
  }
  constructor(_opts) {
    super();
  }
  _read(_size) {
  }
  read(_size) {
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  isPaused() {
    return true;
  }
  unpipe(_destination) {
    return this;
  }
  unshift(_chunk, _encoding) {
  }
  wrap(_oldStream) {
    return this;
  }
  push(_chunk, _encoding) {
    return false;
  }
  _destroy(_error, _callback) {
    this.removeAllListeners();
  }
  destroy(error) {
    this.destroyed = true;
    this._destroy(error);
    return this;
  }
  pipe(_destenition, _options) {
    return {};
  }
  compose(stream, options) {
    throw new Error("[unenv] Method not implemented.");
  }
  [Symbol.asyncDispose]() {
    this.destroy();
    return Promise.resolve();
  }
  async *[Symbol.asyncIterator]() {
    throw createNotImplementedError("Readable.asyncIterator");
  }
  iterator(options) {
    throw createNotImplementedError("Readable.iterator");
  }
  map(fn, options) {
    throw createNotImplementedError("Readable.map");
  }
  filter(fn, options) {
    throw createNotImplementedError("Readable.filter");
  }
  forEach(fn, options) {
    throw createNotImplementedError("Readable.forEach");
  }
  reduce(fn, initialValue, options) {
    throw createNotImplementedError("Readable.reduce");
  }
  find(fn, options) {
    throw createNotImplementedError("Readable.find");
  }
  findIndex(fn, options) {
    throw createNotImplementedError("Readable.findIndex");
  }
  some(fn, options) {
    throw createNotImplementedError("Readable.some");
  }
  toArray(options) {
    throw createNotImplementedError("Readable.toArray");
  }
  every(fn, options) {
    throw createNotImplementedError("Readable.every");
  }
  flatMap(fn, options) {
    throw createNotImplementedError("Readable.flatMap");
  }
  drop(limit, options) {
    throw createNotImplementedError("Readable.drop");
  }
  take(limit, options) {
    throw createNotImplementedError("Readable.take");
  }
  asIndexedPairs(options) {
    throw createNotImplementedError("Readable.asIndexedPairs");
  }
}
const Readable = globalThis.Readable || _Readable;

class _Writable extends EventEmitter {
  __unenv__ = true;
  writable = true;
  writableEnded = false;
  writableFinished = false;
  writableHighWaterMark = 0;
  writableLength = 0;
  writableObjectMode = false;
  writableCorked = 0;
  closed = false;
  errored = null;
  writableNeedDrain = false;
  destroyed = false;
  _data;
  _encoding = "utf-8";
  constructor(_opts) {
    super();
  }
  pipe(_destenition, _options) {
    return {};
  }
  _write(chunk, encoding, callback) {
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return;
    }
    if (this._data === void 0) {
      this._data = chunk;
    } else {
      const a = typeof this._data === "string" ? Buffer.from(this._data, this._encoding || encoding || "utf8") : this._data;
      const b = typeof chunk === "string" ? Buffer.from(chunk, encoding || this._encoding || "utf8") : chunk;
      this._data = Buffer.concat([a, b]);
    }
    this._encoding = encoding;
    if (callback) {
      callback();
    }
  }
  _writev(_chunks, _callback) {
  }
  _destroy(_error, _callback) {
  }
  _final(_callback) {
  }
  write(chunk, arg2, arg3) {
    const encoding = typeof arg2 === "string" ? this._encoding : "utf-8";
    const cb = typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    this._write(chunk, encoding, cb);
    return true;
  }
  setDefaultEncoding(_encoding) {
    return this;
  }
  end(arg1, arg2, arg3) {
    const callback = typeof arg1 === "function" ? arg1 : typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return this;
    }
    const data = arg1 === callback ? void 0 : arg1;
    if (data) {
      const encoding = arg2 === callback ? void 0 : arg2;
      this.write(data, encoding, callback);
    }
    this.writableEnded = true;
    this.writableFinished = true;
    this.emit("close");
    this.emit("finish");
    return this;
  }
  cork() {
  }
  uncork() {
  }
  destroy(_error) {
    this.destroyed = true;
    delete this._data;
    this.removeAllListeners();
    return this;
  }
  compose(stream, options) {
    throw new Error("[h3] Method not implemented.");
  }
}
const Writable = globalThis.Writable || _Writable;

const __Duplex = class {
  allowHalfOpen = true;
  _destroy;
  constructor(readable = new Readable(), writable = new Writable()) {
    Object.assign(this, readable);
    Object.assign(this, writable);
    this._destroy = mergeFns(readable._destroy, writable._destroy);
  }
};
function getDuplex() {
  Object.assign(__Duplex.prototype, Readable.prototype);
  Object.assign(__Duplex.prototype, Writable.prototype);
  return __Duplex;
}
const _Duplex = /* @__PURE__ */ getDuplex();
const Duplex = globalThis.Duplex || _Duplex;

class Socket extends Duplex {
  __unenv__ = true;
  bufferSize = 0;
  bytesRead = 0;
  bytesWritten = 0;
  connecting = false;
  destroyed = false;
  pending = false;
  localAddress = "";
  localPort = 0;
  remoteAddress = "";
  remoteFamily = "";
  remotePort = 0;
  autoSelectFamilyAttemptedAddresses = [];
  readyState = "readOnly";
  constructor(_options) {
    super();
  }
  write(_buffer, _arg1, _arg2) {
    return false;
  }
  connect(_arg1, _arg2, _arg3) {
    return this;
  }
  end(_arg1, _arg2, _arg3) {
    return this;
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  setTimeout(_timeout, _callback) {
    return this;
  }
  setNoDelay(_noDelay) {
    return this;
  }
  setKeepAlive(_enable, _initialDelay) {
    return this;
  }
  address() {
    return {};
  }
  unref() {
    return this;
  }
  ref() {
    return this;
  }
  destroySoon() {
    this.destroy();
  }
  resetAndDestroy() {
    const err = new Error("ERR_SOCKET_CLOSED");
    err.code = "ERR_SOCKET_CLOSED";
    this.destroy(err);
    return this;
  }
}

class IncomingMessage extends Readable {
  __unenv__ = {};
  aborted = false;
  httpVersion = "1.1";
  httpVersionMajor = 1;
  httpVersionMinor = 1;
  complete = true;
  connection;
  socket;
  headers = {};
  trailers = {};
  method = "GET";
  url = "/";
  statusCode = 200;
  statusMessage = "";
  closed = false;
  errored = null;
  readable = false;
  constructor(socket) {
    super();
    this.socket = this.connection = socket || new Socket();
  }
  get rawHeaders() {
    return rawHeaders(this.headers);
  }
  get rawTrailers() {
    return [];
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  get headersDistinct() {
    return _distinct(this.headers);
  }
  get trailersDistinct() {
    return _distinct(this.trailers);
  }
}
function _distinct(obj) {
  const d = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key) {
      d[key] = (Array.isArray(value) ? value : [value]).filter(
        Boolean
      );
    }
  }
  return d;
}

class ServerResponse extends Writable {
  __unenv__ = true;
  statusCode = 200;
  statusMessage = "";
  upgrading = false;
  chunkedEncoding = false;
  shouldKeepAlive = false;
  useChunkedEncodingByDefault = false;
  sendDate = false;
  finished = false;
  headersSent = false;
  strictContentLength = false;
  connection = null;
  socket = null;
  req;
  _headers = {};
  constructor(req) {
    super();
    this.req = req;
  }
  assignSocket(socket) {
    socket._httpMessage = this;
    this.socket = socket;
    this.connection = socket;
    this.emit("socket", socket);
    this._flush();
  }
  _flush() {
    this.flushHeaders();
  }
  detachSocket(_socket) {
  }
  writeContinue(_callback) {
  }
  writeHead(statusCode, arg1, arg2) {
    if (statusCode) {
      this.statusCode = statusCode;
    }
    if (typeof arg1 === "string") {
      this.statusMessage = arg1;
      arg1 = void 0;
    }
    const headers = arg2 || arg1;
    if (headers) {
      if (Array.isArray(headers)) ; else {
        for (const key in headers) {
          this.setHeader(key, headers[key]);
        }
      }
    }
    this.headersSent = true;
    return this;
  }
  writeProcessing() {
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  appendHeader(name, value) {
    name = name.toLowerCase();
    const current = this._headers[name];
    const all = [
      ...Array.isArray(current) ? current : [current],
      ...Array.isArray(value) ? value : [value]
    ].filter(Boolean);
    this._headers[name] = all.length > 1 ? all : all[0];
    return this;
  }
  setHeader(name, value) {
    this._headers[name.toLowerCase()] = value;
    return this;
  }
  getHeader(name) {
    return this._headers[name.toLowerCase()];
  }
  getHeaders() {
    return this._headers;
  }
  getHeaderNames() {
    return Object.keys(this._headers);
  }
  hasHeader(name) {
    return name.toLowerCase() in this._headers;
  }
  removeHeader(name) {
    delete this._headers[name.toLowerCase()];
  }
  addTrailers(_headers) {
  }
  flushHeaders() {
  }
  writeEarlyHints(_headers, cb) {
    if (typeof cb === "function") {
      cb();
    }
  }
}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Error extends Error {
  constructor(message, opts = {}) {
    super(message, opts);
    __publicField$1(this, "statusCode", 500);
    __publicField$1(this, "fatal", false);
    __publicField$1(this, "unhandled", false);
    __publicField$1(this, "statusMessage");
    __publicField$1(this, "data");
    __publicField$1(this, "cause");
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
__publicField$1(H3Error, "__h3_error__", true);
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}

function getQuery(event) {
  return getQuery$1(event.path || "");
}
function isMethod(event, expected, allowHead) {
  if (allowHead && event.method === "HEAD") {
    return true;
  }
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected, allowHead)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}

function parseCookies(event) {
  return parse$1(event.node.req.headers.cookie || "");
}
function getCookie(event, name) {
  return parseCookies(event)[name];
}
function setCookie(event, name, value, serializeOptions) {
  serializeOptions = { path: "/", ...serializeOptions };
  const cookieStr = serialize(name, value, serializeOptions);
  let setCookies = event.node.res.getHeader("set-cookie");
  if (!Array.isArray(setCookies)) {
    setCookies = [setCookies];
  }
  const _optionsHash = objectHash(serializeOptions);
  setCookies = setCookies.filter((cookieValue) => {
    return cookieValue && _optionsHash !== objectHash(parse$1(cookieValue));
  });
  event.node.res.setHeader("set-cookie", [...setCookies, cookieStr]);
}
function deleteCookie(event, name, serializeOptions) {
  setCookie(event, name, "", {
    ...serializeOptions,
    maxAge: 0
  });
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(name, value);
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
const appendHeader = appendResponseHeader;
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders(
    getProxyRequestHeaders(event),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  const response = await _getFetch(opts.fetch)(target, {
    headers: opts.headers,
    ignoreResponseError: true,
    // make $ofetch.raw transparent
    ...opts.fetchOptions
  });
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name)) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Event {
  constructor(req, res) {
    __publicField(this, "__is_event__", true);
    // Context
    __publicField(this, "node");
    // Node
    __publicField(this, "web");
    // Web
    __publicField(this, "context", {});
    // Shared
    // Request
    __publicField(this, "_method");
    __publicField(this, "_path");
    __publicField(this, "_headers");
    __publicField(this, "_requestBody");
    // Response
    __publicField(this, "_handled", false);
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. **/
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. **/
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    return Object.assign(handler, { __is_handler__: true });
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  return Object.assign(_handler, { __is_handler__: true });
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler = r.default || r;
        if (typeof handler !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler
          );
        }
        _resolved = toEventHandler(r.default || r);
        return _resolved;
      });
    }
    return _promise;
  };
  return eventHandler((event) => {
    if (_resolved) {
      return _resolved(event);
    }
    return resolveHandler().then((handler) => handler(event));
  });
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const app = {
    // @ts-ignore
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    handler,
    stack,
    options
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(
      normalizeLayer({ ...arg2, route: "/", handler: arg1 })
    );
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      await options.onAfterResponse(event, void 0);
    }
  });
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  router.handler = eventHandler((event) => {
    let path = event.path || "/";
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      if (opts.preemptive || opts.preemtive) {
        throw createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${event.path || "/"}.`
        });
      } else {
        return;
      }
    }
    const method = (event.node.req.method || "get").toLowerCase();
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      if (opts.preemptive || opts.preemtive) {
        throw createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        });
      } else {
        return;
      }
    }
    event.context.matchedRoute = matched;
    const params = matched.params || {};
    event.context.params = params;
    return Promise.resolve(handler(event)).then((res) => {
      if (res === void 0 && (opts.preemptive || opts.preemtive)) {
        return null;
      }
      return res;
    });
  });
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      await sendError(event, error, !!app.options.debug);
    }
  };
  return toNodeHandle;
}

const s=globalThis.Headers,i=globalThis.AbortController,l=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function mergeFetchOptions(input, defaults, Headers = globalThis.Headers) {
  const merged = {
    ...defaults,
    ...input
  };
  if (defaults?.params && input?.params) {
    merged.params = {
      ...defaults?.params,
      ...input?.params
    };
  }
  if (defaults?.query && input?.query) {
    merged.query = {
      ...defaults?.query,
      ...input?.query
    };
  }
  if (defaults?.headers && input?.headers) {
    merged.headers = new Headers(defaults?.headers || {});
    for (const [key, value] of new Headers(input?.headers || {})) {
      merged.headers.set(key, value);
    }
  }
  return merged;
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  //  Gateway Timeout
]);
const nullBodyResponses$1 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch$1(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1,
          timeout: context.options.timeout
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: mergeFetchOptions(_options, globalOptions.defaults, Headers),
      response: void 0,
      error: void 0
    };
    context.options.method = context.options.method?.toUpperCase();
    if (context.options.onRequest) {
      await context.options.onRequest(context);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query || context.options.params) {
        context.request = withQuery(context.request, {
          ...context.options.params,
          ...context.options.query
        });
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      setTimeout(() => controller.abort(), context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await context.options.onRequestError(context);
      }
      return await onError(context);
    }
    const hasBody = context.response.body && !nullBodyResponses$1.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await context.options.onResponse(context);
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await context.options.onResponseError(context);
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}) => createFetch$1({
    ...globalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch || createNodeFetch();
const Headers$1 = globalThis.Headers || s;
const AbortController = globalThis.AbortController || i;
const ofetch = createFetch$1({ fetch, Headers: Headers$1, AbortController });
const $fetch$1 = ofetch;

const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createCall(handle) {
  return function callHandle(context) {
    const req = new IncomingMessage();
    const res = new ServerResponse(req);
    req.url = context.url || "/";
    req.method = context.method || "GET";
    req.headers = {};
    if (context.headers) {
      const headerEntries = typeof context.headers.entries === "function" ? context.headers.entries() : Object.entries(context.headers);
      for (const [name, value] of headerEntries) {
        if (!value) {
          continue;
        }
        req.headers[name.toLowerCase()] = value;
      }
    }
    req.headers.host = req.headers.host || context.host || "localhost";
    req.connection.encrypted = // @ts-ignore
    req.connection.encrypted || context.protocol === "https";
    req.body = context.body || null;
    req.__unenv__ = context.context;
    return handle(req, res).then(() => {
      let body = res._data;
      if (nullBodyResponses.has(res.statusCode) || req.method.toUpperCase() === "HEAD") {
        body = null;
        delete res._headers["content-length"];
      }
      const r = {
        body,
        headers: res._headers,
        status: res.statusCode,
        statusText: res.statusMessage
      };
      req.destroy();
      res.destroy();
      return r;
    });
  };
}

function createFetch(call, _fetch = global.fetch) {
  return async function ufetch(input, init) {
    const url = input.toString();
    if (!url.startsWith("/")) {
      return _fetch(url, init);
    }
    try {
      const r = await call({ url, ...init });
      return new Response(r.body, {
        status: r.status,
        statusText: r.statusText,
        headers: Object.fromEntries(
          Object.entries(r.headers).map(([name, value]) => [
            name,
            Array.isArray(value) ? value.join(",") : String(value) || ""
          ])
        )
      });
    } catch (error) {
      return new Response(error.toString(), {
        status: Number.parseInt(error.statusCode || error.code) || 500,
        statusText: error.statusText
      });
    }
  };
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = separators ?? STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function upperFirst(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}
function lowerFirst(str) {
  return str ? str[0].toLowerCase() + str.slice(1) : "";
}
function pascalCase(str, opts) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => upperFirst(opts?.normalize ? p.toLowerCase() : p)).join("") : "";
}
function camelCase(str, opts) {
  return lowerFirst(pascalCase(str || "", opts));
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner ?? "-") : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const defineAppConfig = (config) => config;

const appConfig0 = defineAppConfig({
  docus: {
    title: "Kubernetes BootCamp",
    description: "The best place to start your Kubernetes Journey",
    url: "cncf-lahore.github.io/Kubernetes-Bootcamp",
    image: "https://i.ibb.co/PGkhK2D/logo-07df0d71aa68491bbca25e45a62ac299.png",
    socials: {},
    layout: "default",
    header: {
      title: "",
      logo: false,
      showLinkIcon: false,
      fluid: false,
      exclude: []
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    footer: {
      credits: {
        icon: "",
        text: "Made with \u2764\uFE0Fby Adil Shahzad",
        href: "https://www.linkedin.com/in/adilshehzad7/"
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    },
    github: {
      branch: "main",
      repo: "/Kubernetes-Bootcamp/",
      owner: "CNCF-Lahore",
      edit: false
    }
  }
});

const appConfig1 = defineAppConfig({
  docus: {
    title: "Docus",
    description: "The best place to start your documentation.",
    url: "https://docus.dev",
    image: "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    socials: {},
    layout: "default",
    header: {
      title: "",
      logo: false,
      showLinkIcon: false,
      fluid: false,
      exclude: []
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    footer: {
      credits: {
        icon: "IconDocus",
        text: "Powered by Docus",
        href: "https://docus.dev"
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    },
    github: {
      dir: void 0,
      branch: void 0,
      repo: void 0,
      owner: void 0,
      edit: false
    }
  }
});

const appConfig2 = defineAppConfig({
  prose: {
    copyButton: {
      iconCopy: "ph:copy",
      iconCopied: "ph:check"
    },
    headings: {
      icon: "ph:link"
    }
  }
});

const appConfig3 = defineAppConfig({});

const inlineAppConfig = {
  "nuxt": {
    "buildId": "0c306b1f-2202-4dc0-b290-8a91967ca596"
  }
};

const appConfig = defuFn(appConfig0, appConfig1, appConfig2, appConfig3, inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/Kubernetes-Bootcamp/",
    "buildAssetsDir": "assets",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/api/search": {
        "prerender": true,
        "cache": true
      },
      "/assets/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/assets/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/assets/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "plausible": {
      "hashMode": false,
      "trackLocalhost": false,
      "domain": "",
      "apiHost": "https://plausible.io",
      "autoPageviews": true,
      "autoOutboundTracking": false
    },
    "studio": {
      "apiURL": "https://api.nuxt.studio"
    },
    "mdc": {
      "components": {
        "prose": true,
        "map": {
          "p": "prose-p",
          "a": "prose-a",
          "blockquote": "prose-blockquote",
          "code-inline": "prose-code-inline",
          "code": "ProseCodeInline",
          "em": "prose-em",
          "h1": "prose-h1",
          "h2": "prose-h2",
          "h3": "prose-h3",
          "h4": "prose-h4",
          "h5": "prose-h5",
          "h6": "prose-h6",
          "hr": "prose-hr",
          "img": "prose-img",
          "ul": "prose-ul",
          "ol": "prose-ol",
          "li": "prose-li",
          "strong": "prose-strong",
          "table": "prose-table",
          "thead": "prose-thead",
          "tbody": "prose-tbody",
          "td": "prose-td",
          "th": "prose-th",
          "tr": "prose-tr"
        }
      },
      "headings": {
        "anchorLinks": {
          "h1": false,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": false,
          "h6": false
        }
      }
    },
    "content": {
      "locales": [],
      "defaultLocale": "",
      "integrity": 1708620613531,
      "experimental": {
        "stripQueryParameters": false,
        "advanceQuery": false,
        "clientDB": false
      },
      "respectPathCase": false,
      "api": {
        "baseURL": "/api/_content"
      },
      "navigation": {
        "fields": [
          "icon",
          "titleTemplate",
          "header",
          "main",
          "aside",
          "footer",
          "layout"
        ]
      },
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "highlight": {
        "theme": {
          "dark": "github-dark",
          "default": "github-light"
        },
        "preload": [
          "json",
          "js",
          "ts",
          "html",
          "css",
          "vue",
          "diff",
          "shell",
          "markdown",
          "yaml",
          "bash",
          "ini"
        ]
      },
      "wsUrl": "",
      "documentDriven": {
        "page": true,
        "navigation": true,
        "surround": true,
        "globals": {},
        "layoutFallbacks": [
          "theme"
        ],
        "injectPage": true
      },
      "host": "",
      "trailingSlash": false,
      "search": "",
      "contentHead": true,
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      }
    }
  },
  "pinceau": {
    "studio": true,
    "outputDir": "/workspace/Kubernetes-Bootcamp/.nuxt/pinceau/"
  },
  "studio": {
    "publicToken": "",
    "project": ""
  },
  "mdc": {
    "highlight": {
      "theme": {
        "dark": "github-dark",
        "default": "github-light"
      },
      "preload": [
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "diff",
        "shell",
        "markdown",
        "yaml",
        "bash",
        "ini"
      ],
      "wrapperStyle": ""
    }
  },
  "content": {
    "cacheVersion": 2,
    "cacheIntegrity": "4q9TnkKRqO",
    "transformers": [],
    "base": "",
    "api": {
      "baseURL": "/api/_content"
    },
    "watch": {
      "ws": {
        "port": {
          "port": 4000,
          "portRange": [
            4000,
            4040
          ]
        },
        "hostname": "localhost",
        "showURL": false
      }
    },
    "sources": {},
    "ignores": [],
    "locales": [],
    "defaultLocale": "",
    "highlight": {
      "theme": {
        "dark": "github-dark",
        "default": "github-light"
      },
      "preload": [
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "diff",
        "shell",
        "markdown",
        "yaml",
        "bash",
        "ini"
      ]
    },
    "markdown": {
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      },
      "remarkPlugins": {},
      "rehypePlugins": {}
    },
    "yaml": {},
    "csv": {
      "delimeter": ",",
      "json": true
    },
    "navigation": {
      "fields": [
        "icon",
        "titleTemplate",
        "header",
        "main",
        "aside",
        "footer",
        "layout"
      ]
    },
    "contentHead": true,
    "documentDriven": true,
    "respectPathCase": false,
    "experimental": {
      "clientDB": false,
      "cacheContents": true,
      "stripQueryParameters": false,
      "advanceQuery": false,
      "search": ""
    }
  },
  "appConfigSchema": {
    "properties": {
      "id": "#appConfig",
      "properties": {
        "nuxtIcon": {
          "title": "Nuxt Icon",
          "description": "Configure Nuxt Icon module preferences.",
          "id": "#appConfig/nuxtIcon",
          "properties": {
            "size": {
              "title": "Icon Size",
              "description": "Set the default icon size. Set to false to disable the sizing of icon in style.",
              "tags": [
                "@studioIcon material-symbols:format-size-rounded"
              ],
              "tsType": "string | false",
              "id": "#appConfig/nuxtIcon/size",
              "default": "1em",
              "type": "string"
            },
            "class": {
              "title": "CSS Class",
              "description": "Set the default CSS class.",
              "tags": [
                "@studioIcon material-symbols:css"
              ],
              "id": "#appConfig/nuxtIcon/class",
              "default": "",
              "type": "string"
            },
            "aliases": {
              "title": "Icon aliases",
              "description": "Define Icon aliases to update them easily without code changes.",
              "tags": [
                "@studioIcon material-symbols:star-rounded"
              ],
              "tsType": "{ [alias: string]: string }",
              "id": "#appConfig/nuxtIcon/aliases",
              "default": {},
              "type": "object"
            },
            "iconifyApiOptions": {
              "title": "Iconify API Options",
              "description": "Define preferences for Iconify API fetch.",
              "tags": [
                "@studioIcon material-symbols:tv-options-input-settings"
              ],
              "id": "#appConfig/nuxtIcon/iconifyApiOptions",
              "properties": {
                "url": {
                  "title": "Iconify API URL",
                  "description": "Define a custom Iconify API URL. Useful if you want to use a self-hosted Iconify API. Learn more: https://iconify.design/docs/api.",
                  "tags": [
                    "@studioIcon material-symbols:api"
                  ],
                  "id": "#appConfig/nuxtIcon/iconifyApiOptions/url",
                  "default": "https://api.iconify.design",
                  "type": "string"
                },
                "publicApiFallback": {
                  "title": "Public Iconify API fallback",
                  "description": "Define if the public Iconify API should be used as fallback.",
                  "tags": [
                    "@studioIcon material-symbols:public"
                  ],
                  "id": "#appConfig/nuxtIcon/iconifyApiOptions/publicApiFallback",
                  "default": false,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "url": "https://api.iconify.design",
                "publicApiFallback": false
              }
            }
          },
          "type": "object",
          "default": {
            "size": "1em",
            "class": "",
            "aliases": {},
            "iconifyApiOptions": {
              "url": "https://api.iconify.design",
              "publicApiFallback": false
            }
          }
        },
        "prose": {
          "title": "Prose configuration from Nuxt Typography",
          "description": "",
          "tags": [
            "@studioIcon material-symbols:short-text-rounded",
            "@studioInput icon"
          ],
          "id": "#appConfig/prose",
          "properties": {
            "copyButton": {
              "title": "Copy button (used in code blocks)",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:content-copy"
              ],
              "id": "#appConfig/prose/copyButton",
              "properties": {
                "iconCopy": {
                  "title": "Icon displayed to copy",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/prose/copyButton/iconCopy",
                  "default": "ph:copy",
                  "type": "string"
                },
                "iconCopied": {
                  "title": "Icon displayed when copied",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/prose/copyButton/iconCopied",
                  "default": "ph:check",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "iconCopy": "ph:copy",
                "iconCopied": "ph:check"
              }
            },
            "headings": {
              "title": "Default configuration for all headings (h1, h2, h3, h4, h5 and h6)",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:title"
              ],
              "id": "#appConfig/prose/headings",
              "properties": {
                "icon": {
                  "title": "Default icon for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/headings/icon",
                  "default": "ph:link",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": "ph:link"
              }
            },
            "h1": {
              "title": "First heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h1"
              ],
              "id": "#appConfig/prose/h1",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h1/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h2": {
              "title": "Second heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h2"
              ],
              "id": "#appConfig/prose/h2",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h2/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h3": {
              "title": "Third heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h3"
              ],
              "id": "#appConfig/prose/h3",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h3/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h4": {
              "title": "Fourth heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h4"
              ],
              "id": "#appConfig/prose/h4",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h4/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h5": {
              "title": "Fifth heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h5"
              ],
              "id": "#appConfig/prose/h5",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h5/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h6": {
              "title": "Sixth heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h6"
              ],
              "id": "#appConfig/prose/h6",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h6/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            }
          },
          "type": "object",
          "default": {
            "copyButton": {
              "iconCopy": "ph:copy",
              "iconCopied": "ph:check"
            },
            "headings": {
              "icon": "ph:link"
            },
            "h1": {
              "icon": ""
            },
            "h2": {
              "icon": ""
            },
            "h3": {
              "icon": ""
            },
            "h4": {
              "icon": ""
            },
            "h5": {
              "icon": ""
            },
            "h6": {
              "icon": ""
            }
          }
        },
        "docus": {
          "title": "Docus theme configuration.",
          "description": "",
          "tags": [
            "@studioIcon material-symbols:docs"
          ],
          "id": "#appConfig/docus",
          "properties": {
            "title": {
              "title": "Website title, used as header default title and meta title.",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:title"
              ],
              "id": "#appConfig/docus/title",
              "default": "Docus",
              "type": "string"
            },
            "titleTemplate": {
              "title": "The website title template, to overwrite the default one.",
              "description": "",
              "tags": [],
              "id": "#appConfig/docus/titleTemplate",
              "default": "%s · Docus",
              "type": "string"
            },
            "description": {
              "title": "Website description, used for meta description.",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:description"
              ],
              "id": "#appConfig/docus/description",
              "default": "The best place to start your documentation.",
              "type": "string"
            },
            "image": {
              "title": "Cover image.",
              "description": "",
              "tags": [
                "@example '/cover.jpg'",
                "@studioIcon dashicons:cover-image",
                "@studioInput file"
              ],
              "id": "#appConfig/docus/image",
              "default": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
              "type": "string"
            },
            "socials": {
              "title": "Social links",
              "description": "Will be used in AppSocialIcons component.",
              "tags": [
                "@studioIcon material-symbols:share-outline"
              ],
              "id": "#appConfig/docus/socials",
              "properties": {
                "twitter": {
                  "title": "Twitter social handle",
                  "description": "",
                  "tags": [
                    "@example 'nuxt_js'",
                    "@studioIcon simple-icons:twitter"
                  ],
                  "id": "#appConfig/docus/socials/twitter",
                  "default": "",
                  "type": "string"
                },
                "github": {
                  "title": "GitHub org or repository",
                  "description": "",
                  "tags": [
                    "@example 'nuxt/framework'",
                    "@studioIcon simple-icons:github"
                  ],
                  "id": "#appConfig/docus/socials/github",
                  "default": "",
                  "type": "string"
                },
                "facebook": {
                  "title": "Facebook page url",
                  "description": "",
                  "tags": [
                    "@example https://www.facebook.com/groups/nuxtjs",
                    "@studioIcon simple-icons:facebook"
                  ],
                  "id": "#appConfig/docus/socials/facebook",
                  "default": "",
                  "type": "string"
                },
                "instagram": {
                  "title": "Instagram page url",
                  "description": "",
                  "tags": [
                    "@example https://www.instagram.com/wearenuxt",
                    "@studioIcon simple-icons:instagram"
                  ],
                  "id": "#appConfig/docus/socials/instagram",
                  "default": "",
                  "type": "string"
                },
                "tiktok": {
                  "title": "Instagram page url",
                  "description": "",
                  "tags": [
                    "@example https://www.youtube.com/@NuxtLabs",
                    "@studioIcon simple-icons:youtube"
                  ],
                  "id": "#appConfig/docus/socials/tiktok",
                  "default": "",
                  "type": "string"
                },
                "youtube": {
                  "title": "TikTok page url",
                  "description": "",
                  "tags": [
                    "@example https://www.tiktok.com/@tiktok",
                    "@studioIcon simple-icons:tiktok"
                  ],
                  "id": "#appConfig/docus/socials/youtube",
                  "default": "",
                  "type": "string"
                },
                "medium": {
                  "title": "Medium page url",
                  "description": "",
                  "tags": [
                    "@example https://medium.com/nuxt",
                    "@studioIcon simple-icons:medium"
                  ],
                  "id": "#appConfig/docus/socials/medium",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "twitter": "",
                "github": "",
                "facebook": "",
                "instagram": "",
                "tiktok": "",
                "youtube": "",
                "medium": ""
              }
            },
            "layout": {
              "title": "Theme layout configuration.",
              "description": "",
              "tags": [
                "@studioIcon tabler:arrow-autofit-width"
              ],
              "tsType": "'default'|'page'",
              "id": "#appConfig/docus/layout",
              "default": "default",
              "type": "string"
            },
            "aside": {
              "title": "Aside navigation configuration.",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-page-24-regular"
              ],
              "id": "#appConfig/docus/aside",
              "properties": {
                "level": {
                  "title": "Aside navigation level",
                  "description": "Use 0 to disable all nesting. Use 1 and more to display nested navigation in header and aside navigation.",
                  "tags": [],
                  "id": "#appConfig/docus/aside/level",
                  "default": 0,
                  "type": "number"
                },
                "collapsed": {
                  "title": "Specify if default collapsibles state globally for aside navigation.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/aside/collapsed",
                  "default": false,
                  "type": "boolean"
                },
                "exclude": {
                  "title": "Paths to be excluded from aside navigation.",
                  "description": "",
                  "tags": [],
                  "tsType": "string[]",
                  "id": "#appConfig/docus/aside/exclude",
                  "default": [],
                  "type": "array",
                  "items": {
                    "type": "any"
                  }
                }
              },
              "type": "object",
              "default": {
                "level": 0,
                "collapsed": false,
                "exclude": []
              }
            },
            "header": {
              "title": "Header configuration.",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-header-24-regular"
              ],
              "id": "#appConfig/docus/header",
              "properties": {
                "title": {
                  "title": "Website title",
                  "description": "Title to be displayed in header or as aria-label if logo is defined.\nDefault to docus.title",
                  "tags": [
                    "@studioIcon material-symbols:title"
                  ],
                  "id": "#appConfig/docus/header/title",
                  "default": "",
                  "type": "string"
                },
                "logo": {
                  "title": "Logo configuration",
                  "description": "Boolean to disable or use the `Logo.vue` component.\nString to be used as a name of a component.\nObject that sets the light and dark logos.",
                  "tags": [
                    "@example 'MyLogo'",
                    "@studioInput boolean"
                  ],
                  "tsType": "boolean|string|{dark: string, light: string}",
                  "id": "#appConfig/docus/header/logo",
                  "default": false,
                  "type": "boolean"
                },
                "showLinkIcon": {
                  "title": "Header links",
                  "description": "Toggle links icons in the header.",
                  "tags": [],
                  "id": "#appConfig/docus/header/showLinkIcon",
                  "default": false,
                  "type": "boolean"
                },
                "exclude": {
                  "title": "Paths to be excluded from header links.",
                  "description": "",
                  "tags": [],
                  "tsType": "string[]",
                  "id": "#appConfig/docus/header/exclude",
                  "default": [],
                  "type": "array",
                  "items": {
                    "type": "any"
                  }
                },
                "fluid": {
                  "title": "Makes the content of the header fluid.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/header/fluid",
                  "default": false,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "title": "",
                "logo": false,
                "showLinkIcon": false,
                "exclude": [],
                "fluid": false
              }
            },
            "main": {
              "title": "Main content configuration.",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-header-footer-24-filled"
              ],
              "id": "#appConfig/docus/main",
              "properties": {
                "fluid": {
                  "title": "Makes the content of the main container fluid.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/main/fluid",
                  "default": false,
                  "type": "boolean"
                },
                "padded": {
                  "title": "Makes the content of the main container padded.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/main/padded",
                  "default": true,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "fluid": false,
                "padded": true
              }
            },
            "footer": {
              "title": "Footer configuration",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-footer-24-regular"
              ],
              "id": "#appConfig/docus/footer",
              "properties": {
                "credits": {
                  "title": "Website credits configuration.",
                  "description": "",
                  "tags": [
                    "@studioIcon material-symbols:copyright"
                  ],
                  "tsType": "false|{icon: string, text: string, href: string}",
                  "id": "#appConfig/docus/footer/credits",
                  "properties": {
                    "icon": {
                      "title": "Icon to show on credits",
                      "description": "",
                      "tags": [
                        "@formtype Icon"
                      ],
                      "id": "#appConfig/docus/footer/credits/icon",
                      "default": "IconDocus",
                      "type": "string"
                    },
                    "text": {
                      "type": "string",
                      "id": "#appConfig/docus/footer/credits/text",
                      "default": "Powered by Docus"
                    },
                    "href": {
                      "type": "string",
                      "id": "#appConfig/docus/footer/credits/href",
                      "default": "https://docus.dev"
                    }
                  },
                  "type": "object",
                  "default": {
                    "icon": "IconDocus",
                    "text": "Powered by Docus",
                    "href": "https://docus.dev"
                  }
                },
                "textLinks": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "required": [
                      "text",
                      "href"
                    ],
                    "properties": {
                      "href": {
                        "type": "string",
                        "description": "URL when clicking the link"
                      },
                      "text": {
                        "type": "string",
                        "description": "Text of the link"
                      },
                      "target": {
                        "type": "string",
                        "description": "Target attribute of the link"
                      },
                      "rel": {
                        "type": "string",
                        "description": "Rel attribute of the link"
                      }
                    }
                  },
                  "title": "Text links",
                  "description": "Will be added into center section of the footer.",
                  "tags": [
                    "@studioIcon material-symbols:add-link"
                  ],
                  "id": "#appConfig/docus/footer/textLinks"
                },
                "iconLinks": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "required": [
                      "icon",
                      "href"
                    ],
                    "properties": {
                      "icon": {
                        "type": "string",
                        "description": "Icon name"
                      },
                      "href": {
                        "type": "string",
                        "description": "Link when clicking on the icon"
                      },
                      "label": {
                        "type": "string",
                        "description": "Label of the icon"
                      },
                      "rel": {
                        "type": "string",
                        "description": "Rel attribute of the link"
                      }
                    }
                  },
                  "title": "Icon links",
                  "description": "Icons to be added to Social Icons in footer.",
                  "tags": [
                    "@studioIcon material-symbols:add-link"
                  ],
                  "id": "#appConfig/docus/footer/iconLinks"
                },
                "fluid": {
                  "title": "Makes the content of the footer fluid.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/footer/fluid",
                  "default": true,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "credits": {
                  "icon": "IconDocus",
                  "text": "Powered by Docus",
                  "href": "https://docus.dev"
                },
                "fluid": true
              }
            },
            "github": {
              "title": "GitHub integration",
              "description": "Configure the Edit on Github integration.",
              "tags": [
                "@studioIcon simple-icons:github"
              ],
              "id": "#appConfig/docus/github",
              "properties": {
                "baseUrl": {
                  "title": "Base URL",
                  "description": "You can use this to link to GitHub Enterprise.",
                  "tags": [],
                  "id": "#appConfig/docus/github/baseUrl",
                  "default": "https://github.com",
                  "type": "string"
                },
                "dir": {
                  "title": "Directory",
                  "description": "Your GitHub repository root directory.",
                  "tags": [],
                  "id": "#appConfig/docus/github/dir",
                  "default": "",
                  "type": "string"
                },
                "branch": {
                  "title": "Branch",
                  "description": "Your GitHub repository branch.",
                  "tags": [],
                  "id": "#appConfig/docus/github/branch",
                  "default": "",
                  "type": "string"
                },
                "repo": {
                  "title": "Repository",
                  "description": "Your GitHub repository name.",
                  "tags": [],
                  "id": "#appConfig/docus/github/repo",
                  "default": "",
                  "type": "string"
                },
                "owner": {
                  "title": "Owner",
                  "description": "Your GitHub repository owner.",
                  "tags": [],
                  "id": "#appConfig/docus/github/owner",
                  "default": "",
                  "type": "string"
                },
                "edit": {
                  "title": "EditOnGithub",
                  "description": "Display EditOnGithub button.",
                  "tags": [],
                  "id": "#appConfig/docus/github/edit",
                  "default": false,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "baseUrl": "https://github.com",
                "dir": "",
                "branch": "",
                "repo": "",
                "owner": "",
                "edit": false
              }
            }
          },
          "type": "object",
          "default": {
            "title": "Docus",
            "titleTemplate": "%s · Docus",
            "description": "The best place to start your documentation.",
            "image": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
            "socials": {
              "twitter": "",
              "github": "",
              "facebook": "",
              "instagram": "",
              "tiktok": "",
              "youtube": "",
              "medium": ""
            },
            "layout": "default",
            "aside": {
              "level": 0,
              "collapsed": false,
              "exclude": []
            },
            "header": {
              "title": "",
              "logo": false,
              "showLinkIcon": false,
              "exclude": [],
              "fluid": false
            },
            "main": {
              "fluid": false,
              "padded": true
            },
            "footer": {
              "credits": {
                "icon": "IconDocus",
                "text": "Powered by Docus",
                "href": "https://docus.dev"
              },
              "fluid": true
            },
            "github": {
              "baseUrl": "https://github.com",
              "dir": "",
              "branch": "",
              "repo": "",
              "owner": "",
              "edit": false
            }
          }
        }
      },
      "type": "object",
      "default": {
        "nuxtIcon": {
          "size": "1em",
          "class": "",
          "aliases": {},
          "iconifyApiOptions": {
            "url": "https://api.iconify.design",
            "publicApiFallback": false
          }
        },
        "prose": {
          "copyButton": {
            "iconCopy": "ph:copy",
            "iconCopied": "ph:check"
          },
          "headings": {
            "icon": "ph:link"
          },
          "h1": {
            "icon": ""
          },
          "h2": {
            "icon": ""
          },
          "h3": {
            "icon": ""
          },
          "h4": {
            "icon": ""
          },
          "h5": {
            "icon": ""
          },
          "h6": {
            "icon": ""
          }
        },
        "docus": {
          "title": "Docus",
          "titleTemplate": "%s · Docus",
          "description": "The best place to start your documentation.",
          "image": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
          "socials": {
            "twitter": "",
            "github": "",
            "facebook": "",
            "instagram": "",
            "tiktok": "",
            "youtube": "",
            "medium": ""
          },
          "layout": "default",
          "aside": {
            "level": 0,
            "collapsed": false,
            "exclude": []
          },
          "header": {
            "title": "",
            "logo": false,
            "showLinkIcon": false,
            "exclude": [],
            "fluid": false
          },
          "main": {
            "fluid": false,
            "padded": true
          },
          "footer": {
            "credits": {
              "icon": "IconDocus",
              "text": "Powered by Docus",
              "href": "https://docus.dev"
            },
            "fluid": true
          },
          "github": {
            "baseUrl": "https://github.com",
            "dir": "",
            "branch": "",
            "repo": "",
            "owner": "",
            "edit": false
          }
        }
      }
    },
    "default": {
      "nuxtIcon": {
        "size": "1em",
        "class": "",
        "aliases": {},
        "iconifyApiOptions": {
          "url": "https://api.iconify.design",
          "publicApiFallback": false
        }
      },
      "prose": {
        "copyButton": {
          "iconCopy": "ph:copy",
          "iconCopied": "ph:check"
        },
        "headings": {
          "icon": "ph:link"
        },
        "h1": {
          "icon": ""
        },
        "h2": {
          "icon": ""
        },
        "h3": {
          "icon": ""
        },
        "h4": {
          "icon": ""
        },
        "h5": {
          "icon": ""
        },
        "h6": {
          "icon": ""
        }
      },
      "docus": {
        "title": "Docus",
        "titleTemplate": "%s · Docus",
        "description": "The best place to start your documentation.",
        "image": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
        "socials": {
          "twitter": "",
          "github": "",
          "facebook": "",
          "instagram": "",
          "tiktok": "",
          "youtube": "",
          "medium": ""
        },
        "layout": "default",
        "aside": {
          "level": 0,
          "collapsed": false,
          "exclude": []
        },
        "header": {
          "title": "",
          "logo": false,
          "showLinkIcon": false,
          "exclude": [],
          "fluid": false
        },
        "main": {
          "fluid": false,
          "padded": true
        },
        "footer": {
          "credits": {
            "icon": "IconDocus",
            "text": "Powered by Docus",
            "href": "https://docus.dev"
          },
          "fluid": true
        },
        "github": {
          "baseUrl": "https://github.com",
          "dir": "",
          "branch": "",
          "repo": "",
          "owner": "",
          "edit": false
        }
      }
    }
  },
  "contentSchema": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  if (!event) {
    return _sharedAppConfig;
  }
  if (event.context.nitro.appConfig) {
    return event.context.nitro.appConfig;
  }
  const appConfig$1 = klona(appConfig);
  event.context.nitro.appConfig = appConfig$1;
  return appConfig$1;
}
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (typeof Buffer === void 0) {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base64 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base64;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
}

const storageKeyProperties = [
  "hasItem",
  "getItem",
  "getItemRaw",
  "setItem",
  "setItemRaw",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey$2(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys) {
  return normalizeKey$2(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$2(base);
  return base ? base + ":" : "";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$3 = "memory";
const memory$1 = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$3,
    options: {},
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return Array.from(data.keys());
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory$1() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$2(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$2(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$2(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$2(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$2(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$2(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          await asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$2(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$2(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$2(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        const keys = rawKeys.map((key) => mount.mountpoint + normalizeKey$2(key)).filter((key) => !maskedMounts.some((p) => key.startsWith(p)));
        allKeys.push(...keys);
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      return base ? allKeys.filter((key) => key.startsWith(base) && !key.endsWith("$")) : allKeys.filter((key) => !key.endsWith("$"));
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$2(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$2(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    }
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {
  ["nitro:bundled:pinceau:index.css"]: {
    import: () => import('../raw/index.mjs').then(r => r.default || r),
    meta: {"type":"text/css; charset=utf-8","etag":"\"6ac5-4LEdkosUnIZtOaB6S63hpgUbXW4\"","mtime":"2024-02-22T16:50:56.664Z"}
  },
  ["nitro:bundled:cache:content:content-index.json"]: {
    import: () => import('../raw/content-index.mjs').then(r => r.default || r),
    meta: {"type":"application/json","etag":"\"5af-xzMOfrZtdazUiMgL7DKcdvPvZI0\"","mtime":"2024-02-22T16:50:56.664Z"}
  },
  ["nitro:bundled:cache:content:content-navigation.json"]: {
    import: () => import('../raw/content-navigation.mjs').then(r => r.default || r),
    meta: {"type":"application/json","etag":"\"782-QNJdGw9rnsDTgwM99K0DBRryzEc\"","mtime":"2024-02-22T16:50:56.664Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:0.index.md"]: {
    import: () => import('../raw/0.index.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1e6f-CCFARZfwNgbE5sX8MhhcLksPCR4\"","mtime":"2024-02-22T16:50:56.664Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.introduction:1.getting-started.md"]: {
    import: () => import('../raw/1.getting-started.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"dfe-MkC3ylp+eURbyaG5Xq/tLNKryPA\"","mtime":"2024-02-22T16:50:56.664Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.introduction:2.Active-your-sandbox.md"]: {
    import: () => import('../raw/2.Active-your-sandbox.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1249-4tjsf03d0HTaCpqSsC3/zCQWkJM\"","mtime":"2024-02-22T16:50:56.668Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.introduction:3.what-you-will-learn.md"]: {
    import: () => import('../raw/3.what-you-will-learn.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1677-vGoJ9ZTHZnxqo3RiovAsYQf9G5M\"","mtime":"2024-02-22T16:50:56.664Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.introduction:4.you-must-know.md"]: {
    import: () => import('../raw/4.you-must-know.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"f14-RKw76LuChqJfPLiuyY3E6wqRQqY\"","mtime":"2024-02-22T16:50:56.664Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.introduction:_dir.yml"]: {
    import: () => import('../raw/_dir.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"160-NJuoc0rhUgiFhG+9RCSJBIZ71bs\"","mtime":"2024-02-22T16:50:56.668Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.Deploy-an-App:1.Your-First-App.md"]: {
    import: () => import('../raw/1.Your-First-App.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1a80-v5J+6rUFq3xGwzxl+6vglWd3Fgc\"","mtime":"2024-02-22T16:50:56.668Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.Deploy-an-App:2.Lab.md"]: {
    import: () => import('../raw/2.Lab.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1f43-J/kSkrza2q2wLcjNxM3uyHiyg3c\"","mtime":"2024-02-22T16:50:56.664Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.Explore-Your-App:1.how-to-explore.md"]: {
    import: () => import('../raw/1.how-to-explore.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"143d-TdmC6jPOsO0QuIkMTg7l8ouSBME\"","mtime":"2024-02-22T16:50:56.668Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.Explore-Your-App:2.Lab.md"]: {
    import: () => import('../raw/2.Lab2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"28bf-83oza08i/0tqNjk6fw2b1exGLAw\"","mtime":"2024-02-22T16:50:56.664Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.introduction-to-cluster:1.Creating-Cluster.md"]: {
    import: () => import('../raw/1.Creating-Cluster.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"17a9-95gECaJvXNZDqrsneQWerTxFoys\"","mtime":"2024-02-22T16:50:56.668Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.introduction-to-cluster:2.Lab.md"]: {
    import: () => import('../raw/2.Lab3.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"2509-NrwR6rhePYeTABE7nvt6etn7twA\"","mtime":"2024-02-22T16:50:56.664Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.Expose-Your-App:1.How-to-make-it-public.md"]: {
    import: () => import('../raw/1.How-to-make-it-public.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"76ae-UIQcqXsw8pczAc1+qjmPT2WBagw\"","mtime":"2024-02-22T16:50:56.664Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.Expose-Your-App:2.Lab.md"]: {
    import: () => import('../raw/2.Lab4.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"3d48-yF/kMj3Q8moKHG30RpjOYpXbSa4\"","mtime":"2024-02-22T16:50:56.668Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:6.Scale-Your-App:1.scale-In-and-Out.md"]: {
    import: () => import('../raw/1.scale-In-and-Out.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"43c2-8iK5Yn5PGn3SzLq7j8X7lt9k9ZU\"","mtime":"2024-02-22T16:50:56.668Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:6.Scale-Your-App:2.Lab.md"]: {
    import: () => import('../raw/2.Lab5.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"186-7yWv+JgEBVgyF/D8bxUd0F1bMd8\"","mtime":"2024-02-22T16:50:56.664Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:7.Update-Your-App:1.Rolling-up.md"]: {
    import: () => import('../raw/1.Rolling-up.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"6fad-w3yzhJ4sGKYtzOaIIB2xYTx8elc\"","mtime":"2024-02-22T16:50:56.668Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:7.Update-Your-App:2.Lab.md"]: {
    import: () => import('../raw/2.Lab6.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"18a-/N7IMVzsJkpHJyU8o5pZ6vaB+FU\"","mtime":"2024-02-22T16:50:56.668Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:7.Update-Your-App:3.Quiz.md"]: {
    import: () => import('../raw/3.Quiz.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"2cd-4bkiNIawEg9V4y/eH3M7stw5Uaw\"","mtime":"2024-02-22T16:50:56.664Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:8.More:More-Resources.md"]: {
    import: () => import('../raw/More-Resources.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"29cf-H7T6lTGXFhIBNSGQqwm2dLqz4tc\"","mtime":"2024-02-22T16:50:56.664Z"}
  }
};

const normalizeKey$1 = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey$1(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey$1(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey$1(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/^:|:$/g, "");
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        const dirFiles = await readdirRecursive(entryPath, ignore);
        files.push(...dirFiles.map((f) => entry.name + "/" + f));
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.\:|\.\.$/;
const DRIVER_NAME$2 = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME$2, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME$2,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME$2,
    options: opts,
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys() {
      return readdirRecursive(r("."), opts.ignore);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const OVERLAY_REMOVED = "__OVERLAY_REMOVED__";
const DRIVER_NAME$1 = "overlay";
const overlay = defineDriver((options) => {
  return {
    name: DRIVER_NAME$1,
    options,
    async hasItem(key, opts) {
      for (const layer of options.layers) {
        if (await layer.hasItem(key, opts)) {
          if (layer === options.layers[0]) {
            if (await options.layers[0]?.getItem(key) === OVERLAY_REMOVED) {
              return false;
            }
          }
          return true;
        }
      }
      return false;
    },
    async getItem(key) {
      for (const layer of options.layers) {
        const value = await layer.getItem(key);
        if (value === OVERLAY_REMOVED) {
          return null;
        }
        if (value !== null) {
          return value;
        }
      }
      return null;
    },
    // TODO: Support native meta
    // async getMeta (key) {},
    async setItem(key, value, opts) {
      await options.layers[0]?.setItem?.(key, value, opts);
    },
    async removeItem(key, opts) {
      await options.layers[0]?.setItem?.(key, OVERLAY_REMOVED, opts);
    },
    async getKeys(base, opts) {
      const allKeys = await Promise.all(
        options.layers.map(async (layer) => {
          const keys = await layer.getKeys(base, opts);
          return keys.map((key) => normalizeKey(key));
        })
      );
      const uniqueKeys = Array.from(new Set(allKeys.flat()));
      const existingKeys = await Promise.all(
        uniqueKeys.map(async (key) => {
          if (await options.layers[0]?.getItem(key) === OVERLAY_REMOVED) {
            return false;
          }
          return key;
        })
      );
      return existingKeys.filter(Boolean);
    },
    async dispose() {
      await Promise.all(
        options.layers.map(async (layer) => {
          if (layer.dispose) {
            await layer.dispose();
          }
        })
      );
    }
  };
});

const DRIVER_NAME = "memory";
const memoryDriver = defineDriver(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME,
    options: {},
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return Array.from(data.keys());
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/workspace/Kubernetes-Bootcamp/.data/kv"}));

const bundledStorage = ["pinceau","/cache/content"];
for (const base of bundledStorage) {
  storage.mount(base, overlay({
    layers: [
      memoryDriver(),
      // TODO
      // prefixStorage(storage, base),
      prefixStorage(storage, 'assets:nitro:bundled:' + base)
    ]
  }));
}

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
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
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
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
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
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

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
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
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const nitro = (async function(nitro) {
  nitro.hooks.hook("render:html", async (htmlContext, { event }) => {
    const theme = await useStorage().getItem("pinceau:index.css");
    const pinceauContent = event?.pinceauContent || { theme: void 0, runtime: void 0 };
    if (!theme?.runtime) {
      htmlContext.head.splice(2, 0, `<style id="pinceau-runtime-hydratable">${pinceauContent.runtime}</style>`);
    }
    if (!theme?.theme) {
      htmlContext.head.splice(2, 0, `<style id="pinceau-theme">${theme}</style>`);
    }
  });
});

const script = "\"use strict\";(()=>{const a=window,e=document.documentElement,m=[\"dark\",\"light\"],c=window&&window.localStorage&&window.localStorage.getItem&&window.localStorage.getItem(\"nuxt-color-mode\")||\"system\";let n=c===\"system\"?d():c;const l=e.getAttribute(\"data-color-mode-forced\");l&&(n=l),i(n),a[\"__NUXT_COLOR_MODE__\"]={preference:c,value:n,getColorScheme:d,addColorScheme:i,removeColorScheme:f};function i(o){const t=\"\"+o+\"\",s=\"theme\";e.classList?e.classList.add(t):e.className+=\" \"+t,s&&e.setAttribute(\"data-\"+s,o)}function f(o){const t=\"\"+o+\"\",s=\"theme\";e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp(t,\"g\"),\"\"),s&&e.removeAttribute(\"data-\"+s)}function r(o){return a.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function d(){if(a.matchMedia&&r(\"\").media!==\"not all\"){for(const o of m)if(r(\":\"+o).matches)return o}return\"light\"}})();\n";

const _3GLyYt0Wtu = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  nitro,
_3GLyYt0Wtu
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
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
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const assets = {
  "/__studio.json": {
    "type": "application/json",
    "etag": "\"64ce8-fbNOQV0LOobpWBjkjdsoJZHUidQ\"",
    "mtime": "2024-02-22T16:50:56.576Z",
    "size": 412904,
    "path": "../public/__studio.json"
  },
  "/cover.png": {
    "type": "image/png",
    "etag": "\"35909-5J+erS2uZP14tVeg7C5PFt8OTKM\"",
    "mtime": "2024-02-22T16:50:56.628Z",
    "size": 219401,
    "path": "../public/cover.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3c2e-p4uyv3Eo1x9Jh1+8ZiNT2QPMMWQ\"",
    "mtime": "2024-02-22T16:50:56.628Z",
    "size": 15406,
    "path": "../public/favicon.ico"
  },
  "/api/search": {
    "type": "application/json",
    "etag": "\"d940-kCKrvkmqTHWq6fge3fugYLQbNyA\"",
    "mtime": "2024-02-22T16:50:56.112Z",
    "size": 55616,
    "path": "../public/api/search"
  },
  "/assets/Alert.gj1NZerV.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a16-R59lklaJnzmroyg2hva4I+vlHzs\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 6678,
    "path": "../public/assets/Alert.gj1NZerV.css"
  },
  "/assets/Alert.n4Uw0aPv.js": {
    "type": "application/javascript",
    "etag": "\"1f9-5mM6zVtMKXhCzV5nhkPra9ZrA+o\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 505,
    "path": "../public/assets/Alert.n4Uw0aPv.js"
  },
  "/assets/Badge.FnsfvBgE.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a36-a6J7AnJzVfGOw54A9tXH5czhvIg\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 6710,
    "path": "../public/assets/Badge.FnsfvBgE.css"
  },
  "/assets/Badge.K3pRtSa0.js": {
    "type": "application/javascript",
    "etag": "\"1d1-P6RCvIH7RRVDsYESDxiDdfgEtb8\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 465,
    "path": "../public/assets/Badge.K3pRtSa0.js"
  },
  "/assets/BlockHero.-MSmMeoy.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a56-Nw1zbiOOcBLYTu0aj26ARTQWqgI\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 2646,
    "path": "../public/assets/BlockHero.-MSmMeoy.css"
  },
  "/assets/BlockHero.TQRwX_Aq.js": {
    "type": "application/javascript",
    "etag": "\"72d-a4IJWlJXqrxsPQcZgOzAc7UigpA\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 1837,
    "path": "../public/assets/BlockHero.TQRwX_Aq.js"
  },
  "/assets/ButtonLink.E2IN3HsH.js": {
    "type": "application/javascript",
    "etag": "\"5ca-mzcecX/NYRcKI/TnIwuB16iGC9o\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 1482,
    "path": "../public/assets/ButtonLink.E2IN3HsH.js"
  },
  "/assets/ButtonLink.QevQ93vi.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"274-niZNJjh3/buawHpbAvaxH7YmXP8\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 628,
    "path": "../public/assets/ButtonLink.QevQ93vi.css"
  },
  "/assets/Callout.Arjbwqf4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ccd-zBJ2tQ4Ss6c+NryFI1+RjgDgZN8\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 7373,
    "path": "../public/assets/Callout.Arjbwqf4.css"
  },
  "/assets/Callout.o4Rps0T6.js": {
    "type": "application/javascript",
    "etag": "\"3af-HWmayBjuzkq5QAnSig3R8+Bbxd4\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 943,
    "path": "../public/assets/Callout.o4Rps0T6.js"
  },
  "/assets/Card.Op86Qx6K.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"37b-wiUD7yZ8vS+E8/Rw1YFR1wzqC2I\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 891,
    "path": "../public/assets/Card.Op86Qx6K.css"
  },
  "/assets/Card.WQIeN_Qm.js": {
    "type": "application/javascript",
    "etag": "\"2ad-W/y/t+zCXymNHsI/cAi/dG0XcsQ\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 685,
    "path": "../public/assets/Card.WQIeN_Qm.js"
  },
  "/assets/CardGrid.738QLAI6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"407-A5SJ14G2F9CJb/OScJau04xONpM\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 1031,
    "path": "../public/assets/CardGrid.738QLAI6.css"
  },
  "/assets/CardGrid.E3slNcj7.js": {
    "type": "application/javascript",
    "etag": "\"227-B7JN+tDLd0qWmZM5qzfwbjlu+Rs\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 551,
    "path": "../public/assets/CardGrid.E3slNcj7.js"
  },
  "/assets/CodeBlock.IlShycCE.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5d-nweqRivy9aabD6QXnxHC31KLDvo\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 93,
    "path": "../public/assets/CodeBlock.IlShycCE.css"
  },
  "/assets/CodeBlock.LOEXnd5k.js": {
    "type": "application/javascript",
    "etag": "\"1a9-uxnuL94d5Xdf6N7NCWrH3Oma/4g\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 425,
    "path": "../public/assets/CodeBlock.LOEXnd5k.js"
  },
  "/assets/CodeGroup.EYB3YiTv.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ed-lSbdMvUlAHS6neI3BBPmxpz+QaI\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 493,
    "path": "../public/assets/CodeGroup.EYB3YiTv.css"
  },
  "/assets/CodeGroup.KCesJmDu.js": {
    "type": "application/javascript",
    "etag": "\"466-8D9fZBER/QSj8JFeGdG3ffyJzYc\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 1126,
    "path": "../public/assets/CodeGroup.KCesJmDu.js"
  },
  "/assets/ComponentPlayground.12i2R0Hw.js": {
    "type": "application/javascript",
    "etag": "\"ac5-W/InC1UmIelPefMoxaoYxzfW2L0\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 2757,
    "path": "../public/assets/ComponentPlayground.12i2R0Hw.js"
  },
  "/assets/ComponentPlayground.TfHR_COe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4d7-EvOZuENL1OTaDrOAytx97Wqy+fY\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 1239,
    "path": "../public/assets/ComponentPlayground.TfHR_COe.css"
  },
  "/assets/ComponentPlaygroundData.qnwg7BA6.js": {
    "type": "application/javascript",
    "etag": "\"5d9-DRRSB5id1vzBvMhJBAIOHfOB4ek\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 1497,
    "path": "../public/assets/ComponentPlaygroundData.qnwg7BA6.js"
  },
  "/assets/ComponentPlaygroundData.v2TSQZ20.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e8-eRIBDachbuHQgcxmMyQhlHa6tXo\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 232,
    "path": "../public/assets/ComponentPlaygroundData.v2TSQZ20.css"
  },
  "/assets/ComponentPlaygroundProps.4_JHD8nS.js": {
    "type": "application/javascript",
    "etag": "\"59d-GmocVu50chyTefkaqBtiNVVFK9o\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 1437,
    "path": "../public/assets/ComponentPlaygroundProps.4_JHD8nS.js"
  },
  "/assets/ComponentPlaygroundProps.eqLWa6Rw.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"339-BJnAxWNkwK91+x6XqFg1Bh8QVR8\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 825,
    "path": "../public/assets/ComponentPlaygroundProps.eqLWa6Rw.css"
  },
  "/assets/ComponentPlaygroundSlots.1J0CQsIX.js": {
    "type": "application/javascript",
    "etag": "\"71-H5r7JKkrEmxhLuW/9y/n+rCp7Xw\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 113,
    "path": "../public/assets/ComponentPlaygroundSlots.1J0CQsIX.js"
  },
  "/assets/ComponentPlaygroundSlots.vue.5jxA-ihk.js": {
    "type": "application/javascript",
    "etag": "\"145-Bw4h/pSUCXLUG9AsHI3fDwu+Mqo\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 325,
    "path": "../public/assets/ComponentPlaygroundSlots.vue.5jxA-ihk.js"
  },
  "/assets/ComponentPlaygroundTokens.hNS2dQ2s.js": {
    "type": "application/javascript",
    "etag": "\"72-SJlUznnpj23Wo7jW4HVL9/r1MYY\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 114,
    "path": "../public/assets/ComponentPlaygroundTokens.hNS2dQ2s.js"
  },
  "/assets/ComponentPlaygroundTokens.vue.jItmcPD3.js": {
    "type": "application/javascript",
    "etag": "\"118-DyRVA/mAbrEGtUZOZe/iUHVEOpg\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 280,
    "path": "../public/assets/ComponentPlaygroundTokens.vue.jItmcPD3.js"
  },
  "/assets/ContentDoc.BSe84z1W.js": {
    "type": "application/javascript",
    "etag": "\"5bc-wXn2NZbgap5nLYq+sBO5nbGxyW4\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 1468,
    "path": "../public/assets/ContentDoc.BSe84z1W.js"
  },
  "/assets/ContentList.hXW6EQNW.js": {
    "type": "application/javascript",
    "etag": "\"347-9c7em3p4alaI2kZlHO64pmigcNY\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 839,
    "path": "../public/assets/ContentList.hXW6EQNW.js"
  },
  "/assets/ContentNavigation.Edap2523.js": {
    "type": "application/javascript",
    "etag": "\"337-P7VKg8wEf9EKPpCePTUzMVlMQm4\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 823,
    "path": "../public/assets/ContentNavigation.Edap2523.js"
  },
  "/assets/ContentQuery.uXE9EB58.js": {
    "type": "application/javascript",
    "etag": "\"97d-I0ORc52IaQtXXzSHNQRgj0XROUQ\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 2429,
    "path": "../public/assets/ContentQuery.uXE9EB58.js"
  },
  "/assets/ContentRenderer.PBRz_8ID.js": {
    "type": "application/javascript",
    "etag": "\"4ba-8mYWeEpT+OzVYYI85xG1Vjge7OU\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 1210,
    "path": "../public/assets/ContentRenderer.PBRz_8ID.js"
  },
  "/assets/ContentRendererMarkdown.PPNekvz7.js": {
    "type": "application/javascript",
    "etag": "\"70-VRbGxP8lkWuVTNpolRX+n1FAlvA\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 112,
    "path": "../public/assets/ContentRendererMarkdown.PPNekvz7.js"
  },
  "/assets/ContentRendererMarkdown.vue.JbB1gxXV.js": {
    "type": "application/javascript",
    "etag": "\"5bbb-8veYnCIqK8MsSytL/KWaMsokhTQ\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 23483,
    "path": "../public/assets/ContentRendererMarkdown.vue.JbB1gxXV.js"
  },
  "/assets/ContentSlot.VBt2uTTG.js": {
    "type": "application/javascript",
    "etag": "\"105-m1AGjTRD4GhKnv1uc95Cio7m71Y\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 261,
    "path": "../public/assets/ContentSlot.VBt2uTTG.js"
  },
  "/assets/CopyButton.GPTmRx9J.js": {
    "type": "application/javascript",
    "etag": "\"2d4-UOCvGQwMqvptK4/yf1B91D3T7yQ\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 724,
    "path": "../public/assets/CopyButton.GPTmRx9J.js"
  },
  "/assets/DocsAside.4hSAcPTb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"184-bGDal9LcY/4Y5dkldAsGQXyScVo\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 388,
    "path": "../public/assets/DocsAside.4hSAcPTb.css"
  },
  "/assets/DocsAside.n7a-9hxx.js": {
    "type": "application/javascript",
    "etag": "\"273-natrLI/0VfBhsBIYZU5A7vXdCws\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 627,
    "path": "../public/assets/DocsAside.n7a-9hxx.js"
  },
  "/assets/DocsPageBottom.3Qog8lc5.js": {
    "type": "application/javascript",
    "etag": "\"3d9-wT7vu1LWX6ncGts3vm0JMkZvchc\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 985,
    "path": "../public/assets/DocsPageBottom.3Qog8lc5.js"
  },
  "/assets/DocsPageBottom.KBns9KEp.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"18d-FUqlf+XbbYvS5sEf8esd1/GlSGw\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 397,
    "path": "../public/assets/DocsPageBottom.KBns9KEp.css"
  },
  "/assets/DocsPageLayout.5PJVV1Rd.js": {
    "type": "application/javascript",
    "etag": "\"c24-R0qkKoDZ7QRf3FWUxtwb2quZlCo\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 3108,
    "path": "../public/assets/DocsPageLayout.5PJVV1Rd.js"
  },
  "/assets/DocsPageLayout.aUpV_sA0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"130b-QHZ/klrLYHWsYJmNehGTFbaayrs\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 4875,
    "path": "../public/assets/DocsPageLayout.aUpV_sA0.css"
  },
  "/assets/DocsPrevNext.Dk5TpQFa.js": {
    "type": "application/javascript",
    "etag": "\"509-3/O6SVLCRujqJoFMI9ndXL4glis\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 1289,
    "path": "../public/assets/DocsPrevNext.Dk5TpQFa.js"
  },
  "/assets/DocsPrevNext.ZHR8wy71.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7d4-NvxMiJJWVDEz24cDcNI6MdD3pYo\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 2004,
    "path": "../public/assets/DocsPrevNext.ZHR8wy71.css"
  },
  "/assets/DocsToc.1EssXo9a.js": {
    "type": "application/javascript",
    "etag": "\"29b-OttSN9dbe+Kdw0Pa6QywyTnumzA\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 667,
    "path": "../public/assets/DocsToc.1EssXo9a.js"
  },
  "/assets/DocsToc.b83XiSG5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"152-xWK8LaACil1MZkjZVWd3uY1zBsE\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 338,
    "path": "../public/assets/DocsToc.b83XiSG5.css"
  },
  "/assets/DocsTocLinks.deSx1bjZ.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2c8-lonyXVkMo/xEHiqv4gR/KbGs6xc\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 712,
    "path": "../public/assets/DocsTocLinks.deSx1bjZ.css"
  },
  "/assets/DocsTocLinks.fh-_Rc1o.js": {
    "type": "application/javascript",
    "etag": "\"646-KPUGrga2iRss71VEnoLBzIwwRgM\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 1606,
    "path": "../public/assets/DocsTocLinks.fh-_Rc1o.js"
  },
  "/assets/DocumentDrivenEmpty.wKWTBTiy.js": {
    "type": "application/javascript",
    "etag": "\"120-vMMBFUZ7/aaFPv+MH/iC6EJDmt4\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 288,
    "path": "../public/assets/DocumentDrivenEmpty.wKWTBTiy.js"
  },
  "/assets/DocumentDrivenNotFound.4KQ9PSof.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8a6-be2wI1aypSJ5mpoHOqs3uPaNlW8\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 2214,
    "path": "../public/assets/DocumentDrivenNotFound.4KQ9PSof.css"
  },
  "/assets/DocumentDrivenNotFound.sBAIwkIz.js": {
    "type": "application/javascript",
    "etag": "\"2fa-vaXaXY0AbZDtUIdkYBW4Jn8T2Ko\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 762,
    "path": "../public/assets/DocumentDrivenNotFound.sBAIwkIz.js"
  },
  "/assets/EditOnLink.mO4xWfLL.js": {
    "type": "application/javascript",
    "etag": "\"63-6TWyxFpAxq/tdU8uzfUhOopTUSY\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 99,
    "path": "../public/assets/EditOnLink.mO4xWfLL.js"
  },
  "/assets/EditOnLink.vue.UIfW1AmA.js": {
    "type": "application/javascript",
    "etag": "\"989-mk816EmWqhYwdlTrHOTA27Z/LJI\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 2441,
    "path": "../public/assets/EditOnLink.vue.UIfW1AmA.js"
  },
  "/assets/Ellipsis.D0Kp8hYR.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1aa-ZBsQ4t+AsCchpHMJOH2gFqrcYyA\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 426,
    "path": "../public/assets/Ellipsis.D0Kp8hYR.css"
  },
  "/assets/Ellipsis.vR71lBDy.js": {
    "type": "application/javascript",
    "etag": "\"540-2oTdUM564/2COwtSc4s0oOEizOc\"",
    "mtime": "2024-02-22T16:50:56.616Z",
    "size": 1344,
    "path": "../public/assets/Ellipsis.vR71lBDy.js"
  },
  "/assets/IconCSS.RpidyUv6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"102-VxXZukov3jTc1lARY/9VnVIdixg\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 258,
    "path": "../public/assets/IconCSS.RpidyUv6.css"
  },
  "/assets/IconCSS.bUKtU-w9.js": {
    "type": "application/javascript",
    "etag": "\"40f-DumOvgZmSwT9rXPkUieVBWt1dxM\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 1039,
    "path": "../public/assets/IconCSS.bUKtU-w9.js"
  },
  "/assets/IconCodeSandBox.TcFyirBQ.js": {
    "type": "application/javascript",
    "etag": "\"1ae-ZCvZrDgHX8rrB/59WFWi3XkT+Fg\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 430,
    "path": "../public/assets/IconCodeSandBox.TcFyirBQ.js"
  },
  "/assets/IconDocus.I7-obt_Y.js": {
    "type": "application/javascript",
    "etag": "\"31a-PvJ8Cu79B4ArYfhDWdaT9ZFdklA\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 794,
    "path": "../public/assets/IconDocus.I7-obt_Y.js"
  },
  "/assets/IconNuxt.SooetxpK.js": {
    "type": "application/javascript",
    "etag": "\"497-nydnLxHyJtXNMjtlGKUNiZ1SKrs\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 1175,
    "path": "../public/assets/IconNuxt.SooetxpK.js"
  },
  "/assets/IconNuxtContent.SooetxpK.js": {
    "type": "application/javascript",
    "etag": "\"497-nydnLxHyJtXNMjtlGKUNiZ1SKrs\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 1175,
    "path": "../public/assets/IconNuxtContent.SooetxpK.js"
  },
  "/assets/IconNuxtLabs.SooetxpK.js": {
    "type": "application/javascript",
    "etag": "\"497-nydnLxHyJtXNMjtlGKUNiZ1SKrs\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 1175,
    "path": "../public/assets/IconNuxtLabs.SooetxpK.js"
  },
  "/assets/IconNuxtStudio.9HP8YwTY.js": {
    "type": "application/javascript",
    "etag": "\"4f4-dqB4rOoAq/ZH9TYfW3rl0aUtEvw\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 1268,
    "path": "../public/assets/IconNuxtStudio.9HP8YwTY.js"
  },
  "/assets/IconNuxtStudio.B6BC4uyh.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"66-AA2ErH34Xmax3511FiYX4lQ+vjs\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 102,
    "path": "../public/assets/IconNuxtStudio.B6BC4uyh.css"
  },
  "/assets/IconStackBlitz.bO7XsfoR.js": {
    "type": "application/javascript",
    "etag": "\"165-WpxHCAfWniu9fy3cMQf/FKHgNVU\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 357,
    "path": "../public/assets/IconStackBlitz.bO7XsfoR.js"
  },
  "/assets/IconVueTelescope.GaihE-5g.js": {
    "type": "application/javascript",
    "etag": "\"2cf-qCzhup0aGe7mkR20ybH0VL91lxU\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 719,
    "path": "../public/assets/IconVueTelescope.GaihE-5g.js"
  },
  "/assets/List.BYhym8Zp.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d8-iurlxPCM2AgLJD8300ZruJEdfgg\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 728,
    "path": "../public/assets/List.BYhym8Zp.css"
  },
  "/assets/List.habokF4s.js": {
    "type": "application/javascript",
    "etag": "\"39b-kt+oWKreTvFZXpDMHU8lTo3dwdI\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 923,
    "path": "../public/assets/List.habokF4s.js"
  },
  "/assets/MDCSlot.3upSzQFF.js": {
    "type": "application/javascript",
    "etag": "\"303-2TmpceN0fdsQ+rIvblioPcJxDWs\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 771,
    "path": "../public/assets/MDCSlot.3upSzQFF.js"
  },
  "/assets/Markdown.HNhgnc5B.js": {
    "type": "application/javascript",
    "etag": "\"184-1sdxtnx+2tGFb4sGWEtvPn5HUb8\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 388,
    "path": "../public/assets/Markdown.HNhgnc5B.js"
  },
  "/assets/NuxtImg.RcFPWmfI.js": {
    "type": "application/javascript",
    "etag": "\"60-/dG2USNKEVyq9iA3tfpuFj7lwSs\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 96,
    "path": "../public/assets/NuxtImg.RcFPWmfI.js"
  },
  "/assets/NuxtImg.vue.j6uI9j0g.js": {
    "type": "application/javascript",
    "etag": "\"26b-ntGQM0b1l4ECp/cEyfs6CCGEiSg\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 619,
    "path": "../public/assets/NuxtImg.vue.j6uI9j0g.js"
  },
  "/assets/PreviewLayout.aK6rSoS3.js": {
    "type": "application/javascript",
    "etag": "\"100-bARuY5Ct55kfUYpt1buJEorhT+Q\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 256,
    "path": "../public/assets/PreviewLayout.aK6rSoS3.js"
  },
  "/assets/PreviewLayout.pGTUjSRM.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4e-6E2gPJaG4gG9DuSxb51gBBQNOWI\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 78,
    "path": "../public/assets/PreviewLayout.pGTUjSRM.css"
  },
  "/assets/Props.2FVGcfzU.js": {
    "type": "application/javascript",
    "etag": "\"c24-eAaC+Esw/jUkPxYos5yJfa/zeOs\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 3108,
    "path": "../public/assets/Props.2FVGcfzU.js"
  },
  "/assets/ProseA.6TNOwJWB.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"47f-Bd1cJI2QymcfBXsls3kQ5ZE7caw\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 1151,
    "path": "../public/assets/ProseA.6TNOwJWB.css"
  },
  "/assets/ProseA.vdGyj-u_.js": {
    "type": "application/javascript",
    "etag": "\"19f-i6R1z5+UwjaUV60ERmHNmoQ6tSM\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 415,
    "path": "../public/assets/ProseA.vdGyj-u_.js"
  },
  "/assets/ProseBlockquote.b0G1nNmt.js": {
    "type": "application/javascript",
    "etag": "\"ea-WXQjvV0R49HdPN8Jx2huAeZ2ZFo\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 234,
    "path": "../public/assets/ProseBlockquote.b0G1nNmt.js"
  },
  "/assets/ProseBlockquote.gG-pLhzX.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"221-f5jPEONAHBPcQuXiCGnWhNfhL5Q\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 545,
    "path": "../public/assets/ProseBlockquote.gG-pLhzX.css"
  },
  "/assets/ProseCode.ao8Ihyi5.js": {
    "type": "application/javascript",
    "etag": "\"6eb-ewgdYQscpvtZ0imLvzIeG9CYIHg\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 1771,
    "path": "../public/assets/ProseCode.ao8Ihyi5.js"
  },
  "/assets/ProseCode.dFV6lVai.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c40-mWMkemR7NJlr50rRrIVl5hy6rgE\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 3136,
    "path": "../public/assets/ProseCode.dFV6lVai.css"
  },
  "/assets/ProseCodeInline.YDly_E1W.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d1-1/Z1/IkqkivW4P3OS3+WKgWaimM\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 721,
    "path": "../public/assets/ProseCodeInline.YDly_E1W.css"
  },
  "/assets/ProseCodeInline.wGPN3_ql.js": {
    "type": "application/javascript",
    "etag": "\"e9-vgQUJRqwDdP0meVjX9bNGzQ0Znc\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 233,
    "path": "../public/assets/ProseCodeInline.wGPN3_ql.js"
  },
  "/assets/ProseEm.2vd7pp9Q.js": {
    "type": "application/javascript",
    "etag": "\"e7-8Qnrp87RIzq7MKztkOQp51wSmyE\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 231,
    "path": "../public/assets/ProseEm.2vd7pp9Q.js"
  },
  "/assets/ProseEm.oUwYVmzE.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4f-/WrDUH4MFh0hLZFKn/kRGt7Vtc0\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 79,
    "path": "../public/assets/ProseEm.oUwYVmzE.css"
  },
  "/assets/ProseH1.S22w2PHK.js": {
    "type": "application/javascript",
    "etag": "\"2e3-tWblPGnHKLmsBZO1r7p6owlJxQ4\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 739,
    "path": "../public/assets/ProseH1.S22w2PHK.js"
  },
  "/assets/ProseH1.ljbcf8Yn.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1de-vu6gnRlIdut3DU0SqNyHMrmUwYw\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 478,
    "path": "../public/assets/ProseH1.ljbcf8Yn.css"
  },
  "/assets/ProseH2.EQntC7po.js": {
    "type": "application/javascript",
    "etag": "\"2e3-BmSMxBa28tCDfP1CWad3pYTbDcA\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 739,
    "path": "../public/assets/ProseH2.EQntC7po.js"
  },
  "/assets/ProseH2.N95fOLMR.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1de-ElsOcmrQZVguAC6jKV+/2pHVtUM\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 478,
    "path": "../public/assets/ProseH2.N95fOLMR.css"
  },
  "/assets/ProseH3.73SHlrRA.js": {
    "type": "application/javascript",
    "etag": "\"2e3-ATSNXlSKWK8lR0YhdssD2VRDUvQ\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 739,
    "path": "../public/assets/ProseH3.73SHlrRA.js"
  },
  "/assets/ProseH3.FDTft2g-.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1de-6zpggFoH+7HgaBWt68BQSjErioQ\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 478,
    "path": "../public/assets/ProseH3.FDTft2g-.css"
  },
  "/assets/ProseH4.MlCHSzD-.js": {
    "type": "application/javascript",
    "etag": "\"2e3-2jv6mevY3Z/PZk5WX+V5Jul2udM\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 739,
    "path": "../public/assets/ProseH4.MlCHSzD-.js"
  },
  "/assets/ProseH4.lcGgnoZb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1de-2YWYy7IuQm2F5twjlJ2RzxwOLvI\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 478,
    "path": "../public/assets/ProseH4.lcGgnoZb.css"
  },
  "/assets/ProseH5.6a1XpJ9u.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b0-b9y8zeK5cD39J66TYPtZhKhVD5c\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 432,
    "path": "../public/assets/ProseH5.6a1XpJ9u.css"
  },
  "/assets/ProseH5.v3GrQJU7.js": {
    "type": "application/javascript",
    "etag": "\"2e3-HFxA1az+Fw3Z1vAvZhskIIyzBJc\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 739,
    "path": "../public/assets/ProseH5.v3GrQJU7.js"
  },
  "/assets/ProseH6.P7CYFpO-.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b0-hmpgY0vqdZTxgvOWwnEyKm4wK4s\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 432,
    "path": "../public/assets/ProseH6.P7CYFpO-.css"
  },
  "/assets/ProseH6.TAfPeYx6.js": {
    "type": "application/javascript",
    "etag": "\"2e3-Ewpvfeb1jRc01YXwdyg/bjRTtHw\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 739,
    "path": "../public/assets/ProseH6.TAfPeYx6.js"
  },
  "/assets/ProseHr.3a8iHszh.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"80-INEPhPPD9t2+R6o6gFRIQ5CI4Ik\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 128,
    "path": "../public/assets/ProseHr.3a8iHszh.css"
  },
  "/assets/ProseHr.JUuQ8OBj.js": {
    "type": "application/javascript",
    "etag": "\"b6-fTcaW3z61+YlGcTZMjmIw66rLts\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 182,
    "path": "../public/assets/ProseHr.JUuQ8OBj.js"
  },
  "/assets/ProseImg.8ZQGq4IG.js": {
    "type": "application/javascript",
    "etag": "\"261-MxmLn+ht6G/I1Kdm3ATXK2pjvIY\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 609,
    "path": "../public/assets/ProseImg.8ZQGq4IG.js"
  },
  "/assets/ProseImg.ElmEel-l.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"35-/P+VAtl+aDWpPVCPQAbTsFW52HM\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 53,
    "path": "../public/assets/ProseImg.ElmEel-l.css"
  },
  "/assets/ProseLi.8QxQBEWP.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"91-eiqKu/ywnE10Nr/KZRFEXPPAFjo\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 145,
    "path": "../public/assets/ProseLi.8QxQBEWP.css"
  },
  "/assets/ProseLi.cRhgUmJp.js": {
    "type": "application/javascript",
    "etag": "\"e2-MByTaun/NhzBlY7Xv83up2xMTzM\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 226,
    "path": "../public/assets/ProseLi.cRhgUmJp.js"
  },
  "/assets/ProseOl.HJTYoaPN.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"142-1u4BYpDgf3hVmCBTLW2gtv6NsmM\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 322,
    "path": "../public/assets/ProseOl.HJTYoaPN.css"
  },
  "/assets/ProseOl.XxVbfn1R.js": {
    "type": "application/javascript",
    "etag": "\"e7-xe69OGiGjphPQyLeZ8rjH9Ngo3Y\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 231,
    "path": "../public/assets/ProseOl.XxVbfn1R.js"
  },
  "/assets/ProseP.ONRddydZ.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"f0-wFnUHeg48g/JyGSDwWH/o0sfb10\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 240,
    "path": "../public/assets/ProseP.ONRddydZ.css"
  },
  "/assets/ProseP.UyjfrEsD.js": {
    "type": "application/javascript",
    "etag": "\"e1-5SFbTAYzVrfm2BHVmjzEa4L4wXc\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 225,
    "path": "../public/assets/ProseP.UyjfrEsD.js"
  },
  "/assets/ProsePre.DSne7ZBn.js": {
    "type": "application/javascript",
    "etag": "\"2dd-36PmR0qmIynX3nko/6hJrFS0K2U\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 733,
    "path": "../public/assets/ProsePre.DSne7ZBn.js"
  },
  "/assets/ProsePre.nIRUQbb-.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2e-GbvrqT5j9gSWlpa8e36U/Kv6Zx0\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 46,
    "path": "../public/assets/ProsePre.nIRUQbb-.css"
  },
  "/assets/ProseScript.InofiXiw.js": {
    "type": "application/javascript",
    "etag": "\"1eb-ODikbqF3FZ9l/arJVeK2Z6b9qiU\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 491,
    "path": "../public/assets/ProseScript.InofiXiw.js"
  },
  "/assets/ProseStrong.FjRbbfXS.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6c-MD65Ps8jSjh1cMdTmfC4f+7oAlU\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 108,
    "path": "../public/assets/ProseStrong.FjRbbfXS.css"
  },
  "/assets/ProseStrong.T2hmbMkH.js": {
    "type": "application/javascript",
    "etag": "\"eb-1MYb1hMRXWEki8G6fDFeOtWf+tc\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 235,
    "path": "../public/assets/ProseStrong.T2hmbMkH.js"
  },
  "/assets/ProseTable.OfR0bxWJ.js": {
    "type": "application/javascript",
    "etag": "\"118-8SiGUOjKhMeZ1NihaU2yEpZ6CP8\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 280,
    "path": "../public/assets/ProseTable.OfR0bxWJ.js"
  },
  "/assets/ProseTable.VU7UG36U.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"164-lnhXgUriM9WndiBRXv31OET1Xko\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 356,
    "path": "../public/assets/ProseTable.VU7UG36U.css"
  },
  "/assets/ProseTbody.yArOpawQ.js": {
    "type": "application/javascript",
    "etag": "\"bd-CnazGwWFlGNlj4Ra9qRNajOvHyc\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 189,
    "path": "../public/assets/ProseTbody.yArOpawQ.js"
  },
  "/assets/ProseTd.BrA9z5jS.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e0-XXoqcFCrHkCkGoKhK4j5l4oGakA\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 224,
    "path": "../public/assets/ProseTd.BrA9z5jS.css"
  },
  "/assets/ProseTd.wSnsKcTh.js": {
    "type": "application/javascript",
    "etag": "\"e7-i4A9/MdX8UfKhxEOOGx0SuysoLo\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 231,
    "path": "../public/assets/ProseTd.wSnsKcTh.js"
  },
  "/assets/ProseTh.GRBqgbF_.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"133-ME+9Ja9P6EJtI8kWP/PvK9eCkQY\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 307,
    "path": "../public/assets/ProseTh.GRBqgbF_.css"
  },
  "/assets/ProseTh.W72scTmA.js": {
    "type": "application/javascript",
    "etag": "\"e7-DH7Gw9hFBGB3D6XDl4RTdlMfEqQ\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 231,
    "path": "../public/assets/ProseTh.W72scTmA.js"
  },
  "/assets/ProseThead.ELpnX5VU.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"172-PHOMt/h1NbLuYickVBw+mixlAp4\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 370,
    "path": "../public/assets/ProseThead.ELpnX5VU.css"
  },
  "/assets/ProseThead.JbMauIgB.js": {
    "type": "application/javascript",
    "etag": "\"ea-um363B/oOTLPNxmOV6ZXP/OIxNo\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 234,
    "path": "../public/assets/ProseThead.JbMauIgB.js"
  },
  "/assets/ProseTr.A3HIa39w.js": {
    "type": "application/javascript",
    "etag": "\"e7-dMfspZC8DSErNMg3PMwO1fkaBtA\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 231,
    "path": "../public/assets/ProseTr.A3HIa39w.js"
  },
  "/assets/ProseTr.CScCojsh.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a4-8+Ah6srlM/sVnhpyI2/xpaSKd9I\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 164,
    "path": "../public/assets/ProseTr.CScCojsh.css"
  },
  "/assets/ProseUl.2aaDJNzr.js": {
    "type": "application/javascript",
    "etag": "\"e7-9VKfEernOtsX1smHoO1Rq0X6g2I\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 231,
    "path": "../public/assets/ProseUl.2aaDJNzr.js"
  },
  "/assets/ProseUl.9YRL4uyU.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"142-qYXC3xqSFri7diIu/qKq34JetiM\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 322,
    "path": "../public/assets/ProseUl.9YRL4uyU.css"
  },
  "/assets/Sandbox.6ZBjvhGM.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b3-mHxEbUrTDVS69EfFsv//OsC6XxA\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 435,
    "path": "../public/assets/Sandbox.6ZBjvhGM.css"
  },
  "/assets/Sandbox.voVLssND.js": {
    "type": "application/javascript",
    "etag": "\"5a0-xHB0epYo2MLH6W3bU1BXb2AGRLs\"",
    "mtime": "2024-02-22T16:50:56.620Z",
    "size": 1440,
    "path": "../public/assets/Sandbox.voVLssND.js"
  },
  "/assets/SourceLink.26L5cTp_.js": {
    "type": "application/javascript",
    "etag": "\"ed-YNreLolAn0QKZVoz4Re6zUoXu2g\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 237,
    "path": "../public/assets/SourceLink.26L5cTp_.js"
  },
  "/assets/TabsHeader.3H_brqOA.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6a6-LCAge+xW5+p5e4FXAJ85Zxp0wtc\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 1702,
    "path": "../public/assets/TabsHeader.3H_brqOA.css"
  },
  "/assets/TabsHeader.Hxggh6A-.js": {
    "type": "application/javascript",
    "etag": "\"48f-lamx8FPQeQi6FxDQG+j0OtR3zBw\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 1167,
    "path": "../public/assets/TabsHeader.Hxggh6A-.js"
  },
  "/assets/Terminal.cezTI5Q8.js": {
    "type": "application/javascript",
    "etag": "\"4db-LIivLw1S6VBdXivAH6M6wn155X8\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 1243,
    "path": "../public/assets/Terminal.cezTI5Q8.js"
  },
  "/assets/Terminal.nWKrTxWF.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ab4-JZghaj6tvQjkvgVb1UihmL/tRqQ\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 2740,
    "path": "../public/assets/Terminal.nWKrTxWF.css"
  },
  "/assets/TokensPlayground.l9iZXhzF.js": {
    "type": "application/javascript",
    "etag": "\"ff-ZDIC3NT8BKgRtZRZ0UOnOdsp6Rg\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 255,
    "path": "../public/assets/TokensPlayground.l9iZXhzF.js"
  },
  "/assets/VideoPlayer.OI-Hl-S3.js": {
    "type": "application/javascript",
    "etag": "\"755-Owm+NAsyXN8GuVSqqMx5KaWz1fw\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 1877,
    "path": "../public/assets/VideoPlayer.OI-Hl-S3.js"
  },
  "/assets/VideoPlayer._ESJujg8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5d8-IrkmvEwgcTRtoeLS0SMvnBUVGkg\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 1496,
    "path": "../public/assets/VideoPlayer._ESJujg8.css"
  },
  "/assets/VoltaBoard.-b5DuJuK.js": {
    "type": "application/javascript",
    "etag": "\"12c-rxlDdt5nIGAipOR5tft6cJA4SQs\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 300,
    "path": "../public/assets/VoltaBoard.-b5DuJuK.js"
  },
  "/assets/VoltaBoard._Ti1fhn8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4ce-T4Y7eyTZZLXoes5nCIc24C8K79M\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 1230,
    "path": "../public/assets/VoltaBoard._Ti1fhn8.css"
  },
  "/assets/client-db.sffvDuby.js": {
    "type": "application/javascript",
    "etag": "\"5433-DbaxBfrH/QypP0bs+qYhT5Zh7RA\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 21555,
    "path": "../public/assets/client-db.sffvDuby.js"
  },
  "/assets/default.guU5QoqZ.js": {
    "type": "application/javascript",
    "etag": "\"26c-FEfUaosOsHLwDQWdHCwKF0vwBag\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 620,
    "path": "../public/assets/default.guU5QoqZ.js"
  },
  "/assets/document-driven.5jZihixh.js": {
    "type": "application/javascript",
    "etag": "\"8e6-AfP6p4myApjDTU11NPTWNrRS9rI\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 2278,
    "path": "../public/assets/document-driven.5jZihixh.js"
  },
  "/assets/entry.4tWInEIf.js": {
    "type": "application/javascript",
    "etag": "\"4cd9b-2hqK9gcKr6DUWYs24d1zIpsYiyk\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 314779,
    "path": "../public/assets/entry.4tWInEIf.js"
  },
  "/assets/entry.eXKLhb30.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"527b-MWDKrd6rcoXTC8X3Fdn0Iew2PxA\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 21115,
    "path": "../public/assets/entry.eXKLhb30.css"
  },
  "/assets/error-404.fqdCbWaZ.js": {
    "type": "application/javascript",
    "etag": "\"8a8-qivJ+SG0hlZNUfJhCQJNIRSxc8g\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 2216,
    "path": "../public/assets/error-404.fqdCbWaZ.js"
  },
  "/assets/error-404.qX6eTRWJ.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1078-soiUIaL/xJzD+rQ4Zy7XHufvdaY\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 4216,
    "path": "../public/assets/error-404.qX6eTRWJ.css"
  },
  "/assets/error-500.YzvJhd30.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"902-B2xICseQMVn+pdQNn0+jwyHYeuw\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 2306,
    "path": "../public/assets/error-500.YzvJhd30.css"
  },
  "/assets/error-500.i51ubHX2.js": {
    "type": "application/javascript",
    "etag": "\"751-V2L+GbgUffP7n4pQr9uTKtBl4lk\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 1873,
    "path": "../public/assets/error-500.i51ubHX2.js"
  },
  "/assets/index.5Jz4PfUi.js": {
    "type": "application/javascript",
    "etag": "\"9c4e-MsKcwzCEC6PHseXNDo0IXcLXPy8\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 40014,
    "path": "../public/assets/index.5Jz4PfUi.js"
  },
  "/assets/index.7vM8I35s.js": {
    "type": "application/javascript",
    "etag": "\"100d-IqxdyaXAgS8P+ZIp0bizIwlROXs\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 4109,
    "path": "../public/assets/index.7vM8I35s.js"
  },
  "/assets/node.V6KjywBy.js": {
    "type": "application/javascript",
    "etag": "\"45b-FEl3F7H0mhNmm4JJrL7ya1xLrTo\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 1115,
    "path": "../public/assets/node.V6KjywBy.js"
  },
  "/assets/page.7IBHA0iF.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"54-fxc3j0OW0UcGEyVDJPYE48ECyOw\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 84,
    "path": "../public/assets/page.7IBHA0iF.css"
  },
  "/assets/page.e1lHf9Kv.js": {
    "type": "application/javascript",
    "etag": "\"285-aMrujKbvHEWjINMIcIX3X60QW+8\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 645,
    "path": "../public/assets/page.e1lHf9Kv.js"
  },
  "/assets/slot.hRi4UrmJ.js": {
    "type": "application/javascript",
    "etag": "\"c5-SxESG+FPslYXzIKFc7CuPFPHQ9I\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 197,
    "path": "../public/assets/slot.hRi4UrmJ.js"
  },
  "/assets/useStudio.-DKJnNlP.js": {
    "type": "application/javascript",
    "etag": "\"2b29-zkxyUkikVYMrB839sFxarBubdUA\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 11049,
    "path": "../public/assets/useStudio.-DKJnNlP.js"
  },
  "/assets/useStudio.y78JM7U7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d9a-c6d5M+LeLzxOhF/IVx7IVQJ3qO0\"",
    "mtime": "2024-02-22T16:50:56.624Z",
    "size": 3482,
    "path": "../public/assets/useStudio.y78JM7U7.css"
  },
  "/opensearch.xml/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1e2-gDmkHXT7oheXasixu4in5lK70sg\"",
    "mtime": "2024-02-22T16:50:55.440Z",
    "size": 482,
    "path": "../public/opensearch.xml/index.html"
  },
  "/api/_content/cache.1708620613531.json": {
    "type": "application/json",
    "etag": "\"2b598-PJNZNlB+9Wra8okhenS7bT1UkbA\"",
    "mtime": "2024-02-22T16:50:56.220Z",
    "size": 177560,
    "path": "../public/api/_content/cache.1708620613531.json"
  },
  "/assets/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-Qg1jtNBPp5qnUZgP6wOXXsOd40Q\"",
    "mtime": "2024-02-22T16:50:56.588Z",
    "size": 71,
    "path": "../public/assets/builds/latest.json"
  },
  "/assets/builds/meta/0c306b1f-2202-4dc0-b290-8a91967ca596.json": {
    "type": "application/json",
    "etag": "\"c0-irWJEehQeFg1AtY1ShLUItsJc20\"",
    "mtime": "2024-02-22T16:50:56.584Z",
    "size": 192,
    "path": "../public/assets/builds/meta/0c306b1f-2202-4dc0-b290-8a91967ca596.json"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const _EXTNAME_RE = /.(\.[^./]+)$/;
const extname = function(p) {
  const match = _EXTNAME_RE.exec(normalizeWindowsPath(p));
  return match && match[1] || "";
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises$1.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/assets/builds/meta":{"maxAge":31536000},"/assets/builds":{"maxAge":1},"/assets":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
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
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

var version = "1.0.10";

const useProcessorPlugins = async (processor, plugins = {}) => {
  const toUse = Object.entries(plugins).filter((p) => p[1] !== false);
  for (const plugin of toUse) {
    const instance = plugin[1].instance || await import(
      /* @vite-ignore */
      plugin[0]
    ).then((m) => m.default || m);
    processor.use(instance, plugin[1].options);
  }
};

const unsafeLinkPrefix = [
  "javascript:",
  "data:text/html",
  "vbscript:",
  "data:text/javascript",
  "data:text/vbscript",
  "data:text/css",
  "data:text/plain",
  "data:text/xml"
];
const validateProp = (attribute, value) => {
  if (attribute.startsWith("on")) {
    return false;
  }
  if (attribute === "href" || attribute === "src") {
    return !unsafeLinkPrefix.some((prefix) => value.toLowerCase().startsWith(prefix));
  }
  return true;
};
const validateProps = (type, props) => {
  if (!props) {
    return {};
  }
  props = Object.fromEntries(
    Object.entries(props).filter(([name, value]) => {
      const isValid = validateProp(name, value);
      if (!isValid) {
        console.warn(`[@nuxtjs/mdc] removing unsafe attribute: ${name}="${value}"`);
      }
      return isValid;
    })
  );
  if (type === "pre") {
    if (typeof props.highlights === "string") {
      props.highlights = props.highlights.split(" ").map((i) => parseInt(i));
    }
  }
  return props;
};

function compileHast() {
  const slugs = new Slugger();
  function compileToJSON(node, parent) {
    if (node.type === "root") {
      return {
        type: "root",
        children: node.children.map((child) => compileToJSON(child, node)).filter(Boolean)
      };
    }
    if (node.type === "element") {
      if (node.tagName === "p" && node.children.every((child) => child.type === "text" && /^\s*$/.test(child.value))) {
        return null;
      }
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children?.flatMap((child) => {
          if (child.type === "element" && child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {},
                children: []
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName?.match(/^h\d$/)) {
        node.properties = node.properties || {};
        node.properties.id = String(node.properties?.id || slugs.slug(toString(node))).replace(/-+/g, "-").replace(/^-|-$/g, "").replace(/^(\d)/, "_$1");
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      return {
        type: "element",
        tag: node.tagName,
        props: validateProps(node.tagName, node.properties),
        children: node.children.map((child) => compileToJSON(child, node)).filter(Boolean)
      };
    }
    if (node.type === "text") {
      if (node.value !== "\n" || parent?.properties?.emptyLinePlaceholder) {
        return {
          type: "text",
          value: node.value
        };
      }
    }
    return null;
  }
  this.Compiler = (tree) => {
    const body = compileToJSON(tree);
    let excerpt = void 0;
    const excerptIndex = tree.children.findIndex((node) => node.type === "comment" && node.value?.trim() === "more");
    if (excerptIndex !== -1) {
      excerpt = compileToJSON({
        type: "root",
        children: tree.children.slice(0, excerptIndex)
      });
      if (excerpt.children.find((node) => node.type === "element" && node.tag === "pre")) {
        const lastChild = body.children[body.children.length - 1];
        if (lastChild.type === "element" && lastChild.tag === "style") {
          excerpt.children.push(lastChild);
        }
      }
    }
    return {
      body,
      excerpt
    };
  };
}

function emphasis(state, node) {
  const result = {
    type: "element",
    tagName: "em",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function parseThematicBlock(lang) {
  if (!lang?.trim()) {
    return {
      language: void 0,
      highlights: void 0,
      filename: void 0,
      meta: void 0
    };
  }
  const languageMatches = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokensMatches = lang.match(/{([^}]*)}/);
  const filenameMatches = lang.match(/\[((\\]|[^\]])*)\]/);
  const meta = lang.replace(languageMatches?.[0] ?? "", "").replace(highlightTokensMatches?.[0] ?? "", "").replace(filenameMatches?.[0] ?? "", "").trim();
  return {
    language: languageMatches?.[0] || void 0,
    highlights: parseHighlightedLines(highlightTokensMatches?.[1] || void 0),
    // https://github.com/nuxt/content/pull/2169
    filename: filenameMatches?.[1].replace(/\\]/g, "]") || void 0,
    meta
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}

const code = (state, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename, meta } = parseThematicBlock(lang);
  const value = node.value ? detab(node.value + "\n") : "";
  let result = {
    type: "element",
    tagName: "code",
    properties: { __ignoreMap: "" },
    children: [{ type: "text", value }]
  };
  if (meta) {
    result.data = {
      // @ts-ignore
      meta
    };
  }
  state.patch(node, result);
  result = state.applyData(node, result);
  const properties = {
    language,
    filename,
    highlights,
    meta,
    code: value
  };
  if (language) {
    properties.className = ["language-" + language];
  }
  result = { type: "element", tagName: "pre", properties, children: [result] };
  state.patch(node, result);
  return result;
};

function html(state, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (state.dangerous || state.options?.allowDangerousHtml) {
    const result = { type: "raw", value: node.value };
    state.patch(node, result);
    return state.applyData(node, result);
  }
  return void 0;
}

function link$1(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function list(state, node) {
  const properties = {};
  const results = state.all(node);
  let index = -1;
  if (typeof node.start === "number" && node.start !== 1) {
    properties.start = node.start;
  }
  while (++index < results.length) {
    const child = results[index];
    if (child.type === "element" && child.tagName === "li" && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes("task-list-item")) {
      properties.className = ["contains-task-list"];
      break;
    }
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    properties.className = ["contains-task-list"];
  }
  const result = {
    type: "element",
    tagName: node.ordered ? "ol" : "ul",
    properties,
    children: state.wrap(results, true)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];

function paragraph(state, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return state.all(node);
    }
  }
  const result = {
    type: "element",
    tagName: "p",
    properties: {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function image(state, node) {
  const properties = { ...node.attributes, src: normalizeUri(node.url) };
  if (node.alt !== null && node.alt !== void 0) {
    properties.alt = node.alt;
  }
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node, result);
  return state.applyData(node, result);
}

function strong(state, node) {
  const result = {
    type: "element",
    tagName: "strong",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function inlineCode(state, node) {
  const language = node.attributes?.language || node.attributes?.lang;
  const text = { type: "text", value: node.value.replace(/\r?\n|\r/g, " ") };
  state.patch(node, text);
  const result = {
    type: "element",
    tagName: "code",
    properties: node.attributes || {},
    children: [text]
  };
  const classes = (result.properties.class || "").split(" ");
  delete result.properties.class;
  if (language) {
    result.properties.language = language;
    delete result.properties.lang;
    classes.push("language-" + language);
  }
  result.properties.className = classes.join(" ");
  state.patch(node, result);
  return state.applyData(node, result);
}

function containerComponent(state, node) {
  const result = {
    type: "element",
    tagName: node.name,
    properties: {
      ...node.attributes,
      ...node.data?.hProperties
    },
    children: state.all(node)
  };
  state.patch(node, result);
  result.attributes = node.attributes;
  result.fmAttributes = node.fmAttributes;
  return result;
}

const handlers$1 = {
  emphasis,
  code,
  link: link$1,
  paragraph,
  html,
  list,
  image,
  strong,
  inlineCode,
  containerComponent
};

const defaults = {
  remark: {
    plugins: {
      "remark-mdc": {
        instance: remarkMDC
      },
      "remark-emoji": {
        instance: remarkEmoji
      },
      "remark-gfm": {
        instance: remarkGFM
      }
    }
  },
  rehype: {
    options: {
      // @ts-ignore
      handlers: handlers$1,
      allowDangerousHtml: true
    },
    plugins: {
      "rehype-external-links": {
        instance: rehypeExternalLinks
      },
      "rehype-sort-attribute-values": {
        instance: rehypeSortAttributeValues
      },
      "rehype-sort-attributes": {
        instance: rehypeSortAttributes
      },
      "rehype-raw": {
        instance: rehypeRaw,
        options: {
          passThrough: ["element"]
        }
      }
    }
  },
  highlight: false,
  toc: {
    searchDepth: 2,
    depth: 2
  }
};

function flattenNodeText(node) {
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || isTag(vnode, Symbol.for("v-txt"));
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children?.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value || "";
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).filter(Boolean).join("");
  }
  return "";
}

let moduleOptions;
const parseMarkdown = async (md, opts = {}) => {
  if (!moduleOptions) {
    moduleOptions = await import(
      '../build/mdc-imports.mjs'
      /* @vite-ignore */
    ).catch(() => ({}));
  }
  const options = defu(opts, {
    remark: { plugins: moduleOptions?.remarkPlugins },
    rehype: { plugins: moduleOptions?.rehypePlugins },
    highlight: moduleOptions?.highlight
  }, defaults);
  if (options.rehype?.plugins?.highlight) {
    options.rehype.plugins.highlight.options = options.highlight || {};
  }
  const { content, data: frontmatter } = await parseFrontMatter(md);
  const processor = unified();
  processor.use(remarkParse);
  await useProcessorPlugins(processor, options.remark?.plugins);
  processor.use(remark2rehype, options.rehype?.options);
  await useProcessorPlugins(processor, options.rehype?.plugins);
  processor.use(compileHast);
  const processedFile = await processor.process({ value: content, data: frontmatter });
  const result = processedFile.result;
  const data = Object.assign(
    contentHeading(result.body),
    frontmatter,
    processedFile?.data || {}
  );
  let toc;
  if (data.toc !== false) {
    const tocOption = defu(data.toc || {}, options.toc);
    toc = generateToc(result.body, tocOption);
  }
  return {
    data,
    body: result.body,
    excerpt: result.excerpt,
    toc
  };
};
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type !== "text" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const components = {
  "AppDocSearch": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppDocSearch.vue",
    "pascalName": "AppDocSearch",
    "kebabName": "app-doc-search",
    "chunkName": "components/app-doc-search",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppDocSearch.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppDocSearch.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppFooter": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppFooter.vue",
    "pascalName": "AppFooter",
    "kebabName": "app-footer",
    "chunkName": "components/app-footer",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppFooter.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppFooter.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeader": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppHeader.vue",
    "pascalName": "AppHeader",
    "kebabName": "app-header",
    "chunkName": "components/app-header",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeader.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppHeader.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeaderDialog": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue",
    "pascalName": "AppHeaderDialog",
    "kebabName": "app-header-dialog",
    "chunkName": "components/app-header-dialog",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeaderLogo": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue",
    "pascalName": "AppHeaderLogo",
    "kebabName": "app-header-logo",
    "chunkName": "components/app-header-logo",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeaderNavigation": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue",
    "pascalName": "AppHeaderNavigation",
    "kebabName": "app-header-navigation",
    "chunkName": "components/app-header-navigation",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppLayout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppLayout.vue",
    "pascalName": "AppLayout",
    "kebabName": "app-layout",
    "chunkName": "components/app-layout",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppLayout.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppLayout.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "AppLoadingBar": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
    "pascalName": "AppLoadingBar",
    "kebabName": "app-loading-bar",
    "chunkName": "components/app-loading-bar",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "throttle",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
              "range": [
                45,
                95
              ]
            }
          ],
          "schema": "number",
          "default": "200"
        },
        {
          "name": "duration",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
              "range": [
                99,
                150
              ]
            }
          ],
          "schema": "number",
          "default": "2000"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "throttle",
          "type": "number",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
              "range": [
                45,
                95
              ]
            }
          ],
          "schema": "number"
        },
        {
          "name": "duration",
          "type": "number",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
              "range": [
                99,
                150
              ]
            }
          ],
          "schema": "number"
        }
      ]
    }
  },
  "AppSearch": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
    "pascalName": "AppSearch",
    "kebabName": "app-search",
    "chunkName": "components/app-search",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "fuse",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
              "range": [
                236,
                636
              ]
            }
          ],
          "schema": "any",
          "default": "{\n    fuseOptions: {\n        keys: [\n            \"title\",\n            \"description\",\n            \"keywords\",\n            \"body\"\n        ],\n        ignoreLocation: true,\n        threshold: 0,\n        includeMatches: true,\n        includeScore: true,\n    },\n    matchAllWhenSearchEmpty: true\n}"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "fuse",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
              "range": [
                236,
                636
              ]
            }
          ],
          "schema": "any"
        }
      ]
    }
  },
  "AppSocialIcons": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue",
    "pascalName": "AppSocialIcons",
    "kebabName": "app-social-icons",
    "chunkName": "components/app-social-icons",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocumentDrivenNotFound": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue",
    "pascalName": "DocumentDrivenNotFound",
    "kebabName": "document-driven-not-found",
    "chunkName": "components/document-driven-not-found",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Ellipsis": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
    "pascalName": "Ellipsis",
    "kebabName": "ellipsis",
    "chunkName": "components/ellipsis",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "width",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                78,
                129
              ]
            }
          ],
          "schema": "string",
          "default": "\"10rem\""
        },
        {
          "name": "height",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                133,
                185
              ]
            }
          ],
          "schema": "string",
          "default": "\"10rem\""
        },
        {
          "name": "zIndex",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                189,
                238
              ]
            }
          ],
          "schema": "string",
          "default": "\"10\""
        },
        {
          "name": "top",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                242,
                287
              ]
            }
          ],
          "schema": "string",
          "default": "\"0\""
        },
        {
          "name": "left",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                291,
                340
              ]
            }
          ],
          "schema": "string",
          "default": "\"auto\""
        },
        {
          "name": "right",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                344,
                394
              ]
            }
          ],
          "schema": "string",
          "default": "\"auto\""
        },
        {
          "name": "blur",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                398,
                447
              ]
            }
          ],
          "schema": "string",
          "default": "\"50px\""
        },
        {
          "name": "colors",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[]",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                451,
                604
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": [
              "string"
            ]
          },
          "default": "[\"rgba(0, 71, 225, 0.22)\", \"rgba(26, 214, 255, 0.22)\", \"rgba(0, 220, 130, 0.22)\"]"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "width",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                78,
                129
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "height",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                133,
                185
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "zIndex",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                189,
                238
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "top",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                242,
                287
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "left",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                291,
                340
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "right",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                344,
                394
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "blur",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                398,
                447
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "colors",
          "type": "string[]",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                451,
                604
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": [
              "string"
            ]
          }
        }
      ]
    }
  },
  "Logo": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/Logo.vue",
    "pascalName": "Logo",
    "kebabName": "logo",
    "chunkName": "components/logo",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/Logo.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Logo.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ThemeSelect": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue",
    "pascalName": "ThemeSelect",
    "kebabName": "theme-select",
    "chunkName": "components/theme-select",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsAside": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue",
    "pascalName": "DocsAside",
    "kebabName": "docs-aside",
    "chunkName": "components/docs-aside",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsAsideTree": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
    "pascalName": "DocsAsideTree",
    "kebabName": "docs-aside-tree",
    "chunkName": "components/docs-aside-tree",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "links",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                92,
                160
              ]
            }
          ],
          "schema": "any",
          "default": "[]"
        },
        {
          "name": "level",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                164,
                209
              ]
            }
          ],
          "schema": "number",
          "default": "0"
        },
        {
          "name": "max",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                213,
                259
              ]
            }
          ],
          "schema": "number",
          "default": "null"
        },
        {
          "name": "parent",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                263,
                329
              ]
            }
          ],
          "schema": "any",
          "default": "null"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "links",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                92,
                160
              ]
            }
          ],
          "schema": "any"
        },
        {
          "name": "level",
          "type": "number",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                164,
                209
              ]
            }
          ],
          "schema": "number"
        },
        {
          "name": "max",
          "type": "number",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                213,
                259
              ]
            }
          ],
          "schema": "number"
        },
        {
          "name": "parent",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                263,
                329
              ]
            }
          ],
          "schema": "any"
        }
      ]
    }
  },
  "DocsPageBottom": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue",
    "pascalName": "DocsPageBottom",
    "kebabName": "docs-page-bottom",
    "chunkName": "components/docs-page-bottom",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsPageLayout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageLayout.vue",
    "pascalName": "DocsPageLayout",
    "kebabName": "docs-page-layout",
    "chunkName": "components/docs-page-layout",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageLayout.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsPageLayout.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "DocsPrevNext": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue",
    "pascalName": "DocsPrevNext",
    "kebabName": "docs-prev-next",
    "chunkName": "components/docs-prev-next",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsToc": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue",
    "pascalName": "DocsToc",
    "kebabName": "docs-toc",
    "chunkName": "components/docs-toc",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [
        {
          "name": "move",
          "type": "any[]",
          "signature": "(event: \"move\", ...args: any[]): void",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                4472,
                4507
              ]
            }
          ],
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "onMove",
          "type": "(...args: any[]) => any",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "event",
            "type": "(...args: any[]): any",
            "schema": [
              "any"
            ]
          }
        }
      ]
    }
  },
  "DocsTocLinks": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
    "pascalName": "DocsTocLinks",
    "kebabName": "docs-toc-links",
    "chunkName": "components/docs-toc-links",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "links",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "TocLink[]",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
              "range": [
                142,
                216
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "TocLink[]",
            "schema": [
              {
                "kind": "object",
                "type": "TocLink",
                "schema": {
                  "id": {
                    "name": "id",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "declarations": [
                      {
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          991,
                          1002
                        ]
                      }
                    ],
                    "schema": "string"
                  },
                  "text": {
                    "name": "text",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "declarations": [
                      {
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          1007,
                          1020
                        ]
                      }
                    ],
                    "schema": "string"
                  },
                  "depth": {
                    "name": "depth",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "number",
                    "declarations": [
                      {
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          1025,
                          1039
                        ]
                      }
                    ],
                    "schema": "number"
                  },
                  "children": {
                    "name": "children",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "TocLink[]",
                    "declarations": [
                      {
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          1044,
                          1065
                        ]
                      }
                    ],
                    "schema": "TocLink[]"
                  }
                }
              }
            ]
          },
          "default": "[]"
        }
      ],
      "slots": [],
      "events": [
        {
          "name": "move",
          "type": "any[]",
          "signature": "(event: \"move\", ...args: any[]): void",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                4472,
                4507
              ]
            }
          ],
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "links",
          "type": "TocLink[]",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
              "range": [
                142,
                216
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "TocLink[]",
            "schema": [
              {
                "kind": "object",
                "type": "TocLink",
                "schema": {
                  "id": {
                    "name": "id",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "declarations": [
                      {
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          991,
                          1002
                        ]
                      }
                    ],
                    "schema": "string"
                  },
                  "text": {
                    "name": "text",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "declarations": [
                      {
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          1007,
                          1020
                        ]
                      }
                    ],
                    "schema": "string"
                  },
                  "depth": {
                    "name": "depth",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "number",
                    "declarations": [
                      {
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          1025,
                          1039
                        ]
                      }
                    ],
                    "schema": "number"
                  },
                  "children": {
                    "name": "children",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "TocLink[]",
                    "declarations": [
                      {
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          1044,
                          1065
                        ]
                      }
                    ],
                    "schema": "TocLink[]"
                  }
                }
              }
            ]
          }
        },
        {
          "name": "onMove",
          "type": "(...args: any[]) => any",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "event",
            "type": "(...args: any[]): any",
            "schema": [
              "any"
            ]
          }
        }
      ]
    }
  },
  "EditOnLink": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
    "pascalName": "EditOnLink",
    "kebabName": "edit-on-link",
    "chunkName": "components/edit-on-link",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "baseUrl",
          "global": false,
          "description": "GitHub base URL.",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                272,
                415
              ]
            }
          ],
          "schema": "string",
          "default": "useAppConfig()?.docus?.github?.baseUrl || \"https://github.com\""
        },
        {
          "name": "owner",
          "global": false,
          "description": "Repository owner.",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                462,
                577
              ]
            }
          ],
          "schema": "string",
          "default": "useAppConfig()?.docus?.github?.owner"
        },
        {
          "name": "repo",
          "global": false,
          "description": "Repository name.",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                623,
                736
              ]
            }
          ],
          "schema": "string",
          "default": "useAppConfig()?.docus?.github?.repo"
        },
        {
          "name": "branch",
          "global": false,
          "description": "The branch to use for the edit link.",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                802,
                919
              ]
            }
          ],
          "schema": "string",
          "default": "useAppConfig()?.docus?.github?.branch"
        },
        {
          "name": "dir",
          "global": false,
          "description": "A base directory to append to the source path.\n\nWon't be used if `page` is set.",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1041,
                1152
              ]
            }
          ],
          "schema": "string",
          "default": "useAppConfig()?.docus?.github?.dir"
        },
        {
          "name": "source",
          "global": false,
          "description": "Source file path.\n\nWon't be used if `page` is set.",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1245,
                1328
              ]
            }
          ],
          "schema": "string",
          "default": "undefined"
        },
        {
          "name": "page",
          "global": false,
          "description": "Use page from",
          "tags": [
            {
              "name": "nuxt",
              "text": "/content."
            }
          ],
          "required": false,
          "type": "any",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1386,
                1484
              ]
            }
          ],
          "schema": "any",
          "default": "undefined"
        },
        {
          "name": "contentDir",
          "global": false,
          "description": "Content directory (to be used with `page`)",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1556,
                1687
              ]
            }
          ],
          "schema": "string",
          "default": "useAppConfig()?.docus?.github?.dir || \"content\""
        },
        {
          "name": "edit",
          "global": false,
          "description": "Send to an edit page or not.",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1745,
                1859
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          },
          "default": "useAppConfig()?.docus?.github?.edit"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "baseUrl",
          "type": "string",
          "description": "GitHub base URL.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                272,
                415
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "owner",
          "type": "string",
          "description": "Repository owner.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                462,
                577
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "repo",
          "type": "string",
          "description": "Repository name.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                623,
                736
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "branch",
          "type": "string",
          "description": "The branch to use for the edit link.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                802,
                919
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "dir",
          "type": "string",
          "description": "A base directory to append to the source path.\n\nWon't be used if `page` is set.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1041,
                1152
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "source",
          "type": "string",
          "description": "Source file path.\n\nWon't be used if `page` is set.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1245,
                1328
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "page",
          "type": "any",
          "description": "Use page from",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1386,
                1484
              ]
            }
          ],
          "schema": "any"
        },
        {
          "name": "contentDir",
          "type": "string",
          "description": "Content directory (to be used with `page`)",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1556,
                1687
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "edit",
          "type": "boolean",
          "description": "Send to an edit page or not.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1745,
                1859
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "url",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                3996,
                3999
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "SourceLink": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue",
    "pascalName": "SourceLink",
    "kebabName": "source-link",
    "chunkName": "components/source-link",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "source",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue",
              "range": [
                41,
                92
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue",
              "range": [
                41,
                92
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "source",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue",
              "range": [
                41,
                92
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseA": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
    "pascalName": "ProseA",
    "kebabName": "prose-a",
    "chunkName": "components/prose-a",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "href",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
              "range": [
                41,
                86
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "target",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
              "range": [
                90,
                165
              ]
            }
          ],
          "schema": "string",
          "default": "undefined"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "href",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
              "range": [
                41,
                86
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "target",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
              "range": [
                90,
                165
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseBlockquote": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue",
    "pascalName": "ProseBlockquote",
    "kebabName": "prose-blockquote",
    "chunkName": "components/prose-blockquote",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseCode": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
    "pascalName": "ProseCode",
    "kebabName": "prose-code",
    "chunkName": "components/prose-code",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "code",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                141,
                186
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "language",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Lang",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                190,
                259
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "Lang",
            "schema": []
          },
          "default": "null"
        },
        {
          "name": "filename",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                263,
                314
              ]
            }
          ],
          "schema": "string",
          "default": "null"
        },
        {
          "name": "highlights",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number[]",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                318,
                392
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "number[]",
            "schema": [
              "number"
            ]
          },
          "default": "[]"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "code",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                141,
                186
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "language",
          "type": "Lang",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                190,
                259
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "Lang",
            "schema": []
          }
        },
        {
          "name": "filename",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                263,
                314
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "highlights",
          "type": "number[]",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                318,
                392
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "number[]",
            "schema": [
              "number"
            ]
          }
        }
      ]
    }
  },
  "ProseCodeInline": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue",
    "pascalName": "ProseCodeInline",
    "kebabName": "prose-code-inline",
    "chunkName": "components/prose-code-inline",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseEm": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseEm.vue",
    "pascalName": "ProseEm",
    "kebabName": "prose-em",
    "chunkName": "components/prose-em",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseEm.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseEm.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseH1": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
    "pascalName": "ProseH1",
    "kebabName": "prose-h1",
    "chunkName": "components/prose-h1",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
              "range": [
                111,
                121
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseH2": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
    "pascalName": "ProseH2",
    "kebabName": "prose-h2",
    "chunkName": "components/prose-h2",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
              "range": [
                111,
                121
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseH3": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
    "pascalName": "ProseH3",
    "kebabName": "prose-h3",
    "chunkName": "components/prose-h3",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
              "range": [
                111,
                121
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseH4": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
    "pascalName": "ProseH4",
    "kebabName": "prose-h4",
    "chunkName": "components/prose-h4",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
              "range": [
                111,
                121
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseH5": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
    "pascalName": "ProseH5",
    "kebabName": "prose-h5",
    "chunkName": "components/prose-h5",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
              "range": [
                111,
                121
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseH6": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
    "pascalName": "ProseH6",
    "kebabName": "prose-h6",
    "chunkName": "components/prose-h6",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
              "range": [
                111,
                121
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseHr": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseHr.vue",
    "pascalName": "ProseHr",
    "kebabName": "prose-hr",
    "chunkName": "components/prose-hr",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseHr.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseHr.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseImg": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
    "pascalName": "ProseImg",
    "kebabName": "prose-img",
    "chunkName": "components/prose-img",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "width",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | number",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                237,
                300
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | number",
            "schema": [
              "string",
              "number"
            ]
          },
          "default": "undefined"
        },
        {
          "name": "height",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | number",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                304,
                368
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | number",
            "schema": [
              "string",
              "number"
            ]
          },
          "default": "undefined"
        },
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                141,
                185
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "alt",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                189,
                233
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "width",
          "type": "string | number",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                237,
                300
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | number",
            "schema": [
              "string",
              "number"
            ]
          }
        },
        {
          "name": "height",
          "type": "string | number",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                304,
                368
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | number",
            "schema": [
              "string",
              "number"
            ]
          }
        },
        {
          "name": "src",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                141,
                185
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "alt",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                189,
                233
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseLi": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseLi.vue",
    "pascalName": "ProseLi",
    "kebabName": "prose-li",
    "chunkName": "components/prose-li",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseLi.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseLi.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseOl": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseOl.vue",
    "pascalName": "ProseOl",
    "kebabName": "prose-ol",
    "chunkName": "components/prose-ol",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseOl.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseOl.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseP": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseP.vue",
    "pascalName": "ProseP",
    "kebabName": "prose-p",
    "chunkName": "components/prose-p",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseP.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseP.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseStrong": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue",
    "pascalName": "ProseStrong",
    "kebabName": "prose-strong",
    "chunkName": "components/prose-strong",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTable": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTable.vue",
    "pascalName": "ProseTable",
    "kebabName": "prose-table",
    "chunkName": "components/prose-table",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTable.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseTable.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTbody": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue",
    "pascalName": "ProseTbody",
    "kebabName": "prose-tbody",
    "chunkName": "components/prose-tbody",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTd": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTd.vue",
    "pascalName": "ProseTd",
    "kebabName": "prose-td",
    "chunkName": "components/prose-td",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTd.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseTd.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTh": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTh.vue",
    "pascalName": "ProseTh",
    "kebabName": "prose-th",
    "chunkName": "components/prose-th",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTh.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseTh.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseThead": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseThead.vue",
    "pascalName": "ProseThead",
    "kebabName": "prose-thead",
    "chunkName": "components/prose-thead",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseThead.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseThead.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTr": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTr.vue",
    "pascalName": "ProseTr",
    "kebabName": "prose-tr",
    "chunkName": "components/prose-tr",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTr.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseTr.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseUl": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseUl.vue",
    "pascalName": "ProseUl",
    "kebabName": "prose-ul",
    "chunkName": "components/prose-ul",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseUl.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseUl.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "Alert": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
    "pascalName": "Alert",
    "kebabName": "alert",
    "chunkName": "components/alert",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [
            {
              "name": "values",
              "text": "info, success, warning, danger"
            }
          ],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
              "range": [
                111,
                280
              ]
            }
          ],
          "schema": "string",
          "default": "\"info\""
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ unwrap: string; }",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [],
                "schema": "string"
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: { unwrap: string; }): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: { unwrap: string; }): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: { unwrap: string; }) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: { unwrap: string; }): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "type",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
              "range": [
                111,
                280
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "Badge": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
    "pascalName": "Badge",
    "kebabName": "badge",
    "chunkName": "components/badge",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [
            {
              "name": "values",
              "text": "info, success, warning, danger"
            }
          ],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
              "range": [
                97,
                266
              ]
            }
          ],
          "schema": "string",
          "default": "\"info\""
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ unwrap: string; }",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [],
                "schema": "string"
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: { unwrap: string; }): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: { unwrap: string; }): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: { unwrap: string; }) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: { unwrap: string; }): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "type",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
              "range": [
                97,
                266
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ButtonLink": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
    "pascalName": "ButtonLink",
    "kebabName": "button-link",
    "chunkName": "components/button-link",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{ unwrap: string; }",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [],
                "schema": "string"
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: { unwrap: string; }): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: { unwrap: string; }): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: { unwrap: string; }) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: { unwrap: string; }): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "Callout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
    "pascalName": "Callout",
    "kebabName": "callout",
    "chunkName": "components/callout",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [
            {
              "name": "values",
              "text": "info, success, warning, danger"
            }
          ],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
              "range": [
                111,
                280
              ]
            }
          ],
          "schema": "string",
          "default": "\"info\""
        },
        {
          "name": "modelValue",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
              "range": [
                284,
                352
              ]
            }
          ],
          "schema": "any",
          "default": "ref(false)"
        }
      ],
      "slots": [
        {
          "name": "summary",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "content",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [
        {
          "name": "update:modelValue",
          "type": "any[]",
          "signature": "(event: \"update:modelValue\", ...args: any[]): void",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                4472,
                4507
              ]
            }
          ],
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { summary?(_: {}): any; content?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { summary?(_: {}): any; content?(_: {}): any; }",
            "schema": {
              "summary": {
                "name": "summary",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              },
              "content": {
                "name": "content",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "onUpdate:modelValue",
          "type": "(...args: any[]) => any",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "event",
            "type": "(...args: any[]): any",
            "schema": [
              "any"
            ]
          }
        },
        {
          "name": "type",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
              "range": [
                111,
                280
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "modelValue",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
              "range": [
                284,
                352
              ]
            }
          ],
          "schema": "any"
        }
      ]
    }
  },
  "CodeBlock": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
    "pascalName": "CodeBlock",
    "kebabName": "code-block",
    "chunkName": "components/code-block",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "label",
          "global": false,
          "description": "Label to display for the tab",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
              "range": [
                87,
                136
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
              "range": [
                87,
                136
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "active",
          "global": false,
          "description": "Select which tab should be active\nTODO: seems like it's not used",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
              "range": [
                228,
                279
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          },
          "default": "false"
        },
        {
          "name": "preview",
          "global": false,
          "description": "Preview block are bordered and have small padding.\nTODO: seems like it's not used",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
              "range": [
                387,
                439
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "label",
          "type": "string",
          "description": "Label to display for the tab",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
              "range": [
                87,
                136
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "active",
          "type": "boolean",
          "description": "Select which tab should be active\nTODO: seems like it's not used",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
              "range": [
                228,
                279
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "preview",
          "type": "boolean",
          "description": "Preview block are bordered and have small padding.\nTODO: seems like it's not used",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
              "range": [
                387,
                439
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        }
      ]
    }
  },
  "CodeGroup": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue",
    "pascalName": "CodeGroup",
    "kebabName": "code-group",
    "chunkName": "components/code-group",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue",
    "meta": {
      "type": null,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Container": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Container.vue",
    "pascalName": "Container",
    "kebabName": "container",
    "chunkName": "components/container",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Container.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Container.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "CopyButton": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
    "pascalName": "CopyButton",
    "kebabName": "copy-button",
    "chunkName": "components/copy-button",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "content",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
              "range": [
                100,
                148
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "content",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
              "range": [
                100,
                148
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "List": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/List.vue",
    "pascalName": "List",
    "kebabName": "list",
    "chunkName": "components/list",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/List.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/List.vue",
    "meta": {
      "type": null,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "NuxtImg": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue",
    "pascalName": "NuxtImg",
    "kebabName": "nuxt-img",
    "chunkName": "components/nuxt-img",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue",
    "meta": {
      "type": null,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Props": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Props.vue",
    "pascalName": "Props",
    "kebabName": "props",
    "chunkName": "components/props",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Props.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Props.vue",
    "meta": {
      "type": null,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Sandbox": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
    "pascalName": "Sandbox",
    "kebabName": "sandbox",
    "chunkName": "components/sandbox",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                55,
                99
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "repo",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                103,
                148
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "branch",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                152,
                199
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "dir",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                203,
                247
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "file",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                251,
                303
              ]
            }
          ],
          "schema": "string",
          "default": "\"app.vue\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "src",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                55,
                99
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "repo",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                103,
                148
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "branch",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                152,
                199
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "dir",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                203,
                247
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "file",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                251,
                303
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "TabsHeader": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
    "pascalName": "TabsHeader",
    "kebabName": "tabs-header",
    "chunkName": "components/tabs-header",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "tabs",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "{ label: string; }[]",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
              "range": [
                135,
                215
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
              "range": [
                135,
                215
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "{ label: string; }[]",
            "schema": [
              {
                "kind": "object",
                "type": "{ label: string; }",
                "schema": {
                  "label": {
                    "name": "label",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "declarations": [
                      {
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
                        "range": [
                          173,
                          186
                        ]
                      }
                    ],
                    "schema": "string"
                  }
                }
              }
            ]
          }
        },
        {
          "name": "activeTabIndex",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "number",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
              "range": [
                219,
                277
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
              "range": [
                219,
                277
              ]
            }
          ],
          "schema": "number"
        }
      ],
      "slots": [
        {
          "name": "footer",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [
        {
          "name": "update:activeTabIndex",
          "type": "any[]",
          "signature": "(event: \"update:activeTabIndex\", ...args: any[]): void",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                4472,
                4507
              ]
            }
          ],
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { footer?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { footer?(_: {}): any; }",
            "schema": {
              "footer": {
                "name": "footer",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "onUpdate:activeTabIndex",
          "type": "(...args: any[]) => any",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "event",
            "type": "(...args: any[]): any",
            "schema": [
              "any"
            ]
          }
        },
        {
          "name": "tabs",
          "type": "{ label: string; }[]",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
              "range": [
                135,
                215
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "{ label: string; }[]",
            "schema": [
              {
                "kind": "object",
                "type": "{ label: string; }",
                "schema": {
                  "label": {
                    "name": "label",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "declarations": [
                      {
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
                        "range": [
                          173,
                          186
                        ]
                      }
                    ],
                    "schema": "string"
                  }
                }
              }
            ]
          }
        },
        {
          "name": "activeTabIndex",
          "type": "number",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
              "range": [
                219,
                277
              ]
            }
          ],
          "schema": "number"
        }
      ]
    }
  },
  "Terminal": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
    "pascalName": "Terminal",
    "kebabName": "terminal",
    "chunkName": "components/terminal",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "content",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string | string[]",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
              "range": [
                131,
                222
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
              "range": [
                131,
                222
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | string[]",
            "schema": [
              "string",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          }
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "content",
          "type": "string | string[]",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
              "range": [
                131,
                222
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | string[]",
            "schema": [
              "string",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          }
        }
      ]
    }
  },
  "VideoPlayer": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
    "pascalName": "VideoPlayer",
    "kebabName": "video-player",
    "chunkName": "components/video-player",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                143,
                187
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "poster",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                92,
                139
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "sources",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any[]",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                191,
                263
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "any[]",
            "schema": [
              "any"
            ]
          },
          "default": "[]"
        },
        {
          "name": "autoplay",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                267,
                320
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "src",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                143,
                187
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "poster",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                92,
                139
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "sources",
          "type": "any[]",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                191,
                263
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "any[]",
            "schema": [
              "any"
            ]
          }
        },
        {
          "name": "autoplay",
          "type": "boolean",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                267,
                320
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        }
      ]
    }
  },
  "IconCodeSandBox": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue",
    "pascalName": "IconCodeSandBox",
    "kebabName": "icon-code-sand-box",
    "chunkName": "components/icon-code-sand-box",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconDocus": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue",
    "pascalName": "IconDocus",
    "kebabName": "icon-docus",
    "chunkName": "components/icon-docus",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxt": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue",
    "pascalName": "IconNuxt",
    "kebabName": "icon-nuxt",
    "chunkName": "components/icon-nuxt",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxtContent": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue",
    "pascalName": "IconNuxtContent",
    "kebabName": "icon-nuxt-content",
    "chunkName": "components/icon-nuxt-content",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxtLabs": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue",
    "pascalName": "IconNuxtLabs",
    "kebabName": "icon-nuxt-labs",
    "chunkName": "components/icon-nuxt-labs",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxtStudio": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue",
    "pascalName": "IconNuxtStudio",
    "kebabName": "icon-nuxt-studio",
    "chunkName": "components/icon-nuxt-studio",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconStackBlitz": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue",
    "pascalName": "IconStackBlitz",
    "kebabName": "icon-stack-blitz",
    "chunkName": "components/icon-stack-blitz",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconVueTelescope": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue",
    "pascalName": "IconVueTelescope",
    "kebabName": "icon-vue-telescope",
    "chunkName": "components/icon-vue-telescope",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "BlockHero": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
    "pascalName": "BlockHero",
    "kebabName": "block-hero",
    "chunkName": "components/block-hero",
    "shortPath": "node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "cta",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[]",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                78,
                170
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": [
              "string"
            ]
          },
          "default": "[]"
        },
        {
          "name": "secondary",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[]",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                174,
                272
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": [
              "string"
            ]
          },
          "default": "[]"
        },
        {
          "name": "video",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                276,
                343
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "snippet",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | string[]",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                347,
                456
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | string[]",
            "schema": [
              "string",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          },
          "default": "\"\""
        }
      ],
      "slots": [
        {
          "name": "announce",
          "type": "{ unwrap: string; }",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [],
                "schema": "string"
              }
            }
          }
        },
        {
          "name": "title",
          "type": "{ unwrap: string; }",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [],
                "schema": "string"
              }
            }
          }
        },
        {
          "name": "description",
          "type": "{ unwrap: string; }",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [],
                "schema": "string"
              }
            }
          }
        },
        {
          "name": "extra",
          "type": "{ unwrap: string; }",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [],
                "schema": "string"
              }
            }
          }
        },
        {
          "name": "actions",
          "type": "{ unwrap: string; }",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [],
                "schema": "string"
              }
            }
          }
        },
        {
          "name": "support",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { announce?(_: { unwrap: string; }): any; title?(_: { unwrap: string; }): any; description?(_: { unwrap: string; }): any; extra?(_: { ...; }): any; actions?(_: { ...; }): any; support?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { announce?(_: { unwrap: string; }): any; title?(_: { unwrap: string; }): any; description?(_: { unwrap: string; }): any; extra?(_: { ...; }): any; actions?(_: { ...; }): any; support?(_: {}): any; }",
            "schema": {
              "announce": {
                "name": "announce",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: { unwrap: string; }) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: { unwrap: string; }): any",
                  "schema": []
                }
              },
              "title": {
                "name": "title",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: { unwrap: string; }) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: { unwrap: string; }): any",
                  "schema": []
                }
              },
              "description": {
                "name": "description",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: { unwrap: string; }) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: { unwrap: string; }): any",
                  "schema": []
                }
              },
              "extra": {
                "name": "extra",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: { unwrap: string; }) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: { unwrap: string; }): any",
                  "schema": []
                }
              },
              "actions": {
                "name": "actions",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: { unwrap: string; }) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: { unwrap: string; }): any",
                  "schema": []
                }
              },
              "support": {
                "name": "support",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "cta",
          "type": "string[]",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                78,
                170
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": [
              "string"
            ]
          }
        },
        {
          "name": "secondary",
          "type": "string[]",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                174,
                272
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": [
              "string"
            ]
          }
        },
        {
          "name": "video",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                276,
                343
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "snippet",
          "type": "string | string[]",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                347,
                456
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | string[]",
            "schema": [
              "string",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          }
        }
      ]
    }
  },
  "Card": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/landing/Card.vue",
    "pascalName": "Card",
    "kebabName": "card",
    "chunkName": "components/card",
    "shortPath": "node_modules/@nuxt-themes/elements/components/landing/Card.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/Card.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "icon",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/Card.vue",
              "range": [
                41,
                86
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "title",
          "type": "{ unwrap: string; }",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [],
                "schema": "string"
              }
            }
          }
        },
        {
          "name": "description",
          "type": "{ unwrap: string; }",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [],
                "schema": "string"
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; title?(_: { unwrap: string; }): any; description?(_: { unwrap: string; }): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; title?(_: { unwrap: string; }): any; description?(_: { unwrap: string; }): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              },
              "title": {
                "name": "title",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: { unwrap: string; }) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: { unwrap: string; }): any",
                  "schema": []
                }
              },
              "description": {
                "name": "description",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: { unwrap: string; }) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: { unwrap: string; }): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "icon",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/Card.vue",
              "range": [
                41,
                86
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "CardGrid": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
    "pascalName": "CardGrid",
    "kebabName": "card-grid",
    "chunkName": "components/card-grid",
    "shortPath": "node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "title",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
              "range": [
                41,
                95
              ]
            }
          ],
          "schema": "string",
          "default": "\"Features\""
        }
      ],
      "slots": [
        {
          "name": "root",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "title",
          "type": "{ unwrap: string; }",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [],
                "schema": "string"
              }
            }
          }
        },
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { root?(_: {}): any; title?(_: { unwrap: string; }): any; default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { root?(_: {}): any; title?(_: { unwrap: string; }): any; default?(_: {}): any; }",
            "schema": {
              "root": {
                "name": "root",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              },
              "title": {
                "name": "title",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: { unwrap: string; }) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: { unwrap: string; }): any",
                  "schema": []
                }
              },
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "title",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
              "range": [
                41,
                95
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "VoltaBoard": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
    "pascalName": "VoltaBoard",
    "kebabName": "volta-board",
    "chunkName": "components/volta-board",
    "shortPath": "node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "token",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
              "range": [
                118,
                167
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
              "range": [
                118,
                167
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "token",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
              "range": [
                118,
                167
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ComponentPlayground": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue",
    "pascalName": "ComponentPlayground",
    "kebabName": "component-playground",
    "chunkName": "components/component-playground",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue",
    "meta": {
      "type": null,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ComponentPlaygroundData": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
    "pascalName": "ComponentPlaygroundData",
    "kebabName": "component-playground-data",
    "chunkName": "components/component-playground-data",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "modelValue",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
              "range": [
                575,
                655
              ]
            }
          ],
          "schema": "Record<string, any>",
          "default": "{}"
        },
        {
          "name": "componentData",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
              "range": [
                659,
                742
              ]
            }
          ],
          "schema": "Record<string, any>",
          "default": "{}"
        }
      ],
      "slots": [],
      "events": [
        {
          "name": "update:modelValue",
          "type": "any[]",
          "signature": "(event: \"update:modelValue\", ...args: any[]): void",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                4472,
                4507
              ]
            }
          ],
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "onUpdate:modelValue",
          "type": "(...args: any[]) => any",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "event",
            "type": "(...args: any[]): any",
            "schema": [
              "any"
            ]
          }
        },
        {
          "name": "modelValue",
          "type": "Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
              "range": [
                575,
                655
              ]
            }
          ],
          "schema": "Record<string, any>"
        },
        {
          "name": "componentData",
          "type": "Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
              "range": [
                659,
                742
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "ComponentPlaygroundProps": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
    "pascalName": "ComponentPlaygroundProps",
    "kebabName": "component-playground-props",
    "chunkName": "components/component-playground-props",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "modelValue",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
              "range": [
                763,
                817
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
              "range": [
                763,
                817
              ]
            }
          ],
          "schema": "Record<string, any>"
        },
        {
          "name": "componentData",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
              "range": [
                821,
                878
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
              "range": [
                821,
                878
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ],
      "slots": [],
      "events": [
        {
          "name": "update:modelValue",
          "type": "any[]",
          "signature": "(event: \"update:modelValue\", ...args: any[]): void",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                4472,
                4507
              ]
            }
          ],
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "onUpdate:modelValue",
          "type": "(...args: any[]) => any",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "event",
            "type": "(...args: any[]): any",
            "schema": [
              "any"
            ]
          }
        },
        {
          "name": "modelValue",
          "type": "Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
              "range": [
                763,
                817
              ]
            }
          ],
          "schema": "Record<string, any>"
        },
        {
          "name": "componentData",
          "type": "Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
              "range": [
                821,
                878
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "ComponentPlaygroundSlots": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
    "pascalName": "ComponentPlaygroundSlots",
    "kebabName": "component-playground-slots",
    "chunkName": "components/component-playground-slots",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "componentData",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
              "range": [
                184,
                241
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
              "range": [
                184,
                241
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "componentData",
          "type": "Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
              "range": [
                184,
                241
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "ComponentPlaygroundTokens": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
    "pascalName": "ComponentPlaygroundTokens",
    "kebabName": "component-playground-tokens",
    "chunkName": "components/component-playground-tokens",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "componentData",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
              "range": [
                148,
                205
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
              "range": [
                148,
                205
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "componentData",
          "type": "Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
              "range": [
                148,
                205
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "PreviewLayout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/PreviewLayout.vue",
    "pascalName": "PreviewLayout",
    "kebabName": "preview-layout",
    "chunkName": "components/preview-layout",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/PreviewLayout.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/PreviewLayout.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "TokensPlayground": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/TokensPlayground.vue",
    "pascalName": "TokensPlayground",
    "kebabName": "tokens-playground",
    "chunkName": "components/tokens-playground",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/TokensPlayground.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/TokensPlayground.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentDoc": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "pascalName": "ContentDoc",
    "kebabName": "content-doc",
    "chunkName": "components/content-doc",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "tag",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                4632,
                4644
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "path",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                4653,
                4666
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "query",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "QueryBuilderParams",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                4675,
                4701
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "QueryBuilderParams",
            "schema": {
              "first": {
                "name": "first",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "boolean",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9172,
                      9188
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "boolean",
                  "schema": [
                    "false",
                    "true"
                  ]
                }
              },
              "skip": {
                "name": "skip",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "number",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9193,
                      9207
                    ]
                  }
                ],
                "schema": "number"
              },
              "limit": {
                "name": "limit",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "number",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9212,
                      9227
                    ]
                  }
                ],
                "schema": "number"
              },
              "only": {
                "name": "only",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "string[]",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9232,
                      9248
                    ]
                  }
                ],
                "schema": {
                  "kind": "array",
                  "type": "string[]",
                  "schema": [
                    "string"
                  ]
                }
              },
              "without": {
                "name": "without",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "string[]",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9253,
                      9272
                    ]
                  }
                ],
                "schema": "string[]"
              },
              "sort": {
                "name": "sort",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "SortOptions[]",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9277,
                      9298
                    ]
                  }
                ],
                "schema": {
                  "kind": "array",
                  "type": "SortOptions[]",
                  "schema": [
                    {
                      "kind": "enum",
                      "type": "SortOptions",
                      "schema": [
                        {
                          "kind": "object",
                          "type": "SortParams",
                          "schema": {
                            "$locale": {
                              "name": "$locale",
                              "global": false,
                              "description": "Locale specifier for sorting\nA string with a BCP 47 language tag",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "undefined"
                                }
                              ],
                              "required": false,
                              "type": "string",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    3558,
                                    3575
                                  ]
                                }
                              ],
                              "schema": "string"
                            },
                            "$numeric": {
                              "name": "$numeric",
                              "global": false,
                              "description": "Whether numeric collation should be used, such that \"1\" < \"2\" < \"10\".\nPossible values are `true` and `false`;",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "false"
                                }
                              ],
                              "required": false,
                              "type": "boolean",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    3749,
                                    3768
                                  ]
                                }
                              ],
                              "schema": "boolean"
                            },
                            "$caseFirst": {
                              "name": "$caseFirst",
                              "global": false,
                              "description": "Whether upper case or lower case should sort first.\nPossible values are `\"upper\"`, `\"lower\"`, or `\"false\"`",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "\"depends on locale\""
                                }
                              ],
                              "required": false,
                              "type": "\"upper\" | \"lower\" | \"false\"",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    3953,
                                    3994
                                  ]
                                }
                              ],
                              "schema": {
                                "kind": "enum",
                                "type": "\"upper\" | \"lower\" | \"false\"",
                                "schema": [
                                  "\"upper\"",
                                  "\"lower\"",
                                  "\"false\""
                                ]
                              }
                            },
                            "$sensitivity": {
                              "name": "$sensitivity",
                              "global": false,
                              "description": "Which differences in the strings should lead to non-zero result values. Possible values are:\n - \"base\": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.\n - \"accent\": Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A.\n - \"case\": Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.\n - \"variant\": Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A.",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "\"variant\""
                                }
                              ],
                              "required": false,
                              "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    4733,
                                    4787
                                  ]
                                }
                              ],
                              "schema": {
                                "kind": "enum",
                                "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                                "schema": [
                                  "\"base\"",
                                  "\"accent\"",
                                  "\"case\"",
                                  "\"variant\""
                                ]
                              }
                            }
                          }
                        },
                        {
                          "kind": "object",
                          "type": "SortFields",
                          "schema": {}
                        }
                      ]
                    }
                  ]
                }
              },
              "where": {
                "name": "where",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "QueryBuilderWhere[]",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9303,
                      9331
                    ]
                  }
                ],
                "schema": {
                  "kind": "array",
                  "type": "QueryBuilderWhere[]",
                  "schema": [
                    {
                      "kind": "object",
                      "type": "QueryBuilderWhere",
                      "schema": {
                        "$and": {
                          "name": "$and",
                          "global": false,
                          "description": "Match only if all of nested conditions are true",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n $and: [\n   { score: { $gte: 5 } },\n   { score: { $lte: 10 } }\n ]\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "QueryBuilderWhere[]",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                5305,
                                5332
                              ]
                            }
                          ],
                          "schema": "QueryBuilderWhere[]"
                        },
                        "$or": {
                          "name": "$or",
                          "global": false,
                          "description": "Match if any of nested conditions is true",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n $or: [\n   { score: { $gt: 5 } },\n   { score: { $lt: 3 } }\n ]\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "QueryBuilderWhere[]",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                5576,
                                5602
                              ]
                            }
                          ],
                          "schema": "QueryBuilderWhere[]"
                        },
                        "$not": {
                          "name": "$not",
                          "global": false,
                          "description": "Match is condition is false",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $not: 'Hello World'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                5799,
                                5861
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                            "schema": [
                              "string",
                              "number",
                              "false",
                              "true",
                              {
                                "kind": "object",
                                "type": "RegExp",
                                "schema": {
                                  "exec": {
                                    "name": "exec",
                                    "global": false,
                                    "description": "Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string The String object or string literal on which to perform the search."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(string: string) => RegExpExecArray",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          40945,
                                          40990
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(string: string): RegExpExecArray",
                                      "schema": []
                                    }
                                  },
                                  "test": {
                                    "name": "test",
                                    "global": false,
                                    "description": "Returns a Boolean value that indicates whether or not a pattern exists in a searched string.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string String on which to perform the search."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(string: string) => boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41172,
                                          41202
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(string: string): boolean",
                                      "schema": []
                                    }
                                  },
                                  "source": {
                                    "name": "source",
                                    "global": false,
                                    "description": "Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal.",
                                    "tags": [],
                                    "required": true,
                                    "type": "string",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41384,
                                          41408
                                        ]
                                      }
                                    ],
                                    "schema": "string"
                                  },
                                  "global": {
                                    "name": "global",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41554,
                                          41579
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "ignoreCase": {
                                    "name": "ignoreCase",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41729,
                                          41758
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "multiline": {
                                    "name": "multiline",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41907,
                                          41935
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "lastIndex": {
                                    "name": "lastIndex",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": true,
                                    "type": "number",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41941,
                                          41959
                                        ]
                                      }
                                    ],
                                    "schema": "number"
                                  },
                                  "compile": {
                                    "name": "compile",
                                    "global": false,
                                    "description": "",
                                    "tags": [
                                      {
                                        "name": "deprecated",
                                        "text": "A legacy feature for browser compatibility"
                                      }
                                    ],
                                    "required": true,
                                    "type": "(pattern: string, flags?: string) => RegExp",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          42062,
                                          42109
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(pattern: string, flags?: string): RegExp",
                                      "schema": []
                                    }
                                  },
                                  "flags": {
                                    "name": "flags",
                                    "global": false,
                                    "description": "Returns a string indicating the flags of the regular expression in question. This field is read-only.\nThe characters in this string are sequenced and concatenated in the following order:\n\n   - \"g\" for global\n   - \"i\" for ignoreCase\n   - \"m\" for multiline\n   - \"u\" for unicode\n   - \"y\" for sticky\n\nIf no flags are set, the value is the empty string.",
                                    "tags": [],
                                    "required": true,
                                    "type": "string",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
                                        "range": [
                                          14897,
                                          14920
                                        ]
                                      }
                                    ],
                                    "schema": "string"
                                  },
                                  "sticky": {
                                    "name": "sticky",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the sticky flag (y) used with a regular\nexpression. Default is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
                                        "range": [
                                          15085,
                                          15110
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "unicode": {
                                    "name": "unicode",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the Unicode flag (u) used with a regular\nexpression. Default is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
                                        "range": [
                                          15276,
                                          15302
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "dotAll": {
                                    "name": "dotAll",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the dotAll flag (s) used with a regular expression.\nDefault is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2018.regexp.d.ts",
                                        "range": [
                                          1204,
                                          1229
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "__@match@7532": {
                                    "name": "__@match@7532",
                                    "global": false,
                                    "description": "Matches a string with this regular expression, and returns an array containing the results of\nthat search.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string A string to search within."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(string: string) => RegExpMatchArray",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          5644,
                                          5700
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(string: string): RegExpMatchArray",
                                      "schema": []
                                    }
                                  },
                                  "__@replace@7534": {
                                    "name": "__@replace@7534",
                                    "global": false,
                                    "description": "Replaces text in a string, using this regular expression.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string A String object or string literal whose contents matching against\nthis regular expression will be replaced"
                                      },
                                      {
                                        "name": "param",
                                        "text": "replaceValue A String object or string literal containing the text to replace for every\nsuccessful match of this regular expression."
                                      },
                                      {
                                        "name": "param",
                                        "text": "string A String object or string literal whose contents matching against\nthis regular expression will be replaced"
                                      },
                                      {
                                        "name": "param",
                                        "text": "replacer A function that returns the replacement text."
                                      }
                                    ],
                                    "required": true,
                                    "type": "{ (string: string, replaceValue: string): string; (string: string, replacer: (substring: string, ...args: any[]) => string): string; }",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          6110,
                                          6173
                                        ]
                                      },
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          6478,
                                          6576
                                        ]
                                      }
                                    ],
                                    "schema": "{ (string: string, replaceValue: string): string; (string: string, replacer: (substring: string, ...args: any[]) => string): string; }"
                                  },
                                  "__@search@7537": {
                                    "name": "__@search@7537",
                                    "global": false,
                                    "description": "Finds the position beginning first substring match in a regular expression search\nusing this regular expression.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string The string to search within."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(string: string) => number",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          6782,
                                          6822
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(string: string): number",
                                      "schema": []
                                    }
                                  },
                                  "__@split@7539": {
                                    "name": "__@split@7539",
                                    "global": false,
                                    "description": "Returns an array of substrings that were delimited by strings in the original input that\nmatch against this regular expression.\n\nIf the regular expression contains capturing parentheses, then each time this\nregular expression matches, the results (including any undefined results) of the\ncapturing parentheses are spliced.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string string value to split"
                                      },
                                      {
                                        "name": "param",
                                        "text": "limit if not undefined, the output array is truncated so that it contains no more\nthan 'limit' elements."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(string: string, limit?: number) => string[]",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          7384,
                                          7441
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(string: string, limit?: number): string[]",
                                      "schema": []
                                    }
                                  },
                                  "__@matchAll@7541": {
                                    "name": "__@matchAll@7541",
                                    "global": false,
                                    "description": "Matches a string with this regular expression, and returns an iterable of matches\ncontaining the results of that search.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string A string to search within."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(str: string) => IterableIterator<RegExpMatchArray>",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2020.symbol.wellknown.d.ts",
                                        "range": [
                                          1385,
                                          1452
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(str: string): IterableIterator<RegExpMatchArray>",
                                      "schema": []
                                    }
                                  }
                                }
                              },
                              "QueryBuilderWhere"
                            ]
                          }
                        },
                        "$eq": {
                          "name": "$eq",
                          "global": false,
                          "description": "Match if item equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $eq: 'Hello World'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                6060,
                                6101
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | RegExp",
                            "schema": [
                              "string",
                              "number",
                              "false",
                              "true",
                              "RegExp"
                            ]
                          }
                        },
                        "$ne": {
                          "name": "$ne",
                          "global": false,
                          "description": "Match if item not equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $ne: 100\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                6294,
                                6335
                              ]
                            }
                          ],
                          "schema": "string | number | boolean | RegExp"
                        },
                        "$gt": {
                          "name": "$gt",
                          "global": false,
                          "description": "Check if item is greater than condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $gt: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                6533,
                                6546
                              ]
                            }
                          ],
                          "schema": "number"
                        },
                        "$gte": {
                          "name": "$gte",
                          "global": false,
                          "description": "Check if item is greater than or equal to condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $gte: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                6757,
                                6771
                              ]
                            }
                          ],
                          "schema": "number"
                        },
                        "$lt": {
                          "name": "$lt",
                          "global": false,
                          "description": "Check if item is less than condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $lt: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                6966,
                                6979
                              ]
                            }
                          ],
                          "schema": "number"
                        },
                        "$lte": {
                          "name": "$lte",
                          "global": false,
                          "description": "Check if item is less than or equal to condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $lte: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                7187,
                                7201
                              ]
                            }
                          ],
                          "schema": "number"
                        },
                        "$regex": {
                          "name": "$regex",
                          "global": false,
                          "description": "Provides regular expression capabilities for pattern matching strings.",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $regex: /^foo/\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | RegExp",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                7435,
                                7460
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | RegExp",
                            "schema": [
                              "string",
                              "RegExp"
                            ]
                          }
                        },
                        "$type": {
                          "name": "$type",
                          "global": false,
                          "description": "Match if type of item equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n field: {\n   $type: 'boolean'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                7664,
                                7679
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "$exists": {
                          "name": "$exists",
                          "global": false,
                          "description": "Check key existence",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n tag: {\n   $exists: false\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "boolean",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                7860,
                                7878
                              ]
                            }
                          ],
                          "schema": "boolean"
                        },
                        "$contains": {
                          "name": "$contains",
                          "global": false,
                          "description": "Match if item contains every condition or math every rule in condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $contains: ['Hello', 'World']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | (string | number | boolean)[]",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                8134,
                                8207
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | (string | number | boolean)[]",
                            "schema": [
                              "string",
                              "number",
                              "false",
                              "true",
                              {
                                "kind": "array",
                                "type": "(string | number | boolean)[]",
                                "schema": [
                                  {
                                    "kind": "enum",
                                    "type": "string | number | boolean",
                                    "schema": [
                                      "string",
                                      "number",
                                      "false",
                                      "true"
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        "$containsAny": {
                          "name": "$containsAny",
                          "global": false,
                          "description": "Match if item contains at least one rule from condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $containsAny: ['Hello', 'World']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "(string | number | boolean)[]",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                8450,
                                8498
                              ]
                            }
                          ],
                          "schema": "(string | number | boolean)[]"
                        },
                        "$icontains": {
                          "name": "$icontains",
                          "global": false,
                          "description": "Ignore case contains",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $icontains: 'hello world'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                8694,
                                8714
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "$in": {
                          "name": "$in",
                          "global": false,
                          "description": "Match if item is in condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n category: {\n   $in: ['sport', 'nature', 'travel']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | (string | number | boolean)[]",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                8937,
                                8985
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | (string | number | boolean)[]",
                            "schema": [
                              "string",
                              "(string | number | boolean)[]"
                            ]
                          }
                        },
                        "_id": {
                          "name": "_id",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_source": {
                          "name": "_source",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_path": {
                          "name": "_path",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "title": {
                          "name": "title",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_draft": {
                          "name": "_draft",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_partial": {
                          "name": "_partial",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_locale": {
                          "name": "_locale",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_type": {
                          "name": "_type",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_file": {
                          "name": "_file",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_extension": {
                          "name": "_extension",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        }
                      }
                    }
                  ]
                }
              },
              "surround": {
                "name": "surround",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "{ query: string | QueryBuilderWhere; before?: number; after?: number; }",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9336,
                      9447
                    ]
                  }
                ],
                "schema": {
                  "kind": "object",
                  "type": "{ query: string | QueryBuilderWhere; before?: number; after?: number; }",
                  "schema": {
                    "query": {
                      "name": "query",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": true,
                      "type": "string | QueryBuilderWhere",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            9357,
                            9391
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "enum",
                        "type": "string | QueryBuilderWhere",
                        "schema": [
                          "string",
                          "QueryBuilderWhere"
                        ]
                      }
                    },
                    "before": {
                      "name": "before",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "number",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            9400,
                            9416
                          ]
                        }
                      ],
                      "schema": "number"
                    },
                    "after": {
                      "name": "after",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "number",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            9425,
                            9440
                          ]
                        }
                      ],
                      "schema": "number"
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "excerpt",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                4606,
                4623
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "head",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                4710,
                4724
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ doc: ParsedContent; refresh: () => Promise<void>; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                6347,
                6476
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "{ doc: ParsedContent; refresh: () => Promise<void>; }",
            "schema": {
              "doc": {
                "name": "doc",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "ParsedContent",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
                    "range": [
                      6380,
                      6399
                    ]
                  }
                ],
                "schema": {
                  "kind": "object",
                  "type": "ParsedContent",
                  "schema": {
                    "excerpt": {
                      "name": "excerpt",
                      "global": false,
                      "description": "Excerpt",
                      "tags": [],
                      "required": false,
                      "type": "MarkdownRoot",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            2459,
                            2482
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "object",
                        "type": "MarkdownRoot",
                        "schema": {
                          "type": {
                            "name": "type",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "\"root\"",
                            "declarations": [
                              {
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1465,
                                  1478
                                ]
                              }
                            ],
                            "schema": "\"root\""
                          },
                          "children": {
                            "name": "children",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "MarkdownNode[]",
                            "declarations": [
                              {
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1483,
                                  1508
                                ]
                              }
                            ],
                            "schema": {
                              "kind": "array",
                              "type": "MarkdownNode[]",
                              "schema": [
                                {
                                  "kind": "object",
                                  "type": "MarkdownNode",
                                  "schema": {
                                    "type": {
                                      "name": "type",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "string",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1214,
                                            1227
                                          ]
                                        }
                                      ],
                                      "schema": "string"
                                    },
                                    "tag": {
                                      "name": "tag",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "string",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1232,
                                            1245
                                          ]
                                        }
                                      ],
                                      "schema": "string"
                                    },
                                    "value": {
                                      "name": "value",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "string",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1250,
                                            1265
                                          ]
                                        }
                                      ],
                                      "schema": "string"
                                    },
                                    "props": {
                                      "name": "props",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "Record<string, any>",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1270,
                                            1298
                                          ]
                                        }
                                      ],
                                      "schema": "Record<string, any>"
                                    },
                                    "content": {
                                      "name": "content",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "any",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1303,
                                            1317
                                          ]
                                        }
                                      ],
                                      "schema": "any"
                                    },
                                    "children": {
                                      "name": "children",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "MarkdownNode[]",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1322,
                                            1348
                                          ]
                                        }
                                      ],
                                      "schema": "MarkdownNode[]"
                                    },
                                    "attributes": {
                                      "name": "attributes",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "Record<string, any>",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1353,
                                            1386
                                          ]
                                        }
                                      ],
                                      "schema": "Record<string, any>"
                                    },
                                    "fmAttributes": {
                                      "name": "fmAttributes",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "Record<string, any>",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1391,
                                            1426
                                          ]
                                        }
                                      ],
                                      "schema": "Record<string, any>"
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          "props": {
                            "name": "props",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": false,
                            "type": "Record<string, any>",
                            "declarations": [
                              {
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1513,
                                  1541
                                ]
                              }
                            ],
                            "schema": "Record<string, any>"
                          },
                          "toc": {
                            "name": "toc",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": false,
                            "type": "Toc",
                            "declarations": [
                              {
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1546,
                                  1556
                                ]
                              }
                            ],
                            "schema": {
                              "kind": "object",
                              "type": "Toc",
                              "schema": {
                                "title": {
                                  "name": "title",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": true,
                                  "type": "string",
                                  "declarations": [
                                    {
                                      "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                      "range": [
                                        1095,
                                        1109
                                      ]
                                    }
                                  ],
                                  "schema": "string"
                                },
                                "depth": {
                                  "name": "depth",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": true,
                                  "type": "number",
                                  "declarations": [
                                    {
                                      "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                      "range": [
                                        1114,
                                        1128
                                      ]
                                    }
                                  ],
                                  "schema": "number"
                                },
                                "searchDepth": {
                                  "name": "searchDepth",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": true,
                                  "type": "number",
                                  "declarations": [
                                    {
                                      "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                      "range": [
                                        1133,
                                        1153
                                      ]
                                    }
                                  ],
                                  "schema": "number"
                                },
                                "links": {
                                  "name": "links",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": true,
                                  "type": "TocLink[]",
                                  "declarations": [
                                    {
                                      "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                      "range": [
                                        1158,
                                        1175
                                      ]
                                    }
                                  ],
                                  "schema": {
                                    "kind": "array",
                                    "type": "TocLink[]",
                                    "schema": [
                                      {
                                        "kind": "object",
                                        "type": "TocLink",
                                        "schema": {
                                          "id": {
                                            "name": "id",
                                            "global": false,
                                            "description": "",
                                            "tags": [],
                                            "required": true,
                                            "type": "string",
                                            "declarations": [
                                              {
                                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                "range": [
                                                  991,
                                                  1002
                                                ]
                                              }
                                            ],
                                            "schema": "string"
                                          },
                                          "text": {
                                            "name": "text",
                                            "global": false,
                                            "description": "",
                                            "tags": [],
                                            "required": true,
                                            "type": "string",
                                            "declarations": [
                                              {
                                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                "range": [
                                                  1007,
                                                  1020
                                                ]
                                              }
                                            ],
                                            "schema": "string"
                                          },
                                          "depth": {
                                            "name": "depth",
                                            "global": false,
                                            "description": "",
                                            "tags": [],
                                            "required": true,
                                            "type": "number",
                                            "declarations": [
                                              {
                                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                "range": [
                                                  1025,
                                                  1039
                                                ]
                                              }
                                            ],
                                            "schema": "number"
                                          },
                                          "children": {
                                            "name": "children",
                                            "global": false,
                                            "description": "",
                                            "tags": [],
                                            "required": false,
                                            "type": "TocLink[]",
                                            "declarations": [
                                              {
                                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                "range": [
                                                  1044,
                                                  1065
                                                ]
                                              }
                                            ],
                                            "schema": "TocLink[]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "body": {
                      "name": "body",
                      "global": false,
                      "description": "Content body",
                      "tags": [],
                      "required": true,
                      "type": "MarkdownRoot",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            2523,
                            2549
                          ]
                        }
                      ],
                      "schema": "MarkdownRoot"
                    },
                    "layout": {
                      "name": "layout",
                      "global": false,
                      "description": "Layout",
                      "tags": [],
                      "required": false,
                      "type": "LayoutKey",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            2319,
                            2338
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "array",
                        "type": "LayoutKey",
                        "schema": []
                      }
                    },
                    "_id": {
                      "name": "_id",
                      "global": false,
                      "description": "Content id",
                      "tags": [],
                      "required": true,
                      "type": "string",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            185,
                            197
                          ]
                        }
                      ],
                      "schema": "string"
                    },
                    "_source": {
                      "name": "_source",
                      "global": false,
                      "description": "Content source",
                      "tags": [],
                      "required": false,
                      "type": "string",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            240,
                            257
                          ]
                        }
                      ],
                      "schema": "string"
                    },
                    "_path": {
                      "name": "_path",
                      "global": false,
                      "description": "Content path, this path is source agnostic and it the content my live in any source",
                      "tags": [],
                      "required": false,
                      "type": "string",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            369,
                            384
                          ]
                        }
                      ],
                      "schema": "string"
                    },
                    "title": {
                      "name": "title",
                      "global": false,
                      "description": "Content title",
                      "tags": [],
                      "required": false,
                      "type": "string",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            426,
                            441
                          ]
                        }
                      ],
                      "schema": "string"
                    },
                    "_draft": {
                      "name": "_draft",
                      "global": false,
                      "description": "Content draft status",
                      "tags": [],
                      "required": false,
                      "type": "boolean",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            490,
                            507
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "enum",
                        "type": "boolean",
                        "schema": [
                          "false",
                          "true"
                        ]
                      }
                    },
                    "_partial": {
                      "name": "_partial",
                      "global": false,
                      "description": "Content partial status",
                      "tags": [],
                      "required": false,
                      "type": "boolean",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            558,
                            577
                          ]
                        }
                      ],
                      "schema": "boolean"
                    },
                    "_locale": {
                      "name": "_locale",
                      "global": false,
                      "description": "Content locale",
                      "tags": [],
                      "required": false,
                      "type": "string",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            620,
                            637
                          ]
                        }
                      ],
                      "schema": "string"
                    },
                    "_type": {
                      "name": "_type",
                      "global": false,
                      "description": "File type of the content, i.e `markdown`",
                      "tags": [],
                      "required": false,
                      "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            706,
                            751
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "enum",
                        "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                        "schema": [
                          "\"markdown\"",
                          "\"yaml\"",
                          "\"json\"",
                          "\"csv\""
                        ]
                      }
                    },
                    "_file": {
                      "name": "_file",
                      "global": false,
                      "description": "Path to the file relative to the content directory",
                      "tags": [],
                      "required": false,
                      "type": "string",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            830,
                            845
                          ]
                        }
                      ],
                      "schema": "string"
                    },
                    "_extension": {
                      "name": "_extension",
                      "global": false,
                      "description": "Extension of the file",
                      "tags": [],
                      "required": false,
                      "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            895,
                            957
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "enum",
                        "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                        "schema": [
                          "\"yaml\"",
                          "\"json\"",
                          "\"csv\"",
                          "\"md\"",
                          "\"yml\"",
                          "\"json5\""
                        ]
                      }
                    }
                  }
                }
              },
              "refresh": {
                "name": "refresh",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "() => Promise<void>",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
                    "range": [
                      6412,
                      6441
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(): Promise<void>"
                }
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default: (context: { doc: ParsedContent; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                6329,
                6483
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default: (context: { doc: ParsedContent; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "(context: { doc: ParsedContent; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
                    "range": [
                      6347,
                      6476
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(context: { doc: ParsedContent; refresh: () => Promise<void>; }): VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "query",
          "type": "undefined",
          "description": "A query builder params object to be passed to <ContentQuery /> component.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                4217,
                4345
              ]
            }
          ],
          "schema": "undefined"
        },
        {
          "name": "path",
          "type": "string",
          "description": "The path of the content to load from content source.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                3983,
                4099
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "tag",
          "type": "string",
          "description": "The tag to use for the renderer element if it is used.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                3494,
                3606
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "excerpt",
          "type": "boolean",
          "description": "Whether or not to render the excerpt.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                3714,
                3803
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "head",
          "type": "boolean",
          "description": "Whether or not to map the document data to the `head` property.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                4453,
                4570
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        }
      ]
    }
  },
  "ContentList": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "pascalName": "ContentList",
    "kebabName": "content-list",
    "chunkName": "components/content-list",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "path",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
              "range": [
                2373,
                2386
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "query",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "QueryBuilderParams",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
              "range": [
                2395,
                2421
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "QueryBuilderParams",
            "schema": {
              "first": {
                "name": "first",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "boolean",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9172,
                      9188
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "boolean",
                  "schema": [
                    "false",
                    "true"
                  ]
                }
              },
              "skip": {
                "name": "skip",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "number",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9193,
                      9207
                    ]
                  }
                ],
                "schema": "number"
              },
              "limit": {
                "name": "limit",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "number",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9212,
                      9227
                    ]
                  }
                ],
                "schema": "number"
              },
              "only": {
                "name": "only",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "string[]",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9232,
                      9248
                    ]
                  }
                ],
                "schema": {
                  "kind": "array",
                  "type": "string[]",
                  "schema": [
                    "string"
                  ]
                }
              },
              "without": {
                "name": "without",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "string[]",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9253,
                      9272
                    ]
                  }
                ],
                "schema": "string[]"
              },
              "sort": {
                "name": "sort",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "SortOptions[]",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9277,
                      9298
                    ]
                  }
                ],
                "schema": {
                  "kind": "array",
                  "type": "SortOptions[]",
                  "schema": [
                    {
                      "kind": "enum",
                      "type": "SortOptions",
                      "schema": [
                        {
                          "kind": "object",
                          "type": "SortParams",
                          "schema": {
                            "$locale": {
                              "name": "$locale",
                              "global": false,
                              "description": "Locale specifier for sorting\nA string with a BCP 47 language tag",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "undefined"
                                }
                              ],
                              "required": false,
                              "type": "string",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    3558,
                                    3575
                                  ]
                                }
                              ],
                              "schema": "string"
                            },
                            "$numeric": {
                              "name": "$numeric",
                              "global": false,
                              "description": "Whether numeric collation should be used, such that \"1\" < \"2\" < \"10\".\nPossible values are `true` and `false`;",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "false"
                                }
                              ],
                              "required": false,
                              "type": "boolean",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    3749,
                                    3768
                                  ]
                                }
                              ],
                              "schema": "boolean"
                            },
                            "$caseFirst": {
                              "name": "$caseFirst",
                              "global": false,
                              "description": "Whether upper case or lower case should sort first.\nPossible values are `\"upper\"`, `\"lower\"`, or `\"false\"`",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "\"depends on locale\""
                                }
                              ],
                              "required": false,
                              "type": "\"upper\" | \"lower\" | \"false\"",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    3953,
                                    3994
                                  ]
                                }
                              ],
                              "schema": {
                                "kind": "enum",
                                "type": "\"upper\" | \"lower\" | \"false\"",
                                "schema": [
                                  "\"upper\"",
                                  "\"lower\"",
                                  "\"false\""
                                ]
                              }
                            },
                            "$sensitivity": {
                              "name": "$sensitivity",
                              "global": false,
                              "description": "Which differences in the strings should lead to non-zero result values. Possible values are:\n - \"base\": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.\n - \"accent\": Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A.\n - \"case\": Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.\n - \"variant\": Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A.",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "\"variant\""
                                }
                              ],
                              "required": false,
                              "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    4733,
                                    4787
                                  ]
                                }
                              ],
                              "schema": {
                                "kind": "enum",
                                "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                                "schema": [
                                  "\"base\"",
                                  "\"accent\"",
                                  "\"case\"",
                                  "\"variant\""
                                ]
                              }
                            }
                          }
                        },
                        {
                          "kind": "object",
                          "type": "SortFields",
                          "schema": {}
                        }
                      ]
                    }
                  ]
                }
              },
              "where": {
                "name": "where",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "QueryBuilderWhere[]",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9303,
                      9331
                    ]
                  }
                ],
                "schema": {
                  "kind": "array",
                  "type": "QueryBuilderWhere[]",
                  "schema": [
                    {
                      "kind": "object",
                      "type": "QueryBuilderWhere",
                      "schema": {
                        "$and": {
                          "name": "$and",
                          "global": false,
                          "description": "Match only if all of nested conditions are true",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n $and: [\n   { score: { $gte: 5 } },\n   { score: { $lte: 10 } }\n ]\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "QueryBuilderWhere[]",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                5305,
                                5332
                              ]
                            }
                          ],
                          "schema": "QueryBuilderWhere[]"
                        },
                        "$or": {
                          "name": "$or",
                          "global": false,
                          "description": "Match if any of nested conditions is true",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n $or: [\n   { score: { $gt: 5 } },\n   { score: { $lt: 3 } }\n ]\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "QueryBuilderWhere[]",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                5576,
                                5602
                              ]
                            }
                          ],
                          "schema": "QueryBuilderWhere[]"
                        },
                        "$not": {
                          "name": "$not",
                          "global": false,
                          "description": "Match is condition is false",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $not: 'Hello World'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                5799,
                                5861
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                            "schema": [
                              "string",
                              "number",
                              "false",
                              "true",
                              {
                                "kind": "object",
                                "type": "RegExp",
                                "schema": {
                                  "exec": {
                                    "name": "exec",
                                    "global": false,
                                    "description": "Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string The String object or string literal on which to perform the search."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(string: string) => RegExpExecArray",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          40945,
                                          40990
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(string: string): RegExpExecArray",
                                      "schema": []
                                    }
                                  },
                                  "test": {
                                    "name": "test",
                                    "global": false,
                                    "description": "Returns a Boolean value that indicates whether or not a pattern exists in a searched string.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string String on which to perform the search."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(string: string) => boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41172,
                                          41202
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(string: string): boolean",
                                      "schema": []
                                    }
                                  },
                                  "source": {
                                    "name": "source",
                                    "global": false,
                                    "description": "Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal.",
                                    "tags": [],
                                    "required": true,
                                    "type": "string",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41384,
                                          41408
                                        ]
                                      }
                                    ],
                                    "schema": "string"
                                  },
                                  "global": {
                                    "name": "global",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41554,
                                          41579
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "ignoreCase": {
                                    "name": "ignoreCase",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41729,
                                          41758
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "multiline": {
                                    "name": "multiline",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41907,
                                          41935
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "lastIndex": {
                                    "name": "lastIndex",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": true,
                                    "type": "number",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41941,
                                          41959
                                        ]
                                      }
                                    ],
                                    "schema": "number"
                                  },
                                  "compile": {
                                    "name": "compile",
                                    "global": false,
                                    "description": "",
                                    "tags": [
                                      {
                                        "name": "deprecated",
                                        "text": "A legacy feature for browser compatibility"
                                      }
                                    ],
                                    "required": true,
                                    "type": "(pattern: string, flags?: string) => RegExp",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          42062,
                                          42109
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(pattern: string, flags?: string): RegExp",
                                      "schema": []
                                    }
                                  },
                                  "flags": {
                                    "name": "flags",
                                    "global": false,
                                    "description": "Returns a string indicating the flags of the regular expression in question. This field is read-only.\nThe characters in this string are sequenced and concatenated in the following order:\n\n   - \"g\" for global\n   - \"i\" for ignoreCase\n   - \"m\" for multiline\n   - \"u\" for unicode\n   - \"y\" for sticky\n\nIf no flags are set, the value is the empty string.",
                                    "tags": [],
                                    "required": true,
                                    "type": "string",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
                                        "range": [
                                          14897,
                                          14920
                                        ]
                                      }
                                    ],
                                    "schema": "string"
                                  },
                                  "sticky": {
                                    "name": "sticky",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the sticky flag (y) used with a regular\nexpression. Default is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
                                        "range": [
                                          15085,
                                          15110
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "unicode": {
                                    "name": "unicode",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the Unicode flag (u) used with a regular\nexpression. Default is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
                                        "range": [
                                          15276,
                                          15302
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "dotAll": {
                                    "name": "dotAll",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the dotAll flag (s) used with a regular expression.\nDefault is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2018.regexp.d.ts",
                                        "range": [
                                          1204,
                                          1229
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "__@match@7532": {
                                    "name": "__@match@7532",
                                    "global": false,
                                    "description": "Matches a string with this regular expression, and returns an array containing the results of\nthat search.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string A string to search within."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(string: string) => RegExpMatchArray",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          5644,
                                          5700
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(string: string): RegExpMatchArray",
                                      "schema": []
                                    }
                                  },
                                  "__@replace@7534": {
                                    "name": "__@replace@7534",
                                    "global": false,
                                    "description": "Replaces text in a string, using this regular expression.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string A String object or string literal whose contents matching against\nthis regular expression will be replaced"
                                      },
                                      {
                                        "name": "param",
                                        "text": "replaceValue A String object or string literal containing the text to replace for every\nsuccessful match of this regular expression."
                                      },
                                      {
                                        "name": "param",
                                        "text": "string A String object or string literal whose contents matching against\nthis regular expression will be replaced"
                                      },
                                      {
                                        "name": "param",
                                        "text": "replacer A function that returns the replacement text."
                                      }
                                    ],
                                    "required": true,
                                    "type": "{ (string: string, replaceValue: string): string; (string: string, replacer: (substring: string, ...args: any[]) => string): string; }",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          6110,
                                          6173
                                        ]
                                      },
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          6478,
                                          6576
                                        ]
                                      }
                                    ],
                                    "schema": "{ (string: string, replaceValue: string): string; (string: string, replacer: (substring: string, ...args: any[]) => string): string; }"
                                  },
                                  "__@search@7537": {
                                    "name": "__@search@7537",
                                    "global": false,
                                    "description": "Finds the position beginning first substring match in a regular expression search\nusing this regular expression.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string The string to search within."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(string: string) => number",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          6782,
                                          6822
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(string: string): number",
                                      "schema": []
                                    }
                                  },
                                  "__@split@7539": {
                                    "name": "__@split@7539",
                                    "global": false,
                                    "description": "Returns an array of substrings that were delimited by strings in the original input that\nmatch against this regular expression.\n\nIf the regular expression contains capturing parentheses, then each time this\nregular expression matches, the results (including any undefined results) of the\ncapturing parentheses are spliced.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string string value to split"
                                      },
                                      {
                                        "name": "param",
                                        "text": "limit if not undefined, the output array is truncated so that it contains no more\nthan 'limit' elements."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(string: string, limit?: number) => string[]",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          7384,
                                          7441
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(string: string, limit?: number): string[]",
                                      "schema": []
                                    }
                                  },
                                  "__@matchAll@7541": {
                                    "name": "__@matchAll@7541",
                                    "global": false,
                                    "description": "Matches a string with this regular expression, and returns an iterable of matches\ncontaining the results of that search.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string A string to search within."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(str: string) => IterableIterator<RegExpMatchArray>",
                                    "declarations": [
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2020.symbol.wellknown.d.ts",
                                        "range": [
                                          1385,
                                          1452
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(str: string): IterableIterator<RegExpMatchArray>",
                                      "schema": []
                                    }
                                  }
                                }
                              },
                              "QueryBuilderWhere"
                            ]
                          }
                        },
                        "$eq": {
                          "name": "$eq",
                          "global": false,
                          "description": "Match if item equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $eq: 'Hello World'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                6060,
                                6101
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | RegExp",
                            "schema": [
                              "string",
                              "number",
                              "false",
                              "true",
                              "RegExp"
                            ]
                          }
                        },
                        "$ne": {
                          "name": "$ne",
                          "global": false,
                          "description": "Match if item not equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $ne: 100\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                6294,
                                6335
                              ]
                            }
                          ],
                          "schema": "string | number | boolean | RegExp"
                        },
                        "$gt": {
                          "name": "$gt",
                          "global": false,
                          "description": "Check if item is greater than condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $gt: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                6533,
                                6546
                              ]
                            }
                          ],
                          "schema": "number"
                        },
                        "$gte": {
                          "name": "$gte",
                          "global": false,
                          "description": "Check if item is greater than or equal to condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $gte: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                6757,
                                6771
                              ]
                            }
                          ],
                          "schema": "number"
                        },
                        "$lt": {
                          "name": "$lt",
                          "global": false,
                          "description": "Check if item is less than condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $lt: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                6966,
                                6979
                              ]
                            }
                          ],
                          "schema": "number"
                        },
                        "$lte": {
                          "name": "$lte",
                          "global": false,
                          "description": "Check if item is less than or equal to condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $lte: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                7187,
                                7201
                              ]
                            }
                          ],
                          "schema": "number"
                        },
                        "$regex": {
                          "name": "$regex",
                          "global": false,
                          "description": "Provides regular expression capabilities for pattern matching strings.",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $regex: /^foo/\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | RegExp",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                7435,
                                7460
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | RegExp",
                            "schema": [
                              "string",
                              "RegExp"
                            ]
                          }
                        },
                        "$type": {
                          "name": "$type",
                          "global": false,
                          "description": "Match if type of item equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n field: {\n   $type: 'boolean'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                7664,
                                7679
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "$exists": {
                          "name": "$exists",
                          "global": false,
                          "description": "Check key existence",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n tag: {\n   $exists: false\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "boolean",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                7860,
                                7878
                              ]
                            }
                          ],
                          "schema": "boolean"
                        },
                        "$contains": {
                          "name": "$contains",
                          "global": false,
                          "description": "Match if item contains every condition or math every rule in condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $contains: ['Hello', 'World']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | (string | number | boolean)[]",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                8134,
                                8207
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | (string | number | boolean)[]",
                            "schema": [
                              "string",
                              "number",
                              "false",
                              "true",
                              {
                                "kind": "array",
                                "type": "(string | number | boolean)[]",
                                "schema": [
                                  {
                                    "kind": "enum",
                                    "type": "string | number | boolean",
                                    "schema": [
                                      "string",
                                      "number",
                                      "false",
                                      "true"
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        "$containsAny": {
                          "name": "$containsAny",
                          "global": false,
                          "description": "Match if item contains at least one rule from condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $containsAny: ['Hello', 'World']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "(string | number | boolean)[]",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                8450,
                                8498
                              ]
                            }
                          ],
                          "schema": "(string | number | boolean)[]"
                        },
                        "$icontains": {
                          "name": "$icontains",
                          "global": false,
                          "description": "Ignore case contains",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $icontains: 'hello world'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                8694,
                                8714
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "$in": {
                          "name": "$in",
                          "global": false,
                          "description": "Match if item is in condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n category: {\n   $in: ['sport', 'nature', 'travel']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | (string | number | boolean)[]",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                8937,
                                8985
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | (string | number | boolean)[]",
                            "schema": [
                              "string",
                              "(string | number | boolean)[]"
                            ]
                          }
                        },
                        "_id": {
                          "name": "_id",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_source": {
                          "name": "_source",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_path": {
                          "name": "_path",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "title": {
                          "name": "title",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_draft": {
                          "name": "_draft",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_partial": {
                          "name": "_partial",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_locale": {
                          "name": "_locale",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_type": {
                          "name": "_type",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_file": {
                          "name": "_file",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_extension": {
                          "name": "_extension",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        }
                      }
                    }
                  ]
                }
              },
              "surround": {
                "name": "surround",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "{ query: string | QueryBuilderWhere; before?: number; after?: number; }",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9336,
                      9447
                    ]
                  }
                ],
                "schema": {
                  "kind": "object",
                  "type": "{ query: string | QueryBuilderWhere; before?: number; after?: number; }",
                  "schema": {
                    "query": {
                      "name": "query",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": true,
                      "type": "string | QueryBuilderWhere",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            9357,
                            9391
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "enum",
                        "type": "string | QueryBuilderWhere",
                        "schema": [
                          "string",
                          "QueryBuilderWhere"
                        ]
                      }
                    },
                    "before": {
                      "name": "before",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "number",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            9400,
                            9416
                          ]
                        }
                      ],
                      "schema": "number"
                    },
                    "after": {
                      "name": "after",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "number",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            9425,
                            9440
                          ]
                        }
                      ],
                      "schema": "number"
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ list: ParsedContent[]; refresh: () => Promise<void>; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
              "range": [
                3377,
                3509
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "{ list: ParsedContent[]; refresh: () => Promise<void>; }",
            "schema": {
              "list": {
                "name": "list",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "ParsedContent[]",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
                    "range": [
                      3410,
                      3432
                    ]
                  }
                ],
                "schema": {
                  "kind": "array",
                  "type": "ParsedContent[]",
                  "schema": [
                    {
                      "kind": "object",
                      "type": "ParsedContent",
                      "schema": {
                        "excerpt": {
                          "name": "excerpt",
                          "global": false,
                          "description": "Excerpt",
                          "tags": [],
                          "required": false,
                          "type": "MarkdownRoot",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                2459,
                                2482
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "object",
                            "type": "MarkdownRoot",
                            "schema": {
                              "type": {
                                "name": "type",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": true,
                                "type": "\"root\"",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1465,
                                      1478
                                    ]
                                  }
                                ],
                                "schema": "\"root\""
                              },
                              "children": {
                                "name": "children",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": true,
                                "type": "MarkdownNode[]",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1483,
                                      1508
                                    ]
                                  }
                                ],
                                "schema": {
                                  "kind": "array",
                                  "type": "MarkdownNode[]",
                                  "schema": [
                                    {
                                      "kind": "object",
                                      "type": "MarkdownNode",
                                      "schema": {
                                        "type": {
                                          "name": "type",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": true,
                                          "type": "string",
                                          "declarations": [
                                            {
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1214,
                                                1227
                                              ]
                                            }
                                          ],
                                          "schema": "string"
                                        },
                                        "tag": {
                                          "name": "tag",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "string",
                                          "declarations": [
                                            {
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1232,
                                                1245
                                              ]
                                            }
                                          ],
                                          "schema": "string"
                                        },
                                        "value": {
                                          "name": "value",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "string",
                                          "declarations": [
                                            {
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1250,
                                                1265
                                              ]
                                            }
                                          ],
                                          "schema": "string"
                                        },
                                        "props": {
                                          "name": "props",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "Record<string, any>",
                                          "declarations": [
                                            {
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1270,
                                                1298
                                              ]
                                            }
                                          ],
                                          "schema": "Record<string, any>"
                                        },
                                        "content": {
                                          "name": "content",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "any",
                                          "declarations": [
                                            {
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1303,
                                                1317
                                              ]
                                            }
                                          ],
                                          "schema": "any"
                                        },
                                        "children": {
                                          "name": "children",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "MarkdownNode[]",
                                          "declarations": [
                                            {
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1322,
                                                1348
                                              ]
                                            }
                                          ],
                                          "schema": "MarkdownNode[]"
                                        },
                                        "attributes": {
                                          "name": "attributes",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "Record<string, any>",
                                          "declarations": [
                                            {
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1353,
                                                1386
                                              ]
                                            }
                                          ],
                                          "schema": "Record<string, any>"
                                        },
                                        "fmAttributes": {
                                          "name": "fmAttributes",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "Record<string, any>",
                                          "declarations": [
                                            {
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1391,
                                                1426
                                              ]
                                            }
                                          ],
                                          "schema": "Record<string, any>"
                                        }
                                      }
                                    }
                                  ]
                                }
                              },
                              "props": {
                                "name": "props",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1513,
                                      1541
                                    ]
                                  }
                                ],
                                "schema": "Record<string, any>"
                              },
                              "toc": {
                                "name": "toc",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Toc",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1546,
                                      1556
                                    ]
                                  }
                                ],
                                "schema": {
                                  "kind": "object",
                                  "type": "Toc",
                                  "schema": {
                                    "title": {
                                      "name": "title",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "string",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1095,
                                            1109
                                          ]
                                        }
                                      ],
                                      "schema": "string"
                                    },
                                    "depth": {
                                      "name": "depth",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "number",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1114,
                                            1128
                                          ]
                                        }
                                      ],
                                      "schema": "number"
                                    },
                                    "searchDepth": {
                                      "name": "searchDepth",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "number",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1133,
                                            1153
                                          ]
                                        }
                                      ],
                                      "schema": "number"
                                    },
                                    "links": {
                                      "name": "links",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "TocLink[]",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1158,
                                            1175
                                          ]
                                        }
                                      ],
                                      "schema": {
                                        "kind": "array",
                                        "type": "TocLink[]",
                                        "schema": [
                                          {
                                            "kind": "object",
                                            "type": "TocLink",
                                            "schema": {
                                              "id": {
                                                "name": "id",
                                                "global": false,
                                                "description": "",
                                                "tags": [],
                                                "required": true,
                                                "type": "string",
                                                "declarations": [
                                                  {
                                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                    "range": [
                                                      991,
                                                      1002
                                                    ]
                                                  }
                                                ],
                                                "schema": "string"
                                              },
                                              "text": {
                                                "name": "text",
                                                "global": false,
                                                "description": "",
                                                "tags": [],
                                                "required": true,
                                                "type": "string",
                                                "declarations": [
                                                  {
                                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                    "range": [
                                                      1007,
                                                      1020
                                                    ]
                                                  }
                                                ],
                                                "schema": "string"
                                              },
                                              "depth": {
                                                "name": "depth",
                                                "global": false,
                                                "description": "",
                                                "tags": [],
                                                "required": true,
                                                "type": "number",
                                                "declarations": [
                                                  {
                                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                    "range": [
                                                      1025,
                                                      1039
                                                    ]
                                                  }
                                                ],
                                                "schema": "number"
                                              },
                                              "children": {
                                                "name": "children",
                                                "global": false,
                                                "description": "",
                                                "tags": [],
                                                "required": false,
                                                "type": "TocLink[]",
                                                "declarations": [
                                                  {
                                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                    "range": [
                                                      1044,
                                                      1065
                                                    ]
                                                  }
                                                ],
                                                "schema": "TocLink[]"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "body": {
                          "name": "body",
                          "global": false,
                          "description": "Content body",
                          "tags": [],
                          "required": true,
                          "type": "MarkdownRoot",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                2523,
                                2549
                              ]
                            }
                          ],
                          "schema": "MarkdownRoot"
                        },
                        "layout": {
                          "name": "layout",
                          "global": false,
                          "description": "Layout",
                          "tags": [],
                          "required": false,
                          "type": "LayoutKey",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                2319,
                                2338
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "array",
                            "type": "LayoutKey",
                            "schema": []
                          }
                        },
                        "_id": {
                          "name": "_id",
                          "global": false,
                          "description": "Content id",
                          "tags": [],
                          "required": true,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                185,
                                197
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_source": {
                          "name": "_source",
                          "global": false,
                          "description": "Content source",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                240,
                                257
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_path": {
                          "name": "_path",
                          "global": false,
                          "description": "Content path, this path is source agnostic and it the content my live in any source",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                369,
                                384
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "title": {
                          "name": "title",
                          "global": false,
                          "description": "Content title",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                426,
                                441
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_draft": {
                          "name": "_draft",
                          "global": false,
                          "description": "Content draft status",
                          "tags": [],
                          "required": false,
                          "type": "boolean",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                490,
                                507
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "boolean",
                            "schema": [
                              "false",
                              "true"
                            ]
                          }
                        },
                        "_partial": {
                          "name": "_partial",
                          "global": false,
                          "description": "Content partial status",
                          "tags": [],
                          "required": false,
                          "type": "boolean",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                558,
                                577
                              ]
                            }
                          ],
                          "schema": "boolean"
                        },
                        "_locale": {
                          "name": "_locale",
                          "global": false,
                          "description": "Content locale",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                620,
                                637
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_type": {
                          "name": "_type",
                          "global": false,
                          "description": "File type of the content, i.e `markdown`",
                          "tags": [],
                          "required": false,
                          "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                706,
                                751
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                            "schema": [
                              "\"markdown\"",
                              "\"yaml\"",
                              "\"json\"",
                              "\"csv\""
                            ]
                          }
                        },
                        "_file": {
                          "name": "_file",
                          "global": false,
                          "description": "Path to the file relative to the content directory",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                830,
                                845
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_extension": {
                          "name": "_extension",
                          "global": false,
                          "description": "Extension of the file",
                          "tags": [],
                          "required": false,
                          "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                895,
                                957
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                            "schema": [
                              "\"yaml\"",
                              "\"json\"",
                              "\"csv\"",
                              "\"md\"",
                              "\"yml\"",
                              "\"json5\""
                            ]
                          }
                        }
                      }
                    }
                  ]
                }
              },
              "refresh": {
                "name": "refresh",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "() => Promise<void>",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
                    "range": [
                      3445,
                      3474
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(): Promise<void>"
                }
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default: (context: { list: ParsedContent[]; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
              "range": [
                3359,
                3516
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default: (context: { list: ParsedContent[]; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "(context: { list: ParsedContent[]; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
                    "range": [
                      3377,
                      3509
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(context: { list: ParsedContent[]; refresh: () => Promise<void>; }): VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "query",
          "type": "undefined",
          "description": "A query builder params object to be passed to <ContentQuery /> component.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
              "range": [
                2209,
                2337
              ]
            }
          ],
          "schema": "undefined"
        },
        {
          "name": "path",
          "type": "string",
          "description": "The path of the content to load from content source.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
              "range": [
                1975,
                2091
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ContentNavigation": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "pascalName": "ContentNavigation",
    "kebabName": "content-navigation",
    "chunkName": "components/content-navigation",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "query",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "QueryBuilderParams | QueryBuilder<ParsedContentMeta>",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue.d.ts",
              "range": [
                1708,
                1787
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "QueryBuilderParams | QueryBuilder<ParsedContentMeta>",
            "schema": [
              {
                "kind": "object",
                "type": "QueryBuilderParams",
                "schema": {
                  "first": {
                    "name": "first",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "boolean",
                    "declarations": [
                      {
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          9172,
                          9188
                        ]
                      }
                    ],
                    "schema": {
                      "kind": "enum",
                      "type": "boolean",
                      "schema": [
                        "false",
                        "true"
                      ]
                    }
                  },
                  "skip": {
                    "name": "skip",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "number",
                    "declarations": [
                      {
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          9193,
                          9207
                        ]
                      }
                    ],
                    "schema": "number"
                  },
                  "limit": {
                    "name": "limit",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "number",
                    "declarations": [
                      {
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          9212,
                          9227
                        ]
                      }
                    ],
                    "schema": "number"
                  },
                  "only": {
                    "name": "only",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string[]",
                    "declarations": [
                      {
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          9232,
                          9248
                        ]
                      }
                    ],
                    "schema": {
                      "kind": "array",
                      "type": "string[]",
                      "schema": [
                        "string"
                      ]
                    }
                  },
                  "without": {
                    "name": "without",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string[]",
                    "declarations": [
                      {
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          9253,
                          9272
                        ]
                      }
                    ],
                    "schema": "string[]"
                  },
                  "sort": {
                    "name": "sort",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "SortOptions[]",
                    "declarations": [
                      {
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          9277,
                          9298
                        ]
                      }
                    ],
                    "schema": {
                      "kind": "array",
                      "type": "SortOptions[]",
                      "schema": [
                        {
                          "kind": "enum",
                          "type": "SortOptions",
                          "schema": [
                            {
                              "kind": "object",
                              "type": "SortParams",
                              "schema": {
                                "$locale": {
                                  "name": "$locale",
                                  "global": false,
                                  "description": "Locale specifier for sorting\nA string with a BCP 47 language tag",
                                  "tags": [
                                    {
                                      "name": "default",
                                      "text": "undefined"
                                    }
                                  ],
                                  "required": false,
                                  "type": "string",
                                  "declarations": [
                                    {
                                      "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                      "range": [
                                        3558,
                                        3575
                                      ]
                                    }
                                  ],
                                  "schema": "string"
                                },
                                "$numeric": {
                                  "name": "$numeric",
                                  "global": false,
                                  "description": "Whether numeric collation should be used, such that \"1\" < \"2\" < \"10\".\nPossible values are `true` and `false`;",
                                  "tags": [
                                    {
                                      "name": "default",
                                      "text": "false"
                                    }
                                  ],
                                  "required": false,
                                  "type": "boolean",
                                  "declarations": [
                                    {
                                      "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                      "range": [
                                        3749,
                                        3768
                                      ]
                                    }
                                  ],
                                  "schema": "boolean"
                                },
                                "$caseFirst": {
                                  "name": "$caseFirst",
                                  "global": false,
                                  "description": "Whether upper case or lower case should sort first.\nPossible values are `\"upper\"`, `\"lower\"`, or `\"false\"`",
                                  "tags": [
                                    {
                                      "name": "default",
                                      "text": "\"depends on locale\""
                                    }
                                  ],
                                  "required": false,
                                  "type": "\"upper\" | \"lower\" | \"false\"",
                                  "declarations": [
                                    {
                                      "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                      "range": [
                                        3953,
                                        3994
                                      ]
                                    }
                                  ],
                                  "schema": {
                                    "kind": "enum",
                                    "type": "\"upper\" | \"lower\" | \"false\"",
                                    "schema": [
                                      "\"upper\"",
                                      "\"lower\"",
                                      "\"false\""
                                    ]
                                  }
                                },
                                "$sensitivity": {
                                  "name": "$sensitivity",
                                  "global": false,
                                  "description": "Which differences in the strings should lead to non-zero result values. Possible values are:\n - \"base\": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.\n - \"accent\": Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A.\n - \"case\": Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.\n - \"variant\": Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A.",
                                  "tags": [
                                    {
                                      "name": "default",
                                      "text": "\"variant\""
                                    }
                                  ],
                                  "required": false,
                                  "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                                  "declarations": [
                                    {
                                      "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                      "range": [
                                        4733,
                                        4787
                                      ]
                                    }
                                  ],
                                  "schema": {
                                    "kind": "enum",
                                    "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                                    "schema": [
                                      "\"base\"",
                                      "\"accent\"",
                                      "\"case\"",
                                      "\"variant\""
                                    ]
                                  }
                                }
                              }
                            },
                            {
                              "kind": "object",
                              "type": "SortFields",
                              "schema": {}
                            }
                          ]
                        }
                      ]
                    }
                  },
                  "where": {
                    "name": "where",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "QueryBuilderWhere[]",
                    "declarations": [
                      {
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          9303,
                          9331
                        ]
                      }
                    ],
                    "schema": {
                      "kind": "array",
                      "type": "QueryBuilderWhere[]",
                      "schema": [
                        {
                          "kind": "object",
                          "type": "QueryBuilderWhere",
                          "schema": {
                            "$and": {
                              "name": "$and",
                              "global": false,
                              "description": "Match only if all of nested conditions are true",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n $and: [\n   { score: { $gte: 5 } },\n   { score: { $lte: 10 } }\n ]\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "QueryBuilderWhere[]",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    5305,
                                    5332
                                  ]
                                }
                              ],
                              "schema": "QueryBuilderWhere[]"
                            },
                            "$or": {
                              "name": "$or",
                              "global": false,
                              "description": "Match if any of nested conditions is true",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n $or: [\n   { score: { $gt: 5 } },\n   { score: { $lt: 3 } }\n ]\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "QueryBuilderWhere[]",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    5576,
                                    5602
                                  ]
                                }
                              ],
                              "schema": "QueryBuilderWhere[]"
                            },
                            "$not": {
                              "name": "$not",
                              "global": false,
                              "description": "Match is condition is false",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $not: 'Hello World'\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    5799,
                                    5861
                                  ]
                                }
                              ],
                              "schema": {
                                "kind": "enum",
                                "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                                "schema": [
                                  "string",
                                  "number",
                                  "false",
                                  "true",
                                  {
                                    "kind": "object",
                                    "type": "RegExp",
                                    "schema": {}
                                  },
                                  "QueryBuilderWhere"
                                ]
                              }
                            },
                            "$eq": {
                              "name": "$eq",
                              "global": false,
                              "description": "Match if item equals condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $eq: 'Hello World'\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | number | boolean | RegExp",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    6060,
                                    6101
                                  ]
                                }
                              ],
                              "schema": {
                                "kind": "enum",
                                "type": "string | number | boolean | RegExp",
                                "schema": [
                                  "string",
                                  "number",
                                  "false",
                                  "true",
                                  "RegExp"
                                ]
                              }
                            },
                            "$ne": {
                              "name": "$ne",
                              "global": false,
                              "description": "Match if item not equals condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n score: {\n   $ne: 100\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | number | boolean | RegExp",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    6294,
                                    6335
                                  ]
                                }
                              ],
                              "schema": "string | number | boolean | RegExp"
                            },
                            "$gt": {
                              "name": "$gt",
                              "global": false,
                              "description": "Check if item is greater than condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n score: {\n   $gt: 99.5\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "number",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    6533,
                                    6546
                                  ]
                                }
                              ],
                              "schema": "number"
                            },
                            "$gte": {
                              "name": "$gte",
                              "global": false,
                              "description": "Check if item is greater than or equal to condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n score: {\n   $gte: 99.5\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "number",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    6757,
                                    6771
                                  ]
                                }
                              ],
                              "schema": "number"
                            },
                            "$lt": {
                              "name": "$lt",
                              "global": false,
                              "description": "Check if item is less than condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n score: {\n   $lt: 99.5\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "number",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    6966,
                                    6979
                                  ]
                                }
                              ],
                              "schema": "number"
                            },
                            "$lte": {
                              "name": "$lte",
                              "global": false,
                              "description": "Check if item is less than or equal to condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n score: {\n   $lte: 99.5\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "number",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    7187,
                                    7201
                                  ]
                                }
                              ],
                              "schema": "number"
                            },
                            "$regex": {
                              "name": "$regex",
                              "global": false,
                              "description": "Provides regular expression capabilities for pattern matching strings.",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $regex: /^foo/\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | RegExp",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    7435,
                                    7460
                                  ]
                                }
                              ],
                              "schema": {
                                "kind": "enum",
                                "type": "string | RegExp",
                                "schema": [
                                  "string",
                                  "RegExp"
                                ]
                              }
                            },
                            "$type": {
                              "name": "$type",
                              "global": false,
                              "description": "Match if type of item equals condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n field: {\n   $type: 'boolean'\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    7664,
                                    7679
                                  ]
                                }
                              ],
                              "schema": "string"
                            },
                            "$exists": {
                              "name": "$exists",
                              "global": false,
                              "description": "Check key existence",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n tag: {\n   $exists: false\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "boolean",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    7860,
                                    7878
                                  ]
                                }
                              ],
                              "schema": "boolean"
                            },
                            "$contains": {
                              "name": "$contains",
                              "global": false,
                              "description": "Match if item contains every condition or math every rule in condition array",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $contains: ['Hello', 'World']\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | number | boolean | (string | number | boolean)[]",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    8134,
                                    8207
                                  ]
                                }
                              ],
                              "schema": {
                                "kind": "enum",
                                "type": "string | number | boolean | (string | number | boolean)[]",
                                "schema": [
                                  "string",
                                  "number",
                                  "false",
                                  "true",
                                  {
                                    "kind": "array",
                                    "type": "(string | number | boolean)[]",
                                    "schema": [
                                      {
                                        "kind": "enum",
                                        "type": "string | number | boolean",
                                        "schema": [
                                          "string",
                                          "number",
                                          "false",
                                          "true"
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            },
                            "$containsAny": {
                              "name": "$containsAny",
                              "global": false,
                              "description": "Match if item contains at least one rule from condition array",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $containsAny: ['Hello', 'World']\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "(string | number | boolean)[]",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    8450,
                                    8498
                                  ]
                                }
                              ],
                              "schema": "(string | number | boolean)[]"
                            },
                            "$icontains": {
                              "name": "$icontains",
                              "global": false,
                              "description": "Ignore case contains",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $icontains: 'hello world'\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    8694,
                                    8714
                                  ]
                                }
                              ],
                              "schema": "string"
                            },
                            "$in": {
                              "name": "$in",
                              "global": false,
                              "description": "Match if item is in condition array",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n category: {\n   $in: ['sport', 'nature', 'travel']\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | (string | number | boolean)[]",
                              "declarations": [
                                {
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    8937,
                                    8985
                                  ]
                                }
                              ],
                              "schema": {
                                "kind": "enum",
                                "type": "string | (string | number | boolean)[]",
                                "schema": [
                                  "string",
                                  "(string | number | boolean)[]"
                                ]
                              }
                            },
                            "_id": {
                              "name": "_id",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [],
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                            },
                            "_source": {
                              "name": "_source",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [],
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                            },
                            "_path": {
                              "name": "_path",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [],
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                            },
                            "title": {
                              "name": "title",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [],
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                            },
                            "_draft": {
                              "name": "_draft",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [],
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                            },
                            "_partial": {
                              "name": "_partial",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [],
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                            },
                            "_locale": {
                              "name": "_locale",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [],
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                            },
                            "_type": {
                              "name": "_type",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [],
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                            },
                            "_file": {
                              "name": "_file",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [],
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                            },
                            "_extension": {
                              "name": "_extension",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [],
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                            }
                          }
                        }
                      ]
                    }
                  },
                  "surround": {
                    "name": "surround",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "{ query: string | QueryBuilderWhere; before?: number; after?: number; }",
                    "declarations": [
                      {
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          9336,
                          9447
                        ]
                      }
                    ],
                    "schema": {
                      "kind": "object",
                      "type": "{ query: string | QueryBuilderWhere; before?: number; after?: number; }",
                      "schema": {
                        "query": {
                          "name": "query",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": true,
                          "type": "string | QueryBuilderWhere",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                9357,
                                9391
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | QueryBuilderWhere",
                            "schema": [
                              "string",
                              "QueryBuilderWhere"
                            ]
                          }
                        },
                        "before": {
                          "name": "before",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "number",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                9400,
                                9416
                              ]
                            }
                          ],
                          "schema": "number"
                        },
                        "after": {
                          "name": "after",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "number",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                9425,
                                9440
                              ]
                            }
                          ],
                          "schema": "number"
                        }
                      }
                    }
                  }
                }
              },
              "QueryBuilder<ParsedContentMeta>"
            ]
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ navigation: NavItem[]; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue.d.ts",
              "range": [
                2590,
                2687
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "{ navigation: NavItem[]; }",
            "schema": {
              "navigation": {
                "name": "navigation",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "NavItem[]",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue.d.ts",
                    "range": [
                      2630,
                      2652
                    ]
                  }
                ],
                "schema": {
                  "kind": "array",
                  "type": "NavItem[]",
                  "schema": [
                    {
                      "kind": "object",
                      "type": "NavItem",
                      "schema": {
                        "title": {
                          "name": "title",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": true,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                11206,
                                11220
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_path": {
                          "name": "_path",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": true,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                11225,
                                11239
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_id": {
                          "name": "_id",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                11244,
                                11257
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_draft": {
                          "name": "_draft",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "boolean",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                11262,
                                11279
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "boolean",
                            "schema": [
                              "false",
                              "true"
                            ]
                          }
                        },
                        "children": {
                          "name": "children",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "NavItem[]",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                11284,
                                11305
                              ]
                            }
                          ],
                          "schema": "NavItem[]"
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default: ({ navigation }: { navigation: NavItem[]; }) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue.d.ts",
              "range": [
                2572,
                2694
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default: ({ navigation }: { navigation: NavItem[]; }) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "({ navigation }: { navigation: NavItem[]; }) => VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue.d.ts",
                    "range": [
                      2590,
                      2687
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "({ navigation }: { navigation: NavItem[]; }): VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "query",
          "type": "undefined",
          "description": "A query to be passed to `fetchContentNavigation()`.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue.d.ts",
              "range": [
                1461,
                1642
              ]
            }
          ],
          "schema": "undefined"
        },
        {
          "name": "navigation",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue.d.ts",
              "range": [
                1662,
                1678
              ]
            }
          ],
          "schema": "any"
        }
      ]
    }
  },
  "ContentQuery": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "pascalName": "ContentQuery",
    "kebabName": "content-query",
    "chunkName": "components/content-query",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "skip",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6505,
                6518
              ]
            }
          ],
          "schema": "number"
        },
        {
          "name": "limit",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6527,
                6541
              ]
            }
          ],
          "schema": "number"
        },
        {
          "name": "only",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[]",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6550,
                6565
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": [
              "string"
            ]
          }
        },
        {
          "name": "without",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[]",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6574,
                6592
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": [
              "string"
            ]
          }
        },
        {
          "name": "sort",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "SortParams",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6601,
                6618
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "SortParams",
            "schema": {
              "$locale": {
                "name": "$locale",
                "global": false,
                "description": "Locale specifier for sorting\nA string with a BCP 47 language tag",
                "tags": [
                  {
                    "name": "default",
                    "text": "undefined"
                  }
                ],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      3558,
                      3575
                    ]
                  }
                ],
                "schema": "string"
              },
              "$numeric": {
                "name": "$numeric",
                "global": false,
                "description": "Whether numeric collation should be used, such that \"1\" < \"2\" < \"10\".\nPossible values are `true` and `false`;",
                "tags": [
                  {
                    "name": "default",
                    "text": "false"
                  }
                ],
                "required": false,
                "type": "boolean",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      3749,
                      3768
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "boolean",
                  "schema": [
                    "false",
                    "true"
                  ]
                }
              },
              "$caseFirst": {
                "name": "$caseFirst",
                "global": false,
                "description": "Whether upper case or lower case should sort first.\nPossible values are `\"upper\"`, `\"lower\"`, or `\"false\"`",
                "tags": [
                  {
                    "name": "default",
                    "text": "\"depends on locale\""
                  }
                ],
                "required": false,
                "type": "\"upper\" | \"lower\" | \"false\"",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      3953,
                      3994
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "\"upper\" | \"lower\" | \"false\"",
                  "schema": [
                    "\"upper\"",
                    "\"lower\"",
                    "\"false\""
                  ]
                }
              },
              "$sensitivity": {
                "name": "$sensitivity",
                "global": false,
                "description": "Which differences in the strings should lead to non-zero result values. Possible values are:\n - \"base\": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.\n - \"accent\": Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A.\n - \"case\": Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.\n - \"variant\": Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A.",
                "tags": [
                  {
                    "name": "default",
                    "text": "\"variant\""
                  }
                ],
                "required": false,
                "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      4733,
                      4787
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                  "schema": [
                    "\"base\"",
                    "\"accent\"",
                    "\"case\"",
                    "\"variant\""
                  ]
                }
              }
            }
          }
        },
        {
          "name": "where",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "{ [key: string]: any; }",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6627,
                6678
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "{ [key: string]: any; }",
            "schema": {}
          }
        },
        {
          "name": "find",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "\"surround\" | \"one\"",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6687,
                6712
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "\"surround\" | \"one\"",
            "schema": [
              "\"surround\"",
              "\"one\""
            ]
          }
        },
        {
          "name": "path",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6721,
                6734
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "locale",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6743,
                6758
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "ContentQueryDefaultSlotContext",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                8930,
                9004
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "ContentQueryDefaultSlotContext",
            "schema": {
              "data": {
                "name": "data",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "ParsedContent | ParsedContent[]",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
                    "range": [
                      162,
                      205
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "ParsedContent | ParsedContent[]",
                  "schema": [
                    {
                      "kind": "object",
                      "type": "ParsedContent",
                      "schema": {
                        "excerpt": {
                          "name": "excerpt",
                          "global": false,
                          "description": "Excerpt",
                          "tags": [],
                          "required": false,
                          "type": "MarkdownRoot",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                2459,
                                2482
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "object",
                            "type": "MarkdownRoot",
                            "schema": {
                              "type": {
                                "name": "type",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": true,
                                "type": "\"root\"",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1465,
                                      1478
                                    ]
                                  }
                                ],
                                "schema": "\"root\""
                              },
                              "children": {
                                "name": "children",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": true,
                                "type": "MarkdownNode[]",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1483,
                                      1508
                                    ]
                                  }
                                ],
                                "schema": {
                                  "kind": "array",
                                  "type": "MarkdownNode[]",
                                  "schema": [
                                    {
                                      "kind": "object",
                                      "type": "MarkdownNode",
                                      "schema": {
                                        "type": {
                                          "name": "type",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": true,
                                          "type": "string",
                                          "declarations": [
                                            {
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1214,
                                                1227
                                              ]
                                            }
                                          ],
                                          "schema": "string"
                                        },
                                        "tag": {
                                          "name": "tag",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "string",
                                          "declarations": [
                                            {
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1232,
                                                1245
                                              ]
                                            }
                                          ],
                                          "schema": "string"
                                        },
                                        "value": {
                                          "name": "value",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "string",
                                          "declarations": [
                                            {
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1250,
                                                1265
                                              ]
                                            }
                                          ],
                                          "schema": "string"
                                        },
                                        "props": {
                                          "name": "props",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "Record<string, any>",
                                          "declarations": [
                                            {
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1270,
                                                1298
                                              ]
                                            }
                                          ],
                                          "schema": "Record<string, any>"
                                        },
                                        "content": {
                                          "name": "content",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "any",
                                          "declarations": [
                                            {
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1303,
                                                1317
                                              ]
                                            }
                                          ],
                                          "schema": "any"
                                        },
                                        "children": {
                                          "name": "children",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "MarkdownNode[]",
                                          "declarations": [
                                            {
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1322,
                                                1348
                                              ]
                                            }
                                          ],
                                          "schema": "MarkdownNode[]"
                                        },
                                        "attributes": {
                                          "name": "attributes",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "Record<string, any>",
                                          "declarations": [
                                            {
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1353,
                                                1386
                                              ]
                                            }
                                          ],
                                          "schema": "Record<string, any>"
                                        },
                                        "fmAttributes": {
                                          "name": "fmAttributes",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "Record<string, any>",
                                          "declarations": [
                                            {
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1391,
                                                1426
                                              ]
                                            }
                                          ],
                                          "schema": "Record<string, any>"
                                        }
                                      }
                                    }
                                  ]
                                }
                              },
                              "props": {
                                "name": "props",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1513,
                                      1541
                                    ]
                                  }
                                ],
                                "schema": "Record<string, any>"
                              },
                              "toc": {
                                "name": "toc",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Toc",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1546,
                                      1556
                                    ]
                                  }
                                ],
                                "schema": {
                                  "kind": "object",
                                  "type": "Toc",
                                  "schema": {
                                    "title": {
                                      "name": "title",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "string",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1095,
                                            1109
                                          ]
                                        }
                                      ],
                                      "schema": "string"
                                    },
                                    "depth": {
                                      "name": "depth",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "number",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1114,
                                            1128
                                          ]
                                        }
                                      ],
                                      "schema": "number"
                                    },
                                    "searchDepth": {
                                      "name": "searchDepth",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "number",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1133,
                                            1153
                                          ]
                                        }
                                      ],
                                      "schema": "number"
                                    },
                                    "links": {
                                      "name": "links",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "TocLink[]",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1158,
                                            1175
                                          ]
                                        }
                                      ],
                                      "schema": {
                                        "kind": "array",
                                        "type": "TocLink[]",
                                        "schema": [
                                          {
                                            "kind": "object",
                                            "type": "TocLink",
                                            "schema": {
                                              "id": {
                                                "name": "id",
                                                "global": false,
                                                "description": "",
                                                "tags": [],
                                                "required": true,
                                                "type": "string",
                                                "declarations": [
                                                  {
                                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                    "range": [
                                                      991,
                                                      1002
                                                    ]
                                                  }
                                                ],
                                                "schema": "string"
                                              },
                                              "text": {
                                                "name": "text",
                                                "global": false,
                                                "description": "",
                                                "tags": [],
                                                "required": true,
                                                "type": "string",
                                                "declarations": [
                                                  {
                                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                    "range": [
                                                      1007,
                                                      1020
                                                    ]
                                                  }
                                                ],
                                                "schema": "string"
                                              },
                                              "depth": {
                                                "name": "depth",
                                                "global": false,
                                                "description": "",
                                                "tags": [],
                                                "required": true,
                                                "type": "number",
                                                "declarations": [
                                                  {
                                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                    "range": [
                                                      1025,
                                                      1039
                                                    ]
                                                  }
                                                ],
                                                "schema": "number"
                                              },
                                              "children": {
                                                "name": "children",
                                                "global": false,
                                                "description": "",
                                                "tags": [],
                                                "required": false,
                                                "type": "TocLink[]",
                                                "declarations": [
                                                  {
                                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                    "range": [
                                                      1044,
                                                      1065
                                                    ]
                                                  }
                                                ],
                                                "schema": "TocLink[]"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "body": {
                          "name": "body",
                          "global": false,
                          "description": "Content body",
                          "tags": [],
                          "required": true,
                          "type": "MarkdownRoot",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                2523,
                                2549
                              ]
                            }
                          ],
                          "schema": "MarkdownRoot"
                        },
                        "layout": {
                          "name": "layout",
                          "global": false,
                          "description": "Layout",
                          "tags": [],
                          "required": false,
                          "type": "LayoutKey",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                2319,
                                2338
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "array",
                            "type": "LayoutKey",
                            "schema": []
                          }
                        },
                        "_id": {
                          "name": "_id",
                          "global": false,
                          "description": "Content id",
                          "tags": [],
                          "required": true,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                185,
                                197
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_source": {
                          "name": "_source",
                          "global": false,
                          "description": "Content source",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                240,
                                257
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_path": {
                          "name": "_path",
                          "global": false,
                          "description": "Content path, this path is source agnostic and it the content my live in any source",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                369,
                                384
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "title": {
                          "name": "title",
                          "global": false,
                          "description": "Content title",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                426,
                                441
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_draft": {
                          "name": "_draft",
                          "global": false,
                          "description": "Content draft status",
                          "tags": [],
                          "required": false,
                          "type": "boolean",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                490,
                                507
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "boolean",
                            "schema": [
                              "false",
                              "true"
                            ]
                          }
                        },
                        "_partial": {
                          "name": "_partial",
                          "global": false,
                          "description": "Content partial status",
                          "tags": [],
                          "required": false,
                          "type": "boolean",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                558,
                                577
                              ]
                            }
                          ],
                          "schema": "boolean"
                        },
                        "_locale": {
                          "name": "_locale",
                          "global": false,
                          "description": "Content locale",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                620,
                                637
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_type": {
                          "name": "_type",
                          "global": false,
                          "description": "File type of the content, i.e `markdown`",
                          "tags": [],
                          "required": false,
                          "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                706,
                                751
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                            "schema": [
                              "\"markdown\"",
                              "\"yaml\"",
                              "\"json\"",
                              "\"csv\""
                            ]
                          }
                        },
                        "_file": {
                          "name": "_file",
                          "global": false,
                          "description": "Path to the file relative to the content directory",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                830,
                                845
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_extension": {
                          "name": "_extension",
                          "global": false,
                          "description": "Extension of the file",
                          "tags": [],
                          "required": false,
                          "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                895,
                                957
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                            "schema": [
                              "\"yaml\"",
                              "\"json\"",
                              "\"csv\"",
                              "\"md\"",
                              "\"yml\"",
                              "\"json5\""
                            ]
                          }
                        }
                      }
                    },
                    {
                      "kind": "array",
                      "type": "ParsedContent[]",
                      "schema": [
                        "ParsedContent"
                      ]
                    }
                  ]
                }
              },
              "refresh": {
                "name": "refresh",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "() => Promise<void>",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
                    "range": [
                      210,
                      239
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(): Promise<void>"
                }
              },
              "isPartial": {
                "name": "isPartial",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "boolean",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
                    "range": [
                      244,
                      263
                    ]
                  }
                ],
                "schema": "boolean"
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default: (context: ContentQueryDefaultSlotContext) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                8912,
                9011
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default: (context: ContentQueryDefaultSlotContext) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "(context: ContentQueryDefaultSlotContext) => VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
                    "range": [
                      8930,
                      9004
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(context: ContentQueryDefaultSlotContext): VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "sort",
          "type": "undefined",
          "description": "Sort results",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                5522,
                5641
              ]
            }
          ],
          "schema": "undefined"
        },
        {
          "name": "find",
          "type": "\"surround\" | \"one\"",
          "description": "A type of query to be made.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6272,
                6399
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "\"surround\" | \"one\"",
            "schema": [
              "\"surround\"",
              "\"one\""
            ]
          }
        },
        {
          "name": "path",
          "type": "string",
          "description": "The path of the content to load from content source.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                4752,
                4868
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "only",
          "type": "string[]",
          "description": "Select a subset of fields",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                4938,
                5055
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": [
              "string"
            ]
          }
        },
        {
          "name": "without",
          "type": "string[]",
          "description": "Remove a subset of fields",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                5125,
                5245
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": [
              "string"
            ]
          }
        },
        {
          "name": "where",
          "type": "undefined",
          "description": "Filter results",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                5304,
                5465
              ]
            }
          ],
          "schema": "undefined"
        },
        {
          "name": "limit",
          "type": "number",
          "description": "Limit number of results",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                5709,
                5825
              ]
            }
          ],
          "schema": "number"
        },
        {
          "name": "skip",
          "type": "number",
          "description": "Skip number of results",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                5892,
                6007
              ]
            }
          ],
          "schema": "number"
        },
        {
          "name": "locale",
          "type": "string",
          "description": "Filter contents based on locale",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6083,
                6200
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "isPartial",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6419,
                6434
              ]
            }
          ],
          "schema": "any"
        },
        {
          "name": "data",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6443,
                6453
              ]
            }
          ],
          "schema": "any"
        },
        {
          "name": "refresh",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6462,
                6475
              ]
            }
          ],
          "schema": "any"
        }
      ]
    }
  },
  "ContentRenderer": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "pascalName": "ContentRenderer",
    "kebabName": "content-renderer",
    "chunkName": "components/content-renderer",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "tag",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue.d.ts",
              "range": [
                1256,
                1268
              ]
            }
          ],
          "schema": "string",
          "default": "\"div\""
        },
        {
          "name": "value",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue.d.ts",
              "range": [
                1273,
                1300
              ]
            }
          ],
          "schema": "Record<string, any>",
          "default": "{}"
        },
        {
          "name": "excerpt",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue.d.ts",
              "range": [
                1234,
                1251
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "tag",
          "type": "string",
          "description": "The tag to use for the renderer element if it is used.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue.d.ts",
              "range": [
                1151,
                1222
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "excerpt",
          "type": "boolean",
          "description": "Whether or not to render the excerpt.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue.d.ts",
              "range": [
                969,
                1046
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "value",
          "type": "Record<string, any>",
          "description": "The document to render.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue.d.ts",
              "range": [
                781,
                881
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "ContentRendererMarkdown": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "pascalName": "ContentRendererMarkdown",
    "kebabName": "content-renderer-markdown",
    "chunkName": "components/content-renderer-markdown",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "value",
          "global": false,
          "description": "Content to render",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                359,
                408
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                359,
                408
              ]
            }
          ],
          "schema": "Record<string, any>"
        },
        {
          "name": "data",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                739,
                792
              ]
            }
          ],
          "schema": "Record<string, any>",
          "default": "{}"
        },
        {
          "name": "tag",
          "global": false,
          "description": "Root tag to use for rendering",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                556,
                603
              ]
            }
          ],
          "schema": "string",
          "default": "\"div\""
        },
        {
          "name": "components",
          "global": false,
          "description": "The map of custom components to use for rendering.",
          "tags": [],
          "required": false,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                675,
                734
              ]
            }
          ],
          "schema": "Record<string, any>",
          "default": "{}"
        },
        {
          "name": "excerpt",
          "global": false,
          "description": "Render only the excerpt",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                453,
                505
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "data",
          "type": "Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                739,
                792
              ]
            }
          ],
          "schema": "Record<string, any>"
        },
        {
          "name": "tag",
          "type": "string",
          "description": "Root tag to use for rendering",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                556,
                603
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "excerpt",
          "type": "boolean",
          "description": "Render only the excerpt",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                453,
                505
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "value",
          "type": "Record<string, any>",
          "description": "Content to render",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                359,
                408
              ]
            }
          ],
          "schema": "Record<string, any>"
        },
        {
          "name": "components",
          "type": "Record<string, any>",
          "description": "The map of custom components to use for rendering.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                675,
                734
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "ContentSlot": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "pascalName": "ContentSlot",
    "kebabName": "content-slot",
    "chunkName": "components/content-slot",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "use",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Function",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue.d.ts",
              "range": [
                881,
                895
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Function",
            "schema": {
              "apply": {
                "name": "apply",
                "global": false,
                "description": "Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the this object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A set of arguments to be passed to the function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, argArray?: any) => any",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      10258,
                      10315
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, argArray?: any): any",
                  "schema": []
                }
              },
              "call": {
                "name": "call",
                "global": false,
                "description": "Calls a method of an object, substituting another object for the current object.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the current object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the method."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      10563,
                      10623
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, ...argArray: any[]): any",
                  "schema": []
                }
              },
              "bind": {
                "name": "bind",
                "global": false,
                "description": "For a given function, creates a bound function that has the same body as the original function.\nThe this object of the bound function is associated with the specified object, and has the specified initial parameters.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg An object to which the this keyword can refer inside the new function."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the new function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11046,
                      11106
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, ...argArray: any[]): any",
                  "schema": []
                }
              },
              "toString": {
                "name": "toString",
                "global": false,
                "description": "Returns a string representation of a function.",
                "tags": [],
                "required": true,
                "type": "() => string",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11170,
                      11189
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(): string"
                }
              },
              "prototype": {
                "name": "prototype",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11195,
                      11210
                    ]
                  }
                ],
                "schema": "any"
              },
              "length": {
                "name": "length",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "number",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11215,
                      11239
                    ]
                  }
                ],
                "schema": "number"
              },
              "arguments": {
                "name": "arguments",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11276,
                      11291
                    ]
                  }
                ],
                "schema": "any"
              },
              "caller": {
                "name": "caller",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "Function",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11296,
                      11313
                    ]
                  }
                ],
                "schema": "Function"
              },
              "name": {
                "name": "name",
                "global": false,
                "description": "Returns the name of the function. Function names are read-only and can not be changed.",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
                    "range": [
                      4364,
                      4386
                    ]
                  }
                ],
                "schema": "string"
              },
              "__@hasInstance@757": {
                "name": "__@hasInstance@757",
                "global": false,
                "description": "Determines whether the given value inherits from this function if this function was used\nas a constructor function.\n\nA constructor function can control which objects are recognized as its instances by\n'instanceof' by overriding this method.",
                "tags": [],
                "required": true,
                "type": "(value: any) => boolean",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                    "range": [
                      5097,
                      5139
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(value: any): boolean",
                  "schema": []
                }
              }
            }
          },
          "default": "void 0"
        },
        {
          "name": "unwrap",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | boolean",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue.d.ts",
              "range": [
                900,
                925
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | boolean",
            "schema": [
              "string",
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "use",
          "type": "Function",
          "description": "A slot name or function",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue.d.ts",
              "range": [
                606,
                682
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Function",
            "schema": {
              "apply": {
                "name": "apply",
                "global": false,
                "description": "Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the this object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A set of arguments to be passed to the function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, argArray?: any) => any",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      10258,
                      10315
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, argArray?: any): any",
                  "schema": []
                }
              },
              "call": {
                "name": "call",
                "global": false,
                "description": "Calls a method of an object, substituting another object for the current object.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the current object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the method."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      10563,
                      10623
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, ...argArray: any[]): any",
                  "schema": []
                }
              },
              "bind": {
                "name": "bind",
                "global": false,
                "description": "For a given function, creates a bound function that has the same body as the original function.\nThe this object of the bound function is associated with the specified object, and has the specified initial parameters.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg An object to which the this keyword can refer inside the new function."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the new function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11046,
                      11106
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, ...argArray: any[]): any",
                  "schema": []
                }
              },
              "toString": {
                "name": "toString",
                "global": false,
                "description": "Returns a string representation of a function.",
                "tags": [],
                "required": true,
                "type": "() => string",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11170,
                      11189
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(): string"
                }
              },
              "prototype": {
                "name": "prototype",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11195,
                      11210
                    ]
                  }
                ],
                "schema": "any"
              },
              "length": {
                "name": "length",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "number",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11215,
                      11239
                    ]
                  }
                ],
                "schema": "number"
              },
              "arguments": {
                "name": "arguments",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11276,
                      11291
                    ]
                  }
                ],
                "schema": "any"
              },
              "caller": {
                "name": "caller",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "Function",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11296,
                      11313
                    ]
                  }
                ],
                "schema": "Function"
              },
              "name": {
                "name": "name",
                "global": false,
                "description": "Returns the name of the function. Function names are read-only and can not be changed.",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
                    "range": [
                      4364,
                      4386
                    ]
                  }
                ],
                "schema": "string"
              },
              "__@hasInstance@757": {
                "name": "__@hasInstance@757",
                "global": false,
                "description": "Determines whether the given value inherits from this function if this function was used\nas a constructor function.\n\nA constructor function can control which objects are recognized as its instances by\n'instanceof' by overriding this method.",
                "tags": [],
                "required": true,
                "type": "(value: any) => boolean",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                    "range": [
                      5097,
                      5139
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(value: any): boolean",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "unwrap",
          "type": "string | boolean",
          "description": "Tags to unwrap separated by spaces\nExample: 'ul li'",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue.d.ts",
              "range": [
                769,
                869
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | boolean",
            "schema": [
              "string",
              "false",
              "true"
            ]
          }
        }
      ]
    }
  },
  "DocumentDrivenEmpty": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "pascalName": "DocumentDrivenEmpty",
    "kebabName": "document-driven-empty",
    "chunkName": "components/document-driven-empty",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "value",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "ParsedContent",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue.d.ts",
              "range": [
                470,
                548
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue.d.ts",
              "range": [
                470,
                548
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "ParsedContent",
            "schema": {
              "excerpt": {
                "name": "excerpt",
                "global": false,
                "description": "Excerpt",
                "tags": [],
                "required": false,
                "type": "MarkdownRoot",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      2459,
                      2482
                    ]
                  }
                ],
                "schema": {
                  "kind": "object",
                  "type": "MarkdownRoot",
                  "schema": {
                    "type": {
                      "name": "type",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": true,
                      "type": "\"root\"",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            1465,
                            1478
                          ]
                        }
                      ],
                      "schema": "\"root\""
                    },
                    "children": {
                      "name": "children",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": true,
                      "type": "MarkdownNode[]",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            1483,
                            1508
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "array",
                        "type": "MarkdownNode[]",
                        "schema": [
                          {
                            "kind": "object",
                            "type": "MarkdownNode",
                            "schema": {
                              "type": {
                                "name": "type",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": true,
                                "type": "string",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1214,
                                      1227
                                    ]
                                  }
                                ],
                                "schema": "string"
                              },
                              "tag": {
                                "name": "tag",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "string",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1232,
                                      1245
                                    ]
                                  }
                                ],
                                "schema": "string"
                              },
                              "value": {
                                "name": "value",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "string",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1250,
                                      1265
                                    ]
                                  }
                                ],
                                "schema": "string"
                              },
                              "props": {
                                "name": "props",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1270,
                                      1298
                                    ]
                                  }
                                ],
                                "schema": "Record<string, any>"
                              },
                              "content": {
                                "name": "content",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "any",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1303,
                                      1317
                                    ]
                                  }
                                ],
                                "schema": "any"
                              },
                              "children": {
                                "name": "children",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "MarkdownNode[]",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1322,
                                      1348
                                    ]
                                  }
                                ],
                                "schema": "MarkdownNode[]"
                              },
                              "attributes": {
                                "name": "attributes",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1353,
                                      1386
                                    ]
                                  }
                                ],
                                "schema": "Record<string, any>"
                              },
                              "fmAttributes": {
                                "name": "fmAttributes",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1391,
                                      1426
                                    ]
                                  }
                                ],
                                "schema": "Record<string, any>"
                              }
                            }
                          }
                        ]
                      }
                    },
                    "props": {
                      "name": "props",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "Record<string, any>",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            1513,
                            1541
                          ]
                        }
                      ],
                      "schema": "Record<string, any>"
                    },
                    "toc": {
                      "name": "toc",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "Toc",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            1546,
                            1556
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "object",
                        "type": "Toc",
                        "schema": {
                          "title": {
                            "name": "title",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "string",
                            "declarations": [
                              {
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1095,
                                  1109
                                ]
                              }
                            ],
                            "schema": "string"
                          },
                          "depth": {
                            "name": "depth",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "number",
                            "declarations": [
                              {
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1114,
                                  1128
                                ]
                              }
                            ],
                            "schema": "number"
                          },
                          "searchDepth": {
                            "name": "searchDepth",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "number",
                            "declarations": [
                              {
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1133,
                                  1153
                                ]
                              }
                            ],
                            "schema": "number"
                          },
                          "links": {
                            "name": "links",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "TocLink[]",
                            "declarations": [
                              {
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1158,
                                  1175
                                ]
                              }
                            ],
                            "schema": {
                              "kind": "array",
                              "type": "TocLink[]",
                              "schema": [
                                {
                                  "kind": "object",
                                  "type": "TocLink",
                                  "schema": {
                                    "id": {
                                      "name": "id",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "string",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            991,
                                            1002
                                          ]
                                        }
                                      ],
                                      "schema": "string"
                                    },
                                    "text": {
                                      "name": "text",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "string",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1007,
                                            1020
                                          ]
                                        }
                                      ],
                                      "schema": "string"
                                    },
                                    "depth": {
                                      "name": "depth",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "number",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1025,
                                            1039
                                          ]
                                        }
                                      ],
                                      "schema": "number"
                                    },
                                    "children": {
                                      "name": "children",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "TocLink[]",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1044,
                                            1065
                                          ]
                                        }
                                      ],
                                      "schema": "TocLink[]"
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "body": {
                "name": "body",
                "global": false,
                "description": "Content body",
                "tags": [],
                "required": true,
                "type": "MarkdownRoot",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      2523,
                      2549
                    ]
                  }
                ],
                "schema": "MarkdownRoot"
              },
              "layout": {
                "name": "layout",
                "global": false,
                "description": "Layout",
                "tags": [],
                "required": false,
                "type": "LayoutKey",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      2319,
                      2338
                    ]
                  }
                ],
                "schema": {
                  "kind": "array",
                  "type": "LayoutKey",
                  "schema": []
                }
              },
              "_id": {
                "name": "_id",
                "global": false,
                "description": "Content id",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      185,
                      197
                    ]
                  }
                ],
                "schema": "string"
              },
              "_source": {
                "name": "_source",
                "global": false,
                "description": "Content source",
                "tags": [],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      240,
                      257
                    ]
                  }
                ],
                "schema": "string"
              },
              "_path": {
                "name": "_path",
                "global": false,
                "description": "Content path, this path is source agnostic and it the content my live in any source",
                "tags": [],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      369,
                      384
                    ]
                  }
                ],
                "schema": "string"
              },
              "title": {
                "name": "title",
                "global": false,
                "description": "Content title",
                "tags": [],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      426,
                      441
                    ]
                  }
                ],
                "schema": "string"
              },
              "_draft": {
                "name": "_draft",
                "global": false,
                "description": "Content draft status",
                "tags": [],
                "required": false,
                "type": "boolean",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      490,
                      507
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "boolean",
                  "schema": [
                    "false",
                    "true"
                  ]
                }
              },
              "_partial": {
                "name": "_partial",
                "global": false,
                "description": "Content partial status",
                "tags": [],
                "required": false,
                "type": "boolean",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      558,
                      577
                    ]
                  }
                ],
                "schema": "boolean"
              },
              "_locale": {
                "name": "_locale",
                "global": false,
                "description": "Content locale",
                "tags": [],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      620,
                      637
                    ]
                  }
                ],
                "schema": "string"
              },
              "_type": {
                "name": "_type",
                "global": false,
                "description": "File type of the content, i.e `markdown`",
                "tags": [],
                "required": false,
                "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      706,
                      751
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                  "schema": [
                    "\"markdown\"",
                    "\"yaml\"",
                    "\"json\"",
                    "\"csv\""
                  ]
                }
              },
              "_file": {
                "name": "_file",
                "global": false,
                "description": "Path to the file relative to the content directory",
                "tags": [],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      830,
                      845
                    ]
                  }
                ],
                "schema": "string"
              },
              "_extension": {
                "name": "_extension",
                "global": false,
                "description": "Extension of the file",
                "tags": [],
                "required": false,
                "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      895,
                      957
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                  "schema": [
                    "\"yaml\"",
                    "\"json\"",
                    "\"csv\"",
                    "\"md\"",
                    "\"yml\"",
                    "\"json5\""
                  ]
                }
              }
            }
          }
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "value",
          "type": "ParsedContent",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue.d.ts",
              "range": [
                470,
                548
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "ParsedContent",
            "schema": {
              "excerpt": {
                "name": "excerpt",
                "global": false,
                "description": "Excerpt",
                "tags": [],
                "required": false,
                "type": "MarkdownRoot",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      2459,
                      2482
                    ]
                  }
                ],
                "schema": {
                  "kind": "object",
                  "type": "MarkdownRoot",
                  "schema": {
                    "type": {
                      "name": "type",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": true,
                      "type": "\"root\"",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            1465,
                            1478
                          ]
                        }
                      ],
                      "schema": "\"root\""
                    },
                    "children": {
                      "name": "children",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": true,
                      "type": "MarkdownNode[]",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            1483,
                            1508
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "array",
                        "type": "MarkdownNode[]",
                        "schema": [
                          {
                            "kind": "object",
                            "type": "MarkdownNode",
                            "schema": {
                              "type": {
                                "name": "type",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": true,
                                "type": "string",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1214,
                                      1227
                                    ]
                                  }
                                ],
                                "schema": "string"
                              },
                              "tag": {
                                "name": "tag",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "string",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1232,
                                      1245
                                    ]
                                  }
                                ],
                                "schema": "string"
                              },
                              "value": {
                                "name": "value",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "string",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1250,
                                      1265
                                    ]
                                  }
                                ],
                                "schema": "string"
                              },
                              "props": {
                                "name": "props",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1270,
                                      1298
                                    ]
                                  }
                                ],
                                "schema": "Record<string, any>"
                              },
                              "content": {
                                "name": "content",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "any",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1303,
                                      1317
                                    ]
                                  }
                                ],
                                "schema": "any"
                              },
                              "children": {
                                "name": "children",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "MarkdownNode[]",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1322,
                                      1348
                                    ]
                                  }
                                ],
                                "schema": "MarkdownNode[]"
                              },
                              "attributes": {
                                "name": "attributes",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1353,
                                      1386
                                    ]
                                  }
                                ],
                                "schema": "Record<string, any>"
                              },
                              "fmAttributes": {
                                "name": "fmAttributes",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "declarations": [
                                  {
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1391,
                                      1426
                                    ]
                                  }
                                ],
                                "schema": "Record<string, any>"
                              }
                            }
                          }
                        ]
                      }
                    },
                    "props": {
                      "name": "props",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "Record<string, any>",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            1513,
                            1541
                          ]
                        }
                      ],
                      "schema": "Record<string, any>"
                    },
                    "toc": {
                      "name": "toc",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "Toc",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            1546,
                            1556
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "object",
                        "type": "Toc",
                        "schema": {
                          "title": {
                            "name": "title",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "string",
                            "declarations": [
                              {
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1095,
                                  1109
                                ]
                              }
                            ],
                            "schema": "string"
                          },
                          "depth": {
                            "name": "depth",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "number",
                            "declarations": [
                              {
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1114,
                                  1128
                                ]
                              }
                            ],
                            "schema": "number"
                          },
                          "searchDepth": {
                            "name": "searchDepth",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "number",
                            "declarations": [
                              {
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1133,
                                  1153
                                ]
                              }
                            ],
                            "schema": "number"
                          },
                          "links": {
                            "name": "links",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "TocLink[]",
                            "declarations": [
                              {
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1158,
                                  1175
                                ]
                              }
                            ],
                            "schema": {
                              "kind": "array",
                              "type": "TocLink[]",
                              "schema": [
                                {
                                  "kind": "object",
                                  "type": "TocLink",
                                  "schema": {
                                    "id": {
                                      "name": "id",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "string",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            991,
                                            1002
                                          ]
                                        }
                                      ],
                                      "schema": "string"
                                    },
                                    "text": {
                                      "name": "text",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "string",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1007,
                                            1020
                                          ]
                                        }
                                      ],
                                      "schema": "string"
                                    },
                                    "depth": {
                                      "name": "depth",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "number",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1025,
                                            1039
                                          ]
                                        }
                                      ],
                                      "schema": "number"
                                    },
                                    "children": {
                                      "name": "children",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "TocLink[]",
                                      "declarations": [
                                        {
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1044,
                                            1065
                                          ]
                                        }
                                      ],
                                      "schema": "TocLink[]"
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "body": {
                "name": "body",
                "global": false,
                "description": "Content body",
                "tags": [],
                "required": true,
                "type": "MarkdownRoot",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      2523,
                      2549
                    ]
                  }
                ],
                "schema": "MarkdownRoot"
              },
              "layout": {
                "name": "layout",
                "global": false,
                "description": "Layout",
                "tags": [],
                "required": false,
                "type": "LayoutKey",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      2319,
                      2338
                    ]
                  }
                ],
                "schema": {
                  "kind": "array",
                  "type": "LayoutKey",
                  "schema": []
                }
              },
              "_id": {
                "name": "_id",
                "global": false,
                "description": "Content id",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      185,
                      197
                    ]
                  }
                ],
                "schema": "string"
              },
              "_source": {
                "name": "_source",
                "global": false,
                "description": "Content source",
                "tags": [],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      240,
                      257
                    ]
                  }
                ],
                "schema": "string"
              },
              "_path": {
                "name": "_path",
                "global": false,
                "description": "Content path, this path is source agnostic and it the content my live in any source",
                "tags": [],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      369,
                      384
                    ]
                  }
                ],
                "schema": "string"
              },
              "title": {
                "name": "title",
                "global": false,
                "description": "Content title",
                "tags": [],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      426,
                      441
                    ]
                  }
                ],
                "schema": "string"
              },
              "_draft": {
                "name": "_draft",
                "global": false,
                "description": "Content draft status",
                "tags": [],
                "required": false,
                "type": "boolean",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      490,
                      507
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "boolean",
                  "schema": [
                    "false",
                    "true"
                  ]
                }
              },
              "_partial": {
                "name": "_partial",
                "global": false,
                "description": "Content partial status",
                "tags": [],
                "required": false,
                "type": "boolean",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      558,
                      577
                    ]
                  }
                ],
                "schema": "boolean"
              },
              "_locale": {
                "name": "_locale",
                "global": false,
                "description": "Content locale",
                "tags": [],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      620,
                      637
                    ]
                  }
                ],
                "schema": "string"
              },
              "_type": {
                "name": "_type",
                "global": false,
                "description": "File type of the content, i.e `markdown`",
                "tags": [],
                "required": false,
                "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      706,
                      751
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                  "schema": [
                    "\"markdown\"",
                    "\"yaml\"",
                    "\"json\"",
                    "\"csv\""
                  ]
                }
              },
              "_file": {
                "name": "_file",
                "global": false,
                "description": "Path to the file relative to the content directory",
                "tags": [],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      830,
                      845
                    ]
                  }
                ],
                "schema": "string"
              },
              "_extension": {
                "name": "_extension",
                "global": false,
                "description": "Extension of the file",
                "tags": [],
                "required": false,
                "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      895,
                      957
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                  "schema": [
                    "\"yaml\"",
                    "\"json\"",
                    "\"csv\"",
                    "\"md\"",
                    "\"yml\"",
                    "\"json5\""
                  ]
                }
              }
            }
          }
        }
      ]
    }
  },
  "Markdown": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "pascalName": "Markdown",
    "kebabName": "markdown",
    "chunkName": "components/markdown",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "meta": {
      "type": null,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProsePre": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
    "pascalName": "ProsePre",
    "kebabName": "prose-pre",
    "chunkName": "components/prose-pre",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "code",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                248,
                293
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "language",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                297,
                348
              ]
            }
          ],
          "schema": "string",
          "default": "null"
        },
        {
          "name": "filename",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                352,
                403
              ]
            }
          ],
          "schema": "string",
          "default": "null"
        },
        {
          "name": "highlights",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number[]",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                407,
                481
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "number[]",
            "schema": [
              "number"
            ]
          },
          "default": "[]"
        },
        {
          "name": "meta",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                485,
                532
              ]
            }
          ],
          "schema": "string",
          "default": "null"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                536,
                584
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "style",
          "type": "string | Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                588,
                646
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | Record<string, any>",
            "schema": [
              "string",
              "Record<string, any>"
            ]
          }
        },
        {
          "name": "code",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                248,
                293
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "language",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                297,
                348
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "filename",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                352,
                403
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "highlights",
          "type": "number[]",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                407,
                481
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "number[]",
            "schema": [
              "number"
            ]
          }
        },
        {
          "name": "meta",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                485,
                532
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseScript": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue",
    "pascalName": "ProseScript",
    "kebabName": "prose-script",
    "chunkName": "components/prose-script",
    "shortPath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue",
              "range": [
                317,
                361
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "src",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue",
              "range": [
                317,
                361
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "Icon": {
    "export": "default",
    "chunkName": "components/icon",
    "global": true,
    "kebabName": "icon",
    "pascalName": "Icon",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/Icon.vue",
    "priority": 0,
    "name": "Icon",
    "filePath": "node_modules/nuxt-icon/dist/runtime/Icon.vue",
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/Icon.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "name",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/Icon.vue",
              "range": [
                669,
                717
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/Icon.vue",
              "range": [
                669,
                717
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "size",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/Icon.vue",
              "range": [
                721,
                766
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "name",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/Icon.vue",
              "range": [
                669,
                717
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "size",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/Icon.vue",
              "range": [
                721,
                766
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "IconCSS": {
    "export": "default",
    "chunkName": "components/icon-css",
    "global": true,
    "kebabName": "icon-css",
    "pascalName": "IconCSS",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
    "priority": 0,
    "name": "IconCSS",
    "filePath": "node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "name",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
              "range": [
                387,
                435
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
              "range": [
                387,
                435
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "size",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
              "range": [
                439,
                484
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "name",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
              "range": [
                387,
                435
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "size",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
              "range": [
                439,
                484
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  }
};

const _yyWZkx = eventHandler(async () => {
  const componentsIgnoredPrefix = ["Content", "DocumentDriven", "Markdown"];
  const filteredComponents = Object.values(components).filter((c) => c.global && !componentsIgnoredPrefix.some((prefix) => c.pascalName.startsWith(prefix))).map(({ pascalName, filePath, meta }) => {
    return {
      name: pascalName,
      path: filePath,
      meta: {
        props: meta.props,
        slots: meta.slots,
        events: meta.events
      }
    };
  });
  const appConfig = useAppConfig();
  const runtimeConfig = useRuntimeConfig();
  const { app, contentSchema, appConfigSchema, studio, content: { sources, ignores, locales, defaultLocale, highlight, navigation, documentDriven, experimental } } = runtimeConfig;
  const safeSources = {};
  Object.keys(sources).forEach((name) => {
    const { driver, prefix, base, repo, branch, dir } = sources[name] || {};
    safeSources[name] = {
      driver,
      prefix,
      base,
      repo,
      branch,
      dir
    };
  });
  const hasPinceau = runtimeConfig?.pinceau?.studio;
  let tokensConfig;
  let tokensConfigSchema;
  if (hasPinceau) {
    tokensConfig = await $fetch.native(joinURL(app.baseURL, "/__pinceau_tokens_config.json")).then((r) => r.json());
    tokensConfigSchema = await $fetch.native(joinURL(app.baseURL, "/__pinceau_tokens_schema.json")).then((r) => r.json());
  }
  return {
    // Studio version
    version,
    project: studio?.project,
    tokens: studio?.publicToken,
    // nuxt.schema for Nuxt Content frontmatter
    contentSchema: contentSchema || {},
    // app.config
    appConfigSchema: appConfigSchema || {},
    appConfig,
    // tokens.config
    tokensConfigSchema,
    tokensConfig,
    // @nuxt/content
    content: { sources: safeSources, ignores, locales, defaultLocale, highlight, navigation, documentDriven, experimental },
    // nuxt-component-meta
    components: filteredComponents
  };
});

const _oLMd8X = defineEventHandler((event) => {
  appendHeader(event, "Access-Control-Allow-Origin", "*");
  const componentName = (event.context.params["component?"] || "").replace(/\.json$/, "");
  if (componentName) {
    const meta = components[pascalCase(componentName)];
    if (!meta) {
      throw createError$1({
        statusMessage: "Components not found!",
        statusCode: 404,
        data: {
          description: "Please make sure you are looking for correct component"
        }
      });
    }
    return meta;
  }
  return components;
});

const useShikiHighlighter = createSingleton((opts) => {
  const { theme, preload, wrapperStyle } = opts || {};
  let promise;
  const getShikiHighlighter = () => {
    if (!promise) {
      promise = getHighlighter({
        themes: [
          theme?.default || theme || "dark-plus"
        ],
        langs: [
          ...preload || [],
          "diff",
          "json",
          "js",
          "ts",
          "css",
          "shell",
          "html",
          "md",
          "yaml",
          "vue",
          "mdc"
        ]
      }).then((highlighter) => {
        const themes = Object.values(typeof theme === "string" ? { default: theme } : theme || {});
        if (themes.length) {
          return Promise.all(themes.map((theme2) => highlighter.loadTheme(theme2))).then(() => highlighter);
        }
        return highlighter;
      });
    }
    return promise;
  };
  const transformers = [
    transformerNotationDiff(),
    transformerNotationFocus(),
    transformerNotationHighlight(),
    transformerNotationErrorLevel()
  ];
  const getHighlightedAST = async (code, lang, theme2, opts2) => {
    try {
      const highlighter = await getShikiHighlighter();
      const { highlights = [] } = opts2 || {};
      const themesObject = typeof theme2 === "string" ? { default: theme2 } : theme2 || {};
      const themeNames = Object.values(themesObject);
      if (themeNames.length) {
        await Promise.all(themeNames.map((theme3) => highlighter.loadTheme(theme3)));
      }
      if (lang && !highlighter.getLoadedLanguages().includes(lang)) {
        try {
          await highlighter.loadLanguage(lang);
        } catch (error) {
          if (highlights.length) {
            console.warn("[@nuxtjs/mdc] Defaulting to no language to be able to highlight lines:", error.message);
            lang = "";
          } else
            throw error;
        }
      }
      const root = highlighter.codeToHast(code.trimEnd(), {
        lang,
        themes: themesObject,
        defaultColor: false,
        transformers: [
          ...transformers,
          {
            name: "mdc:highlight",
            line(node, line) {
              if (highlights.includes(line))
                addClassToHast(node, "highlight");
              node.properties.line = line;
            }
          },
          {
            name: "mdc:newline",
            line(node) {
              if (code?.includes("\n")) {
                if (node.children.length === 0 || node.children.length === 1 && node.children[0].type === "element" && node.children[0].children.length === 1 && node.children[0].children[0].type === "text" && node.children[0].children[0].value === "") {
                  node.children = [{
                    type: "element",
                    tagName: "span",
                    properties: {
                      emptyLinePlaceholder: true
                    },
                    children: [{ type: "text", value: "\n" }]
                  }];
                  return;
                }
                const last = node.children.at(-1);
                if (last?.type === "element" && last.tagName === "span") {
                  const text = last.children.at(-1);
                  if (text?.type === "text")
                    text.value += "\n";
                }
              }
            }
          }
        ]
      });
      const preEl = root.children[0];
      const codeEl = preEl.children[0];
      preEl.properties.style = wrapperStyle ? typeof wrapperStyle === "string" ? wrapperStyle : preEl.properties.style : "";
      const styles = [];
      Object.keys(themesObject).forEach((color) => {
        const colorScheme = color !== "default" ? `.${color}` : "";
        styles.push(
          wrapperStyle ? `${colorScheme} .shiki,` : "",
          `html .${color} .shiki span {`,
          `color: var(--shiki-${color});`,
          `background: var(--shiki-${color}-bg);`,
          `font-style: var(--shiki-${color}-font-style);`,
          `font-weight: var(--shiki-${color}-font-weight);`,
          `text-decoration: var(--shiki-${color}-text-decoration);`,
          "}"
        );
        styles.unshift(
          `html${colorScheme} .shiki span {`,
          `color: var(--shiki-${color});`,
          `background: var(--shiki-${color}-bg);`,
          `font-style: var(--shiki-${color}-font-style);`,
          `font-weight: var(--shiki-${color}-font-weight);`,
          `text-decoration: var(--shiki-${color}-text-decoration);`,
          "}"
        );
      });
      return {
        tree: codeEl.children,
        className: Array.isArray(preEl.properties.class) ? preEl.properties.class.join(" ") : preEl.properties.class,
        inlineStyle: preEl.properties.style,
        style: styles.join("")
      };
    } catch (error) {
      console.warn("[@nuxtjs/mdc] Failed to highlight code block:", error.message);
      return {
        tree: [{ type: "text", value: code }],
        className: "",
        inlineStyle: "",
        style: ""
      };
    }
  };
  return {
    getHighlightedAST
  };
});
function createSingleton(fn) {
  let instance;
  return (...args) => {
    if (!instance) {
      instance = fn(...args);
    }
    return instance;
  };
}

const highlighter = /*#__PURE__*/Object.freeze({
  __proto__: null,
  useShikiHighlighter: useShikiHighlighter
});

const _4KC6IW = lazyEventHandler(async () => {
  const { highlight } = useRuntimeConfig().mdc;
  await loadWasm(
    (imports) => import('../onig.mjs').then((mod) => mod.default(imports)).then((exports) => ({ exports }))
  );
  const shiki = useShikiHighlighter(highlight);
  return eventHandler(async (event) => {
    const { code, lang, theme: themeString, highlights: highlightsString } = getQuery(event);
    const theme = JSON.parse(themeString);
    const highlights = highlightsString ? JSON.parse(highlightsString) : void 0;
    return await shiki.getHighlightedAST(code, lang, theme, { highlights });
  });
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const omit = (keys) => (obj) => keys && keys.length ? _pick(obj, (key) => !keys.includes(key)) : obj;
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => {
  return Array.isArray(value) ? value : [void 0, null].includes(value) ? [] : [value];
};

const arrayParams = ["sort", "where", "only", "without"];
function createQuery(fetcher, opts = {}) {
  const queryParams = {};
  for (const key of Object.keys(opts.initialParams || {})) {
    queryParams[key] = arrayParams.includes(key) ? ensureArray(opts.initialParams[key]) : opts.initialParams[key];
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const resolveResult = (result) => {
    if (opts.legacy) {
      if (result?.surround) {
        return result.surround;
      }
      if (!result) {
        return result;
      }
      if (result?.dirConfig) {
        result.result = {
          _path: result.dirConfig?._path,
          ...result.result,
          _dir: result.dirConfig
        };
      }
      return result?._path || Array.isArray(result) || !Object.prototype.hasOwnProperty.call(result, "result") ? result : result?.result;
    }
    return result;
  };
  const query = {
    params: () => ({
      ...queryParams,
      ...queryParams.where ? { where: [...ensureArray(queryParams.where)] } : {},
      ...queryParams.sort ? { sort: [...ensureArray(queryParams.sort)] } : {}
    }),
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), ...ensureArray(q)]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    // find
    find: () => fetcher(query).then(resolveResult),
    findOne: () => fetcher($set("first")(true)).then(resolveResult),
    count: () => fetcher($set("count")(true)).then(resolveResult),
    // locale
    locale: (_locale) => query.where({ _locale }),
    withSurround: $set("surround", (surroundQuery, options) => ({ query: surroundQuery, ...options })),
    withDirConfig: () => $set("dirConfig")(true)
  };
  if (opts.legacy) {
    query.findSurround = (surroundQuery, options) => {
      return query.withSurround(surroundQuery, options).find().then(resolveResult);
    };
    return query;
  }
  return query;
}

const defineTransformer = (transformer) => {
  return transformer;
};

function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    from ? Object.assign({}, from) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === "string") {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs) ? (
        /* c8 ignore next 1 */
        handleListOfConstructs(constructs)
      ) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all) ? all : all ? [all] : []
          ];
          return handleListOfConstructs(list)(code);
        }
      }
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

function initializeDocument(effects) {
  const self = this;
  const delimiter = (this.parser.delimiter || ",").charCodeAt(0);
  return enterRow;
  function enterRow(code) {
    return effects.attempt(
      { tokenize: attemptLastLine },
      (code2) => {
        effects.consume(code2);
        return enterRow;
      },
      (code2) => {
        effects.enter("row");
        return enterColumn(code2);
      }
    )(code);
  }
  function enterColumn(code) {
    effects.enter("column");
    return content(code);
  }
  function content(code) {
    if (code === null) {
      effects.exit("column");
      effects.exit("row");
      effects.consume(code);
      return content;
    }
    if (code === 34) {
      return quotedData(code);
    }
    if (code === delimiter) {
      if (self.previous === delimiter || markdownLineEnding(self.previous) || self.previous === null) {
        effects.enter("data");
        effects.exit("data");
      }
      effects.exit("column");
      effects.enter("columnSeparator");
      effects.consume(code);
      effects.exit("columnSeparator");
      effects.enter("column");
      return content;
    }
    if (markdownLineEnding(code)) {
      effects.exit("column");
      effects.enter("newline");
      effects.consume(code);
      effects.exit("newline");
      effects.exit("row");
      return enterRow;
    }
    return data(code);
  }
  function data(code) {
    effects.enter("data");
    return dataChunk(code);
  }
  function dataChunk(code) {
    if (code === null || markdownLineEnding(code) || code === delimiter) {
      effects.exit("data");
      return content(code);
    }
    if (code === 92) {
      return escapeCharacter(code);
    }
    effects.consume(code);
    return dataChunk;
  }
  function escapeCharacter(code) {
    effects.consume(code);
    return function(code2) {
      effects.consume(code2);
      return content;
    };
  }
  function quotedData(code) {
    effects.enter("quotedData");
    effects.enter("quotedDataChunk");
    effects.consume(code);
    return quotedDataChunk;
  }
  function quotedDataChunk(code) {
    if (code === 92) {
      return escapeCharacter(code);
    }
    if (code === 34) {
      return effects.attempt(
        { tokenize: attemptDoubleQuote },
        (code2) => {
          effects.exit("quotedDataChunk");
          effects.enter("quotedDataChunk");
          return quotedDataChunk(code2);
        },
        (code2) => {
          effects.consume(code2);
          effects.exit("quotedDataChunk");
          effects.exit("quotedData");
          return content;
        }
      )(code);
    }
    effects.consume(code);
    return quotedDataChunk;
  }
}
function attemptDoubleQuote(effects, ok, nok) {
  return startSequence;
  function startSequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.enter("quoteFence");
    effects.consume(code);
    return sequence;
  }
  function sequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.consume(code);
    effects.exit("quoteFence");
    return (code2) => ok(code2);
  }
}
function attemptLastLine(effects, ok, nok) {
  return enterLine;
  function enterLine(code) {
    if (!markdownSpace(code) && code !== null) {
      return nok(code);
    }
    effects.enter("emptyLine");
    return continueLine(code);
  }
  function continueLine(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return continueLine;
    }
    if (code === null) {
      effects.exit("emptyLine");
      return ok(code);
    }
    return nok(code);
  }
}
const parse = (options) => {
  return createTokenizer(
    { ...options },
    { tokenize: initializeDocument },
    void 0
  );
};

const own = {}.hasOwnProperty;
const initialPoint = {
  line: 1,
  column: 1,
  offset: 0
};
const fromCSV = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler()(
    postprocess(
      parse(options).write(preprocess()(value, encoding, true))
    )
  );
};
function compiler() {
  const config = {
    enter: {
      column: opener(openColumn),
      row: opener(openRow),
      data: onenterdata,
      quotedData: onenterdata
    },
    exit: {
      row: closer(),
      column: closer(),
      data: onexitdata,
      quotedData: onexitQuotedData
    }
  };
  return compile;
  function compile(events) {
    const tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      resume
    };
    let index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : initialPoint
      ),
      end: point(
        events.length > 0 ? events[events.length - 2][1].end : initialPoint
      )
    };
    return tree;
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and) {
        and.call(this, token);
      }
    }
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) {
        and.call(this, token);
      }
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString$1(this.stack.pop());
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token).trim().replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function onexitQuotedData(token) {
    const tail = this.stack.pop();
    const value = this.sliceSerialize(token);
    tail.value += this.sliceSerialize(token).trim().substring(1, value.length - 1).replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function openColumn() {
    return {
      type: "column",
      children: []
    };
  }
  function openRow() {
    return {
      type: "row",
      children: []
    };
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

function csvParse(options) {
  const parser = (doc) => {
    return fromCSV(doc, options);
  };
  Object.assign(this, { Parser: parser });
  const toJsonObject = (tree) => {
    const [header, ...rows] = tree.children;
    const columns = header.children.map((col) => col.children[0].value);
    const data = rows.map((row) => {
      return row.children.reduce((acc, col, i) => {
        acc[String(columns[i])] = col.children[0]?.value;
        return acc;
      }, {});
    });
    return data;
  };
  const toJsonArray = (tree) => {
    const data = tree.children.map((row) => {
      return row.children.map((col) => col.children[0]?.value);
    });
    return data;
  };
  const compiler = (doc) => {
    if (options.json) {
      return toJsonObject(doc);
    }
    return toJsonArray(doc);
  };
  Object.assign(this, { Compiler: compiler });
}
const csv = defineTransformer({
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content, options = {}) => {
    const stream = unified().use(csvParse, {
      delimiter: ",",
      json: true,
      ...options
    });
    const { result } = await stream.process(content);
    return {
      _id,
      _type: "csv",
      body: result
    };
  }
});

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (id) => {
  const [_source, ...parts] = id.split(":");
  const [, filename, _extension] = parts[parts.length - 1]?.match(/(.*)\.([^.]+)$/) || [];
  if (filename) {
    parts[parts.length - 1] = filename;
  }
  const _path = (parts || []).join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path
  };
};
const pathMeta = defineTransformer({
  name: "path-meta",
  extensions: [".*"],
  transform(content, options = {}) {
    const { locales = [], defaultLocale = "en", respectPathCase = false } = options;
    const { _source, _file, _path, _extension } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = generatePath(parts.join("/"), { respectPathCase });
    return {
      _path: filePath,
      _dir: filePath.split("/").slice(-2)[0],
      _draft: content._draft ?? isDraft(_path),
      _partial: isPartial(_path),
      _locale,
      ...content,
      // TODO: move title to Markdown parser
      title: content.title || generateTitle(refineUrlPart(parts[parts.length - 1])),
      _source,
      _file,
      _extension
    };
  }
});
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path, { forceLeadingSlash = true, respectPathCase = false } = {}) => {
  path = path.split("/").map((part) => slugify(refineUrlPart(part), { lower: !respectPathCase })).join("/");
  return forceLeadingSlash ? withLeadingSlash(withoutTrailingSlash(path)) : path;
};
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index(\.draft)?$/, "").replace(/\.draft$/, "");
}

const markdown = defineTransformer({
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content, options = {}) => {
    const config = { ...options };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const parsed = await parseMarkdown(content, {
      highlight: options.highlight,
      remark: {
        plugins: config.remarkPlugins
      },
      rehype: {
        options: {
          handlers: {
            link
          }
        },
        plugins: config.rehypePlugins
      },
      toc: config.toc
    });
    return {
      ...parsed.data,
      excerpt: parsed.excerpt,
      body: {
        ...parsed.body,
        toc: parsed.toc
      },
      _type: "markdown",
      _id
    };
  }
});
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(
          /* @vite-ignore */
          name
        ).then((m) => m.default || m),
        options: plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}
function link(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(normalizeLink(node.url))
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function normalizeLink(link2) {
  const match = link2.match(/#.+$/);
  const hash = match ? match[0] : "";
  if (link2.replace(/#.+$/, "").endsWith(".md") && (isRelative(link2) || !/^https?/.test(link2) && !link2.startsWith("/"))) {
    return generatePath(link2.replace(".md" + hash, ""), { forceLeadingSlash: false }) + hash;
  } else {
    return link2;
  }
}

const yaml = defineTransformer({
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: (_id, content) => {
    const { data } = parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
});

const json = defineTransformer({
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('json5').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr(content);
      }
    } else {
      parsed = content;
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
});

const TRANSFORMERS = [
  csv,
  markdown,
  json,
  yaml,
  pathMeta
];
function getParser(ext, additionalTransformers = []) {
  let parser = additionalTransformers.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  if (!parser) {
    parser = TRANSFORMERS.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  }
  return parser;
}
function getTransformers(ext, additionalTransformers = []) {
  return [
    ...additionalTransformers.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform),
    ...TRANSFORMERS.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform)
  ];
}
async function transformContent(id, content, options = {}) {
  const { transformers = [] } = options;
  const file = { _id: id, body: content };
  const ext = extname(id);
  const parser = getParser(ext, transformers);
  if (!parser) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parserOptions = options[camelCase(parser.name)] || {};
  const parsed = await parser.parse(file._id, file.body, parserOptions);
  const matchedTransformers = getTransformers(ext, transformers);
  const result = await matchedTransformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    const transformOptions = options[camelCase(cur.name)];
    if (transformOptions === false) {
      return next;
    }
    return cur.transform(next, transformOptions || {});
  }, Promise.resolve(parsed));
  return result;
}

function makeIgnored(ignores) {
  const rxAll = ["/\\.", "/-", ...ignores.filter((p) => p)].map((p) => new RegExp(p));
  return function isIgnored(key) {
    const path = "/" + key.replace(/:/g, "/");
    return rxAll.some((rx) => rx.test(path));
  };
}

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    /**
     * Match if item equals condition
     **/
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    /**
     * Match if item not equals condition
     **/
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    /**
     * Match is condition is false
     **/
    $not: (item, condition) => !match(item, condition),
    /**
     * Match only if all of nested conditions are true
     **/
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    /**
     * Match if any of nested conditions is true
     **/
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    /**
     * Match if item is in condition array
     **/
    $in: (item, condition) => ensureArray(condition).some(
      (cond) => Array.isArray(item) ? match(item, { $contains: cond }) : match(item, cond)
    ),
    /**
     * Match if item contains every condition or math every rule in condition array
     **/
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    /**
     * Ignore case contains
     **/
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    /**
     * Match if item contains at least one rule from condition array
     */
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    /**
     * Check key existence
     */
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    /**
     * Match if type of item equals condition
     */
    $type: (item, condition) => typeof item === String(condition),
    /**
     * Provides regular expression capabilities for pattern matching strings.
     */
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    /**
     * Check if item is less than condition
     */
    $lt: (item, condition) => {
      return item < condition;
    },
    /**
     * Check if item is less than or equal to condition
     */
    $lte: (item, condition) => {
      return item <= condition;
    },
    /**
     * Check if item is greater than condition
     */
    $gt: (item, condition) => {
      return item > condition;
    },
    /**
     * Check if item is greater than or equal to condition
     */
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before ?? 1;
    after = after ?? 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const matchingPipelines = [
    // Conditions
    (state, params) => {
      const filtered = state.result.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery)));
      return {
        ...state,
        result: filtered,
        total: filtered.length
      };
    },
    // Sort data
    (state, params) => ensureArray(params.sort).forEach((options) => sortList(state.result, options)),
    function fetchSurround(state, params, db) {
      if (params.surround) {
        let _surround = surround(state.result?.length === 1 ? db : state.result, params.surround);
        _surround = apply(withoutKeys(params.without))(_surround);
        _surround = apply(withKeys(params.only))(_surround);
        state.surround = _surround;
      }
      return state;
    }
  ];
  const transformingPiples = [
    // Skip first items
    (state, params) => {
      if (params.skip) {
        return {
          ...state,
          result: state.result.slice(params.skip),
          skip: params.skip
        };
      }
    },
    // Pick first items
    (state, params) => {
      if (params.limit) {
        return {
          ...state,
          result: state.result.slice(0, params.limit),
          limit: params.limit
        };
      }
    },
    function fetchDirConfig(state, params, db) {
      if (params.dirConfig) {
        const path = state.result[0]?._path || params.where?.find((w) => w._path)?._path;
        if (typeof path === "string") {
          const dirConfig = db.find((item) => item._path === joinURL(path, "_dir"));
          if (dirConfig) {
            state.dirConfig = { _path: dirConfig._path, ...withoutKeys(["_"])(dirConfig) };
          }
        }
      }
      return state;
    },
    // Remove unwanted fields
    (state, params) => ({
      ...state,
      result: apply(withoutKeys(params.without))(state.result)
    }),
    // Select only wanted fields
    (state, params) => ({
      ...state,
      result: apply(withKeys(params.only))(state.result)
    })
  ];
  return async (query) => {
    const db = await getContentsList();
    const params = query.params();
    const result1 = {
      result: db,
      limit: 0,
      skip: 0,
      total: db.length
    };
    const matchedData = matchingPipelines.reduce(($data, pipe) => pipe($data, params, db) || $data, result1);
    if (params.count) {
      return {
        result: matchedData.result.length
      };
    }
    const result = transformingPiples.reduce(($data, pipe) => pipe($data, params, db) || $data, matchedData);
    if (params.first) {
      return {
        ...omit(["skip", "limit", "total"])(result),
        result: result.result[0]
      };
    }
    return result;
  };
}

const isPreview = (event) => {
  const previewToken = getQuery(event).previewToken || getCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = getQuery(event).previewToken || getCookie(event, "previewToken");
  return { key };
};

async function getContentIndex(event) {
  const defaultLocale = useRuntimeConfig().content.defaultLocale;
  let contentIndex = await cacheStorage.getItem("content-index.json");
  if (!contentIndex) {
    const data = await getContentsList(event);
    contentIndex = data.reduce((acc, item) => {
      acc[item._path] = acc[item._path] || [];
      if (item._locale === defaultLocale) {
        acc[item._path].unshift(item._id);
      } else {
        acc[item._path].push(item._id);
      }
      return acc;
    }, {});
    await cacheStorage.setItem("content-index.json", contentIndex);
  }
  return contentIndex;
}
async function getIndexedContentsList(event, query) {
  const params = query.params();
  const path = params?.where?.find((wh) => wh._path)?._path;
  if (!isPreview(event) && !params.surround && !params.dirConfig && (typeof path === "string" || path instanceof RegExp)) {
    const index = await getContentIndex(event);
    const keys = Object.keys(index).filter((key) => path.test ? path.test(key) : key === String(path)).flatMap((key) => index[key]);
    const contents = await Promise.all(keys.map((key) => getContent(event, key)));
    return contents;
  }
  return getContentsList(event);
}

const transformers = [];

const sourceStorage = prefixStorage(useStorage(), "content:source");
const cacheStorage = prefixStorage(useStorage(), "cache:content");
const cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
const contentConfig = useRuntimeConfig().content;
const isIgnored = makeIgnored(contentConfig.ignores);
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  if (key.startsWith("preview:") || isIgnored(key)) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  {
    keys = await cacheParsedStorage.getKeys(prefix);
  }
  if (keys.length === 0) {
    keys = await sourceStorage.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await sourceStorage.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(
        previewKeys.map(async (key2) => {
          const meta = await sourceStorage.getMeta(key2);
          if (meta?.__deleted) {
            keysSet.delete(key2.substring(previewPrefix.length));
          } else {
            keysSet.add(key2.substring(previewPrefix.length));
          }
        })
      );
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
function* chunksFromArray(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}
const getContentsList = async (event, prefix) => {
  const keys = await getContentsIds(event, prefix);
  const keyChunks = [...chunksFromArray(keys, 10)];
  const contents = [];
  for (const chunk of keyChunks) {
    const result = await Promise.all(chunk.map((key) => getContent(event, key)));
    contents.push(...result);
  }
  return contents;
};
const pendingPromises = {};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await sourceStorage.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cacheParsedStorage.getItem(id);
  if (cached) {
    return cached.parsed;
  }
  const meta = await sourceStorage.getMeta(id);
  const mtime = meta.mtime;
  const size = meta.size || 0;
  const hash$1 = hash({
    // Last modified time
    mtime,
    // File size
    size,
    // Add Content version to the hash, to revalidate the cache on content update
    version: contentConfig.cacheVersion,
    integrity: contentConfig.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  if (!pendingPromises[id + hash$1]) {
    pendingPromises[id + hash$1] = new Promise(async (resolve) => {
      const body = await sourceStorage.getItem(id);
      if (body === null) {
        return resolve({ _id: contentId, body: null });
      }
      const parsed = await parseContent(contentId, body);
      await cacheParsedStorage.setItem(id, { parsed, hash: hash$1 }).catch(() => {
      });
      resolve(parsed);
      delete pendingPromises[id + hash$1];
    });
  }
  return pendingPromises[id + hash$1];
};
const parseContent = async (id, content, opts = {}) => {
  const nitroApp = useNitroApp();
  const options = defu(
    opts,
    {
      markdown: {
        ...contentConfig.markdown,
        highlight: contentConfig.highlight
      },
      csv: contentConfig.csv,
      yaml: contentConfig.yaml,
      transformers: transformers,
      pathMeta: {
        defaultLocale: contentConfig.defaultLocale,
        locales: contentConfig.locales,
        respectPathCase: contentConfig.respectPathCase
      }
    }
  );
  const file = { _id: id, body: typeof content === "string" ? content.replace(/\r\n|\r/g, "\n") : content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const result = await transformContent(id, file.body, options);
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
};
const createServerQueryFetch = (event) => (query) => {
  return createPipelineFetcher(() => getIndexedContentsList(event, query))(query);
};
function serverQueryContent(event, query, ...pathParts) {
  const { advanceQuery } = useRuntimeConfig().public.content.experimental;
  const queryBuilder = advanceQuery ? createQuery(createServerQueryFetch(event), { initialParams: typeof query !== "string" ? query || {} : {}, legacy: false }) : createQuery(createServerQueryFetch(event), { initialParams: typeof query !== "string" ? query || {} : {}, legacy: true });
  let path;
  if (typeof query === "string") {
    path = withLeadingSlash(joinURL(query, ...pathParts));
  }
  const originalParamsFn = queryBuilder.params;
  queryBuilder.params = () => {
    const params = originalParamsFn();
    if (path) {
      params.where = params.where || [];
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) });
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
      }
    }
    if (!params.sort?.length) {
      params.sort = [{ _file: 1, $numeric: true }];
    }
    if (contentConfig.locales.length) {
      const queryLocale = params.where?.find((w) => w._locale)?._locale;
      if (!queryLocale) {
        params.where = params.where || [];
        params.where.push({ _locale: contentConfig.defaultLocale });
      }
    }
    return params;
  };
  return queryBuilder;
}

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseJSONQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError$1({ statusCode: 400, message: "Invalid _params query" });
  }
};
const decodeQueryParams = (encoded) => {
  encoded = encoded.replace(/\//g, "");
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
  encoded = encoded.padEnd(encoded.length + (4 - encoded.length % 4) % 4, "=");
  return parseJSONQueryParams(typeof Buffer !== "undefined" ? Buffer.from(encoded, "base64").toString() : atob(encoded));
};
const memory = {};
const getContentQuery = (event) => {
  const { params } = event.context.params || {};
  if (params) {
    return decodeQueryParams(params.replace(/.json$/, ""));
  }
  const qid = event.context.params?.qid?.replace(/.json$/, "");
  const query = getQuery(event) || {};
  if (qid && query._params) {
    memory[qid] = parseJSONQueryParams(decodeURIComponent(query._params));
    if (memory[qid].where && !Array.isArray(memory[qid].where)) {
      memory[qid].where = [memory[qid].where];
    }
    return memory[qid];
  }
  if (qid && memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseJSONQueryParams(decodeURIComponent(query._params));
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  const where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = String(query.sort).split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, +order];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where = query.where || {};
    query.where[key] = query[key];
  }
  if (Object.keys(where).length > 0) {
    query.where = [where];
  } else {
    delete query.where;
  }
  return query;
};

const _rSvadi = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  const { advanceQuery } = useRuntimeConfig().public.content.experimental;
  if (query.first) {
    let contentQuery = serverQueryContent(event, query);
    if (!advanceQuery) {
      contentQuery = contentQuery.withDirConfig();
    }
    const content = await contentQuery.findOne();
    const _result = advanceQuery ? content?.result : content;
    const missing = !_result && !content?.dirConfig?.navigation?.redirect && !content?._dir?.navigation?.redirect;
    if (missing) {
      throw createError$1({
        statusMessage: "Document not found!",
        statusCode: 404,
        data: {
          description: "Could not find document for the given query.",
          query
        }
      });
    }
    return content;
  }
  if (query.count) {
    return serverQueryContent(event, query).count();
  }
  return serverQueryContent(event, query).find();
});

const _AD4g7o = defineEventHandler(async (event) => {
  const { content } = useRuntimeConfig();
  const now = Date.now();
  const contents = await serverQueryContent(event).find();
  await getContentIndex(event);
  const navigation = await $fetch(`${content.api.baseURL}/navigation`);
  await cacheStorage.setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now,
    contents: content.experimental.cacheContents ? contents : [],
    navigation
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().public.content;
  if (navigation === false) {
    return [];
  }
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...navigation.fields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1].match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      Object.assign(
        navItem,
        pickNavigationFields(dirConfig)
      );
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children?.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const _QdE0th = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query).length === 0) {
    const cache = await cacheStorage.getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent(event, query).where({
    /**
     * Partial contents are not included in the navigation
     * A partial content is a content that has `_` prefix in its path
     */
    _partial: false,
    /**
     * Exclude any pages which have opted out of navigation via frontmatter.
     */
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await serverQueryContent(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = (dirConfigs?.result || dirConfigs).reduce((configs2, conf) => {
    if (conf.title?.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      // Extract meta from body. (non MD files)
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents?.result || contents, configs);
});

const _lazy_AVG9K7 = () => import('../search.mjs');
const _lazy_4bzQ2c = () => import('../opensearch.xml.mjs');
const _lazy_YFgWQB = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/search', handler: _lazy_AVG9K7, lazy: true, middleware: false, method: undefined },
  { route: '/opensearch.xml', handler: _lazy_4bzQ2c, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_YFgWQB, lazy: true, middleware: false, method: undefined },
  { route: '/__studio.json', handler: _yyWZkx, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta', handler: _oLMd8X, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta.json', handler: _oLMd8X, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta/:component?', handler: _oLMd8X, lazy: false, middleware: false, method: "get" },
  { route: '/api/_mdc/highlight', handler: _4KC6IW, lazy: false, middleware: false, method: undefined },
  { route: '/api/_content/query/:qid/**:params', handler: _rSvadi, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query/:qid', handler: _rSvadi, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _rSvadi, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache.1708620613531.json', handler: _AD4g7o, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid/**:params', handler: _QdE0th, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _QdE0th, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _QdE0th, lazy: false, middleware: false, method: "get" },
  { route: '/**', handler: _lazy_YFgWQB, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((err) => {
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
  }
  server.on("request", function(req, res) {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", function() {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", function(socket) {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", function() {
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    if (options.development) {
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        return Promise.resolve(false);
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((err) => {
      const errString = typeof err === "string" ? err : JSON.stringify(err);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { $fetch$1 as $, withTrailingSlash as A, createHooks as B, parse$1 as C, getRequestHeader as D, withQuery as E, isScriptProtocol as F, destr as G, isEqual as H, setCookie as I, getCookie as J, deleteCookie as K, sanitizeStatusCode as L, kebabCase as M, pascalCase as N, upperFirst as O, prefixStorage as P, createStorage as Q, memoryDriver as R, nodeServer as S, highlighter as T, setResponseHeader as a, send as b, setResponseStatus as c, defineEventHandler as d, eventHandler as e, useNitroApp as f, getResponseStatus as g, setResponseHeaders as h, useRuntimeConfig as i, joinURL as j, getQuery as k, createError$1 as l, getRouteRules as m, getResponseStatusText as n, klona as o, withLeadingSlash as p, hash as q, defu as r, serverQueryContent as s, defuFn as t, useAppConfig as u, withBase as v, withoutTrailingSlash as w, hasProtocol as x, parseURL as y, parseQuery as z };
//# sourceMappingURL=node-server.mjs.map
