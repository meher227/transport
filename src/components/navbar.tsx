import { MobileSidebar } from "@/components/mobile-sidebar";
import { UserNav } from "./user-nav";
import { ModeToggle } from "./mode-toggle";

const Navbar = async () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end align-middle">
        {/* <div className="mr-4">
          <ModeToggle />
        </div> */}
        <div>
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
