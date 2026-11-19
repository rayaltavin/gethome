import { relationship } from "../../data/relationship";

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>{relationship.title}</span>
      <span>Kept with care · 2026</span>
    </footer>
  );
}
