import React, { useState, useEffect } from 'react';
import CommentHeader from './Comments/CommentHeader';
import CommentList from './Comments/CommentList';
import CommentAddForm from './Comments/CommentAddForm';

// --- CONFIGURATION ---
const IS_DOC_REQUIRED = true;

// --- HELPERS ---
const formatTimestamp = () => {
    const now = new Date();
    return now.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
};

// --- MOCK DATA ---
const INITIAL_COMMENTS = [
    {
        id: 1,
        author: "Vishwas Gopal Ayyar",
        timestamp: "Jan 1, 12:45 PM",
        text: "All values form Scheme 1 and Scheme 4 are breached",
        fieldLabel: "Risk Assessment",
        contextValue: "The quick brown fox jumps over the lazy dog", // Mock context for "Current Value"
        file: null
    },
    {
        id: 2,
        author: "Pratap Agarwal",
        timestamp: "Jan 3, 9:45 PM",
        text: "Please provide a reason for the change",
        fieldLabel: "Validation",
        contextValue: "The quick brown fox jumps over the lazy dog",
        file: { name: "File name.extension", size: 24641536 } // Mock file with size ~23.5MB
    }
];

const CommentComponent = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved === 'dark';
    });
    const [isOpen, setIsOpen] = useState(false);
    const [comments, setComments] = useState(() => {
        try {
            const saved = localStorage.getItem('comments');
            return saved ? JSON.parse(saved) : INITIAL_COMMENTS;
        } catch (e) {
            console.error("Failed to parse comments from local storage", e);
            return INITIAL_COMMENTS;
        }
    });

    useEffect(() => {
        const serializableComments = comments.map(c => {
            if (c.file && (c.file instanceof File || (typeof c.file === 'object' && c.file.name))) {
                return {
                    ...c,
                    file: {
                        name: c.file.name,
                        size: c.file.size,
                        type: c.file.type || 'application/pdf'
                    }
                };
            }
            return c;
        });
        localStorage.setItem('comments', JSON.stringify(serializableComments));
    }, [comments]);

    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const [editingId, setEditingId] = useState(null);

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-10 right-10 bg-white border border-slate-200 shadow-lg text-slate-700 font-medium py-2 px-4 rounded-full flex items-center gap-2 hover:bg-slate-50 transition-all hover:scale-105 cursor-pointer"
            >
                Comments
                <span className="bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {comments.length}
                </span>
            </button>
        );
    }

    const handleDelete = (id) => {
        setComments(comments.filter(c => c.id !== id));
    };

    const handleAddComment = ({ text, fieldLabel, file }) => {
        const newId = Math.max(...comments.map(c => c.id), 0) + 1;
        const newEntry = {
            id: newId,
            author: "You",
            timestamp: formatTimestamp(),
            text,
            fieldLabel,
            contextValue: "The quick brown fox jumps over the lazy dog",
            file
        };
        setComments([...comments, newEntry]);
    };

    const handleUpdateComment = (id, updatedText, updatedFile, updatedFieldLabel) => {
        setComments(comments.map(c =>
            c.id === id ? { ...c, text: updatedText, file: updatedFile, fieldLabel: updatedFieldLabel } : c
        ));
        setEditingId(null);
    };

    return (
        <div className="w-full max-w-md mx-auto font-sans fixed bottom-4 right-4 z-50">
            <div className="bg-white dark:bg-[#3b425e] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col max-h-[85vh] transition-all duration-300">
                <CommentHeader
                    isDarkMode={isDarkMode}
                    onToggleTheme={() => setIsDarkMode(!isDarkMode)}
                    onClose={() => setIsOpen(false)}
                    commentsCount={comments.length}
                />
                <div className="p-6 overflow-y-auto overflow-x-hidden flex-1 space-y-6 bg-white dark:bg-[#3b425e] custom-scrollbar transition-all duration-300">
                    <CommentList
                        comments={comments}
                        editingId={editingId}
                        onEdit={setEditingId}
                        onDelete={handleDelete}
                        onUpdate={handleUpdateComment}
                        IS_DOC_REQUIRED={IS_DOC_REQUIRED}
                    />
                </div>
                <CommentAddForm
                    onAdd={handleAddComment}
                    IS_DOC_REQUIRED={IS_DOC_REQUIRED}
                />
            </div>
        </div>
    );
};

export default CommentComponent;
