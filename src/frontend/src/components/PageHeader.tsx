import { Eyebrow } from "@/components/Eyebrow";

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subcopy?: string;
}

export function PageHeader({ eyebrow, title, subcopy }: PageHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Eyebrow accent>{eyebrow}</Eyebrow>
      <h1 className="display-headline mt-5 text-4xl text-foreground md:text-5xl">
        {title}
      </h1>
      {subcopy ? (
        <p className="subheadline mx-auto mt-6 max-w-2xl">{subcopy}</p>
      ) : null}
    </div>
  );
}
