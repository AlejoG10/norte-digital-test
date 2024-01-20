import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";

/**
 * used to merge string into tailwindcss classes
 * @param inputs classes to merge
 * @returns the tailwindcss classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * generates a random id of 25 chars
 * @returns random id
 */
export function genId() {
  return uuidv4().replaceAll("-", "").slice(0, 24);
}

/**
 * formats a number into an accounting notation string
 * example: 1234 -> 1,234
 */
export const value = new Intl.NumberFormat("co-CO", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

/**
 * unformats an accounting notation string
 * @param strNum the string to unformat
 * @returns number
 */
export function unformatNumber(strNum: string) {
  return Number(strNum.replace(/,/g, ""));
}
