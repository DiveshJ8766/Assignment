import React from 'react';

const FileCard = ({ file, onRemove = null }) => {
    if (!file) return null;

    return (
        <div className="flex items-center gap-3 border border-slate-200 dark:border-slate-700 rounded-lg p-2 bg-white dark:bg-[#3b425e] hover:border-orange-200 dark:hover:border-slate-500 transition-all duration-300">
            {/* Red PDF Icon */}
            <div className="w-8 h-8 flex items-center justify-center bg-[#ef4444] rounded text-white shadow-sm flex-shrink-0">
                <span className="text-[9px] font-bold">PDF</span>
            </div>

            {/* File Details */}
            <div className="flex-1 min-w-0 relative group/tooltip">
                <p className="text-xs font-bold text-slate-700 dark:text-slate-200 truncate cursor-default">
                    {file.name}
                </p>
                {/* Custom Tooltip */}
                <div className="absolute bottom-full left-0 mb-2 hidden group-hover/tooltip:block z-[60] max-w-[250px] whitespace-normal break-all bg-slate-800 text-white text-[10px] px-2 py-1 rounded shadow-xl pointer-events-none transition-all animate-in fade-in slide-in-from-bottom-1">
                    {file.name}
                    {/* Arrow */}
                    <div className="absolute top-full left-3 -mt-px border-[4px] border-transparent border-t-slate-800"></div>
                </div>
                <p className="text-[10px] text-slate-400">
                    {(file.size / 1024 / 1024).toFixed(1)}MB
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pr-1">
                {onRemove ? (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onRemove();
                        }}
                        className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-400 hover:text-red-500 cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                ) : (
                    <>
                        <button className="p-1.5 border border-slate-200 dark:border-slate-600 rounded hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-400 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                        <button className="p-1.5 border border-slate-200 dark:border-slate-600 rounded hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-400 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default FileCard;
