"use client";
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function SortableSkill({
  id,
  logo,
  name,
}: {
  id: string;
  logo: string;
  name: string;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 0,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="touch-none"
    >
      <div
        className={`w-36 h-36 md:w-44 md:h-44 flex flex-col items-center justify-center gap-4 bg-white/50 backdrop-blur-md border-white/20 cursor-grab active:cursor-grabbing hover:shadow-2xl transition-all duration-300 ${
          isDragging ? "opacity-50 scale-105" : "scale-100"
        }`}
      >
        {/* Container for the logo */}
        <div className="relative w-16 h-16 md:w-20 md:h-20">
          <Image
            src={logo}
            alt={name}
            fill
            className="object-contain filter transition-all"
          />
        </div>

        <span className="text-sm font-bold tracking-tight text-slate-700 uppercase">
          {name}
        </span>
      </div>
    </div>
  );
}
