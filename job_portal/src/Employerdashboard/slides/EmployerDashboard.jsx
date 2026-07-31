import React from "react";
import EmployerNavbar from './EmployerNavbar'
import EmployerSidebar from './EmployerSidebar'
import StatCard from '../StatCard'
const EmployerDashboard = () => {
return (
<div className="min-h-screen bg-purple-50">
{/* Top Navbar */}
<EmployerNavbar />
<div className="flex">
{/* Sidebar */}
<EmployerSidebar />
{/* Main Content */}
<div className="flex-1 p-8">
<h1 className="text-3xl font-bold text-purple-800">
Welcome, Bharat IT 👋
</h1>
<p className="text-gray-600 mt-2">
Manage your jobs and candidates here.
</p>
{/* Statistics */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
<StatCard
title="Active Jobs"
value="12"
/>
<StatCard
title="Applications"
value="245"
/>
<StatCard
title="Shortlisted"
value="35"
/>
<StatCard
title="Interviews"
value="8"
/>
</div>
{/* Recent Activity */}
<div className="bg-white rounded-xl shadow p-6 mt-10">
<h2 className="text-xl font-bold text-purple-800">
Recent Activity
</h2>
<div className="mt-5 space-y-4">
<div className="border p-4 rounded-lg">
Frontend Developer job received 25 applications
</div>
<div className="border p-4 rounded-lg">
John Arumura shortlisted for React Developer
</div>
</div>
</div>
</div>
</div>
</div>
);
};
export default EmployerDashboard;