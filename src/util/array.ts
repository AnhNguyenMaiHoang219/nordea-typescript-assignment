function union(input: string[] | string[][]): string[] {
  return [...new Set(input.flat())];
}

export { union };
