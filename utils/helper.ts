export default function shuffle(array: any[]): any[] {
  return array
    .map((q) => ({
      value: q,
      index: Math.random(),
    }))
    .sort((q1, q2) => q1.index - q2.index)
    .map(({ index, ...rest }) => rest.value)
}
