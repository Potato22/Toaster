import {
    defineConfig
} from 'vite'
export default defineConfig({
    assetsInclude: ['**/*.svg'],
    // Base public path
    base: '/Toaster/',

    // Server options
    //server: {
    //    port: 3000,
    //    open: true
    //},

    // Build options
    build: {
        outDir: 'dist',
        minify: true
    },

    // Resolve aliases
    resolve: {
        alias: {
            '@': '/src'
        }
    }
})