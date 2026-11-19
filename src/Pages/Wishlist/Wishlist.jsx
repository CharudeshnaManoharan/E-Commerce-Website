import { AgGridReact } from "ag-grid-react";
import { AllEnterpriseModule } from "ag-grid-enterprise";
import {
  AllCommunityModule,
  ClientSideRowModelModule,
  ModuleRegistry,
  TooltipModule,
} from "ag-grid-community";
ModuleRegistry.registerModules([
  AllCommunityModule,
  ClientSideRowModelModule,
  TooltipModule,
  AllEnterpriseModule,
]);
import { useState } from "react";
import "./Wishlist.css";

const modules = [AllCommunityModule];

function Wishlist() {
  const [rowData] = useState([
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
    { product: "H&M Maxi Dress", price: 1499, size: "S", brand: "H&M" },
    { product: "Zara Floral Dress0", price: 2199, size: "M", brand: "Zara" },
    {
      product: "Aurelia Ethnic Wear",
      price: 1799,
      size: "S",
      brand: "Auerila",
    },
    { product: "Biba Kurti", price: 999, size: "L", brand: "Biba" },
  ]);

  const [colDefs] = useState([
    {
      headerName: "S.No",
      valueGetter: (params) => params.node.rowIndex + 1,
      width: 80,
      flex: 0,
      pinned: "left",
      sortable: true,
    },
    { field: "product", headerName: "Product Name", filter: true },
    { field: "brand", headerName: "Brand", filter: true },
    { field: "size", headerName: "Size", filter: true },
    { field: "price", headerName: "Price", filter: true },
  ]);

  return (
    <div className="wishlist-page" style={{ height: "calc(100vh-100px" }}>
      <h2 className="hl">Your Wishlist 1</h2>

      <div className="grid-header">
        <h3>Wishlists</h3>
      </div>

      <div style={{ width: "100%", borderRadius: "5px" }}>
        <AgGridReact domLayout="autoHeight"
          rowData={rowData}
          columnDefs={colDefs}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 20, 50, 100]}
        />
      </div>
    </div>
  );
}
export default Wishlist;
