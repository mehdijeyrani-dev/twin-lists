import { useLayoutEffect, useRef, useState } from "react";

const tags = [
  "react",
  "ui",
  "design",
  "react",
  "typescript",
  "window",
  "performance",
  "seo",
  "frontend",
  "window",
  "ux",
  "inbox",
  "fun",
  "interview",
  "photo",
];

export default function Labels() {
  const measureRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(tags.length);

  useLayoutEffect(() => {
    const container = measureRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];

    const firstLineTop = children[0].offsetTop;
    let secondLineTop = -1;
    let count = 0;

    for (let i = 0; i < children.length; i++) {
      const el = children[i];

      // پیدا کردن خط دوم
      if (secondLineTop === -1 && el.offsetTop > firstLineTop) {
        secondLineTop = el.offsetTop;
      }

      // اگر رفت خط سوم → استاپ
      if (secondLineTop !== -1 && el.offsetTop > secondLineTop) {
        break;
      }

      count++;
    }

    // حالا جا برای +more
    let finalCount = count;

    if (count < tags.length) {
      for (let i = count; i >= 0; i--) {
        const hidden = tags.length - i;

        const moreWidth = 60; // تخمینی "+10 more"
        const last = children[i - 1];
        const containerWidth = container.offsetWidth;

        if (!last) continue;

        const fits =
          last.offsetLeft + last.offsetWidth + moreWidth <= containerWidth;

        if (fits) {
          finalCount = i;
          break;
        }
      }
    }

    setVisibleCount(finalCount);
  }, []);

  const hiddenCount = tags.length - visibleCount;

  return (
    <>
      {/* visible */}
      <div className="flex flex-wrap items-start gap-1">
        {tags.slice(0, visibleCount).map((tag, i) => (
          <span
            key={i}
            className="text-amber-500 bg-amber-500/10 px-1 py-0.5 rounded text-xs"
          >
            #{tag}
          </span>
        ))}

        {hiddenCount > 0 && (
          <span className="text-zinc-400 text-xs whitespace-nowrap bg-neutral-800 px-1 py-0.5">
            +{hiddenCount} more
          </span>
        )}
      </div>

      {/* hidden measure */}
      <div
        ref={measureRef}
        className="flex flex-wrap gap-1 absolute opacity-1 pointer-events-none"
      >
        {tags.map((tag, i) => (
          <span key={i} className="text-amber-500 px-1 py-0.5 text-xs">
            #{tag}
          </span>
        ))}
      </div>
    </>
  );
}
