const styleCodePattern = /(?<![\p{L}\p{N}])(?:[A-Z]{2}\d{4}|\d{6})[ \t]*[-\u2010-\u2015\u2212][ \t]*\d{3}(?![\p{L}\p{N}])/gu;

export function extractCodes(input) {
  const candidates = input.toUpperCase().match(styleCodePattern) ?? [];
  return [...new Set(candidates.map(code => code.replace(/[ \t]*[-\u2010-\u2015\u2212][ \t]*/, "-")))];
}

export function compareListings(firstText, secondText) {
  const firstCodes = new Set(extractCodes(firstText));
  const secondCodes = new Set(extractCodes(secondText));
  return [...new Set([...firstCodes, ...secondCodes])].map(code => ({
    code,
    inFirst: firstCodes.has(code),
    inSecond: secondCodes.has(code)
  }));
}
