import { ResponsiveLine } from '@nivo/line'
import Styles from "./Chart.module.css" 
export const Chart2 = () => {

    const data = [
        {
            id: "Bitcoin",
            color: "hsl(53, 70%, 50%)",
            data: [
                { x: "plane", y: 1 },
                { x: "helicopter", y: 70 },
                { x: "boat", y: 186 },
                { x: "train", y: 246 },
                { x: "subway", y: 132 },
                { x: "bus", y: 280 },
                { x: "car", y: 202 },
                { x: "moto", y: 43 },
                { x: "bicycle", y: 287 },
                { x: "horse", y: 197 },
                { x: "skateboard", y: 296 },
                { x: "others", y: 70 },
            ],
        },
        {
            id: "Ethereum",
            color: "hsl(234, 69.00%, 52.00%)",
            data: [
                { x: "plane", y: 43 },
                { x: "helicopter", y: 257 },
                { x: "boat", y: 107 },
                { x: "train", y: 295 },
                { x: "subway", y: 109 },
                { x: "bus", y: 23 },
                { x: "car", y: 224 },
                { x: "moto", y: 267 },
                { x: "bicycle", y: 224 },
                { x: "horse", y: 94 },
                { x: "skateboard", y: 27 },
                { x: "others", y: 29 },
            ],
        },
        {
            id: "Shiba",
            color: "hsl(33, 83.10%, 44.10%)",
            data: [
                { x: "plane", y: 271 },
                { x: "helicopter", y: 195 },
                { x: "boat", y: 210 },
                { x: "train", y: 257 },
                { x: "subway", y: 244 },
                { x: "bus", y: 266 },
                { x: "car", y: 205 },
                { x: "moto", y: 200 },
                { x: "bicycle", y: 158 },
                { x: "horse", y: 281 },
                { x: "skateboard", y: 197 },
                { x: "others", y: 156 },
            ],
        },
        {
            id: "Dodgecoin",
            color: "hsl(72, 98.40%, 48.20%)",
            data: [
                { x: "plane", y: 41 },
                { x: "helicopter", y: 66 },
                { x: "boat", y: 230 },
                { x: "train", y: 274 },
                { x: "subway", y: 23 },
                { x: "bus", y: 134 },
                { x: "car", y: 169 },
                { x: "moto", y: 40 },
                { x: "bicycle", y: 204 },
                { x: "horse", y: 221 },
                { x: "skateboard", y: 241 },
                { x: "others", y: 30 },
            ],
        },
        {
            id: "Xrp",
            color: "hsl(34, 30.40%, 4.50%)",
            data: [
                { x: "plane", y: 140 },
                { x: "helicopter", y: 31 },
                { x: "boat", y: 56 },
                { x: "train", y: 85 },
                { x: "subway", y: 20 },
                { x: "bus", y: 232 },
                { x: "car", y: 176 },
                { x: "moto", y: 171 },
                { x: "bicycle", y: 9 },
                { x: "horse", y: 199 },
                { x: "skateboard", y: 178 },
                { x: "others", y: 193 },
            ],
        },
    ];

  return (
    <>
    <div>
        <img src="./Images/chart2mobile.png" alt="" className={Styles.c2m} />
    </div>
     <div className={Styles.chart}>
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: "point" }}
                yScale={{ type: "linear", min: "auto", max: "auto", stacked: true, reverse: false }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Transportation",
                    legendOffset: 36,
                    legendPosition: "middle",
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Value",
                    legendOffset: -40,
                    legendPosition: "middle",
                }}
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabel="y"
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: "bottom-right",
                        direction: "column",
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: "left-to-right",
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: "circle",
                        symbolBorderColor: "rgba(0, 0, 0, .5)",
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemBackground: "rgba(0, 0, 0, .03)",
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
            />
        </div>
    </>
  )
}
