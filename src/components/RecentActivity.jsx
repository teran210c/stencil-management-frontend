export default function RecnetActivity() {
    return (
        <div
            className="d-flex flex-column p-4 rounded-3 shadow-sm gap-3"
            style={{
                backgroundColor: "#FFFFFF",
                marginTop: "30px"
            }}
        >
            <h4>
                Recent Activity
            </h4>
            <div className="d-flex flex-column gap-2">
                <div className="border-bottom pb-2">
                    <div>
                        Stencil ABU8-424B01 approved
                    </div>
                    <div className="text-muted small">
                        today
                    </div>
                </div>
                <div className="border-bottom pb-2">
                    <div>
                        Validation scheduled for BCM022-A
                    </div>
                    <div className="text-muted small">
                        yeterday
                    </div>
                </div>
                <div className="border-bottom pb-2">
                    <div>
                        New stencil A17-REWORK registered
                    </div>
                    <div className="text-muted small">
                        2 days ago
                    </div>
                </div>
                <div className="border-bottom pb-2">
                    <div>
                        User Javier completed validation
                    </div>
                    <div className="text-muted small">
                        3 days ago
                    </div>
                </div>
            </div>
        </div>

    )
}