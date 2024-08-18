function replaceText() {
    let text = document.getElementById('inputText').value;

    // 置換ルールの設定
    const replacements = {
        'p\'m': 'p\'ⁿ',
        't\'n': 't\'ⁿ',
        'k\'n': 'k\'ⁿ',
        'hng': 'ŋ̊',
        'pm': 'pⁿ',
        'bm': 'bⁿ',
        'hm': 'm̥',
        'f': 'ɸ',
        'v': 'β',
        'tn': 'tⁿ',
        'dn': 'dⁿ',
        'hn': 'n̥',
        'hr': 'r̥',
        'hl': 'l̥',
        'c': 't͡s',
        'dz': 'd͡z',
        'ch': 't͡ʃ',
        'j': 'd͡ʒ',
        'sh': 'ʃ',
        'zh': 'ʒ',
        'kn': 'kⁿ',
        'gn': 'gⁿ',
        'ng': 'ŋ',
        'gh': 'ɣ',
        'q': 'ʔ',
        'ia': 'ja',
        'ai': 'aj',
        'ua': 'wa',
        'au': 'aw',
        'e': 'ə',
        'ie': 'jə',
        'ei': 'əj',
        'ue': 'wə',
        'eu': 'əw',
        'iú': 'ju',
        'úi': 'uj',
        'uí': 'wi',
        'íu': 'iw',
        '1': 'ˈ',
        '2': 'ˌ'
    };

    // 置換処理の実行
    for (const [key, value] of Object.entries(replacements)) {
        const regex = new RegExp(key, 'g');
        text = text.replace(regex, value);
    }

    // チェックボックスがオンになっている場合、頭にˈを追加
    if (document.getElementById('addAccent').checked) {
        text = text.split(' ').map(word => {
            // =をˈに置換
            word = word.replace('=', 'ˈ');
            // 残りの-を取り除く
            word = word.replace(/-/g, '');
            return 'ˈ' + word;
        }).join(' ');
    } else {
        // =をˈに置換し、残りの-を取り除く
        text = text.replace(/=/g, 'ˈ').replace(/-/g, '');
    }

    document.getElementById('outputText').value = text;
}
