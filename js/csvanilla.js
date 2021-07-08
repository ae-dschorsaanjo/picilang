/* Copyright © 2021 ae-dschorsaanjo (b.zoltan.gorza@gmail.com)
 *
 * This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * http://www.wtfpl.net/ for more details.
 */

export const WORD = 0;
export const NOUN = 1;
export const VERB = 2;
export const MODIFIER = 3;
export const CONJUNCTION = 4;
export const PREPOSITION = 5;
export const NOTE = 6;

const POS_LABEL = [
    "word",
    "noun",
    "verb",
    "mod",
    "con",
    "pre",
    "note"
];

const POS_TITLE = [
    "",
    "noun",
    "verb",
    "modifier",
    "conjunction",
    "preposition",
    ""
];

class CSVLine {
    line;
    line_noword_str;
    line_str;
    line_note_str;
    delimiter;

    /**
     * @param {string} line A single line of CSV
     * @param {string} delimiter
     */
    constructor(line, delimiter) {
        this.delimiter = delimiter;
        // console.log(line);
        if (line[0] == '"')
            line = line.substr(1, line.length - 2)
        line = line.replaceAll('"\t', "\t").replaceAll('\t"', '\t').replaceAll('""', '"');
        this.line_note_str = line;
        const s = this.line_note_str.split(this.delimiter);
        this.line = s.splice(0, NOTE);
        if (s[0].length > 0)
            this.line.push(s[0][0].toUpperCase() + s[0].substr(1));
        else
            this.line.push("");
        this.line_str = this.line.slice(0, 6).join(" ");
        this.line_noword_str = this.line.slice(1, 6).join(" ");
        // console.log(`${this.line_note_str}\n${this.line_str}\n${this.line_noword_str}`);
    }
}

class CSV {
    lines;

    constructor(txt, delimiter, has_header) {
        let s = txt.replaceAll(/\r/g, "").split(/\n/g);
        if (has_header) s = s.splice(1);
        this.lines = [];
        for (let l of s) {
            if (l)
                this.lines.push(new CSVLine(l, delimiter));
        }
    }

    search(term, mode) {
        let results = [];
        term = term.toLowerCase();
        for (let l of this.lines) {
            if ((mode == 1 && l.line[WORD].includes(term)) ||
                (mode == 2 && l.line_noword_str.includes(term)) ||
                (mode == 3 && l.line_str.includes(term)) ||
                (mode == 0 && l.line_note_str.includes(term)))
                results.push(l);
        }
        results.sort((a, b) => {
            return a.line[WORD].localeCompare(b.line[WORD], { sensitivity: "case", caseFirst: "lower" })
        });
        return results;
    }
}

/**
 * @param {CSVLine[]} lines csv lines
 * @param {string} bodyname 
 */
export function buildResults(lines, bodyname) {
    const tbody = document.getElementById(bodyname);
    tbody.innerHTML = "";
    if (lines === undefined || lines.length == 0) return 0;
    // let tr, td;
    // for (let l of lines) {
    //     tr = document.createElement("tr");
    //     for (let d of l.line) {
    //         td = document.createElement("td");
    //         td.innerText = d;
    //         tr.appendChild(td);
    //     }
    //     tbody.appendChild(tr);
    // }
    let d, d2;
    for (let l of lines) {
        d = document.createElement("div");
        d.classList.add("entry");
        for (let i = 0; i < l.line.length; i++) {
            if (l.line[i] == "") continue;
            d2 = document.createElement("div");
            d2.classList.add(POS_LABEL[i]);
            if (i > WORD && i < NOTE) {
                d2.innerHTML = `<span class="pos" title="${POS_TITLE[i]}">${POS_LABEL[i]}</span> ${l.line[i]}`;
            }
            else {
                d2.innerHTML = l.line[i];
            }
            d.appendChild(d2);
        }
        tbody.appendChild(d);
    }
    return lines.length;
}

export class CSVanilla {
    /**
     * Master variable, contains the full CSV
     * @type {CSV}
     */
    master;
    /**
     * Search input field
     * @type {HTMLInputElement}
     */
    textinput;
    /**
     * Mode selector field
     * @type {HTMLSelectElement}
     */
    modeselect;
    /**
     * Button
     * @type {HTMLButtonElement}
     */
    button;
    /**
     * Output element
     * @type {HTMLDivElement}
     */
    output;

    /**
     * 
     * @param {string} filename Comma separated values file's name
     * @param {string} textinput 
     * @param {string} modeselect 
     * @param {string} button 
     */
    constructor(filename, textinput, modeselect, button) {
        this.textinput = document.getElementById(textinput);
        this.modeselect = document.getElementById(modeselect);
        this.button = document.getElementById(button);
        let tmp;
        fetch(filename)
            .then(r => r.text())
            .then(data => {
                this.master = new CSV(data, "\t", true);
            });
    }

    search() {
        const term = this.textinput.value.trim();
        if (!term) return;
        let mode = 0;
        switch (this.modeselect.value) {
            case "Picilang":
                mode = 1;
                break;
            case "English":
                mode = 2;
                break;
            case "Any":
                mode = 3;
                break;
        }
        return this.master.search(term, mode);
    }
}