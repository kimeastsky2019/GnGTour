export type Role = "patient" | "doctor";

export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem("authToken");
}

export function getRole(): Role | null {
  if (typeof window === "undefined") return null;
  return (window.localStorage.getItem("role") as Role) || null;
}

export function requireRole(role: Role) {
  if (typeof window === "undefined") return;
  const current = getRole();
  if (current !== role) {
    // In a real app, redirect to /auth or show error
    console.warn("Role mismatch, expected", role, "got", current);
  }
}