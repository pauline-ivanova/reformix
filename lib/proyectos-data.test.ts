import assert from 'node:assert/strict';
import { getAllProyectos, getProyectoBySlug, getProyectoSlugs } from './proyectos/index.ts';

const projects = getAllProyectos();
assert.ok(projects.length >= 2, 'at least two proyectos');

const slugs = getProyectoSlugs();
assert.equal(slugs.length, projects.length);
assert.ok(new Set(slugs).size === slugs.length, 'unique slugs');

for (const project of projects) {
  assert.ok(project.metaTitle.length <= 60, `${project.slug} title soft max`);
  assert.ok(project.metaDescription.length <= 160, `${project.slug} description soft max`);
  assert.match(project.metaTitle, /Reformix/);
  assert.ok(project.galleryIntro.length > 20, `${project.slug} galleryIntro`);
  assert.equal(project.faqTitleLines.length, 2);
  assert.ok(project.closingCta.buttonHref === '/contacto');
  assert.ok(project.gallery.some((g) => g.phase === 'antes'));
  assert.ok(project.gallery.some((g) => g.phase === 'proceso'));
  assert.ok(project.gallery.some((g) => g.phase === 'despues'));
  assert.ok(project.gallery.length >= 8, `${project.slug} gallery size`);
  assert.ok(
    project.gallery.every((g) => g.src.startsWith(`/images/proyectos/${project.slug}/`)),
    `${project.slug} gallery paths`,
  );
  assert.ok(project.heroImage.includes(`/images/proyectos/${project.slug}/`));
  assert.equal(project.trustPoints.length, 3);
  assert.ok(project.midCta.features.length === 0);
  assert.ok(project.faqs.length >= 4);
  assert.equal(project.faqs.length % 2, 0, `${project.slug} FAQ even`);
  assert.ok(
    project.faqs.some((f) => /cuesta|presupuesto/i.test(f.question)),
    `${project.slug} commercial FAQ`,
  );
  assert.ok(
    (project.trustPoints.join(' ') + ' ' + project.midCta.features.join(' ')).match(
      /presupuesto cerrado/gi,
    )?.length === 1,
  );

  const proseWordCount =
    `${project.reto} ${project.solucion} ${project.proceso.map((p) => `${p.title} ${p.text}`).join(' ')} ${project.resultado} ${project.takeaways.join(' ')}`
      .trim()
      .split(/\s+/).length;
  assert.ok(
    proseWordCount >= 320 && proseWordCount <= 700,
    `${project.slug} prose word count, got ${proseWordCount}`,
  );
}

const pilot = getProyectoBySlug('rehabilitacion-fachada-castelldefels-casa-familiar');
assert.ok(pilot, 'pilot proyecto exists');
assert.match(pilot.metaTitle, /Castelldefels/);
assert.match(pilot.h1, /Castelldefels/);
assert.match(pilot.ficha.zona, /Castelldefels/);
assert.ok(pilot.ficha.sistema);
assert.ok(pilot.ficha.remates);
assert.equal(pilot.ficha.plazo, '4 semanas');
assert.ok(!pilot.ficha.superficie, 'do not invent superficie on pilot');
assert.ok(pilot.relatedServices.some((s) => s.href === '/rehabilitacion-casas'));
assert.doesNotMatch(
  `${pilot.reto} ${pilot.solucion} ${pilot.resultado} ${pilot.cardSummary}`.toLowerCase(),
  /vallès|sabadell/,
);

const wallpaper = getProyectoBySlug('papel-pintado-piso-sant-gervasi-barcelona');
assert.ok(wallpaper, 'wallpaper proyecto exists');
assert.match(wallpaper.metaTitle, /Empapelado.*Sant Gervasi/i);
assert.match(wallpaper.h1, /^Empapelado en un piso de Sant Gervasi$/);
assert.match(wallpaper.metaDescription, /empapelado|Sant Gervasi|pladur/i);
assert.match(wallpaper.ficha.zona, /Sant Gervasi|Barcelona/);
assert.equal(wallpaper.ficha.plazo, '2 semanas');
assert.ok(!wallpaper.ficha.year, 'do not invent year');
assert.ok(!wallpaper.ficha.superficie, 'do not invent superficie');
assert.ok(wallpaper.relatedServices.some((s) => s.href === '/instalacion-papel-pintado'));
assert.ok(wallpaper.relatedServices.some((s) => s.href === '/pladur'));
assert.equal(wallpaper.relatedServices[0]?.href, '/instalacion-papel-pintado');
assert.match(wallpaper.closingCta.buttonText, /empapelado/i);
assert.ok(wallpaper.heroPrimaryCta?.href === '/contacto');
assert.match(wallpaper.heroSecondaryCta?.href ?? '', /wa\.me/);
assert.match(
  `${wallpaper.reto} ${wallpaper.solucion} ${wallpaper.resultado}`.toLowerCase(),
  /barcelona|sant gervasi|pladur|papel/,
);
assert.doesNotMatch(
  `${wallpaper.reto} ${wallpaper.solucion} ${wallpaper.resultado} ${wallpaper.cardSummary}`.toLowerCase(),
  /calle santaló|calle santalo|castelldefels/,
);

assert.equal(getProyectoBySlug('no-existe'), undefined);

console.log(`proyectos-data tests: ok (${projects.length} projects)`);
