import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const UsCards = ({ item, delay }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return <motion.div ref={ref}
        variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay }} className="card">
        <img src={ item.img } />
        <h3>{item.title}</h3>
        <p>{item.p}</p>
        <div className="plus">*****</div>
    </motion.div>
}