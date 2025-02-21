import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ListTodo } from "lucide-react";
import { toast } from "react-toastify";
import { logout } from "@/services/userServices";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Project Title */}
        <div className="text-xl font-bold flex items-center justify-center gap-2">
          <ListTodo size={28} color="#000" />
          <span>TaskFlow</span>
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {location.pathname === "/tasks" ? (
            <Button onClick={logoutHandler}>Logout</Button>
          ) : (
            <>
              <Button asChild variant="outline">
                <Link to="/signup">Sign Up</Link>
              </Button>
              <Button asChild>
                <Link to="/login">Login</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
