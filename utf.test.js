

function getWasmModule() {
    return fetch("utf8_check.wasm").then(res => res.arrayBuffer()).then(buffer => WebAssembly.instantiate(buffer))
}

getWasmModule().then(mod => {

    console.log(mod);

    validate = mod.instance.exports._Z10utf8_checkPh



    
});