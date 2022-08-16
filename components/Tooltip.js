import {
  Root as TooltipRoot,
  Trigger as TooltipTrigger,
  Content as TooltipContent,
} from "@radix-ui/react-tooltip";

const Tooltip = ({ text, children }) => {
  return (
    <TooltipRoot delayDuration={0}>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent
        side="top"
        sideOffset={4}
        className="text-xs px-1.5 py-1 rounded-sm shadow bg-dark text-eggshell leading-none tooltip-animation"
      >
        {text}
      </TooltipContent>
    </TooltipRoot>
  );
};

export default Tooltip;
