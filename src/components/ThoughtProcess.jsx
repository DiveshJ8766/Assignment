import React from 'react';

const ThoughtProcess = ({ isDarkMode }) => {
    return (
        <div className="w-full max-w-2xl bg-white dark:bg-[#3b425e] rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300">
            <div className="border-b border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-[#2d334a] flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-500 dark:text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                <h2 className="text-slate-700 dark:text-slate-200 font-semibold">README.md - Thought Process</h2>
            </div>

            <div className="p-6 sm:p-8 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed overflow-y-auto max-h-[70vh] custom-scrollbar">
                <section>
                    <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">My Approach</h3>
                    <p>My approach to this assignment was structured and methodical:</p>
                    <ul className="list-disc ml-6 mt-3 space-y-2">
                        <li><span className="font-semibold text-slate-900 dark:text-white">Requirement Gathering:</span> I started by thoroughly understanding the assignment brief. I even reached out to the recruiter to clarify specific doubts to ensure the final product aligned perfectly with expectations.</li>
                        <li><span className="font-semibold text-slate-900 dark:text-white">Conceptualization (iPad Sketching):</span> Before writing any code, I used my iPad to sketch the skeleton of the component. I mapped out the user flow: adding, editing, and deleting comments, as well as how the list would be displayed.</li>
                        <li><span className="font-semibold text-slate-900 dark:text-white">Design Fidelity:</span> Since specific design styles were provided in the assignment, I strictly adhered to them to ensure a premium, production-ready look.</li>
                        <li><span className="font-semibold text-slate-900 dark:text-white">Architecture:</span> I prioritized a scalable structure by implementing a parent <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-sm">CommentComponent</code> that orchestrates several specialized sub-components.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">Component Architecture</h3>
                    <p>To keep the codebase maintainable and modular, I split the UI into the following sub-components:</p>
                    <ul className="list-disc ml-6 mt-3 space-y-2">
                        <li><code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-sm font-semibold">CommentAddForm</code>: Handles logical creation of new suggestions with a smart "collapsed" state.</li>
                        <li><code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-sm font-semibold">CommentEditForm</code>: Features pre-fetching for a smooth editing experience.</li>
                        <li><code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-sm font-semibold">CommentItem</code>: Manages display logic for a single comment.</li>
                        <li><code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-sm font-semibold">CommentList</code>: Renders the collection and handles empty states.</li>
                        <li><code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-sm font-semibold">CommentHeader</code>: Contains title, theme toggle, and close functionality.</li>
                        <li><code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-sm font-semibold">FileCard</code>: Dedicated preview for attached files with metadata.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">Key Features</h3>
                    <ul className="list-disc ml-6 mt-3 space-y-2">
                        <li><span className="font-semibold text-slate-900 dark:text-white">Dynamic Timestamps:</span> Enhanced format (e.g., "Jan 4, 2:00 PM").</li>
                        <li><span className="font-semibold text-slate-900 dark:text-white">Theme Toggling:</span> Fully implemented Dark/Light mode with smooth transitions.</li>
                        <li><span className="font-semibold text-slate-900 dark:text-white">Data Persistence:</span> Integrated <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-sm">localStorage</code> support.</li>
                        <li><span className="font-semibold text-slate-900 dark:text-white">Custom Aesthetics:</span> Customized scrollbars, tooltips, and Favicon branding.</li>
                        <li><span className="font-semibold text-slate-900 dark:text-white">Configurable Validation:</span> <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-sm">IS_DOC_REQUIRED</code> toggle for business rules.</li>
                        <li><span className="font-semibold text-slate-900 dark:text-white">Responsiveness:</span> Fully optimized for all screens (Mobile, Tablet, and Desktop).</li>
                        <li><span className="font-semibold text-slate-900 dark:text-white">Field Validation:</span> Robust validation for all input fields (Field Label, Comment, and File Uploads).</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default ThoughtProcess;
