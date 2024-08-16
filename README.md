# Dashboard Application

A React application for managing and visualizing data using charts. This application allows users to upload JSON data, add new data points, and view visualizations of the data using Pie charts.

## Features

- **Data Management**: Upload JSON files and add new data points.
- **Dynamic Charts**: View data visualizations using Pie charts.
- **Responsive Design**: Adaptable layout for different screen sizes.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Chart.js**: Library for creating charts and visualizations.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Typed superset of JavaScript for enhanced development experience.

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd your-repo-name
    ```

3. **Install dependencies**:

    Using npm:

    ```bash
    npm install
    ```

    Or using yarn:

    ```bash
    yarn install
    ```

### Running the Application

1. **Start the development server**:

    Using npm:

    ```bash
    npm start
    ```

    Or using yarn:

    ```bash
    yarn start
    ```

2. **Open your browser and navigate to**:

    ```
    http://localhost:3000
    ```

## Usage

- **Upload JSON Data**: Use the file input to upload a JSON file containing data to be visualized.
- **Add Data Point**: Fill out the form to add new data points to the selected subcategory.
- **View Charts**: Select a subcategory to view its Pie chart representation of the data.

## Example JSON Data Format

```json
[
  {
    "name": "CSPM",
    "moreInformation": [
      {
        "name": "Cloud Accounts",
        "data": [
          {
            "reason": "Cloud Account is not monitored",
            "cost": "100"
          },
          {
            "reason": "Cloud Account jfj fdk dfk",
            "cost": "300"
          }
        ]
      }
    ]
  }
]
