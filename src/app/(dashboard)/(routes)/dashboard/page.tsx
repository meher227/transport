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
import Image from "next/image";
import ChartComponent from "@/components/chart";

const page = async () => {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-primary text-white">
            <CardTitle className="text-lg font-medium">
              Booking Details
            </CardTitle>
            <Badge className="bg-sky-500">Today</Badge>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-2xl font-bold">34</div>
            <p className="mt-2 text-xs text-muted-foreground">
              Last Day Booong Detals: 43
            </p>
            <p className="mt-2 text-xs text-sky-700">Total Quantity: 85</p>
            <p className="mt-2 text-xs text-orange-600">20.93%</p>
          </CardContent>
        </Card>
        <Card className="shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-primary text-white">
            <CardTitle className="text-lg font-medium">LR Details</CardTitle>
            <Badge className="bg-sky-500">Today</Badge>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-2xl font-bold">64</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Last Day LR: 69
            </p>
            <p className="mt-1 text-xs text-orange-600">5.88%</p>
          </CardContent>
        </Card>
      </div>
      <div>
        <Image
          src={"/truck.gif"}
          height={100}
          width={100}
          alt={`running truck`}
        />
      </div>
      <div className="flex w-80 h-80">
        <ChartComponent />
      </div>
      {vehiclesData ? (
        <DataTable data={vehiclesData} columns={columns} />
      ) : null}
    </div>
  );
};

export default page;
