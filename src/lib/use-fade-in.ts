import { useEffect, useRef } from "react";
import { fadeInObserver } from "./fade-in-observer";

export function useFadeIn<T extends HTMLElement>() {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            el.classList.add("is-visible");
            return;
        }

        fadeInObserver.observe(el, (target) => {
            target.classList.add("is-visible");
        });
    }, []);

    return ref;
}