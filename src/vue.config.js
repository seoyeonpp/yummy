// vue.config.js

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/assets/scss/_reset.scss";
                    @import "@/assets/scss/_variables.scss";
                    @import "@/assets/scss/_breakpoints.scss";
                    @import "@/assets/scss/_mixins.scss";
                `
            }
        }
    }
};