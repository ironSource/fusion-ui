import Vue from 'vue';

const createComponent = ({name, selector}: { name: string, selector: string }) => {
    Vue.config.ignoredElements = [
        ...Vue.config.ignoredElements,
        selector,
        `${selector}-wrapper`
    ];
    return Vue.extend({
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
            config: function (newVal, oldVal) {
                let shouldUpdate = false;
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
                        (this.instance as any).config = {...newVal};
                    }
                }
            }
        },
        methods: {
            handleEvnet: function (func: any, key: string) {
                const listener = (e: CustomEvent) => func(e.detail);
                this.$data.allListeners[key] = listener;
                return listener;
            }
        },
        render(createElement) {
            // @ts-ignore
            this.el = createElement(`${selector}-wrapper`, this.$slots.default);
            // @ts-ignore
            return this.el;
        },
        mounted() {
            this.$nextTick(function () {
                // @ts-ignore
                this.instance = document.createElement(selector);
                if (this.$props.config) {
                    // @ts-ignore
                    this.instance.config = {...this.$props.config};
                    // @ts-ignore
                    if (this.el.elm.children && this.el.elm.children.length) {
                        // @ts-ignore
                        this.instance.appendChild(this.el.elm.children[0]);
                    }
                    // @ts-ignore
                    this.el.elm.appendChild(this.instance);
                }
                Object.entries(this.$listeners).forEach(([key, func]) => {
                    // @ts-ignore
                    this.instance.addEventListener(key, this.handleEvnet(func, key));
                });
            })
        },
        beforeDestroy() {
            Object.entries(this.$data.allListeners).forEach(([key, listener]) => {
                // @ts-ignore
                this.instance.removeEventListener(key, listener);
            })
        }
    });
};

<%  for (let component of components) {%>
    const Fusion<%= classify(component.component) %> = createComponent({name: 'Fusion<%= classify(component.component) %>', selector: '<%= component.name %>'});
    <% } %>

export {
<%  for (let component of components) {%>Fusion<%= classify(component.component) %>,
<% } %>};

export default Fusion<%= classify(components[0].component) %>;
