import React from 'react';
import FileCard from './FileCard';

const CommentItem = ({ comment, onEdit, onDelete }) => {
    return (
        <div className="animate-in fade-in duration-300 group">
            {/* Header Row with Avatar */}
            <div className="flex items-center gap-3 mb-2 px-1">
                {/* Avatar: Light Orange Circle with Orange Text */}
                <div className="w-8 h-8 rounded-full bg-[#ffedd5] text-[#ea580c] flex items-center justify-center text-sm font-bold border border-[#fed7aa] shadow-sm flex-shrink-0">
                    {comment.author.charAt(0)}
                </div>

                {/* Name & Time */}
                <div className="flex-1 flex justify-between items-baseline">
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-100 tracking-tight">{comment.author}</span>
                    <span className="text-xs text-slate-400 dark:text-slate-400 font-medium">{comment.timestamp}</span>
                </div>
            </div>

            {/* MAIN CARD: Detailed "Submitted State" Design */}
            <div className="bg-white dark:bg-[#2d3343] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-4 space-y-4 ml-[52px] transition-all duration-300">
                {/* Current Value Section (Read Only) */}
                <div className="space-y-1">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Current value</p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                        {comment.contextValue || "No context value available"}
                    </p>
                </div>

                {/* Comment Section */}
                <div className="space-y-1">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Comment</p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                        {comment.text}
                    </p>
                </div>

                {/* File Attachment Section */}
                {comment.file && (
                    <div className="space-y-2">
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Supporting document attached</p>
                        <FileCard file={comment.file} />
                    </div>
                )}

                {/* Action Buttons Footer */}
                <div className="flex gap-3 pt-2">
                    <button
                        onClick={onDelete}
                        className="flex-1 py-2.5 px-4 rounded-full border border-orange-300 text-orange-400 dark:border-none dark:bg-[#4a3a41] dark:text-[#e57373] text-xs font-bold hover:bg-orange-50 dark:hover:bg-[#5a4a51] transition-colors cursor-pointer"
                    >
                        Delete Comment
                    </button>
                    <button
                        onClick={onEdit}
                        className="flex-1 py-2.5 px-4 rounded-full bg-[#ef4444] dark:bg-[#6d71f9] text-white text-xs font-bold hover:bg-[#dc2626] dark:hover:bg-[#5c61e8] shadow-sm transition-colors cursor-pointer"
                    >
                        Edit Comment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommentItem;
