import React from 'react';
import CommentItem from './CommentItem';
import CommentEditForm from './CommentEditForm';

const CommentList = ({ comments, editingId, onEdit, onDelete, onUpdate, IS_DOC_REQUIRED }) => {
    if (comments.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-3 opacity-60 mt-20">
                <div className="p-4 bg-slate-50 dark:bg-[#2d3343] rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-slate-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                </div>
                <div>
                    <p className="text-slate-500 dark:text-slate-300 font-medium">No comments yet</p>
                    <p className="text-slate-400 dark:text-slate-400 text-xs">Be the first to share your thoughts</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6 h-full">
            {comments.map((comment) => (
                <div key={comment.id}>
                    {editingId === comment.id ? (
                        <CommentEditForm
                            comment={comment}
                            onCancel={() => onEdit(null)}
                            onSave={onUpdate}
                            IS_DOC_REQUIRED={IS_DOC_REQUIRED}
                        />
                    ) : (
                        <CommentItem
                            comment={comment}
                            onEdit={() => onEdit(comment.id)}
                            onDelete={() => onDelete(comment.id)}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default CommentList;
