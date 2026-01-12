const examples = {
  "The small child saw the dog": {
    constituency: `
(S
  (NP (Det The) (Adj small) (N child))
  (VP (V saw)
      (NP (Det the) (N dog)))
)
    `,
    dependency: `
saw(ROOT)
 ├─ child (nsubj)
 │   ├─ The (det)
 │   └─ small (amod)
 └─ dog (obj)
     └─ the (det)
    `,
    annotation: `
Token   POS   Head   Relation
--------------------------------
The     DET   child  det
small   ADJ   child  amod
child   NOUN  saw    nsubj
saw     VERB  ROOT   root
the     DET   dog    det
dog     NOUN  saw    obj
    `,
    treebank: {
      tokens: ["The","small","child","saw","the","dog"],
      pos: ["DET","ADJ","NOUN","VERB","DET","NOUN"],
      heads: [3,3,4,0,6,4],
      relations: ["det","amod","nsubj","root","det","obj"]
    }
  },

  "She gave the book to the teacher": {
    constituency: `
(S
  (NP She)
  (VP gave
    (NP the book)
    (PP to
      (NP the teacher))))
)
    `,
    dependency: `
gave(ROOT)
 ├─ She (nsubj)
 ├─ book (obj)
 │   └─ the (det)
 └─ teacher (obl)
     ├─ to (case)
     └─ the (det)
    `,
    annotation: `
Token   POS   Head   Relation
--------------------------------
She     PRON  gave   nsubj
gave    VERB  ROOT   root
the     DET   book   det
book    NOUN  gave   obj
to      ADP   teacher case
the     DET   teacher det
teacher NOUN  gave   obl
    `,
    treebank: { note: "Structure simplified for illustration" }
  }
};

function loadExample() {
  const s = document.getElementById("examples").value;
  document.getElementById("sentence").value = s;
  showConstituency();
}

function showConstituency() {
  display("constituency");
}

function showDependency() {
  display("dependency");
}

function showAnnotation() {
  display("annotation");
}

function showTreebank() {
  const s = document.getElementById("sentence").value;
  document.getElementById("display").textContent =
    JSON.stringify(examples[s].treebank, null, 2);
}

function display(type) {
  const s = document.getElementById("sentence").value;
  document.getElementById("display").textContent =
    examples[s][type].trim();
}

loadExample();
