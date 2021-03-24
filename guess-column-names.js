function guessColumnNames({ data, debug=false, path = "" }) {
  if (debug) console.log("[guess-column-names] starting with", { data, debug, path });
  const prev = [undefined, null, ""].includes(path) ? "" : path + ".";
  const results = new Set();

  if (path === "" && Array.isArray(data)) {
    data.forEach((it) => {
      guessColumnNames({ data: it }).forEach((k) => results.add(k));
    });
  } else if (typeof data === "object") {
    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        guessColumnNames({ data: value, path: prev + key }).forEach((k) => results.add(k));
      } else {
        results.add(prev + key);
      }
    });
  }
  return Array.from(results).sort();
}

if (typeof module === 'object') module.exports = guessColumnNames;
if (typeof window === 'object') window.guessColumnNames = guessColumnNames;
if (typeof self === 'object') self.guessColumnNames = guessColumnNames;
