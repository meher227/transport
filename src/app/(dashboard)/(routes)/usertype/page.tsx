import { FC } from "react";
import { columns } from "@/app/(dashboard)/(routes)/usertype/table/columns";
import { DataTable } from "@/app/(dashboard)/(routes)/usertype/table/data-table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import userTypeData from "./data/userType.json";

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex justify-end mb-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">Add User type</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add User type</DialogTitle>
              {/* <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription> */}
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="usertype" className="text-right">
                  User type
                </Label>
                <Input id="usertype" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role-description" className="text-right">
                  Role description
                </Label>
                <Input id="role-description" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      {userTypeData ? (
        <DataTable data={userTypeData} columns={columns} />
      ) : null}
    </div>
  );
};

export default page;
