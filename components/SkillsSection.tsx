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

const INITIAL_SKILLS = [
  { id: "1", name: "MongoDB", logo: "/images/mongodb.jpg" },
  { id: "2", name: "Express", logo: "/images/express.jpg" },
  { id: "3", name: "React", logo: "/images/react.jpg" },
  { id: "4", name: "Node.js", logo: "/images/node.jpg" },
  { id: "5", name: "Next.js", logo: "/images/next.jpg" },
  { id: "6", name: "TypeScript", logo: "/images/typescript.svg" },
  { id: "7", name: "Tailwind", logo: "/images/tailwind.jpg" },
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
    <section id="skills" className="py-12 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Tech Stack</h2>
        <p className="text-center text-slate-500 mb-12 italic text-sm">
          Feel free to reorder my tools!
        </p>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={skills} strategy={rectSortingStrategy}>
            {/* Change: Flexbox with max-width and centering */}
            <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto">
              {skills.map((skill) => (
                <SortableSkill key={skill.id} {...skill} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </section>
  );
}
