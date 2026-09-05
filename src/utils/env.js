export function getEnv(name, fallback = "") {
  const value = import.meta.env?.[name];
  return value ?? fallback;
}
