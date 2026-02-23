import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const scrollToTop = () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const root = document.getElementById('root');
    if (root) root.scrollTop = 0;
};

const ScrollToTop = () => {
    const { pathname } = useLocation();

    // useLayoutEffect fires before paint — no flash of old scroll position
    useLayoutEffect(() => {
        scrollToTop();
    }, [pathname]);

    // Disable browser scroll-restoration so it doesn't fight us
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        return () => {
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'auto';
            }
        };
    }, []);

    return null;
};

export default ScrollToTop;
