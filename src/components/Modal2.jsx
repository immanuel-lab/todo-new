import React, { useRef, useEffect } from 'react';

function Modal2({ closeModal, handleDelete, id }) {
  const modalRef = useRef();

  const handleClose = (e) => {
    if ( !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  // Add an event listener to handle clicks outside the modal
  useEffect(() => {
    document.addEventListener('mousedown', handleClose);
    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  },

   []);

  return (
    <>
      <div className="inset-0 fixed backdrop-blur bg-black bg-opacity-25">
        <div className="flex h-screen justify-center items-center">
          <div className="flex-col justify-center border-2 py-12 px-24 border-red-500 rounded-xl z-50 bg-purple-100" ref={modalRef}>
            <div className="flex text-lg text-zinc-600 mb-10">
              Are you sure you want to delete this task?
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  handleDelete(id);
                  closeModal();
                }}
                className="rounded px-6 py-2 text-white bg-green-400 focus:outline-none"
              >
                Yes
              </button>
              <button
                onClick={closeModal}
                className="rounded px-6 py-2 ml-4 text-white bg-red-500 focus:outline-none"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal2;
