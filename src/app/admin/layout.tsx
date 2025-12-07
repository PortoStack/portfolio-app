import Header from "@/components/admin/header";
import Sidebar from "@/components/admin/sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex bg-gray-100 min-h-screen">
      <Sidebar />
      {/* <Header /> */}
      {children}
    </div>
  );
}
