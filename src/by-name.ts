import {type GlyphIcon} from './glyphicon.js';

const setiCollection = {
	'nf-seti-apple': {
		char: '\uE635',
	},
	'nf-seti-argdown': {
		char: '\uE636',
	},
	'nf-seti-asm': {
		char: '\uE637',
	},
	'nf-seti-audio': {
		char: '\uE638',
	},
	'nf-seti-babel': {
		char: '\uE639',
	},
	'nf-seti-bazel': {
		char: '\uE63A',
	},
	'nf-seti-bicep': {
		char: '\uE63B',
	},
	'nf-seti-bower': {
		char: '\uE61A',
	},
	'nf-seti-bsl': {
		char: '\uE63C',
	},
	'nf-seti-c': {
		char: '\uE649',
	},
	'nf-seti-cake': {
		char: '\uE63E',
	},
	'nf-seti-checkbox': {
		char: '\uE63F',
	},
	'nf-seti-cjsx': {
		char: '\uE61B',
	},
	'nf-seti-clock': {
		char: '\uE641',
	},
	'nf-seti-clojure': {
		char: '\uE642',
	},
	'nf-seti-coffee': {
		char: '\uE61B',
	},
	'nf-seti-coldfusion': {
		char: '\uE645',
	},
	'nf-seti-config': {
		char: '\uE615',
	},
	'nf-seti-cpp': {
		char: '\uE646',
	},
	'nf-seti-crystal': {
		char: '\uE62F',
	},
	'nf-seti-css': {
		char: '\uE614',
	},
	'nf-seti-csv': {
		char: '\uE64A',
	},
	'nf-seti-cu': {
		char: '\uE64B',
	},
	'nf-seti-d': {
		char: '\uE651',
	},
	'nf-seti-dart': {
		char: '\uE64C',
	},
	'nf-seti-db': {
		char: '\uE64D',
	},
	'nf-seti-default': {
		char: '\uE64E',
	},
	'nf-seti-docker': {
		char: '\uE650',
	},
	'nf-seti-editorconfig': {
		char: '\uE652',
	},
	'nf-seti-ejs': {
		char: '\uE618',
	},
	'nf-seti-elixir': {
		char: '\uE62D',
	},
	'nf-seti-elm': {
		char: '\uE62C',
	},
	'nf-seti-error': {
		char: '\uE654',
	},
	'nf-seti-eslint': {
		char: '\uE655',
	},
	'nf-seti-ethereum': {
		char: '\uE656',
	},
	'nf-seti-favicon': {
		char: '\uE623',
	},
	'nf-seti-firebase': {
		char: '\uE657',
	},
	'nf-seti-firefox': {
		char: '\uE658',
	},
	'nf-seti-folder': {
		char: '\uE613',
	},
	'nf-seti-font': {
		char: '\uE659',
	},
	'nf-seti-git': {
		char: '\uE65D',
	},
	'nf-seti-github': {
		char: '\uE65B',
	},
	'nf-seti-gitlab': {
		char: '\uE65C',
	},
	'nf-seti-go': {
		char: '\uE627',
	},
	'nf-seti-go2': {
		char: '\uE65E',
	},
	'nf-seti-godot': {
		char: '\uE65F',
	},
	'nf-seti-gradle': {
		char: '\uE660',
	},
	'nf-seti-grails': {
		char: '\uE661',
	},
	'nf-seti-graphql': {
		char: '\uE662',
	},
	'nf-seti-grunt': {
		char: '\uE611',
	},
	'nf-seti-gulp': {
		char: '\uE610',
	},
	'nf-seti-hacklang': {
		char: '\uE663',
	},
	'nf-seti-haml': {
		char: '\uE664',
	},
	'nf-seti-happenings': {
		char: '\uE665',
	},
	'nf-seti-haskell': {
		char: '\uE61F',
	},
	'nf-seti-haxe': {
		char: '\uE666',
	},
	'nf-seti-heroku': {
		char: '\uE607',
	},
	'nf-seti-hex': {
		char: '\uE667',
	},
	'nf-seti-home': {
		char: '\uE617',
	},
	'nf-seti-html': {
		char: '\uE60E',
	},
	'nf-seti-ignored': {
		char: '\uE668',
	},
	'nf-seti-illustrator': {
		char: '\uE669',
	},
	'nf-seti-image': {
		char: '\uE60D',
	},
	'nf-seti-info': {
		char: '\uE66A',
	},
	'nf-seti-ionic': {
		char: '\uE66B',
	},
	'nf-seti-jade': {
		char: '\uE66C',
	},
	'nf-seti-java': {
		char: '\uE66D',
	},
	'nf-seti-javascript': {
		char: '\uE60C',
	},
	'nf-seti-jenkins': {
		char: '\uE66E',
	},
	'nf-seti-jinja': {
		char: '\uE66F',
	},
	'nf-seti-json': {
		char: '\uE60B',
	},
	'nf-seti-julia': {
		char: '\uE624',
	},
	'nf-seti-karma': {
		char: '\uE622',
	},
	'nf-seti-kotlin': {
		char: '\uE634',
	},
	'nf-seti-less': {
		char: '\uE60B',
	},
	'nf-seti-license': {
		char: '\uE60A',
	},
	'nf-seti-liquid': {
		char: '\uE670',
	},
	'nf-seti-livescript': {
		char: '\uE671',
	},
	'nf-seti-lock': {
		char: '\uE672',
	},
	'nf-seti-lua': {
		char: '\uE620',
	},
	'nf-seti-makefile': {
		char: '\uE673',
	},
	'nf-seti-markdown': {
		char: '\uE609',
	},
	'nf-seti-maven': {
		char: '\uE674',
	},
	'nf-seti-mdo': {
		char: '\uE675',
	},
	'nf-seti-mustache': {
		char: '\uE60F',
	},
	'nf-seti-nim': {
		char: '\uE677',
	},
	'nf-seti-notebook': {
		char: '\uE678',
	},
	'nf-seti-npm': {
		char: '\uE616',
	},
	'nf-seti-nunjucks': {
		char: '\uE679',
	},
	'nf-seti-ocaml': {
		char: '\uE67A',
	},
	'nf-seti-odata': {
		char: '\uE67B',
	},
	'nf-seti-pddl': {
		char: '\uE67C',
	},
	'nf-seti-pdf': {
		char: '\uE67D',
	},
	'nf-seti-perl': {
		char: '\uE67E',
	},
	'nf-seti-photoshop': {
		char: '\uE67F',
	},
	'nf-seti-php': {
		char: '\uE608',
	},
	'nf-seti-pipeline': {
		char: '\uE680',
	},
	'nf-seti-plan': {
		char: '\uE681',
	},
	'nf-seti-platformio': {
		char: '\uE682',
	},
	'nf-seti-powershell': {
		char: '\uE683',
	},
	'nf-seti-prisma': {
		char: '\uE684',
	},
	'nf-seti-project': {
		char: '\uE601',
	},
	'nf-seti-prolog': {
		char: '\uE685',
	},
	'nf-seti-pug': {
		char: '\uE686',
	},
	'nf-seti-puppet': {
		char: '\uE631',
	},
	'nf-seti-purescript': {
		char: '\uE630',
	},
	'nf-seti-python': {
		char: '\uE606',
	},
	'nf-seti-r': {
		char: '\uE68A',
	},
	'nf-seti-rails': {
		char: '\uE604',
	},
	'nf-seti-react': {
		char: '\uE625',
	},
	'nf-seti-reasonml': {
		char: '\uE687',
	},
	'nf-seti-rescript': {
		char: '\uE688',
	},
	'nf-seti-rollup': {
		char: '\uE689',
	},
	'nf-seti-ruby': {
		char: '\uE605',
	},
	'nf-seti-rust': {
		char: '\uE68B',
	},
	'nf-seti-salesforce': {
		char: '\uE68C',
	},
	'nf-seti-sass': {
		char: '\uE603',
	},
	'nf-seti-sbt': {
		char: '\uE68D',
	},
	'nf-seti-scala': {
		char: '\uE68E',
	},
	'nf-seti-search': {
		char: '\uE68F',
	},
	'nf-seti-settings': {
		char: '\uE690',
	},
	'nf-seti-shell': {
		char: '\uE691',
	},
	'nf-seti-slim': {
		char: '\uE692',
	},
	'nf-seti-smarty': {
		char: '\uE693',
	},
	'nf-seti-spring': {
		char: '\uE694',
	},
	'nf-seti-stylelint': {
		char: '\uE695',
	},
	'nf-seti-stylus': {
		char: '\uE600',
	},
	'nf-seti-sublime': {
		char: '\uE696',
	},
	'nf-seti-svelte': {
		char: '\uE697',
	},
	'nf-seti-svg': {
		char: '\uE698',
	},
	'nf-seti-swift': {
		char: '\uE699',
	},
	'nf-seti-terraform': {
		char: '\uE69A',
	},
	'nf-seti-tex': {
		char: '\uE69B',
	},
	'nf-seti-text': {
		char: '\uE64E',
	},
	'nf-seti-todo': {
		char: '\uE69C',
	},
	'nf-seti-tsconfig': {
		char: '\uE69D',
	},
	'nf-seti-twig': {
		char: '\uE61C',
	},
	'nf-seti-typescript': {
		char: '\uE628',
	},
	'nf-seti-vala': {
		char: '\uE69E',
	},
	'nf-seti-video': {
		char: '\uE69F',
	},
	'nf-seti-vue': {
		char: '\uE6A0',
	},
	'nf-seti-wasm': {
		char: '\uE6A1',
	},
	'nf-seti-wat': {
		char: '\uE6A2',
	},
	'nf-seti-webpack': {
		char: '\uE6A3',
	},
	'nf-seti-wgt': {
		char: '\uE6A4',
	},
	'nf-seti-word': {
		char: '\uE6A5',
	},
	'nf-seti-xls': {
		char: '\uE6A6',
	},
	'nf-seti-xml': {
		char: '\uE619',
	},
	'nf-seti-yarn': {
		char: '\uE6A7',
	},
	'nf-seti-yml': {
		char: '\uE6A8',
	},
	'nf-seti-zig': {
		char: '\uE6A9',
	},
	'nf-seti-zip': {
		char: '\uE6AA',
	},
	'nf-seti-c_sharp': {
		char: '\uE648',
	},
	'nf-seti-cake_php': {
		char: '\uE63D',
	},
	'nf-seti-checkbox_unchecked': {
		char: '\uE640',
	},
	'nf-seti-code_climate': {
		char: '\uE643',
	},
	'nf-seti-code_search': {
		char: '\uE644',
	},
	'nf-seti-crystal_embedded': {
		char: '\uE647',
	},
	'nf-seti-deprecation_cop': {
		char: '\uE64F',
	},
	'nf-seti-elixir_script': {
		char: '\uE653',
	},
	'nf-seti-f_sharp': {
		char: '\uE65A',
	},
	'nf-seti-git_folder': {
		char: '\uE65D',
	},
	'nf-seti-git_ignore': {
		char: '\uE65D',
	},
	'nf-seti-new_file': {
		char: '\uE676',
	},
	'nf-seti-npm_ignored': {
		char: '\uE616',
	},
	'nf-seti-play_arrow': {
		char: '\uE602',
	},
	'nf-seti-time_cop': {
		char: '\uE641',
	},
} as const;

export const byNameSeti: Record<keyof typeof setiCollection, GlyphIcon> = setiCollection;

const byName = {
	...byNameSeti,
};
export default byName;
