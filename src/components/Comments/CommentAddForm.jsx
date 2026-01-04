import React, { useState, useRef } from 'react';

const CommentAddForm = ({ onAdd, IS_DOC_REQUIRED }) => {
    const [isAddingMode, setIsAddingMode] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [newFieldLabel, setNewFieldLabel] = useState('');
    const [newFile, setNewFile] = useState(null);
    const [errors, setErrors] = useState({});
    const newFileInputRef = useRef(null);

    const handleAdd = () => {
        const newErrors = {};
        if (!newFieldLabel.trim()) newErrors.fieldLabel = "Field label is required";
        if (!newComment.trim()) newErrors.comment = "Comment is required";
        if (IS_DOC_REQUIRED && !newFile) newErrors.file = "Supporting document is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        onAdd({
            text: newComment,
            fieldLabel: newFieldLabel || "New Comment",
            file: newFile
        });

        // Reset Form
        setNewComment('');
        setNewFieldLabel('');
        setNewFile(null);
        if (newFileInputRef.current) newFileInputRef.current.value = '';
        setErrors({});
        setIsAddingMode(false);
    };

    const handleDiscard = () => {
        setIsAddingMode(false);
        setNewComment('');
        setNewFieldLabel('');
        setNewFile(null);
        if (newFileInputRef.current) newFileInputRef.current.value = '';
        setErrors({});
    };

    return (
        <div className="p-3 sm:p-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-[#2d3343] transition-all duration-300">
            {isAddingMode ? (
                <div className="bg-white dark:bg-[#3b425e] p-3 sm:p-4 rounded-xl border border-orange-300 dark:border-slate-600 shadow-md animate-in fade-in slide-in-from-bottom-2 duration-200 transition-all duration-300">
                    <div className="space-y-4">
                        {/* Current Value Section */}
                        <div className="space-y-1">
                            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Current value</p>
                            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                                The quick brown fox jumps over the lazy dog
                            </p>
                        </div>

                        {/* Field Label Input */}
                        <div className="space-y-1">
                            <label className="text-[10px] text-slate-400 font-semibold">Field label</label>
                            <input
                                type="text"
                                value={newFieldLabel}
                                onChange={(e) => {
                                    setNewFieldLabel(e.target.value);
                                    if (errors.fieldLabel) setErrors({ ...errors, fieldLabel: null });
                                }}
                                placeholder="Field Label"
                                className={`w-full block border rounded-lg px-3 py-2 text-sm text-slate-700 dark:bg-white focus:outline-none ${errors.fieldLabel ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-orange-400 dark:focus:border-[#6d71f9]'}`}
                            />
                            {errors.fieldLabel && <p className="text-[10px] text-red-500 pl-1 font-medium">{errors.fieldLabel}</p>}
                        </div>

                        {/* Comment Textarea */}
                        <div className="space-y-1">
                            <label className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Comment</label>
                            <textarea
                                value={newComment}
                                onChange={(e) => {
                                    setNewComment(e.target.value);
                                    if (errors.comment) setErrors({ ...errors, comment: null });
                                }}
                                placeholder="Please Provide a reason for the changes"
                                className={`w-full block border rounded-lg p-3 text-sm text-slate-700 dark:bg-white focus:outline-none min-h-[80px] custom-scrollbar ${errors.comment ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-orange-400 dark:focus:border-[#6d71f9]'}`}
                            />
                            {errors.comment && <p className="text-[10px] text-red-500 pl-1 font-medium">{errors.comment}</p>}
                        </div>

                        {/* Upload Support Document */}
                        <div className="space-y-1">
                            <label className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Upload support document</label>
                            <div
                                className={`flex justify-between items-center border rounded-lg px-3 py-2 cursor-pointer transition-colors bg-white group ${errors.file ? 'border-red-400 hover:border-red-400' : 'border-slate-200 hover:border-orange-300 dark:hover:border-[#6d71f9]'}`}
                                onClick={() => newFileInputRef.current?.click()}
                            >
                                <span className={`text-sm ${newFile ? 'text-slate-700 font-medium' : 'text-slate-400'}`}>
                                    {newFile ? newFile.name : "Select a file to upload"}
                                </span>

                                <div className="flex items-center gap-2">
                                    {newFile && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setNewFile(null);
                                                if (newFileInputRef.current) newFileInputRef.current.value = '';
                                            }}
                                            className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-red-500 cursor-pointer"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    )}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-slate-400 group-hover:text-slate-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                    </svg>
                                </div>
                                <input type="file" ref={newFileInputRef} className="hidden"
                                    onChange={(e) => {
                                        if (e.target.files && e.target.files[0]) {
                                            setNewFile(e.target.files[0]);
                                            if (errors.file) setErrors({ ...errors, file: null });
                                        }
                                    }}
                                />
                            </div>
                            {errors.file && <p className="text-[10px] text-red-500 pl-1 font-medium">{errors.file}</p>}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-2">
                            <button
                                onClick={handleDiscard}
                                className="flex-1 py-2 px-4 rounded-full border border-orange-300 text-orange-400 dark:border-none dark:bg-[#4a3a41] dark:text-[#e57373] text-sm font-bold hover:bg-orange-50 dark:hover:bg-[#5a4a51] transition-colors cursor-pointer"
                            >
                                Discard
                            </button>
                            <button
                                onClick={handleAdd}
                                className="flex-1 py-2 px-4 rounded-full bg-[#ef4444] dark:bg-[#6d71f9] text-white text-sm font-bold hover:bg-[#dc2626] dark:hover:bg-[#5c61e8] shadow-sm transition-colors cursor-pointer"
                            >
                                Comment
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsAddingMode(true)}
                    className="w-full bg-white dark:bg-[#2d3343] border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-left shadow-sm hover:shadow-md hover:border-orange-200 dark:hover:border-slate-500 transition-all group cursor-pointer"
                >
                    <span className="text-slate-400 dark:text-slate-400 text-sm group-hover:text-slate-600 dark:group-hover:text-slate-200">Enter comment...</span>
                </button>
            )}
        </div>
    );
};

export default CommentAddForm;
