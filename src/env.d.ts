/// <reference types="astro/client" />

interface Window {
  __lenis?: {
    on: (event: string, callback: () => void) => void;
    raf: (time: number) => void;
  };
}
