import type { GoalDetails } from "@/lib/data/goal-details";

type GoalEditorialProps = {
    content: GoalDetails["editorialContent"];
};

export function GoalEditorial({ content }: GoalEditorialProps) {
    if (!content) return null;

    return (
        <section className="mb-16 max-w-4xl mx-auto">
            <div className="rounded-3xl bg-surface p-8 md:p-12 border border-outline shadow-sm prose prose-neutral prose-lg dark:prose-invert max-w-none">
                {/* 
                  Note: In a real app, you'd use a markdown parser here if the content is markdown.
                  Since we have a mix of plain text and markdown in our placeholder data, 
                  we'll split it by newlines for basic formatting.
                */}
                {content.split('\n').map((paragraph, index) => {
                    const trimmed = paragraph.trim();
                    if (!trimmed) return null;
                    
                    if (trimmed.startsWith('### ')) {
                        return <h3 key={index} className="text-2xl font-bold mt-8 mb-4">{trimmed.replace('### ', '')}</h3>;
                    }
                    if (trimmed.startsWith('## ')) {
                        return <h2 key={index} className="text-fluid-h2 font-bold mt-10 mb-5">{trimmed.replace('## ', '')}</h2>;
                    }
                    if (trimmed.startsWith('# ')) {
                        return <h1 key={index} className="text-4xl font-bold mt-12 mb-6">{trimmed.replace('# ', '')}</h1>;
                    }
                    
                    return <p key={index} className="mb-4 leading-relaxed text-on-surface-variant">{trimmed}</p>;
                })}
            </div>
        </section>
    );
}
