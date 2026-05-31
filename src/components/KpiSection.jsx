import KpiCard from "../components/KpiCard";

export default function KpiSection({ kpiCards, loading }) {

    return (
        <div
            className="d-flex pt-4 gap-5 justify-content-center"
        >
            {kpiCards.map((kpiCard, index) => {
                return (
                    <KpiCard
                        key={index}
                        title={kpiCard.title}
                        value={kpiCard.value}
                        loading={loading}
                        
                    />
                )
            })}
            
        </div>
    )
}