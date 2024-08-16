import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

interface DataPoint {
  reason: string;
  cost: string;
}

interface Subcategory {
  name: string;
  data: DataPoint[];
}

interface Category {
  name: string;
  moreInformation: Subcategory[];
}

const initialData: Category[] = [
  {
    name: "CSPM",
    moreInformation: [
      {
        name: "Cloud Accounts",
        data: [
          {
            reason: "Cloud Account is not monitored",
            cost: "100",
          },
          {
            reason: "Cloud Account jfj fdk dfk",
            cost: "300",
          },
          {
            reason: "Cloud Account is dancing in the corner",
            cost: "300",
          },
        ],
      },
      {
        name: "Cloud Storage",
        data: [
          {
            reason: "Cloud Storage is not monitored",
            cost: "100",
          },
          {
            reason: "Cloud Storage is dancing in the corner",
            cost: "300",
          },
        ],
      },
      {
        name: "Cloud Security Groups",
        data: [
          {
            reason: "Cloud Security Groups is not monitored",
            cost: "100",
          },
          {
            reason: "Cloud Security Groups is dancing in the corner",
            cost: "300",
          },
        ],
      },
      {
        name: "Cloud Security Groups",
        data: [
          {
            reason: "Cloud Security Groups is not monitored",
            cost: "100",
          },
          {
            reason: "Cloud Security Groups is dancing in the corner",
            cost: "300",
          },
        ],
      },
      {
        name: "Cloud Security Groups",
        data: [
          {
            reason: "Cloud Security Groups is not monitored",
            cost: "100",
          },
          {
            reason: "Cloud Security Groups is dancing in the corner",
            cost: "300",
          },
        ],
      },
      {
        name: "Cloud Security Groups",
        data: [
          {
            reason: "Cloud Security Groups is not monitored",
            cost: "100",
          },
          {
            reason: "Cloud Security Groups is dancing in the corner",
            cost: "300",
          },
        ],
      },
      {
        name: "Cloud Security Groups",
        data: [
          {
            reason: "Cloud Security Groups is not monitored",
            cost: "100",
          },
          {
            reason: "Cloud Security Groups is dancing in the corner",
            cost: "300",
          },
        ],
      },
      {
        name: "Cloud Security Groups",
        data: [
          {
            reason: "Cloud Security Groups is not monitored",
            cost: "100",
          },
          {
            reason: "Cloud Security Groups is dancing in the corner",
            cost: "300",
          },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  const [data, setData] = useState<Category[]>(initialData);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [cost, setCost] = useState<number>(0);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target?.result as string);
          if (Array.isArray(jsonData)) {
            setData((prevData) => [...prevData, ...jsonData]);
          }
        } catch (error) {
          console.error("Invalid JSON file");
        }
      };
      reader.readAsText(file);
    }
  };

  const addDataPoint = () => {
    const updatedData = data.map((category) => {
      if (category.name === "CSPM") {
        return {
          ...category,
          moreInformation: category.moreInformation.map((subcategory) => {
            if (subcategory.name === selectedSubcategory) {
              return {
                ...subcategory,
                data: [...subcategory.data, { reason, cost: cost.toString() }],
              };
            }
            return subcategory;
          }),
        };
      }
      return category;
    });
    setData(updatedData);
    setReason("");
    setCost(0);
  };

  const getChartData = (subcategory: Subcategory) => {
    return {
      labels: subcategory.data.map((item) => item.reason),
      datasets: [
        {
          label: "Cost",
          data: subcategory.data.map((item) => parseFloat(item.cost)),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF9F40",
            "#4BC0C0",
            "#9966FF",
            "#FFB6C1",
          ],
          borderColor: "#ffffff",
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <form className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="subcategory"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Subcategory
            </label>
            <select
              id="subcategory"
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {data
                .find((category) => category.name === "CSPM")
                ?.moreInformation.map((subcategory) => (
                  <option key={subcategory.name} value={subcategory.name}>
                    {subcategory.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="reason"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Reason
            </label>
            <input
              type="text"
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter reason"
              required
            />
          </div>
          <div>
            <label
              htmlFor="cost"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Cost
            </label>
            <input
              type="number"
              id="cost"
              value={cost}
              onChange={(e) => setCost(Number(e.target.value))}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter cost"
              required
            />
          </div>
        </div>
        <button
          type="button"
          onClick={addDataPoint}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Add Data
        </button>
      </form>

      <div className="mt-6 mb-6">
        <label
          htmlFor="fileUpload"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Upload JSON Data
        </label>
        <input
          type="file"
          id="fileUpload"
          accept=".json"
          onChange={handleFileUpload}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      {data
        .find((category) => category.name === "CSPM")
        ?.moreInformation.map((subcategory) => (
          <div key={subcategory.name} className="mt-6">
            <h2 className="text-xl font-semibold mb-4">{subcategory.name}</h2>
            <Pie
              data={getChartData(subcategory)}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top",
                  },
                  tooltip: {
                    callbacks: {
                      label: (tooltipItem) => {
                        return `${tooltipItem.label}: $${tooltipItem.raw}`;
                      },
                    },
                  },
                },
              }}
            />
          </div>
        ))}
    </div>
  );
};

export default App;
