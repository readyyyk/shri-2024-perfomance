import {readFileSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const s1 = readFileSync(__dirname+"/example-snap.html", "utf-8");
const s2 = readFileSync(__dirname+"/my-snap.html", "utf-8");

const outWidth = 40;

const proc = (s) => s
    // .replaceAll(/<script.+<\/script>/g, "")
    // .replaceAll(/<style.+<\/style>/g, "")
    // .replaceAll(/<link[^>]+>/g, "")
    // .replaceAll(/<meta[^>]+>/g, "")
    .replaceAll(/data-tab="[^"]+"/g, "")
    .replaceAll(/[\n ]/g, "")
    .split("")
    .reduce((a,e,i)=> {
        if (i % outWidth === 0) {
            return [...a, [e]];
        } else {
            a.at(-1).push(e);
            return a;
        }
    }, [])
    .map(a=>a.join(""))
    .join("\n");

const ss1 = proc(s1);
const ss2 = proc(s2);


writeFileSync(__dirname+"/out1", ss1)
writeFileSync(__dirname+"/out2", ss2)


const l = Math.max(ss2.length, ss1.length);
for (let i = 0; i < l; i++) {
    if (ss2[i] !== ss1[i]) {
        console.error(ss1.slice(i-5, i+5) + "      " + ss2.slice(i-5, i+5));
        throw new Error();
    }
}

console.log(ss1, "\n", ss2);
