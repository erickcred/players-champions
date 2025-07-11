export const isObjectNullOrUndefinedOrEmpty = (obj: any) => {
  if (obj === null || obj === undefined || Object.keys(obj).length === 0) {
    return true;
  }
  return false;
}