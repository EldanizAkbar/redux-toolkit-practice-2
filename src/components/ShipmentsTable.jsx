import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shipmentsList from "../assets/Shipments.json";
import { confirmation, selectShipment, setShipments } from "../store/shipmentsSlice";

const ShipmentsTable = () => {
  const dispatch = useDispatch();
  const shipments = useSelector((state) => state.shipments.data);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [shipmentsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      dispatch(setShipments(shipmentsList));
      setLoading(false);
    }, 1000);
  }, [dispatch]);

  const handleClick = (shipment) => {
    dispatch(selectShipment(shipment));
  };

  const handleDelete = (shipment) => {
    dispatch(confirmation(shipment));
  };

  const indexOfLastShipment = currentPage * shipmentsPerPage;
  const indexOfFirstShipment = indexOfLastShipment - shipmentsPerPage;
  const currentShipments = shipments.slice(indexOfFirstShipment, indexOfLastShipment);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="mx-auto text-center">
        <img src="/loading spinner.gif" alt="loading" className="mx-auto" />
      </div>
    );
  }

  return (
    <div className="container mx-auto overflow-x-auto sm:rounded-lg px-1">
      <table className="w-full text-sm text-left rtl:text-right text-white-500 dark:text-white rounded-full">
        <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-white font-dark">
          <tr>
            <th scope="col" className="px-3 py-3">orderNo</th>
            <th scope="col" className="px-3 py-3">date</th>
            <th scope="col" className="px-3 py-3">customer</th>
            <th scope="col" className="px-3 py-3">trackingNo</th>
            <th scope="col" className="px-3 py-3">status</th>
            <th scope="col" className="px-3 py-3">consignee</th>
            <th scope="col" className="px-3 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentShipments.map((shipment) => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={shipment.orderNo} >
              <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{shipment.orderNo}</th>
              <td className="px-3 py-4">{shipment.date}</td>
              <td className="px-3 py-4">{shipment.customer}</td>
              <td className="px-3 py-4">{shipment.trackingNo}</td>
              <td className="px-3 py-4">{shipment.status}</td>
              <td className="px-3 py-4">{shipment.consignee}</td>
              <td className="px-3 py-4">
                <div className="flex justify-center">
                  <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => handleClick(shipment)}>View</button>
                  <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => handleDelete(shipment)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="mt-8" aria-label="Pagination">
        <ul className="pagination flex gap-2 justify-center">
          {Array.from({ length: Math.ceil(shipments.length / shipmentsPerPage) }, (_, index) => (
            <li key={index} className="pagination-item">
              <button
                onClick={() => paginate(index + 1)}
                className={`pagination-link bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ${index + 1 === currentPage ? 'bg-[#A9A9A9]' : ''
                  }`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ShipmentsTable;
