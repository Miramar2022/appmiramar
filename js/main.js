const url1 = 'docs/Horario General.pdf';
const url2 = 'docs/Horario Act Niños y Adolescentes.pdf';
const url3 = 'docs/Listado de Objetos perdidos.pdf';
const url4 = 'docs/Preguntas Frecuentes - Miramar 2022.pdf'
const url5 = 'docs/pdf.pdf';
const url6 = 'docs/F1008B Examen conocimientos.pdf'

var main = document.getElementById('mainpage');
var doc1 = document.getElementById('render1');
var pdfbuttons = document.getElementById('pdfbuttons');
var misc = document.getElementById('misc');

//const isMobile = navigator.userAgentData.mobile; //resolves true/false

var url;

let pdfDoc = null,
  pageNum = 1,
  pageIsRendering = false,
  pageNumIsPending = null;

var scale = 0.7,
  canvas = document.querySelector('#pdf-render'),
  ctx = canvas.getContext('2d');

// Render the page
const renderPage = num => {
  pageIsRendering = true;

  // Get page
  pdfDoc.getPage(num).then(page => {
    // Set scale
    const viewport = page.getViewport({ scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderCtx = {
      canvasContext: ctx,
      viewport
    };

    page.render(renderCtx).promise.then(() => {
      pageIsRendering = false;

      if (pageNumIsPending !== null) {
        renderPage(pageNumIsPending);
        pageNumIsPending = null;
      }
    });

    // Output current page
    document.querySelector('#page-num').textContent = num;
  });
};

// Check for pages rendering
const queueRenderPage = num => {
  if (pageIsRendering) {
    pageNumIsPending = num;
  } else {
    renderPage(num);
  }
};

// Show Prev Page
const showPrevPage = () => {
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  queueRenderPage(pageNum);
};

// Show Next Page
const showNextPage = () => {
  if (pageNum >= pdfDoc.numPages) {
    return;
  }
  pageNum++;
  queueRenderPage(pageNum);
};

function mainshow(){
  main.hidden = false;
  doc1.hidden = true;
  pdfbuttons.hidden = true;
  misc.hidden = true;
}
function pdf1(){
  
  main.hidden = true;
  doc1.hidden = false;
  pdfbuttons.hidden = true;
  misc.hidden = true;
  url = url1;
  
  // Get Document
  pdfjsLib
  .getDocument(url)
  .promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;

    document.querySelector('#page-count').textContent = pdfDoc.numPages;

    renderPage(pageNum);
  })
  .catch(err => {
    // Display error
    const div = document.createElement('div');
    div.className = 'error';
    div.appendChild(document.createTextNode(err.message));
    document.querySelector('body').insertBefore(div, canvas);
    // Remove top bar
    document.querySelector('.top-bar').style.display = 'none';
  });

  // Button Events
  document.querySelector('#prev-page').addEventListener('click', showPrevPage);
  document.querySelector('#next-page').addEventListener('click', showNextPage);
}

function pdf2(){
  main.hidden = true;
  misc.hidden = true;
  doc1.hidden = false;
  pdfbuttons.hidden = true;

  url = url2;
  
  // Get Document
  pdfjsLib
  .getDocument(url)
  .promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;

    document.querySelector('#page-count').textContent = pdfDoc.numPages;

    renderPage(pageNum);
  })
  .catch(err => {
    // Display error
    const div = document.createElement('div');
    div.className = 'error';
    div.appendChild(document.createTextNode(err.message));
    document.querySelector('body').insertBefore(div, canvas);
    // Remove top bar
    document.querySelector('.top-bar').style.display = 'none';
  });

  // Button Events
  document.querySelector('#prev-page').addEventListener('click', showPrevPage);
  document.querySelector('#next-page').addEventListener('click', showNextPage);
}
function pdf3(){
  misc.hidden = true;

  
  main.hidden = true;
  doc1.hidden = false;
  pdfbuttons.hidden = true;

  url = url3;
  
  // Get Document
  pdfjsLib
  .getDocument(url)
  .promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;

    document.querySelector('#page-count').textContent = pdfDoc.numPages;

    renderPage(pageNum);
  })
  .catch(err => {
    // Display error
    const div = document.createElement('div');
    div.className = 'error';
    div.appendChild(document.createTextNode(err.message));
    document.querySelector('body').insertBefore(div, canvas);
    // Remove top bar
    document.querySelector('.top-bar').style.display = 'none';
  });

  // Button Events
  document.querySelector('#prev-page').addEventListener('click', showPrevPage);
  document.querySelector('#next-page').addEventListener('click', showNextPage);
}
function pdf4(){
  misc.hidden = true;

  
  main.hidden = true;
  doc1.hidden = false;
  pdfbuttons.hidden = false;

  url = url4;
  
  // Get Document
  pdfjsLib
  .getDocument(url)
  .promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;

    document.querySelector('#page-count').textContent = pdfDoc.numPages;

    renderPage(pageNum);
  })
  .catch(err => {
    // Display error
    const div = document.createElement('div');
    div.className = 'error';
    div.appendChild(document.createTextNode(err.message));
    document.querySelector('body').insertBefore(div, canvas);
    // Remove top bar
    document.querySelector('.top-bar').style.display = 'none';
  });

  // Button Events
  document.querySelector('#prev-page').addEventListener('click', showPrevPage);
  document.querySelector('#next-page').addEventListener('click', showNextPage);
}
function miscshow(){
  misc.hidden = false;
  
  main.hidden = true;
  doc1.hidden = true;
  

}
function pdfmisc(){
  var selection = document.getElementById("selector").value;
  var doc1 = document.getElementById('render1');

  switch(selection){
    case "def":
      doc1.hidden = true;
      break
    case "1":
      doc1.hidden = false;
      url = url5;
      // Get Document
      pdfjsLib
      .getDocument(url)
      .promise.then(pdfDoc_ => {
        pdfDoc = pdfDoc_;

        document.querySelector('#page-count').textContent = pdfDoc.numPages;

        renderPage(pageNum);
      })
      .catch(err => {
        // Display error
        const div = document.createElement('div');
        div.className = 'error';
        div.appendChild(document.createTextNode(err.message));
        document.querySelector('body').insertBefore(div, canvas);
        // Remove top bar
        document.querySelector('.top-bar').style.display = 'none';
      });

      // Button Events
      document.querySelector('#prev-page').addEventListener('click', showPrevPage);
      document.querySelector('#next-page').addEventListener('click', showNextPage);
      break
    case "2":
      doc1.hidden = false;
      url = url6
      // Get Document
      pdfjsLib
      .getDocument(url)
      .promise.then(pdfDoc_ => {
        pdfDoc = pdfDoc_;

        document.querySelector('#page-count').textContent = pdfDoc.numPages;

        renderPage(pageNum);
      })
      .catch(err => {
        // Display error
        const div = document.createElement('div');
        div.className = 'error';
        div.appendChild(document.createTextNode(err.message));
        document.querySelector('body').insertBefore(div, canvas);
        // Remove top bar
        document.querySelector('.top-bar').style.display = 'none';
      });

      // Button Events
      document.querySelector('#prev-page').addEventListener('click', showPrevPage);
      document.querySelector('#next-page').addEventListener('click', showNextPage);
      url = url6;
      break
  }

  
}
function pdfmob(){
  var selection = document.getElementById("selector1").value;
  switch(selection){
    case "def":
      doc1.hidden = true
      main.hidden = false
      break
    case "1":
      pdf1()
      break
    case "2":
      pdf2()
      break
    case "3":
      pdf3()
      break
    case "4":
      pdf4()
      break
    case "5":
      miscshow()
      break
  }

  
}