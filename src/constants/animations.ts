import { MotionProps } from "framer-motion"

export const createScrollAnimation = (): MotionProps => {
    return {
        initial: {
            opacity: 0, scale: 0.9
        },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { amount: 0.2 },
        transition: { duration: 0.4, ease: "easeInOut" }
    }
}