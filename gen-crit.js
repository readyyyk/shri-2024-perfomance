// generate-critical-css.js
import { generate } from 'critical';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

generate({
    inline: true,
    extract: true,

    base: path.join(__dirname, 'out/'),
    src: 'index.html',
    css: ['out/_next/static/css/*'],
    target: {
        html: 'index.html',
    },
    width: 1300,
    height: 900,
}).then(({ html }) => {
    console.log('Critical CSS inlined successfully!');
}).catch(err => {
    console.error(err);
});
