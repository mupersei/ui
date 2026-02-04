'use strict';

var React4 = require('react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');
var DialogPrimitive = require('@radix-ui/react-dialog');
var lucideReact = require('lucide-react');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var ScrollAreaPrimitive = require('@radix-ui/react-scroll-area');
var SeparatorPrimitive = require('@radix-ui/react-separator');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React4__namespace = /*#__PURE__*/_interopNamespace(React4);
var DialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(DialogPrimitive);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);
var ScrollAreaPrimitive__namespace = /*#__PURE__*/_interopNamespace(ScrollAreaPrimitive);
var SeparatorPrimitive__namespace = /*#__PURE__*/_interopNamespace(SeparatorPrimitive);

// atoms/Button/Button.tsx
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var buttonVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React4__namespace.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    return /* @__PURE__ */ jsxRuntime.jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
var Input = React4__namespace.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
var badgeVariants = classVarianceAuthority.cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
var Dialog = DialogPrimitive__namespace.Root;
var DialogTrigger = DialogPrimitive__namespace.Trigger;
var DialogPortal = DialogPrimitive__namespace.Portal;
var DialogClose = DialogPrimitive__namespace.Close;
var DialogOverlay = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DialogPrimitive__namespace.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
var DialogContent = React4__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsxs(
    DialogPrimitive__namespace.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive__namespace.Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("flex flex-col space-y-1.5 text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DialogPrimitive__namespace.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive__namespace.Title.displayName;
var DialogDescription = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive__namespace.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
DialogDescription.displayName = DialogPrimitive__namespace.Description.displayName;
var DropdownMenu = DropdownMenuPrimitive__namespace.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive__namespace.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive__namespace.Group;
var DropdownMenuPortal = DropdownMenuPrimitive__namespace.Portal;
var DropdownMenuSub = DropdownMenuPrimitive__namespace.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive__namespace.RadioGroup;
var DropdownMenuSubTrigger = React4__namespace.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  DropdownMenuPrimitive__namespace.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive__namespace.SubTrigger.displayName;
var DropdownMenuSubContent = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive__namespace.SubContent.displayName;
var DropdownMenuContent = React4__namespace.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive__namespace.Content.displayName;
var DropdownMenuItem = React4__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive__namespace.Item.displayName;
var DropdownMenuCheckboxItem = React4__namespace.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  DropdownMenuPrimitive__namespace.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-4 w-4 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive__namespace.CheckboxItem.displayName;
var DropdownMenuRadioItem = React4__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  DropdownMenuPrimitive__namespace.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-4 w-4 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive__namespace.RadioItem.displayName;
var DropdownMenuLabel = React4__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive__namespace.Label.displayName;
var DropdownMenuSeparator = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive__namespace.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var Sheet = DialogPrimitive__namespace.Root;
var SheetTrigger = DialogPrimitive__namespace.Trigger;
var SheetClose = DialogPrimitive__namespace.Close;
var SheetPortal = DialogPrimitive__namespace.Portal;
var SheetOverlay = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DialogPrimitive__namespace.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
var sheetVariants = classVarianceAuthority.cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
var SheetContent = React4__namespace.forwardRef(
  ({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive__namespace.Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
      ] })
    ] })
  ] })
);
SheetContent.displayName = DialogPrimitive__namespace.Content.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive__namespace.Title, { ref, className: cn("text-lg font-semibold text-foreground", className), ...props }));
SheetTitle.displayName = DialogPrimitive__namespace.Title.displayName;
var SheetDescription = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive__namespace.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
SheetDescription.displayName = DialogPrimitive__namespace.Description.displayName;
var ScrollArea = React4__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(ScrollAreaPrimitive__namespace.Root, { ref, className: cn("relative overflow-hidden", className), ...props, children: [
  /* @__PURE__ */ jsxRuntime.jsx(ScrollAreaPrimitive__namespace.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
  /* @__PURE__ */ jsxRuntime.jsx(ScrollBar, {}),
  /* @__PURE__ */ jsxRuntime.jsx(ScrollAreaPrimitive__namespace.Corner, {})
] }));
ScrollArea.displayName = ScrollAreaPrimitive__namespace.Root.displayName;
var ScrollBar = React4__namespace.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ScrollAreaPrimitive__namespace.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(ScrollAreaPrimitive__namespace.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive__namespace.ScrollAreaScrollbar.displayName;
var Separator2 = React4__namespace.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SeparatorPrimitive__namespace.Root,
  {
    ref,
    decorative,
    orientation,
    className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
    ...props
  }
));
Separator2.displayName = SeparatorPrimitive__namespace.Root.displayName;
var SearchBar = React4__namespace.forwardRef(
  ({ value, onChange, placeholder = "\uAC80\uC0C9...", className }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("relative", className), role: "search", children: [
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Search, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Input,
        {
          ref,
          type: "search",
          placeholder,
          className: "pl-8 h-10 w-full",
          value,
          onChange: (e) => onChange(e.target.value),
          "aria-label": placeholder
        }
      )
    ] });
  }
);
SearchBar.displayName = "SearchBar";
var ViewToggle = React4__namespace.forwardRef(
  ({ viewMode, onViewModeChange, gridLabel = "\uADF8\uB9AC\uB4DC \uBDF0", listLabel = "\uB9AC\uC2A4\uD2B8 \uBDF0", className }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { ref, className: cn("flex items-center border rounded-md", className), role: "group", "aria-label": "\uBDF0 \uBAA8\uB4DC \uC120\uD0DD", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          variant: viewMode === "grid" ? "default" : "ghost",
          size: "icon",
          onClick: () => onViewModeChange("grid"),
          className: "rounded-none rounded-l-md h-8 w-8 sm:h-10 sm:w-10",
          "aria-label": gridLabel,
          "aria-pressed": viewMode === "grid",
          children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Grid3X3, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4", "aria-hidden": "true" })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          variant: viewMode === "list" ? "default" : "ghost",
          size: "icon",
          onClick: () => onViewModeChange("list"),
          className: "rounded-none rounded-r-md h-8 w-8 sm:h-10 sm:w-10",
          "aria-label": listLabel,
          "aria-pressed": viewMode === "list",
          children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.LayoutGrid, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4", "aria-hidden": "true" })
        }
      )
    ] });
  }
);
ViewToggle.displayName = "ViewToggle";
var defaultLanguages = [
  { code: "ko", label: "\uD55C\uAD6D\uC5B4" },
  { code: "en", label: "English" }
];
var LanguageSelector = React4__namespace.forwardRef(
  ({ currentLocale, onLocaleChange, languages = defaultLanguages, className }, ref) => {
    const currentLanguage = languages.find((lang) => lang.code === currentLocale);
    return /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
        Button,
        {
          ref,
          variant: "outline",
          size: "sm",
          className: cn("h-8 sm:h-10 flex items-center gap-1 focus-visible:ring-0 focus-visible:ring-offset-0", className),
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Globe, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "hidden sm:inline", children: currentLanguage?.label || "\uC5B8\uC5B4" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuContent, { align: "end", children: languages.map((lang) => /* @__PURE__ */ jsxRuntime.jsx(
        DropdownMenuItem,
        {
          onClick: () => onLocaleChange(lang.code),
          className: cn(
            "cursor-pointer",
            currentLocale === lang.code && "bg-accent"
          ),
          children: lang.label
        },
        lang.code
      )) })
    ] });
  }
);
LanguageSelector.displayName = "LanguageSelector";
var Card = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
function ItemCardInner({
  item,
  mode,
  onDetailClick,
  onCtaClick,
  detailLabel = "\uC0C1\uC138",
  defaultCtaLabel = "\uC2DC\uC791",
  className
}, ref) {
  const IconComponent = item.icon;
  const handleDetailClick = () => {
    onDetailClick?.(item);
  };
  const handleCtaClick = () => {
    if (item.ctaUrl) {
      window.open(item.ctaUrl, "_blank", "noopener,noreferrer");
    }
    onCtaClick?.(item);
  };
  if (mode === "grid") {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      Card,
      {
        ref,
        className: cn(
          "overflow-hidden transition-all hover:shadow-md hover:border-gray-300 h-full flex flex-col",
          className
        ),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(CardHeader, { className: "pb-2 pt-4 px-5", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center w-10 h-10 rounded-lg border bg-background", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx(IconComponent, { className: "h-5 w-5 text-foreground" }) }),
            /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { className: "text-base font-medium", children: item.title })
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsx(CardContent, { className: "pb-2 pt-1 px-5 flex-grow", children: /* @__PURE__ */ jsxRuntime.jsx(CardDescription, { className: "text-sm line-clamp-2", children: item.description }) }),
          /* @__PURE__ */ jsxRuntime.jsxs(CardFooter, { className: "flex justify-between pt-4 px-5 pb-5", children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "text-sm text-muted-foreground h-8 px-2",
                onClick: handleDetailClick,
                "aria-label": `${item.title} ${detailLabel}`,
                children: detailLabel
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                variant: "default",
                size: "sm",
                className: "text-sm h-8 px-4",
                onClick: handleCtaClick,
                "aria-label": `${item.title} ${item.ctaLabel || defaultCtaLabel}`,
                children: item.ctaLabel || defaultCtaLabel
              }
            )
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "article",
    {
      ref,
      className: cn(
        "flex flex-row items-center justify-between p-4 rounded-lg border bg-card hover:shadow-sm hover:border-gray-300 transition-all",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center w-10 h-10 rounded-lg border bg-background shrink-0", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx(IconComponent, { className: "h-5 w-5 text-foreground" }) }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "font-medium text-base truncate", children: item.title }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground line-clamp-1", children: item.description })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 ml-4", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "text-sm text-muted-foreground h-8 px-2",
              onClick: handleDetailClick,
              "aria-label": `${item.title} ${detailLabel}`,
              children: detailLabel
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              variant: "default",
              size: "sm",
              className: "text-sm h-8 px-4",
              onClick: handleCtaClick,
              "aria-label": `${item.title} ${item.ctaLabel || defaultCtaLabel}`,
              children: item.ctaLabel || defaultCtaLabel
            }
          )
        ] })
      ]
    }
  );
}
var ItemCard = React4__namespace.forwardRef(ItemCardInner);
function ChromeExtensionJsonLd({
  siteUrl,
  name,
  description,
  version = "1.0.0",
  downloadUrl,
  screenshotPath = "/og-image.png",
  logoPath = "/logo.png",
  features = [],
  price = "0",
  priceCurrency = "USD",
  rating,
  socialLinks = [],
  includeSearch = false,
  searchUrlTemplate = "/?q={search_term_string}"
}) {
  const screenshotUrl = screenshotPath.startsWith("http") ? screenshotPath : `${siteUrl}${screenshotPath}`;
  const logoUrl = logoPath.startsWith("http") ? logoPath : `${siteUrl}${logoPath}`;
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory: "BrowserApplication",
    operatingSystem: "Chrome",
    offers: {
      "@type": "Offer",
      price,
      priceCurrency
    },
    author: {
      "@type": "Organization",
      name,
      url: siteUrl
    },
    softwareVersion: version,
    downloadUrl,
    screenshot: screenshotUrl
  };
  if (rating) {
    softwareApplicationSchema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: rating.ratingValue,
      ratingCount: rating.ratingCount
    };
  }
  if (features.length > 0) {
    softwareApplicationSchema.featureList = features;
  }
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url: siteUrl,
    logo: logoUrl
  };
  if (socialLinks.length > 0) {
    organizationSchema.sameAs = socialLinks;
  }
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url: siteUrl
  };
  if (includeSearch) {
    websiteSchema.potentialAction = {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}${searchUrlTemplate}`
      },
      "query-input": "required name=search_term_string"
    };
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(softwareApplicationSchema)
        }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(organizationSchema)
        }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(websiteSchema)
        }
      }
    )
  ] });
}
var Sidebar = React4__namespace.forwardRef(
  ({
    categories,
    activeCategory,
    onCategoryChange,
    categoryTitle = "\uCE74\uD14C\uACE0\uB9AC",
    onFilterClick,
    filterLabel = "\uD544\uD130",
    onHelpClick,
    helpLabel = "\uB3C4\uC6C0\uB9D0",
    className
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "aside",
      {
        ref,
        className: cn("hidden md:block w-56 shrink-0", className),
        "aria-label": "\uCE74\uD14C\uACE0\uB9AC \uB124\uBE44\uAC8C\uC774\uC158",
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-card rounded-lg border shadow-sm p-4", children: [
          /* @__PURE__ */ jsxRuntime.jsx("h3", { id: "sidebar-category-heading", className: "font-medium mb-3 text-sm text-muted-foreground", children: categoryTitle }),
          /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "space-y-1", "aria-labelledby": "sidebar-category-heading", children: categories.map((category) => /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              variant: activeCategory === category.id ? "default" : "ghost",
              className: "w-full justify-start text-left",
              onClick: () => onCategoryChange(category.id),
              "aria-current": activeCategory === category.id ? "page" : void 0,
              children: category.label
            },
            category.id
          )) }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-6 pt-4 border-t", children: [
            onFilterClick && /* @__PURE__ */ jsxRuntime.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "w-full h-10 mb-2",
                onClick: onFilterClick,
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ListFilter, { className: "h-4 w-4 mr-2", "aria-hidden": "true" }),
                  filterLabel
                ]
              }
            ),
            onHelpClick && /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "w-full h-10",
                onClick: onHelpClick,
                children: helpLabel
              }
            )
          ] })
        ] })
      }
    );
  }
);
Sidebar.displayName = "Sidebar";
var MobileMenu = React4__namespace.forwardRef(
  ({
    categories,
    activeCategory,
    onCategoryChange,
    menuTitle = "\uBA54\uB274",
    menuDescription = "\uCE74\uD14C\uACE0\uB9AC \uBC0F \uBA54\uB274 \uC635\uC158\uC744 \uC120\uD0DD\uD558\uC138\uC694",
    menuButtonLabel = "\uBA54\uB274 \uC5F4\uAE30",
    categoryTitle = "\uCE74\uD14C\uACE0\uB9AC",
    searchValue = "",
    onSearchChange,
    searchPlaceholder = "\uAC80\uC0C9...",
    onFilterClick,
    filterLabel = "\uD544\uD130",
    onHelpClick,
    helpLabel = "\uB3C4\uC6C0\uB9D0",
    className
  }, ref) => {
    const [open, setOpen] = React4__namespace.useState(false);
    const handleCategoryChange = (categoryId) => {
      onCategoryChange(categoryId);
      setOpen(false);
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(Sheet, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxRuntime.jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          ref,
          variant: "outline",
          size: "icon",
          className: cn("h-10 w-10", className),
          "aria-label": menuButtonLabel,
          children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Menu, { className: "h-4 w-4" })
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsxs(SheetContent, { side: "right", className: "w-[80%] sm:w-[350px]", children: [
        /* @__PURE__ */ jsxRuntime.jsxs(SheetHeader, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(SheetTitle, { children: menuTitle }),
          /* @__PURE__ */ jsxRuntime.jsx(SheetDescription, { className: "sr-only", children: menuDescription })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "py-4 space-y-6", children: [
          onSearchChange && /* @__PURE__ */ jsxRuntime.jsx(
            SearchBar,
            {
              value: searchValue,
              onChange: onSearchChange,
              placeholder: searchPlaceholder,
              className: "w-full"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "font-medium mb-3 text-sm text-muted-foreground", children: categoryTitle }),
            /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "space-y-1", children: categories.map((category) => /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                variant: activeCategory === category.id ? "default" : "ghost",
                className: "w-full justify-start text-left",
                onClick: () => handleCategoryChange(category.id),
                children: category.label
              },
              category.id
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "pt-4 border-t space-y-2", children: [
            onFilterClick && /* @__PURE__ */ jsxRuntime.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "w-full h-10",
                onClick: onFilterClick,
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ListFilter, { className: "h-4 w-4 mr-2" }),
                  filterLabel
                ]
              }
            ),
            onHelpClick && /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "w-full h-10",
                onClick: onHelpClick,
                children: helpLabel
              }
            )
          ] })
        ] })
      ] })
    ] });
  }
);
MobileMenu.displayName = "MobileMenu";
var HeroSection = React4__namespace.forwardRef(
  ({
    title = "Recorda",
    subtitle = "\uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uBC14\uB85C \uB179\uC74C\uD558\uC138\uC694",
    description = "\uB9C8\uC774\uD06C, \uD0ED \uC624\uB514\uC624\uB97C \uD55C \uBC88\uC758 \uD074\uB9AD\uC73C\uB85C. \uBB34\uB8CC \uD06C\uB86C \uD655\uC7A5 \uD504\uB85C\uADF8\uB7A8.",
    ctaUrl = "https://chrome.google.com/webstore/detail/recorda",
    ctaLabel = "Chrome\uC5D0 \uCD94\uAC00\uD558\uAE30",
    trustBadge = "\uBB34\uB8CC \xB7 \uC124\uCE58 \uAC04\uD3B8 \xB7 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638",
    icon: IconComponent = lucideReact.Mic,
    ctaIcon: CtaIconComponent = lucideReact.Chrome,
    ariaLabel = "\uD788\uC5B4\uB85C \uC139\uC158",
    className
  }, ref) => {
    const handleCtaClick = () => {
      window.open(ctaUrl, "_blank", "noopener,noreferrer");
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "section",
      {
        ref,
        className: cn(
          "relative py-20 md:py-32 px-4 overflow-hidden",
          className
        ),
        "aria-label": ariaLabel,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-muted/50 to-background -z-10", "aria-hidden": "true" }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "container mx-auto max-w-4xl text-center", children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary text-primary-foreground mb-8 shadow-lg", children: /* @__PURE__ */ jsxRuntime.jsx(IconComponent, { className: "h-10 w-10", "aria-hidden": "true" }) }),
            /* @__PURE__ */ jsxRuntime.jsx("h1", { className: "text-4xl md:text-6xl font-bold tracking-tight mb-4", children: title }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xl md:text-2xl text-foreground font-medium mb-4", children: subtitle }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto mb-10", children: description }),
            /* @__PURE__ */ jsxRuntime.jsxs(
              Button,
              {
                size: "lg",
                onClick: handleCtaClick,
                className: "h-14 px-8 text-lg gap-2 shadow-lg hover:shadow-xl transition-shadow",
                "aria-label": `${ctaLabel} (\uC0C8 \uCC3D\uC5D0\uC11C \uC5F4\uB9BC)`,
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(CtaIconComponent, { className: "h-5 w-5", "aria-hidden": "true" }),
                  ctaLabel
                ]
              }
            ),
            trustBadge && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "mt-6 text-sm text-muted-foreground", children: trustBadge })
          ] })
        ]
      }
    );
  }
);
HeroSection.displayName = "HeroSection";
var CtaSection = React4__namespace.forwardRef(
  ({
    title = "\uC9C0\uAE08 \uBC14\uB85C \uC2DC\uC791\uD558\uC138\uC694",
    description = "\uBB34\uB8CC\uB85C Recorda\uB97C \uC124\uCE58\uD558\uACE0 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uB179\uC74C\uC744 \uC2DC\uC791\uD558\uC138\uC694.",
    ctaUrl = "https://chrome.google.com/webstore/detail/recorda",
    ctaLabel = "Chrome\uC5D0 \uCD94\uAC00\uD558\uAE30",
    ctaIcon: CtaIconComponent = lucideReact.Chrome,
    secondaryLabel = "\uB354 \uC54C\uC544\uBCF4\uAE30",
    secondaryUrl = "/help",
    ariaLabel = "\uC124\uCE58 \uC548\uB0B4",
    className
  }, ref) => {
    const handleCtaClick = () => {
      window.open(ctaUrl, "_blank", "noopener,noreferrer");
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      "section",
      {
        ref,
        className: cn(
          "py-20 md:py-28 px-4 bg-primary text-primary-foreground",
          className
        ),
        "aria-label": ariaLabel,
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "container mx-auto max-w-3xl text-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: title }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-lg opacity-90 mb-10 max-w-xl mx-auto", children: description }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntime.jsxs(
              Button,
              {
                size: "lg",
                variant: "secondary",
                onClick: handleCtaClick,
                className: "h-14 px-8 text-lg gap-2 w-full sm:w-auto",
                "aria-label": `${ctaLabel} (\uC0C8 \uCC3D\uC5D0\uC11C \uC5F4\uB9BC)`,
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(CtaIconComponent, { className: "h-5 w-5", "aria-hidden": "true" }),
                  ctaLabel
                ]
              }
            ),
            secondaryUrl && /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                size: "lg",
                variant: "outline",
                className: "h-14 px-8 text-lg gap-2 w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10",
                asChild: true,
                children: /* @__PURE__ */ jsxRuntime.jsxs("a", { href: secondaryUrl, children: [
                  secondaryLabel,
                  /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowRight, { className: "h-5 w-5", "aria-hidden": "true" })
                ] })
              }
            )
          ] })
        ] })
      }
    );
  }
);
CtaSection.displayName = "CtaSection";
var Header = React4__namespace.forwardRef(
  ({
    brandName = "Recorda",
    subTitle = "Service Hub",
    searchValue,
    onSearchChange,
    searchPlaceholder = "\uAC80\uC0C9...",
    viewMode,
    onViewModeChange,
    currentLocale,
    onLocaleChange,
    className
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "header",
      {
        ref,
        className: cn(
          "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
          className
        ),
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 sm:gap-4", children: [
            /* @__PURE__ */ jsxRuntime.jsx("h1", { className: "text-xl sm:text-2xl font-bold", children: brandName }),
            subTitle && /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-base sm:text-xl text-muted-foreground", children: subTitle })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              SearchBar,
              {
                value: searchValue,
                onChange: onSearchChange,
                placeholder: searchPlaceholder,
                className: "flex-1 sm:flex-none sm:w-64"
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(ViewToggle, { viewMode, onViewModeChange }),
            /* @__PURE__ */ jsxRuntime.jsx(
              LanguageSelector,
              {
                currentLocale,
                onLocaleChange
              }
            )
          ] })
        ]
      }
    );
  }
);
Header.displayName = "Header";
var Footer = React4__namespace.forwardRef(
  ({
    brandName = "Brand",
    copyright = "All rights reserved.",
    links = [
      { label: "\uC774\uC6A9\uC57D\uAD00", href: "/terms" },
      { label: "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68", href: "/privacy" },
      { label: "\uBB38\uC758\uD558\uAE30", href: "/contact" }
    ],
    navAriaLabel = "Footer links",
    className
  }, ref) => {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return /* @__PURE__ */ jsxRuntime.jsx(
      "footer",
      {
        ref,
        className: cn("border-t py-3 bg-background", className),
        role: "contentinfo",
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "container flex flex-col sm:flex-row justify-between items-center px-4", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            "\xA9 ",
            currentYear,
            " ",
            brandName,
            ". ",
            copyright
          ] }),
          links.length > 0 && /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "flex space-x-6 mt-2 sm:mt-0", "aria-label": navAriaLabel, children: links.map((link) => /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              variant: "link",
              size: "sm",
              className: "text-xs text-muted-foreground p-0 h-auto",
              asChild: true,
              children: /* @__PURE__ */ jsxRuntime.jsx("a", { href: link.href, children: link.label })
            },
            link.href
          )) })
        ] })
      }
    );
  }
);
Footer.displayName = "Footer";
var FeaturesSection = React4__namespace.forwardRef(
  ({
    title = "\uC8FC\uC694 \uAE30\uB2A5",
    subtitle = "\uB2E4\uC591\uD55C \uAE30\uB2A5\uC744 \uC0B4\uD3B4\uBCF4\uC138\uC694",
    features,
    ariaLabelledBy = "features-title",
    className
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "section",
      {
        ref,
        className: cn("py-20 md:py-28 px-4 bg-muted/30", className),
        "aria-labelledby": ariaLabelledBy,
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "container mx-auto max-w-6xl", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center mb-16", children: [
            /* @__PURE__ */ jsxRuntime.jsx("h2", { id: ariaLabelledBy, className: "text-3xl md:text-4xl font-bold mb-4", children: title }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: subtitle })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8", children: features.map((feature) => {
            const IconComponent = feature.icon;
            return /* @__PURE__ */ jsxRuntime.jsxs(
              "div",
              {
                className: "bg-card rounded-xl border p-6 hover:shadow-md transition-shadow",
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4", children: /* @__PURE__ */ jsxRuntime.jsx(IconComponent, { className: "h-6 w-6", "aria-hidden": "true" }) }),
                  /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-lg font-semibold mb-2", children: feature.title }),
                  /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-muted-foreground", children: feature.description })
                ]
              },
              feature.id
            );
          }) })
        ] })
      }
    );
  }
);
FeaturesSection.displayName = "FeaturesSection";
function ItemDetailsDialogInner({
  open,
  onOpenChange,
  item,
  closeLabel = "\uB2EB\uAE30",
  featuresTitle = "\uC8FC\uC694 \uAE30\uB2A5",
  badgesTitle = "\uC9C0\uC6D0 \uD615\uC2DD",
  className
}, ref) {
  if (!item) return null;
  const IconComponent = item.icon;
  const handleCta = () => {
    if (item.ctaUrl) {
      window.open(item.ctaUrl, "_blank", "noopener,noreferrer");
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntime.jsxs(
    DialogContent,
    {
      ref,
      className: cn("p-4 sm:p-6 sm:max-w-[600px] max-h-[90vh] overflow-y-auto", className),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start gap-2 sm:gap-3", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg border bg-background", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx(IconComponent, { className: "h-5 w-5 sm:h-6 sm:w-6 text-foreground" }) }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { className: "text-lg sm:text-xl", children: item.title }),
            /* @__PURE__ */ jsxRuntime.jsx(DialogDescription, { className: "mt-1.5", children: item.description }),
            item.categories && item.categories.length > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-wrap gap-2 mt-3", children: item.categories.map((category) => /* @__PURE__ */ jsxRuntime.jsx(Badge, { variant: "outline", children: category.label }, category.id)) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "py-2", children: [
          item.features && item.features.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(Separator2, { className: "my-4" }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "text-sm font-medium mb-3", children: featuresTitle }),
              /* @__PURE__ */ jsxRuntime.jsx("ul", { className: "space-y-2", children: item.features.map((feature, index) => /* @__PURE__ */ jsxRuntime.jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckSquare, { className: "h-4 w-4 text-primary mt-0.5 shrink-0", "aria-hidden": "true" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { children: feature })
              ] }, index)) })
            ] }) })
          ] }),
          item.badges && item.badges.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(Separator2, { className: "my-4" }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "text-sm font-medium mb-3", children: badgesTitle }),
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-wrap gap-2", children: item.badges.map((badge) => /* @__PURE__ */ jsxRuntime.jsx(Badge, { variant: "secondary", children: badge }, badge)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(DialogFooter, { className: "flex sm:justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "outline", onClick: () => onOpenChange(false), children: closeLabel }),
          item.ctaUrl && item.ctaLabel && /* @__PURE__ */ jsxRuntime.jsxs(Button, { onClick: handleCta, className: "gap-1.5", "aria-label": `${item.title} ${item.ctaLabel} (\uC0C8 \uCC3D)`, children: [
            item.ctaLabel,
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ExternalLink, { className: "h-4 w-4", "aria-hidden": "true" })
          ] })
        ] })
      ]
    }
  ) });
}
var ItemDetailsDialog = React4__namespace.forwardRef(ItemDetailsDialogInner);
function ItemsSectionInner({
  title = "\uC11C\uBE44\uC2A4 \uB458\uB7EC\uBCF4\uAE30",
  subtitle = "\uB2E4\uC591\uD55C \uAE30\uB2A5\uC744 \uC0B4\uD3B4\uBCF4\uC138\uC694",
  items,
  viewMode = "grid",
  onItemDetailClick,
  onItemCtaClick,
  detailLabel = "\uC0C1\uC138",
  defaultCtaLabel = "\uC2DC\uC791",
  ariaLabelledBy = "items-title",
  className
}, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "section",
    {
      ref,
      className: cn("py-20 md:py-28 px-4", className),
      "aria-labelledby": ariaLabelledBy,
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "container mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxRuntime.jsx("h2", { id: ariaLabelledBy, className: "text-3xl md:text-4xl font-bold mb-4", children: title }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: subtitle })
        ] }),
        viewMode === "grid" ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: items.map((item) => /* @__PURE__ */ jsxRuntime.jsx(
          ItemCard,
          {
            item,
            mode: "grid",
            onDetailClick: onItemDetailClick,
            onCtaClick: onItemCtaClick,
            detailLabel,
            defaultCtaLabel
          },
          item.id
        )) }) : /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-2", children: items.map((item) => /* @__PURE__ */ jsxRuntime.jsx(
          ItemCard,
          {
            item,
            mode: "list",
            onDetailClick: onItemDetailClick,
            onCtaClick: onItemCtaClick,
            detailLabel,
            defaultCtaLabel
          },
          item.id
        )) })
      ] })
    }
  );
}
var ItemsSection = React4__namespace.forwardRef(ItemsSectionInner);
var PageLayout = React4__namespace.forwardRef(
  ({ header, footer, children, className, mainClassName }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn("flex min-h-screen flex-col", className),
        children: [
          header,
          /* @__PURE__ */ jsxRuntime.jsx(
            "main",
            {
              className: cn(
                "flex-1 container py-4 md:py-8 px-2 sm:px-4 md:px-6",
                mainClassName
              ),
              children
            }
          ),
          footer
        ]
      }
    );
  }
);
PageLayout.displayName = "PageLayout";

exports.Badge = Badge;
exports.Button = Button;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.ChromeExtensionJsonLd = ChromeExtensionJsonLd;
exports.CtaSection = CtaSection;
exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogOverlay = DialogOverlay;
exports.DialogPortal = DialogPortal;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuLabel = DropdownMenuLabel;
exports.DropdownMenuPortal = DropdownMenuPortal;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuShortcut = DropdownMenuShortcut;
exports.DropdownMenuSub = DropdownMenuSub;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.FeaturesSection = FeaturesSection;
exports.Footer = Footer;
exports.Header = Header;
exports.HeroSection = HeroSection;
exports.Input = Input;
exports.ItemCard = ItemCard;
exports.ItemDetailsDialog = ItemDetailsDialog;
exports.ItemsSection = ItemsSection;
exports.LanguageSelector = LanguageSelector;
exports.MobileMenu = MobileMenu;
exports.PageLayout = PageLayout;
exports.ScrollArea = ScrollArea;
exports.ScrollBar = ScrollBar;
exports.SearchBar = SearchBar;
exports.Separator = Separator2;
exports.Sheet = Sheet;
exports.SheetClose = SheetClose;
exports.SheetContent = SheetContent;
exports.SheetDescription = SheetDescription;
exports.SheetFooter = SheetFooter;
exports.SheetHeader = SheetHeader;
exports.SheetOverlay = SheetOverlay;
exports.SheetPortal = SheetPortal;
exports.SheetTitle = SheetTitle;
exports.SheetTrigger = SheetTrigger;
exports.Sidebar = Sidebar;
exports.ViewToggle = ViewToggle;
exports.badgeVariants = badgeVariants;
exports.buttonVariants = buttonVariants;
exports.cn = cn;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map