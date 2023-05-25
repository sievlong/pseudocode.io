function pseudocode_to_python(pseudocode) {
    let replacements = [
      ["BEGIN", ""],
      ["OUTPUT", "print"],
      ["PRINT", "print"],
      ["DISPLAY", "print"],
      ["SHOW", "print"],
      ["INPUT", "input"],
      ["READ", "input"],
      ["OBTAIN", "input"],
      ["GET", "input"],
      ["ENDIF", ""],
      ["IF", "if"],
      ["THEN", ":"],
      ["ELSE", "else:"],
      ["FOR", "for"],
      ["ENDWHILE", ""],
      ["WHILE", "while"],
      ["DO", ":"],
      ["REPEAT", "while True:\n"],
      ["UNTIL", " \n    if not "],
      ["EQUAL", "="],
      ["equal", "="],
      ["END", ""]
    ];
  
    let python_code = pseudocode;
    for (let i = 0; i < replacements.length; i++) {
      let keyword = replacements[i][0];
      let replacement = replacements[i][1];
      let regex = new RegExp(keyword, "g");
      python_code = python_code.replace(regex, replacement);
    }
  
    return python_code;
  }
  
  function convert_to_python() {
    let pseudocode = document.getElementById("pseudocode").value;
    let pythonCode = pseudocode_to_python(pseudocode);
    document.getElementById("pythonCode").value = pythonCode;
  }
  