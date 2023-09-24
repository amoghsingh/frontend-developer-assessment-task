import React from "react";

const DeleteCardModal = ({ isVisible, onClose, deleteCard }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "modal-wrapper3") {
      onClose();
    }
  };

  return (
    <>
      <div
        id="modal-wrapper3"
        className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        onClick={handleClose}
      >
        <div className="bg-white p-4 border border-card-border rounded">
          <div className="px-4 py-2 text-lg font-medium">Delete Card</div>
          <div className="p-4">Do you want to delete this Job Card?</div>
          <div className="p-4 flex gap-2 justify-end">
            <button
              type="button"
              onClick={onClose}
              className=" rounded py-1 px-2 text-primary-color border border-primary-color"
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-error-color rounded p-1 text-white py-1 px-2 "
              onClick={deleteCard}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteCardModal;
