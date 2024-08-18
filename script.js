function replaceText() {
    let text = document.getElementById('inputText').value;

    // 置換ルールの設定（正規表現を使用）
    const replacements = [
        { pattern: /p’m/g, replacement: 'p’ⁿ' },
        { pattern: /t’n/g, replacement: 't’ⁿ' },
        { pattern: /k’n/g, replacement: 'k’ⁿ' },
        { pattern: /hng/g, replacement: 'ŋ̊' },
        { pattern: /pm/g, replacement: 'pⁿ' },
        { pattern: /bm/g, replacement: 'bⁿ' },
        { pattern: /hm/g, replacement: 'm̥' },
        { pattern: /f/g, replacement: 'ɸ' },
        { pattern: /v/g, replacement: 'β' },
        { pattern: /tn/g, replacement: 'tⁿ' },
        { pattern: /dn/g, replacement: 'dⁿ' },
        { pattern: /hn/g, replacement: 'n̥' },
        { pattern: /hr/g, replacement: 'r̥' },
        { pattern: /hl/g, replacement: 'l̥' },
        { pattern: /c/g, replacement: 't͡s' },
        { pattern: /dz/g, replacement: 'd͡z' },
        { pattern: /ch/g, replacement: 't͡ʃ' },
        { pattern: /j/g, replacement: 'd͡ʒ' },
        { pattern: /sh/g, replacement: 'ʃ' },
        { pattern: /zh/g, replacement: 'ʒ' },
        { pattern: /kn/g, replacement: 'kⁿ' },
        { pattern: /gn/g, replacement: 'gⁿ' },
        { pattern: /ng/g, replacement: 'ŋ' },
        { pattern: /gh/g, replacement: 'ɣ' },
        { pattern: /q/g, replacement: 'ʔ' },
        { pattern: /ia/g, replacement: 'ja' },
        { pattern: /ai/g, replacement: 'aj' },
        { pattern: /ua/g, replacement: 'wa' },
        { pattern: /au/g, replacement: 'aw' },
        { pattern: /e/g, replacement: 'ə' },
        { pattern: /ie/g, replacement: 'jə' },
        { pattern: /ei/g, replacement: 'əj' },
        { pattern: /ue/g, replacement: 'wə' },
        { pattern: /eu/g, replacement: 'əw' },
        { pattern: /iú/g, replacement: 'ju' },
        { pattern: /úi/g, replacement: 'uj' },
        { pattern: /uí/g, replacement: 'wi' },
        { pattern: /íu/g, replacement: 'iw' },
        { pattern: /1/g, replacement: 'ˈ' },
        { pattern: /2/g, replacement: 'ˌ' }
    ];

    // 置換処理の実行
    replacements.forEach(({ pattern, replacement }) => {
        text = text.replace(pattern, replacement);
    });

    // チェックボックスがオンになっている場合、頭にˈを追加
    if (document.getElementById('addAccent').checked) {
        // 改行やスペースで単語を分割し、それぞれの単語にアクセントマークを追加
        text = text.split(/\s+/).map(word => {
            // =をˈに置換
            word = word.replace('=', 'ˈ');
            // 残りの-を取り除く
            word = word.replace(/-/g, '');
            // 空でない場合にアクセントマークを追加
            if (word.trim() !== '') {
                return 'ˈ' + word;
            }
            return word;
        }).join(' ');
    } else {
        // =をˈに置換し、残りの-を取り除く
        text = text.replace(/=/g, 'ˈ').replace(/-/g, '');
    }

    document.getElementById('outputText').value = text;
}
