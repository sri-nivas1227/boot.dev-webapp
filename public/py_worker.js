importScripts('https://pyodide-cdn2.iodide.io/v0.15.0/full/pyodide.js');

// globally accessible canvas element
let canvas;

function getHash(toHash) {
  var hash = 0;
  if (toHash.length == 0) {
    return hash;
  }
  for (var i = 0; i < toHash.length; i++) {
    var char = toHash.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

addEventListener('message', async (e) => {
  await languagePluginLoader;

  if (e.data.type === 'canvas') {
    canvas = e.data.canvas;
    return;
  }
  if (canvas){
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  self.runCode = () => {
    try {
      pyodide.runPython(e.data);
    } catch (err){
      postMessage({
        error: err
      });
      return;
    }
  };

  self.writeStdOut = (stdout) => {
    stdout = stdout.split('\n');
    for (const line of stdout){
      if (!line){
        continue;
      }
      postMessage({
        message: line
      });
    }
  };


  pyodide.runPython(`
    import io, code, sys
    from js import writeStdOut, runCode
    
    class StdoutFile():
        def __init__ (self, fileObj):
            self.file = fileObj

        def write (self, s):
            writeStdOut(s)
    
    f1 = StdoutFile(io.StringIO())
    f2 = StdoutFile(io.StringIO())
    sys.stdout = f1
    sys.stderr = f2
    runCode()
  `);

  let encodedHash;
  if (canvas){
    const canvasBlob = await canvas.convertToBlob();
    const encodedImage = await canvasBlob.text();
    encodedHash = getHash(encodedImage);
    console.log('canvas hash:', encodedHash);
  }

  postMessage({
    done: true,
    encodedHash
  });
}, false);
