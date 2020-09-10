Vue.use(VueLazyload)

const app = new Vue({
    el: "#app",
    data: {
        windowWidth: 0,
    },
    methods: {
    },
    components: {
    },
    mounted() {
        
        // Set window width
        
        this.windowWidth = window.innerWidth;
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth;
        });
    }
});