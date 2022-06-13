// vue.config.js

module.exports = {
    publicPath: 'yummy',
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/assets/scss/_variables.scss";
                `
            }
        }
    }
};