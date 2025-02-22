import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "../../images/TaskFlow.png";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUserStore } from "@/store/userStore";
import { useNavigate } from "react-router-dom";
import { useTaskStore } from "@/store/taskStore";
import { logout } from "@/services/userServices";
import { toast } from "react-toastify";

export default function InfoUser() {
  const navigate = useNavigate();
  const { clearStore } = useTaskStore();
  const { clearUser } = useUserStore();

  const logoutHandler = async () => {
    try {
      await logout();
      clearStore();
      clearUser();
      navigate("/login");
    } catch (error) {
      toast.error(error);
    }
  };

  const { user } = useUserStore();

  return (
    <div className="flex gap-3 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="p-0 flex justify-center items-center"
          >
            <Avatar>
              <AvatarImage src={Image} alt="User profil" />
              <AvatarFallback>User Profil</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>

        {/* Content */}
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <a
              href="https://github.com/Tomefy5/TaskFlow"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-blue-600"
            >
              GitHub
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>API</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Button variant="ghost" className="w-full" onClick={logoutHandler}>
              Log out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <h2 className="font-bold text-lg">{user.username}</h2>
    </div>
  );
}
