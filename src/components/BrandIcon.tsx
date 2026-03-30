import * as icons from "simple-icons";
import { SimpleIcon } from "simple-icons";

export default function BrandIcon({
  iconKey,
  className,
}: {
  iconKey: string;
  className?: string;
}) {
  const formattedKey = `si${iconKey.charAt(0).toUpperCase()}${iconKey.slice(1)}`;
  const icon = (icons as Record<string, SimpleIcon>)[formattedKey];

  if (!icon) return <>No icon</>;

  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: icon.svg }} />
  );
}
