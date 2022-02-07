import { useEffect, useRef, createElement} from 'react';

function FusionWrapper(Component) {
    return function ({config, children, ...callbacks}) {

        const ref = useRef();

        useEffect(() => {
            // @ts-ignore
            ref.current.config = {...config};
        }, [config])

        useEffect(() => {
            const eventHandlers = [];
            const self = ref.current;
            Object.entries(callbacks || {})
                .filter(([_, callback]) => typeof callback === 'function')
                .forEach(([key, callback]) => {
                    const handler = (e) => callback(e.detail);
                    // @ts-ignore
                    self.addEventListener(key, handler);
                    eventHandlers.push({key, handler});
                });
            // @ts-ignore
            return () => eventHandlers.forEach(({key, handler}) => self.removeEventListener(key, handler));
        }, [...Object.values(callbacks || {})])

        // @ts-ignore
        return createElement(Component, {ref},[children]);
    }
}

<%  for (let component of components) {%>
    export const Fusion<%= classify(component.component) %> = FusionWrapper('<%= component.name %>');
<% } %>
