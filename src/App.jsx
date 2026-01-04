import CommentComponent from './components/CommentComponent'

function App() {
  return (
    <div className="min-h-screen bg-[#333333] flex flex-col items-center justify-center p-4">
      <div className="hidden sm:flex flex-col items-center gap-4 mb-8">
        <h1 className="text-white text-3xl font-bold opacity-20">Component Assignment</h1>
        <a
          href="https://github.com/DiveshJ8766/Assignment.git"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline text-sm transition-colors"
        >
          View Documentation (README.md) - How I thought for this assignment
        </a>
      </div>
      <CommentComponent />
    </div>
  )
}

export default App
