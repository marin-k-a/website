import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from './astro/server.js';
import 'kleur/colors';
import { $ as $$Button } from './Button.js';
import { s as siteConfig } from './site-config.js';

const $$Astro = createAstro("https://marin-k-a.com");
const $$Subscribe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Subscribe;
  const subscribe = siteConfig.subscribe;
  const { class: className } = Astro2.props;
  return renderTemplate`${subscribe?.formUrl && renderTemplate`${maybeRenderHead()}<section${addAttribute(["px-8 py-12 flex flex-col items-center border border-dashed border-main text-center sm:px-12 sm:py-16", className], "class:list")}>${subscribe.title && renderTemplate`<h2${addAttribute(["w-full max-w-xl text-2xl leading-tight font-serif font-medium sm:text-4xl", subscribe.text ? "mb-4" : "mb-8"], "class:list")}>${subscribe.title}</h2>`}${subscribe.text && renderTemplate`<p class="w-full max-w-xl mb-8 text-sm leading-normal">${subscribe.text}</p>`}<form${addAttribute(subscribe.formUrl, "action")} method="post" id="subscribe-form" name="subscribe-form" class="w-full max-w-xl flex flex-col gap-3.5 sm:flex-row" target="_blank"><label for="email" class="sr-only">
Email Address
</label><input type="email" name="email" id="email" class="w-full h-9 px-5 py-2 text-sm text-main bg-transparent border border-main rounded-full placeholder:text-main/60 focus:outline-none" required="" value="" placeholder="Your email">${renderComponent($$result, "Button", $$Button, { "type": "submit", "name": "subscribe", "class": "w-full h-9 sm:w-auto" }, { "default": ($$result2) => renderTemplate`
Subscribe
` })}</form></section>`}`;
}, "/Users/marin_k_a/Documents/Blogs/website/src/components/Subscribe.astro", void 0);

export { $$Subscribe as $ };
