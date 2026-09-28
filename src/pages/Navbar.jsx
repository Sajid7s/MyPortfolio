import { useNavigate } from "react-router-dom";

import {
  Home,
  User,
  Code2,
  Folder,
  FileText,
  Mail,
} from "lucide-react";

import { MagneticDock } from "../components/ui/magnetic-dock";

function Navbar() {

  const navigate = useNavigate();

  const items = [
    {
      id: "home",
      label: "Home",
      icon: <Home size={22}
        />,
      path: "/",
    },
   
    {
      id: "skills",
      label: "Skills",
      icon: <Code2 size={22} />,
      path: "/skills",
    },
    {
      id: "projects",
      label: "Projects",
      icon: <Folder size={22} />,
      path: "/projects",
    },
    {
      id: "resume",
      label: "Resume",
      icon: <FileText size={22} />,
      path: "/resume",
    },
    {
      id: "contact",
      label: "Contact",
      icon: <Mail size={22} />,
      path: "/contact",
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">

      <MagneticDock className=""
        items={items}
        onItemClick={(item) => navigate(item.path)}
      />

    </div>
  );
}

export default Navbar;