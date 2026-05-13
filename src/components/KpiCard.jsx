export default function KpiCard({ title, value }) {
    return (
        <div
            className="p-4 text-center rounded-3 shadow-sm"
            style={{
                backgroundColor: "#FFFFFF",
                width: "240px"
            }}
        >
            <p
                className="text-muted small mb-0"
            >
                {title}
            </p>
            <h1
                className="display-6 fw-bold"
            >
                {value}
            </h1>
        </div>
    )

}