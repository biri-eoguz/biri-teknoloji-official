"use client";

type Callback = (el: HTMLElement) => void;

class FadeInObserver {
    private observer: IntersectionObserver;
    private callbacks = new WeakMap<Element, Callback>();

    constructor() {
        this.observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;

                const cb = this.callbacks.get(entry.target);
                if (cb) {
                    cb(entry.target as HTMLElement);
                    this.observer.unobserve(entry.target);
                    this.callbacks.delete(entry.target);
                }
            }
        }, {
            threshold: 0.3,
            rootMargin: "0px 0px -10% 0px"
        })
    }

    observe(el: HTMLElement, cb: Callback) {
        this.callbacks.set(el, cb);
        this.observer.observe(el);
    }
}

let instance: FadeInObserver | null = null;

export function getFadeInObserver() {
    if (typeof window === "undefined") return null;

    if (!instance) {
        instance = new FadeInObserver();
    }

    return instance;
}