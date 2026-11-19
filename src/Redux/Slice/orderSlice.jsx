import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE = "http://localhost:8000/productsproducts/";

// ===============================
// GET PRODUCTS
// ===============================

export const getProducts = createAsyncThunk(
  "orders/getProducts",

  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_BASE);

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch products",
      );
    }
  },
);

// ===============================
// CREATE PRODUCT - POST
// ===============================

export const createProduct = createAsyncThunk(
  "orders/createProduct",

  async (product, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_BASE, product);

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create product",
      );
    }
  },
);

// ===============================
// UPDATE PRODUCT - PUT
// ===============================

export const updateProduct = createAsyncThunk(
  "orders/updateProduct",

  async (product, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_BASE}${product.id}/`, {
        product_name: product.product_name,
        description: product.description,
        price: product.price,
        category: product.category,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update product",
      );
    }
  },
);

// ===============================
// DELETE PRODUCT
// ===============================

export const deleteProduct = createAsyncThunk(
  "orders/deleteProduct",

  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_BASE}${id}/`);

      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete product",
      );
    }
  },
);

// ===============================
// SLICE
// ===============================

const orderSlice = createSlice({
  name: "orders",

  initialState: {
    orders: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    // ===============================
    // GET
    // ===============================

    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })

      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ===============================
    // POST
    // ===============================

    builder
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;

        state.orders.unshift(action.payload);
      })

      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ===============================
    // PUT
    // ===============================

    builder
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;

        const index = state.orders.findIndex(
          (order) => order.id === action.payload.id,
        );

        if (index !== -1) {
          state.orders[index] = action.payload;
        }
      })

      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ===============================
    // DELETE
    // ===============================

    builder
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;

        state.orders = state.orders.filter(
          (order) => order.id !== action.payload,
        );
      })

      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
