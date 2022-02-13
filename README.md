# Picilang

 [<img src="img/WTFPL_badge.svg" class="badge">](http://www.wtfpl.net/)

_Picilang_ /pi.t͡si.läŋɡ/ or _kiti paw ko-si_ /ki.ti aw ko.si/ is a minimalist constructed language designed to be easy to learn and use, although it does not have any restrictions on number of words; the goal is to be easy to use even for beginners with the help of a dictionary.

This project is still work in progress, however the general grammar is already done and what is written will probably not change (in content). The dictionary is in very early stages and will be expanding constantly as the language sees more and more use.

## Work in progress <a id="plans" href="#plans">&#5130;</a><a></a>

- expand vocabulary (forever ongoing)
- finetune design mainly for small resolution (below 400 pixels)\*
- add useful dictionary features
  - search for exact words (as a separate option from pattern matching)
  - pattern matching search
  - filters
    - show words being X part of speech
  - reflect the search word and options in url
  - "linkify" Picilang words
  - keyboard shortcuts
  - generate letter shortcuts

\*: probably by the time I'll get around this one, there will be virtually no phones having presets that would result in such resolutions

## Features <a id="features" href="#features">&#5130;</a><a></a>

- SVO word order
- head-final
- compound words are hyphenated
- small alphabet (a, i, o, j, w, k, l, m, n, p, s, t)
- CVs syllables (Consonant, Vowel, optional semi-vowel)
- 5 parts of speech (Noun, Verb, Modifier, Conjunction, Preposition)
- no verb tenses, moods or aspects

## Where to find stuff <a id="whereto" href="#whereto">&#5130;</a><a></a>

- Read the documentation <a id="doclink">here</a>,
- Check out the dictionary <a id="dictlink">here</a>,
- The source code <a href="https://github.com/ae-dschorsaanjo/picilang">here</a>,
- Or you can check out the website <a href="https://picilang.org">here</a>.

The dictionary is stored in a tab-separated csv file that's first row contains the headers (prefixed with a `0` so auto-sort keeps them at the top even if headers are not explicitly supported by the editor).

## Acknowledgement <a id="acknowledgement" href="#acknowledgement">&#5130;</a><a></a>

This language was, by how human brain works, inspired by or borrowed from various natural and constructed languages. Here I will try to account for these languages and works and what has been used from them:

- English, Hungarian, German and possibly other natural languages (words and affected the recommended transliteration)
- <a href="tokipona.org">toki pona</a> (general "minimalist language" concept, a few words and dictionary's layout)
- <a href="https://dragonage.fandom.com/wiki/Qunlat">Qunlat</a>,  language of the Qunari in Dragon Age (minor effect on how some words sound inherited from a previous unfinished conlang of mine)
- <a href="https://www.akademio-de-esperanto.org/">Esperanto</a> (how question words are formed)
- H. P. Lovecraft's works (heavy influence on the <a href="?page=grammar#fiction">fictional origin</a> of Picilang)
- Possibly many others, mainly subconsciously

<div class="hide">

## License <a id="license" href="#license">&#5130;</a><a></a>

Copyright © 2021 ae-dschorsaanjo (b.zoltan.gorza@gmail.com)

This work is free. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See the [COPYING](./COPYING) file for more details.

</div>
