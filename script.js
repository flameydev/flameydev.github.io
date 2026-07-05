const copyBtn = document.getElementById("copyBtn");

function copy(){
    navigator.clipboard.writeText(`meflamey.dev`);
    copyBtn.textContent = `Copied!`;
    setTimeout(() => {
        copyBtn.textContent = `Copy`;
    }, 1500);
}

copyBtn.onclick = copy