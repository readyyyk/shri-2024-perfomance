import {copyFileSync, readFileSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const list = ["index.html", "data.js", "app.js"]

const html = readFileSync(__dirname+"/index.html", "utf-8");
const hash = () => (new Date()).getTime()
writeFileSync(__dirname+"/index.html", html.replace(/app.js\?[^"]+/g, "app.js?"+hash()));

for (const name of list) {
    copyFileSync(path.join(__dirname, name), path.join(__dirname, "out", name));
}

console.log("moved successfully!");
