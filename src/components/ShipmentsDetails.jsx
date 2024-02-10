import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearSelectedShipment } from "../store/shipmentsSlice";

const ShipmentsDetails = () => {
  const dispatch = useDispatch();
  const shipment = useSelector((state) => state.shipments.selectedShipment);

  const handleClose = () => {
    dispatch(clearSelectedShipment());
  };

  if (!shipment) {
    return null; 
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-2">
      <div className="bg-white rounded-lg p-4 sm:p-8 lg:max-w-[1000px] w-full">
        <h2 className="text-2xl font-bold mb-4">Shipment Details</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Order No:</label>
            <input
              type="text"
              className="mt-1 p-2 w-full bg-gray-100 border border-gray-300 rounded"
              value={shipment.orderNo}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Date:</label>
            <input
              type="text"
              className="mt-1 p-2 w-full bg-gray-100 border border-gray-300 rounded"
              value={shipment.date}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Customer:</label>
            <input
              type="text"
              className="mt-1 p-2 w-full bg-gray-100 border border-gray-300 rounded"
              value={shipment.customer}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Tracking No:</label>
            <input
              type="text"
              className="mt-1 p-2 w-full bg-gray-100 border border-gray-300 rounded"
              value={shipment.trackingNo}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Status:</label>
            <input
              type="text"
              className="mt-1 p-2 w-full bg-gray-100 border border-gray-300 rounded"
              value={shipment.status}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Consignee:</label>
            <input
              type="text"
              className="mt-1 p-2 w-full bg-gray-100 border border-gray-300 rounded"
              value={shipment.consignee}
              readOnly
            />
          </div>
        </div>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ShipmentsDetails;
