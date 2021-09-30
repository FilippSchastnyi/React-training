interface Tree extends Record<string, Tree | string> {}

export default function flattenTree(tree: Tree): Record<string, string> {
  return {};
}