'use strict';

var React4 = require('react');
var lucideReact = require('lucide-react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var jsxRuntime = require('react/jsx-runtime');
var DialogPrimitive = require('@radix-ui/react-dialog');
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

// molecules/SearchBar/SearchBar.tsx
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
classVarianceAuthority.cva(
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
var DialogPortal = DialogPrimitive__namespace.Portal;
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
          className: "rounded-none rounded-l-md h-10 w-10",
          "aria-label": gridLabel,
          "aria-pressed": viewMode === "grid",
          children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Grid3X3, { className: "h-4 w-4", "aria-hidden": "true" })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          variant: viewMode === "list" ? "default" : "ghost",
          size: "icon",
          onClick: () => onViewModeChange("list"),
          className: "rounded-none rounded-r-md h-10 w-10",
          "aria-label": listLabel,
          "aria-pressed": viewMode === "list",
          children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.LayoutGrid, { className: "h-4 w-4", "aria-hidden": "true" })
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
          className: cn("h-10 flex items-center gap-1", className),
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Globe, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: currentLanguage?.label || "\uC5B8\uC5B4" })
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

exports.ChromeExtensionJsonLd = ChromeExtensionJsonLd;
exports.ItemCard = ItemCard;
exports.LanguageSelector = LanguageSelector;
exports.SearchBar = SearchBar;
exports.ViewToggle = ViewToggle;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map