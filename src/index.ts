/**
 * Retrieves a (deeply) nested value from an object.
 * A tiny implementation of lodash.get.
 *
 * Perf tests:
 * https://jsperf.com/get-try-catch-vs-reduce-vs-lodash-get

 * Created by @itsjonq and @knicklabs
 *
 * @param {Object} obj Object to retreive value from.
 * @param {Array<string>|string} path Key path for the value.
 * @param {any} fallback Fallback value, if unsuccessful
 * @returns {any} The value, the fallback, or undefined
 */
function get(obj: Object, path?: Array<string> | string, fallback?: any): any {
  if (!obj || !path) return fallback;
  const paths = Array.isArray(path) ? path : path.split(".");

  return paths.reduce((acc, path) => {
    if (acc === undefined) return fallback;
    const value = acc[path];
    return value !== undefined ? value : fallback;
  }, obj);
}

export default get;
