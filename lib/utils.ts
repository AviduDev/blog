import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("sin-LK", {
    timeZone: 'Asia/Colombo',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}