import * as React from "react";
import Topbar from "./SmallComps/topbar";

const ClassifyCustomer = () => {
  const statesArray = [
    "select",
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Indiana",
    "Iowa",
    "Illinois",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  const Checkboxes = [
    "CNA Connect®",
    "Worker's Compensation",
    "Commercial Automobile",
    "Umbrella",
    "Technology E&O",
    "International Solutions",
    "Management Liability",
    "Misc Professional Liability",
    "Life Science Product Liability",
  ];
  const handleClick = () => {
    window.location.assign("/quote");
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <Topbar />
      </div>

      <div
        style={{
          height: "40vh",
          border: "1px solid #D2D2D2",
          marginTop: "8vh",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "#E8E8E8",
            height: "4vh",
            alignItems: "center",
            borderRadius: "8px 8px 0px 0px",
            paddingLeft: "16px",
          }}
        >
          <span style={{ fontWeight: "500" }}>Appetite Display:</span>
        </div>

        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 30,
              padding: "16px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <span style={{ fontSize: "14px" }}>
                SIC or Description: &nbsp;
              </span>
              <input
                type="text"
                style={{
                  border: "1pt solid #C7C7C7",
                  borderRadius: "5px",
                  width: "10vw",
                }}
                required
              />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <span style={{ fontSize: "14px" }}>
                Primary Risk State: &nbsp;
              </span>
              <div>
                <select
                  style={{
                    width: "10vw",
                    height: "3vh",
                    border: "1pt solid #C7C7C7",
                    borderRadius: "5px",
                  }}
                >
                  {statesArray.map((e) => (
                    <option>{e}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div>
            <div style={{ columnCount: 3, padding: "16px" }}>
              {Checkboxes.map((e) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: "16px",
                  }}
                >
                  <input type="checkbox" value={e} />
                  <span style={{ color: "#004890", fontWeight: "600" }}>
                    {e}
                  </span>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                padding: "16px",
                gap: 10,
              }}
            >
              <input type="checkbox" />
              <span>Select All</span>
              <input type="checkbox" />
              <span>Deselect All</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                padding: "16px",
              }}
            >
              <input type="checkbox" />
              <span>Save current product selection as default</span>
            </div>
          </div>
        </div>

        <button
          style={{
            marginRight: "12px",
            height: "2rem",
            width: "4rem",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
        <button
          style={{
            marginRight: "12px",
            height: "2rem",
            width: "4rem",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>
      <div
        style={{ marginTop: "8vh", border: "1px solid black", padding: "16px" }}
      >
        This is from <b>SECOND MICRO-FRONTEND</b>
      </div>
      <div style={{ position: "absolute", bottom: 60, right: 20 }}>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: "#FFFFFF",
            border: "1pt solid #3B6E8F",
            height: "4vh",
            width: "6vw",
            color: "#3B6E8F",
            cursor: "pointer",
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};
export default ClassifyCustomer;
