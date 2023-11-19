import { RouterProvider } from "react-router-dom"
import { router } from "./Routes/Routes"


function App() {

  return (
    <div className="w-[1245px]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
