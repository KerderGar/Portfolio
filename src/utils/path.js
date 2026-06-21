export function withBase(path) {
  return __BASE_PATH__ + '/' + path.replace(/^\//, '');
}
