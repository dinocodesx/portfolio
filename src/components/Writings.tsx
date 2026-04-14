export function Writings({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="group cursor-pointer">
      <h3 className="text-white font-medium group-hover:underline underline-offset-4">
        {title}
      </h3>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
}
