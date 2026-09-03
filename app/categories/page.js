import ComingSoon from "@/components/cards/ComingSoon";
import CategoryTable from "@/components/categories/CategoryTable";

export default function Page() {
    return (
        <div className="min-h-[calc(100vh-22px)] flex flex-col gap-3 my-1 mx-2">
            <CategoryTable/>
        </div>
    );
}