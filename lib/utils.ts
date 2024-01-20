import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function genId() {
  return uuidv4().replaceAll("-", "").slice(0, 24);
}

export function genRand(from: number, to: number) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

export const value = new Intl.NumberFormat("co-CO", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function unformatNumber(strNum: string) {
  return Number(strNum.replace(/,/g, ""));
}
