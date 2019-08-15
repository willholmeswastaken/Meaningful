const Searcher = require('./searcher');

class GoogleSearcher extends Searcher {
    constructor(searchContent, vscode) {
        super(searchContent, vscode, 'https://www.google.com/search?q=');
    }
}

module.exports = GoogleSearcher;