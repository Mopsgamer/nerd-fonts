/* eslint-disable @typescript-eslint/naming-convention */
/**
 * @module FSC File system utils collection.
 */
import {parse, type ParsedPath} from 'node:path';
import icons, {
	type GlyphIcon, type Mapping, type IconsCollection,
} from './icons.js';

export const colorsSeti = {
	blue: 0x51_9A_BA,
	grey: 0x4D_5A_5E,
	greyLight: 0x6D_80_86,
	green: 0x8D_C1_49,
	orange: 0xE3_79_33,
	pink: 0xF5_53_85,
	purple: 0xA0_74_C4,
	red: 0xCC_3E_44,
	white: 0xD4_D7_D6,
	yellow: 0xCB_CB_41,
	ignore: 0x41_53_5B,
} as const;

const fileExtensionSeti: Record<string, GlyphIcon> = {
	'.bsl': {...icons['nf-seti-default'], color: colorsSeti.red},
	'.mdo': {...icons['nf-seti-mdo'], color: colorsSeti.red},
	'.cls': {...icons['nf-seti-salesforce'], color: colorsSeti.blue},
	'.apex': {...icons['nf-seti-salesforce'], color: colorsSeti.blue},
	'.asm': {...icons['nf-seti-asm'], color: colorsSeti.red},
	'.s': {...icons['nf-seti-asm'], color: colorsSeti.red},
	'.bicep': {...icons['nf-seti-bicep'], color: colorsSeti.blue},
	'.bzl': {...icons['nf-seti-bazel'], color: colorsSeti.green},
	'.bazel': {...icons['nf-seti-bazel'], color: colorsSeti.green},
	'.BUILD': {...icons['nf-seti-bazel'], color: colorsSeti.green},
	'.WORKSPACE': {...icons['nf-seti-bazel'], color: colorsSeti.green},
	'.bazelignore': {...icons['nf-seti-bazel'], color: colorsSeti.green},
	'.c': {...icons['nf-seti-c'], color: colorsSeti.blue},
	'.h': {...icons['nf-seti-c'], color: colorsSeti.purple},
	'.m': {...icons['nf-seti-c'], color: colorsSeti.yellow},
	'.cs': {...icons['nf-seti-c_sharp'], color: colorsSeti.blue},
	'.cshtml': {...icons['nf-seti-html'], color: colorsSeti.blue},
	'.aspx': {...icons['nf-seti-html'], color: colorsSeti.blue},
	'.ascx': {...icons['nf-seti-html'], color: colorsSeti.green},
	'.asax': {...icons['nf-seti-html'], color: colorsSeti.yellow},
	'.master': {...icons['nf-seti-html'], color: colorsSeti.yellow},
	'.cc': {...icons['nf-seti-cpp'], color: colorsSeti.blue},
	'.cpp': {...icons['nf-seti-cpp'], color: colorsSeti.blue},
	'.cxx': {...icons['nf-seti-cpp'], color: colorsSeti.blue},
	'.c++': {...icons['nf-seti-cpp'], color: colorsSeti.blue},
	'.hh': {...icons['nf-seti-cpp'], color: colorsSeti.purple},
	'.hpp': {...icons['nf-seti-cpp'], color: colorsSeti.purple},
	'.hxx': {...icons['nf-seti-cpp'], color: colorsSeti.purple},
	'.h++': {...icons['nf-seti-cpp'], color: colorsSeti.purple},
	'.mm': {...icons['nf-seti-cpp'], color: colorsSeti.yellow},
	'.clj': {...icons['nf-seti-clojure'], color: colorsSeti.green},
	'.cljs': {...icons['nf-seti-clojure'], color: colorsSeti.green},
	'.cljc': {...icons['nf-seti-clojure'], color: colorsSeti.green},
	'.edn': {...icons['nf-seti-clojure'], color: colorsSeti.blue},
	'.cfc': {...icons['nf-seti-coldfusion'], color: colorsSeti.blue},
	'.cfm': {...icons['nf-seti-coldfusion'], color: colorsSeti.blue},
	'.coffee': {...icons['nf-seti-coffee'], color: colorsSeti.yellow},
	'.litcoffee': {...icons['nf-seti-coffee'], color: colorsSeti.yellow},
	'.config': {...icons['nf-seti-config'], color: colorsSeti.greyLight},
	'.cfg': {...icons['nf-seti-config'], color: colorsSeti.greyLight},
	'.conf': {...icons['nf-seti-config'], color: colorsSeti.greyLight},
	'.cr': {...icons['nf-seti-crystal'], color: colorsSeti.white},
	'.ecr': {...icons['nf-seti-crystal_embedded'], color: colorsSeti.white},
	'.slang': {...icons['nf-seti-crystal_embedded'], color: colorsSeti.white},
	'.cson': {...icons['nf-seti-json'], color: colorsSeti.yellow},
	'.css': {...icons['nf-seti-css'], color: colorsSeti.blue},
	'.css.map': {...icons['nf-seti-css'], color: colorsSeti.blue},
	'.sss': {...icons['nf-seti-css'], color: colorsSeti.blue},
	'.csv': {...icons['nf-seti-csv'], color: colorsSeti.green},
	'.xls': {...icons['nf-seti-xls'], color: colorsSeti.green},
	'.xlsx': {...icons['nf-seti-xls'], color: colorsSeti.green},
	'.cu': {...icons['nf-seti-cu'], color: colorsSeti.green},
	'.cuh': {...icons['nf-seti-cu'], color: colorsSeti.purple},
	'.hu': {...icons['nf-seti-cu'], color: colorsSeti.purple},
	'.cake': {...icons['nf-seti-cake'], color: colorsSeti.red},
	'.ctp': {...icons['nf-seti-cake_php'], color: colorsSeti.red},
	'.d': {...icons['nf-seti-d'], color: colorsSeti.red},
	'.doc': {...icons['nf-seti-word'], color: colorsSeti.blue},
	'.docx': {...icons['nf-seti-word'], color: colorsSeti.blue},
	'.ejs': {...icons['nf-seti-ejs'], color: colorsSeti.yellow},
	'.ex': {...icons['nf-seti-elixir'], color: colorsSeti.purple},
	'.exs': {...icons['nf-seti-elixir_script'], color: colorsSeti.purple},
	'.elm': {...icons['nf-seti-elm'], color: colorsSeti.red},
	'.ico': {...icons['nf-seti-favicon'], color: colorsSeti.yellow},
	'.fs': {...icons['nf-seti-f_sharp'], color: colorsSeti.blue},
	'.fsx': {...icons['nf-seti-f_sharp'], color: colorsSeti.blue},
	'.gitignore': {...icons['nf-seti-git'], color: colorsSeti.ignore},
	'.gitconfig': {...icons['nf-seti-git'], color: colorsSeti.ignore},
	'.gitkeep': {...icons['nf-seti-git'], color: colorsSeti.ignore},
	'.gitattributes': {...icons['nf-seti-git'], color: colorsSeti.ignore},
	'.gitmodules': {...icons['nf-seti-git'], color: colorsSeti.ignore},
	COMMIT_EDITMSG: {...icons['nf-seti-git'], color: colorsSeti.ignore},
	MERGE_MSG: {...icons['nf-seti-git'], color: colorsSeti.ignore},
	'.go': {...icons['nf-seti-go2'], color: colorsSeti.blue},
	'.slide': {...icons['nf-seti-go'], color: colorsSeti.blue},
	'.article': {...icons['nf-seti-go'], color: colorsSeti.blue},
	'.gd': {...icons['nf-seti-godot'], color: colorsSeti.blue},
	'.godot': {...icons['nf-seti-godot'], color: colorsSeti.red},
	'.tres': {...icons['nf-seti-godot'], color: colorsSeti.yellow},
	'.tscn': {...icons['nf-seti-godot'], color: colorsSeti.purple},
	'.gradle': {...icons['nf-seti-gradle'], color: colorsSeti.blue},
	'.groovy': {...icons['nf-seti-grails'], color: colorsSeti.green},
	'.gsp': {...icons['nf-seti-grails'], color: colorsSeti.green},
	'.gql': {...icons['nf-seti-graphql'], color: colorsSeti.pink},
	'.graphql': {...icons['nf-seti-graphql'], color: colorsSeti.pink},
	'.graphqls': {...icons['nf-seti-graphql'], color: colorsSeti.pink},
	'.hack': {...icons['nf-seti-hacklang'], color: colorsSeti.orange},
	'.haml': {...icons['nf-seti-haml'], color: colorsSeti.red},
	'.handlebars': {...icons['nf-seti-mustache'], color: colorsSeti.orange},
	'.hbs': {...icons['nf-seti-mustache'], color: colorsSeti.orange},
	'.hjs': {...icons['nf-seti-mustache'], color: colorsSeti.orange},
	'.hs': {...icons['nf-seti-haskell'], color: colorsSeti.purple},
	'.lhs': {...icons['nf-seti-haskell'], color: colorsSeti.purple},
	'.hx': {...icons['nf-seti-haxe'], color: colorsSeti.orange},
	'.hxs': {...icons['nf-seti-haxe'], color: colorsSeti.yellow},
	'.hxp': {...icons['nf-seti-haxe'], color: colorsSeti.blue},
	'.hxml': {...icons['nf-seti-haxe'], color: colorsSeti.purple},
	'.html': {...icons['nf-seti-html'], color: colorsSeti.orange},
	'.jade': {...icons['nf-seti-jade'], color: colorsSeti.red},
	'.java': {...icons['nf-seti-java'], color: colorsSeti.red},
	'.class': {...icons['nf-seti-java'], color: colorsSeti.blue},
	'.classpath': {...icons['nf-seti-java'], color: colorsSeti.red},
	'.properties': {...icons['nf-seti-java'], color: colorsSeti.red},
	'.js': {...icons['nf-seti-javascript'], color: colorsSeti.yellow},
	'.js.map': {...icons['nf-seti-javascript'], color: colorsSeti.yellow},
	'.cjs': {...icons['nf-seti-javascript'], color: colorsSeti.yellow},
	'.cjs.map': {...icons['nf-seti-javascript'], color: colorsSeti.yellow},
	'.mjs': {...icons['nf-seti-javascript'], color: colorsSeti.yellow},
	'.mjs.map': {...icons['nf-seti-javascript'], color: colorsSeti.yellow},
	'.spec.js': {...icons['nf-seti-javascript'], color: colorsSeti.orange},
	'.spec.cjs': {...icons['nf-seti-javascript'], color: colorsSeti.orange},
	'.spec.mjs': {...icons['nf-seti-javascript'], color: colorsSeti.orange},
	'.test.js': {...icons['nf-seti-javascript'], color: colorsSeti.orange},
	'.test.cjs': {...icons['nf-seti-javascript'], color: colorsSeti.orange},
	'.test.mjs': {...icons['nf-seti-javascript'], color: colorsSeti.orange},
	'.es': {...icons['nf-seti-javascript'], color: colorsSeti.yellow},
	'.es5': {...icons['nf-seti-javascript'], color: colorsSeti.yellow},
	'.es6': {...icons['nf-seti-javascript'], color: colorsSeti.yellow},
	'.es7': {...icons['nf-seti-javascript'], color: colorsSeti.yellow},
	'.jinja': {...icons['nf-seti-jinja'], color: colorsSeti.red},
	'.jinja2': {...icons['nf-seti-jinja'], color: colorsSeti.red},
	'.json': {...icons['nf-seti-json'], color: colorsSeti.yellow},
	'.jl': {...icons['nf-seti-julia'], color: colorsSeti.purple},
	'.karma.conf.js': {...icons['nf-seti-karma'], color: colorsSeti.green},
	'.karma.conf.cjs': {...icons['nf-seti-karma'], color: colorsSeti.green},
	'.karma.conf.mjs': {...icons['nf-seti-karma'], color: colorsSeti.green},
	'.karma.conf.coffee': {...icons['nf-seti-karma'], color: colorsSeti.green},
	'.kt': {...icons['nf-seti-kotlin'], color: colorsSeti.orange},
	'.kts': {...icons['nf-seti-kotlin'], color: colorsSeti.orange},
	'.dart': {...icons['nf-seti-dart'], color: colorsSeti.blue},
	'.less': {...icons['nf-seti-less'], color: colorsSeti.blue},
	'.liquid': {...icons['nf-seti-liquid'], color: colorsSeti.green},
	'.ls': {...icons['nf-seti-livescript'], color: colorsSeti.blue},
	'.lua': {...icons['nf-seti-lua'], color: colorsSeti.blue},
	'.markdown': {...icons['nf-seti-markdown'], color: colorsSeti.blue},
	'.md': {...icons['nf-seti-markdown'], color: colorsSeti.blue},
	'.argdown': {...icons['nf-seti-argdown'], color: colorsSeti.blue},
	'.ad': {...icons['nf-seti-argdown'], color: colorsSeti.blue},
	'README.md': {...icons['nf-seti-info'], color: colorsSeti.blue},
	'README.txt': {...icons['nf-seti-info'], color: colorsSeti.blue},
	README: {...icons['nf-seti-info'], color: colorsSeti.blue},
	'CHANGELOG.md': {...icons['nf-seti-clock'], color: colorsSeti.blue},
	'CHANGELOG.txt': {...icons['nf-seti-clock'], color: colorsSeti.blue},
	CHANGELOG: {...icons['nf-seti-clock'], color: colorsSeti.blue},
	'CHANGES.md': {...icons['nf-seti-clock'], color: colorsSeti.blue},
	'CHANGES.txt': {...icons['nf-seti-clock'], color: colorsSeti.blue},
	CHANGES: {...icons['nf-seti-clock'], color: colorsSeti.blue},
	'VERSION.md': {...icons['nf-seti-clock'], color: colorsSeti.blue},
	'VERSION.txt': {...icons['nf-seti-clock'], color: colorsSeti.blue},
	VERSION: {...icons['nf-seti-clock'], color: colorsSeti.blue},
	mvnv: {...icons['nf-seti-maven'], color: colorsSeti.red},
	'pom.xml': {...icons['nf-seti-maven'], color: colorsSeti.red},
	'.mustache': {...icons['nf-seti-mustache'], color: colorsSeti.orange},
	'.stache': {...icons['nf-seti-mustache'], color: colorsSeti.orange},
	'.nim': {...icons['nf-seti-nim'], color: colorsSeti.yellow},
	'.nims': {...icons['nf-seti-nim'], color: colorsSeti.yellow},
	'.github-issues': {...icons['nf-seti-github'], color: colorsSeti.white},
	'.ipynb': {...icons['nf-seti-notebook'], color: colorsSeti.blue},
	'.njk': {...icons['nf-seti-nunjucks'], color: colorsSeti.green},
	'.nunjucks': {...icons['nf-seti-nunjucks'], color: colorsSeti.green},
	'.nunjs': {...icons['nf-seti-nunjucks'], color: colorsSeti.green},
	'.nunj': {...icons['nf-seti-nunjucks'], color: colorsSeti.green},
	'.njs': {...icons['nf-seti-nunjucks'], color: colorsSeti.green},
	'.nj': {...icons['nf-seti-nunjucks'], color: colorsSeti.green},
	'.npm-debug.log': {...icons['nf-seti-npm'], color: colorsSeti.ignore},
	'.npmignore': {...icons['nf-seti-npm'], color: colorsSeti.red},
	'.npmrc': {...icons['nf-seti-npm'], color: colorsSeti.red},
	'.ml': {...icons['nf-seti-ocaml'], color: colorsSeti.orange},
	'.mli': {...icons['nf-seti-ocaml'], color: colorsSeti.orange},
	'.cmx': {...icons['nf-seti-ocaml'], color: colorsSeti.orange},
	'.cmxa': {...icons['nf-seti-ocaml'], color: colorsSeti.orange},
	'.odata': {...icons['nf-seti-odata'], color: colorsSeti.orange},
	'.pl': {...icons['nf-seti-perl'], color: colorsSeti.blue},
	'.php': {...icons['nf-seti-php'], color: colorsSeti.purple},
	'.php.inc': {...icons['nf-seti-php'], color: colorsSeti.purple},
	'.pipeline': {...icons['nf-seti-pipeline'], color: colorsSeti.orange},
	'.pddl': {...icons['nf-seti-pddl'], color: colorsSeti.purple},
	'.plan': {...icons['nf-seti-plan'], color: colorsSeti.green},
	'.happenings': {...icons['nf-seti-happenings'], color: colorsSeti.blue},
	'.ps1': {...icons['nf-seti-powershell'], color: colorsSeti.blue},
	'.psd1': {...icons['nf-seti-powershell'], color: colorsSeti.blue},
	'.psm1': {...icons['nf-seti-powershell'], color: colorsSeti.blue},
	'.prisma': {...icons['nf-seti-prisma'], color: colorsSeti.blue},
	'.pug': {...icons['nf-seti-pug'], color: colorsSeti.red},
	'.pp': {...icons['nf-seti-puppet'], color: colorsSeti.yellow},
	'.epp': {...icons['nf-seti-puppet'], color: colorsSeti.yellow},
	'.purs': {...icons['nf-seti-purescript'], color: colorsSeti.white},
	'.py': {...icons['nf-seti-python'], color: colorsSeti.blue},
	'.jsx': {...icons['nf-seti-react'], color: colorsSeti.blue},
	'.spec.jsx': {...icons['nf-seti-react'], color: colorsSeti.orange},
	'.test.jsx': {...icons['nf-seti-react'], color: colorsSeti.orange},
	'.cjsx': {...icons['nf-seti-react'], color: colorsSeti.blue},
	'.tsx': {...icons['nf-seti-react'], color: colorsSeti.blue},
	'.spec.tsx': {...icons['nf-seti-react'], color: colorsSeti.orange},
	'.test.tsx': {...icons['nf-seti-react'], color: colorsSeti.orange},
	'.re': {...icons['nf-seti-reasonml'], color: colorsSeti.red},
	'.res': {...icons['nf-seti-rescript'], color: colorsSeti.red},
	'.resi': {...icons['nf-seti-rescript'], color: colorsSeti.pink},
	'.R': {...icons['nf-seti-r'], color: colorsSeti.blue},
	'.rmd': {...icons['nf-seti-r'], color: colorsSeti.blue},
	'.rb': {...icons['nf-seti-ruby'], color: colorsSeti.red},
	'.erb': {...icons['nf-seti-html'], color: colorsSeti.red},
	'.erb.html': {...icons['nf-seti-html'], color: colorsSeti.red},
	'.html.erb': {...icons['nf-seti-html'], color: colorsSeti.red},
	'.rs': {...icons['nf-seti-rust'], color: colorsSeti.greyLight},
	'.sass': {...icons['nf-seti-sass'], color: colorsSeti.pink},
	'.scss': {...icons['nf-seti-sass'], color: colorsSeti.pink},
	'.springBeans': {...icons['nf-seti-spring'], color: colorsSeti.green},
	'.slim': {...icons['nf-seti-slim'], color: colorsSeti.orange},
	'.smarty.tpl': {...icons['nf-seti-smarty'], color: colorsSeti.yellow},
	'.tpl': {...icons['nf-seti-smarty'], color: colorsSeti.yellow},
	'.sbt': {...icons['nf-seti-sbt'], color: colorsSeti.blue},
	'.scala': {...icons['nf-seti-scala'], color: colorsSeti.red},
	'.sol': {...icons['nf-seti-ethereum'], color: colorsSeti.blue},
	'.styl': {...icons['nf-seti-stylus'], color: colorsSeti.green},
	'.svelte': {...icons['nf-seti-svelte'], color: colorsSeti.red},
	'.swift': {...icons['nf-seti-swift'], color: colorsSeti.orange},
	'.sql': {...icons['nf-seti-db'], color: colorsSeti.pink},
	'.soql': {...icons['nf-seti-db'], color: colorsSeti.blue},
	'.tf': {...icons['nf-seti-terraform'], color: colorsSeti.purple},
	'.tf.json': {...icons['nf-seti-terraform'], color: colorsSeti.purple},
	'.tfvars': {...icons['nf-seti-terraform'], color: colorsSeti.purple},
	'.tfvars.json': {...icons['nf-seti-terraform'], color: colorsSeti.purple},
	'.tex': {...icons['nf-seti-tex'], color: colorsSeti.blue},
	'.sty': {...icons['nf-seti-tex'], color: colorsSeti.yellow},
	'.dtx': {...icons['nf-seti-tex'], color: colorsSeti.orange},
	'.ins': {...icons['nf-seti-tex'], color: colorsSeti.white},
	'.txt': {...icons['nf-seti-default'], color: colorsSeti.white},
	'.toml': {...icons['nf-seti-config'], color: colorsSeti.greyLight},
	'.twig': {...icons['nf-seti-twig'], color: colorsSeti.green},
	'.ts': {...icons['nf-seti-typescript'], color: colorsSeti.blue},
	'.spec.ts': {...icons['nf-seti-typescript'], color: colorsSeti.orange},
	'.test.ts': {...icons['nf-seti-typescript'], color: colorsSeti.orange},
	'tsconfig.json': {...icons['nf-seti-tsconfig'], color: colorsSeti.blue},
	'.vala': {...icons['nf-seti-vala'], color: colorsSeti.greyLight},
	'.vapi': {...icons['nf-seti-vala'], color: colorsSeti.greyLight},
	'.component': {...icons['nf-seti-html'], color: colorsSeti.orange},
	'.vue': {...icons['nf-seti-vue'], color: colorsSeti.green},
	'.wasm': {...icons['nf-seti-wasm'], color: colorsSeti.purple},
	'.wat': {...icons['nf-seti-wat'], color: colorsSeti.purple},
	'.xml': {...icons['nf-seti-xml'], color: colorsSeti.orange},
	'.yml': {...icons['nf-seti-yml'], color: colorsSeti.purple},
	'.yaml': {...icons['nf-seti-yml'], color: colorsSeti.purple},
	'swagger.json': {...icons['nf-seti-json'], color: colorsSeti.green},
	'swagger.yml': {...icons['nf-seti-json'], color: colorsSeti.green},
	'swagger.yaml': {...icons['nf-seti-json'], color: colorsSeti.green},
	'.pro': {...icons['nf-seti-prolog'], color: colorsSeti.orange},
	'.zig': {...icons['nf-seti-zig'], color: colorsSeti.orange},
	'.jar': {...icons['nf-seti-zip'], color: colorsSeti.red},
	'.zip': {...icons['nf-seti-zip'], color: colorsSeti.greyLight},
	'.wgt': {...icons['nf-seti-wgt'], color: colorsSeti.blue},
	'.ai': {...icons['nf-seti-illustrator'], color: colorsSeti.yellow},
	'.psd': {...icons['nf-seti-photoshop'], color: colorsSeti.blue},
	'.pdf': {...icons['nf-seti-pdf'], color: colorsSeti.red},
	'.eot': {...icons['nf-seti-font'], color: colorsSeti.red},
	'.ttf': {...icons['nf-seti-font'], color: colorsSeti.red},
	'.woff': {...icons['nf-seti-font'], color: colorsSeti.red},
	'.woff2': {...icons['nf-seti-font'], color: colorsSeti.red},
	'.otf': {...icons['nf-seti-font'], color: colorsSeti.red},
	'.avif': {...icons['nf-seti-image'], color: colorsSeti.purple},
	'.gif': {...icons['nf-seti-image'], color: colorsSeti.purple},
	'.jpg': {...icons['nf-seti-image'], color: colorsSeti.purple},
	'.jpeg': {...icons['nf-seti-image'], color: colorsSeti.purple},
	'.png': {...icons['nf-seti-image'], color: colorsSeti.purple},
	'.pxm': {...icons['nf-seti-image'], color: colorsSeti.purple},
	'.svg': {...icons['nf-seti-image'], color: colorsSeti.purple},
	'.svgx': {...icons['nf-seti-image'], color: colorsSeti.purple},
	'.tiff': {...icons['nf-seti-image'], color: colorsSeti.purple},
	'.webp': {...icons['nf-seti-image'], color: colorsSeti.purple},
	'.sublime-project': {...icons['nf-seti-sublime'], color: colorsSeti.orange},
	'.sublime-workspace': {...icons['nf-seti-sublime'], color: colorsSeti.orange},
	'.code-search': {...icons['nf-seti-code_search'], color: colorsSeti.purple},
	'.sh': {...icons['nf-seti-shell'], color: colorsSeti.green},
	'.zsh': {...icons['nf-seti-shell'], color: colorsSeti.green},
	'.fish': {...icons['nf-seti-shell'], color: colorsSeti.green},
	'.zshrc': {...icons['nf-seti-shell'], color: colorsSeti.green},
	'.bashrc': {...icons['nf-seti-shell'], color: colorsSeti.green},
	'.mov': {...icons['nf-seti-video'], color: colorsSeti.pink},
	'.ogv': {...icons['nf-seti-video'], color: colorsSeti.pink},
	'.webm': {...icons['nf-seti-video'], color: colorsSeti.pink},
	'.avi': {...icons['nf-seti-video'], color: colorsSeti.pink},
	'.mpg': {...icons['nf-seti-video'], color: colorsSeti.pink},
	'.mp4': {...icons['nf-seti-video'], color: colorsSeti.pink},
	'.mp3': {...icons['nf-seti-audio'], color: colorsSeti.purple},
	'.ogg': {...icons['nf-seti-audio'], color: colorsSeti.purple},
	'.wav': {...icons['nf-seti-audio'], color: colorsSeti.purple},
	'.flac': {...icons['nf-seti-audio'], color: colorsSeti.purple},
	'.3ds': {...icons['nf-seti-svg'], color: colorsSeti.blue},
	'.3dm': {...icons['nf-seti-svg'], color: colorsSeti.blue},
	'.stl': {...icons['nf-seti-svg'], color: colorsSeti.blue},
	'.obj': {...icons['nf-seti-svg'], color: colorsSeti.blue},
	'.dae': {...icons['nf-seti-svg'], color: colorsSeti.blue},
	'.bat': {...icons['nf-seti-shell'], color: colorsSeti.blue},
	'.cmd': {...icons['nf-seti-shell'], color: colorsSeti.blue},
	'mime.types': {...icons['nf-seti-config'], color: colorsSeti.greyLight},
	Jenkinsfile: {...icons['nf-seti-jenkins'], color: colorsSeti.red},
	'.babelrc': {...icons['nf-seti-babel'], color: colorsSeti.yellow},
	'.babelrc.js': {...icons['nf-seti-babel'], color: colorsSeti.yellow},
	'.babelrc.cjs': {...icons['nf-seti-babel'], color: colorsSeti.yellow},
	'.babel.config.js': {...icons['nf-seti-babel'], color: colorsSeti.yellow},
	'.babel.config.json': {...icons['nf-seti-babel'], color: colorsSeti.yellow},
	'.babel.config.cjs': {...icons['nf-seti-babel'], color: colorsSeti.yellow},
	BUILD: {...icons['nf-seti-bazel'], color: colorsSeti.green},
	'BUILD.bazel': {...icons['nf-seti-bazel'], color: colorsSeti.green},
	WORKSPACE: {...icons['nf-seti-bazel'], color: colorsSeti.green},
	'WORKSPACE.bazel': {...icons['nf-seti-bazel'], color: colorsSeti.green},
	'.bazelrc': {...icons['nf-seti-bazel'], color: colorsSeti.green},
	'bower.json': {...icons['nf-seti-bower'], color: colorsSeti.orange},
	'Bower.json': {...icons['nf-seti-bower'], color: colorsSeti.orange},
	'.bowerrc': {...icons['nf-seti-bower'], color: colorsSeti.orange},
	'.dockerignore': {...icons['nf-seti-docker'], color: colorsSeti.grey},
	'.codeclimate.yml': {...icons['nf-seti-code_climate'], color: colorsSeti.green},
	'.eslintrc': {...icons['nf-seti-eslint'], color: colorsSeti.purple},
	'.eslintrc.js': {...icons['nf-seti-eslint'], color: colorsSeti.purple},
	'.eslintrc.cjs': {...icons['nf-seti-eslint'], color: colorsSeti.purple},
	'.eslintrc.yaml': {...icons['nf-seti-eslint'], color: colorsSeti.purple},
	'.eslintrc.yml': {...icons['nf-seti-eslint'], color: colorsSeti.purple},
	'.eslintrc.json': {...icons['nf-seti-eslint'], color: colorsSeti.purple},
	'.eslintignore': {...icons['nf-seti-eslint'], color: colorsSeti.purple},
	'.eslint.config.js': {...icons['nf-seti-eslint'], color: colorsSeti.purple},
	'.firebaserc': {...icons['nf-seti-firebase'], color: colorsSeti.orange},
	'firebase.json': {...icons['nf-seti-firebase'], color: colorsSeti.orange},
	geckodriver: {...icons['nf-seti-firefox'], color: colorsSeti.orange},
	'.gitlab-ci.yml': {...icons['nf-seti-gitlab'], color: colorsSeti.orange},
	'Gruntfile.js': {...icons['nf-seti-grunt'], color: colorsSeti.orange},
	'gruntfile.babel.js': {...icons['nf-seti-grunt'], color: colorsSeti.orange},
	'Gruntfile.babel.js': {...icons['nf-seti-grunt'], color: colorsSeti.orange},
	'gruntfile.js': {...icons['nf-seti-grunt'], color: colorsSeti.orange},
	'Gruntfile.coffee': {...icons['nf-seti-grunt'], color: colorsSeti.orange},
	'gruntfile.coffee': {...icons['nf-seti-grunt'], color: colorsSeti.orange},
	GULPFILE: {...icons['nf-seti-gulp'], color: colorsSeti.red},
	Gulpfile: {...icons['nf-seti-gulp'], color: colorsSeti.red},
	gulpfile: {...icons['nf-seti-gulp'], color: colorsSeti.red},
	'gulpfile.js': {...icons['nf-seti-gulp'], color: colorsSeti.red},
	'ionic.config.json': {...icons['nf-seti-ionic'], color: colorsSeti.blue},
	'Ionic.config.json': {...icons['nf-seti-ionic'], color: colorsSeti.blue},
	'ionic.project': {...icons['nf-seti-ionic'], color: colorsSeti.blue},
	'Ionic.project': {...icons['nf-seti-ionic'], color: colorsSeti.blue},
	'.jshintrc': {...icons['nf-seti-javascript'], color: colorsSeti.blue},
	'.jscsrc': {...icons['nf-seti-javascript'], color: colorsSeti.blue},
	'platformio.ini': {...icons['nf-seti-platformio'], color: colorsSeti.orange},
	'rollup.config.js': {...icons['nf-seti-rollup'], color: colorsSeti.red},
	'sass-lint.yml': {...icons['nf-seti-sass'], color: colorsSeti.pink},
	'.stylelintrc': {...icons['nf-seti-stylelint'], color: colorsSeti.white},
	'.stylelintrc.json': {...icons['nf-seti-stylelint'], color: colorsSeti.white},
	'.stylelintrc.yaml': {...icons['nf-seti-stylelint'], color: colorsSeti.white},
	'.stylelintrc.yml': {...icons['nf-seti-stylelint'], color: colorsSeti.white},
	'.stylelintrc.js': {...icons['nf-seti-stylelint'], color: colorsSeti.white},
	'.stylelintignore': {...icons['nf-seti-stylelint'], color: colorsSeti.grey},
	'.stylelint.config.js': {...icons['nf-seti-stylelint'], color: colorsSeti.white},
	'.stylelint.config.cjs': {...icons['nf-seti-stylelint'], color: colorsSeti.white},
	'.stylelint.config.mjs': {...icons['nf-seti-stylelint'], color: colorsSeti.white},
	'yarn.clean': {...icons['nf-seti-yarn'], color: colorsSeti.blue},
	'yarn.lock': {...icons['nf-seti-yarn'], color: colorsSeti.blue},
	'webpack.config.js': {...icons['nf-seti-webpack'], color: colorsSeti.blue},
	'webpack.config.cjs': {...icons['nf-seti-webpack'], color: colorsSeti.blue},
	'webpack.config.mjs': {...icons['nf-seti-webpack'], color: colorsSeti.blue},
	'webpack.config.ts': {...icons['nf-seti-webpack'], color: colorsSeti.blue},
	'webpack.config.build.js': {...icons['nf-seti-webpack'], color: colorsSeti.blue},
	'webpack.config.build.cjs': {...icons['nf-seti-webpack'], color: colorsSeti.blue},
	'webpack.config.build.mjs': {...icons['nf-seti-webpack'], color: colorsSeti.blue},
	'webpack.config.build.ts': {...icons['nf-seti-webpack'], color: colorsSeti.blue},
	'webpack.common.js': {...icons['nf-seti-webpack'], color: colorsSeti.blue},
	'webpack.common.cjs': {...icons['nf-seti-webpack'], color: colorsSeti.blue},
	'webpack.common.mjs': {...icons['nf-seti-webpack'], color: colorsSeti.blue},
	'webpack.common.ts': {...icons['nf-seti-webpack'], color: colorsSeti.blue},
	'webpack.dev.js': {...icons['nf-seti-webpack'], color: colorsSeti.blue},
	'webpack.dev.cjs': {...icons['nf-seti-webpack'], color: colorsSeti.blue},
	'webpack.dev.mjs': {...icons['nf-seti-webpack'], color: colorsSeti.blue},
	'webpack.dev.ts': {...icons['nf-seti-webpack'], color: colorsSeti.blue},
	'webpack.prod.js': {...icons['nf-seti-webpack'], color: colorsSeti.blue},
	'webpack.prod.cjs': {...icons['nf-seti-webpack'], color: colorsSeti.blue},
	'webpack.prod.mjs': {...icons['nf-seti-webpack'], color: colorsSeti.blue},
	'webpack.prod.ts': {...icons['nf-seti-webpack'], color: colorsSeti.blue},
	'.direnv': {...icons['nf-seti-config'], color: colorsSeti.greyLight},
	'.env': {...icons['nf-seti-config'], color: colorsSeti.greyLight},
	'.static': {...icons['nf-seti-config'], color: colorsSeti.greyLight},
	'.editorconfig': {...icons['nf-seti-config'], color: colorsSeti.greyLight},
	'.slugignore': {...icons['nf-seti-config'], color: colorsSeti.greyLight},
	'.tmp': {...icons['nf-seti-config'], color: colorsSeti.greyLight},
	'.htaccess': {...icons['nf-seti-config'], color: colorsSeti.greyLight},
	'.key': {...icons['nf-seti-lock'], color: colorsSeti.green},
	'.cert': {...icons['nf-seti-lock'], color: colorsSeti.green},
	'.cer': {...icons['nf-seti-lock'], color: colorsSeti.green},
	'.crt': {...icons['nf-seti-lock'], color: colorsSeti.green},
	'.pem': {...icons['nf-seti-lock'], color: colorsSeti.green},
	'npm-debug.log': {...icons['nf-seti-npm_ignored'], color: colorsSeti.ignore},
	'.DS_Store': {...icons['nf-seti-ignored'], color: colorsSeti.ignore},
};
export const byPartialSeti: Record<string, GlyphIcon> = {
	mix: {...icons['nf-seti-hex'], color: colorsSeti.red},
	Gemfile: {...icons['nf-seti-ruby'], color: colorsSeti.red},
	gemfile: {...icons['nf-seti-ruby'], color: colorsSeti.red},
	dockerfile: {...icons['nf-seti-docker'], color: colorsSeti.blue},
	Dockerfile: {...icons['nf-seti-docker'], color: colorsSeti.blue},
	DOCKERFILE: {...icons['nf-seti-docker'], color: colorsSeti.blue},
	'docker-healthcheck': {...icons['nf-seti-docker'], color: colorsSeti.green},
	'docker-compose.yml': {...icons['nf-seti-docker'], color: colorsSeti.pink},
	'docker-compose.yaml': {...icons['nf-seti-docker'], color: colorsSeti.pink},
	'docker-compose.override.yml': {...icons['nf-seti-docker'], color: colorsSeti.pink},
	'docker-compose.override.yaml': {...icons['nf-seti-docker'], color: colorsSeti.pink},
	LICENSE: {...icons['nf-seti-license'], color: colorsSeti.yellow},
	LICENCE: {...icons['nf-seti-license'], color: colorsSeti.yellow},
	'LICENSE.txt': {...icons['nf-seti-license'], color: colorsSeti.yellow},
	'LICENCE.txt': {...icons['nf-seti-license'], color: colorsSeti.yellow},
	'LICENSE.md': {...icons['nf-seti-license'], color: colorsSeti.yellow},
	'LICENCE.md': {...icons['nf-seti-license'], color: colorsSeti.yellow},
	COPYING: {...icons['nf-seti-license'], color: colorsSeti.yellow},
	'COPYING.txt': {...icons['nf-seti-license'], color: colorsSeti.yellow},
	'COPYING.md': {...icons['nf-seti-license'], color: colorsSeti.yellow},
	COMPILING: {...icons['nf-seti-license'], color: colorsSeti.orange},
	'COMPILING.txt': {...icons['nf-seti-license'], color: colorsSeti.orange},
	'COMPILING.md': {...icons['nf-seti-license'], color: colorsSeti.orange},
	CONTRIBUTING: {...icons['nf-seti-license'], color: colorsSeti.red},
	'CONTRIBUTING.txt': {...icons['nf-seti-license'], color: colorsSeti.red},
	'CONTRIBUTING.md': {...icons['nf-seti-license'], color: colorsSeti.red},
	MAKEFILE: {...icons['nf-seti-makefile'], color: colorsSeti.orange},
	Makefile: {...icons['nf-seti-makefile'], color: colorsSeti.orange},
	makefile: {...icons['nf-seti-makefile'], color: colorsSeti.orange},
	QMAKEFILE: {...icons['nf-seti-makefile'], color: colorsSeti.purple},
	QMakefile: {...icons['nf-seti-makefile'], color: colorsSeti.purple},
	qmakefile: {...icons['nf-seti-makefile'], color: colorsSeti.purple},
	OMAKEFILE: {...icons['nf-seti-makefile'], color: colorsSeti.greyLight},
	OMakefile: {...icons['nf-seti-makefile'], color: colorsSeti.greyLight},
	omakefile: {...icons['nf-seti-makefile'], color: colorsSeti.greyLight},
	'CMAKELISTS.TXT': {...icons['nf-seti-makefile'], color: colorsSeti.blue},
	'CMAKELISTS.txt': {...icons['nf-seti-makefile'], color: colorsSeti.blue},
	'CMakeLists.txt': {...icons['nf-seti-makefile'], color: colorsSeti.blue},
	'cmakelists.txt': {...icons['nf-seti-makefile'], color: colorsSeti.blue},
	Procfile: {...icons['nf-seti-heroku'], color: colorsSeti.purple},
	TODO: {...icons['nf-seti-todo'], color: colorsSeti.blue},
	'TODO.txt': {...icons['nf-seti-todo'], color: colorsSeti.blue},
	'TODO.md': {...icons['nf-seti-todo'], color: colorsSeti.blue},
};

export const byExtensionSeti: Record<keyof typeof fileExtensionSeti, GlyphIcon> = fileExtensionSeti;

export type IconsCollectionFileSupported = Extract<IconsCollection, 'seti'>;

export const mappings: Record<IconsCollectionFileSupported, Mapping> = {
	seti: {
		byPartial: new Map(Object.entries(byPartialSeti)),
		byExtension: new Map(Object.entries(byExtensionSeti)),
		byDefault: icons['nf-seti-text'],
	},
};

export function fromPath(parsed: ParsedPath, mapping: Mapping): GlyphIcon;
export function fromPath(filePath: string, mapping: Mapping): GlyphIcon;
export function fromPath(argument1: ParsedPath | string, mapping: Mapping): GlyphIcon {
	const parsed = typeof argument1 === 'string' ? parse(argument1) : argument1;
	const {ext, base} = parsed;
	const foundExtension = mapping.byExtension.get(ext);
	if (foundExtension) {
		return foundExtension;
	}

	const foundPartial = Array.from(mapping.byPartial.entries()).find(([key]) => base.includes(key));
	if (foundPartial) {
		const [, glyphicon] = foundPartial;
		return glyphicon;
	}

	return mapping.byDefault;
}
