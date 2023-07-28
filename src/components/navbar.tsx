import { MobileSidebar } from "@/components/mobile-sidebar";
import { UserNav } from "./user-nav";

const Navbar = async () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserNav />
      </div>
    </div>
  );
};

export default Navbar;
