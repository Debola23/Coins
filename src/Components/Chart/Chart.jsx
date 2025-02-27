import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip);
export const Chart = () => {

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Performance",
            data: [10, 15, 8, 20, 25, 30],
            borderColor: "#9C27B0",
            pointBackgroundColor: "#FFFFFF",
            pointBorderColor: "#9C27B0",
            pointBorderWidth: 3,
            pointHoverRadius: 6,
            pointRadius: 5,
            fill: true,
            backgroundColor: (context) => {
              const { chart } = context;
              const { ctx, chartArea } = chart;
    
              if (!chartArea) {
                return null;
              }
    
              const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
              gradient.addColorStop(0, "#3E50B4");
              gradient.addColorStop(1, "#9C27B0");
    
              return gradient;
            },
            tension: 0.4,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          tooltip: {
            enabled: true,
            backgroundColor: "#1E1E1E",
            titleColor: "#FFFFFF",
            bodyColor: "#FFFFFF",
            callbacks: {
              label: (tooltipItem) => `You harvested $${tooltipItem.raw * 1000} of losses`,
            },
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: "#FFFFFF" },
          },
          y: {
            grid: { color: "rgba(255, 255, 255, 0.1)" },
            ticks: { color: "#FFFFFF" },
          },
        },
      };
    
  return (
    <section style={styles.container}>
    <p style={styles.description}>
      Build wealth, save money, and transact with confidence by optimizing your portfolio all year round.
    </p>
    <div style={styles.chartContainer}>
      <Line data={data} options={options} />
    </div>
  </section>
  )
}


const styles = {
    container: {
      backgroundColor: "#1E1E1E",
      color: "#FFFFFF",
      textAlign: "center",
      padding: "40px",
      borderRadius: "10px",
      margin: "20px auto",
      maxWidth: "800px",
      
    },
    heading: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    description: {
      fontSize: "16px",
      marginBottom: "30px",
      lineHeight: "1.5",
    },
    chartContainer: {
      backgroundColor: "#2B2B2B",
      padding: "20px",
      borderRadius: "10px",
    },
  };