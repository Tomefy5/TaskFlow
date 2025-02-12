import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Menu, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Task() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col gap-2">
        <CardTitle>Title</CardTitle>
        <CardDescription>
          Deploy your new project in one-click. Deploy your new project in
          one-click Deploy your new project in one-click
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-0 md:gap-2">
        <Button variant="ghost" className="px-3">
          <Menu />
        </Button>
        <div className="flex justify-center items-center gap-2 mr-4">
          <Clock size={18} />
          <span className="text-sm">July 15</span>
        </div>
        <Badge className={"w-[60px] flex justify-center items-center"}>
          High
        </Badge>
      </CardFooter>
    </Card>
  );
}
