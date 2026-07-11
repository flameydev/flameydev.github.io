const copyBtn = document.getElementById("copyBtn");

function copy(){
    navigator.clipboard.writeText(`meflamey.dev`);
}

copyBtn.onclick = copy