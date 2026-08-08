import Link from "next/link";
import React from "react";

type ToolLinkParserProps = {
    text: string;
    allTools: { name: string; slug: string }[];
    className?: string;
};

export function ToolLinkParser({ text, allTools, className = "" }: ToolLinkParserProps) {
    if (!text || !allTools || allTools.length === 0) return <span className={className}>{text}</span>;

    const validTools = allTools.filter(t => t && typeof t.name === 'string' && t.name.trim().length > 2);
    if (validTools.length === 0) return <span className={className}>{text}</span>;

    // Sort tools by name length descending so we match longer names first (e.g. "ChatGPT Plus" before "ChatGPT")
    const sortedTools = [...validTools].sort((a, b) => b.name.length - a.name.length);

    let parts = [{ type: 'text', content: text, slug: '' }];

    for (const tool of sortedTools) {
        const newParts: { type: string, content: string, slug: string }[] = [];
        
        for (const part of parts) {
            if (part.type === 'tool') {
                newParts.push(part);
                continue;
            }
            
            const lowerContent = part.content.toLowerCase();
            const lowerToolName = tool.name.toLowerCase();
            
            let startIndex = 0;
            let matchIndex = lowerContent.indexOf(lowerToolName, startIndex);
            
            if (matchIndex === -1) {
                newParts.push(part);
                continue;
            }
            
            while (matchIndex !== -1) {
                const isWordStart = matchIndex === 0 || !/[a-z0-9]/i.test(part.content[matchIndex - 1]);
                const isWordEnd = matchIndex + tool.name.length === part.content.length || !/[a-z0-9]/i.test(part.content[matchIndex + tool.name.length]);
                
                if (isWordStart && isWordEnd) {
                    if (matchIndex > startIndex) {
                        newParts.push({
                            type: 'text',
                            content: part.content.substring(startIndex, matchIndex),
                            slug: ''
                        });
                    }
                    newParts.push({
                        type: 'tool',
                        content: part.content.substring(matchIndex, matchIndex + tool.name.length),
                        slug: tool.slug
                    });
                    startIndex = matchIndex + tool.name.length;
                    matchIndex = lowerContent.indexOf(lowerToolName, startIndex);
                } else {
                    matchIndex = lowerContent.indexOf(lowerToolName, matchIndex + 1);
                }
            }
            
            if (startIndex < part.content.length) {
                newParts.push({
                    type: 'text',
                    content: part.content.substring(startIndex),
                    slug: ''
                });
            }
        }
        parts = newParts;
    }

    return (
        <span className={className}>
            {parts.map((part, index) => {
                if (part.type === 'tool') {
                    return (
                        <Link 
                            key={index} 
                            href={`/tool/${part.slug}`} 
                            className="font-bold underline decoration-primary/30 underline-offset-2 hover:decoration-primary hover:text-primary transition-colors inline-block"
                        >
                            {part.content}
                        </Link>
                    );
                }
                return <span key={index}>{part.content}</span>;
            })}
        </span>
    );
}
