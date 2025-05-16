

function App() {

  return (
    <>
      <div className="flex justify-center items-center font-sans bg-body min-h-screen ">
        <h1 className="text-title text-black/5 uppercase absolute left-1/2 -translate-x-1/2 tracking-[0.2em]"
        >
          TodoApp
        </h1>

        {/* main */}
        <main className="relative w-[972px] h-[636px] bg-white rounded-lg 
                        shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr]"
        >
          <header className="col-[1/3] row-[1/2] bg-header"></header>

          <ul></ul>

          <section className="col-[2/3] row-[2/3] bg-main"></section>

        </main>


        {/* footer */}
        <footer>

        </footer>

      </div>
    </>
  )
}

export default App
