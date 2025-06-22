"use client";

import Image from "next/image";

// import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { avatarImages } from "@/constants";
import { toast } from "sonner"

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {
  return (
    <section className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[568px]">
      <article className="flex flex-col gap-5">
        <Image src={icon} alt="meeting icon" width={28} height={28} />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            <p className="text-base font-normal text-sky-1">{date}</p>
          </div>
        </div>
      </article>
      
      <article className="flex justify-between items-center">
        {/* Avatar section - only show on larger screens */}
        <div className="relative hidden sm:flex">
          <div className="flex items-center">
            {avatarImages.map((img, index) => (
              <div
                key={index}
                className="relative"
                style={{ marginLeft: index > 0 ? '-12px' : '0' }}
              >
                <Image
                  src={img}
                  alt={`attendee ${index + 1}`}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-dark-3"
                />
              </div>
            ))}
            <div className="flex items-center justify-center -ml-3 size-10 rounded-full border-2 border-dark-3 bg-dark-4 text-xs font-medium text-white">
              +5
            </div>
          </div>
        </div>

        {/* Buttons section */}
        {!isPreviousMeeting && (
          <div className="flex gap-2 flex-1 sm:flex-initial justify-end">
            <Button 
              onClick={handleClick} 
              className="rounded bg-blue-1 hover:bg-blue-1/80 px-6 text-white font-medium transition-colors"
            >
              {buttonIcon1 && (
                <Image src={buttonIcon1} alt="button icon" width={20} height={20} />
              )}
              {buttonIcon1 && <span className="ml-2">{buttonText}</span>}
              {!buttonIcon1 && buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast("Link copied to clipboard");
              }}
              className="bg-dark-4 hover:bg-dark-4/80 px-6 text-white font-medium transition-colors"
            >
              <Image
                src="/icons/copy.svg"
                alt="copy icon"
                width={20}
                height={20}
              />
              <span className="ml-2">Copy Link</span>
            </Button>
          </div>
        )}

        {/* For previous meetings, just show avatars centered */}
        {isPreviousMeeting && (
          <div className="flex justify-center w-full sm:hidden">
            <div className="flex items-center">
              {avatarImages.slice(0, 3).map((img, index) => (
                <div
                  key={index}
                  className="relative"
                  style={{ marginLeft: index > 0 ? '-8px' : '0' }}
                >
                  <Image
                    src={img}
                    alt={`attendee ${index + 1}`}
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-dark-3"
                  />
                </div>
              ))}
              <div className="flex items-center justify-center -ml-2 size-8 rounded-full border-2 border-dark-3 bg-dark-4 text-xs font-medium text-white">
                +5
              </div>
            </div>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;