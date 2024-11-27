import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, e as renderSlot } from './astro/server.js';
import 'clsx';

const $$Astro = createAstro("https://marin-k-a.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { href, class: className, ...rest } = Astro2.props;
  const buttonClasses = "inline-flex items-center justify-center px-6 py-2 font-serif text-sm leading-tight italic  text-main bg-main border border-main rounded-full transition hover:bg-muted";
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([buttonClasses, className], "class:list")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute([buttonClasses, className], "class:list")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "/Users/marin_k_a/Documents/Blogs/website/src/components/Button.astro", void 0);

export { $$Button as $ };
