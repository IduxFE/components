/**
 * normalize format string
 *
 * format with a h and without an a or A will be add an a in the back
 *
 * @export
 * @param {string} format
 * @returns {string}
 */
export function normalizeFormat(format: string): string {
  if (/(?=h)[^aA]*$/.test(format)) {
    return `${format} a`
  }

  return format
}
