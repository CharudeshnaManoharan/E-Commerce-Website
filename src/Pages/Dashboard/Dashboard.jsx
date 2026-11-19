import { ResponsiveLine } from "@nivo/line";
import "./Dashboard.css";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";



function Dashboard() {
 
  const data = [
    { category: "Men", sales: 120 },
    { category: "Women", sales: 180 },
    { category: "kids", sales: 100 },
  ];

  const lineData = [
    {
      id: "sales",
      data: [
        { x: "Jan", y: 4000 },
        { x: "Feb", y: 3000 },
        { x: "Mar", y: 5000 },
        { x: "Apr", y: 4500 },
        { x: "May", y: 6000 },
      ],
    },
  ];

  const datapie = [
    { id: "Men", value: 40 },
    { id: "Women", value: 35 },
    { id: "Kids", value: 25 },
  ];

  const colors = ["#ff6b6b", "#4dabf7", "#51cf66"];

  

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p className="dashboard-subtitle">Welcome to TrendTrove</p>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Products</h3>
          <h2>120</h2>
        </div>

        <div className="dashboard-card">
          <h3>Total Orders</h3>
          <h2>45</h2>
        </div>

        <div className="dashboard-card">
          <h3>Wishlist Items</h3>
          <h2>18</h2>
        </div>

        <div className="dashboard-card">
          <h3>Total Revenue</h3>
          <h2>₹25,000</h2>
        </div>
      </div>

      <div className="recent-orders">
        <h2>Recent Orders</h2>

        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#1001</td>
              <td>H&M Shirt</td>
              <td>₹999</td>
              <td>Delivered</td>
            </tr>

            <tr>
              <td>#1002</td>
              <td>H&M Jeans</td>
              <td>₹1,499</td>
              <td>Pending</td>
            </tr>

            <tr>
              <td>#1003</td>
              <td>H&M T-Shirt</td>
              <td>₹799</td>
              <td>Shipped</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="barcontaier">
        <div style={{ height: "400px", marginTop: "50px",  width: "600px" ,background:"white"}}>
          <ResponsiveBar
            data={data}
            keys={["sales"]}
            indexBy="category"
            enableLabel={true}
            labelSkipWidth={0}
            labelSkipHeight={0}
            labelTextColor="#ffffff"
            margin={{ top: 10, right: 20, bottom: 70, left: 60 }}
            padding={0.5}
            colors={({ index }) => colors[index]}
            activeOuterRadiusOffset={8}
            motionConfig="gentle"
            axisBottom={{
              legend: "Category",
              legendPosition: "middle",
              legendOffset: 40,
            }}
            axisLeft={{
              legend: "Sales",
              legendPosition: "middle",
              legendOffset: -50,
            }}
          />
        </div>
      </div>

      <div className="linecontainer">
        <div style={{ height: "400px", width: "600px" , background:"white"}}>
          <ResponsiveLine
            data={lineData}
            margin={{ top: 20, right: 30, bottom: 60, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{ type: "point", min: "auto", max: "auto" }}
            axisBottom={{
              legend: "Month",
              legendPosition: "middle",
              legendOffset: 40,
            }}
            axisLeft={{
              legend: "Sales",
              legendPosition: "middle",
              legendOffset: -50,
            }}
            colors={{ scheme: "accent" }}
            pointSize={9}
            pointBorderWidth={1}
            pointBorderColor="#91e30d"
            enableGridY={true}
            enableGridX={false}
            enableArea={true}
          />
        </div>
      </div>
      <div className="piecontainer">
        <div style={{ height: "450px", width: "600px", background: "white" }}>
          <ResponsivePie
            data={datapie}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            colors={{ scheme: "set2" }}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateY: 56,
                itemsSpacing: 20,
                itemWidth: 80,
                itemHeight: 20,
                symbolSize: 15,
                itemTextColor: "#333333",
              },
            ]}
            activeOuterRadiusOffset={8}
            motionConfig="gentle"
            innerRadius={0.45}
          />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;













