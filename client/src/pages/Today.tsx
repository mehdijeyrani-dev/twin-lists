import React from "react";

interface TagListProps {
  tags: string[];
}

const TagList: React.FC<TagListProps> = ({ tags }) => {
  const MAX_VISIBLE = 4;

  const visibleTags = tags.slice(0, MAX_VISIBLE);
  const hiddenCount = tags.length - MAX_VISIBLE;

  return (
    <div className="flex flex-wrap gap-1">
      {visibleTags.map((tag, index) => (
        <span
          key={index}
          className="px-1 py-0.5 bg-amber-500/15 text-amber-500 rounded text-xs"
        >
          #{tag}
        </span>
      ))}

      {hiddenCount > 0 && <span className="text-xs px-1 py-0.5 bg-neutral-800 rounded">+{hiddenCount} more</span>}
    </div>
  );
};

const tags: string[] = [
  "frontend",
  "webdev",
  "reactjs",
  "typescript",
  "javascript",
  "html",
  "css",
  "tailwindcss",
  "uiux",
  "webdesign",
  "responsive",
  "nextjs",
  "redux",
  "vitejs",
  "frontenddeveloper",
  "coding",
  "programming",
  "webperformance",
  "accessibility",
  "cleanCode",
];

const Today = () => {
  return (
    <div className="p-10">
      <div className="w-80">
        <TagList tags={tags} />
      </div>
    </div>
  );
};

export default Today;
