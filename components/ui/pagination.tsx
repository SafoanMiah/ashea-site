import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"

const Pagiregion = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagiregion"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
Pagiregion.displayName = "Pagiregion"

const PagiregionContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))
PagiregionContent.displayName = "PagiregionContent"

const PagiregionItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PagiregionItem.displayName = "PagiregionItem"

type PagiregionLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">

const PagiregionLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PagiregionLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
)
PagiregionLink.displayName = "PagiregionLink"

const PagiregionPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PagiregionLink>) => (
  <PagiregionLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PagiregionLink>
)
PagiregionPrevious.displayName = "PagiregionPrevious"

const PagiregionNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PagiregionLink>) => (
  <PagiregionLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PagiregionLink>
)
PagiregionNext.displayName = "PagiregionNext"

const PagiregionEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PagiregionEllipsis.displayName = "PagiregionEllipsis"

export {
  Pagiregion,
  PagiregionContent,
  PagiregionEllipsis,
  PagiregionItem,
  PagiregionLink,
  PagiregionNext,
  PagiregionPrevious,
}
