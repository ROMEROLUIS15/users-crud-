import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'
import UserList from "./components/UserList";
import { useForm } from "react-hook-form";
import { BASE_URL, EMPTY_FORM_VALUES } from "./constants/users";
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [idUserToEdit, setIdUserToEdit] = useState(null);

  const { handleSubmit, register, reset, formState } = useForm();
  const { errors } = formState;

  const submit = (data) => {
    if (idUserToEdit) {
      updateUser(data);
    } else {
      createUser(data);
    }
  };

  const handleOpenModal = () => {
    setIsShowModal(true);
  };

  const handleClosedModal = () => {
    setIsShowModal(false);
    reset(EMPTY_FORM_VALUES);
    setIdUserToEdit(null);
  };

  const createUser = (data) => {
    axios
      .post(BASE_URL + "/users/", data)
      .then(() => {
        handleClosedModal();
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    axios
      .delete(BASE_URL + `/users/${id}/`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  const updateUser = (data) => {
    axios
      .put(BASE_URL + `/users/${idUserToEdit}/`, data)
      .then(() => {
        getAllUsers();
        handleClosedModal();
      })
      .catch((err) => console.log(err));
  };

  const getAllUsers = () => {
    axios
      .get(BASE_URL + "/users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const handleClickUpdate = (userToUpdate) => {
    handleOpenModal();
    reset(userToUpdate);
    setIdUserToEdit(userToUpdate.id);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main className="top-0 bottom-0 left-0 right-0">
      <Header handleOpenModal={handleOpenModal} />
      <Modal
        isShowModal={isShowModal}
        handleClosedModal={handleClosedModal}
        handleSubmit={handleSubmit}
        submit={submit}
        register={register}
        idUserToEdit={idUserToEdit}
        errors={errors}
      />
      <UserList
        users={users}
        deleteUser={deleteUser}
        handleClickUpdate={handleClickUpdate}
      />
    </main>
  );
}

export default App;
