class Searcher {
    constructor(searchContent, vscode, searchUri) {
        this.searchContent = searchContent;
        this.vscode = vscode;
        this.searchUri = searchUri;
    }

    performSearch() {
        this.vscode.env.openExternal(`${this.searchUri}${encodeURI(this.searchContent)}`);
    }
}

module.exports = Searcher;