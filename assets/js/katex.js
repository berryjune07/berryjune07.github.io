function render_KaTeX() {
    renderMathInElement(document.body, {
        delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\(', right: '\\)', display: false},
            {left: '\\[', right: '\\]', display: true}
        ],
        throwOnError : false,
        trust: (context) => ['\\htmlId', '\\href'].includes(context.command),
        macros: {
            /* References */
            "\\eqref": "\\href{###1}{(\\text{#1})}",
            "\\ref": "\\href{###1}{\\text{#1}}",
            "\\label": "\\htmlId{#1}{}",

            /* Environments */
            "\\nl": "\\newline",
            "\\nt": "\\nl \\ \\nl",
            "\\dps": "\\displaystyle",
            "\\b": "\\bold",
            "\\bs": "\\boldsymbol",

            /* Mathematics */
            "\\dsum": "\\dps\\sum",
            "\\d": "\\mathrm{d}",
            "\\dd": "\\,\\d{#1}",
            "\\abs": "\\left\| #1 \\right\|",
            "\\norm": "\\lVert #1 \\rVert",
            "\\card": "\\abs{#1}",
            "\\span": "\\mathrm{span}",
            "\\cross": "\\times",
            "\\supp": "\\mathrm{supp}",
            /* -- derivatives */
            "\\odv": "\\frac{\\d #1}{\\d #2}",
            "\\odvi": "\\d #1/\\d #2",
            "\\odvn": "\\frac{\\d^{#1} #2}{\\d #3^{#1}}",
            "\\odvni": "\\d^{#1} #2/\\d #3^{#1}",
            "\\pdv": "\\frac{\\partial #1}{\\partial #2}",
            "\\pdvi": "\\partial #1/\\partial #2",
            "\\pdvn": "\\frac{\\partial^{#1} #2}{\\partial #3^{#1}}",
            "\\pdvni": "\\partial^{#1} #2/\\partial #3^{#1}",
            "\\pdvs": "\\frac{\\partial^2 #1}{\\partial #2 \\partial #3}",
            "\\pdvsi": "\\partial^2 #1/\\partial #2 \\partial #3",
            "\\fdv": "\\frac{\\delta #1}{\\delta #2}",
            "\\fdvi": "\\delta #1/\\delta #2",
            /* --vector calculus */
            "\\grad": "\\nabla",
            "\\curl": "\\nabla \\cross",
            "\\div": "\\nabla \\cdot",
            "\\laplacian": "\\nabla^2",

            /* Physics */
            "\\hamd": "\\mathcal{H}",
            "\\lagd": "\\mathcal{L}",
            /* -- Quantum mechanics */
            "\\brkt": "\\braket{#1\|#2}",
            "\\Brkt": "\\Braket{#1\|#2}",
            "\\brktop": "\\braket{#1\|#2\|#3}",
            "\\Brktop": "\\Braket{#1\|#2\|#3}",
            "\\expct": "\\langle #1 \\rangle",
            "\\Expct": "\\left\\langle #1 \\right\\rangle",
            "\\comm": "[#1,#2]",
            "\\Comm": "\\left[ #1,#2 \\right]",
            "\\acomm": "\\\{#1,#2\\\}",
            "\\Acomm": "\\left\\\{ #1,#2 \\right\\\}",

            /* Constants */
            "\\vpmt": "\\varepsilon_0",
            "\\RydE": "\\mathcal{R}_{\\text{y}}",

            /* Units */
            "\\eV": "\\text{eV}"
        }
    });
}