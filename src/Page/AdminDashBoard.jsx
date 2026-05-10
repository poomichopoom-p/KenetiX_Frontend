

// import {
//   LayoutDashboard,
//   ShoppingBag,
//   Users,
//   Package,
//   Bell,
//   Search,
//   TrendingUp,
//   DollarSign,
//   ShoppingCart,
//   Activity,
// } from "lucide-react";

// export default function AdminDashboard() {
//   return (
//     <div className="min-h-screen bg-[#E4E6EB] flex font-sans">
//       {/* SIDEBAR */}
//       <aside className="w-[90px] bg-[#080809] border-r border-[#1f2937] flex flex-col items-center py-6 gap-6 sticky top-0 h-screen">
//         {/* LOGO */}
//         <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00FF41] to-[#00E5FF] flex items-center justify-center shadow-lg shadow-[#00FF41]/20">
//           <span className="text-black font-extrabold text-xl">K</span>
//         </div>

//         {/* MENU */}
//         <div className="flex flex-col gap-4 mt-8">
//           {/* <SidebarIcon icon={<LayoutDashboard size={22} />} active />
//           <SidebarIcon icon={<ShoppingBag size={22} />} />
//           <SidebarIcon icon={<Users size={22} />} />
//           <SidebarIcon icon={<Package size={22} />} />
//           <SidebarIcon icon={<Bell size={22} />} />*/}
//         </div>
//       </aside>

//       {/* MAIN */}
//       <main className="flex-1 p-8 overflow-hidden">
//         {/* TOPBAR */}
//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
//           <div>
//             <p className="text-[11px] uppercase tracking-[3px] text-[#808090] font-bold mb-2">
//               Admin Dashboard
//             </p>

//             <h1 className="text-[32px] font-extrabold text-[#1A1A1A] leading-none">
//               KINETI X Overview
//             </h1>
//           </div>
//           <div className="flex items-center gap-4">
//             {/* SEARCH */}
//             <div className="bg-white border border-[#CBD5E1] rounded-2xl px-4 h-[54px] flex items-center gap-3 min-w-[300px]">
//               {/* <Search size={18} className="text-[#808090]" /> */}

//               <input
//                 type="text"
//                 placeholder="Search products, customers..."
//                 className="bg-transparent outline-none w-full text-[13px]"
//               />
//             </div>
//             {/* PROFILE */}
//             <div className="bg-[#080809] text-white px-5 h-[54px] rounded-2xl flex items-center gap-3 border border-[#1f2937]">
//               <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00FF41] to-[#00E5FF]" />

//               <div>
//                 <p className="text-[13px] font-bold leading-none">Admin007</p>

//                 <p className="text-[11px] text-[#808090] mt-1">
//                   Project Manager
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* STATS */}
//         <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
//           <StatCard
//             title="Total Revenue"
//             value="$21,324"
//             growth="+12%"
//             icon={<DollarSign size={22} />}
//           />

//           <StatCard
//             title="Orders"
//             value="2,340"
//             growth="+18%"
//             icon={<ShoppingCart size={22} />}
//           />

//           <StatCard
//             title="Customers"
//             value="8,921"
//             growth="+5%"
//             icon={<Users size={22} />}
//           />

//           <StatCard
//             title="Conversion"
//             value="68%"
//             growth="+3%"
//             icon={<TrendingUp size={22} />}
//           />
//         </section>
//         {/* CHART AREA */}
//         <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
//           {/* LARGE CHART */}
//           <div className="xl:col-span-2 bg-[#080809] border border-[#1f2937] rounded-3xl p-7 overflow-hidden relative">
//             <div className="flex items-center justify-between mb-8">
//               <div>
//                 <p className="text-[#808090] text-[11px] uppercase tracking-[2px] mb-2">
//                   Analytics
//                 </p>

//                 <h2 className="text-white text-[22px] font-bold">
//                   Revenue Overview
//                 </h2>
//               </div>

//               <button className="bg-[#C3FF51] hover:bg-[#D3FE51] duration-200 text-black font-bold text-[12px] px-5 py-3 rounded-xl">
//                 Download Report
//               </button>
//             </div>
//             {/* FAKE CHART */}
//             <div className="h-[320px] rounded-2xl bg-gradient-to-br from-[#00FF41]/10 to-[#00E5FF]/10 border border-[#C3FF51]/20 flex items-end gap-5 p-6">
//               <div className="w-full h-[30%] bg-gradient-to-t from-[#00FF41] to-[#00E5FF] rounded-t-xl" />
//               <div className="w-full h-[55%] bg-gradient-to-t from-[#00FF41] to-[#00E5FF] rounded-t-xl" />
//               <div className="w-full h-[45%] bg-gradient-to-t from-[#00FF41] to-[#00E5FF] rounded-t-xl" />
//               <div className="w-full h-[80%] bg-gradient-to-t from-[#00FF41] to-[#00E5FF] rounded-t-xl" />
//               <div className="w-full h-[65%] bg-gradient-to-t from-[#00FF41] to-[#00E5FF] rounded-t-xl" />
//               <div className="w-full h-[95%] bg-gradient-to-t from-[#00FF41] to-[#00E5FF] rounded-t-xl" />
//             </div>
//           </div>
//           {/* SIDE ANALYTICS */}
//           <div className="flex flex-col gap-6">
//             <MiniCard title="Active Users" value="1,230" color="bg-[#C3FF51]" />

//             <MiniCard title="Pending Orders" value="328" color="bg-[#00E5FF]" />

//             <MiniCard title="Returns" value="24" color="bg-[#FFB800]" />
//           </div>
//         </section>
//         {/* LOWER GRID */}
//         <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
//           {/* RECENT ORDERS */}
//           <div className="xl:col-span-2 bg-white border border-[#CBD5E1] rounded-3xl p-7">
//             <div className="flex items-center justify-between mb-8">
//               <div>
//                 <p className="text-[#808090] text-[11px] uppercase tracking-[2px] mb-2">
//                   Orders
//                 </p>

//                 <h2 className="text-[22px] font-bold text-[#1A1A1A]">
//                   Recent Orders
//                 </h2>
//               </div>

//               <button className="bg-[#080809] text-white text-[12px] px-5 py-3 rounded-xl hover:bg-black duration-200">
//                 View All
//               </button>
//             </div>

//             <div className="space-y-4">
//               <OrderRow
//                 name="Nike Alphafly 3"
//                 customer="John Doe"
//                 status="Delivered"
//                 price="$120"
//               />

//               <OrderRow
//                 name="Adidas Adios Pro"
//                 customer="Sarah"
//                 status="Pending"
//                 price="$95"
//               />

//               <OrderRow
//                 name="Asics Superblast"
//                 customer="Michael"
//                 status="Processing"
//                 price="$110"
//               />
//             </div>
//           </div>
//           {/* ACTIVITY */}
//           <div className="bg-[#080809] border border-[#1f2937] rounded-3xl p-7">
//             <div className="flex items-center gap-3 mb-8">
//               <Activity className="text-[#C3FF51]" />

//               <h2 className="text-white text-[22px] font-bold">Activity</h2>
//             </div>

//             <div className="space-y-5">
//               <ActivityItem text="New customer registered" time="2 min ago" />

//               <ActivityItem text="Order #1203 completed" time="10 min ago" />

//               <ActivityItem text="Inventory updated" time="32 min ago" />
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
// /* COMPONENTS */

// function SidebarIcon({ icon, active }) {
//   return (
//     <button
//       className={`w-14 h-14 rounded-2xl flex items-center justify-center duration-200 border ${
//         active
//           ? "bg-[#C3FF51] text-black border-[#C3FF51]"
//           : "bg-[#111214] text-[#808090] border-[#1f2937] hover:border-[#C3FF51] hover:text-[#C3FF51]"
//       }`}
//     >
//       {icon}
//     </button>
//   );
// }

// function StatCard({ title, value, growth, icon }) {
//   return (
//     <div className="bg-[#080809] border border-[#1f2937] rounded-3xl p-6 relative overflow-hidden group hover:border-[#C3FF51] duration-300">
//       <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF41]/5 rounded-full blur-3xl" />

//       <div className="flex items-start justify-between mb-8 relative z-10">
//         <div>
//           <p className="text-[#808090] text-[11px] uppercase tracking-[2px] mb-3">
//             {title}
//           </p>

//           <h2 className="text-white text-[26px] font-extrabold leading-none">
//             {value}
//           </h2>
//         </div>

//         <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#00FF41] to-[#00E5FF] text-black flex items-center justify-center">
//           {icon}
//         </div>
//       </div>

//       <div className="inline-flex items-center gap-2 bg-[#C3FF51]/10 border border-[#C3FF51]/20 rounded-xl px-3 py-2 text-[#C3FF51] text-[12px] font-bold relative z-10">
//         {growth}
//       </div>
//     </div>
//   );
// }
// function MiniCard({ title, value, color }) {
//   return (
//     <div className="bg-white border border-[#CBD5E1] rounded-3xl p-6">
//       <div className={`w-12 h-12 rounded-2xl ${color} mb-6`} />

//       <p className="text-[#808090] text-[11px] uppercase tracking-[2px] mb-2">
//         {title}
//       </p>

//       <h2 className="text-[32px] font-extrabold text-[#1A1A1A]">{value}</h2>
//     </div>
//   );
// }
// function OrderRow({ name, customer, status, price }) {
//   return (
//     <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 hover:border-[#C3FF51] duration-200">
//       <div>
//         <h3 className="font-bold text-[#1A1A1A] text-[14px]">{name}</h3>

//         <p className="text-[#808090] text-[12px] mt-1">{customer}</p>
//       </div>

//       <div className="bg-[#C3FF51]/20 text-[#1A1A1A] text-[11px] font-bold px-4 py-2 rounded-xl">
//         {status}
//       </div>

//       <div className="font-extrabold text-[#1A1A1A] text-[14px]">{price}</div>
//     </div>
//   );
// }
// function ActivityItem({ text, time }) {
//   return (
//     <div className="border border-[#1f2937] rounded-2xl p-5 bg-[#111214]">
//       <p className="text-white text-[13px] font-medium mb-2">{text}</p>

//       <p className="text-[#808090] text-[11px]">{time}</p>
//     </div>
//   );
// }
