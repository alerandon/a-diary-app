import fs from 'fs';
import {defineConfig} from 'vite'
import {homedir} from 'os'
import {resolve} from 'path'
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

const host = 'adiaryapp.test'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
    server: detectServerConfig(host),
});

function detectServerConfig(host) {
    let keyPath = resolve(homedir(), `.config/valet/Certificates/${host}.key`)
    let certificatePath = resolve(homedir(), `.config/valet/Certificates/${host}.crt`)

    if (!fs.existsSync(keyPath)) {
        return {}
    }

    if (!fs.existsSync(certificatePath)) {
        return {}
    }

    return {
        hmr: {host},
        host,
        https: {
            key: fs.readFileSync(keyPath),
            cert: fs.readFileSync(certificatePath),
        },
    }
}