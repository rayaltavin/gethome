const links = [
  { href: "#beginning", label: "Our beginning" },
  { href: "#memories", label: "Memories" },
  { href: "#timeline", label: "Timeline" },
  { href: "#reflection", label: "Reflection" },
  { href: "#days", label: "652 days" },
];

export default function StoryNavigation() {
  return (
    <nav className="story-nav" aria-label="Story sections">
      <div className="story-nav__inner">
        <span className="story-nav__label">The story</span>
        <ul className="story-nav__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
