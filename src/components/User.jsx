import { IconPencil, IconGift, IconTrash } from "@tabler/icons-react";
import BgImage from "./BgImage";
import ConfirmationModal from './ConfirmationModal';
import { useState } from "react";

const User = ({ userInfo, deleteUser, handleClickUpdate }) => {
    const [showModal, setShowModal] = useState(false);

    const handleDeleteClick = () => {
        setShowModal(true);
    };

    const confirmDelete = () => {
        deleteUser(userInfo.id);
        setShowModal(false);
    };

    const cancelDelete = () => {
        setShowModal(false);
    };

    return (
        <article className='border-2 p-5 rounded-sm grid gap-3 bg-white border-black relative'>
            <h2 className="flex gap-2 items-center text-lg font-bold">
                <BgImage imageUrl={userInfo.image_url} firstName={userInfo.first_name} lastName={userInfo.last_name} />
                {userInfo.first_name} {userInfo.last_name}
            </h2> <hr />

            <ul className='grid gap-1'>
                <li><span className="text-black/40 ">EMAIL: </span><br /><span className="font-semibold">  {userInfo.email}</span></li>
                <li className="flex flex-col">
                    <span className="text-black/40">BIRTHDAY:</span>
                    <div className="flex items-center gap-2 font-semibold">
                        <IconGift />
                        {userInfo.birthday}
                    </div>
                </li>
            </ul>
            <hr />
            <div className="flex justify-end gap-2">
                <button
                    onClick={handleDeleteClick}
                    className="bg-red-500 hover:bg-red-600 transition-colors  text-white p-1 rounded-sm"
                >
                    <IconTrash />
                </button>
                <button
                    onClick={() => handleClickUpdate(userInfo)}
                    className="bg-green-500 hover:bg-green-600 transition-colors  text-white p-1 rounded-sm"
                >
                    <IconPencil />
                </button>
            </div>

            {showModal && (
                <ConfirmationModal
                    message="Are you sure you want to delete this user?"
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}
        </article>
        
    );
}

export default User