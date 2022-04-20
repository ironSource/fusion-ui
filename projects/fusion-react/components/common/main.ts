import {useEffect, useRef, createElement} from 'react';

export function FusionWrapper(Component: any) {
    // @ts-ignore
    return function ({config, children, ...callbacks}) {
        const ref = useRef();

        useEffect(() => {
            // @ts-ignore
            ref.current.config = {...config};
        }, [config]);

        useEffect(() => {
            const eventHandlers: any = [];
            const self: any = ref.current;
            Object.entries(callbacks || {})
                .filter(([_, callback]) => typeof callback === 'function')
                .forEach(([key, callback]) => {
                    const handler = (e: any) => callback(e.detail);

                    self.addEventListener(key, handler);
                    eventHandlers.push({key, handler});
                });

            return () => eventHandlers.forEach(({key, handler}: {key: any; handler: any}) => self.removeEventListener(key, handler));
        }, [...Object.values(callbacks || {})]);

        return createElement(Component, {ref}, [children]);
    };
}
