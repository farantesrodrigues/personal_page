System.config({
    transpiler: 'typescript',
    packages: {
        "app": {
            "defaultExtension": "ts"
        }
    },
    paths: {
        "typescript": "node_modules/typescript/lib/typescript.js",
        'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
        "systemjs": "jspm_packages/system.js"
    },
    map: {
        "ts": "jspm_packages/github/frankwallis/plugin-typescript@4.0.2.js",
        "typescript": "node_modules/typescript/lib/typescript.js"
    }
});
