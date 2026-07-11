type AuthorAttributionProps = {
    authorName?: string;
    lastUpdated?: string;
};

export function AuthorAttribution({ 
    authorName = "AIToolsHaven Editorial Team", 
    lastUpdated = "July 11, 2026" 
}: AuthorAttributionProps) {
    return (
        <div className="flex items-center gap-2 text-[13px] text-on-surface-variant">
            <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">edit_document</span>
                By {authorName}
            </span>
            <span>•</span>
            <span>Last Updated: {lastUpdated}</span>
        </div>
    );
}
