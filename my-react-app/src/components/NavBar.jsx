import Sidebar, { SidebarItem } from './Sidebar.jsx';
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from 'lucide-react';
function NavBar() {
  return (
    <main className='App'>
      <Sidebar>
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Home" />
        <SidebarItem icon={<BarChart3 size={20} />} text="Blog" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Contact" />
      </Sidebar>
    </main>
  );
}

export default NavBar