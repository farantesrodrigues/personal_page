System.config({
    baseURL: "/",
    defaultJSExtensions: true,
    transpiler: "typescript",
    paths: {
        "github:*": "jspm_packages/github/*",
        "npm:*": "jspm_packages/npm/*"
    },

    map: {
        "ts": "github:frankwallis/plugin-typescript@4.0.2",
        "typescript": "npm:typescript@1.8.7",
        "github:frankwallis/plugin-typescript@4.0.2": {
            "typescript": "npm:typescript@1.8.7"
        }
    }
});