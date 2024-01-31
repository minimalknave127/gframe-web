import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// if is nav item active
export function isActive(pathname: string, path: string, exact?: boolean) {
  if ((!exact && pathname.startsWith(path)) || (exact && path === pathname)) {
    return true;
  }
  return false;
}
