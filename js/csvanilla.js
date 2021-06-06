/* Copyright © 2021 ae-dschorsaanjo (b.zoltan.gorza@gmail.com)
 *
 * This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * http://www.wtfpl.net/ for more details. */

class CSVLine {

}

class CSV {
    constructor(txt) {
        
    }
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
        fetch(filename)
            .then(r => r.text())
            .then(data => {
                this.master = new CSV(data);
            })
    }
}