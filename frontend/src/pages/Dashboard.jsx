import Sidebar from "../components/Sidebar";
import MembersTable from "../components/MembersTable";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-background w-full">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <main className="flex w-full">
          <MembersTable />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
