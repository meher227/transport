import { columns } from "@/app/(dashboard)/(routes)/dashboard/table/columns";
import { DataTable } from "@/app/(dashboard)/(routes)/dashboard/table/data-table";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import vehiclesData from "./data/vehiclesDetails.json";

const page = async () => {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Booking Details
            </CardTitle>
            <Badge>Today</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34</div>
            <p className="mt-2 text-xs text-muted-foreground">
              Last Day Booong Detals: 43
            </p>
            <p className="mt-2 text-xs text-sky-500">Total Quantity: 85</p>
            <p className="mt-2 text-xs text-orange-500">20.93%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">LR Details</CardTitle>
            <Badge>Today</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">64</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Last Day LR: 69
            </p>
            <p className="mt-1 text-xs text-orange-500">5.88%</p>
          </CardContent>
        </Card>
      </div>
      {/* {
        vehiclesData ?
          <DataTable data={vehiclesData} columns={columns} />
          : null
      } */}
    </div>
  );
};

export default page;
