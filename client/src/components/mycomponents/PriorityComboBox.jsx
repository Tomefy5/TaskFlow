import { forwardRef, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const priorities = [
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

export const PriorityCombobox = forwardRef(function PriorityCombobox(
  { value, onChange },
  ref
) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          ref={ref} 
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? priorities.find((p) => p.value === value)?.label
            : "Sélectionner la priorité"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder="Recherche..."
            value={inputValue}
            onValueChange={setInputValue}
          />
          <CommandList>
            <CommandEmpty>Option not found</CommandEmpty>
            <CommandGroup>
              {priorities
                .filter((p) =>
                  p.label.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((p) => (
                  <CommandItem
                    key={p.value}
                    value={p.value}
                    onSelect={(selectedValue) => {
                      onChange(selectedValue);
                      setOpen(false);
                      setInputValue("");
                    }}
                  >
                    <Check
                      className={`mr-2 h-4 w-4 ${
                        value === p.value ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    {p.label}
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
});
