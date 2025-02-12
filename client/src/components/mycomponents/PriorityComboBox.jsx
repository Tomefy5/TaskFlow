import { useState } from "react";
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

// Options de priorité
const priorities = [
  { value: "high", label: "Haute" },
  { value: "medium", label: "Moyenne" },
  { value: "low", label: "Faible" },
];

export function PriorityCombobox({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
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
            <CommandEmpty>Aucune option trouvée</CommandEmpty>
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
}
