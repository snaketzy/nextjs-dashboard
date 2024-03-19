import { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatesInvoice from "@/app/ui/dashboard/latest-invoices";
import { lusitana  } from "@/app/ui/fonts";

export default function Page () {
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            </div>
            <div className="mt-6 grid grid-cols-1 gap06 md:grid-cols-4 lg:grid-cols-8">

            </div>
        </main>
    )
}