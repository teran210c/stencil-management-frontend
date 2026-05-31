export default function KpiCard({ title, value, loading }) {
    return (
        <div
            className="p-4 text-center rounded-3 shadow-sm"
            style={{
                backgroundColor: "#FFFFFF",
                width: "240px"
            }}
        >{loading ? (
            <div className="d-flex align-items-center justify-content-center gap-2">
                    <div
                        className="spinner-border spinner-border"
                        style={{ width: "3rem", height: "3rem" }}
                        role="status"
                    >
                    </div>
                    <span className="text-muted fs-4">Loading</span>
                </div>
        ) : (
        <div>
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
        )}
            
        </div>
    )

}