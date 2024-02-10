import { createSlice } from '@reduxjs/toolkit';

export const shipmentsSlice = createSlice({
  name: 'shipments',
  initialState: {
    data: [],
    selectedShipment: null,
    confirmation: false,
  },
  reducers: {
    setShipments: (state, action) => {
      state.data = action.payload;
    },
    selectShipment: (state, action) => {
      state.selectedShipment = action.payload;
    },
    clearSelectedShipment: (state) => {
      state.selectedShipment = null;
    },
    confirmation: (state, action) => {
      state.confirmation = action.payload;
    },
    deleteShipment: (state, action) => {
      state.data = state.data.filter((shipment) => shipment.orderNo !== action.payload);
    },
    closeConfirm: (state) => {
      state.confirmation = false;
    }

  },
});

export const { setShipments, selectShipment, clearSelectedShipment, deleteShipment, confirmation, closeConfirm } = shipmentsSlice.actions;

export default shipmentsSlice.reducer;
