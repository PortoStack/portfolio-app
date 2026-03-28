import Sidebar from "@/components/admin/sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex bg-gradient-to-br from-admin-foreground/70 to-admin-foreground min-h-screen gap-4 p-8">
      <Sidebar />
      <div className="w-full bg-admin-background rounded-lg">
        {children}
      </div>
    </div>
  );
}
