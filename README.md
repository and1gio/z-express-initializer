# z-express-initializer

### app/config/z-app.js
```js
exports.default = (app) => {
    return {
        zApp: {
            port: 8000,
            debug: true,
            viewEngine: {
                type: 'pug',
                dir: 'views'
            },
            staticFolder: 'public'
        }
    }
};
```
