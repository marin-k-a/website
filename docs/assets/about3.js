import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.js';
import 'kleur/colors';
import 'clsx';

const html = "<p><img src=\"/marinka.jpg\" alt=\"Maryna Zaitseva\"></p>\n<p><em>Let’s build something amazing together!</em></p>";

				const frontmatter = {"title":"Про мене","seo":{"title":"Про мене","description":"У власному куточку інтернету пишу та зберігаю свої думки.","image":{"src":"/marinka.jpg","alt":"A persone taking a photo on the phone"}}};
				const file = "/Users/marin_k_a/Documents/Blogs/website/src/content/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "\n![Maryna Zaitseva](/marinka.jpg)\n\n\n\n_Let's build something amazing together!_\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
