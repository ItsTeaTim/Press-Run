const questionBank = {
  "File Setup": [
    {
      question: "Which file setup is best for commercial offset printing?",
      correctAnswer: "CMYK color, 300 DPI, with bleed",
      choices: [
        "RGB color, 72 DPI, no bleed",
        "CMYK color, 300 DPI, with bleed",
        "RGB color, 150 DPI, transparent background",
        "CMYK color, 72 DPI, no margins"
      ],
      explanation: "Commercial print files should usually be prepared in CMYK at 300 DPI with bleed."
    },
    {
      question: "Which resolution is typically best for high-quality printed images?",
      correctAnswer: "300 DPI",
      choices: [
        "72 DPI",
        "96 DPI",
        "150 DPI",
        "300 DPI"
      ],
      explanation: "300 DPI is the standard resolution for sharp, professional print output."
    },
    {
      question: "Why is bleed added to a print file?",
      correctAnswer: "To allow color or images to extend past the trim edge",
      choices: [
        "To make the file load faster",
        "To allow color or images to extend past the trim edge",
        "To improve screen brightness",
        "To reduce ink usage"
      ],
      explanation: "Bleed prevents unwanted white edges after trimming."
    },
    {
      question: "Which color mode is typically used for digital screens instead of print?",
      correctAnswer: "RGB",
      choices: [
        "CMYK",
        "RGB",
        "Grayscale",
        "Pantone"
      ],
      explanation: "RGB is used for screens, while CMYK is used for print."
    },
    {
      question: "What happens if you forget to include bleed in your design?",
      correctAnswer: "White edges may appear after printing",
      choices: [
        "The file will not open",
        "White edges may appear after printing",
        "Colors will print brighter",
        "The image resolution increases"
      ],
      explanation: "Without bleed, the print may have unwanted white edges."
    }
  ],

  "Prepress": [
    {
      question: "What is the main purpose of prepress?",
      correctAnswer: "To check and prepare the file before printing",
      choices: [
        "To fold and bind the printed sheets",
        "To check and prepare the file before printing",
        "To deliver the final job to the client",
        "To refill the press with ink"
      ],
      explanation: "Prepress is where files are checked, corrected, and prepared before production."
    },
    {
      question: "Which task is most likely part of prepress?",
      correctAnswer: "Proofing the file for errors",
      choices: [
        "Proofing the file for errors",
        "Packaging the final order",
        "Cutting folded brochures",
        "Loading paper into shipping boxes"
      ],
      explanation: "Prepress often includes proofing, preflight checks, and preparing files for plate creation."
    },
    {
      question: "What is a proof used for in printing?",
      correctAnswer: "To review how the printed piece should look before final production",
      choices: [
        "To test how strong the paper is",
        "To review how the printed piece should look before final production",
        "To ship samples to customers",
        "To calculate delivery cost"
      ],
      explanation: "A proof lets designers and printers catch issues before the full press run begins."
    },
    {
      question: "What is a preflight check?",
      correctAnswer: "A process that scans files for potential print issues",
      choices: [
       "A final packaging step",
       "A process that scans files for potential print issues",
       "A method of printing test pages",
       "A way to bind pages together"
     ],
      explanation: "Preflight checks ensure files are ready for printing."
    },
    { 
      question: "Why are fonts often outlined or embedded before printing?",
      correctAnswer: "To prevent font substitution issues",
      choices: [
        "To reduce file size",
       "To prevent font substitution issues",
        "To increase resolution",
        "To change colors automatically"
     ],
     explanation: "Embedding or outlining ensures fonts appear correctly."
    }
  ],

  "Plate Making": [
    {
      question: "In offset printing, why are separate plates created for CMYK printing?",
      correctAnswer: "Each plate prints a different color layer",
      choices: [
        "One plate is used for paper alignment only",
        "Each plate prints a different color layer",
        "Plates are only needed for black ink",
        "Each page of the document needs its own press"
      ],
      explanation: "Offset printing separates the image into cyan, magenta, yellow, and black layers, each with its own plate."
    },
    {
      question: "How many plates are normally needed for a standard CMYK print job?",
      correctAnswer: "Four",
      choices: [
        "One",
        "Two",
        "Four",
        "Six"
      ],
      explanation: "Standard CMYK printing uses four plates: cyan, magenta, yellow, and black."
    },
    {
      question: "What does a printing plate carry in offset printing?",
      correctAnswer: "One separated image layer for printing",
      choices: [
        "The finished folded brochure",
        "A shipping label",
        "One separated image layer for printing",
        "A digital color profile only"
      ],
      explanation: "Each plate transfers one separated part of the image into the printing process."
    },
    {
      question: "What does CMYK separation do?",
      correctAnswer: "Breaks an image into four color layers",
      choices: [
        "Combines colors into one layer",
        "Breaks an image into four color layers",
        "Removes unwanted colors",
        "Increases brightness"
      ],
      explanation: "Each color gets its own plate in CMYK printing."
    },
    {
      question: "Why must plates be aligned precisely?",
      correctAnswer: "To ensure colors line up correctly",
      choices: [
        "To reduce ink usage",
        "To ensure colors line up correctly",
        "To speed up printing",
        "To reduce paper waste"
      ],
      explanation: "Misalignment causes blurry or offset colors."
    }
  ],

  "Ink Setup": [
    {
      question: "What do the letters CMYK stand for?",
      correctAnswer: "Cyan, Magenta, Yellow, Key",
      choices: [
        "Cyan, Magenta, Yellow, Key",
        "Color, Material, Yield, Kernel",
        "Cyan, Mono, Yellow, Kinetic",
        "Chrome, Magenta, Yellow, Keyline"
      ],
      explanation: "CMYK stands for Cyan, Magenta, Yellow, and Key, which is black."
    },
    {
      question: "Which ink set is standard in full-color offset printing?",
      correctAnswer: "CMYK",
      choices: [
        "RGB",
        "CMYK",
        "HEX",
        "LAB"
      ],
      explanation: "Offset printing usually uses CMYK process inks for full-color work."
    },
    {
      question: "Why is ink setup important before a press run begins?",
      correctAnswer: "It helps ensure accurate color reproduction",
      choices: [
        "It helps ensure accurate color reproduction",
        "It changes the paper size",
        "It binds the pages together",
        "It trims the final sheets"
      ],
      explanation: "Ink balance and setup affect how accurately the printed colors match expectations."
    },
    {
      question: "What is color calibration used for?",
      correctAnswer: "Ensuring colors print accurately",
      choices: [
        "Reducing ink cost",
        "Ensuring colors print accurately",
        "Drying ink faster",
        "Making prints glossy"
      ],
      explanation: "Calibration ensures consistency between design and print."
    },
    {
      question: "Why is black (K) used instead of mixing CMY?",
      correctAnswer: "To produce deeper blacks and save ink",
      choices: [
        "To reduce file size",
        "To produce deeper blacks and save ink",
        "To increase brightness",
        "To avoid using cyan"
      ],
      explanation: "Using black ink improves quality and efficiency."
    }
  ],

  "Offset Press": [
    {
      question: "What is the correct image transfer order in offset printing?",
      correctAnswer: "Plate to blanket to paper",
      choices: [
        "Plate to paper to blanket",
        "Blanket to paper to plate",
        "Plate to blanket to paper",
        "Paper to plate to blanket"
      ],
      explanation: "In offset printing, the image transfers from the plate to the blanket, then to the paper."
    },
    {
      question: "Why is it called offset printing?",
      correctAnswer: "Because the image is transferred indirectly using a blanket cylinder",
      choices: [
        "Because the paper moves sideways",
        "Because the image is transferred indirectly using a blanket cylinder",
        "Because the plates are printed off-center",
        "Because the ink is applied after trimming"
      ],
      explanation: "The image is not printed directly from the plate to the paper; it is offset through a blanket."
    },
    {
      question: "What part of the press transfers the image from the plate to the paper indirectly?",
      correctAnswer: "The blanket cylinder",
      choices: [
        "The blanket cylinder",
        "The paper tray",
        "The binder",
        "The cutter"
      ],
      explanation: "The blanket cylinder receives the image from the plate and transfers it onto the paper."
    },
    {
      question: "What is the purpose of the blanket cylinder?",
      correctAnswer: "To transfer the image from plate to paper",
      choices: [
        "To hold the paper in place",
        "To transfer the image from plate to paper",
        "To apply ink directly",
        "To cut the paper"
      ],
      explanation: "The blanket carries the image from the plate to the paper."
    },
    {
      question: "Why is offset printing good for large runs?",
      correctAnswer: "It becomes more cost-efficient at scale",
      choices: [
        "It uses less paper",
        "It becomes more cost-efficient at scale",
        "It prints faster for small jobs",
        "It requires fewer plates"
      ],
      explanation: "Setup costs are high, but large runs reduce cost per unit."
    }
  ],

  "Finishing": [
    {
      question: "Which of these is considered a finishing process after printing?",
      correctAnswer: "Trimming and folding",
      choices: [
        "Converting RGB to CMYK",
        "Creating printing plates",
        "Trimming and folding",
        "Adjusting ink rollers"
      ],
      explanation: "Finishing includes post-print steps like trimming, folding, binding, and packaging."
    },
    {
      question: "Which task usually happens during finishing?",
      correctAnswer: "Binding printed pages together",
      choices: [
        "Binding printed pages together",
        "Separating colors into CMYK",
        "Checking monitor brightness",
        "Creating plate files"
      ],
      explanation: "Binding is a finishing process that happens after the sheets are printed."
    },
    {
      question: "Why is trimming important in finishing?",
      correctAnswer: "It cuts the printed piece to its final size",
      choices: [
        "It cuts the printed piece to its final size",
        "It adds more ink density",
        "It changes RGB into CMYK",
        "It creates the printing plates"
      ],
      explanation: "Trimming removes excess paper and brings the printed piece to its intended final dimensions."
    },
    {
      question: "What is folding used for in finishing?",
      correctAnswer: "To arrange pages into a usable format",
      choices: [
        "To apply ink",
        "To arrange pages into a usable format",
        "To calibrate colors",
        "To create plates"
      ],
      explanation: "Folding prepares printed sheets for final use."
    },
    {
      question: "What is binding?",
      correctAnswer: "Joining printed pages together",
      choices: [
        "Cutting paper edges",
        "Joining printed pages together",
        "Adding ink layers",
        "Aligning plates"
      ],
      explanation: "Binding combines pages into books, magazines, etc."
    }
  ]
};