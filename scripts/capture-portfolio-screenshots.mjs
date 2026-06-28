import { chromium } from 'playwright';
import { execSync } from 'child_process';
import { mkdirSync } from 'fs';
import path from 'path';

const outDir = path.resolve(process.cwd(), 'src/images/portfolio');

const captures = [
    { url: 'https://balizas-v16-pink.vercel.app/', file: 'balizas-v16.webp', waitMs: 8000 },
    { url: 'https://ai-personal-historian.vercel.app/', file: 'personal-historian.webp', waitMs: 4000 },
    { url: 'https://ai-job-agent-chi.vercel.app/', file: 'ai-job-agent.webp', waitMs: 4000 },
    { url: 'https://kelwatt.fr', file: 'selectra-kelwatt.webp', waitMs: 5000 },
    { url: 'https://selectra.info', file: 'selectra-info.webp', waitMs: 5000 },
];

mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 1,
});

for (const { url, file, waitMs } of captures) {
    const page = await context.newPage();
    console.log(`Capturing ${url} -> ${file}`);
    try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
        await page.waitForTimeout(waitMs);
        const pngPath = path.join(outDir, file.replace('.webp', '.png'));
        await page.screenshot({ path: pngPath, fullPage: false });
        execSync(`cwebp -q 85 "${pngPath}" -o "${path.join(outDir, file)}"`, { stdio: 'inherit' });
        execSync(`rm "${pngPath}"`);
        console.log(`Saved ${file}`);
    } catch (error) {
        console.error(`Failed ${url}:`, error.message);
        process.exitCode = 1;
    } finally {
        await page.close();
    }
}

await browser.close();
console.log('Done.');
