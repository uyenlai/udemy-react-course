export default function TabButton({ children, handleClick, isSelected }) {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={handleClick}>{children}</button>
    </li>
  );
}
