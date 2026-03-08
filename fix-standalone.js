const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(file => {
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        if (stat.isDirectory()) {
            walk(filepath, callback);
        } else if (file.endsWith('.component.ts')) {
            callback(filepath);
        }
    });
}

const pagesDir = path.join(process.cwd(), 'src/app/pages');

walk(pagesDir, (filepath) => {
    let content = fs.readFileSync(filepath, 'utf8');
    if (content.includes('@Component') && !content.includes('standalone: true')) {
        console.log(`Updating ${filepath}`);
        const updatedContent = content.replace(/@Component\(\{/, '@Component({\n    standalone: true,');
        fs.writeFileSync(filepath, updatedContent, 'utf8');
    }
});
