export const ADMIN_EMAIL = "admin@lpl.com";
export const ADMIN_PASSWORD = "123456";

export function isLoggedIn() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("lpl_admin") === "true";
}
