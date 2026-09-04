import { useState, type ReactNode } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type MediaLightboxProps = {
  src: string;
  title: string;
  description: string;
  kind: "image" | "document";
  children: ReactNode;
};

export function MediaLightbox({
  src,
  title,
  description,
  kind,
  children,
}: MediaLightboxProps) {
  const [zoom, setZoom] = useState(1);

  return (
    <Dialog onOpenChange={(open) => !open && setZoom(1)}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex h-[92dvh] w-[calc(100vw-2rem)] max-w-6xl grid-rows-none flex-col gap-4 overflow-hidden rounded-none border-border bg-paper p-4 sm:rounded-none md:p-6">
        <div className="flex min-w-0 flex-wrap items-center justify-between gap-3 pr-10 sm:flex-nowrap sm:gap-8">
          <div className="min-w-0">
            <DialogTitle className="display truncate text-xl font-normal md:text-2xl">
              {title}
            </DialogTitle>
            <DialogDescription className="label-xs mt-2 truncate">{description}</DialogDescription>
          </div>
          {kind === "image" && (
            <div className="flex shrink-0 items-center gap-1">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Zoom out"
                title="Zoom out"
                onClick={() => setZoom((value) => Math.max(1, value - 0.2))}
                disabled={zoom <= 1}
              >
                <Minus aria-hidden="true" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Zoom in"
                title="Zoom in"
                onClick={() => setZoom((value) => Math.min(2, value + 0.2))}
                disabled={zoom >= 2}
              >
                <Plus aria-hidden="true" />
              </Button>
            </div>
          )}
        </div>

        <div className="min-h-0 flex-1 overflow-auto bg-accent">
          {kind === "document" ? (
            <iframe
              src={src}
              title={title}
              className="h-full min-h-[70dvh] w-full border-0 bg-paper"
            />
          ) : (
            <div className="flex min-h-full items-center justify-center overflow-auto p-3 md:p-6">
              <img
                src={src}
                alt={description}
                className="max-h-[74dvh] max-w-full object-contain transition-transform duration-500 ease-out"
                style={{ transform: `scale(${zoom})` }}
              />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}