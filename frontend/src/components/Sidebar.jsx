import {
  Download,
  Package,
  CheckCircle,
  Clock,
  MapPin,
  Users,
  Settings,
  LifeBuoy,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";

function NavItem({ href, icon, children, count, isActive }) {
  return (
    <Link to={href}>
      <button
        className={`w-full flex items-center justify-start gap-2 p-2 pl-2
          ${isActive}  text-white hover:bg-white/20`}
      >
        {icon}
        <span className="flex-1 text-left">{children}</span>
        {count !== undefined && (
          <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-xs">
            {count}
          </span>
        )}
      </button>
    </Link>
  );
}

export default function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col bg-primary text-white">
      <div className="p-4">
        <h1 className="mb-8 text-2xl font-bold">AutoMate</h1>
        <div className="mb-2">
          <input
            type="search"
            placeholder="Search"
            className="w-full rounded-md bg-white/10 px-3 py-2 text-sm placeholder:text-white/70"
          />
        </div>
      </div>
      {/*  sidebar items */}
      <nav className="flex-1 flex flex-col space-y-4 p-2">
        <NavItem href="/active-orders" icon={<Clock />} count={71} isActive>
          Active Orders
        </NavItem>
        <NavItem href="/my-offers" icon={<Package />}>
          My Offers
        </NavItem>
        <NavItem href="/pending-orders" icon={<Download />}>
          Pending Orders
        </NavItem>
        <NavItem href="/completed-orders" icon={<CheckCircle />}>
          Completed Orders
        </NavItem>
        <NavItem href="/missed-requests" icon={<Clock />}>
          Missed Requests
        </NavItem>
        <NavItem href="/locations" icon={<MapPin />}>
          Locations
        </NavItem>
        <NavItem href="/staff" icon={<Users />}>
          Staff
        </NavItem>
      </nav>
      <div className="mt-auto space-y-1 p-2">
        <NavItem href="/settings" icon={<Settings />}>
          Settings
        </NavItem>
        <NavItem href="/support" icon={<LifeBuoy />}>
          Support
        </NavItem>
      </div>
      <div className="border-t border-white/20 p-4">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white p-2">
            <Building2 className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 text-sm">
            <div className="font-medium">Telle Tire & Auto Centers</div>
            <div className="text-white/70">alex@telletire.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
