import ComingSoon from "@/components/cards/ComingSoon";
import CategoryTable from "@/components/categories/CategoryTable";

export default function Page() {
    return (
        <div className="flex flex-col gap-4 my-2 mx-4">
            <CategoryTable/>
        </div>
    );
}