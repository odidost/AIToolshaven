import fs from 'fs';
import path from 'path';

const toolsDir = path.join(process.cwd(), 'src', 'lib', 'data', 'tools');
const files = fs.readdirSync(toolsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

// We have workflows.ts
import { workflows } from '../src/lib/workflows';

files.forEach(file => {
    const filePath = path.join(toolsDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Add screenshotUrl if missing
    // Match imageUrl: "...", and if there is no screenshotUrl nearby, add it.
    // To be safe, we'll replace `imageUrl: (.*),` with `screenshotUrl: $1,\n        imageUrl: $1,`
    // but only if screenshotUrl is not already in that block.
    
    // Let's use a replacer function to process each tool block.
    // A tool block starts with `{` and ends with `}`.
    // It's easier to just do a global replace if screenshotUrl is not present.
    const toolsRegex = /{\s*id:\s*["'][^"']+["'][\s\S]*?(?=},\n\s*{|}\n];)/g;
    
    content = content.replace(toolsRegex, (toolBlock) => {
        let newBlock = toolBlock;
        
        // 1. Add screenshotUrl
        if (!newBlock.includes('screenshotUrl:')) {
            newBlock = newBlock.replace(/(imageUrl:\s*(["'][^"']+["']),?)/, 'screenshotUrl: $2,\n        $1');
        }

        // 2. Add workflows
        // Get the tool name to match against workflows.ts
        const nameMatch = newBlock.match(/name:\s*["']([^"']+)["']/);
        const idMatch = newBlock.match(/id:\s*["']([^"']+)["']/);
        
        if (nameMatch && idMatch) {
            const toolName = nameMatch[1];
            const matchingWorkflows = workflows.filter(w => w.tools.includes(toolName)).map(w => w.slug);
            
            if (matchingWorkflows.length > 0 && !newBlock.includes('workflows:')) {
                const workflowsStr = `workflows: ${JSON.stringify(matchingWorkflows)},`;
                // Insert it before tags:
                newBlock = newBlock.replace(/(tags:\s*\[)/, `${workflowsStr}\n        $1`);
            }
        }
        
        return newBlock;
    });

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Processed ${file}`);
});
