/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function deepEqual(a: any, b: any): boolean {
  return _deepEqual(a, b, new WeakMap(), new WeakMap());
}

function _deepEqual(
  a: any,
  b: any,
  aStack: WeakMap<object, any>,
  bStack: WeakMap<object, any>
): boolean {
  // Strict equality short-circuit (also covers same object reference)
  if (a === b) return true;

  // Handle primitive mismatches and null/undefined
  if (a == null || b == null) return a === b;
  if (typeof a !== "object" && typeof b !== "object") return a === b;

  // Dates
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  // RegExp
  if (a instanceof RegExp && b instanceof RegExp) {
    return a.source === b.source && a.flags === b.flags;
  }

  // Typed arrays (Int8Array etc.) — compare buffers/contents
  if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
    const viewA = a as Uint8Array;
    const viewB = b as Uint8Array;
    if (a.constructor !== b.constructor) return false;
    if (viewA.length !== viewB.length) return false;
    for (let i = 0; i < viewA.length; i++) {
      if (viewA[i] !== viewB[i]) return false;
    }
    return true;
  }

  // Array
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!_deepEqual(a[i], b[i], aStack, bStack)) return false;
    }
    return true;
  }

  // Map
  if (a instanceof Map && b instanceof Map) {
    if (a.size !== b.size) return false;
    for (const [key, val] of a) {
      if (!b.has(key)) return false;
      if (!_deepEqual(val, b.get(key), aStack, bStack)) return false;
    }
    return true;
  }

  // Set (order-independent)
  if (a instanceof Set && b instanceof Set) {
    if (a.size !== b.size) return false;
    // For each element in a, find an equal element in b (O(n^2) worst-case)
    const bValues = Array.from(b);
    outer: for (const valA of a) {
      for (let i = 0; i < bValues.length; i++) {
        if (_deepEqual(valA, bValues[i], aStack, bStack)) {
          bValues.splice(i, 1);
          continue outer;
        }
      }
      return false; // no matching element found
    }
    return true;
  }

  // If both are plain objects or other objects: handle circular refs
  if (typeof a === "object" && typeof b === "object") {
    // Circular reference check
    if (aStack.has(a)) {
      return bStack.has(b) && aStack.get(a) === bStack.get(b);
    }
    aStack.set(a, b);
    bStack.set(b, a);

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;

    // Ensure same set of keys
    for (const key of keysA) {
      if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
    }

    // Deep compare each key
    for (const key of keysA) {
      if (!_deepEqual(a[key], b[key], aStack, bStack)) return false;
    }

    // done for objects
    return true;
  }

  // Fallback (different types etc.)
  return false;
}

// export function compare(a: any, b: any): boolean {
//   console.log("comparinng..");
//   console.log(a);
//   console.log(b);
//   console.log("--------------");
//   if (Array.isArray(a)) {
//     if (!Array.isArray(b)) return false;
//     if (a.length !== b.length) return false;
//     let isItincludes = true;
//     a.forEach((x) => {
//       if (!includes(b, x)) {
//         isItincludes = false;
//         return;
//       }
//     });
//     if (!isItincludes) return false;
//     isItincludes = true;
//     b.forEach((x) => {
//       if (!includes(a, x)) {
//         isItincludes = false;
//         return;
//       }
//     });
//     if (!isItincludes) return false;
//     return true;
//   }
//   if (!(a instanceof Object)) {
//     if (a !== b) console.log("a====b", a, b);
//     return Boolean(a === b);
//   } else if (a instanceof Object) {
//     console.log("comparing objects");
//     const objA = a as Record<string, any>;
//     const objB = b as Record<string, any>;
//     const keysA = Object.keys(objA);
//     const keysB = Object.keys(objB);
//     console.log("59", keysA.length, "vs", keysB.length);
//     if (keysA.length !== keysB.length) return false;
//     console.log("61", !compare(keysA, keysB), "\n", keysA, keysB);
//     if (!compare(keysA, keysB)) return false;
//     keysA.forEach((x: string) => {
//       const result = compare(objA[x], objB[x]);
//       console.log(objA[x], " vs ", objB[x], "=====>", result);
//       if (!result) return false;
//     });
//   }
//   console.log("ending");
//   return true;
// }

// function includes(arr: any[], obj: any) {
//   let b = false;
//   if (obj instanceof Object) {
//     arr.forEach((r) => {
//       if (compare(r, obj)) {
//         b = true;
//         return true;
//       }
//     });
//     return b;
//   }
//   return arr.includes(obj);
// }
