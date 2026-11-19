import "./Orders.css";
import { useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";

import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../../Redux/Slice/orderSlice";

import { useDispatch, useSelector } from "react-redux";

function Orders() {
  const dispatch = useDispatch();

  // Redux data
  const { orders, loading, error } = useSelector((state) => state.orders);

  // =========================
  // LOCAL ORDERS
  // =========================

  const [localOrders, setLocalOrders] = useState([]);

  // =========================
  // DELETE DIALOG
  // =========================

  const [showDialog, setShowDialog] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // =========================
  // FORM STATES
  // =========================

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  // ID of product currently editing
  const [editingId, setEditingId] = useState(null);

  // =========================
  // GET PRODUCTS
  // =========================

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // =========================
  // GET LOCAL ORDERS
  // =========================

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orderItems")) || [];

    setLocalOrders(savedOrders);
  }, []);

  // =========================
  // RESET FORM
  // =========================

  const resetForm = () => {
    setProductName("");
    setDescription("");
    setPrice("");
    setCategory("");
    setEditingId(null);
  };

  // =========================
  // CREATE PRODUCT
  // =========================

  const createOrder = () => {
    if (!productName || !price || !category) {
      alert("Please fill product name, price, and category");
      return;
    }

    dispatch(
      createProduct({
        product_name: productName,
        description: description,
        price: Number(price),
        category: category,
      }),
    );

    resetForm();
  };

  // =========================
  // START EDIT
  // =========================

  const startEdit = (order) => {
    setEditingId(order.id);

    setProductName(order.product_name || "");
    setDescription(order.description || "");
    setPrice(order.price ?? "");
    setCategory(order.category || "");
  };

  // =========================
  // UPDATE PRODUCT
  // =========================

  const updateOrder = () => {
    if (editingId === null) {
      alert("Click the edit icon on an order first");
      return;
    }

    if (!productName || !price || !category) {
      alert("Please fill product name, price, and category");
      return;
    }

    dispatch(
      updateProduct({
        id: editingId,
        product_name: productName,
        description: description,
        price: Number(price),
        category: category,
      }),
    );

    resetForm();
  };

  // =========================
  // DELETE API PRODUCT
  // =========================

  const deleteOrder = (id) => {
    if (!id) return;

    dispatch(deleteProduct(id));

    // If deleting currently edited product
    if (editingId === id) {
      resetForm();
    }
  };

  // =========================
  // LOCAL ORDER DELETE DIALOG
  // =========================

  const openDialog = (index) => {
    setSelectedIndex(index);
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
    setSelectedIndex(null);
  };

  const confirmRemove = () => {
    const updatedOrders = localOrders.filter(
      (_, index) => index !== selectedIndex,
    );

    setLocalOrders(updatedOrders);

    localStorage.setItem("orderItems", JSON.stringify(updatedOrders));

    closeDialog();
  };

  // =========================
  // JSX
  // =========================

  return (
    <div className="called">
      <h1>Your Orders!</h1>

      {/* ================= FORM ================= */}

      <div className="form-container">
        {/* Product Name */}
        <div className="input-group">
          <label>Product Name</label>

          <input
            type="text"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        {/* Description */}
        <div className="input-group">
          <label>Description</label>

          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Price */}
        <div className="input-group">
          <label>Price</label>

          <input
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        {/* Category */}
        <div className="input-group">
          <label>Category</label>

          <input
            type="text"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>

      {/* ================= BUTTONS ================= */}

      {editingId !== null ? (
        <>
          <button onClick={updateOrder}>Save Changes</button>

          <button onClick={resetForm} style={{ marginLeft: "10px" }}>
            Cancel
          </button>
        </>
      ) : (
        <button onClick={createOrder}>Create Order</button>
      )}

      {/* ================= EDITING MESSAGE ================= */}

      {editingId !== null && (
        <p className="editing-text">Editing order id: {editingId}</p>
      )}

      {/* ================= ERROR ================= */}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* ================= LOADING ================= */}

      {loading && <p>Loading...</p>}

      {/* ================= API ORDERS ================= */}

      <div className="orders-grid">
        {orders.map((order) => (
          <div className="order-tile" key={order.id}>
            {/* EDIT + DELETE */}

            <div className="order-tile-actions">
              {/* EDIT */}
              <button
                className="icon-btn"
                title="Edit"
                onClick={() => startEdit(order)}
              >
                <MdEdit />
              </button>

              {/* DELETE */}
              <button
                className="icon-btn"
                title="Delete"
                onClick={() => deleteOrder(order.id)}
              >
                <MdDelete />
              </button>
            </div>

            {/* PRODUCT NAME */}

            <h3>{order.product_name}</h3>

            {/* DESCRIPTION */}

            <p>{order.description}</p>

            {/* CATEGORY */}

            <p>
              <strong>Category: </strong>
              {order.category}
            </p>

            {/* PRICE */}

            <p>
              <strong>Price: </strong>₹{order.price}
            </p>
          </div>
        ))}
      </div>

      {/* ================= LOCAL ORDERS ================= */}

      <div className="local-orders-grid">
        {localOrders.map((order, index) => (
          <div className="order-tile" key={index}>
            {/* DELETE */}

            <button
              className="local-delete-btn"
              onClick={() => openDialog(index)}
            >
              <MdDelete />
            </button>

            {/* IMAGE */}

            <img
              src={order.image}
              alt={order.productName}
              className="order-image"
            />

            {/* PRODUCT NAME */}

            <h3>{order.productName}</h3>

            {/* SIZE */}

            <p>
              <strong>Size: </strong>
              {order.size}
            </p>

            {/* PRICE */}

            <p>
              <strong>Price: </strong>₹{order.price}
            </p>

            {/* QUANTITY */}

            <p>
              <strong>Quantity: </strong>
              {order.quantity}
            </p>

            {/* ADDRESS */}

            <p>
              <strong>Address: </strong>
              {order.address}
            </p>
          </div>
        ))}
      </div>

      {/* ================= DELETE DIALOG ================= */}

      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h3>Are you sure?</h3>

            <p>Do you want to remove this item from your orders?</p>

            <div className="dialog-buttons">
              <button onClick={closeDialog}>Cancel</button>

              <button onClick={confirmRemove}>Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;
