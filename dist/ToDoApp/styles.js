(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/*==========General styling==========*/\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Lato', sans-serif;\n}\n:root{\n    --backgroundColor: #E3E9FF;\n    --primaryColor: #7c41c5;\n    --secondaryColor: #8AC541;\n    --titleColor: #eeeeee;\n    --textColor: #666666;\n}\nbody{\n    background-color: var(--backgroundColor);\n}\n#container{\n    width: 100%;\n    min-height: 537px;\n    margin: 0 auto;\n}\n/*==========Navbar Component==========*/\nheader{\n    width: 100%;\n    background-color: var(--primaryColor);\n    height: 40px;\n    display: flex;\n    flex-flow: row wrap;\n}\nheader #view-toggle{\n    flex-basis: 30%;\n    line-height: 40px;\n    padding-left: 6px;\n}\nheader #view-toggle > button{\n    background-color: var(--primaryColor);\n    border: none;\n    outline: none;\n}\nheader #view-toggle > button > i{\n    color: var(--titleColor);\n    font-size: 20px;\n    transition: all 400ms;\n}\nheader #view-toggle > button:hover > i,\nheader #view-toggle > button:focus > i{     \n    color: var(--secondaryColor);\n}\nheader #title{\n    flex-basis: 40%;\n    text-align: center;\n    line-height: 40px;\n}\nheader #title > h1{\n    color: var(--titleColor);\n    font-size: 26px;\n    font-weight: bolder;\n}\n.custom-select{\n    flex-basis: 30%;\n    position: relative;\n}\n.custom-select select{\n    width: 100%;\n    background-color: var(--primaryColor);\n    height: 40px;\n    border: none;\n    outline: none;\n    color: var(--titleColor);\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    padding-right: 20%;\n    padding-left: 10%;\n    transition: color 400ms;\n    cursor: pointer;\n}\n.custom-select #select-arrow{\n    position: absolute;\n    width: 20%;\n    height: 100%;\n    top: 0;\n    right: 0px;\n    pointer-events: none;\n}\n.custom-select #select-arrow::before,\n.custom-select #select-arrow::after{\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    transition: all 400ms;\n}\n.custom-select #select-arrow::before{\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-bottom: 6px solid var(--titleColor);\n    top: 35%;\n}\n.custom-select #select-arrow::after{\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-top: 6px solid var(--titleColor);\n    top: 60%;\n\n}\n.custom-select select:hover + #select-arrow::before,\n.custom-select select:focus + #select-arrow::before{\n\n    border-bottom: 6px solid var(--secondaryColor);\n}\n.custom-select select:hover + #select-arrow::after,\n.custom-select select:focus + #select-arrow::after{\n    border-top: 6px solid var(--secondaryColor);\n}\n/*==========Todos Component==========*/\n#to-dos-wrapper{\n    background-color: #ffffff;\n    box-shadow:\n        0 0.6px 3.4px rgba(0, 0, 0, 0.022),\n        0 1.5px 8.7px rgba(0, 0, 0, 0.031),\n        0 3px 17.7px rgba(0, 0, 0, 0.039),\n        0 6px 36.5px rgba(0, 0, 0, 0.048),\n        0 16px 100px rgba(0, 0, 0, 0.07);\n    padding: 40px 20px;\n    min-height: 400px; \n    display: flex;\n    flex-flow: column wrap;\n\n}\n.to-do-item{\n    min-height: 30px;\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    margin-bottom: 10px;\n}\n.to-do-item > .to-do{\n    position: relative;\n    flex-basis: 80%;\n    color: var(--textColor);\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n\n}\n.to-do-item > .to-do > .to-do-text{\n    flex-basis: 85%;\n    padding-left: 20px;\n    transition: color 400ms;\n}\n.to-do-done{\n    color: #888888;\n    text-decoration: line-through;\n}\n.to-do-item > .to-do> input,\n.to-do-grid-item > .to-do> input{\n    width: 20px;\n    height: 20px;\n    outline: none;\n    opacity: 0;\n    cursor: pointer;\n}\n.to-do-item > .to-do > .custom-checkbox,\n.to-do-grid-item > .to-do > .custom-checkbox{\n    position: absolute;\n    pointer-events: none;\n    top: 0;\n    left: 0px;\n    width: 20px;\n    height: 20px;\n    border: 1px solid gray;\n    border-radius: 3px;\n    transition: background 400ms;\n}\n.to-do > input:checked ~ .custom-checkbox {\n    background-color: var(--secondaryColor);\n}\n.to-do-item > .to-do > input:hover ~ .custom-checkbox,\n.to-do-grid-item > .to-do > input:hover ~ .custom-checkbox{\n    transform: scale(1.05);\n}\n.to-do > .custom-checkbox::after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n.to-do > input:checked ~ .custom-checkbox::after{\n    content: \"\";\n    display: block;\n    left: 5px;\n    width: 5px;\n    height: 10px;\n    border: solid var(--titleColor);\n    border-width: 0px 3px 3px 0px;\n    transform: rotate(45deg);\n}\n.to-do-item > .edit-to-do{\n    flex-basis: 20%;\n    display: grid;\n    grid-template-columns: 40% 40%;\n    justify-content: center;\n    gap: 5px;\n}\n.to-do-item > .edit-to-do > button,\n.to-do-grid-item > .edit-to-do > button{\n    border: none;\n    outline: none;\n    background-color: transparent;\n    cursor: pointer;\n}\n.to-do-item > .edit-to-do > button i,\n.to-do-grid-item > .edit-to-do > button i{\n    font-size: 22px;\n    color: var(--textColor);\n    transition: color 400ms, opacity 400ms;\n}\n.to-do-item > .edit-to-do > .delete:hover i,\n.to-do-item > .edit-to-do > .delete:focus i,\n.to-do-grid-item > .edit-to-do > .delete:hover i,\n.to-do-grid-item > .edit-to-do > .delete:focus i{\n    opacity: 1;\n    color: rgba(255, 0, 0, 0.664);\n}\n.to-do-item > .edit-to-do > .edit:hover i,\n.to-do-item > .edit-to-do > .edit:focus i,\n.to-do-grid-item > .edit-to-do > .edit:hover i,\n.to-do-grid-item > .edit-to-do > .edit:focus i{\n    opacity: 1;\n    color: #7c41c5a6;\n}\n/*==========Todos Grid Component==========*/\n#to-dos-grid-wrapper{\n    background-color: #ffffff;\n    box-shadow:\n        0 0.6px 3.4px rgba(0, 0, 0, 0.022),\n        0 1.5px 8.7px rgba(0, 0, 0, 0.031),\n        0 3px 17.7px rgba(0, 0, 0, 0.039),\n        0 6px 36.5px rgba(0, 0, 0, 0.048),\n        0 16px 100px rgba(0, 0, 0, 0.07);\n    padding: 40px 20px;\n    min-height: 400px; \n    display: grid;\n    justify-content: center;\n    align-items: baseline;\n    grid-template-columns: 85%;\n    grid-template-rows: -webkit-min-content;\n    grid-template-rows: min-content;\n    gap: 20px;\n}\n.to-do-grid-item{\n    position: relative;\n    min-height: 130px;\n    border-radius: 5px;\n    box-shadow:\n        0 0.1px 6.2px rgba(0, 0, 0, 0.034),\n        0 0.2px 8.4px rgba(0, 0, 0, 0.044),\n        0 0.7px 9.3px rgba(0, 0, 0, 0.053),\n        0 2px 6px rgba(0, 0, 0, 0.08);  \n    border: 1px solid #b2b2b28f; \n    background-color: #f9f9f9; \n    transition: background 400ms, box-shadow 400ms;\n}\n.to-do-grid-done{\n    box-shadow:\n        0 0.1px 6.2px rgba(0, 0, 0, 0.034),\n        0 0.2px 8.4px rgba(0, 0, 0, 0.044),\n        0 0.7px 9.3px rgba(0, 0, 0, 0.053),\n        0 1px 4px rgba(0, 0, 0, 0.08);  \n    border: 1px solid #b2b2b28f; \n    background-color: #fefefe;\n    transition: background 400ms, box-shadow 400ms;\n}\n.to-do-grid-item > .to-do{\n    position: relative;\n    color: var(--textColor);\n    padding-top: 20px;\n}\n.to-do-grid-item > .to-do> input,\n.to-do-grid-item > .to-do > .custom-checkbox{\n    position: absolute;\n    top: -7px;\n    left: -7px;\n    border-radius: 50%;\n}\n.to-do-grid-item .to-do > input:checked ~ .custom-checkbox::after{\n    content: \"\";\n    display: block;\n    top: 1px;\n    left: 5px;\n    width: 5px;\n    height: 10px;\n    border: solid var(--titleColor);\n    border-width: 0px 3px 3px 0px;\n    transform: rotate(45deg);\n}\n.to-do-grid-item > .to-do > .to-do-text{\n    margin-top: 5px;\n    padding: 5px;\n}\n.to-do-grid-item > .to-do > .to-do-text::before{\n    content: \"\";\n    display: block;\n    width: 100%;\n    height: 3px;\n    border-radius: 5px;\n    border: none;\n    opacity: 0.2;\n    background-color: var(--primaryColor);\n    transition: background 400ms;\n}\n.to-do-grid-item .to-do > input:checked ~ .to-do-text::before{\n    background-color: var(--secondaryColor);\n}\n.to-do-grid-item > .edit-to-do{\n    position: absolute;\n    top: 3px;\n    right: 3px;\n    display: grid;\n    grid-template-columns: 50% 50%;\n    column-gap: 2px;\n}\n.to-do-grid-item > .edit-to-do > button i{\n    font-size: 20px;\n}\n.to-do-grid-item > .edit-to-do > button i{\n    opacity: 0.5;\n}\n/*==========No-Todos component==========*/\n#no-to-dos-wrapper{\n    background-color: #ffffff;\n    box-shadow:\n        0 0.6px 3.4px rgba(0, 0, 0, 0.022),\n        0 1.5px 8.7px rgba(0, 0, 0, 0.031),\n        0 3px 17.7px rgba(0, 0, 0, 0.039),\n        0 6px 36.5px rgba(0, 0, 0, 0.048),\n        0 16px 100px rgba(0, 0, 0, 0.07);\n    padding: 40px 20px;\n    min-height: 400px; \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n}\n.hero-no-todo{\n    flex-basis: 80%;\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    justify-content: center;\n\n}\n.hero-title{\n    flex-basis: 100%;\n    font-size: 22px;\n    color: var(--secondaryColor);\n    text-align: center;\n    animation: new-task-text 3s infinite ease-in-out;\n}\n.hero-arrow{\n    flex-basis: 100%;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.arrow{\n    position: absolute;\n    width: 25px;\n    height: 25px;\n    border: 6px solid;\n    border-radius: 0px 0px 4px 0px;\n    border-color: transparent var(--textColor) var(--textColor) transparent;\n    transform: rotate(45deg);\n    top: 0;\n    animation: main-arrow 3s infinite ease-in-out;\n}\n/*==========Arrow animations==========*/\n@keyframes new-task-text {\n    0%{\n        opacity: 0.80;\n        \n    }\n    50%{\n        opacity: 1;\n    }\n    100%{\n        opacity: 0.80;\n    }\n}\n@keyframes main-arrow {\n    0%{\n        opacity: 0;\n        top: 0;\n    }\n    50%{\n        opacity: 0.40;\n        top: 15px;\n    }\n    100%{\n        opacity: 0;\n        top: 0;\n    }\n}\n/*==========Create Task==========*/\n#create-task{\n    position: relative;\n    width: 100%;\n    height: 40px;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n}\n.new-task{\n    position: absolute;\n    top: -20px;\n    width: 100px;\n    height: 40px;\n    border: none;\n    outline: none;\n    border-radius: 10px;\n    background-color: var(--primaryColor);\n    color: var(--titleColor);\n    font-weight: bolder;\n    font-size: 16px;\n    line-height: 40px;\n    transition: opacity 400ms;\n}\n.new-task > i {\n    transition: color 400ms;\n}\n.new-task:hover > i ,\n.new-task:focus > i {\n    color: var(--secondaryColor);\n}\n.new-task:hover,\n.new-task:focus{\n    opacity: 0.85;\n}\n/*==========Modal New todo==========*/\n.todo-modal{\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    width: 100%;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.70);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* animation: fadeIn 400ms ease-in; */\n}\n.modal-wrapper{\n    position: relative;\n    background-color: white;\n    flex-basis: 90%;\n    height: 200px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.close-modal{\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    border: none;\n    outline: none;\n    background-color: transparent;\n}\n.close-modal > i,\n.add-todo > i{\n    font-size: 30px;\n    transition: color 400ms;\n}\n.close-modal:hover > i,\n    .close-modal:focus > i{\n    color: rgba(255, 0, 0, 0.664);\n}\n.modal-wrapper > input[type=\"text\"],\n.add-todo{\n    height: 40px;\n    outline: none;\n    border: 1px solid var(--primaryColor);\n}\n.modal-wrapper > input[type=\"text\"]{\n    flex-basis: 70%;\n    border-right: none;\n    transition: border 400ms;\n    padding-left: 10px;\n    color: var(--textColor);\n\n}\n.modal-wrapper > input[type=\"text\"]:hover,\n.modal-wrapper > input[type=\"text\"]:focus{\n    border-color: var(--secondaryColor);\n}\n.add-todo{\n    flex-basis: 15%;\n    border-left: none;\n    background-color: var(--primaryColor);\n}\n.add-todo > i{\n    display: block;\n    color: var(--titleColor);\n}\n.add-todo:hover > i,\n.add-todo:focus > i{\n    color: var(--secondaryColor);\n}\n/*==========Footer Component==========*/\nfooter{\n    position: relative;\n    bottom: 0px;\n    height: 60px;\n    margin-top: 30px;\n    padding-bottom: 30px;\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    justify-content: center;\n\n}\nfooter div span{\n    font-size: 14px;\n    color: var(--textColor);\n}\n/*==========General Animations==========*/\n.fading-in{\n    animation: fadeIn 400ms ease-in;\n}\n.fading-out{\n    animation: fadeOut 400ms ease-out;\n}\n.slide-out{\n    animation: slideOut 400ms ease-out;\n}\n@keyframes fadeIn{\n    from{\n        opacity: 0;\n    }\n    to{\n        opacity: 1;\n    }\n\n}\n@keyframes fadeOut{\n    from{\n        opacity: 1;\n    }\n    to{\n        opacity: 0;\n    }\n\n}\n@keyframes slideOut{\n    from{\n        transform: translateX(0px);\n        opacity: 1;\n    }\n    to{\n        transform: translateX(-45px);\n        opacity: 0;\n    }\n}\n/*==========Responsive Design-==========\n    -Mobile first design >450px\n    -Screen size: 450px, 576px, 768px and 992px\n*/\n/*==========mobile size for big screen-==========*/\n@media only screen and (min-width: 450px){\n\n    header #view-toggle{\n        flex-basis: 22%;\n    }\n    \n    header #title{\n        flex-basis: 56%;\n    }\n    \n    .custom-select{\n        flex-basis: 22%;\n    }\n\n    .to-do-item > .to-do{\n        flex-basis: 83%;\n    }\n    \n    .to-do-item > .edit-to-do{\n        flex-basis: 17%;\n\n    }\n\n    #to-dos-grid-wrapper{\n        grid-template-columns: repeat(2, 50%);\n    }\n\n}\n/*==========mobile size for big screen-==========*/\n@media only screen and (min-width: 576px){\n    \n    #container{\n        width: 95%;\n    }\n\n    header{\n        margin-top: 30px;\n    }\n\n    header #view-toggle{\n        flex-basis: 20%;\n    }\n    \n    header #title{\n        flex-basis: 60%;\n    }\n    \n    .custom-select{\n        flex-basis: 20%;\n    }\n\n    .to-do-item > .to-do{\n        flex-basis: 85%;\n    }\n    \n    .to-do-item > .edit-to-do{\n        flex-basis: 15%;\n\n    }\n\n    .new-task{\n        width: 110px;\n    }\n\n    .modal-wrapper{\n        flex-basis: 80%;\n    }\n\n}\n/*==========Tablet size-==========*/\n@media only screen and (min-width: 768px){\n\n    #container{\n        width: 90%;\n    }\n\n    header #view-toggle{\n        flex-basis: 17%;\n    }\n    \n    header #title{\n        flex-basis: 66%;\n    }\n    \n    .custom-select{\n        flex-basis: 17%;\n    }\n\n    #to-dos-wrapper{\n        margin-top: 30px;\n        padding: 40px 30px;\n    }\n\n    #to-dos-grid-wrapper{\n        margin-top: 30px;\n        grid-template-columns: repeat(3, 30%);\n    }\n\n    \n    #no-to-dos-wrapper{\n        margin-top: 30px;\n        padding: 40px 40px;\n    }\n\n    .to-do-item > .to-do{\n        flex-basis: 90%;\n    }\n    \n    .to-do-item > .edit-to-do{\n        flex-basis: 10%;\n\n    }\n\n    .new-task{\n        width: 115px;\n    }\n\n    .modal-wrapper{\n        flex-basis: 60%;\n    }\n\n}\n/*==========Desktop size-==========*/\n@media only screen and (min-width: 992px){\n\n    #container{\n        width: 80%;\n    }\n\n    header #view-toggle{\n        flex-basis: 12%;\n    }\n    \n    header #title{\n        flex-basis: 76%;\n    }\n    \n    .custom-select{\n        flex-basis: 12%;\n    }\n\n    #to-dos-wrapper{\n        margin-top: 30px;\n        padding: 40px 40px;\n    }\n\n    #to-dos-grid-wrapper{\n        grid-template-columns: repeat(4, 23%);\n    }\n\n    .to-do-item > .to-do{\n        flex-basis: 90%;\n    }\n    \n    .to-do-item > .edit-to-do{\n        flex-basis: 10%;\n\n    }\n\n    .new-task{\n        width: 120px;\n    }\n\n    .modal-wrapper{\n        flex-basis: 40%;\n    }\n\n}", "",{"version":3,"sources":["styles.css"],"names":[],"mappings":"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","file":"styles.css","sourcesContent":["/*==========General styling==========*/\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Lato', sans-serif;\n}\n\n:root{\n    --backgroundColor: #E3E9FF;\n    --primaryColor: #7c41c5;\n    --secondaryColor: #8AC541;\n    --titleColor: #eeeeee;\n    --textColor: #666666;\n}\n\nbody{\n    background-color: var(--backgroundColor);\n}\n\n#container{\n    width: 100%;\n    min-height: 537px;\n    margin: 0 auto;\n}\n\n\n/*==========Navbar Component==========*/\n\nheader{\n    width: 100%;\n    background-color: var(--primaryColor);\n    height: 40px;\n    display: flex;\n    flex-flow: row wrap;\n}\n\nheader #view-toggle{\n    flex-basis: 30%;\n    line-height: 40px;\n    padding-left: 6px;\n}\nheader #view-toggle > button{\n    background-color: var(--primaryColor);\n    border: none;\n    outline: none;\n}\n\nheader #view-toggle > button > i{\n    color: var(--titleColor);\n    font-size: 20px;\n    transition: all 400ms;\n}\n\nheader #view-toggle > button:hover > i,\nheader #view-toggle > button:focus > i{     \n    color: var(--secondaryColor);\n}\n\nheader #title{\n    flex-basis: 40%;\n    text-align: center;\n    line-height: 40px;\n}\nheader #title > h1{\n    color: var(--titleColor);\n    font-size: 26px;\n    font-weight: bolder;\n}\n.custom-select{\n    flex-basis: 30%;\n    position: relative;\n}\n\n.custom-select select{\n    width: 100%;\n    background-color: var(--primaryColor);\n    height: 40px;\n    border: none;\n    outline: none;\n    color: var(--titleColor);\n    appearance: none;\n    padding-right: 20%;\n    padding-left: 10%;\n    transition: color 400ms;\n    cursor: pointer;\n}\n\n.custom-select #select-arrow{\n    position: absolute;\n    width: 20%;\n    height: 100%;\n    top: 0;\n    right: 0px;\n    pointer-events: none;\n}\n\n.custom-select #select-arrow::before,\n.custom-select #select-arrow::after{\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    transition: all 400ms;\n}\n\n.custom-select #select-arrow::before{\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-bottom: 6px solid var(--titleColor);\n    top: 35%;\n}\n\n.custom-select #select-arrow::after{\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-top: 6px solid var(--titleColor);\n    top: 60%;\n\n}\n\n.custom-select select:hover + #select-arrow::before,\n.custom-select select:focus + #select-arrow::before{\n\n    border-bottom: 6px solid var(--secondaryColor);\n}\n\n.custom-select select:hover + #select-arrow::after,\n.custom-select select:focus + #select-arrow::after{\n    border-top: 6px solid var(--secondaryColor);\n}\n\n\n/*==========Todos Component==========*/\n\n#to-dos-wrapper{\n    background-color: #ffffff;\n    box-shadow:\n        0 0.6px 3.4px rgba(0, 0, 0, 0.022),\n        0 1.5px 8.7px rgba(0, 0, 0, 0.031),\n        0 3px 17.7px rgba(0, 0, 0, 0.039),\n        0 6px 36.5px rgba(0, 0, 0, 0.048),\n        0 16px 100px rgba(0, 0, 0, 0.07);\n    padding: 40px 20px;\n    min-height: 400px; \n    display: flex;\n    flex-flow: column wrap;\n\n}\n\n.to-do-item{\n    min-height: 30px;\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    margin-bottom: 10px;\n}\n\n.to-do-item > .to-do{\n    position: relative;\n    flex-basis: 80%;\n    color: var(--textColor);\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n\n}\n\n.to-do-item > .to-do > .to-do-text{\n    flex-basis: 85%;\n    padding-left: 20px;\n    transition: color 400ms;\n}\n\n\n.to-do-done{\n    color: #888888;\n    text-decoration: line-through;\n}\n\n.to-do-item > .to-do> input,\n.to-do-grid-item > .to-do> input{\n    width: 20px;\n    height: 20px;\n    outline: none;\n    opacity: 0;\n    cursor: pointer;\n}\n\n.to-do-item > .to-do > .custom-checkbox,\n.to-do-grid-item > .to-do > .custom-checkbox{\n    position: absolute;\n    pointer-events: none;\n    top: 0;\n    left: 0px;\n    width: 20px;\n    height: 20px;\n    border: 1px solid gray;\n    border-radius: 3px;\n    transition: background 400ms;\n}\n\n.to-do > input:checked ~ .custom-checkbox {\n    background-color: var(--secondaryColor);\n}\n\n.to-do-item > .to-do > input:hover ~ .custom-checkbox,\n.to-do-grid-item > .to-do > input:hover ~ .custom-checkbox{\n    transform: scale(1.05);\n}\n\n.to-do > .custom-checkbox::after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n\n.to-do > input:checked ~ .custom-checkbox::after{\n    content: \"\";\n    display: block;\n    left: 5px;\n    width: 5px;\n    height: 10px;\n    border: solid var(--titleColor);\n    border-width: 0px 3px 3px 0px;\n    transform: rotate(45deg);\n}\n\n.to-do-item > .edit-to-do{\n    flex-basis: 20%;\n    display: grid;\n    grid-template-columns: 40% 40%;\n    justify-content: center;\n    gap: 5px;\n}\n\n.to-do-item > .edit-to-do > button,\n.to-do-grid-item > .edit-to-do > button{\n    border: none;\n    outline: none;\n    background-color: transparent;\n    cursor: pointer;\n}\n\n.to-do-item > .edit-to-do > button i,\n.to-do-grid-item > .edit-to-do > button i{\n    font-size: 22px;\n    color: var(--textColor);\n    transition: color 400ms, opacity 400ms;\n}\n\n.to-do-item > .edit-to-do > .delete:hover i,\n.to-do-item > .edit-to-do > .delete:focus i,\n.to-do-grid-item > .edit-to-do > .delete:hover i,\n.to-do-grid-item > .edit-to-do > .delete:focus i{\n    opacity: 1;\n    color: rgba(255, 0, 0, 0.664);\n}\n\n.to-do-item > .edit-to-do > .edit:hover i,\n.to-do-item > .edit-to-do > .edit:focus i,\n.to-do-grid-item > .edit-to-do > .edit:hover i,\n.to-do-grid-item > .edit-to-do > .edit:focus i{\n    opacity: 1;\n    color: #7c41c5a6;\n}\n\n/*==========Todos Grid Component==========*/\n\n#to-dos-grid-wrapper{\n    background-color: #ffffff;\n    box-shadow:\n        0 0.6px 3.4px rgba(0, 0, 0, 0.022),\n        0 1.5px 8.7px rgba(0, 0, 0, 0.031),\n        0 3px 17.7px rgba(0, 0, 0, 0.039),\n        0 6px 36.5px rgba(0, 0, 0, 0.048),\n        0 16px 100px rgba(0, 0, 0, 0.07);\n    padding: 40px 20px;\n    min-height: 400px; \n    display: grid;\n    justify-content: center;\n    align-items: baseline;\n    grid-template-columns: 85%;\n    grid-template-rows: min-content;\n    gap: 20px;\n}\n\n.to-do-grid-item{\n    position: relative;\n    min-height: 130px;\n    border-radius: 5px;\n    box-shadow:\n        0 0.1px 6.2px rgba(0, 0, 0, 0.034),\n        0 0.2px 8.4px rgba(0, 0, 0, 0.044),\n        0 0.7px 9.3px rgba(0, 0, 0, 0.053),\n        0 2px 6px rgba(0, 0, 0, 0.08);  \n    border: 1px solid #b2b2b28f; \n    background-color: #f9f9f9; \n    transition: background 400ms, box-shadow 400ms;\n}\n\n.to-do-grid-done{\n    box-shadow:\n        0 0.1px 6.2px rgba(0, 0, 0, 0.034),\n        0 0.2px 8.4px rgba(0, 0, 0, 0.044),\n        0 0.7px 9.3px rgba(0, 0, 0, 0.053),\n        0 1px 4px rgba(0, 0, 0, 0.08);  \n    border: 1px solid #b2b2b28f; \n    background-color: #fefefe;\n    transition: background 400ms, box-shadow 400ms;\n}\n\n.to-do-grid-item > .to-do{\n    position: relative;\n    color: var(--textColor);\n    padding-top: 20px;\n}\n\n\n.to-do-grid-item > .to-do> input,\n.to-do-grid-item > .to-do > .custom-checkbox{\n    position: absolute;\n    top: -7px;\n    left: -7px;\n    border-radius: 50%;\n}\n\n.to-do-grid-item .to-do > input:checked ~ .custom-checkbox::after{\n    content: \"\";\n    display: block;\n    top: 1px;\n    left: 5px;\n    width: 5px;\n    height: 10px;\n    border: solid var(--titleColor);\n    border-width: 0px 3px 3px 0px;\n    transform: rotate(45deg);\n}\n\n.to-do-grid-item > .to-do > .to-do-text{\n    margin-top: 5px;\n    padding: 5px;\n}\n\n.to-do-grid-item > .to-do > .to-do-text::before{\n    content: \"\";\n    display: block;\n    width: 100%;\n    height: 3px;\n    border-radius: 5px;\n    border: none;\n    opacity: 0.2;\n    background-color: var(--primaryColor);\n    transition: background 400ms;\n}\n\n.to-do-grid-item .to-do > input:checked ~ .to-do-text::before{\n    background-color: var(--secondaryColor);\n}\n\n.to-do-grid-item > .edit-to-do{\n    position: absolute;\n    top: 3px;\n    right: 3px;\n    display: grid;\n    grid-template-columns: 50% 50%;\n    column-gap: 2px;\n}\n\n.to-do-grid-item > .edit-to-do > button i{\n    font-size: 20px;\n}\n\n.to-do-grid-item > .edit-to-do > button i{\n    opacity: 0.5;\n}\n\n/*==========No-Todos component==========*/\n\n#no-to-dos-wrapper{\n    background-color: #ffffff;\n    box-shadow:\n        0 0.6px 3.4px rgba(0, 0, 0, 0.022),\n        0 1.5px 8.7px rgba(0, 0, 0, 0.031),\n        0 3px 17.7px rgba(0, 0, 0, 0.039),\n        0 6px 36.5px rgba(0, 0, 0, 0.048),\n        0 16px 100px rgba(0, 0, 0, 0.07);\n    padding: 40px 20px;\n    min-height: 400px; \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n}\n\n.hero-no-todo{\n    flex-basis: 80%;\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    justify-content: center;\n\n}\n\n.hero-title{\n    flex-basis: 100%;\n    font-size: 22px;\n    color: var(--secondaryColor);\n    text-align: center;\n    animation: new-task-text 3s infinite ease-in-out;\n}\n\n.hero-arrow{\n    flex-basis: 100%;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.arrow{\n    position: absolute;\n    width: 25px;\n    height: 25px;\n    border: 6px solid;\n    border-radius: 0px 0px 4px 0px;\n    border-color: transparent var(--textColor) var(--textColor) transparent;\n    transform: rotate(45deg);\n    top: 0;\n    animation: main-arrow 3s infinite ease-in-out;\n}\n\n\n/*==========Arrow animations==========*/\n\n@keyframes new-task-text {\n    0%{\n        opacity: 0.80;\n        \n    }\n    50%{\n        opacity: 1;\n    }\n    100%{\n        opacity: 0.80;\n    }\n}\n\n@keyframes main-arrow {\n    0%{\n        opacity: 0;\n        top: 0;\n    }\n    50%{\n        opacity: 0.40;\n        top: 15px;\n    }\n    100%{\n        opacity: 0;\n        top: 0;\n    }\n}\n\n/*==========Create Task==========*/\n\n\n#create-task{\n    position: relative;\n    width: 100%;\n    height: 40px;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n}\n\n.new-task{\n    position: absolute;\n    top: -20px;\n    width: 100px;\n    height: 40px;\n    border: none;\n    outline: none;\n    border-radius: 10px;\n    background-color: var(--primaryColor);\n    color: var(--titleColor);\n    font-weight: bolder;\n    font-size: 16px;\n    line-height: 40px;\n    transition: opacity 400ms;\n}\n\n.new-task > i {\n    transition: color 400ms;\n}\n\n.new-task:hover > i ,\n.new-task:focus > i {\n    color: var(--secondaryColor);\n}\n\n.new-task:hover,\n.new-task:focus{\n    opacity: 0.85;\n}\n\n/*==========Modal New todo==========*/\n\n.todo-modal{\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    width: 100%;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.70);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* animation: fadeIn 400ms ease-in; */\n}\n\n.modal-wrapper{\n    position: relative;\n    background-color: white;\n    flex-basis: 90%;\n    height: 200px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.close-modal{\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    border: none;\n    outline: none;\n    background-color: transparent;\n}\n\n.close-modal > i,\n.add-todo > i{\n    font-size: 30px;\n    transition: color 400ms;\n}\n\n.close-modal:hover > i,\n    .close-modal:focus > i{\n    color: rgba(255, 0, 0, 0.664);\n}\n\n.modal-wrapper > input[type=\"text\"],\n.add-todo{\n    height: 40px;\n    outline: none;\n    border: 1px solid var(--primaryColor);\n}\n\n.modal-wrapper > input[type=\"text\"]{\n    flex-basis: 70%;\n    border-right: none;\n    transition: border 400ms;\n    padding-left: 10px;\n    color: var(--textColor);\n\n}\n\n.modal-wrapper > input[type=\"text\"]:hover,\n.modal-wrapper > input[type=\"text\"]:focus{\n    border-color: var(--secondaryColor);\n}\n\n.add-todo{\n    flex-basis: 15%;\n    border-left: none;\n    background-color: var(--primaryColor);\n}\n\n.add-todo > i{\n    display: block;\n    color: var(--titleColor);\n}\n\n.add-todo:hover > i,\n.add-todo:focus > i{\n    color: var(--secondaryColor);\n}\n\n/*==========Footer Component==========*/\n\nfooter{\n    position: relative;\n    bottom: 0px;\n    height: 60px;\n    margin-top: 30px;\n    padding-bottom: 30px;\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    justify-content: center;\n\n}\n\nfooter div span{\n    font-size: 14px;\n    color: var(--textColor);\n}\n\n\n/*==========General Animations==========*/\n\n.fading-in{\n    animation: fadeIn 400ms ease-in;\n}\n\n.fading-out{\n    animation: fadeOut 400ms ease-out;\n}\n\n.slide-out{\n    animation: slideOut 400ms ease-out;\n}\n\n@keyframes fadeIn{\n    from{\n        opacity: 0;\n    }\n    to{\n        opacity: 1;\n    }\n\n}\n\n@keyframes fadeOut{\n    from{\n        opacity: 1;\n    }\n    to{\n        opacity: 0;\n    }\n\n}\n\n@keyframes slideOut{\n    from{\n        transform: translateX(0px);\n        opacity: 1;\n    }\n    to{\n        transform: translateX(-45px);\n        opacity: 0;\n    }\n}\n\n/*==========Responsive Design-==========\n    -Mobile first design >450px\n    -Screen size: 450px, 576px, 768px and 992px\n*/\n\n/*==========mobile size for big screen-==========*/\n@media only screen and (min-width: 450px){\n\n    header #view-toggle{\n        flex-basis: 22%;\n    }\n    \n    header #title{\n        flex-basis: 56%;\n    }\n    \n    .custom-select{\n        flex-basis: 22%;\n    }\n\n    .to-do-item > .to-do{\n        flex-basis: 83%;\n    }\n    \n    .to-do-item > .edit-to-do{\n        flex-basis: 17%;\n\n    }\n\n    #to-dos-grid-wrapper{\n        grid-template-columns: repeat(2, 50%);\n    }\n\n}\n\n/*==========mobile size for big screen-==========*/\n\n@media only screen and (min-width: 576px){\n    \n    #container{\n        width: 95%;\n    }\n\n    header{\n        margin-top: 30px;\n    }\n\n    header #view-toggle{\n        flex-basis: 20%;\n    }\n    \n    header #title{\n        flex-basis: 60%;\n    }\n    \n    .custom-select{\n        flex-basis: 20%;\n    }\n\n    .to-do-item > .to-do{\n        flex-basis: 85%;\n    }\n    \n    .to-do-item > .edit-to-do{\n        flex-basis: 15%;\n\n    }\n\n    .new-task{\n        width: 110px;\n    }\n\n    .modal-wrapper{\n        flex-basis: 80%;\n    }\n\n}\n\n/*==========Tablet size-==========*/\n\n@media only screen and (min-width: 768px){\n\n    #container{\n        width: 90%;\n    }\n\n    header #view-toggle{\n        flex-basis: 17%;\n    }\n    \n    header #title{\n        flex-basis: 66%;\n    }\n    \n    .custom-select{\n        flex-basis: 17%;\n    }\n\n    #to-dos-wrapper{\n        margin-top: 30px;\n        padding: 40px 30px;\n    }\n\n    #to-dos-grid-wrapper{\n        margin-top: 30px;\n        grid-template-columns: repeat(3, 30%);\n    }\n\n    \n    #no-to-dos-wrapper{\n        margin-top: 30px;\n        padding: 40px 40px;\n    }\n\n    .to-do-item > .to-do{\n        flex-basis: 90%;\n    }\n    \n    .to-do-item > .edit-to-do{\n        flex-basis: 10%;\n\n    }\n\n    .new-task{\n        width: 115px;\n    }\n\n    .modal-wrapper{\n        flex-basis: 60%;\n    }\n\n}\n\n/*==========Desktop size-==========*/\n\n@media only screen and (min-width: 992px){\n\n    #container{\n        width: 80%;\n    }\n\n    header #view-toggle{\n        flex-basis: 12%;\n    }\n    \n    header #title{\n        flex-basis: 76%;\n    }\n    \n    .custom-select{\n        flex-basis: 12%;\n    }\n\n    #to-dos-wrapper{\n        margin-top: 30px;\n        padding: 40px 40px;\n    }\n\n    #to-dos-grid-wrapper{\n        grid-template-columns: repeat(4, 23%);\n    }\n\n    .to-do-item > .to-do{\n        flex-basis: 90%;\n    }\n    \n    .to-do-item > .edit-to-do{\n        flex-basis: 10%;\n\n    }\n\n    .new-task{\n        width: 120px;\n    }\n\n    .modal-wrapper{\n        flex-basis: 40%;\n    }\n\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Usuario\Documents\Portfolio Projects\ToDoApp\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map