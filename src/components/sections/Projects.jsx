import { site } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { IconArrow } from "@/components/ui/Icons";
import ProjectVisual from "@/components/sections/ProjectVisual";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <Section id="proyectos">
      <SectionHeading index={t.projects.index} title={t.projects.title} subtitle={t.projects.subtitle} />
      <div className="mt-14 space-y-6">
        {t.projects.items.map((project, index) => {
          const href = site.projects[project.id];
          const external = typeof href === "string" && /^https?:\/\//.test(href);

          return (
            <article
              key={project.id}
              className="grid overflow-hidden border border-line bg-canvas md:grid-cols-[minmax(220px,280px)_1fr]"
            >
              <ProjectVisual id={project.id} label={project.name} />
              <div className="flex flex-col p-6 md:p-10">
                <p className="font-mono text-xs tracking-[0.18em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-[11px] font-medium tracking-[0.16em] text-mute uppercase">{project.kind}</p>
                <h3 className="mt-2 font-serif text-4xl tracking-tight text-ink">{project.name}</h3>
                <p className="mt-4 max-w-xl leading-relaxed text-mute">{project.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="border border-line px-2.5 py-1 font-mono text-[11px] text-mute">
                      {tag}
                    </li>
                  ))}
                </ul>
                {external && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-8 inline-flex w-fit items-center gap-2 border-b border-ink pb-0.5 text-sm font-medium text-ink"
                  >
                    {t.projects.view}
                    <IconArrow className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
