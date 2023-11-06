export function customTruncate(str: string, size: number) {
  return str.length > size ? str.slice(0, size) + "..." : str;
}
