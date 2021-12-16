import * as Vue from 'vue';

// @ts-nocheck
export const createComponent = ({name, selector}: {name: string, selector: string}) => {
    // Vue.config.ignoredElements = [
    //     ...Vue.config.ignoredElements,
    //     selector,
    //     `${selector}-wrapper`
    // ];

    const component = (Vue as any).defineComponent({
        name,
        data() {
            return {
                componentName: null,
                instance: null,
                allListeners: {}
            }
        },
        props: {
            config: Object
        },
        watch: {
            // @ts-ignore
            config: function (newVal, oldVal) {
                let shouldUpdate = false;
                // @ts-ignore
                if (this.instance) {
                    Object.entries(oldVal).forEach(([key, value]) => {
                        if (value !== newVal[key]) {
                            shouldUpdate = true;
                        }
                    });
                    if (newVal && oldVal && Object.keys(newVal).length !== Object.keys(oldVal).length) {
                        shouldUpdate = true;
                    }
                    if (shouldUpdate) {
                        // @ts-ignore
                        this.instance.config = {...newVal};
                    }
                }
            }
        },
        methods: {
            // @ts-ignore
            handleEvnet: function (func, key) {
                // @ts-ignore
                const listener = (e) => func(e.detail);
                // @ts-ignore
                this.$data.allListeners[key] = listener;
                return listener;
            },
            // @ts-ignore
            replaceEventName: function (name) {
                const str = name.substr(2);
                return str.charAt(0).toLowerCase() + str.slice(1);
            }
        },
        // @ts-ignore
        render() {
            const children = typeof this.$slots.default === 'function' ? this.$slots.default() : [];
            // @ts-ignore
            this.el = Vue.h(`${selector}-wrapper`, {}, children);
            // @ts-ignore
            return this.el;
        },
        mounted() {
            this.$nextTick(function () {
                // @ts-ignore
                this.instance = document.createElement(selector);
                // @ts-ignore
                if (this.$props.config) {
                    // @ts-ignore
                    this.instance.config = {...this.$props.config};
                    // @ts-ignore
                    if (this.$el.children && this.$el.children.length) {
                        // @ts-ignore
                        this.instance.appendChild(this.$el.children[0]);
                    }
                    // @ts-ignore
                    this.$el.appendChild(this.instance);
                }
                // @ts-ignore
                Object.entries(this.$attrs).forEach(([key, func]) => {
                    // @ts-ignore
                    if (typeof func === 'function') {
                        // @ts-ignore
                        const eventKey = this.replaceEventName(key);
                        // @ts-ignore
                        this.instance.addEventListener(eventKey, this.handleEvnet(func, eventKey));
                    }

                });
            })
        },
        beforeUnmount() {
            Object.entries(this.$data.allListeners).forEach(([key, listener]) => {
                // @ts-ignore
                this.instance.removeEventListener(key, listener);
            })
        }
    });

    return component;
};

<%  for (let component of components) {%>
    const Fusion<%= classify(component.component) %> = createComponent({name: 'Fusion<%= classify(component.component) %>', selector: '<%= component.name %>'});
<% } %>

export {
    <%  for (let component of components) {%>Fusion<%= classify(component.component) %>,
<% } %>};

    export default Fusion<%= classify(components[0].component) %>;
