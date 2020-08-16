const el = require('elasticlunr');

repos = [
    "lodash/lodash",
    "facebook/react",
    "chalk/chalk",
    "request/request",
    "tj/commander.js",
    "moment/moment",
    "expressjs/express",
    "Microsoft/tslib",
    "axios/axios",
    "facebook/prop-types",
    "jprichardson/node-fs-extra",
    "visionmedia/debug",
    "vuejs/vue",
    "caolan/async",
    "petkaantonov/bluebird",
    "uuidjs/uuid",
    "zloirock/core-js",
    "JedWatson/classnames",
    "SBoudrias/Inquirer.js",
    "jashkenas/underscore",
    "yargs/yargs",
    "webpack/webpack",
    "reactivex/rxjs",
    "isaacs/node-mkdirp",
    "isaacs/node-glob",
    "expressjs/body-parser",
    "Microsoft/TypeScript",
    "motdotla/dotenv",
    "Marak/colors.js",
    "jquery/jquery",
    "substack/minimist",
    "DefinitelyTyped/DefinitelyTyped",
    "babel/babel",
    "aws/aws-sdk-js",
    "packages/babel-runtime",
    "npm/node-semver",
    "babel/babel-loader",
    "bitinn/node-fetch",
    "reduxjs/redux",
    "eslint/eslint",
    "winstonjs/winston",
    "webpack-contrib/css-loader",
    "isaacs/rimraf",
    "packages/babel-core",
    "yeoman/generator",
    "webpack-contrib/style-loader",
    "shelljs/shelljs",
    "cheeriojs/cheerio",
    "reduxjs/react-redux",
    "rvagg/through2",
    "sindresorhus/ora",
    "nodeca/js-yaml",
    "angular/angular",
    "styled-components/styled-components",
    "auth0/node-jsonwebtoken",
    "babel/babel-eslint",
    "ramda/ramda",
    "benmosher/eslint-plugin-import",
    "webpack-contrib/file-loader",
    "kriskowal/q",
    "yannickcr/eslint-plugin-react",
    "sass/node-sass",
    "Automattic/mongoose",
    "wycats/handlebars.js",
    "ReactTraining/react-router",
    "request/request-promise",
    "jantimon/html-webpack-plugin",
    "vuejs/vue-router",
    "webpack-contrib/url-loader",
    "webpack/webpack-dev-server",
    "rbuckton/reflect-metadata",
    "websockets/ws",
    "postcss/postcss-loader",
    "mongodb/node-mongodb-native",
    "gulpjs/gulp",
    "twbs/bootstrap",
    "packages/babel-polyfill",
    "webpack-contrib/sass-loader",
    "sindresorhus/object-assign",
    "mochajs/mocha",
    "visionmedia/superagent",
    "facebook/jest",
    "mde/ejs",
    "ljharb/qs",
    "packages/babel-preset-es2015",
    "jinder/path",
    "socketio/socket.io",
    "postcss/autoprefixer",
    "NodeRedis/node-redis",
    "chaijs/chai",
    "facebook/immutable-js",
    "evcohen/eslint-plugin-jsx-a11y",
    "expressjs/cors",
    "Leonidas-from-XIV/node-xml2js",
    "gulpjs/gulp-util",
    "graphql/graphql-js",
    "expressjs/morgan",
]

var index = el(function() {
    this.addField('repo');
});

repos.forEach(function(repo) {
    index.addDoc({
        "repo": repo
    })
    console.log(repo)
})

console.log(index.search("loda"), {})