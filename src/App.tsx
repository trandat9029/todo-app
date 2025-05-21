import Footer from "./components/elements/Footer"
import Header from "./components/elements/Header"
import BGHeading from "./components/elements/BGHeading"
import TodoList from "./components/sections/TodoList"
import Sidebar from "./components/sections/Sidebar"




function App() {


  return (
    <>
      <div className="flex flex-col justify-center items-center font-sans bg-body min-h-screen ">
        <BGHeading/>

        {/* main */}
        <main className="relative w-[972px] h-[636px] bg-white rounded-lg 
                        shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] 
                        grid-rows-[59px_1fr] overflow-hidden"
        >
          <Header  />
          
          <TodoList />

          <Sidebar />
        </main>


        {/* footer */}
        <Footer/>

      </div>
    </>
  )
}

export default App
