import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeConfirm, deleteShipment } from "../store/shipmentsSlice";

const Confirmation = () => {
    const dispatch = useDispatch();
    const confirm = useSelector((state) => state.shipments.confirmation);

    const handleDelete = () => {
        dispatch(deleteShipment(confirm.orderNo));
        dispatch(closeConfirm());
    };

    const handleClose = () => {
        dispatch(closeConfirm());
    }

    if (!confirm) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center bg-black bg-opacity-75 justify-center z-50 px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md">
                <div className="p-4 bg-blue-500 text-white">
                    <h2 className="text-2xl font-bold">Confirmation</h2>
                </div>
                <div className="p-4">
                    <p className="text-gray-700">Are you sure you want to delete shipment <strong>{confirm.orderNo}</strong>?</p>
                </div>
                <div className="p-4 flex justify-end">
                    <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">Delete</button>
                    <button onClick={handleClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Close</button>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;
