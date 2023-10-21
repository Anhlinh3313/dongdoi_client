import { useEffect, useRef } from 'react';

const Marquee = ({ children }) => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marqueeElement = marqueeRef.current;
        let position = 0;
        const step = 0.5; // Tốc độ cuộn dọc

        const animateMarquee = () => {
            position -= step;
            marqueeElement.style.transform = `translateY(${position}px)`;

            if (position <= -marqueeElement.clientHeight) {
                position = 0;
            }

            requestAnimationFrame(animateMarquee);
        };

        animateMarquee();
    }, []);

    return (
        <div ref={marqueeRef} >
            {children}
        </div>
    );
};

export default Marquee;
