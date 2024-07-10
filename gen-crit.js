const CUSTOM_TO_ELIMINATE_BASE = "\/shri-2024-perfomance";
const linksWithBaseRegex = new RegExp('<link rel="stylesheet" href="'+CUSTOM_TO_ELIMINATE_BASE+'([^"]+\\.css)"(.+)>', 'g');
const linksWithoutBaseRegex = new RegExp('<link rel="stylesheet" href="([^"]+\\.css)"(.+)>', 'g');

import { generate } from 'critical';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync, writeFileSync } from 'node:fs';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

const outDir = path.join(__dirname, 'out');

async function generateCriticalCSS() {
    const filePath = path.join(outDir, 'index.html');
    let htmlContent = readFileSync(filePath, 'utf-8');
    writeFileSync(filePath, htmlContent.replace(
        linksWithBaseRegex,
        (substring, p1, p2)=>`<link rel="stylesheet" href="${p1}" ${p2}>`),
        'utf-8');

    try {
        await generate({
            inline: true,
            base: outDir,
            src: 'index.html',
            target: {
                html: 'index.html',
            },
            dimensions: [
                {
                    height: 900,
                    width: 1300,
                },
                {
                    height: 600,
                    width: 300,
                },
            ],
            extract: true,
        });
        console.log(`Critical CSS for index.html inlined successfully!`);
    } catch (err) {
        console.error(`Failed to inline critical CSS for index.html:`, err);
    }

    let newHtmlContent = readFileSync(filePath, 'utf-8');
    writeFileSync(filePath, htmlContent.replace(
            linksWithoutBaseRegex,
            (substring, p1, p2)=>`<link rel="stylesheet" href="${CUSTOM_TO_ELIMINATE_BASE}${p1}" ${p2}>`),
        'utf-8');
}

generateCriticalCSS();
