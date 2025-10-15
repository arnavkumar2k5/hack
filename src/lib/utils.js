import { twMerge } from "tailwind-merge";

// Simple clsx alternative
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function cn(...inputs) {
  return twMerge(classNames(...inputs));
}
