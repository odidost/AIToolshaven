import React from "react";

type CategoryBackgroundProps = {
  slug: string;
};

export function CategoryBackground({ slug }: CategoryBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Universal radial glow */}
      <div 
        className="absolute right-[-10%] top-[-20%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(var(--category-accent), 0.4) 0%, transparent 70%)' }}
      />
      
      {/* Category-specific decorative elements */}
      <div className="absolute right-0 bottom-0 w-full h-full opacity-[0.03] text-[rgb(var(--category-accent))]">
        {slug === "text-generation" && (
          <svg className="absolute -right-20 -bottom-20 w-[600px] h-[600px] -rotate-12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
          </svg>
        )}
        
        {slug === "image-generation" && (
          <svg className="absolute -right-10 top-10 w-[500px] h-[500px] rotate-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/>
          </svg>
        )}

        {slug === "video-creation" && (
          <svg className="absolute right-10 -bottom-10 w-[550px] h-[550px] -rotate-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
          </svg>
        )}

        {slug === "coding-assistants" && (
          <svg className="absolute -right-20 top-20 w-[600px] h-[600px] rotate-12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
          </svg>
        )}

        {slug === "audio-voice" && (
          <svg className="absolute right-0 top-10 w-[500px] h-[500px] -rotate-12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        )}

        {slug === "marketing-sales" && (
          <svg className="absolute -right-10 bottom-0 w-[550px] h-[550px] rotate-12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
          </svg>
        )}

        {slug === "productivity" && (
          <svg className="absolute right-0 bottom-10 w-[500px] h-[500px] rotate-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
          </svg>
        )}
      </div>
    </div>
  );
}
