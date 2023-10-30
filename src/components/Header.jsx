import { IconPlus } from "@tabler/icons-react"

const Header = ({handleOpenModal}) => {

  return (
    <header className="flex justify-between p-2">
        <h1 className="text-3xl font-bold my-2 mx-2">USERS</h1>
        <button onClick={handleOpenModal} className=" bg-blue-600  text-white p-2 px-4 my-2 mx-2 font-semibold  hover:bg-blue-600 transition-colors">
            
        <span className="flex">
          <IconPlus />
          <span>ADD USER</span>
        </span>
        
        </button>
    </header>
  )
}
export default Header
