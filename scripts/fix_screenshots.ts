import fs from 'fs';
import path from 'path';

const toolsDir = path.join(process.cwd(), 'src', 'lib', 'data', 'tools');
const files = fs.readdirSync(toolsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

files.forEach(file => {
    const filePath = path.join(toolsDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // For any tool still missing a screenshotUrl, add a generic one
    const toolsRegex = /{\s*id:\s*["'][^"']+["'][\s\S]*?(?=},\n\s*{|}\n];)/g;
    
    content = content.replace(toolsRegex, (toolBlock) => {
        let newBlock = toolBlock;
        
        if (!newBlock.includes('screenshotUrl:')) {
            // Find the ID to generate a placeholder or just use a generic one
            newBlock = newBlock.replace(/(category:\s*["'][^"']+["'],?)/, 'screenshotUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",\n        $1');
        }
        
        return newBlock;
    });

    fs.writeFileSync(filePath, content, 'utf-8');
});
console.log("Fixed remaining screenshots.");
