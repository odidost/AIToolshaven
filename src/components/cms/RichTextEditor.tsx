"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { useEffect, useState } from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const [isMounted, setIsMounted] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Image,
    ],
    content: value,
    onUpdate: ({ editor }) => {
      // Output HTML instead of JSON for compatibility with existing editorial fields
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base focus:outline-none min-h-[150px] p-4 text-slate-800 bg-white border border-slate-200 rounded-b-xl',
      },
    },
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  if (!isMounted) return <div className="h-[200px] bg-slate-50 animate-pulse rounded-xl border border-slate-200"></div>;

  return (
    <div className="flex flex-col border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <div className="flex flex-wrap items-center gap-1 bg-slate-50 border-b border-slate-200 p-2">
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className={`p-2 hover:bg-slate-200 rounded-lg transition-colors ${editor?.isActive('bold') ? 'bg-slate-200 text-primary' : 'text-slate-600'}`}
          title="Bold"
        >
          <span className="material-symbols-outlined text-[18px]">format_bold</span>
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className={`p-2 hover:bg-slate-200 rounded-lg transition-colors ${editor?.isActive('italic') ? 'bg-slate-200 text-primary' : 'text-slate-600'}`}
          title="Italic"
        >
          <span className="material-symbols-outlined text-[18px]">format_italic</span>
        </button>
        <div className="w-px h-6 bg-slate-300 mx-1"></div>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 hover:bg-slate-200 rounded-lg transition-colors ${editor?.isActive('heading', { level: 2 }) ? 'bg-slate-200 text-primary' : 'text-slate-600'}`}
          title="Heading 2"
        >
          <span className="font-bold">H2</span>
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`p-2 hover:bg-slate-200 rounded-lg transition-colors ${editor?.isActive('heading', { level: 3 }) ? 'bg-slate-200 text-primary' : 'text-slate-600'}`}
          title="Heading 3"
        >
          <span className="font-bold">H3</span>
        </button>
        <div className="w-px h-6 bg-slate-300 mx-1"></div>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          className={`p-2 hover:bg-slate-200 rounded-lg transition-colors ${editor?.isActive('bulletList') ? 'bg-slate-200 text-primary' : 'text-slate-600'}`}
          title="Bullet List"
        >
          <span className="material-symbols-outlined text-[18px]">format_list_bulleted</span>
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          className={`p-2 hover:bg-slate-200 rounded-lg transition-colors ${editor?.isActive('orderedList') ? 'bg-slate-200 text-primary' : 'text-slate-600'}`}
          title="Ordered List"
        >
          <span className="material-symbols-outlined text-[18px]">format_list_numbered</span>
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleBlockquote().run()}
          className={`p-2 hover:bg-slate-200 rounded-lg transition-colors ${editor?.isActive('blockquote') ? 'bg-slate-200 text-primary' : 'text-slate-600'}`}
          title="Quote"
        >
          <span className="material-symbols-outlined text-[18px]">format_quote</span>
        </button>
        <div className="w-px h-6 bg-slate-300 mx-1"></div>
        <button
          type="button"
          onClick={() => {
            const url = window.prompt('URL');
            if (url) {
              editor?.chain().focus().setLink({ href: url }).run();
            } else if (url === '') {
              editor?.chain().focus().unsetLink().run();
            }
          }}
          className={`p-2 hover:bg-slate-200 rounded-lg transition-colors ${editor?.isActive('link') ? 'bg-slate-200 text-primary' : 'text-slate-600'}`}
          title="Link"
        >
          <span className="material-symbols-outlined text-[18px]">link</span>
        </button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
