export default function Footer() {
  return (
    <div className="text-white absolute bottom-0 right-1/2 translate-x-1/2 pb-4 text-[10pt]">
      &copy; {new Date().getFullYear()} PortoStack. All rights reserved.
    </div>
  );
}
