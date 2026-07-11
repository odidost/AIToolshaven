/* eslint-disable */
import fs from 'fs';
import path from 'path';

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(dirPath);
  });
}

walk('./src', (filePath) => {
  if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let changed = false;

    // Fix catch (e: any) -> catch (e: unknown)
    if (content.includes('catch (e: any)')) {
      content = content.replace(/catch \(e: any\)/g, 'catch (e: unknown)');
      changed = true;
    }
    // Fix catch (error: any) -> catch (error: unknown)
    if (content.includes('catch (error: any)')) {
      content = content.replace(/catch \(error: any\)/g, 'catch (error: unknown)');
      changed = true;
    }
    
    // API routes any fixes:
    if (content.includes('manifest: Record<string, any>')) {
      content = content.replace(/manifest: Record<string, any>/g, 'manifest: Record<string, unknown>');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log('Fixed', filePath);
    }
  }
});
