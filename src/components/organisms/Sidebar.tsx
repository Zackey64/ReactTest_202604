import { Frame } from "@/components/atoms/Frame";

export const Sidebar = () => {
  return (
    <Frame className="m-4">
    <aside className="w-40  p-4 hidden md:block h-160">
        
            <ul className="space-y-4">
                <li><a href="#" className="hover:text-blue-600">Dashboard</a></li>
                <li><a href="#" className="hover:text-blue-600">Settings</a></li>
            </ul>
        
      
    </aside>
    </Frame>
  );
}