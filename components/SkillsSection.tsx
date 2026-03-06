"use client";
import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableSkill } from "@/lib/hooks/useSortable";
import { GripVertical } from "lucide-react";

const INITIAL_SKILLS = [
  { id: "1", name: "Next.js 16", logo: "/images/next.jpg" },
  { id: "8", name: "Prisma 7", logo: "/images/prisma.png" },
  { id: "4", name: "TypeScript", logo: "/images/typescript.svg" },
  { id: "7", name: "PostgreSQL", logo: "/images/PostgreSQL.png" },
  { id: "6", name: "MongoDB", logo: "/images/mongodb.jpg" },
  { id: "2", name: "React.js", logo: "/images/react.jpg" },
  { id: "3", name: "Tailwind CSS", logo: "/images/tailwind.jpg" },
  { id: "5", name: "Node.js", logo: "/images/node.jpg" },
];

export default function SkillsSection() {
  const [skills, setSkills] = useState(INITIAL_SKILLS);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setSkills((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-white to-slate-50/50"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Powerhouse Stack</h2>
          <p className="text-slate-500 text-lg">
            I specialize in high-performance tools.
            <span className="text-primary font-semibold block mt-1">
              Try reordering them to see the tech synergy!
            </span>
          </p>
        </div>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={skills} strategy={rectSortingStrategy}>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 max-w-5xl mx-auto">
              {skills.map((skill) => (
                <div key={skill.id} className="relative group">
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white shadow-sm border rounded-full p-1 z-20">
                    <GripVertical className="w-3 h-3 text-slate-400" />
                  </div>
                  <SortableSkill {...skill} />
                </div>
              ))}
            </div>
          </SortableContext>
        </DndContext>

        <div className="mt-16 text-center">
          <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">
            Data Integrity by Prisma 7 • Type-Safety by TypeScript
          </p>
        </div>
      </div>
    </section>
  );
}
