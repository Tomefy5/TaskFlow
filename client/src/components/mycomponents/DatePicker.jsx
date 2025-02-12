import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function DatePicker({ field }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={`w-[240px] justify-start text-left font-normal ${!field.value ? "text-muted-foreground" : ""}`}
        >
          <CalendarIcon />
          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={field.value} 
          onSelect={field.onChange} 
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
