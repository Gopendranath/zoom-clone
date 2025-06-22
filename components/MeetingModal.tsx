"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  buttonText?: string;
  handleClick?: () => void;
  children?: React.ReactNode;
  image?: string;
  buttonIcon?: React.ReactNode;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  buttonText,
  handleClick,
  children,
  image,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
        <DialogHeader>
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt={title} width={72} height={72} />
            </div>
          )}
          <DialogTitle
            className={cn("text-3xl font-bold leading-[42px]", className)}
          >
            {title}
          </DialogTitle>
        </DialogHeader>

        {children}

        <Button
          className="bg-blue-1 cursor-pointer hover:bg-blue-2 focus-visible:ring-0 focus-visible:ring-offset-0"
          onClick={handleClick}
        >
          {buttonIcon}
          &nbsp;
          {buttonText || "Schedule Meeting"}
        </Button>
      </DialogContent>
    </Dialog> 
  );
};

export default MeetingModal;
