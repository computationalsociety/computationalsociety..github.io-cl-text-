let embeddings = {};

// Load embeddings
fetch("embeddings.json")
  .then(res => res.json())
  .then(data => embeddings = data);

function cosineSimilarity(v1, v2) {
  "king": [0.51, 0.12, 0.33, 0.44, 0.22, 0.18, 0.39, 0.27, 0.41, 0.30],
  "queen": [0.49, 0.10, 0.35, 0.46, 0.21, 0.17, 0.38, 0.26, 0.40, 0.29],
  "man": [0.61, 0.08, 0.20, 0.32, 0.25, 0.15, 0.28, 0.21, 0.34, 0.19],
  "woman": [0.59, 0.09, 0.22, 0.34, 0.24, 0.16, 0.29, 0.23, 0.33, 0.20],

  "dog": [0.11, 0.72, 0.44, 0.18, 0.09, 0.51, 0.36, 0.27, 0.14, 0.41],
  "cat": [0.12, 0.70, 0.42, 0.17, 0.10, 0.50, 0.35, 0.26, 0.15, 0.40],

  "car": [0.08, 0.22, 0.71, 0.49, 0.33, 0.12, 0.28, 0.56, 0.19, 0.34],
  "bus": [0.09, 0.21, 0.69, 0.47, 0.31, 0.13, 0.27, 0.54, 0.20, 0.35],

  "apple": [0.34, 0.18, 0.09, 0.71, 0.55, 0.22, 0.11, 0.29, 0.48, 0.17],
  "banana": [0.33, 0.19, 0.10, 0.69, 0.53, 0.23, 0.12, 0.30, 0.47, 0.18],

  "computer": [0.15, 0.29, 0.61, 0.22, 0.41, 0.58, 0.33, 0.19, 0.48, 0.51],
  "language": [0.28, 0.31, 0.19, 0.36, 0.52, 0.27, 0.44, 0.18, 0.39, 0.46],

  "city": [0.21, 0.48, 0.36, 0.55, 0.29, 0.19, 0.41, 0.32, 0.17, 0.28],
  "village": [0.19, 0.46, 0.34, 0.52, 0.27, 0.18, 0.39, 0.30, 0.16, 0.26]
}

  return dot / (Math.sqrt(n1) * Math.sqrt(n2));
}

function compare() {
  const w1 = document.getElementById("word1").value.toLowerCase();
  const w2 = document.getElementById("word2").value.toLowerCase();
  const out = document.getElementById("output");

  if (!(w1 in embeddings) || !(w2 in embeddings)) {
    out.innerHTML = "<p class='far'>One or both words not in vocabulary.</p>";
    return;
  }

  const sim = cosineSimilarity(embeddings[w1], embeddings[w2]);
  const label = sim > 0.6 ? "close" : "far";

  out.innerHTML = `
    <p>Cosine similarity: <strong>${sim.toFixed(3)}</strong></p>
    <p class="${label}">${label === "close" ? "Words are semantically close" : "Words are not very close"}</p>
    <h3>Embedding (first 10 dimensions)</h3>
    <pre>${w1}: ${embeddings[w1].slice(0,10).join(", ")}</pre>
    <pre>${w2}: ${embeddings[w2].slice(0,10).join(", ")}</pre>
  `;
}
