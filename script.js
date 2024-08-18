function replaceText() {
    let text = document.getElementById('inputText').value;

    // 置換ルールの設定
    const replacements = {
        'pm': 'pⁿ',
        'bm': 'bⁿ',
        "p'm": "p'ⁿ",
        'hm': 'm̥',
        'f': 'ɸ',
        'v': 'β',
        'tn': 'tⁿ',
        'dn': 'dⁿ',
        "t'n": "t'ⁿ",
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
        "k'n": "k'ⁿ",
        'hng': 'ŋ̊',
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

    document.getElementById('outputText').value = text;
}
