function renderGitalk(config){
    var gitalk = new Gitalk({
        clientID: config.clientID,//'a80e57a9ad7a92dd2c8d',
        clientSecret: config.clientSecret,//'c38424e2af55c1549f52de1564eb71b4a94c10ea',
        repo: config.repo,//'docsify-note-02',
        owner: config.owner,//'mg0324',
        admin: config.admin,//['mg0324'],
        distractionFreeMode: false,
        id:decodeURI(window.location.pathname)
    });
    gitalk.render('gitalk-container');
    console.info("[docsify-gitalk] rending!!!");
}

export function install (hook, vm) {
    hook.afterEach(function(html, next) {
        // 解析成 html 后调用。
        // beforeEach 和 afterEach 支持处理异步逻辑
        // ...
        // 异步处理完成后调用 next(html) 返回结果
        html = html + "<div id='gitalk-container' style='width: 80%;padding-left: 80px;'></div>";
        var config = window.$docsify.gitalk;
        renderGitalk(config);
        next(html);
    });
}