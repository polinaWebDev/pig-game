import {defineConfig} from "@hey-api/openapi-ts";

console.log("Config loaded");

export default defineConfig({
    input: "https://devgame.piggyhodl.xyz/api/swagger/v1/swagger.json",
    output: {
        path: 'src/shared/api',
    },
    plugins: [
        {
            name: '@hey-api/client-axios',
            runtimeConfigPath: './heyapi.config.ts',
        },
    ],
});
